'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export function ClientScripts() {
  const pathname = usePathname();
  const router = useRouter();

  // Recharger les scripts vanilla à chaque navigation pour relancer init() sur les nouveaux nodes DOM
  useEffect(() => {
    const sources = [
      '/scripts/magnetic-cursor.js',
      '/scripts/scroll-cinema.js',
      '/scripts/main.js',
    ];

    const elements: HTMLScriptElement[] = sources.map((src) => {
      const s = document.createElement('script');
      s.src = src + '?t=' + Date.now();
      s.defer = true;
      s.dataset.ppDynamic = 'true';
      document.body.appendChild(s);
      return s;
    });

    return () => {
      elements.forEach((s) => {
        if (s.parentNode) s.parentNode.removeChild(s);
      });
    };
  }, [pathname]);

  // Intercepter les clics sur les <a> internes pour utiliser le router Next.js
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      // Ne pas intercepter si modificateurs
      if (e.defaultPrevented) return;
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest('a') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Ignorer ancres internes (#xxx)
      if (href.startsWith('#')) return;
      // Ignorer mailto / tel / autres protocoles
      if (/^(mailto|tel|sms|javascript):/i.test(href)) return;
      // Ignorer target="_blank" et external
      if (anchor.target && anchor.target !== '' && anchor.target !== '_self') return;
      if (anchor.hasAttribute('download')) return;
      // Ignorer URLs absolues vers d'autres domaines
      if (/^https?:\/\//i.test(href)) {
        try {
          const url = new URL(href);
          if (url.host !== window.location.host) return;
        } catch {
          return;
        }
      }

      // Si c'est un lien interne, intercepter
      let path = href;
      if (/^https?:\/\//i.test(href)) {
        try {
          const url = new URL(href);
          path = url.pathname + url.search + url.hash;
        } catch {
          return;
        }
      }

      // Pages externes (PDF, etc.)
      if (/\.(pdf|zip|jpg|png|webp|svg|mp4|mp3)$/i.test(path.split('?')[0])) return;

      e.preventDefault();
      router.push(path);
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [router]);

  return null;
}
