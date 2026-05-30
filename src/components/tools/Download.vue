<script setup>

import { IconDownload } from '@tabler/icons-vue';

import Button from '@/components/Button.vue';

async function download() {
    if (!window.deferredPrompt) {
        console.log('No deferred prompt');

        return;
    }

    window.deferredPrompt.prompt();

    const result = await window.deferredPrompt.userChoice;

    console.log(result);

    window.deferredPrompt = null;
}

</script>

<template>
    <Button @click="download" v-tooltip="'Download PWA'">
        <IconDownload stroke={2} class="w-6" />
    </Button>
</template>
