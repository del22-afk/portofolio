'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const links = [
  { href: '#home', label: 'Beranda' },
  { href: '#about', label: 'Tentang' },
  { href: '#experience', label: 'Pengalaman' },
  { href: '#projects', label: 'Proyek' },
  { href: '#contact', label: 'Kontak' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      let current = '#home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= 120) current = `#${id}`;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('hashchange', close);
    return () => window.removeEventListener('hashchange', close);
  }, []);

  return (
    <nav className={`site-nav ${scrolled ? 'is-scrolled' : ''}`} aria-label="Navigasi utama">
      <div className="container">
        <div className="nav-inner">
          <Link href="#home" className="brand-mark" onClick={() => setOpen(false)}>
            Delvyn <span>Putra</span>
          </Link>

          <button
            type="button"
            className={`nav-toggle ${open ? 'is-open' : ''}`}
            aria-expanded={open}
            aria-controls="site-nav-links"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="nav-toggle-bars" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </button>

          <ul id="site-nav-links" className={`nav-links ${open ? 'is-open' : ''}`}>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={active === link.href ? 'is-active' : ''}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
