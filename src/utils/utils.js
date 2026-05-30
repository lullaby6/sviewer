export async function getClipboardText() {
    try {
        const text = await navigator.clipboard.readText();
        console.log('Clipboard contents:', text);
        return text;
    } catch (err) {
        console.error('Failed to read clipboard:', err);
    }
}
