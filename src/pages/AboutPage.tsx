import { Link } from 'react-router-dom';
import {
  FaArrowRightLong,
  FaBolt,
  FaBuildingColumns,
  FaCheck,
  FaChessKnight,
  FaCode,
  FaRegEye,
  FaGlobe,
  FaRocket,
  FaScaleBalanced,
  FaTowerCell,
  FaUserTie,
} from 'react-icons/fa6';
import type { IconType } from 'react-icons';
import { useState } from 'react';
import { useLanguage } from '../components/LanguageProvider';
import { translations } from '../i18n';

const ABDULLAH_PHOTO = 'https://northernacs.com/wp-content/themes/astra-child/assets/images/abdullah%20abas.jfif';
const HAROUN_PHOTO = 'https://northernacs.com/wp-content/themes/astra-child/assets/images/Haroun%20Bacha.jpeg';

const valueIcons: Record<string, IconType> = {
  globe: FaGlobe,
  code: FaCode,
  scale: FaScaleBalanced,
};

const storyIcons: Record<string, IconType> = {
  bank: FaBuildingColumns,
  strategy: FaChessKnight,
  telecom: FaTowerCell,
  energy: FaBolt,
};

const HERO_IMAGE = '/images/northernacs/about-us-northernacs-scaled.jpg';

const AboutPage = () => {
  const { lang } = useLanguage();
  const t = translations[lang].aboutPage;

  return (
    <>
      <section className="bg-[#eceff1]">
        <div className="relative">
          <img
            src={HERO_IMAGE}
            alt={t.pageEyebrow}
            className="h-[420px] w-full object-cover object-center md:h-[470px]"
            loading="eager"
          />
          <div className="absolute bottom-0 start-0 w-full bg-nacs-green md:w-1/2">
            <div className="px-12 py-8 sm:px-12">
              <h2 className="text-5xl font-black uppercase tracking-wide text-white">{t.pageEyebrow}</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eceff1] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
          <h2 className="mb-4 text-3xl font-bold leading-tight text-nacs-green md:text-5xl">{t.welcomeKicker}</h2>
          <h3 className="mb-6 text-4xl font-bold leading-tight text-slate-700 md:text-5xl">{t.welcomeHeading}</h3>
          <p className="max-w-6xl text-base font-normal leading-relaxed text-slate-700 md:text-lg">{t.welcomeBody}</p>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 text-center md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-600 to-nacs-green/85" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-white sm:px-6 lg:px-8">
          <span className="mb-6 inline-block rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm">
            {t.heroEyebrow}
          </span>
          <h1 className="mb-6 text-4xl font-black leading-tight text-white md:text-6xl">{t.heroTitle}</h1>
          <p className="mx-auto max-w-4xl text-lg font-light leading-relaxed text-gray-100 md:text-2xl">{t.heroIntro}</p>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:gap-20">
            <PurposeCard Icon={FaRegEye} title={t.visionTitle} text={t.visionText} />
            <PurposeCard Icon={FaRocket} title={t.missionTitle} text={t.missionText} />
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">{t.valuesTitle}</h2>
            <p className="mx-auto max-w-2xl text-slate-500">{t.valuesIntro}</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {t.values.map(({ icon, title, text }) => (
              <ValueCard key={title} Icon={valueIcons[icon] ?? FaGlobe} title={title} text={text} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">{t.storiesTitle}</h2>
            <p className="text-slate-500">{t.storiesIntro}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.stories.map(story => (
              <StoryCard
                key={story.title}
                Icon={storyIcons[story.icon] ?? FaBuildingColumns}
                challengeLabel={t.challengeLabel}
                resultLabel={t.resultLabel}
                {...story}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">{t.engagementTitle}</h2>
            <p className="text-slate-500">{t.engagementIntro}</p>
          </div>
          <div className="grid gap-4 text-center md:grid-cols-4">
            {t.steps.map((step, index) => (
              <StepCard key={step.title} number={index + 1} title={step.title} text={step.text} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold leading-snug text-slate-900 md:text-4xl">{t.leadershipHeading}</h2>
            </div>
            <div className="space-y-6">
              {t.leaders.map(leader => (
                <LeaderCard key={leader.name} image={leader.name.includes('Haroun') || leader.name.includes('هارون') ? HAROUN_PHOTO : ABDULLAH_PHOTO} {...leader} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-nacs-green to-[#042E20] py-20 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-light text-white md:text-4xl">{t.ctaTitle}</h2>
          <Link
            to="/contact"
            className="inline-block rounded-full bg-white px-10 py-3 text-lg font-bold text-nacs-green shadow-lg transition-transform hover:-translate-y-1 hover:bg-gray-100"
          >
            {t.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
};

const PurposeCard = ({ Icon, title, text }: { Icon: IconType; title: string; text: string }) => (
  <article className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-10 shadow-xl transition-all duration-300 hover:border-nacs-green">
    <Icon className="pointer-events-none absolute end-8 top-8 text-[7rem] text-nacs-green opacity-5" />
    <div className="relative z-10">
      <h2 className="mb-4 flex items-center gap-3 border-b border-gray-100 pb-4 text-2xl font-bold text-slate-900">
        <Icon className="shrink-0 text-nacs-green" size={22} />
        {title}
      </h2>
      <p className="text-lg italic leading-relaxed text-slate-600">{text}</p>
    </div>
  </article>
);

const ValueCard = ({ Icon, title, text }: { Icon: IconType; title: string; text: string }) => (
  <article className="rounded-lg border-b-4 border-nacs-green bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-nacs-green/10 text-3xl text-nacs-green">
      <Icon />
    </div>
    <h3 className="mb-3 text-xl font-bold text-slate-900">{title}</h3>
    <p className="text-sm leading-relaxed text-slate-600">{text}</p>
  </article>
);

const StoryCard = ({
  Icon,
  sector,
  title,
  challenge,
  challengeLabel,
  result,
  resultLabel,
  cta,
}: {
  Icon: IconType;
  sector: string;
  title: string;
  challenge: string;
  challengeLabel: string;
  result: string;
  resultLabel: string;
  cta: string;
}) => (
  <a
    href="#"
    className="group relative flex h-full flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-nacs-green hover:shadow-xl"
  >
    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 text-nacs-green transition-colors group-hover:bg-nacs-green group-hover:text-white">
      <Icon size={20} />
    </div>
    <div className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">{sector}</div>
    <h3 className="mb-3 text-lg font-bold text-slate-900 transition-colors group-hover:text-nacs-green">{title}</h3>
    <p className="mb-4 text-sm text-slate-600">
      <strong>{challengeLabel}:</strong> {challenge}
    </p>
    <div className="mb-6 flex items-start gap-2 rounded bg-green-50 p-3 text-xs font-bold text-green-800">
      <FaCheck className="mt-0.5 shrink-0" />
      <span>{resultLabel}: {result}</span>
    </div>
    <span className="mt-auto flex items-center text-xs font-bold uppercase tracking-wider text-slate-900 transition-colors group-hover:text-nacs-green">
      {cta}
      <FaArrowRightLong className="ms-2 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
    </span>
  </a>
);

const StepCard = ({ number, title, text }: { number: number; title: string; text: string }) => (
  <article className="rounded-lg border border-gray-200 bg-white p-6">
    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-nacs-green text-xl font-bold text-white">
      {number}
    </div>
    <h3 className="mb-2 font-bold text-slate-900">{title}</h3>
    <p className="text-xs text-slate-500">{text}</p>
  </article>
);

const LeaderCard = ({ name, role, text, image }: { name: string; role: string; text: string; image: string }) => {
  const [errored, setErrored] = useState(false);
  return (
    <article className="group flex items-center gap-6 rounded-xl border border-gray-100 bg-gray-50 p-6 transition-all duration-300 hover:shadow-lg">
      <div className="h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-gray-100 bg-white shadow-md">
        {!errored ? (
          <img
            src={image}
            alt={name}
            onError={() => setErrored(true)}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-nacs-green">
            <FaUserTie size={36} />
          </div>
        )}
      </div>
      <div>
        <h3 className="text-xl font-bold text-slate-900">{name}</h3>
        <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-nacs-green">{role}</span>
        <p className="text-xs leading-relaxed text-slate-500">{text}</p>
      </div>
    </article>
  );
};

export default AboutPage;
