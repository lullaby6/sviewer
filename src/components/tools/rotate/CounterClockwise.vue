<script setup>

import { IconRotate } from '@tabler/icons-vue';

import Button from '@/components/Button.vue';
import { rotateCounterClockwise } from '@/stores/images.js';

</script>

<template>
    <Button @click="rotateCounterClockwise">
        <IconRotate stroke={2} class="w-6" />
    </Button>
</template>
