import './Events.css';
import { useState, useEffect, useCallback, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaXmark, FaImages, FaLocationDot, FaCalendarDays } from 'react-icons/fa6';
import { fetchEvents, formatEventDate } from './lib/eventsApi.js';

function Events() {
  const [events, setEvents] = useState(null); // null = loading, [] = none yet
  const [failed, setFailed] = useState(false);
  const [openEvent, setOpenEvent] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetchEvents()
      .then((data) => {
        if (!cancelled) setEvents(data.filter((e) => e.photos?.length));
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // The section always renders so the "Events" nav link has somewhere to land,
  // even when the Netlify function behind /api/events is unavailable (e.g. plain
  // `vite` dev without `netlify dev`).
  let body = null;
  if (failed) {
    body = (
      <p className="events-empty">
        Photos couldn&apos;t be loaded right now. Check back soon.
      </p>
    );
  } else if (events && events.length === 0) {
    body = <p className="events-empty">First batch of photos coming soon.</p>;
  }

  return (
    <section className="events" id="events">
      <div className="container">
        <div className="section-head center">
          <p className="eyebrow">Community</p>
          <h2>Events</h2>
          <p className="section-sub">
            Photos from the meetups, hackathons and conferences I show up to.
          </p>
        </div>

        {body}

        {events && events.length > 0 && (
          <div className="events-grid">
            {events.map((event) => (
              <button
                key={event.id}
                type="button"
                className="event-card"
                onClick={() => setOpenEvent(event)}
                aria-label={`Open ${event.photos.length} photos from ${event.name}`}
              >
                <div className="event-cover">
                  <img src={event.photos[0].url} alt="" loading="lazy" />
                  <span className="event-count">
                    <FaImages aria-hidden="true" /> {event.photos.length}
                  </span>
                </div>
                <div className="event-body">
                  <h3>{event.name}</h3>
                  <ul className="event-meta">
                    <li>
                      <FaCalendarDays aria-hidden="true" />
                      <time dateTime={event.date}>{formatEventDate(event.date)}</time>
                    </li>
                    {event.location && (
                      <li>
                        <FaLocationDot aria-hidden="true" />
                        <span>{event.location}</span>
                      </li>
                    )}
                  </ul>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {openEvent && <Lightbox event={openEvent} onClose={() => setOpenEvent(null)} />}
    </section>
  );
}

const SWIPE_THRESHOLD = 50;

function Lightbox({ event, onClose }) {
  const [index, setIndex] = useState(0);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const touchStartX = useRef(null);
  const photos = event.photos;

  const prev = useCallback(() => setIndex((i) => (i - 1 + photos.length) % photos.length), [photos.length]);
  const next = useCallback(() => setIndex((i) => (i + 1) % photos.length), [photos.length]);

  // Lock page scroll and move focus into the dialog while it's open.
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const { body } = document;
    const prevOverflow = body.style.overflow;
    body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    return () => {
      body.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'Tab') trapFocus(e, dialogRef.current);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose, prev, next]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (delta > SWIPE_THRESHOLD) prev();
    else if (delta < -SWIPE_THRESHOLD) next();
  };

  const photo = photos[index];

  return (
    <div className="lightbox" role="presentation" onClick={onClose}>
      <div
        ref={dialogRef}
        className="lightbox-dialog"
        role="dialog"
        aria-modal="true"
        aria-label={`${event.name} photos`}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <header className="lightbox-header">
          <div>
            <h3>{event.name}</h3>
            <p>
              {formatEventDate(event.date)}
              {event.location && ` · ${event.location}`}
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            className="lightbox-btn"
            onClick={onClose}
            aria-label="Close"
          >
            <FaXmark aria-hidden="true" />
          </button>
        </header>

        <figure className="lightbox-stage">
          <img key={photo.key} src={photo.url} alt={`${event.name}, photo ${index + 1} of ${photos.length}`} />
          {photos.length > 1 && (
            <>
              <button type="button" className="lightbox-btn lightbox-nav prev" onClick={prev} aria-label="Previous photo">
                <FaChevronLeft aria-hidden="true" />
              </button>
              <button type="button" className="lightbox-btn lightbox-nav next" onClick={next} aria-label="Next photo">
                <FaChevronRight aria-hidden="true" />
              </button>
            </>
          )}
          <figcaption className="lightbox-counter" aria-live="polite">
            {index + 1} / {photos.length}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

function trapFocus(event, container) {
  if (!container) return;
  const focusable = container.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  // A tap on the photo itself blurs focus; pull it back in rather than let Tab escape.
  if (!container.contains(document.activeElement)) {
    event.preventDefault();
    first.focus();
  } else if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

export default Events;
