<script setup>

import { ref, onMounted, onUnmounted } from 'vue';
import { IconMaximize, IconMinimize } from '@tabler/icons-vue';

import Button from '@/components/Button.vue';

const isFullScreen = ref(false);

function updateFullScreen() {
    isFullScreen.value = !!document.fullscreenElement;
}

onMounted(() => document.addEventListener('fullscreenchange', updateFullScreen));
onUnmounted(() => document.removeEventListener('fullscreenchange', updateFullScreen));

function toggleFullScreen() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
}

</script>

<template>
    <Button @click="toggleFullScreen">
        <IconMinimize v-if="isFullScreen" stroke={2} class="w-6" />
        <IconMaximize v-else stroke={2} class="w-6" />
    </Button>
</template>
