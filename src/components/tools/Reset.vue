<script setup>

import { IconRestore } from '@tabler/icons-vue';

import Button from '@/components/Button.vue';
import { reset } from '@/stores/images.js';
import { tooltip } from '@/shortcuts.js';

</script>

<template>
    <Button @click="reset" v-tooltip="tooltip('reset')">
        <IconRestore stroke={2} class="w-6" />
    </Button>
</template>
