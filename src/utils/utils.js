export function isPWA() {
    const isStandalone = window.matchMedia(
        "(display-mode: standalone)"
    ).matches;
    const isIOSStandalone = window.navigator.standalone === true; // iOS

    return isStandalone || isIOSStandalone;
}

export function isPWAInstalled() {
    return localStorage.getItem('pwa-installed') === 'true';
}