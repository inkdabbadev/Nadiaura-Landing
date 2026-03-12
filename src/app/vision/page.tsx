import Navbar from '../components/Navbar';

const WHATSAPP_URL =
  'https://wa.me/919940183984?text=Hello%2C%0AI%20would%20love%20to%20experience%20the%20Third%20Eye%20for%20my%20family.%0APlease%20grant%20me%20access%20to%20Nadia%20Aura.';

const PROBLEMS = [
  {
    id: 'parents',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
    title: 'Parents living alone',
    body: 'Small shifts a restless night, a skipped meal go unnoticed until they become something harder to ignore.',
    highlight: 'unnoticed until',
  },
  {
    id: 'fragmented',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Fragmented health data',
    body: 'Wearables, labs, and apps all exist in silos. Nobody connects the dots for your family.',
    highlight: 'in silos',
  },
  {
    id: 'reactive',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Reactive healthcare',
    body: 'The system was never designed to catch problems in their quietest, most treatable moments.',
    highlight: 'their quietest, most treatable',
  },
  {
    id: 'stress',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'The invisible toll of stress',
    body: 'Financial anxiety and emotional strain shape our health long before we give them a name.',
    highlight: 'emotional strain',
  },
];

function highlightText(text: string, phrase: string) {
  if (!phrase) return <>{text}</>;
  const parts = text.split(phrase);
  if (parts.length === 1) return <>{text}</>;
  return (
    <>
      {parts[0]}
      <span className="text-[#00A86B] font-semibold">{phrase}</span>
      {parts[1]}
    </>
  );
}

export default function VisionPage() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden relative" style={{ background: '#eef8f3' }}>

      {/* ── AMBIENT BG ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-10]" style={{ background: '#eef8f3' }}>
        <div className="absolute top-[-20%] left-[-10%] w-[55vw] h-[55vw] rounded-full mix-blend-multiply blur-[140px] opacity-30 animate-slow-spin"
          style={{ background: 'radial-gradient(circle, rgba(0,168,107,0.25) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] rounded-full mix-blend-multiply blur-[120px] opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(0,210,130,0.2) 0%, transparent 70%)' }} />
      </div>

      <Navbar active="vision" />

      <main className="pt-[72px]">

        {/* ── HERO SPLIT SECTION ── */}
        <section className="px-6 sm:px-10 md:px-16 lg:px-24 py-16 md:py-24 lg:py-28">
          <div className="max-w-[1140px] mx-auto">

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-20 items-start">

              {/* LEFT: Heading + Body */}
              <div>
                {/* Eyebrow */}
                <p className="text-[0.78rem] font-black uppercase tracking-[0.42em] text-[#00A86B] mb-6 animate-fade-up">
                  Why This Matters
                </p>

                {/* Headline */}
                <h1 className="text-[2.8rem] sm:text-[3.6rem] md:text-[4.4rem] font-black leading-[1.06] tracking-[-2px] md:tracking-[-3px] text-[#0a1628] mb-8 animate-slide-left delay-100">
                  The warning signs<br />
                  were always{' '}
                  <em className="not-italic text-[#00A86B]">there.</em>
                </h1>

                {/* Body copy */}
                <div className="space-y-5 text-[#3d5a70] text-[1.05rem] md:text-[1.15rem] leading-[1.9] max-w-[460px] animate-fade-up delay-200">
                  <p>
                    Your mother lives three cities away. Your father's health data is
                    scattered across five apps and a drawer of old reports. Modern
                    families are more connected than ever and yet, when it comes to
                    health, we're isolated.
                  </p>
                  <p>
                    We find out too late. We react instead of prevent. Healthcare was
                    built for crisis. Nadiaura was built for every ordinary day before it.
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-10">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-[#0a1628] hover:bg-[#00A86B] text-white px-8 py-3.5 rounded-xl font-black text-[0.9rem] transition-all duration-300 hover:-translate-y-0.5 shadow-[0_6px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_32px_rgba(0,168,107,0.35)] overflow-hidden group relative"
                  >
                    <span className="absolute inset-0 w-[40%] h-[200%] bg-gradient-to-r from-transparent via-white/15 to-transparent -rotate-45 -translate-y-1/2 -translate-x-[200%] group-hover:translate-x-[350%] transition-transform duration-700 z-10" />
                    <span className="relative z-10 flex items-center gap-2">
                      Get Early Access
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </a>
                </div>
              </div>

              {/* RIGHT: 4 Problem Cards */}
              <div className="flex flex-col gap-4 animate-slide-right delay-300">
                {PROBLEMS.map(({ id, icon, title, body, highlight }) => (
                  <div
                    key={id}
                    className="flex items-start gap-5 bg-white/85 backdrop-blur-md border border-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] rounded-2xl hover:shadow-[0_10px_36px_rgba(0,168,107,0.12)] hover:-translate-y-1 transition-all duration-300 group"
                    style={{ padding: '1.4rem 1.5rem' }}
                  >
                    {/* Icon bubble */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[rgba(0,168,107,0.09)] flex items-center justify-center text-[#00A86B] group-hover:bg-[rgba(0,168,107,0.16)] transition-colors duration-300 mt-0.5">
                      <svg width="26" height="26" viewBox={icon.props.viewBox} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        {icon.props.children}
                      </svg>
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="font-black text-[#0a1628] text-[1.05rem] mb-1.5 leading-snug">
                        {title}
                      </h3>
                      <p className="text-[#5a738a] text-[0.92rem] leading-[1.75]">
                        {highlightText(body, highlight)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── SOLUTION SECTION ── */}
        <section className="px-6 sm:px-10 md:px-16 lg:px-24 pb-20 md:pb-28">
          <div className="max-w-[1140px] mx-auto">
            <div className="bg-white/60 backdrop-blur-2xl border border-white/80 rounded-[2rem] px-8 md:px-14 py-12 md:py-16 shadow-[0_20px_60px_rgba(0,168,107,0.07)]">
              <div>
                <p className="text-[0.78rem] font-black uppercase tracking-[0.42em] text-[#00A86B] mb-5">Our Answer</p>
                <h2 className="text-[2.2rem] md:text-[3.2rem] font-black leading-[1.1] tracking-[-1.5px] md:tracking-[-2px] text-[#0a1628] mb-6">
                  A Third Eye for every family.
                </h2>
                <p className="text-[#3d5a70] text-[1.05rem] md:text-[1.15rem] leading-[1.9] mb-10 max-w-[640px]">
                  Nadiaura quietly watches over your family's health patterns
                  physical, emotional, and financial and surfaces the signals that matter,
                  before they become emergencies.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {[
                    { label: 'Detect Early', desc: 'Spots subtle shifts weeks before they escalate.' },
                    { label: 'Alert Precisely', desc: 'Right person, right context never just noise.' },
                    { label: 'Stay Private', desc: 'Zero-intrusion. Data stays in your family.' },
                  ].map(({ label, desc }) => (
                    <div key={label} className="flex flex-col gap-3 bg-white/60 border border-white/80 rounded-2xl px-6 py-5 hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.05)] group">
                      <div className="w-2 h-2 rounded-full bg-[#00A86B] group-hover:scale-125 transition-transform duration-300" />
                      <p className="font-black text-[#0a1628] text-[1rem]">{label}</p>
                      <p className="text-[#5a738a] text-[0.9rem] leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
