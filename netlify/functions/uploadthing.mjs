import { createUploadthing, createRouteHandler, UploadThingError } from 'uploadthing/server';
import { z } from 'zod';
import { isAuthorized } from './_lib/auth.mjs';
import { getEvent, updateEvent } from './_lib/events-store.mjs';

const f = createUploadthing();

const router = {
  eventPhotos: f({ image: { maxFileSize: '16MB', maxFileCount: 20 } })
    .input(z.object({ eventId: z.string().min(1) }))
    .middleware(async ({ req, input }) => {
      if (!isAuthorized(req)) throw new UploadThingError('Unauthorized');
      const event = await getEvent(input.eventId);
      if (!event) throw new UploadThingError('Event not found');
      return { eventId: input.eventId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const photo = {
        key: file.key,
        url: file.ufsUrl,
        name: file.name,
        uploadedAt: new Date().toISOString(),
      };
      await updateEvent(metadata.eventId, (event) => {
        event.photos = [...(event.photos || []), photo];
        return event;
      });
      return { eventId: metadata.eventId, ...photo };
    }),
};

const handler = createRouteHandler({
  router,
  config: {
    token: process.env.UPLOADTHING_TOKEN,
    // `netlify dev` runs on localhost, which UploadThing's callback can't reach,
    // so in dev the SDK polls for completion instead.
    isDev: process.env.NETLIFY_DEV === 'true',
  },
});

export default (request) => handler(request);

export const config = { path: '/api/uploadthing' };
