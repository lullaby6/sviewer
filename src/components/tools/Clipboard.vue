<script setup>

import { IconClipboard } from '@tabler/icons-vue';
import { useToast } from 'vue-toastification';

import Button from '@/components/Button.vue';
import { addImages, addImageURL } from '@/stores/images.js';

const toast = useToast();

function isValidURL(text) {
    try {
        new URL(text);
        return true;
    } catch {
        return false;
    }
}

function loadImageFromURL(url) {
    const image = new Image();
    image.onload = () => {
        addImageURL(url);
        toast.success('Image loaded from clipboard URL');
    };
    image.onerror = () => {
        toast.error('Clipboard URL is not a valid image');
    };
    image.src = url;
}

async function pasteFromClipboard() {
    try {
        const items = await navigator.clipboard.read();

        for (const item of items) {
            // 1. Direct image in the clipboard
            const imageType = item.types.find(type => type.startsWith('image/'));
            if (imageType) {
                const blob = await item.getType(imageType);
                addImages([blob]);
                toast.success('Image pasted from clipboard');
                return;
            }

            // 2. Text that might be an image URL
            if (item.types.includes('text/plain')) {
                const blob = await item.getType('text/plain');
                const text = (await blob.text()).trim();

                if (!isValidURL(text)) {
                    toast.error('Clipboard does not contain an image or valid URL');
                    return;
                }

                loadImageFromURL(text);
                return;
            }
        }

        toast.error('No image or URL found in clipboard');
    } catch (error) {
        console.error('Error reading clipboard:', error);
        toast.error('Could not read clipboard');
    }
}

</script>

<template>
    <Button @click="pasteFromClipboard" v-tooltip="'Paste Image or URL from Clipboard'">
        <IconClipboard stroke={2} class="w-6" />
    </Button>
</template>
