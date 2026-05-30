<script setup>

import { IconTrash } from '@tabler/icons-vue';

import Button from '@/components/Button.vue';
import { clear } from '@/stores/images.js';

</script>

<template>
    <Button @click="clear" v-tooltip="'Clear Images'">
        <IconTrash stroke={2} class="w-6" />
    </Button>
</template>
