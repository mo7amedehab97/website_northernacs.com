import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import {
  FaBars,
  FaChevronDown,
  FaGlobe,
  FaLinkedinIn,
  FaMagnifyingGlass,
  FaPhone,
  FaRegBuilding,
  FaRegEnvelope,
  FaXmark,
} from 'react-icons/fa6';
import { translations } from '../i18n';
import { useLanguage } from './LanguageProvider';

type NavItem = {
  label: string;
  to: string;
  dropdown?: boolean;
  external?: boolean;
  highlighted?: boolean;
};

const SiteLayout = () => {
  const { lang, setLang } = useLanguage();
  const t = translations[lang];
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  const navItems: NavItem[] = [
    { label: t.nav.about, to: '/about' },
    { label: t.nav.projects, to: '/projects' },
    { label: t.nav.locator, to: 'https://www.s-locator.com/', external: true, highlighted: true },
  ];

  return (
    <div
      className={`min-h-screen bg-white text-nacs-ink antialiased ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}
    >
      <header
        className={`sticky top-0 z-50 border-b border-gray-100 bg-white transition-shadow ${scrolled ? 'shadow-md' : 'shadow-sm'}`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="hidden h-8 items-center justify-end border-b border-gray-50 text-[10px] font-bold uppercase tracking-widest text-slate-400 md:flex">
            <button
              type="button"
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-1.5 text-nacs-green transition-colors hover:text-slate-600"
            >
              <FaGlobe size={10} /> {t.nav.language}
            </button>
          </div>
          <div className="flex h-20 items-center justify-between">
            <Link to="/" aria-label={t.nav.homeLabel} className="flex items-center gap-3">
              <img
                src="/images/northernacs/logo.png"
                alt={t.nav.logoAlt}
                className="h-12 w-auto"
                loading="eager"
              />
            </Link>
            <nav className="hidden h-full items-center gap-10 lg:flex">
              {navItems.map((item) =>
                item.dropdown ? (
                  <a
                    key={item.label}
                    href={item.to}
                    className="group flex h-full items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-slate-800 transition-colors hover:text-nacs-green"
                  >
                    {item.label}
                    <FaChevronDown
                      size={9}
                      className="transition-transform group-hover:rotate-180"
                    />
                  </a>
                ) : item.external ? (
                  <a
                    key={item.label}
                    href={item.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold uppercase tracking-wider text-nacs-green transition-colors hover:opacity-80"
                  >
                    {item.label}
                  </a>
                ) : (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    className={({ isActive }) =>
                      `text-sm font-bold uppercase tracking-wider transition-colors ${item.highlighted || isActive ? 'text-nacs-green hover:opacity-80' : 'text-slate-800 hover:text-nacs-green'}`
                    }
                  >
                    {item.label}
                  </NavLink>
                ),
              )}
            </nav>
            <div className="flex items-center gap-4 md:gap-6">
              <button
                type="button"
                aria-label={t.nav.searchAria}
                className="hidden text-slate-400 transition-colors hover:text-nacs-green md:block"
              >
                <FaMagnifyingGlass size={16} />
              </button>
              <Link
                to="/contact"
                className="hidden rounded-sm bg-nacs-green px-8 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-nacs-greenHover md:inline-block"
              >
                {t.nav.contact}
              </Link>
              <button
                type="button"
                className="p-2 text-slate-800 hover:text-nacs-green lg:hidden"
                aria-label={t.nav.menuToggleAria}
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? <FaXmark size={22} /> : <FaBars size={22} />}
              </button>
            </div>
          </div>
        </div>
        <div
          className={`overflow-hidden border-t border-gray-100 bg-white shadow-lg transition-all duration-300 lg:hidden ${mobileOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <nav className="space-y-2 px-4 pb-6 pt-4">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md px-3 py-2 text-base font-bold text-slate-800 transition-colors hover:bg-gray-50 hover:text-nacs-green"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.to}
                  className="block rounded-md px-3 py-2 text-base font-bold text-slate-800 transition-colors hover:bg-gray-50 hover:text-nacs-green"
                >
                  {item.label}
                </Link>
              ),
            )}
            <div className="mt-4 flex gap-3 border-t border-gray-100 pt-4">
              <button
                type="button"
                onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                className="flex-1 rounded-sm border border-gray-200 px-4 py-3 text-xs font-bold uppercase tracking-widest text-slate-800"
              >
                {t.nav.language}
              </button>
              <Link
                to="/contact"
                className="flex-1 rounded-sm bg-nacs-green px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-white"
              >
                {t.nav.contact}
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-nacs-green py-12 text-white md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <img
                src="/images/northernacs/logo.png"
                alt={t.nav.logoAlt}
                className="mb-5 h-10 w-auto brightness-0 invert"
                loading="lazy"
              />
              <p className="mb-6 text-sm leading-relaxed text-white/80">{t.footer.tagline}</p>
              <a
                href="https://www.linkedin.com/company/northern-analytic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.footer.linkedinAria}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-nacs-green transition-colors hover:bg-nacs-accent hover:text-white"
              >
                <FaLinkedinIn size={14} />
              </a>
            </div>
            <div>
              <h3 className="mb-5 text-sm font-bold uppercase tracking-widest">
                {t.footer.services}
              </h3>
              <ul className="space-y-3">
                {t.footer.serviceLinks.map((label) => (
                  <li key={label}>
                    <a
                      href="/#services"
                      className="text-sm text-white/80 transition-colors hover:text-white"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-5 text-sm font-bold uppercase tracking-widest">
                {t.footer.industries}
              </h3>
              <ul className="space-y-3">
                {t.footer.industryLinks.map((label) => (
                  <li key={label}>
                    <a
                      href="/#industries"
                      className="text-sm text-white/80 transition-colors hover:text-white"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-5 text-sm font-bold uppercase tracking-widest">
                {t.footer.contact}
              </h3>
              <ul className="space-y-4 text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <FaRegBuilding className="mt-0.5 shrink-0 text-white/70" size={14} />
                  <span>
                    {t.footer.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <FaRegEnvelope className="text-white/70" size={14} />
                  <a href="mailto:contact@northernacs.com" className="hover:text-white">
                    contact@northernacs.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <FaPhone className="text-white/70" size={13} />
                  <a href="tel:+966558188632" className="hover:text-white">
                    +966 55 818 8632
                  </a>
                </li>
              </ul>
              <Link
                to="/contact"
                className="mt-6 inline-block rounded-sm bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-nacs-green transition-colors hover:bg-nacs-accent hover:text-white"
              >
                {t.footer.experts}
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 md:flex-row">
            <p className="text-xs font-medium text-white/60">
              © 2026 <strong>Northern Analytics | Data & AI Division · s-locator.com</strong>.{' '}
              {t.footer.rights}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-xs">
              {t.footer.legal.map((label) => (
                <a key={label} href="#legal" className="text-white/60 hover:text-white">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SiteLayout;
