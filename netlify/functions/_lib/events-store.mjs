import { getStore } from '@netlify/blobs';

// One blob per event, keyed by event id:
// { id, name, date, location, createdAt, photos: [{ key, url, name, uploadedAt }] }
const store = () => getStore({ name: 'events', consistency: 'strong' });

export async function listEvents() {
  const { blobs } = await store().list();
  const events = await Promise.all(blobs.map((b) => store().get(b.key, { type: 'json' })));
  return events
    .filter(Boolean)
    .sort((a, b) => (b.date || '').localeCompare(a.date || '') || b.createdAt.localeCompare(a.createdAt));
}

export function getEvent(id) {
  return store().get(id, { type: 'json' });
}

export function saveEvent(event) {
  return store().setJSON(event.id, event);
}

export function deleteEvent(id) {
  return store().delete(id);
}

// Read-modify-write with an ETag check. Several photos finish uploading at the
// same time, so without this a parallel write could drop one of them.
export async function updateEvent(id, mutate, attempts = 5) {
  for (let i = 0; i < attempts; i++) {
    const current = await store().getWithMetadata(id, { type: 'json' });
    if (!current) return null;
    const next = mutate(structuredClone(current.data));
    const { modified } = await store().setJSON(id, next, { onlyIfMatch: current.etag });
    if (modified) return next;
  }
  throw new Error(`Could not update event ${id} after ${attempts} attempts`);
}

export function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 48) || 'event';
}
