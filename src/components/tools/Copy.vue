<script setup>

import { ref } from 'vue';
import { IconCopy } from '@tabler/icons-vue';
import { useToast } from 'vue-toastification';

import Button from '@/components/Button.vue';
import { imageRef } from '@/stores/images.js';

const toast = useToast();

const copying = ref(false);

function copyImageToClipboard() {
    const image = imageRef.value;
    if (!image) return;

    copying.value = true;

    const canvas = document.createElement('canvas');
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    canvas.getContext('2d').drawImage(image, 0, 0);

    canvas.toBlob(async (blob) => {
        try {
            await navigator.clipboard.write([
                new ClipboardItem({ 'image/png': blob }),
            ]);

            toast.success('Image copied to clipboard');
        } catch (error) {
            console.error('Error copying image:', error);
            toast.error('Error copying image');
        } finally {
            copying.value = false;
        }
    }, 'image/png');
}

</script>

<template>
    <Button @click="copyImageToClipboard" :disabled="copying">
        <IconCopy stroke={2} class="w-6" />
    </Button>
</template>
