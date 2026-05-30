<script setup>

import { IconPhotoDown } from '@tabler/icons-vue';
import { useToast } from 'vue-toastification';

import Button from '@/components/Button.vue';
import { imageSources, imageIndex } from '@/stores/images.js';

const toast = useToast();

function triggerDownload(href, filename) {
    const link = document.createElement('a');
    link.href = href;
    link.download = filename;
    link.click();
}

async function download() {
    const src = imageSources.value[imageIndex.value];
    if (!src) return;

    try {
        const blob = await (await fetch(src)).blob();
        const extension = (blob.type.split('/')[1] || 'png').replace('+xml', '');
        const url = URL.createObjectURL(blob);

        triggerDownload(url, `image-${imageIndex.value + 1}.${extension}`);

        URL.revokeObjectURL(url);
        toast.success('Image downloaded');
    } catch (error) {
        console.error('Error downloading image:', error);
        toast.error('Error downloading image');
    }
}

</script>

<template>
    <Button @click="download" v-tooltip="'Download Image'">
        <IconPhotoDown stroke={2} class="w-6" />
    </Button>
</template>
