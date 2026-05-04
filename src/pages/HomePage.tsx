import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaChartPie,
  FaComments,
  FaCubes,
  FaMapLocationDot,
  FaNetworkWired,
  FaSatelliteDish,
  FaUserTie,
} from 'react-icons/fa6';
import type { IconType } from 'react-icons';
import { translations } from '../i18n';
import { useLanguage } from '../components/LanguageProvider';

const serviceIcons: Record<string, IconType> = {
  architecture: FaCubes,
  engineering: FaNetworkWired,
  analytics: FaChartPie,
};

const HomePage = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <>
      <section
        id="top"
        className="relative flex h-[80vh] min-h-[600px] items-center overflow-hidden"
      >
        <img
          src="/images/northernacs/hero-skyline.png"
          alt={t.home.heroImageAlt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/10" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="mb-8 inline-flex items-center gap-4 rounded-full border border-gray-100 bg-white px-6 py-3 shadow-lg sm:px-8 sm:py-4">
              <span className="border-e border-gray-200 pe-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-500 sm:pe-6">
                {t.home.partner}
              </span>
              <img
                src="/images/northernacs/databricks.png"
                alt={t.home.partnerLogoAlt}
                className="h-8 object-contain sm:h-12"
                loading="eager"
              />
            </div>
            <h1 className="mb-4 text-4xl font-black leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              {t.home.title}
              <br />
              <span className="text-nacs-green">{t.home.accent}</span>
            </h1>
            <h2 className="mb-6 border-s-4 border-nacs-green ps-4 text-xl font-medium text-slate-700 md:text-2xl">
              {t.home.subtitle} <span className="font-bold text-nacs-green">{t.nav.locator}</span>
            </h2>
            <p className="mb-8 text-base font-light leading-relaxed text-slate-500 md:text-lg">
              {t.home.intro}
            </p>
            <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row">
              <a
                href="#s-locator"
                className="inline-flex items-center justify-center rounded-md bg-nacs-green px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-nacs-greenHover hover:shadow-xl"
              >
                {t.common.demo}
                <FaMapLocationDot className="ms-3" size={14} />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md border-2 border-nacs-green bg-white px-8 py-3 text-sm font-bold uppercase tracking-widest text-nacs-green shadow-sm transition-all hover:-translate-y-0.5 hover:bg-nacs-green hover:text-white hover:shadow-md"
              >
                {t.common.expert}
                <FaComments className="ms-3" size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-b border-gray-200 bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-nacs-green">
              {t.home.servicesEyebrow}
            </span>
            <h2 className="mb-4 text-3xl font-black text-slate-900 md:text-4xl">
              {t.home.servicesTitle}
            </h2>
            <p className="text-lg font-light leading-relaxed text-slate-500">
              {t.home.servicesIntro}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {t.home.serviceCards.map(({ id, title, description }) => {
              const Icon = serviceIcons[id] ?? FaCubes;
              return (
                <article
                  key={id}
                  className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-1.5 hover:border-nacs-green/30 hover:shadow-[0_12px_40px_-6px_rgba(8,86,61,0.12)] md:p-10"
                >
                  <FaArrowRight
                    className="absolute end-6 top-6 -rotate-45 text-nacs-green opacity-0 transition-all duration-500 group-hover:opacity-100"
                    size={16}
                  />
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-nacs-green transition-colors duration-500 group-hover:bg-nacs-green group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-nacs-green">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">{description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="industries" className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <InfoCard title={t.home.strategyTitle} text={t.home.strategyText} />
          <InfoCard title={t.home.databricksTitle} text={t.home.databricksText} />
          <InfoCard title={t.home.aboutTitle} text={t.home.aboutText} />
          <InfoCard id="s-locator" title={t.home.locatorTitle} text={t.home.locatorText} />
        </div>
      </section>

      <section id="insights" className="bg-nacs-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-black text-slate-900 md:text-4xl">
            {t.home.storiesTitle}
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-nacs-muted">
            {t.home.visionText}
          </p>
          <Link
            to="/blogs"
            className="mt-8 inline-flex items-center rounded-md bg-nacs-green px-8 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-nacs-greenHover"
          >
            {t.nav.blogs}
            <FaArrowRight className="ms-3" size={14} />
          </Link>
        </div>
      </section>

      <section id="contact" className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-black text-slate-900 md:text-4xl">{t.home.ctaTitle}</h2>
          <p className="mb-10 text-lg text-slate-600">{t.home.ctaText}</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#s-locator"
              className="inline-flex w-full items-center justify-center rounded-md bg-nacs-green px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-nacs-greenHover hover:shadow-xl sm:w-auto"
            >
              {t.common.demo}
              <FaSatelliteDish className="ms-3" size={14} />
            </a>
            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center rounded-md border-2 border-nacs-green bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-nacs-green shadow-sm transition-all hover:-translate-y-1 hover:bg-nacs-green hover:text-white hover:shadow-md sm:w-auto"
            >
              {t.common.expert}
              <FaUserTie className="ms-3" size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

const InfoCard = ({ id, title, text }: { id?: string; title: string; text: string }) => (
  <article id={id} className="rounded-2xl border border-nacs-line bg-white p-8 shadow-sm">
    <h3 className="mb-3 text-2xl font-black text-slate-900">{title}</h3>
    <p className="leading-relaxed text-nacs-muted">{text}</p>
  </article>
);

export default HomePage;
