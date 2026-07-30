import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-media" aria-hidden="true">
        <Image
          src="/delpin.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
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
