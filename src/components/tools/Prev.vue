<script setup>

import { IconChevronLeft } from '@tabler/icons-vue';

import Button from '@/components/Button.vue';
import { prev } from '@/stores/images.js';

</script>

<template>
    <Button @click="prev">
        <IconChevronLeft stroke={2} class="w-6" />
    </Button>
</template>
