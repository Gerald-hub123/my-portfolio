import React, { useState } from 'react';
import './Portfolio.css';
import profileImg from './assets/profile.jpg';

/* ============================================
   CONTENT — edit these objects, not the JSX below
   ============================================ */

const PROFILE = {
  name: "Gerald Kairu King'ori",
  role: 'Software Engineer & Full-Stack Developer',
  tagline: 'building scalable systems across web, APIs, and government platforms',
  available: 'available for opportunities',
  bio: [
    "I'm a Software Engineer and IT professional with over three years across development, system support, and digital infrastructure. I work full-stack — Python, JavaScript/TypeScript, PHP, and SQL on the language side, Laravel, Node.js, React, and Next.js on the framework side — and I've shipped work across corporate, government, and freelance settings.",
    "Right now I'm interning on Kenya's Affordable Housing Program, contributing across the full SDLC — requirements, design, build, and deployment — while supporting API and database work for internal government systems. I hold a BSc in Information Technology (Software Engineering) from Africa International University.",
  ],
  location: 'Nairobi, Kenya',
  email: 'geraldkairu5@gmail.com',
  phone: '+254 757 954 727',
  cvFile: '/Gerald_Kairu_CV.pdf',
};

const EXPERIENCE = [
  {
    hash: 'f4a92c1',
    title: 'Software Engineer Intern — Affordable Housing Program',
    period: 'Jan 2026 – Present',
    description:
      'Contributing across the full SDLC — requirements, design, implementation, and deployment — while supporting API development and database work for internal government systems.',
    tags: ['Python', 'REST APIs', 'SQL', 'Code Review'],
  },
  {
    hash: 'b0e7d3a',
    title: 'Full-Stack Developer — Freelance',
    period: '2022 – Present',
    description:
      'Designing and building full-stack web applications and REST APIs for client projects — schema design, authentication and RBAC, and performance-minded deployment.',
    tags: ['Laravel', 'React.js', 'Node.js', 'MySQL'],
  },
  {
    hash: '2c81f6e',
    title: 'Charging Station Attendant, Technical Ops — Ampersand E-Mobility',
    period: 'Sep 2025 – Dec 2025',
    description:
      'Operated digital systems for real-time battery swap tracking and inventory, flagging data inconsistencies to technical teams.',
    tags: ['Data Ops', 'Monitoring'],
  },
  {
    hash: '9a3d05b',
    title: 'IT Assistant — Limax Company Limited',
    period: 'Jul 2023 – Apr 2024',
    description:
      'Supported enterprise systems and internal business applications, handled data validation and backups, and delivered end-user training.',
    tags: ['Troubleshooting', 'Databases', 'Documentation'],
  },
  {
    hash: '61bf4e8',
    title: 'ICT Support Intern — KMTC, Karen Campus',
    period: 'Feb 2023 – Jun 2023',
    description:
      'Managed ERP accounts for 500+ users and supported system upgrades, software deployment, and infrastructure maintenance.',
    tags: ['ERP', 'System Support'],
  },
];

const DEPENDENCIES = [
  { name: 'python', years: 3 },
  { name: 'javascript', years: 3 },
  { name: 'typescript', years: 2 },
  { name: 'php', years: 3 },
  { name: 'sql', years: 3 },
];

const DEV_DEPENDENCIES = [
  { name: 'laravel', years: 3 },
  { name: 'react', years: 2 },
  { name: 'nodejs', years: 2 },
  { name: 'nextjs', years: 1 },
  { name: 'mysql', years: 3 },
  { name: 'postgresql', years: 2 },
  { name: 'git', years: 3 },
];

const EDUCATION = {
  degree: 'BSc, Information Technology (Software Engineering)',
  school: 'Africa International University',
  period: '2019 – 2023',
  note: 'Second Class Honours, Upper Division',
};

/* ============================================
   Component
   ============================================ */

const TABS = [
  { id: 'about', label: '~/about.md' },
  { id: 'experience', label: '~/experience' },
  { id: 'skills', label: '~/skills.json' },
  { id: 'contact', label: '~/contact.sh' },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('about');

  const scrollTo = (id) => {
    setActiveTab(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="portfolio">
      <nav className="pf-nav">
        <div className="pf-nav-inner">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`pf-tab${activeTab === tab.id ? ' is-active' : ''}`}
              onClick={() => scrollTo(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <div className="pf-shell">
        {/* ---------- Hero ---------- */}
        <header className="pf-hero">
          <div className="pf-hero-grid">
            <div>
              <div className="pf-filebar">
                <span className="dot" />
                portfolio/hero.tsx
              </div>
              <div className="pf-block">
                <div className="pf-gutter">
                  1<br />2<br />3<br />4
                </div>
                <div className="pf-code">// {PROFILE.role.toLowerCase()}</div>
              </div>
              <h1>
                {PROFILE.name}
                <br />
                <span className="role">{PROFILE.role}</span>
              </h1>
              <p className="pf-tagline">// {PROFILE.tagline}</p>
              <span className="pf-badge">{PROFILE.available}</span>
              <div className="pf-cta-row">
                <button className="pf-btn primary" onClick={() => scrollTo('experience')}>
                  View experience →
                </button>
                <button className="pf-btn" onClick={() => scrollTo('contact')}>
                  Get in touch
                </button>
                <a className="pf-btn" href={PROFILE.cvFile} download>
                  Download CV
                </a>
              </div>
            </div>

            <div className="pf-photo-card">
              <div className="pf-filebar">
                <span className="dot" />
                assets/profile.jpg
              </div>
              <img className="pf-photo" src={profileImg} alt={PROFILE.name} />
            </div>
          </div>
        </header>

        {/* ---------- About ---------- */}
        <section id="about" className="pf-section pf-about">
          <h2 className="pf-section-title">about</h2>
          {PROFILE.bio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}

          <div className="pf-education">
            <span className="pf-education-degree">{EDUCATION.degree}</span>
            <span className="pf-education-meta">
              {EDUCATION.school} · {EDUCATION.period} · {EDUCATION.note}
            </span>
          </div>
        </section>

        {/* ---------- Experience ---------- */}
        <section id="experience" className="pf-section">
          <h2 className="pf-section-title">experience — commit log</h2>
          <div className="pf-commits">
            {EXPERIENCE.map((role) => (
              <article className="pf-commit" key={role.hash}>
                <span className="pf-hash">{role.hash}</span>
                <div className="pf-commit-body">
                  <h3>{role.title}</h3>
                  <div className="pf-commit-period">{role.period}</div>
                  <p>{role.description}</p>
                  <div className="pf-tags">
                    {role.tags.map((tag) => (
                      <span className="pf-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- Skills ---------- */}
        <section id="skills" className="pf-section">
          <h2 className="pf-section-title">skills — package.json</h2>
          <div className="pf-pkg">
            <div>
              <span className="punct">{'{'}</span>
            </div>
            <div className="pf-pkg-line" style={{ paddingLeft: 0 }}>
              <span className="key-label">"dependencies"</span>
              <span className="punct">{': {'}</span>
            </div>
            {DEPENDENCIES.map((dep, i) => (
              <div className="pf-pkg-line" key={dep.name}>
                <span className="key">"{dep.name}"</span>
                <span className="val">
                  : "^{dep.years}.0.0"{i < DEPENDENCIES.length - 1 ? ',' : ''}
                </span>
              </div>
            ))}
            <div style={{ paddingLeft: 18 }}>
              <span className="punct">{'},'}</span>
            </div>
            <div className="pf-pkg-line" style={{ paddingLeft: 0 }}>
              <span className="key-label">"devDependencies"</span>
              <span className="punct">{': {'}</span>
            </div>
            {DEV_DEPENDENCIES.map((dep, i) => (
              <div className="pf-pkg-line" key={dep.name}>
                <span className="key">"{dep.name}"</span>
                <span className="val">
                  : "^{dep.years}.0.0"{i < DEV_DEPENDENCIES.length - 1 ? ',' : ''}
                </span>
              </div>
            ))}
            <div style={{ paddingLeft: 18 }}>
              <span className="punct">{'}'}</span>
            </div>
            <div>
              <span className="punct">{'}'}</span>
            </div>
          </div>
          <p className="pf-pkg-note">version number = years of hands-on experience.</p>
        </section>

        {/* ---------- Contact ---------- */}
        <section id="contact" className="pf-section">
          <h2 className="pf-section-title">contact</h2>
          <div className="pf-terminal">
            <div className="line">
              <span className="prompt">$</span>
              <span className="cmd">whoami</span>
              <div className="out">gerald-kairu-kingori</div>
            </div>
            <div className="line">
              <span className="prompt">$</span>
              <span className="cmd">contact --email</span>
              <a className="out" href={`mailto:${PROFILE.email}`} style={{ display: 'block' }}>
                {PROFILE.email}
              </a>
            </div>
            <div className="line">
              <span className="prompt">$</span>
              <span className="cmd">contact --phone</span>
              <a className="out" href={`tel:${PROFILE.phone.replace(/\s/g, '')}`} style={{ display: 'block' }}>
                {PROFILE.phone}
              </a>
            </div>
            <div className="line">
              <span className="prompt">$</span>
              <span className="cmd">contact --location</span>
              <div className="out">{PROFILE.location}</div>
            </div>
          </div>
        </section>

        <footer className="pf-footer">
          <span>© {new Date().getFullYear()} {PROFILE.name}</span>
          <span>built with react</span>
        </footer>
      </div>
    </div>
  );
}
