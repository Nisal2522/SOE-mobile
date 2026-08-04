import { useCallback, useEffect, useState } from 'react';

function detectPlatform() {
  if (typeof window === 'undefined') {
    return {
      isIos: false,
      isSafari: false,
      isStandalone: false,
      isAndroid: false,
      isInAppBrowser: false,
    };
  }

  const ua = window.navigator.userAgent || '';
  const isIos =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const isAndroid = /Android/i.test(ua);
  // Real Safari on iOS (not Chrome/Firefox/Edge wrappers)
  const isSafari =
    isIos &&
    /Safari/i.test(ua) &&
    !/CriOS|FxiOS|OPiOS|EdgiOS/i.test(ua);
  const isInAppBrowser =
    /FBAN|FBAV|Instagram|Line\/|WhatsApp|MicroMessenger|TikTok|Bytedance|Snapchat|Twitter|LinkedInApp/i.test(
      ua,
    ) ||
    // Many in-app browsers omit "Safari" version markers inconsistently;
    // WhatsApp/iOS often opens SFSafariViewController which still looks like Safari.
    (isIos && document.referrer.includes('whatsapp'));
  const isStandalone =
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true;

  return { isIos, isSafari, isStandalone, isAndroid, isInAppBrowser };
}

export function usePwaInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [installed, setInstalled] = useState(false);
  const [platform, setPlatform] = useState(detectPlatform);

  useEffect(() => {
    setPlatform(detectPlatform());

    const onBeforeInstall = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };

    const onInstalled = () => {
      setDeferredPrompt(null);
      setInstalled(true);
      setPlatform(detectPlatform());
    };

    window.addEventListener('beforeinstallprompt', onBeforeInstall);
    window.addEventListener('appinstalled', onInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstall);
      window.removeEventListener('appinstalled', onInstalled);
    };
  }, []);

  const canNativeInstall = Boolean(deferredPrompt) && !platform.isStandalone && !installed;

  const promptInstall = useCallback(async () => {
    if (!deferredPrompt) return { ok: false, reason: 'unavailable' };
    deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    if (choice.outcome === 'accepted') {
      setInstalled(true);
      return { ok: true, reason: 'accepted' };
    }
    return { ok: false, reason: 'dismissed' };
  }, [deferredPrompt]);

  return {
    ...platform,
    canNativeInstall,
    installed,
    promptInstall,
  };
}
