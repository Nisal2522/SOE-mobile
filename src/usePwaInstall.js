import { useCallback, useEffect, useState } from 'react';

function detectPlatform() {
  if (typeof window === 'undefined') {
    return {
      isIos: false,
      isSafari: false,
      isStandalone: false,
      isAndroid: false,
      isInAppBrowser: false,
      isIosChrome: false,
    };
  }

  const ua = window.navigator.userAgent || '';
  const isIos =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const isAndroid = /Android/i.test(ua);
  const isIosChrome = isIos && /CriOS/i.test(ua);
  // Safari or SFSafariViewController (WhatsApp "Open in Safari" still counts)
  const isSafari =
    isIos &&
    /Safari/i.test(ua) &&
    !/CriOS|FxiOS|OPiOS|EdgiOS/i.test(ua);
  const isInAppBrowser =
    /FBAN|FBAV|Instagram|Line\/|WhatsApp|MicroMessenger|TikTok|BytedanceWebview|Snapchat|Twitter|LinkedInApp/i.test(
      ua,
    );
  const isStandalone =
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true;

  return {
    isIos,
    isSafari,
    isStandalone,
    isAndroid,
    isInAppBrowser,
    isIosChrome,
  };
}

/**
 * Android Chrome: beforeinstallprompt → real Install dialog.
 * iPhone/iPad: Apple blocks that API — only Share → Add to Home Screen works.
 */
export function usePwaInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [installed, setInstalled] = useState(false);
  const [platform, setPlatform] = useState(detectPlatform);

  useEffect(() => {
    setPlatform(detectPlatform());
    setInstalled(detectPlatform().isStandalone);

    const onBeforeInstall = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };

    const onInstalled = () => {
      setDeferredPrompt(null);
      setInstalled(true);
      setPlatform(detectPlatform());
    };

    const onDisplayMode = () => {
      setPlatform(detectPlatform());
      setInstalled(detectPlatform().isStandalone);
    };

    window.addEventListener('beforeinstallprompt', onBeforeInstall);
    window.addEventListener('appinstalled', onInstalled);
    window.matchMedia('(display-mode: standalone)').addEventListener?.('change', onDisplayMode);

    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstall);
      window.removeEventListener('appinstalled', onInstalled);
    };
  }, []);

  const canNativeInstall = Boolean(deferredPrompt) && !platform.isStandalone && !installed;
  // Every iPhone/iPad needs the manual Home Screen flow (no install API)
  const needsIosInstallHelp = platform.isIos && !platform.isStandalone && !installed;

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
    needsIosInstallHelp,
    installed,
    promptInstall,
  };
}
