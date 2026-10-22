// Thin client for the /api/events Netlify function. Shared by the public
// Events section and the /admin upload page.
const BASE = '/api/events';

export async function fetchEvents() {
  const res = await fetch(BASE);
  if (!res.ok) throw new Error(`Failed to load events (${res.status})`);
  return res.json();
}

// Returns true if the password is accepted, false if not. Throws on network errors.
export async function verifyPassword(password) {
  const res = await fetch(`${BASE}?verify=1`, { headers: { 'x-admin-password': password } });
  if (res.status === 204) return true;
  if (res.status === 401) return false;
  throw new Error(`Unexpected response (${res.status})`);
}

export async function createEvent(password, data) {
  const res = await fetch(BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-admin-password': password },
    body: JSON.stringify(data),
  });
  return handle(res);
}

export async function deletePhoto(password, eventId, key) {
  const params = new URLSearchParams({ eventId, key });
  const res = await fetch(`${BASE}?${params}`, {
    method: 'DELETE',
    headers: { 'x-admin-password': password },
  });
  return handle(res);
}

export async function deleteEvent(password, eventId) {
  const params = new URLSearchParams({ eventId });
  const res = await fetch(`${BASE}?${params}`, {
    method: 'DELETE',
    headers: { 'x-admin-password': password },
  });
  return handle(res);
}

async function handle(res) {
  if (res.status === 204) return null;
  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    const error = new Error(body.error || `Request failed (${res.status})`);
    error.status = res.status;
    throw error;
  }
  return body;
}

export function formatEventDate(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}
