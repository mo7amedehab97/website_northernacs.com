import { useState } from 'react';
import { toast } from 'sonner';
import { FaCircleCheck, FaPaperPlane, FaPhone, FaRegBuilding, FaRegEnvelope } from 'react-icons/fa6';
import { translations } from '../i18n';
import { useLanguage } from '../components/LanguageProvider';

interface FormState { firstName: string; lastName: string; email: string; phone: string; location: string; company: string; comments: string; }
type FieldName = keyof FormState;
type FormErrors = Partial<Record<FieldName, string>>;

const initialState: FormState = { firstName: '', lastName: '', email: '', phone: '', location: '', company: '', comments: '' };
const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRx = /^[0-9()#&+*\-=. ]+$/;
const fieldBase = 'w-full rounded-md border border-nacs-line bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 transition-all focus:border-nacs-green focus:outline-none focus:ring-2 focus:ring-nacs-green/15';
const HERO_IMAGE = '/images/northernacs/contact.jpeg';

const ContactPage = () => {
  const { lang } = useLanguage();
  const t = translations[lang].contact;
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (nextValues: FormState): FormErrors => {
    const found: FormErrors = {};
    if (!nextValues.firstName.trim()) found.firstName = lang === 'ar' ? 'الاسم الأول مطلوب.' : 'First name is required.';
    if (!nextValues.lastName.trim()) found.lastName = lang === 'ar' ? 'اسم العائلة مطلوب.' : 'Last name is required.';
    if (!nextValues.email.trim()) found.email = lang === 'ar' ? 'البريد الإلكتروني مطلوب.' : 'Email is required.';
    else if (!emailRx.test(nextValues.email.trim())) found.email = lang === 'ar' ? 'يرجى إدخال بريد إلكتروني صحيح.' : 'Please enter a valid email address.';
    if (nextValues.phone.trim() && !phoneRx.test(nextValues.phone.trim())) found.phone = lang === 'ar' ? 'يقبل الهاتف الأرقام ورموز الاتصال فقط.' : 'Only numbers and phone characters are accepted.';
    if (!nextValues.location.trim()) found.location = lang === 'ar' ? 'الموقع محل الاهتمام مطلوب.' : 'Location of interest is required.';
    if (!nextValues.comments.trim()) found.comments = lang === 'ar' ? 'يرجى كتابة تعليق مختصر حتى نتمكن من المساعدة.' : 'Please share a quick comment so we can help.';
    else if (nextValues.comments.trim().length < 10) found.comments = lang === 'ar' ? 'يجب ألا يقل التعليق عن 10 أحرف.' : 'Comments must be at least 10 characters.';
    return found;
  };

  const onChange = (field: FieldName) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = event.target.value;
    setValues(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate(values);
    if (Object.keys(found).length) { setErrors(found); toast.error(t.review); return; }
    setSubmitting(true);
    try { await new Promise(resolve => setTimeout(resolve, 700)); toast.success(t.sent); setValues(initialState); setSubmitted(true); }
    catch { toast.error(t.error); }
    finally { setSubmitting(false); }
  };

  const fieldClass = (field: FieldName) => `${fieldBase} ${errors[field] ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : ''}`;

  return (
    <>
      <section className="bg-[#eceff1]">
        <div className="relative">
          <img
            src={HERO_IMAGE}
            alt={t.eyebrow}
            className="h-[420px] w-full object-cover object-center md:h-[470px]"
            loading="eager"
          />
          <div className="absolute bottom-0 start-0 w-full bg-nacs-green md:w-1/2">
            <div className="px-12 py-8 sm:px-12">
              <h2 className="text-5xl font-black uppercase tracking-wide text-white">{t.eyebrow}</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-nacs-surface py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black text-slate-900 md:text-5xl">{t.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-nacs-muted">{t.intro}</p>
        </div>
      </section>
      <section className="bg-white py-16 md:py-20"><div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8"><aside className="rounded-2xl bg-nacs-green p-8 text-white"><h2 className="mb-6 text-2xl font-black">{t.infoTitle}</h2><ul className="space-y-5 text-white/85"><li className="flex gap-3"><FaRegBuilding className="mt-1 shrink-0" />Jeddah, Kingdom of Saudi Arabia</li><li className="flex gap-3"><FaRegEnvelope className="mt-1 shrink-0" /><a href="mailto:contact@northernacs.com">contact@northernacs.com</a></li><li className="flex gap-3"><FaPhone className="mt-1 shrink-0" /><a href="tel:+966558188632">+966 55 818 8632</a></li></ul></aside><div className="rounded-2xl border border-nacs-line bg-white p-6 shadow-sm sm:p-8 md:p-10">{submitted ? <div className="py-10 text-center"><div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-nacs-mint text-nacs-green"><FaCircleCheck size={32} /></div><h3 className="mb-2 text-2xl font-black text-slate-900">{t.successTitle}</h3><p className="mx-auto mb-6 max-w-md text-nacs-muted">{t.successText}</p><button type="button" onClick={() => setSubmitted(false)} className="rounded-md bg-nacs-green px-8 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-nacs-greenHover">{t.again}</button></div> : <form noValidate onSubmit={onSubmit} className="space-y-5"><div className="grid gap-5 md:grid-cols-2"><Field name="firstName" placeholder={t.firstName} value={values.firstName} onChange={onChange('firstName')} error={errors.firstName} className={fieldClass('firstName')} /><Field name="lastName" placeholder={t.lastName} value={values.lastName} onChange={onChange('lastName')} error={errors.lastName} className={fieldClass('lastName')} /></div><div className="grid gap-5 md:grid-cols-2"><Field name="email" type="email" placeholder={t.email} value={values.email} onChange={onChange('email')} error={errors.email} className={fieldClass('email')} /><Field name="phone" type="tel" placeholder={t.phone} value={values.phone} onChange={onChange('phone')} error={errors.phone} className={fieldClass('phone')} /></div><Field name="location" placeholder={t.location} value={values.location} onChange={onChange('location')} error={errors.location} className={fieldClass('location')} /><Field name="company" placeholder={t.company} value={values.company} onChange={onChange('company')} className={fieldClass('company')} /><textarea name="comments" rows={5} placeholder={t.comments} value={values.comments} onChange={onChange('comments')} className={`${fieldClass('comments')} min-h-[140px] resize-y`} />{errors.comments && <p className="text-xs text-red-500">{errors.comments}</p>}<div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between"><p className="text-xs text-slate-400">{t.required}</p><button type="submit" disabled={submitting} className="inline-flex items-center justify-center rounded-md bg-nacs-green px-10 py-3.5 text-sm font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-nacs-greenHover disabled:cursor-not-allowed disabled:opacity-70">{submitting ? t.submitting : t.submit}{!submitting && <FaPaperPlane className="ms-3" size={13} />}</button></div></form>}</div></div></section>
    </>
  );
};

const Field = ({ name, type = 'text', placeholder, value, onChange, error, className }: { name: string; type?: string; placeholder: string; value: string; onChange: React.ChangeEventHandler<HTMLInputElement>; error?: string; className: string }) => <div><input name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} aria-invalid={Boolean(error)} className={className} />{error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}</div>;

export default ContactPage;
