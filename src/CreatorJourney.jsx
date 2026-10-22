import './CreatorJourney.css';
import {
  FaArrowUpRightFromSquare,
  FaCamera,
  FaInstagram,
  FaLinkedin,
  FaPenNib,
  FaUsers,
  FaVideo,
} from 'react-icons/fa6';

const creatorPillars = [
  {
    number: '01',
    title: 'Build in public',
    description:
      'Sharing the lessons, small wins, experiments, and honest moments behind my growth as a developer.',
    Icon: FaPenNib,
  },
  {
    number: '02',
    title: 'Community stories',
    description:
      'Capturing meetups, hackathons, and the people bringing Kenya’s tech ecosystem to life.',
    Icon: FaUsers,
  },
  {
    number: '03',
    title: 'Life through my lens',
    description:
      'Personal moments, places, and experiences that remind me there is a story beyond the screen.',
    Icon: FaCamera,
  },
];

const INSTAGRAM_URL = 'https://www.instagram.com/livelike_ndet.o/';
const LINKEDIN_URL = 'https://www.linkedin.com/in/festus-ndeto-500227262/';

function CreatorJourney() {
  return (
    <section className="creator-journey" id="creator">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Beyond the code</p>
          <h2>My creator journey</h2>
          <p className="section-sub">
            I build software, but I also love documenting the people, places,
            ideas, and experiences that make the journey worth remembering.
          </p>
        </div>

        <div className="creator-feature">
          <div className="creator-feature-copy">
            <p className="creator-kicker mono">
              <FaVideo aria-hidden="true" /> Personal blog · Stories · Community
            </p>
            <h3>
              Life is more than the <span>finished product.</span>
            </h3>
            <p className="creator-feature-description">
              Live Like Ndet.o is where I share the journey as it happens:
              behind-the-scenes moments, lessons from tech spaces, event
              experiences, travel, and the everyday things that shape who I am.
            </p>
            <div className="creator-actions">
              <a
                className="creator-button creator-button-primary"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram aria-hidden="true" />
                Visit my personal blog
                <FaArrowUpRightFromSquare aria-hidden="true" />
              </a>
              <a
                className="creator-button creator-button-secondary"
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin aria-hidden="true" />
                Follow the journey on LinkedIn
              </a>
            </div>
          </div>

          <figure className="creator-post">
            <figcaption className="creator-post-head mono">
              <span>livelike_ndet.o</span>
              <span className="creator-post-type">post</span>
            </figcaption>
            <img
              className="creator-post-photo"
              src="/hobby5.jpeg"
              alt="A laptop open to a code editor at night, lit by the screen"
              width="720"
              height="960"
              loading="lazy"
              decoding="async"
            />
            <p className="creator-post-caption mono">
              <span>· Nairobi</span>
              <span className="creator-post-tags">life · tech · people</span>
            </p>
          </figure>
        </div>

        <div className="creator-pillars" aria-label="What I create">
          {creatorPillars.map(({ number, title, description, Icon }) => (
            <article className="creator-pillar" key={number}>
              <div className="creator-pillar-top">
                <span className="creator-pillar-number mono">{number}</span>
                <Icon aria-hidden="true" className="creator-pillar-icon" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <p className="creator-note">
          <span className="creator-note-dot" aria-hidden="true" />
          Still learning, still building, still documenting.
        </p>
      </div>
    </section>
  );
}

export default CreatorJourney;
