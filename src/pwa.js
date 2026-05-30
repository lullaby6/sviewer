import { registerSW } from 'virtual:pwa-register'

registerSW({
    immediate: true
})

window.addEventListener('appinstalled', () => {
    localStorage.setItem('pwa-installed', 'true');
});

window.deferredPrompt = null;

window.addEventListener('beforeinstallprompt', event => {
    console.log('PWA install prompt');

    event.preventDefault();

    window.deferredPrompt = event;
});