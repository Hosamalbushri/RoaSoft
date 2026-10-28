<script setup lang="ts">
import { ref } from 'vue'
import { Shader, SolidColor, Circle, FlowingGradient, FilmGrain } from 'shaders/vue'
import { useWebGPU } from '../../composables/useWebGPU'
import ShaderFallback from './ShaderFallback.vue'

interface Props {
  isRtl?: boolean
}

defineProps<Props>()

const { shaderActive, markUnavailable } = useWebGPU()
const isReady = ref(false)

const onReady = () => {
  isReady.value = true
}

const onUnavailable = () => {
  markUnavailable()
}
</script>

<template>
  <div class="absolute inset-0 w-full h-full overflow-hidden pointer-events-none" aria-hidden="true">
    <!-- Live WebGPU Shader Pipeline (Active only if supported and reduced-motion is not requested) -->
    <Shader
      v-if="shaderActive"
      @ready="onReady"
      @unavailable="onUnavailable"
      :style="{
        opacity: isReady ? 1 : 0,
        transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      }"
      class="w-full h-full"
    >
      <!-- Base Background -->
      <SolidColor color="#080b11" />

      <!-- Directional In-Shader Alpha Mask (shaders://pro-notes/hero-section-masking) -->
      <!-- In LTR: mask centered on right (0.8, 0.5) so left text is 100% readable -->
      <!-- In RTL: mask centered on left (0.2, 0.5) so right text is 100% readable -->
      <Circle
        id="heroMask"
        :visible="false"
        color="#ffffff"
        :radius="1.7"
        :softness="0.9"
        :center="{ x: isRtl ? 0.2 : 0.8, y: 0.5 }"
      />

      <!-- Flowing Liquid Gradient Layer -->
      <FlowingGradient
        mask-source="heroMask"
        mask-type="alpha"
        color-a="#080b11"
        color-b="#1c66f6"
        color-c="#0d2352"
        :speed="0.2"
        :variance="0.4"
      />

      <!-- Physical Tactile Film Grain (shaders://pro-notes/finishing-touches) -->
      <FilmGrain :intensity="0.03" />
    </Shader>

    <!-- Reliable Zero-CPU CSS Fallback Layer -->
    <ShaderFallback v-if="!shaderActive || !isReady" :is-rtl="isRtl" />
  </div>
</template>

