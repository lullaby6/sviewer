<script setup>

import { IconPhoto } from '@tabler/icons-vue';

import Button from '@/components/Button.vue';
import { openImages } from '@/stores/images.js';
import { tooltip } from '@/shortcuts.js';

</script>

<template>
    <Button @click="openImages" v-tooltip="tooltip('openImages')">
        <IconPhoto stroke={2} class="w-6" />
    </Button>
</template>
