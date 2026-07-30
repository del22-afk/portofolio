import { withBasePath } from '../lib/paths';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-media" aria-hidden="true">
        {/* Native img: path harus include basePath agar jalan di GitHub Pages */}
        <img
          src={withBasePath('/delpin.jpg')}
          alt=""
          className="hero-photo"
        />
      </div>
      <div className="hero-veil" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="container">
        <div className="hero-content">
          <h1 className="hero-brand hero-anim-brand">
            Delvyn <em>Putra</em>
          </h1>
          <p className="hero-headline hero-anim-headline">
            Mahasiswa Teknik Informatika · FTI Untar
          </p>
          <p className="hero-copy hero-anim-copy">
            Asisten dosen dan pengajar yang suka membangun aplikasi web dan mobile
            yang jelas, cepat, dan enak dipakai.
          </p>
          <div className="hero-actions hero-anim-cta">
            <a href="#projects" className="btn-glow">
              Lihat Proyek
            </a>
            <a href="#contact" className="btn-ghost">
              Hubungi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
