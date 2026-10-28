<script setup lang="ts">
interface Props {
  isRtl?: boolean
}

defineProps<Props>()
</script>

<template>
  <div
    class="absolute inset-0 w-full h-full pointer-events-none overflow-hidden transition-opacity duration-700"
    aria-hidden="true"
  >
    <!-- Dark base background -->
    <div class="absolute inset-0 bg-[#080b11]" />

    <!-- Pure CSS Multi-Point Radial Gradients simulating the shader composition with 0% GPU/CPU overhead -->
    <div
      class="absolute inset-0 opacity-70"
      :style="{
        backgroundImage: isRtl
          ? `radial-gradient(circle at 15% 45%, rgba(28, 102, 246, 0.35) 0%, rgba(13, 35, 82, 0.2) 45%, transparent 70%),
             radial-gradient(circle at 35% 20%, rgba(254, 131, 18, 0.12) 0%, transparent 40%),
             radial-gradient(circle at 5% 80%, rgba(28, 102, 246, 0.15) 0%, transparent 50%)`
          : `radial-gradient(circle at 85% 45%, rgba(28, 102, 246, 0.35) 0%, rgba(13, 35, 82, 0.2) 45%, transparent 70%),
             radial-gradient(circle at 65% 20%, rgba(254, 131, 18, 0.12) 0%, transparent 40%),
             radial-gradient(circle at 95% 80%, rgba(28, 102, 246, 0.15) 0%, transparent 50%)`,
      }"
    />

    <!-- Subtle grid overlay for engineering texture -->
    <div
      class="absolute inset-0 opacity-15"
      style="background-size: 32px 32px; background-image: linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px);"
    />
  </div>
</template>

