<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { ButtonVariant, ButtonSize } from '../../types'

interface Props {
  variant?: ButtonVariant
  size?: ButtonSize
  as?: 'button' | 'a' | 'router-link'
  to?: string
  href?: string
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  as: 'button',
  type: 'button',
  disabled: false,
  loading: false,
})

const resolvedComponent = computed(() => {
  if (props.to) return RouterLink
  if (props.href) return 'a'
  if (props.as === 'router-link') return RouterLink
  return props.as
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-xs min-h-[36px] px-3.5 py-1.5 rounded-lg gap-1.5'
    case 'lg':
      return 'text-base font-semibold min-h-[52px] px-7 py-3 rounded-xl gap-2.5'
    case 'md':
    default:
      // Minimum 44px height for touch target compliance (Apple HIG & WCAG 2.2)
      return 'text-sm font-medium min-h-[44px] px-5 py-2.5 rounded-xl gap-2'
  }
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'accent':
      // CRITICAL DESIGN SYSTEM RULE:
      // Dark slate text (#090d16) on brand orange (#fe8312) = 7.2:1 contrast (AAA).
      // White text on orange is strictly prohibited (fails at 2.48:1).
      return 'bg-(--brand-accent) text-(--on-brand-accent) hover:bg-(--brand-accent-hover) shadow-sm hover:shadow-(--shadow-glow-accent) active:scale-[0.98]'
    
    case 'secondary':
      return 'bg-(--bg-surface-elevated) text-(--text-primary) border border-(--border-subtle) hover:bg-(--bg-surface-muted) hover:border-(--border-strong) active:scale-[0.98]'
    
    case 'outline':
      return 'bg-transparent text-(--text-primary) border border-(--border-strong) hover:bg-(--bg-surface-elevated) hover:border-(--brand-primary) active:scale-[0.98]'
    
    case 'ghost':
      return 'bg-transparent text-(--text-secondary) hover:text-(--text-primary) hover:bg-(--bg-surface-elevated) active:scale-[0.98]'
    
    case 'primary':
    default:
      // White text on brand blue (#1c66f6) = 4.91:1 contrast (AA standard).
      return 'bg-(--brand-primary) text-(--on-brand-primary) hover:bg-(--brand-primary-hover) shadow-sm hover:shadow-(--shadow-glow) active:scale-[0.98]'
  }
})
</script>

<template>
  <component
    :is="resolvedComponent"
    :to="to"
    :href="href"
    :type="resolvedComponent === 'button' ? type : undefined"
    :disabled="disabled || loading"
    :aria-busy="loading ? 'true' : undefined"
    :class="[
      'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none text-decoration-none',
      'focus-visible:outline-2 focus-visible:outline-(--border-focus) focus-visible:outline-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none disabled:active:scale-100',
      sizeClasses,
      variantClasses,
    ]"
  >
    <!-- Loading spinner indicator if active -->
    <svg
      v-if="loading"
      class="animate-spin -ms-1 me-2 h-4 w-4 text-current"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
    </svg>
    <slot />
  </component>
</template>
