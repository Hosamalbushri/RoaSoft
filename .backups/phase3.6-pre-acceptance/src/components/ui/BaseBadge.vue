<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'accent' | 'muted' | 'success'
  dot?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  dot: false,
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'accent':
      // Accent badge: warm orange tint with dark slate text (Contrast > 7:1)
      return 'bg-(--brand-accent-light) text-[#b45309] dark:text-[#f59e0b] border border-(--brand-accent)/20'
    case 'success':
      return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
    case 'muted':
      return 'bg-(--bg-surface-elevated) text-(--text-secondary) border border-(--border-subtle)'
    case 'primary':
    default:
      return 'bg-(--brand-primary-light) text-(--brand-primary) dark:text-[#60a5fa] border border-(--brand-primary)/20'
  }
})

const dotColorClass = computed(() => {
  switch (props.variant) {
    case 'accent':
      return 'bg-(--brand-accent)'
    case 'success':
      return 'bg-emerald-500'
    case 'muted':
      return 'bg-slate-400'
    case 'primary':
    default:
      return 'bg-(--brand-primary)'
  }
})
</script>

<template>
  <span
    :class="[
      'inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full select-none transition-colors duration-200',
      variantClasses,
    ]"
  >
    <span
      v-if="dot"
      :class="['h-1.5 w-1.5 rounded-full animate-pulse', dotColorClass]"
      aria-hidden="true"
    />
    <slot />
  </span>
</template>

