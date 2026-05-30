<script setup>

import Image from '@/components/Image.vue';
import ToolBar from '@/components/ToolBar.vue';

import { useHotkeys } from '@/composables/useHotkeys.js';

useHotkeys();

</script>

<template>
  <div class="h-screen w-screen bg-neutral-950 flex flex-col">
    <Image />
    <ToolBar />
  </div>
</template>