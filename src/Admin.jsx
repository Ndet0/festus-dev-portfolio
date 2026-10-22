import './Admin.css';
import { useState, useEffect, useRef, useCallback } from 'react';
import { generateReactHelpers } from '@uploadthing/react';
import { FaCamera, FaTrash, FaArrowLeft, FaRightFromBracket } from 'react-icons/fa6';
import { resizeImage } from './lib/resizeImage.js';
import {
  fetchEvents,
  verifyPassword,
  createEvent,
  deletePhoto,
  deleteEvent,
  formatEventDate,
} from './lib/eventsApi.js';

const { useUploadThing } = generateReactHelpers({ url: '/api/uploadthing' });

const PASSWORD_KEY = 'admin-password';

function readPassword() {
  try {
    return localStorage.getItem(PASSWORD_KEY) || '';
  } catch {
    return '';
  }
}

function storePassword(value) {
  try {
    if (value) localStorage.setItem(PASSWORD_KEY, value);
    else localStorage.removeItem(PASSWORD_KEY);
  } catch {
    // Private browsing or blocked storage: the password just won't be remembered.
  }
}

function Admin() {
  const [password, setPassword] = useState(readPassword);

  // Keep this page out of search results.
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    document.title = 'Upload photos · Festus Kisoi';
    return () => meta.remove();
  }, []);

  const signOut = () => {
    storePassword('');
    setPassword('');
  };

  return (
    <div className="admin">
      <header className="admin-header">
        <a href="/" className="admin-back">
          <FaArrowLeft aria-hidden="true" /> Site
        </a>
        <h1>Event photos</h1>
        {password ? (
          <button type="button" className="admin-link" onClick={signOut}>
            <FaRightFromBracket aria-hidden="true" /> Sign out
          </button>
        ) : (
          <span />
        )}
      </header>

      {password ? (
        <Dashboard password={password} onUnauthorized={signOut} />
      ) : (
        <PasswordGate
          onSuccess={(value) => {
            storePassword(value);
            setPassword(value);
          }}
        />
      )}
    </div>
  );
}

function PasswordGate({ onSuccess }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [checking, setChecking] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setChecking(true);
    setError('');
    try {
      const ok = await verifyPassword(value);
      if (ok) onSuccess(value);
      else setError('Wrong password.');
    } catch {
      setError('Could not reach the server. Try again.');
    } finally {
      setChecking(false);
    }
  };

  return (
    <form className="admin-card admin-gate" onSubmit={handleSubmit}>
      <label htmlFor="admin-password">Password</label>
      <input
        id="admin-password"
        type="password"
        autoComplete="current-password"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
        autoFocus
      />
      {error && <p className="admin-error" role="alert">{error}</p>}
      <button type="submit" className="btn-primary" disabled={checking || !value}>
        {checking ? 'Checking…' : 'Continue'}
      </button>
    </form>
  );
}

function Dashboard({ password, onUnauthorized }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState('');
  const [showNewForm, setShowNewForm] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'error' | 'info', text }

  const refresh = useCallback(async () => {
    const data = await fetchEvents();
    setEvents(data);
    return data;
  }, []);

  useEffect(() => {
    refresh()
      .then((data) => {
        if (data.length) setSelectedId((id) => id || data[0].id);
        else setShowNewForm(true);
      })
      .catch(() => setStatus({ type: 'error', text: 'Could not load events.' }))
      .finally(() => setLoading(false));
  }, [refresh]);

  const handleError = (err) => {
    if (err?.status === 401 || /unauthorized/i.test(err?.message || '')) {
      onUnauthorized();
      return;
    }
    setStatus({ type: 'error', text: err?.message || 'Something went wrong.' });
  };

  const handleCreate = async (data) => {
    try {
      const event = await createEvent(password, data);
      await refresh();
      setSelectedId(event.id);
      setShowNewForm(false);
      setStatus({ type: 'info', text: `Created “${event.name}”. Now add some photos.` });
    } catch (err) {
      handleError(err);
    }
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      await deleteEvent(password, eventId);
      const data = await refresh();
      setSelectedId(data[0]?.id || '');
      if (!data.length) setShowNewForm(true);
      setStatus({ type: 'info', text: 'Event deleted.' });
    } catch (err) {
      handleError(err);
    }
  };

  const selected = events.find((e) => e.id === selectedId) || null;

  if (loading) return <p className="admin-muted">Loading…</p>;

  return (
    <>
      {status && (
        <p className={`admin-status ${status.type}`} role={status.type === 'error' ? 'alert' : 'status'}>
          {status.text}
        </p>
      )}

      <section className="admin-card">
        <div className="admin-row">
          <label htmlFor="event-select">Event</label>
          <button type="button" className="admin-link" onClick={() => setShowNewForm((v) => !v)}>
            {showNewForm ? 'Cancel' : '+ New event'}
          </button>
        </div>

        {showNewForm ? (
          <NewEventForm onSubmit={handleCreate} />
        ) : (
          <select
            id="event-select"
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
            disabled={!events.length}
          >
            {events.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name} · {formatEventDate(e.date)}
              </option>
            ))}
          </select>
        )}
      </section>

      {selected && !showNewForm && (
        <EventPanel
          key={selected.id}
          event={selected}
          password={password}
          onChanged={refresh}
          onError={handleError}
          onDeleteEvent={() => handleDeleteEvent(selected.id)}
        />
      )}
    </>
  );
}

function NewEventForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [location, setLocation] = useState('');
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    await onSubmit({ name, date, location });
    setSaving(false);
  };

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <label htmlFor="event-name">Name</label>
      <input
        id="event-name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nairobi JS Meetup"
        required
        maxLength={120}
      />
      <label htmlFor="event-date">Date</label>
      <input id="event-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <label htmlFor="event-location">Location</label>
      <input
        id="event-location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="iHub, Nairobi"
        maxLength={120}
      />
      <button type="submit" className="btn-primary" disabled={saving || !name.trim()}>
        {saving ? 'Creating…' : 'Create event'}
      </button>
    </form>
  );
}

function EventPanel({ event, password, onChanged, onError, onDeleteEvent }) {
  const [progress, setProgress] = useState(0);
  const [preparing, setPreparing] = useState(false);
  const [deletingKey, setDeletingKey] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const inputRef = useRef(null);

  const { startUpload, isUploading } = useUploadThing('eventPhotos', {
    headers: () => ({ 'x-admin-password': password }),
    uploadProgressGranularity: 'fine',
    onUploadProgress: setProgress,
    onClientUploadComplete: async () => {
      setProgress(0);
      await onChanged();
    },
    onUploadError: (err) => {
      setProgress(0);
      onError(err);
    },
  });

  const handleFiles = async (e) => {
    const files = Array.from(e.target.files || []);
    e.target.value = ''; // allow picking the same photo again later
    if (!files.length) return;

    setPreparing(true);
    try {
      const resized = await Promise.all(files.map(resizeImage));
      await startUpload(resized, { eventId: event.id });
    } catch (err) {
      onError(err);
    } finally {
      setPreparing(false);
    }
  };

  const handleDeletePhoto = async (key) => {
    setDeletingKey(key);
    try {
      await deletePhoto(password, event.id, key);
      await onChanged();
    } catch (err) {
      onError(err);
    } finally {
      setDeletingKey(null);
    }
  };

  const busy = preparing || isUploading;

  return (
    <section className="admin-card">
      <div className="admin-event-head">
        <div>
          <h2>{event.name}</h2>
          <p className="admin-muted">
            {formatEventDate(event.date)}
            {event.location && ` · ${event.location}`}
            {` · ${event.photos.length} photo${event.photos.length === 1 ? '' : 's'}`}
          </p>
        </div>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        hidden
        onChange={handleFiles}
      />
      <button
        type="button"
        className="btn-primary admin-upload"
        onClick={() => inputRef.current?.click()}
        disabled={busy}
      >
        <FaCamera aria-hidden="true" />
        {preparing ? 'Preparing…' : isUploading ? `Uploading ${progress}%` : 'Add photos'}
      </button>
      {busy && (
        <progress className="admin-progress" max="100" value={preparing ? undefined : progress} />
      )}

      {event.photos.length > 0 && (
        <ul className="admin-photos" aria-label="Uploaded photos">
          {event.photos.map((photo) => (
            <li key={photo.key}>
              <img src={photo.url} alt="" loading="lazy" />
              <button
                type="button"
                className="admin-photo-delete"
                onClick={() => handleDeletePhoto(photo.key)}
                disabled={deletingKey === photo.key}
                aria-label="Delete photo"
              >
                <FaTrash aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="admin-danger">
        {confirmDelete ? (
          <>
            <span>Delete this event and all its photos?</span>
            <button type="button" className="admin-link danger" onClick={onDeleteEvent}>
              Yes, delete
            </button>
            <button type="button" className="admin-link" onClick={() => setConfirmDelete(false)}>
              Keep
            </button>
          </>
        ) : (
          <button type="button" className="admin-link danger" onClick={() => setConfirmDelete(true)}>
            Delete event
          </button>
        )}
      </div>
    </section>
  );
}

export default Admin;
