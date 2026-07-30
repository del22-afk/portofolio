import Image from 'next/image';
import Reveal from './Reveal';

const projects = [
  {
    name: 'WanderWhale',
    tag: 'Mobile · Full stack',
    description:
      'Aplikasi perencanaan perjalanan untuk mencari hotel dan penerbangan secara langsung, menyusun trip pribadi, lalu mensimulasikan proses booking.',
    stack: ['Flutter', 'Node.js', 'Express', 'Firestore', 'Amadeus API'],
    url: 'https://github.com/Llorente14/Wanderwhale',
    illustration: '/previews/wanderwhale.png',
  },
  {
    name: 'FTI News',
    tag: 'Web · Next.js',
    description:
      'Portal berita kampus untuk membaca artikel berdasarkan kategori, menyimpan bookmark, dan mengikuti informasi unggulan sekaligus newsletter.',
    stack: ['Next.js', 'React', 'Prisma', 'TypeScript'],
    url: 'https://github.com/Llorente14/ftinews',
    illustration: '/previews/ftinews.png',
  },
  {
    name: 'Altar Frontend',
    tag: 'PWA · Autentikasi',
    description:
      'Fondasi Progressive Web App yang menangani login, OAuth Google, proteksi halaman, serta manajemen sesi agar aplikasi siap dipasang seperti aplikasi native.',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'PWA'],
    url: 'https://github.com/KamingLo/altar-frontend',
    illustration: '/previews/altar.png',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section section-projects">
      <div className="container">
        <Reveal>
          <p className="section-label">Proyek</p>
          <h2 className="section-title">Yang pernah saya bangun</h2>
          <p className="section-lead">
            Beberapa proyek yang menampilkan stack mobile, web, dan autentikasi.
          </p>
        </Reveal>

        <div className="projects-list">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={80 + i * 100}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <div className="project-preview">
                  <Image
                    src={project.illustration}
                    alt={`Ilustrasi ${project.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 900px"
                    className="project-preview-img"
                  />
                  <div className="project-preview-veil" aria-hidden="true" />
                </div>
                <div className="project-body">
                  <div className="project-top">
                    <span className="project-tag">{project.tag}</span>
                    <span className="project-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <ul className="project-stack">
                    {project.stack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
