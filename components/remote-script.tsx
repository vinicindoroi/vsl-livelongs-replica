'use client';

import { useEffect } from 'react';

export function RemoteScript({ id, src }: { id: string; src: string }) {
  useEffect(() => {
    if (document.getElementById(id)) return;

    const script = document.createElement('script');
    script.id = id;
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
  }, [id, src]);

  return null;
}

declare global {
  interface Window {
    acceptUpsell?: (url: string) => void;
  }
}

export function acceptUpsell(url: string) {
  window.acceptUpsell?.(url);
}
