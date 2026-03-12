'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

const WHATSAPP_URL =
  'https://wa.me/919940183984?text=Hello%2C%0AI%20would%20love%20to%20experience%20the%20Third%20Eye%20for%20my%20family.%0APlease%20grant%20me%20access%20to%20Nadia%20Aura.';

type Page = 'home' | 'vision' | 'team';

const NAV_LINKS: { href: string; label: string; id: Page }[] = [
  { href: '/', label: 'Home', id: 'home' },
  { href: '/vision', label: 'Vision', id: 'vision' },
  { href: '/team', label: 'Team', id: 'team' },
];

export default function Navbar({ active }: { active?: Page }) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  // Close on route change / escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [close]);

  return (
    <>
      {/* ─── NAVBAR STRIP ─── */}
      <nav
        className="flex items-center justify-between px-5 md:px-20 bg-white/80 backdrop-blur-xl border-b border-[rgba(0,168,107,0.12)]"
        style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 72, zIndex: 1000 }}
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={close}
          className="flex items-center gap-2.5 text-[1.2rem] md:text-[1.4rem] font-black text-[#0a1628] tracking-tight hover:text-[#00A86B] transition-colors duration-300"
        >
          <Image src="/favicon.png" alt="Nadiaura" width={32} height={32} className="rounded-lg" />
          Nadiaura<span className="text-[#00A86B]">Ai</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ href, label, id }) => (
            <Link
              key={id}
              href={href}
              className={`relative text-[0.85rem] font-black uppercase tracking-[0.18em] transition-colors duration-300 group/nl ${active === id ? 'text-[#00A86B]' : 'text-[#5a738a] hover:text-[#00A86B]'
                }`}
            >
              {label}
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#00A86B] rounded-full transition-all duration-300 ${active === id ? 'w-full' : 'w-0 group-hover/nl:w-full'
                }`} />
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-[#00A86B] hover:bg-[#00c97e] text-white px-6 py-2.5 rounded-full font-black text-[0.88rem] shadow-[0_4px_16px_rgba(0,168,107,0.25)] hover:shadow-[0_8px_24px_rgba(0,168,107,0.4)] transition-all duration-300 overflow-hidden group/cta hover:-translate-y-0.5 inline-flex items-center"
          >
            <span className="absolute inset-0 w-[50%] h-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent -rotate-45 -translate-y-1/2 -translate-x-[150%] group-hover/cta:translate-x-[250%] transition-transform duration-700 z-10" />
            <span className="relative z-10">Join Waitlist</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl bg-white/70 border border-white/80 backdrop-blur-md gap-[5px] flex-shrink-0 hover:border-[rgba(0,168,107,0.3)] transition-all duration-200"
        >
          <span
            className="block w-[18px] h-[2px] rounded-full bg-[#0a1628] origin-center"
            style={{
              transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)',
              transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block w-[18px] h-[2px] rounded-full bg-[#0a1628]"
            style={{
              transition: 'opacity 0.2s, transform 0.2s',
              opacity: open ? 0 : 1,
              transform: open ? 'scaleX(0)' : 'scaleX(1)',
            }}
          />
          <span
            className="block w-[18px] h-[2px] rounded-full bg-[#0a1628] origin-center"
            style={{
              transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)',
              transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* ─── MOBILE DROPDOWN (slides down from below the navbar) ─── */}
      <div
        className="md:hidden"
        style={{
          position: 'fixed',
          top: 72,
          left: 0,
          right: 0,
          zIndex: 999,
          overflow: 'hidden',
          // Animate max-height for smooth slide-down
          maxHeight: open ? '500px' : '0px',
          transition: 'max-height 0.45s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <div
          style={{
            background: 'rgba(255,255,255,0.97)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            borderBottom: '1px solid rgba(0,168,107,0.12)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
          }}
        >
          {/* Green top pulse line */}
          <div style={{
            height: 2,
            background: 'linear-gradient(90deg, #00A86B, #00d4a0, #00A86B)',
          }} />

          {/* Nav links list */}
          <div className="flex flex-col px-5 py-4 gap-1">
            {NAV_LINKS.map(({ href, label, id }, i) => (
              <Link
                key={id}
                href={href}
                onClick={close}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl font-black text-[0.9rem] uppercase tracking-[0.15em] transition-colors duration-200 ${active === id
                  ? 'bg-[rgba(0,168,107,0.09)] text-[#00A86B]'
                  : 'text-[#0a1628] hover:bg-[rgba(0,168,107,0.05)] hover:text-[#00A86B]'
                  }`}
                style={{
                  opacity: open ? 1 : 0,
                  transform: open ? 'translateY(0)' : 'translateY(-10px)',
                  transition: `opacity 0.35s ease ${0.08 + i * 0.07}s, transform 0.35s cubic-bezier(0.16,1,0.3,1) ${0.08 + i * 0.07}s, background-color 0.2s, color 0.2s`,
                }}
              >
                {active === id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A86B] flex-shrink-0" />
                )}
                {label}
              </Link>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="px-5 pb-5 pt-1">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="flex items-center justify-center gap-2.5 w-full bg-[#00A86B] hover:bg-[#00c97e] text-white py-3.5 rounded-xl font-black text-[0.9rem] shadow-[0_6px_20px_rgba(0,168,107,0.28)] hover:shadow-[0_10px_28px_rgba(0,168,107,0.42)] transition-all duration-300 overflow-hidden relative group"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? 'translateY(0)' : 'translateY(-8px)',
                transition: 'opacity 0.35s ease 0.28s, transform 0.35s cubic-bezier(0.16,1,0.3,1) 0.28s, background-color 0.2s',
              }}
            >
              <span className="absolute inset-0 w-[50%] h-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent -rotate-45 -translate-y-1/2 -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-700 z-10" />
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" className="relative z-10 flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="relative z-10">Join Waitlist on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Tap outside to close (invisible overlay behind content) */}
      {open && (
        <div
          onClick={close}
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            top: 72,
            zIndex: 998,
          }}
        />
      )}
    </>
  );
}
