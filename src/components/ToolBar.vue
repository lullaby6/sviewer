<script setup>

import { IconBrandGithub } from '@tabler/icons-vue';

import FullScreen from '@/components/tools/FullScreen.vue';
import Input from '@/components/tools/Input.vue';
import Prev from '@/components/tools/Prev.vue';
import Next from '@/components/tools/Next.vue';
import Copy from '@/components/tools/Copy.vue';
import PixelArt from '@/components/tools/PixelArt.vue';
import ZoomIn from '@/components/tools/zoom/Increment.vue';
import ZoomOut from '@/components/tools/zoom/Decrement.vue';
import RotateClockwise from '@/components/tools/rotate/Clockwise.vue';
import RotateCounterClockwise from '@/components/tools/rotate/CounterClockwise.vue';
import Reset from '@/components/tools/Reset.vue';

import { imageSources, imageIndex } from '@/stores/images.js';

</script>

<template>
    <div class="py-4 bg-neutral-950 flex justify-center items-center gap-4 relative">
        <Input />

        <template v-if="imageSources.length > 0">
            <div class="w-px h-6 bg-neutral-800" />

            <!-- <template v-if="imageSources.length > 1">
                <Prev v-if="imageIndex > 0" />
                <Next v-if="imageIndex < imageSources.length - 1" />
            </template> -->
            <Prev :disabled="imageIndex === 0" />
            <Next :disabled="imageIndex === imageSources.length - 1" />

            <div class="w-px h-6 bg-neutral-800" />

            <ZoomOut />
            <ZoomIn />
            <RotateCounterClockwise />
            <RotateClockwise />
            <PixelArt />

            <div class="w-px h-6 bg-neutral-800" />

            <Reset />
            <Copy />

            <div class="w-px h-6 bg-neutral-800" />
        </template>

        <FullScreen />

        <a href="http://github.com/lullaby6/sviewer" target="_blank" class="text-neutral-500 absolute right-4 hover:opacity-50 transition-opacity">
            <IconBrandGithub stroke={2} class="w-6" />
        </a>
    </div>
</template>
