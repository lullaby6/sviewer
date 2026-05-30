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

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        || ('ontouchstart' in window);
}

export function isPortrait() {
    return window.innerHeight > window.innerWidth;
}

export function isLandscape() {
    return window.innerWidth >= window.innerHeight;
}