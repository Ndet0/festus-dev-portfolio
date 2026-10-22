import { UTApi } from 'uploadthing/server';
import { isAuthorized, unauthorized } from './_lib/auth.mjs';
import {
  listEvents,
  getEvent,
  saveEvent,
  deleteEvent,
  updateEvent,
  slugify,
} from './_lib/events-store.mjs';

export default async function handler(request) {
  switch (request.method) {
    case 'GET':
      // The admin page checks its saved password with GET /api/events?verify=1.
      if (new URL(request.url).searchParams.has('verify')) {
        return isAuthorized(request) ? new Response(null, { status: 204 }) : unauthorized();
      }
      return Response.json(await listEvents(), {
        headers: { 'Cache-Control': 'public, max-age=60, stale-while-revalidate=300' },
      });
    case 'POST':
      if (!isAuthorized(request)) return unauthorized();
      return createEvent(request);
    case 'DELETE':
      if (!isAuthorized(request)) return unauthorized();
      return remove(request);
    default:
      return Response.json({ error: 'Method not allowed' }, { status: 405 });
  }
}

async function createEvent(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }
  const name = String(body.name ?? '').trim().slice(0, 120);
  const date = String(body.date ?? '').trim();
  const location = String(body.location ?? '').trim().slice(0, 120);
  if (!name || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return Response.json({ error: 'Name and a valid date are required' }, { status: 400 });
  }

  const event = {
    id: `${slugify(name)}-${Math.random().toString(36).slice(2, 7)}`,
    name,
    date,
    location,
    createdAt: new Date().toISOString(),
    photos: [],
  };
  await saveEvent(event);
  return Response.json(event, { status: 201 });
}

async function remove(request) {
  const url = new URL(request.url);
  const eventId = url.searchParams.get('eventId');
  const key = url.searchParams.get('key');
  if (!eventId) return Response.json({ error: 'eventId is required' }, { status: 400 });

  const event = await getEvent(eventId);
  if (!event) return Response.json({ error: 'Event not found' }, { status: 404 });

  const utapi = new UTApi();

  if (key) {
    // Remove one photo.
    if (!event.photos.some((p) => p.key === key)) {
      return Response.json({ error: 'Photo not found' }, { status: 404 });
    }
    await utapi.deleteFiles(key);
    const updated = await updateEvent(eventId, (e) => {
      e.photos = e.photos.filter((p) => p.key !== key);
      return e;
    });
    return Response.json(updated);
  }

  // Remove the whole event, photos included.
  if (event.photos.length) {
    await utapi.deleteFiles(event.photos.map((p) => p.key));
  }
  await deleteEvent(eventId);
  return new Response(null, { status: 204 });
}

export const config = { path: '/api/events' };
