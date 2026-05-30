<script setup>

import { IconRotateClockwise } from '@tabler/icons-vue';

import Button from '@/components/Button.vue';
import { rotateClockwise } from '@/stores/images.js';

</script>

<template>
    <Button @click="rotateClockwise" v-tooltip="'Rotate Clockwise'">
        <IconRotateClockwise stroke={2} class="w-6" />
    </Button>
</template>
