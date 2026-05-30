<script setup>

import { IconRestore } from '@tabler/icons-vue';

import Button from '@/components/Button.vue';
import { reset } from '@/stores/images.js';

</script>

<template>
    <Button @click="reset" v-tooltip="'Reset'">
        <IconRestore stroke={2} class="w-6" />
    </Button>
</template>
