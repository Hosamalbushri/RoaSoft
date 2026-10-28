<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  interactive?: boolean
  glow?: boolean
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  interactive: true,
  glow: true,
  class: '',
})

const mouseX = ref(0)
const mouseY = ref(0)
const isHovered = ref(false)
const cardRef = ref<HTMLElement | null>(null)

const handleMouseMove = (e: MouseEvent) => {
  if (!props.glow || !cardRef.value) return
  const rect = cardRef.value.getBoundingClientRect()
  mouseX.value = e.clientX - rect.left
  mouseY.value = e.clientY - rect.top
}
</script>

<template>
  <div
    ref="cardRef"
    @mousemove="handleMouseMove"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    :class="[
      'relative overflow-hidden rounded-xl border border-(--border-subtle) bg-(--bg-surface) p-6 lg:p-8',
      'transition-all duration-300 shadow-(--shadow-card)',
      interactive ? 'hover:border-(--border-strong) hover:-translate-y-1 hover:shadow-lg' : '',
      props.class,
    ]"
  >
    <!-- Subtle interactive spotlight glow layer (21st.dev inspiration [id: 58]) -->
    <div
      v-if="glow"
      class="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
      :class="{ 'opacity-100': isHovered }"
      :style="{
        background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(28, 102, 246, 0.08), transparent 40%)`,
      }"
      aria-hidden="true"
    />

    <slot />
  </div>
</template>

