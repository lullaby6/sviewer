<script setup>

import { IconPhotoDown } from '@tabler/icons-vue';

import Button from '@/components/Button.vue';
import { downloadImage } from '@/stores/images.js';
import { tooltip } from '@/shortcuts.js';

</script>

<template>
    <Button @click="downloadImage" v-tooltip="tooltip('downloadImage')">
        <IconPhotoDown stroke={2} class="w-6" />
    </Button>
</template>
