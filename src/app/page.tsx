import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#fafcfb] overflow-x-hidden relative">

      {/* ════════════════════════════════════════
          3D PREMIUM AMBIENT BACKGROUND (ENHANCED FOR PRESENTATION)
      ════════════════════════════════════════ */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-10] bg-[#f4faf7]">
        {/* 3D Perspective Grid */}
        <div className="absolute inset-[-100%] animate-[slow-spin_120s_linear_infinite]"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,168,107,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,168,107,0.06) 1px, transparent 1px)',
            backgroundSize: '100px 100px',
            transform: 'perspective(1000px) rotateX(60deg) scale(2)',
            transformOrigin: 'center center'
          }} />

        {/* Massive vibrant orbs */}
        {/* Orb 1 – Primary emerald top-left */}
        <div
          className="absolute top-[-15%] left-[-15%] w-[70vw] h-[70vw] rounded-full mix-blend-multiply filter blur-[100px] opacity-[0.5] animate-slow-spin"
          style={{ background: 'radial-gradient(circle, rgba(0,168,107,0.3) 0%, rgba(0,168,107,0) 70%)' }}
        />
        {/* Orb 2 – Aqua top-right */}
        <div
          className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] rounded-full mix-blend-multiply filter blur-[110px] opacity-40 animate-reverse-spin"
          style={{ background: 'radial-gradient(circle, rgba(0,210,130,0.25) 0%, rgba(0,168,107,0) 70%)' }}
        />
        {/* Orb 3 – Deep teal bottom */}
        <div
          className="absolute bottom-[-30%] left-[10%] w-[80vw] h-[80vw] rounded-full mix-blend-multiply filter blur-[130px] opacity-[0.4]"
          style={{ background: 'radial-gradient(circle, rgba(0,120,80,0.28) 0%, rgba(0,168,107,0) 70%)' }}
        />
        {/* Orb 4 – Center accent */}
        <div
          className="absolute top-[40%] left-[40%] w-[40vw] h-[40vw] rounded-full mix-blend-multiply filter blur-[90px] opacity-35"
          style={{ background: 'radial-gradient(circle, rgba(0,200,130,0.18) 0%, rgba(0,168,107,0) 70%)' }}
        />

        {/* Deep frost veil */}
        <div className="absolute inset-0 backdrop-blur-[50px] bg-white/55" />
      </div>

      {/* ════════════════════════════════════════
          NAVBAR
      ════════════════════════════════════════ */}
      <nav className="fixed top-0 left-0 right-0 h-[72px] flex items-center justify-between px-6 md:px-20 bg-white/70 backdrop-blur-xl border-b border-[rgba(0,168,107,0.1)] z-[1000] animate-slide-left">
        {/* Logo */}
        <div className="flex items-center gap-2.5 text-[1.2rem] md:text-[1.4rem] font-black text-[#0a1628] tracking-tight">
          Nadiaura Ai
        </div>
        {/* Nav Links */}
        <div className="flex items-center gap-4 md:gap-8 animate-slide-right delay-200">
          <button className="hidden md:block text-[0.95rem] font-black uppercase tracking-widest text-[#5a738a] hover:text-[#00A86B] transition-colors duration-300 bg-transparent border-none cursor-pointer relative group/link">
            Vision
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00A86B] transition-all duration-300 group-hover/link:w-full rounded-full blur-[1px]"></span>
          </button>
          <button className="hidden md:block text-[0.95rem] font-black uppercase tracking-widest text-[#5a738a] hover:text-[#00A86B] transition-colors duration-300 bg-transparent border-none cursor-pointer relative group/link">
            Team
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00A86B] transition-all duration-300 group-hover/link:w-full rounded-full blur-[1px]"></span>
          </button>
          <button className="relative bg-[#00A86B] hover:bg-[#00c97e] text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full font-black text-[0.9rem] md:text-[0.95rem] shadow-[0_4px_16px_rgba(0,168,107,0.25)] hover:shadow-[0_8px_24px_rgba(0,168,107,0.4)] transition-all duration-300 border-none cursor-pointer overflow-hidden group/btn hover:-translate-y-0.5">
            <div className="absolute inset-0 w-[50%] h-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent -rotate-45 -translate-y-1/2 -translate-x-[150%] group-hover/btn:translate-x-[250%] transition-transform duration-700 ease-in-out z-10" />
            <span className="relative z-10">Join Waitlist</span>
          </button>
        </div>
      </nav>

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] min-h-screen pt-[72px]">

        {/* ── LEFT: Text ── */}
        <div className="relative flex flex-col justify-center px-6 py-16 md:px-24 md:py-20 text-center lg:text-left items-center lg:items-start overflow-hidden bg-white/10 backdrop-blur-[2px]">
          {/* Subtle ambient bloom behind text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_70%)] pointer-events-none -z-10 animate-breathe" />

          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-white/45 backdrop-blur-xl border border-[rgba(0,168,107,0.2)] shadow-[0_4px_20px_rgba(0,168,107,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] text-[#007a4d] px-5 py-2 md:px-7 md:py-3 rounded-full text-[0.7rem] md:text-xs font-black uppercase tracking-[0.22em] mb-7 md:mb-9 animate-slide-left delay-400 cursor-default hover:scale-[1.03] transition-all duration-400 relative overflow-hidden">
            {/* Subtle top border line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,168,107,0.25)] to-transparent" />
            {/* Shimmer on hover only */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-[shimmer_3s_2s_infinite]" />
            {/* Static LED dot */}
            <span className="w-2 h-2 rounded-full bg-[#00A86B] shadow-[0_0_5px_rgba(0,168,107,0.5)] flex-shrink-0" />
            <span className="relative z-10">Preventive Health AI</span>
          </div>

          {/* Main Title - Holographic Gradient */}
          <h1 className="text-[3.8rem] md:text-[5.5rem] font-black leading-[1.05] tracking-[-2px] md:tracking-[-3px] text-[#0a1628] mb-2 animate-slide-left delay-500 drop-shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            Nadiaura{' '}
            <span className="relative inline-block">
              <span className="text-gradient animate-gradient relative z-10">AI</span>
              {/* Backlight flare for text */}
              <span className="absolute inset-0 bg-[#00A86B] blur-[30px] opacity-30 rounded-full z-0"></span>
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-[1.3rem] md:text-[1.8rem] italic font-medium text-[#00A86B] mb-4 md:mb-6 animate-slide-left delay-600">
            The Third Eye for Modern Families
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-[#5a738a] leading-relaxed max-w-[480px] mb-10 md:mb-12 animate-fade-up delay-700">
            AI that detects health changes early. Alerts the people who care.
            Built to be the silent guardian of every household in India and beyond.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full sm:w-auto animate-fade-up delay-800">
            <button className="relative w-full sm:w-auto bg-[#0a1628] text-white px-9 md:px-11 py-4 md:py-5 rounded-xl font-black text-[1rem] md:text-[1.05rem] hover:-translate-y-1 hover:bg-[#00A86B] transition-all duration-300 border-none cursor-pointer overflow-hidden group/cta shadow-[0_10px_30px_rgba(0,168,107,0.15)] hover:shadow-[0_20px_45px_rgba(0,168,107,0.35)]">
              <span className="relative z-10 flex items-center gap-2.5">
                Get Early Access
                <span className="group-hover/cta:translate-x-1 transition-transform duration-300">→</span>
              </span>
              {/* Refraction sweep */}
              <div className="absolute inset-0 w-[40%] h-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent -rotate-45 -translate-y-1/2 -translate-x-[200%] group-hover/cta:translate-x-[350%] transition-transform duration-700 ease-in-out z-20" />
              {/* Edge highlight – static top border */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            </button>
          </div>

          {/* Stats – Glass Cards */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-14 md:mt-20 w-full justify-center lg:justify-start">
            <div className="relative bg-white/45 backdrop-blur-xl border border-white/80 shadow-[0_15px_40px_rgba(0,168,107,0.08)] rounded-2xl px-8 py-5 animate-pop-in delay-900 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,168,107,0.14)] transition-all duration-400 cursor-default group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600 ease-in-out pointer-events-none" />
              <strong className="relative z-10 block text-[2rem] md:text-[2.4rem] font-black tracking-tight leading-none mb-1 text-gradient animate-gradient group-hover:scale-[1.05] transition-transform duration-300">1B+</strong>
              <span className="relative z-10 text-[0.75rem] text-[#5a738a] font-black uppercase tracking-[0.18em]">Lives to impact</span>
            </div>
            <div className="relative bg-white/45 backdrop-blur-xl border border-white/80 shadow-[0_15px_40px_rgba(0,168,107,0.08)] rounded-2xl px-8 py-5 animate-pop-in delay-1000 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,168,107,0.14)] transition-all duration-400 cursor-default group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600 ease-in-out pointer-events-none" />
              <strong className="relative z-10 block text-[2rem] md:text-[2.4rem] font-black tracking-tight leading-none mb-1 text-gradient animate-gradient group-hover:scale-[1.05] transition-transform duration-300">#1</strong>
              <span className="relative z-10 text-[0.75rem] text-[#5a738a] font-black uppercase tracking-[0.18em]">Preventive AI</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Living Image Panel ── */}
        <div className="relative animate-slide-right delay-600">
          {/* Panel container — must be relative + have height for fill to work */}
          <div
            className="relative w-full overflow-hidden bg-white/20 backdrop-blur-3xl lg:rounded-[2.5rem] border border-white/70 shadow-[inset_0_0_20px_rgba(255,255,255,0.5),0_40px_100px_rgba(0,168,107,0.15)] group"
            style={{ minHeight: 'calc(90vh - 60px)' }}
          >
            {/* Atmospheric orbs */}
            <div className="absolute w-[400px] h-[400px] -top-[100px] -right-[100px] rounded-full pointer-events-none z-0"
              style={{ background: 'radial-gradient(circle, rgba(0,168,107,0.1) 0%, transparent 70%)' }} />
            <div className="absolute w-[300px] h-[300px] -bottom-[80px] -left-[80px] rounded-full pointer-events-none z-0"
              style={{ background: 'radial-gradient(circle, rgba(0,200,140,0.08) 0%, transparent 70%)' }} />

            {/* The image — fill makes it truly fill the parent box */}
            <Image
              src="/Home.png"
              alt="Nadiaura App"
              fill
              className="object-contain object-center scale-[2] group-hover:scale-[1.4]"
              priority
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          VISION — CLEAN LIGHT GLASS ISLAND
      ════════════════════════════════════════ */}
      <section className="relative py-10 md:py-20 px-4 md:px-10 z-10">
        <div className="max-w-[1300px] mx-auto bg-white/40 backdrop-blur-3xl rounded-[3rem] md:rounded-[4rem] border border-white/60 shadow-[0_30px_80px_rgba(0,168,107,0.08),inset_0_0_60px_rgba(255,255,255,0.7)] overflow-hidden relative px-6 py-20 md:py-28 text-center">

          {/* Soft top radial light */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(0,168,107,0.07)_0%,transparent_70%)] pointer-events-none" />
          {/* Volumetric center fill */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7)_0%,transparent_80%)] pointer-events-none" />

          <div className="relative z-10 max-w-[860px] mx-auto animate-fade-up">
            {/* Eyebrow */}
            <div className="text-[0.72rem] md:text-xs font-black uppercase tracking-[0.35em] mb-6 md:mb-8 text-[#00A86B]">
              Our Vision
            </div>

            {/* Title */}
            <h2 className="text-[2.5rem] md:text-[4.5rem] font-black leading-[1.1] tracking-[-1px] md:tracking-[-3px] text-[#0a1628] mb-6 md:mb-8">
              Every family deserves{' '}<br className="hidden md:block" />
              <span className="italic relative inline-block">
                <span className="text-gradient animate-gradient">A Third Eye.</span>
              </span>
            </h2>

            {/* Divider */}
            <div className="w-16 md:w-20 h-[2px] mx-auto mb-10 md:mb-12 rounded-full bg-gradient-to-r from-transparent via-[#00A86B] to-transparent opacity-50" />

            {/* Description */}
            <p className="text-[1.05rem] md:text-[1.2rem] leading-[1.75] md:leading-[1.85] mb-14 md:mb-20 text-[#5a738a] font-medium max-w-[700px] mx-auto">
              Nadiaura notices what families miss — before it becomes a crisis.
              The AI companion that keeps watch over your physical, emotional, and financial wellbeing.
            </p>

            {/* Pillars */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-5 justify-center mb-14 md:mb-20">
              {[
                { icon: '', label: 'Physical Health' },
                { icon: '', label: 'Emotional Wellbeing' },
                { icon: '', label: 'Financial Wellness' },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  className="relative flex items-center justify-center gap-3 bg-white/60 border border-white/80 px-7 md:px-9 py-4 md:py-5 rounded-2xl font-bold text-[0.95rem] md:text-base hover:scale-[1.03] hover:-translate-y-1.5 transition-all duration-400 cursor-default backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,168,107,0.1)] group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600 ease-in-out pointer-events-none" />
                  <span className="text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300 relative z-10">{icon}</span>
                  <span className="text-[#0a1628] font-bold group-hover:text-[#00A86B] transition-colors relative z-10">{label}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-col md:flex-row gap-5 md:gap-6 justify-center">
              {[
                { num: '1B+', label: 'Lives Impacted' },
                { num: '#1', label: 'Preventive AI in India' },
              ].map(({ num, label }) => (
                <div
                  key={label}
                  className="relative bg-white/60 border border-white/80 rounded-2xl md:rounded-[24px] px-10 py-8 md:px-16 md:py-10 min-w-[180px] md:min-w-[260px] backdrop-blur-xl hover:scale-[1.03] hover:-translate-y-2 transition-all duration-400 shadow-[0_12px_30px_rgba(0,168,107,0.06)] hover:shadow-[0_20px_50px_rgba(0,168,107,0.12)] overflow-hidden group cursor-default"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600 ease-in-out pointer-events-none" />
                  <div className="relative z-10 text-[3.5rem] md:text-[4.5rem] font-black tracking-[-2px] leading-none mb-2 md:mb-3 text-gradient animate-gradient">{num}</div>
                  <div className="relative z-10 text-[0.85rem] md:text-[0.9rem] font-black tracking-[0.2em] uppercase text-[#5a738a]">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WAITLIST (LIGHT GLASS ISLAND)
      ════════════════════════════════════════ */}
      <section className="relative py-10 md:py-20 px-4 md:px-10 z-10 mb-20 animate-fade-up">
        <div className="max-w-[1000px] mx-auto bg-white/40 backdrop-blur-3xl rounded-[3rem] md:rounded-[4rem] border border-white/60 shadow-[0_40px_100px_rgba(0,168,107,0.15),inset_0_0_80px_rgba(255,255,255,0.8)] overflow-hidden relative px-6 py-20 md:py-28 text-center group">

          {/* Volumetric lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_100%)] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-[2.5rem] md:text-[3.5rem] font-black tracking-[-1px] md:tracking-[-2px] text-[#0a1628] mb-4 drop-shadow-[0_10px_20px_rgba(0,0,0,0.05)]">
              Be the first to experience it.
            </h2>
            <p className="text-[1.1rem] md:text-[1.2rem] text-[#5a738a] mb-10 md:mb-14 leading-relaxed font-medium">
              Join thousands of families already on the waitlist.<br className="hidden md:block" />
              Early access opens <span className="text-[#00A86B] font-bold">2026</span>.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-5 justify-center max-w-[600px] mx-auto group/form">
              <div className="relative w-full md:flex-1">
                {/* Reactive focus ring */}
                <div className="absolute inset-[-2px] bg-[#00A86B] rounded-[18px] blur-[8px] opacity-0 group-focus-within/form:opacity-15 transition-opacity duration-400" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="relative w-full bg-white/90 backdrop-blur-xl border border-white shadow-[0_10px_20px_rgba(0,168,107,0.04),inset_0_1px_5px_rgba(0,0,0,0.01)] px-6 py-4 md:px-7 md:py-5 rounded-2xl text-[1.05rem] text-[#0a1628] outline-none placeholder:text-[#aab8c6] focus:border-[#00A86B] transition-all font-medium z-10"
                />
              </div>
              <button
                type="button"
                className="relative w-full md:w-auto bg-[#0a1628] text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl font-black text-[1rem] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_15px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 hover:bg-[#00A86B] hover:shadow-[0_20px_40px_rgba(0,168,107,0.4)] transition-all whitespace-nowrap border-none cursor-pointer flex items-center justify-center gap-2 overflow-hidden group/btn"
              >
                <div className="absolute inset-0 w-[50%] h-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent -rotate-45 -translate-y-1/2 -translate-x-[150%] group-hover/btn:translate-x-[250%] transition-transform duration-1000 ease-in-out z-20" />
                <span className="relative z-10 flex items-center gap-2">
                  Notify Me
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
