<script setup>

import { IconChevronRight } from '@tabler/icons-vue';

import Button from '@/components/Button.vue';
import { next } from '@/stores/images.js';

</script>

<template>
    <Button @click="next" v-tooltip="'Next'">
        <IconChevronRight stroke={2} class="w-6" />
    </Button>
</template>
