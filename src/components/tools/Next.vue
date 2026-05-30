<script setup>

import { IconChevronRight } from '@tabler/icons-vue';

import Button from '@/components/Button.vue';
import { next } from '@/stores/images.js';
import { tooltip } from '@/shortcuts.js';

</script>

<template>
    <Button @click="next" v-tooltip="tooltip('next')">
        <IconChevronRight stroke={2} class="w-6" />
    </Button>
</template>
