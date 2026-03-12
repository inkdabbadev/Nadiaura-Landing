'use client';

import { useEffect } from 'react';

export default function AnimationProvider() {
  useEffect(() => {
    /* ─── 1. INTERSECTION OBSERVER — scroll reveal ─── */
    const revealEls = document.querySelectorAll(
      'h1, h2, h3, p, section > div, .reveal, main > section',
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    revealEls.forEach((el) => {
      el.classList.add('will-reveal');
      observer.observe(el);
    });

    /* ─── 2. MAGNETIC BUTTONS ─── */
    const magnetBtns = document.querySelectorAll<HTMLElement>('a[href], button');
    magnetBtns.forEach((btn) => {
      btn.addEventListener('mousemove', (e: Event) => {
        const me = e as MouseEvent;
        const rect = btn.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (me.clientX - cx) * 0.18;
        const dy = (me.clientY - cy) * 0.18;
        btn.style.transform = `translate(${dx}px, ${dy}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });

    /* ─── 4. COUNTER ANIMATION for stat numbers ─── */
    const countEls = document.querySelectorAll<HTMLElement>('[data-count]');
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        const target = parseFloat(el.dataset.count || '0');
        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        const dur = 1800;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / dur, 1);
          const ease = 1 - Math.pow(1 - t, 4);
          el.textContent = prefix + (target % 1 === 0 ? Math.floor(ease * target) : (ease * target).toFixed(1)) + suffix;
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        countObserver.unobserve(el);
      });
    }, { threshold: 0.5 });
    countEls.forEach((el) => countObserver.observe(el));

    /* ─── 5. TILT CARDS ─── */
    const cards = document.querySelectorAll<HTMLElement>('[data-tilt]');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e: Event) => {
        const me = e as MouseEvent;
        const rect = card.getBoundingClientRect();
        const x = (me.clientX - rect.left) / rect.width - 0.5;
        const y = (me.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(800px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateZ(8px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });

    return () => {
      observer.disconnect();
      countObserver.disconnect();
    };
  }, []);

  return null;
}
