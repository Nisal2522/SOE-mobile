import { useCallback, useEffect, useState } from 'react';

const APK_URL = './downloads/SOE.apk';

function detectPlatform() {
  if (typeof window === 'undefined') {
    return { isIos: false, isSafari: false, isStandalone: false, isAndroid: false };
  }

  const ua = window.navigator.userAgent || '';
  const isIos =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const isAndroid = /Android/i.test(ua);
  const isSafari =
    isIos &&
    /Safari/i.test(ua) &&
    !/CriOS|FxiOS|OPiOS|EdgiOS|Chrome|Android/i.test(ua);
  const isStandalone =
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true;

  return { isIos, isSafari, isStandalone, isAndroid };
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

  const downloadApk = useCallback(() => {
    const link = document.createElement('a');
    link.href = APK_URL;
    link.download = 'SOE.apk';
    link.rel = 'noopener';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }, []);

  return {
    ...platform,
    canNativeInstall,
    installed,
    promptInstall,
    downloadApk,
    apkUrl: APK_URL,
  };
}
