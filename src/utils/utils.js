export async function getClipboardText() {
    try {
        const text = await navigator.clipboard.readText();
        console.log('Clipboard contents:', text);
        return text;
    } catch (err) {
        console.error('Failed to read clipboard:', err);
    }
}

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