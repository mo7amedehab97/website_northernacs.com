import { Link, useParams } from 'react-router-dom';
import blogs from '../data/blogs.json';
import { translations, type Lang } from '../i18n';
import { useLanguage } from '../components/LanguageProvider';

type BlogPost = { slug: string; date: string; title: Record<Lang, string>; html: Record<Lang, string> };
const posts = blogs as BlogPost[];

const BlogDetailPage = () => {
  const { slug } = useParams();
  const { lang } = useLanguage();
  const t = translations[lang].blogs;
  const post = posts.find(item => item.slug === slug);

  if (!post) return <section className="bg-white py-20"><div className="mx-auto max-w-3xl px-4"><p className="mb-6 text-lg text-nacs-muted">{t.notFound}</p><Link to="/blogs" className="font-bold text-nacs-green">{t.back}</Link></div></section>;

  return <article className="bg-white py-16 md:py-24"><div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"><Link to="/blogs" className="mb-8 inline-block text-sm font-bold text-nacs-green">{t.back}</Link><time className="block text-xs font-bold uppercase tracking-[0.2em] text-nacs-green">{post.date}</time><h1 className="mt-4 text-4xl font-black leading-tight text-slate-900 md:text-5xl">{post.title[lang]}</h1><div className="prose prose-slate mt-10 max-w-none prose-headings:text-slate-900 prose-a:text-nacs-green" dangerouslySetInnerHTML={{ __html: post.html[lang] }} /></div></article>;
};

export default BlogDetailPage;
