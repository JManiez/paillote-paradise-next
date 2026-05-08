'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export function ClientScripts() {
  const pathname = usePathname();
  const router = useRouter();
  const scriptsLoaded = useRef(false);
  const skipPathDispatch = useRef(true);

  // Charger les scripts vanilla une seule fois (évite listeners dupliqués).
  useEffect(() => {
    if (scriptsLoaded.current) return;
    scriptsLoaded.current = true;

    const sources = ['/scripts/magnetic-cursor.js', '/scripts/scroll-cinema.js', '/scripts/main.js'];

    sources.forEach((src) => {
      const s = document.createElement('script');
      s.src = src;
      s.defer = true;
      s.dataset.ppDynamic = 'true';
      document.body.appendChild(s);
    });

    // Ne pas retirer les scripts au démontage : en dev (Strict Mode) cela dupliquerait
    // des listeners window sans les nettoyer proprement.
  }, []);

  // Navigation client : réinitialiser le contenu page sans recharger les scripts.
  useEffect(() => {
    if (skipPathDispatch.current) {
      skipPathDispatch.current = false;
      return;
    }
    queueMicrotask(() => {
      window.dispatchEvent(new CustomEvent('pp:page'));
    });
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest('a') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      if (href.startsWith('#')) return;
      if (/^(mailto|tel|sms|javascript):/i.test(href)) return;
      if (anchor.target && anchor.target !== '' && anchor.target !== '_self') return;
      if (anchor.hasAttribute('download')) return;
      if (/^https?:\/\//i.test(href)) {
        try {
          const url = new URL(href);
          if (url.host !== window.location.host) return;
        } catch {
          return;
        }
      }

      let path = href;
      if (/^https?:\/\//i.test(href)) {
        try {
          const url = new URL(href);
          path = url.pathname + url.search + url.hash;
        } catch {
          return;
        }
      }

      if (/\.(pdf|zip|jpg|png|webp|svg|mp4|mp3)$/i.test(path.split('?')[0])) return;

      e.preventDefault();
      router.push(path);
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [router]);

  return null;
}
