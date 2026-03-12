import Image from 'next/image';
import Navbar from '../components/Navbar';

const WHATSAPP_URL =
  'https://wa.me/919940183984?text=Hello%2C%0AI%20would%20love%20to%20experience%20the%20Third%20Eye%20for%20my%20family.%0APlease%20grant%20me%20access%20to%20Nadia%20Aura.';

const TEAM = [
  {
    id: 'sundar',
    name: 'Sundaravadivel P',
    title: 'CEO & CO-FOUNDER',
    specialty: 'Business Strategy | Go-To-Market Partnerships',
    image: '/Team/sundar.png',
    initials: 'SP',
    featured: false,
  },
  {
    id: 'lalu',
    name: 'Rohini Manohar',
    title: 'CHIEF WELLNESS OFFICER',
    specialty: 'Preventive Health | Wellness Protocols | Clinical Design',
    image: '/Team/lalu.png',
    initials: 'RM',
    featured: true,
  },
  {
    id: 'bhuvi',
    name: 'Bhuvaneshwaran Prakasam',
    title: 'CTO & CO-FOUNDER',
    specialty: 'Machine Learning | Health Data Systems | Platform Engineering',
    image: '/Team/bhuvi.png',
    initials: 'BP',
    featured: false,
  },
];

export default function TeamPage() {
  return (
    <div className="w-full min-h-screen bg-[#f4faf7] overflow-x-hidden relative">

      {/* ── AMBIENT BG ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-10] bg-[#f4faf7]">
        <div className="absolute inset-[-100%]" style={{
          backgroundImage: 'linear-gradient(rgba(0,168,107,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,168,107,0.05) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
          transform: 'perspective(1000px) rotateX(60deg) scale(2)',
          transformOrigin: 'center center',
        }} />
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full mix-blend-multiply blur-[130px] opacity-35 animate-slow-spin"
          style={{ background: 'radial-gradient(circle, rgba(0,168,107,0.3) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-multiply blur-[130px] opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(0,210,130,0.2) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 backdrop-blur-[50px] bg-white/60" />
      </div>

      <Navbar active="team" />

      <main className="pt-[72px]">

        {/* ── HEADER ── */}
        <section className="px-5 sm:px-10 md:px-16 pt-14 md:pt-20 pb-10 md:pb-14">
          <div className="max-w-[1180px] mx-auto flex flex-col items-start gap-3">
            <span className="inline-flex items-center gap-2 text-[0.68rem] font-black uppercase tracking-[0.38em] text-[#00A86B]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A86B]" />
              The Team
            </span>
            <h1 className="text-[2.2rem] sm:text-[3rem] md:text-[4rem] font-black tracking-[-2px] md:tracking-[-3px] text-[#0a1628] leading-[1.08]">
              Built by domain experts.
            </h1>
            <p className="text-[#5a738a] text-[0.95rem] md:text-[1.05rem] leading-relaxed max-w-[480px] mt-1">
              A team of founders, clinicians, and engineers united by one mission
              preventive health for every family in India.
            </p>
          </div>
        </section>

        {/* ── CARDS GRID ── */}
        <section className="px-5 sm:px-10 md:px-16 pb-16 md:pb-24">
          <div className="max-w-[1180px] mx-auto">

            {/* Desktop: 3-col with center taller. Mobile: stacked */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 items-end">
              {TEAM.map(({ id, name, title, specialty, image, initials, featured }) => (
                <div
                  key={id}
                  className="relative group"
                  style={{
                    /* featured center card is taller */
                    paddingTop: featured ? '0' : '5%',
                  }}
                >
                  {/* Card shell */}
                  <div
                    className="relative w-full overflow-hidden transition-all duration-500 group-hover:-translate-y-2"
                    style={{
                      borderRadius: 20,
                      aspectRatio: featured ? '3/4.2' : '3/4',
                      border: featured
                        ? '3px solid #00A86B'
                        : '2px solid rgba(0,168,107,0.3)',
                      boxShadow: featured
                        ? '0 24px 70px rgba(0,168,107,0.28), 0 0 0 1px rgba(0,168,107,0.08)'
                        : '0 12px 40px rgba(0,0,0,0.1)',
                    }}
                  >
                    {/* BG gradient */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: featured
                          ? 'linear-gradient(170deg, #00d084 0%, #00A86B 45%, #006e44 100%)'
                          : 'linear-gradient(170deg, #00ba76 0%, #009960 45%, #005e3a 100%)',
                      }}
                    />

                    {/* Light radial highlight top-left */}
                    <div className="absolute top-0 left-0 w-3/4 h-1/2 pointer-events-none"
                      style={{ background: 'radial-gradient(ellipse at 25% 20%, rgba(255,255,255,0.18) 0%, transparent 60%)' }} />

                    {/* Photo */}
                    {image ? (
                      <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                        sizes="(max-width: 640px) 100vw, 33vw"
                        priority
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center pb-20">
                        <div className="w-24 h-24 rounded-full bg-white/15 border-4 border-white/25 flex items-center justify-center text-white font-black text-3xl backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
                          {initials}
                        </div>
                      </div>
                    )}

                    {/* Bottom text gradient */}
                    <div
                      className="absolute bottom-0 left-0 right-0"
                      style={{
                        height: '52%',
                        background: 'linear-gradient(to top, rgba(0,60,35,0.97) 0%, rgba(0,60,35,0.82) 45%, transparent 100%)',
                      }}
                    />

                    {/* Text */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                      <h2
                        className="text-white font-black leading-tight uppercase mb-1.5"
                        style={{ fontSize: featured ? '1.1rem' : '0.98rem', letterSpacing: '0.01em' }}
                      >
                        {name}
                      </h2>
                      <p className="font-black uppercase tracking-[0.16em] mb-2"
                        style={{ fontSize: '0.65rem', color: '#4dffc0' }}>
                        {title}
                      </p>
                      <p className="text-white/70 leading-snug font-medium"
                        style={{ fontSize: '0.75rem' }}>
                        {specialty}
                      </p>
                    </div>

                    {/* Shimmer on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/[0.07] to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-5 sm:px-10 md:px-16 pb-20 md:pb-28">
          <div className="max-w-[680px] mx-auto text-center bg-white/55 backdrop-blur-2xl border border-white/70 rounded-[2rem] px-7 md:px-14 py-12 shadow-[0_20px_60px_rgba(0,168,107,0.07),inset_0_1px_0_rgba(255,255,255,0.9)]">
            <p className="text-[0.68rem] font-black uppercase tracking-[0.38em] text-[#00A86B] mb-4">Join the Mission</p>
            <h2 className="text-[1.7rem] md:text-[2.4rem] font-black tracking-[-1px] md:tracking-[-2px] text-[#0a1628] mb-4 leading-[1.15]">
              Be part of something<br className="hidden md:block" /> that matters.
            </h2>
            <p className="text-[#5a738a] text-[0.92rem] md:text-[1rem] leading-relaxed mb-8 max-w-[400px] mx-auto">
              We're a small, focused team with a massive mission. If our vision resonates reach out on WhatsApp.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#0a1628] hover:bg-[#00A86B] text-white px-9 py-4 rounded-xl font-black text-[0.95rem] transition-all duration-300 hover:-translate-y-1 shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:shadow-[0_16px_40px_rgba(0,168,107,0.35)] overflow-hidden group relative"
            >
              <span className="absolute inset-0 w-[40%] h-[200%] bg-gradient-to-r from-transparent via-white/15 to-transparent -rotate-45 -translate-y-1/2 -translate-x-[200%] group-hover:translate-x-[350%] transition-transform duration-700 z-10" />
              <span className="relative z-10 flex items-center gap-2">
                Connect on WhatsApp
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}
