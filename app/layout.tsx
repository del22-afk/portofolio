import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { Outfit, Syne } from 'next/font/google';
import Navbar from '../components/Navbar';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Delvyn Putra · FTI Untar',
  description:
    'Portofolio Delvyn Putra, asisten dosen FTI Untar, pengajar, dan pembuat proyek web serta mobile.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" data-bs-theme="dark" className={`${outfit.variable} ${syne.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <footer className="site-footer">
          <div className="container">
            © {new Date().getFullYear()} <span>Delvyn Putra</span> · FTI Untar
          </div>
        </footer>
      </body>
    </html>
  );
}
