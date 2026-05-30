<script setup>

import { ref, onMounted, onUnmounted } from 'vue';
import { IconMaximize, IconMinimize } from '@tabler/icons-vue';

import Button from '@/components/Button.vue';
import { toggleFullScreen } from '@/stores/images.js';
import { keyHint } from '@/shortcuts.js';

const isFullScreen = ref(false);

function updateFullScreen() {
    isFullScreen.value = !!document.fullscreenElement;
}

onMounted(() => document.addEventListener('fullscreenchange', updateFullScreen));
onUnmounted(() => document.removeEventListener('fullscreenchange', updateFullScreen));

</script>

<template>
    <Button @click="toggleFullScreen" v-tooltip="(isFullScreen ? 'Exit Fullscreen' : 'Enter Fullscreen') + ' (' + keyHint('toggleFullScreen') + ')'">
        <IconMinimize v-if="isFullScreen" stroke={2} class="w-6" />
        <IconMaximize v-else stroke={2} class="w-6" />
    </Button>
</template>
