// Single shared password for the /admin upload page.
// The browser sends it in the `x-admin-password` header on every write request.
export function isAuthorized(request) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  const given = request.headers.get('x-admin-password') ?? '';
  return safeEqual(given, expected);
}

// Constant-time comparison so response timing doesn't leak the password.
function safeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

export function unauthorized() {
  return Response.json({ error: 'Unauthorized' }, { status: 401 });
}
