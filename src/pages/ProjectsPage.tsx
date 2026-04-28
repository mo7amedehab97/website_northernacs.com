import { translations } from '../i18n';
import { useLanguage } from '../components/LanguageProvider';

const HERO_IMAGE = '/images/northernacs/hero-skyline.png';

const ProjectsPage = () => {
  const { lang } = useLanguage();
  const t = translations[lang].projectsPage;

  return (
    <>
      <section className="bg-[#eceff1]">
        <div className="relative">
          <img src={HERO_IMAGE} alt={t.pageEyebrow} className="h-[420px] w-full object-cover object-center md:h-[470px]" loading="eager" />
          <div className="absolute bottom-0 start-0 w-full bg-nacs-green md:w-1/2">
            <div className="px-12 py-8 sm:px-12">
              <h2 className="text-5xl font-black uppercase tracking-wide text-white">{t.pageEyebrow}</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-black text-slate-900 md:text-5xl">{t.title}</h1>
            <p className="mx-auto mt-4 max-w-3xl text-nacs-muted">{t.intro}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {t.items.map(item => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <img src={item.image} alt={item.title} className="h-52 w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <h2 className="mb-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-nacs-green">{item.title}</h2>
                  <p className="text-sm font-semibold uppercase tracking-wider text-nacs-green">{item.location}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
