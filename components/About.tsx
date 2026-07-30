import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="section section-about">
      <div className="container about-simple">
        <Reveal variant="left">
          <p className="section-label">Tentang</p>
          <h2 className="section-title">About Me</h2>
          <p className="section-lead about-lead">
            Mahasiswa Teknik Informatika Universitas Tarumanagara yang menguasai
            pemrograman cukup baik, memiliki kemampuan berkomunikasi, serta bekerja
            sama dalam tim. Berpengalaman mengajar dan membimbing audiens, sekaligus
            aktif sebagai asisten dosen di FTI Untar.
          </p>
          <p className="section-lead about-lead">
            Saya senang membangun solusi digital yang rapi di permukaan dan solid di
            balik layar, dari aplikasi web Next.js sampai mobile Flutter.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
