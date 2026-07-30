import Reveal from './Reveal';

const contacts = [
  {
    label: 'Email',
    value: 'delvyn.535240090@stu.untar.ac.id',
    href: 'mailto:delvyn.535240090@stu.untar.ac.id',
  },
  {
    label: 'Telepon',
    value: '+62 882 9000 8226',
    href: 'tel:+6288290008226',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section section-contact">
      <div className="container">
        <Reveal variant="scale">
          <div className="contact-shell">
            <p className="section-label">Kontak</p>
            <h2 className="section-title">Hubungi Saya</h2>
            <p className="section-lead">
              Tertarik berkolaborasi, diskusi proyek, atau butuh bantuan akademik?
              Silakan hubungi saya.
            </p>

            <ul className="contact-list">
              {contacts.map((item) => (
                <li key={item.label}>
                  <span>{item.label}</span>
                  <a href={item.href}>{item.value}</a>
                </li>
              ))}
            </ul>

            <a
              href="mailto:delvyn.535240090@stu.untar.ac.id"
              className="btn-glow"
              style={{ marginTop: '0.5rem' }}
            >
              Kirim Email
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
