import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Menu,
  X,
  Check,
  ArrowRight,
  Clock3,
  TrendingUp,
  BrainCircuit,
  Code2,
  Save,
  RotateCcw,
  Settings2,
  Quote,
} from 'lucide-react';

const STORAGE_KEY = 'limited-cms-v1';

const initialContent = {
  brand: {
    name: 'Limited',
    logo: 'https://i.ibb.co/ZRc2kt2R/logotype.png',
  },
  nav: {
    links: [
      { label: 'Philosophy', href: '#manifesto' },
      { label: 'Ecosystem', href: '#ecosystem' },
      { label: 'Investment', href: '#pricing' },
    ],
    cta: { label: 'Apply Now', href: '#application' },
  },
  hero: {
    title: 'Scale with Strategy.\nDesigned by Limited.',
    description:
      'We don\'t just build websites; we build limited-edition digital assets that outperform the market. Stop paying for "pretty" and start investing in "profitable."',
    primaryCta: { label: 'Start Your Project', hoverLabel: 'Apply Now', href: '#application' },
    secondaryCta: { label: 'Explore Ecosystem', href: '#ecosystem' },
  },
  trusted: {
    eyebrow: 'Trusted by a limited circle of high-growth founders',
    logos: [
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d052699d-f578-4c01-9806-f5b6c8609489_320w.png',
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3185425e-0207-434a-9554-cdb5bd455ea5_320w.png',
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c26c041-308e-4034-9227-5a6c57d94f4d_1600w.png',
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8de253ef-3c06-4a22-8e14-1a6a9d8580d5_320w.png',
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d3f4a52-05b5-4539-987a-d4b1ff330ef1_1600w.png',
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e561d59c-a675-431e-a035-187a88fbe4c2_1600w.png',
    ],
  },
  manifesto: {
    eyebrow: 'The Manifesto',
    title: 'The Hard Truth:\nYour Website is Leaking Money.',
    quote:
      "Most agencies sell you a digital brochure that looks pretty but sells nothing. You don't need 'just a website.' You need a conversion system. We don't guess; we engineer outcomes based on data. Stop paying for hours worked, and start investing in results delivered.",
    signature: 'Limited Strategy Team',
  },
  compare: {
    title: 'The Limited Standard',
    description: 'Do not compare price. Compare speed, efficiency, and revenue impact.',
    leftTitle: 'Traditional Agencies',
    leftItems: [
      '6-12 Week Turnaround',
      'Bloated Code & Slow Load Times',
      'Focus on "Winning Awards"',
      'Radio Silence for Weeks',
    ],
    rightTitle: 'Limited',
    rightItems: [
      '7-14 Day Sprints',
      'Performance First Architecture',
      'Focus on Revenue & ROI',
      'Daily Updates & Transparency',
    ],
  },
  ecosystem: {
    eyebrow: 'Total Ecosystem',
    title: 'Ecosystem of Value',
    description: 'The three pillars of a high-converting digital asset.',
    cards: [
      {
        title: 'Clean Code Architecture',
        description:
          'Speed is a feature. We build on lightweight frameworks that load instantly. Google loves it, users love it, and your bounce rate drops to zero.',
        icon: 'code',
      },
      {
        title: 'Psychology-Led Design',
        description:
          "We don't just pick colors. We design user flows that psychologically guide your visitor to the 'Buy' button. Every pixel has a purpose.",
        icon: 'brain',
      },
      {
        title: 'SEO & Scalability',
        description:
          'Built to rank. Built to scale. Your site is technically optimized for search engines from Day 1. Don\'t chase traffic, attract it.',
        icon: 'growth',
      },
    ],
    featured: {
      badge: 'Case Study',
      title: 'NexChain Infrastructure',
      description:
        'See how we transformed a fragmented crypto brand into a market authority, increasing conversion by 200% in 30 days.',
      cta: 'View Case Study',
      image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5badae71-a5f7-4201-aee1-3b316e682fb0_1600w.jpg',
      alt: 'NexChain Project',
    },
  },
  process: {
    title: 'From Concept to Cash Flow',
    description: 'The path to your new digital asset.',
    steps: [
      {
        number: '01',
        title: 'Audit & Strategy',
        description: 'We identify the bottlenecks in your current funnel and map out the revenue opportunities.',
        featured: false,
      },
      {
        number: '02',
        title: 'Sprint Build',
        description: 'High-intensity design and development phase. No bloat, just rapid execution of the agreed strategy.',
        featured: true,
      },
      {
        number: '03',
        title: 'Launch & Scale',
        description: 'Deploying your asset and optimizing for conversions. We hand over the keys to a revenue engine.',
        featured: false,
      },
    ],
  },
  pricing: {
    eyebrow: 'Investment',
    title: 'Invest in Assets, Not Expenses.',
    description: 'Lean pricing for high-impact results. No hidden fees. No bloated contracts.',
    plans: [
      {
        name: 'The Launchpad',
        audience: 'Solopreneurs & Validating Ideas.',
        price: '₹1,999',
        suffix: '/ One-time',
        delivery: 'Delivery: 48 Hours',
        features: ['1 High-Impact Landing Page', 'Mobile-First Architecture', 'Fast Load Speed (< 2s)', 'WhatsApp Chat Integration'],
        cta: 'Start Now',
        featured: false,
      },
      {
        name: 'The Brand Core',
        audience: 'Small Businesses & Service Providers.',
        price: '₹5,999',
        suffix: '/ One-time',
        delivery: 'Delivery: 5-7 Days',
        features: ['Up to 5 Strategic Pages', 'Custom CMS (Manage it yourself)', 'Basic SEO Setup (Google Indexing)', 'Social Media Integration'],
        cta: 'Build Brand',
        featured: false,
      },
      {
        name: 'The Growth Engine',
        audience: 'Scaling Startups & Serious Players.',
        price: '₹14,999',
        suffix: '/ One-time',
        delivery: 'Delivery: 10-14 Days',
        features: ['Up to 15 Pages + Blog', 'Conversion-Focused Design', 'Advanced Analytics Dashboard', 'Speed Optimization (90+ Score)', '1 Year Free Hosting'],
        cta: 'Scale Now',
        featured: true,
        badge: 'Best Value',
      },
      {
        name: 'The E-Commerce Suite',
        audience: 'DTC Brands & Online Retail.',
        price: '₹24,999+',
        suffix: '/ Custom Scope',
        delivery: 'Delivery: Custom',
        features: ['Full Store Setup (Unlimited Products)', 'Payment Gateway Integration', 'Cart Abandonment Recovery', 'Automated Email Notifications', 'Priority Support'],
        cta: 'Get Quote',
        featured: false,
      },
    ],
  },
  application: {
    backgroundImage: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/278bbef6-c861-4ed8-b799-a4713ff032b4_3840w.jpg',
    badge: 'Application',
    title: 'Start Your Project',
    description: 'Direct Line to Leadership. No account managers, just experts.',
    submitLabel: 'Submit Application',
    fields: [
      { name: 'name', label: 'Name', placeholder: 'Your Name', type: 'text' },
      { name: 'email', label: 'Email', placeholder: 'your@email.com', type: 'email' },
      { name: 'company', label: 'Company', placeholder: 'Company Name', type: 'text' },
      { name: 'budget', label: 'Budget', placeholder: 'Project Budget', type: 'text' },
      { name: 'projectType', label: 'Project Type', placeholder: 'Landing Page / Website / E-Commerce', type: 'text' },
      { name: 'timeline', label: 'Timeline', placeholder: 'Desired launch date', type: 'text' },
      { name: 'details', label: 'Project Details', placeholder: 'Tell us what you are building and what outcome you want.', type: 'textarea' },
    ],
  },
  footer: {
    description: 'Elite digital strategy and design for high-growth founders.',
    agencyTitle: 'Agency',
    legalTitle: 'Legal',
    legalLinks: ['Terms of Service', 'Privacy Policy'],
    copyrightPrefix: '©',
  },
  theme: {
    backgroundHeight: '1040px',
    accent: '#10b981',
  },
};

const iconMap: Record<string, React.ElementType> = {
  code: Code2,
  brain: BrainCircuit,
  growth: TrendingUp,
};

const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(' ');

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function useCmsState() {
  const [content, setContent] = useState(initialContent);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setContent(JSON.parse(raw));
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  const save = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  const reset = () => {
    localStorage.removeItem(STORAGE_KEY);
    setContent(initialContent);
  };

  return { content, setContent, save, reset };
}

function updateByPath(obj: Record<string, unknown>, path: string, value: unknown) {
  const keys = path.split('.');
  const clone = structuredClone(obj);
  let ref: Record<string, unknown> = clone as Record<string, unknown>;

  for (let i = 0; i < keys.length - 1; i += 1) {
    const key = /^\d+$/.test(keys[i]) ? Number(keys[i]) : keys[i];
    ref = ref[key] as Record<string, unknown>;
  }

  const lastKey = /^\d+$/.test(keys[keys.length - 1]) ? Number(keys[keys.length - 1]) : keys[keys.length - 1];
  ref[lastKey as keyof typeof ref] = value;
  return clone;
}

function Field({ label, value, onChange, textarea = false }: { label: string, value: string, onChange: (val: string) => void, textarea?: boolean }) {
  const shared = {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e.target.value),
    className:
      'w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none transition focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/20',
  };

  return (
    <label className="block space-y-2">
      <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/45">{label}</span>
      {textarea ? <textarea rows={4} {...shared} /> : <input {...shared} />}
    </label>
  );
}

function CmsPanel({ content, setContent, save, reset, open, setOpen }: { content: typeof initialContent, setContent: React.Dispatch<React.SetStateAction<typeof initialContent>>, save: () => void, reset: () => void, open: boolean, setOpen: (open: boolean) => void }) {
  const sections = useMemo(
    () => [
      {
        title: 'Brand / Nav',
        fields: [
          ['Brand name', 'brand.name'],
          ['Logo URL', 'brand.logo'],
          ['Nav CTA label', 'nav.cta.label'],
          ['Hero title', 'hero.title'],
          ['Hero description', 'hero.description'],
        ],
      },
      {
        title: 'Manifesto',
        fields: [
          ['Eyebrow', 'manifesto.eyebrow'],
          ['Title', 'manifesto.title'],
          ['Quote', 'manifesto.quote'],
          ['Signature', 'manifesto.signature'],
        ],
      },
      {
        title: 'Pricing',
        fields: [
          ['Pricing title', 'pricing.title'],
          ['Pricing description', 'pricing.description'],
          ['Featured plan name', 'pricing.plans.2.name'],
          ['Featured plan price', 'pricing.plans.2.price'],
          ['Featured plan CTA', 'pricing.plans.2.cta'],
        ],
      },
      {
        title: 'Application',
        fields: [
          ['Background image', 'application.backgroundImage'],
          ['Section title', 'application.title'],
          ['Section description', 'application.description'],
          ['Submit label', 'application.submitLabel'],
        ],
      },
    ],
    [],
  );

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-[90] inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/80 px-4 py-3 text-sm font-medium text-white shadow-2xl backdrop-blur-xl hover:bg-black"
      >
        <Settings2 className="h-4 w-4" /> CMS
      </button>

      <div className={cn('fixed inset-0 z-[100] transition', open ? 'pointer-events-auto' : 'pointer-events-none')}>
        <div
          onClick={() => setOpen(false)}
          className={cn('absolute inset-0 bg-black/70 transition-opacity', open ? 'opacity-100' : 'opacity-0')}
        />

        <aside
          className={cn(
            'absolute right-0 top-0 h-full w-full max-w-xl overflow-y-auto border-l border-white/10 bg-[#060606] p-5 shadow-2xl transition-transform duration-300',
            open ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Inline CMS</p>
              <h3 className="mt-1 text-2xl font-semibold tracking-tight text-white">100% editable content</h3>
            </div>
            <button onClick={() => setOpen(false)} className="rounded-full border border-white/10 p-2 text-white/70 hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-5">
            {sections.map((section) => (
              <div key={section.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <h4 className="mb-4 text-sm font-semibold text-white">{section.title}</h4>
                <div className="space-y-4">
                  {section.fields.map(([label, path]) => {
                    const value = path.split('.').reduce((acc: unknown, key: string) => (acc as Record<string, unknown>)?.[/^\d+$/.test(key) ? Number(key) : key], content) as string ?? '';
                    return (
                      <Field
                        key={path}
                        label={label}
                        value={value}
                        textarea={String(value).length > 80}
                        onChange={(next: string) => setContent((prev: typeof initialContent) => updateByPath(prev as unknown as Record<string, unknown>, path, next) as typeof initialContent)}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="sticky bottom-0 mt-6 grid grid-cols-2 gap-3 border-t border-white/10 bg-[#060606] pt-5">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white hover:bg-white/10"
            >
              <RotateCcw className="h-4 w-4" /> Reset
            </button>
            <button
              onClick={save}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-500 px-4 py-3 text-sm font-semibold text-black hover:bg-emerald-400"
            >
              <Save className="h-4 w-4" /> Save
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}

function SectionContainer({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return <div className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}>{children}</div>;
}

export default function App() {
  const { content, setContent, save, reset } = useCmsState();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cmsOpen, setCmsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Geist:wght@300;400;500;600;700&display=swap');
        .font-geist { font-family: 'Geist', 'Inter', sans-serif; }
      `}</style>

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10" style={{ height: content.theme.backgroundHeight }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.08),transparent_22%),linear-gradient(180deg,#050505_0%,#000_68%)]" />
      </div>

      <CmsPanel content={content} setContent={setContent} save={save} reset={reset} open={cmsOpen} setOpen={setCmsOpen} />

      <div className="relative overflow-x-hidden">
        <header className="relative">
          <SectionContainer>
            <nav className="mt-6 flex items-center justify-between">
              <a href="#top" className="flex items-center gap-2">
                <img src={content.brand.logo} alt={content.brand.name} className="h-12 w-auto" />
              </a>

              <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-1 py-1 backdrop-blur-lg md:flex">
                {content.nav.links.map((link) => (
                  <a key={link.label} href={link.href} className="px-3 py-2 text-sm font-medium text-white/80 transition hover:text-white font-geist">
                    {link.label}
                  </a>
                ))}
                <a
                  href={content.nav.cta.href}
                  className="inline-flex items-center rounded-full border border-white/20 bg-neutral-900/60 px-6 py-3 text-xs font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] font-geist"
                >
                  {content.nav.cta.label}
                </a>
              </div>

              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium backdrop-blur md:hidden"
              >
                <Menu className="h-5 w-5" /> Menu
              </button>
            </nav>

            {mobileOpen && (
              <div className="mt-4 rounded-2xl border border-white/10 bg-black/90 p-4 backdrop-blur md:hidden">
                <div className="space-y-2">
                  {content.nav.links.map((link) => (
                    <a key={link.label} href={link.href} className="block rounded-xl px-3 py-3 text-white/80 hover:bg-white/5 hover:text-white">
                      {link.label}
                    </a>
                  ))}
                  <a href={content.nav.cta.href} className="mt-2 block rounded-xl bg-white/10 px-3 py-3 text-white">
                    {content.nav.cta.label}
                  </a>
                </div>
              </div>
            )}

            <section className="relative mx-auto max-w-5xl pb-32 pt-20 text-center md:pb-24 md:pt-48">
              <motion.h1 initial="hidden" animate="show" variants={fadeUp} className="max-w-5xl text-4xl tracking-tighter text-white sm:text-6xl md:text-7xl font-geist">
                {content.hero.title.split('\n').map((line) => (
                  <React.Fragment key={line}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </motion.h1>
              <motion.p initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.08 }} className="mx-auto mt-6 max-w-2xl text-base font-normal text-white/70 sm:text-lg font-geist">
                {content.hero.description}
              </motion.p>
              <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.16 }} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={content.hero.primaryCta.href}
                  className="group relative inline-flex min-w-[140px] items-center justify-center overflow-hidden rounded-full border border-neutral-600 bg-neutral-800 px-5 py-3 font-semibold tracking-tight text-neutral-400 shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] transition hover:-translate-y-[3px] hover:text-white"
                >
                  <span className="relative z-10 font-medium transition duration-500 group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md font-geist">
                    {content.hero.primaryCta.label}
                  </span>
                  <span className="absolute inset-0 z-10 flex -translate-y-8 items-center justify-center opacity-0 blur-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-geist">
                    {content.hero.primaryCta.hoverLabel}
                  </span>
                  <span aria-hidden="true" className="absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent blur-[2px] transition duration-1000 group-hover:opacity-80" />
                </a>
                <a href={content.hero.secondaryCta.href} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-base font-medium text-white/90 backdrop-blur transition hover:bg-white/10 font-geist">
                  {content.hero.secondaryCta.label}
                </a>
              </motion.div>
            </section>
          </SectionContainer>
        </header>

        <section className="relative pb-16">
          <SectionContainer>
            <p className="mb-6 text-center text-sm font-medium text-white/50 font-geist">{content.trusted.eyebrow}</p>
            <div className="grid grid-cols-2 items-center justify-items-center gap-8 sm:grid-cols-3 md:grid-cols-6">
              {content.trusted.logos.map((logo, index) => (
                <div
                  key={logo}
                  className={cn(
                    'inline-flex h-[40px] w-[100px] items-center justify-center rounded bg-cover bg-center opacity-60 transition-opacity hover:opacity-100',
                    index === 0 ? 'invert' : '',
                  )}
                  style={{ backgroundImage: `url(${logo})` }}
                />
              ))}
            </div>
          </SectionContainer>
        </section>

        <section id="manifesto" className="relative border-y border-white/5 bg-white/[0.02] py-24">
          <SectionContainer className="max-w-4xl text-center">
            <motion.p whileInView="show" initial="hidden" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="text-xs font-semibold uppercase tracking-wider text-emerald-500 font-geist">
              {content.manifesto.eyebrow}
            </motion.p>
            <motion.h2 whileInView="show" initial="hidden" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="mt-4 text-3xl tracking-tighter text-white sm:text-5xl font-geist">
              {content.manifesto.title.split('\n').map((line) => (
                <React.Fragment key={line}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </motion.h2>
            <motion.div whileInView="show" initial="hidden" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="relative mt-10 rounded-2xl border border-white/10 bg-neutral-900/50 p-8 sm:p-12">
              <Quote className="absolute left-6 top-6 h-8 w-8 -translate-x-2 -translate-y-2 text-white/20" />
              <p className="relative text-lg leading-relaxed text-white/80 sm:text-xl font-geist">{content.manifesto.quote}</p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="h-px w-12 bg-white/20" />
                <span className="text-sm font-medium text-white/50 font-geist">{content.manifesto.signature}</span>
                <div className="h-px w-12 bg-white/20" />
              </div>
            </motion.div>
          </SectionContainer>
        </section>

        <section className="relative overflow-hidden py-24">
          <SectionContainer>
            <div className="mb-16 text-center">
              <motion.h2 whileInView="show" initial="hidden" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="text-3xl tracking-tighter sm:text-4xl md:text-5xl font-geist">
                {content.compare.title}
              </motion.h2>
              <motion.p whileInView="show" initial="hidden" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-white/60 font-geist">
                {content.compare.description}
              </motion.p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-6 rounded-2xl border border-white/5 bg-white/[0.02] p-8 opacity-60 grayscale transition hover:opacity-80 hover:grayscale-0">
                <h3 className="text-xl font-medium text-white/50 font-geist">{content.compare.leftTitle}</h3>
                <ul className="space-y-4">
                  {content.compare.leftItems.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/50">
                      <X className="h-5 w-5 text-red-500/50" />
                      <span className="font-geist">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative flex flex-col gap-6 rounded-2xl border border-emerald-500/30 bg-emerald-900/10 p-8 shadow-[0_0_50px_-12px_rgba(16,185,129,0.2)]">
                <div className="absolute -right-3 -top-3">
                  <span className="relative flex h-6 w-6">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500">
                      <Check className="h-3.5 w-3.5 text-black" strokeWidth={3} />
                    </span>
                  </span>
                </div>
                <h3 className="text-xl font-medium text-white font-geist">{content.compare.rightTitle}</h3>
                <ul className="space-y-4">
                  {content.compare.rightItems.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white">
                      <div className="rounded-full bg-emerald-500/20 p-1">
                        <Check className="h-4 w-4 text-emerald-400" strokeWidth={3} />
                      </div>
                      <span className="font-medium font-geist">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionContainer>
        </section>

        <section id="ecosystem" className="relative pb-20 pt-8">
          <SectionContainer>
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-medium text-white/50 font-geist">{content.ecosystem.eyebrow}</p>
                <h2 className="text-3xl tracking-tighter sm:text-4xl md:text-5xl font-geist">{content.ecosystem.title}</h2>
                <p className="mt-3 text-base text-white/70 font-geist">{content.ecosystem.description}</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {content.ecosystem.cards.map((card) => {
                const Icon = iconMap[card.icon] || Code2;
                const tone = card.icon === 'code' ? 'blue' : card.icon === 'brain' ? 'purple' : 'emerald';
                return (
                  <div key={card.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors hover:bg-white/[0.07]">
                    <div className="flex h-full flex-col p-6 sm:p-8">
                      <div className="mb-6 flex items-center justify-between">
                        <div className={cn('rounded-lg border p-2', tone === 'blue' && 'border-blue-500/20 bg-blue-500/10', tone === 'purple' && 'border-purple-500/20 bg-purple-500/10', tone === 'emerald' && 'border-emerald-500/20 bg-emerald-500/10')}>
                          <Icon className={cn('h-6 w-6', tone === 'blue' && 'text-blue-400', tone === 'purple' && 'text-purple-400', tone === 'emerald' && 'text-emerald-400')} />
                        </div>
                      </div>
                      <h3 className="text-xl font-medium tracking-tight text-white font-geist">{card.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-white/70 font-geist">{card.description}</p>
                    </div>
                  </div>
                );
              })}

              <div className="group relative mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:col-span-3">
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/50 to-transparent" />
                <img src={content.ecosystem.featured.image} alt={content.ecosystem.featured.alt} className="absolute right-0 top-0 h-full w-2/3 object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" />
                <div className="relative z-20 flex h-full max-w-xl flex-col justify-center p-8 sm:p-12">
                  <span className="mb-4 inline-flex w-fit items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/15 px-2 py-0.5 text-[11px] font-medium text-emerald-200 font-geist">
                    {content.ecosystem.featured.badge}
                  </span>
                  <h3 className="text-3xl tracking-tighter sm:text-4xl font-geist">{content.ecosystem.featured.title}</h3>
                  <p className="mt-4 text-base text-white/70 sm:text-lg font-geist">{content.ecosystem.featured.description}</p>
                  <div className="mt-8">
                    <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-neutral-200 font-geist">
                      {content.ecosystem.featured.cta}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SectionContainer>
        </section>

        <section className="relative border-y border-white/5 bg-white/[0.02] py-24">
          <SectionContainer>
            <div className="mb-16 text-center">
              <h2 className="text-3xl tracking-tighter sm:text-4xl md:text-5xl font-geist">{content.process.title}</h2>
              <p className="mt-4 text-white/60 font-geist">{content.process.description}</p>
            </div>
            <div className="relative grid gap-8 md:grid-cols-3">
              <div className="absolute left-[16%] right-[16%] top-8 hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent md:block" />
              {content.process.steps.map((step) => (
                <div key={step.number} className="relative flex flex-col items-center text-center">
                  <div className={cn('relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-black shadow-[0_0_15px_rgba(255,255,255,0.1)]', step.featured ? 'border border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.2)]' : 'border border-white/20')}>
                    <span className={cn('text-xl font-bold font-geist', step.featured ? 'text-emerald-400' : 'text-white')}>{step.number}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-medium text-white font-geist">{step.title}</h3>
                  <p className="max-w-xs text-sm leading-relaxed text-white/60 font-geist">{step.description}</p>
                </div>
              ))}
            </div>
          </SectionContainer>
        </section>

        <section id="pricing" className="mx-8 mb-10 mt-10 p-6 sm:mx-8 sm:mb-10 sm:p-8">
          <div className="relative">
            <div className="relative mx-auto max-w-5xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span className="text-xs font-normal font-geist">{content.pricing.eyebrow}</span>
              </div>
              <h2 className="mt-4 text-[40px] leading-[0.95] text-white sm:text-6xl font-geist tracking-tighter">{content.pricing.title}</h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-white/70 sm:text-base font-geist">{content.pricing.description}</p>
            </div>

            <div className="relative mx-auto mt-10 grid max-w-[1400px] grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {content.pricing.plans.map((plan) => (
                <article
                  key={plan.name}
                  className={cn(
                    'relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 backdrop-blur-xl transition-colors duration-300',
                    plan.featured
                      ? 'border-emerald-500/30 bg-emerald-900/10 shadow-[0_0_30px_-5px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/20'
                      : 'border-white/10 bg-white/5 hover:bg-white/[0.07]',
                  )}
                >
                  {plan.featured && <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(circle at 50% -20%, rgba(16, 185, 129, 0.15), transparent 70%)' }} />}
                  <div className="relative mb-6 flex flex-col gap-1">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className={cn('text-lg tracking-tight font-geist', plan.featured ? 'font-semibold text-white' : 'font-medium text-white')}>
                        {plan.name}
                      </h3>
                      {plan.badge && <span className="rounded bg-emerald-400 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-950 font-geist">{plan.badge}</span>}
                    </div>
                    <p className={cn('text-xs font-geist', plan.featured ? 'text-emerald-200/60' : 'text-white/50')}>{plan.audience}</p>
                  </div>

                  <div className="relative mb-6">
                    <div className="flex items-end gap-1">
                      <p className="text-3xl tracking-tighter text-white lg:text-4xl font-geist">{plan.price}</p>
                      <span className="mb-1.5 text-xs uppercase tracking-wide text-white/40 font-geist">{plan.suffix}</span>
                    </div>
                    <div className={cn('mt-4 inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[11px] font-geist', plan.featured ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-200' : 'border-white/10 bg-white/5 text-white/70')}>
                      <Clock3 className="h-3.5 w-3.5" />
                      {plan.delivery}
                    </div>
                  </div>

                  <ul className="mb-8 flex-1 space-y-3.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        <span className={cn('text-sm font-geist', plan.featured ? 'font-medium text-white' : 'text-white/80')}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#application"
                    className={cn(
                      'inline-flex h-10 w-full items-center justify-center rounded-lg border text-xs transition font-geist',
                      plan.featured
                        ? 'border-emerald-400/20 bg-emerald-500 font-semibold text-black shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:bg-emerald-400'
                        : 'border-white/10 bg-white/10 font-medium text-white hover:bg-white/20',
                    )}
                  >
                    {plan.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="application"
          className="relative overflow-hidden bg-cover py-24"
          style={{ backgroundImage: `url(${content.application.backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <SectionContainer className="relative z-10 max-w-3xl">
            <div className="mb-10 text-center">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70 backdrop-blur font-geist">
                {content.application.badge}
              </span>
              <h2 className="mt-4 text-3xl tracking-tighter text-white sm:text-4xl md:text-5xl font-geist">{content.application.title}</h2>
              <p className="mt-4 text-lg text-white/70 font-geist">{content.application.description}</p>
            </div>

            <form className="rounded-2xl border border-white/10 bg-black/50 p-6 backdrop-blur-xl sm:p-10">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {content.application.fields.map((field) => (
                  <div key={field.name} className={field.type === 'textarea' ? 'sm:col-span-2' : 'col-span-1'}>
                    <label htmlFor={field.name} className="mb-2 block text-xs font-medium text-white/60 font-geist">
                      {field.label}
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        id={field.name}
                        rows={6}
                        placeholder={field.placeholder}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 transition focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 font-geist"
                      />
                    ) : (
                      <input
                        id={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 transition focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 font-geist"
                      />
                    )}
                  </div>
                ))}
              </div>
              <button className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400 font-geist">
                {content.application.submitLabel}
              </button>
            </form>
          </SectionContainer>
        </section>

        <footer className="border-t border-white/10 py-14">
          <SectionContainer>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.6fr_0.6fr]">
              <div>
                <img src={content.brand.logo} alt={content.brand.name} className="h-10 w-auto" />
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60 font-geist">{content.footer.description}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold tracking-tight font-geist">{content.footer.agencyTitle}</h4>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  {content.nav.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="font-geist hover:text-white">{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold tracking-tight font-geist">{content.footer.legalTitle}</h4>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  {content.footer.legalLinks.map((link) => (
                    <li key={link}>
                      <a href="#" className="font-geist hover:text-white">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
              <p className="text-xs text-white/50 font-geist">
                {content.footer.copyrightPrefix} {new Date().getFullYear()} {content.brand.name}. All Rights Reserved.
              </p>
            </div>
          </SectionContainer>
        </footer>
      </div>
    </div>
  );
}
