<script setup>

import { IconBrandGithub } from '@tabler/icons-vue';

import ScrollRow from '@/components/ScrollRow.vue';

import Input from '@/components/tools/Input.vue';
import Download from '@/components/tools/Download.vue';
import Link from '@/components/tools/Link.vue';
import Clipboard from '@/components/tools/Clipboard.vue';
import ImageDownload from '@/components/tools/ImageDownload.vue';
import Clear from '@/components/tools/Clear.vue';

import Prev from '@/components/tools/Prev.vue';
import Next from '@/components/tools/Next.vue';

import Copy from '@/components/tools/Copy.vue';
import PixelArt from '@/components/tools/PixelArt.vue';
import ZoomIn from '@/components/tools/zoom/Increment.vue';
import ZoomOut from '@/components/tools/zoom/Decrement.vue';
import RotateClockwise from '@/components/tools/rotate/Clockwise.vue';
import RotateCounterClockwise from '@/components/tools/rotate/CounterClockwise.vue';

import Reset from '@/components/tools/Reset.vue';
import FullScreen from '@/components/tools/FullScreen.vue';

import { isPWAInstalled, isPWA } from '@/utils/utils.js';

import { imageSources, imageIndex, currentName } from '@/stores/images.js';

</script>

<template>
    <div class="p-2 sm:p-4 bg-neutral-950 flex justify-between sm:justify-center items-center relative">
        <span class="hidden sm:block text-neutral-500 absolute left-4">
            v1.0.0
        </span>

        <span
            v-if="currentName"
            class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 max-w-[80vw] truncate px-3 py-1 rounded bg-neutral-900/80 text-neutral-300 text-sm pointer-events-none"
        >
            {{ currentName }}
        </span>

        <ScrollRow :max-visible="7">
            <Input />
            <Download v-if="!isPWAInstalled() && !isPWA()" />
            <Link />
            <Clipboard />

            <template v-if="imageSources.length > 0">
                <ImageDownload />
                <Clear />

                <div class="w-px h-6 bg-neutral-800 hidden sm:block" />

                <Prev :disabled="imageIndex === 0" />
                <Next :disabled="imageIndex === imageSources.length - 1" />

                <div class="w-px h-6 bg-neutral-800 hidden sm:block" />

                <ZoomOut />
                <ZoomIn />

                <RotateCounterClockwise />
                <RotateClockwise />
                <PixelArt />

                <div class="w-px h-6 bg-neutral-800 hidden sm:block" />

                <Reset />
                <Copy />

                <div class="w-px h-6 bg-neutral-800 hidden sm:block" />
            </template>

            <FullScreen v-if="!isPWA()" />
        </ScrollRow>

        <a href="http://github.com/lullaby6/sviewer" target="_blank" class="hidden sm:block text-neutral-500 absolute right-4 hover:opacity-50 transition-opacity">
            <IconBrandGithub stroke={2} class="w-6" />
        </a>
    </div>
</template>
