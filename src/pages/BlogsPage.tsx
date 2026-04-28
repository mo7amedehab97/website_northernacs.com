import { Link } from 'react-router-dom';
import blogs from '../data/blogs.json';
import { translations, type Lang } from '../i18n';
import { useLanguage } from '../components/LanguageProvider';

type BlogPost = { slug: string; date: string; title: Record<Lang, string>; excerpt: Record<Lang, string> };
const posts = blogs as BlogPost[];

const BlogsPage = () => {
  const { lang } = useLanguage();
  const t = translations[lang].blogs;

  return <section className="bg-nacs-surface py-16 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-12 max-w-3xl"><span className="mb-3 block text-xs font-bold uppercase tracking-[0.3em] text-nacs-green">{t.eyebrow}</span><h1 className="text-4xl font-black text-slate-900 md:text-5xl">{t.title}</h1><p className="mt-4 text-lg text-nacs-muted">{t.intro}</p></div><div className="grid gap-8 md:grid-cols-2">{posts.map(post => <article key={post.slug} className="rounded-2xl border border-nacs-line bg-white p-8 shadow-sm"><time className="text-xs font-bold uppercase tracking-[0.2em] text-nacs-green">{post.date}</time><h2 className="mt-4 text-2xl font-black text-slate-900">{post.title[lang]}</h2><p className="mt-3 leading-relaxed text-nacs-muted">{post.excerpt[lang]}</p><Link to={`/blogs/${post.slug}`} className="mt-6 inline-block rounded-md bg-nacs-green px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-nacs-greenHover">{t.readMore}</Link></article>)}</div></div></section>;
};

export default BlogsPage;
