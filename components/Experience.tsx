import Reveal from './Reveal';

const experiences = [
  {
    role: 'Asisten Dosen',
    place: 'FTI Universitas Tarumanagara',
    period: 'Akademik 2025/2026',
    points: [
      'Mendampingi dosen dalam kegiatan akademik di FTI Untar.',
      'Membantu mahasiswa memahami materi praktikum dan tugas kuliah.',
      'Menjembatani komunikasi antara mahasiswa dan dosen pengampu.',
    ],
  },
  {
    role: 'Guru Bimbel',
    place: 'Bimbel Global',
    period: 'Agustus 2023 sampai November 2025',
    points: [
      'Memberikan latihan les dan materi tambahan kepada murid bimbel.',
      'Berdiskusi mengenai ujian sekolah bersama murid.',
      'Memeriksa dan memberi umpan balik tugas sekolah murid.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <p className="section-label">Pengalaman</p>
          <h2 className="section-title">Mengajar dan asisten dosen</h2>
          <p className="section-lead">
            Pengalaman membimbing di kelas bimbel dan mendampingi akademik di FTI Untar.
          </p>
        </Reveal>

        <div className="experience-grid">
          {experiences.map((item, i) => (
            <Reveal key={item.role} variant={i === 0 ? 'left' : 'up'} delay={80 + i * 80}>
              <article className="experience-block">
                <p className="experience-kicker">{item.period}</p>
                <h3>{item.role}</h3>
                <p className="experience-meta">{item.place}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
