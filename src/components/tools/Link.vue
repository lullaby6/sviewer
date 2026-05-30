<script setup>

import { IconLink } from '@tabler/icons-vue';
import { useToast } from 'vue-toastification';

import Button from '@/components/Button.vue';
import { addImageURL } from '@/stores/images.js';

const toast = useToast();

function openImageLink() {
    const url = window.prompt('Enter image URL');
    if (!url) return;

    const image = new Image();
    image.onload = () => {
        addImageURL(url);
        toast.success('Image loaded');
    };
    image.onerror = () => {
        toast.error('Could not load image from URL');
    };
    image.src = url;
}

</script>

<template>
    <Button @click="openImageLink" v-tooltip="'Open Image from URL'">
        <IconLink stroke={2} class="w-6" />
    </Button>
</template>
