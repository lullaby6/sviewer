<script setup>

import { IconPhoto } from '@tabler/icons-vue';
import { useToast } from 'vue-toastification';

import Button from '@/components/Button.vue';
import { addImages } from '@/stores/images.js';

const toast = useToast();

function inputImages() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = true;
    input.addEventListener('change', () => {
        const files = Array.from(input.files);
        const images = files.filter(file => file.type.startsWith('image/'));

        if (images.length === 0) {
            toast.error('No valid images selected');
            return;
        }

        addImages(images);

        toast.success(`${images.length} image${images.length > 1 ? 's' : ''} loaded`);

        if (images.length < files.length) {
            toast.warning('Some files were skipped because they are not images');
        }
    });
    input.click();
}

</script>

<template>
    <Button @click="inputImages">
        <IconPhoto stroke={2} class="w-6" />
    </Button>
</template>
