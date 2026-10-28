<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'
import { useTheme } from '../../composables/useTheme'
import { useI18n } from '../../composables/useI18n'

const { isDark, toggleTheme } = useTheme()
const { t } = useI18n()
</script>

<template>
  <button
    type="button"
    @click="toggleTheme"
    :aria-label="t.nav.toggleTheme"
    class="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-(--border-subtle) bg-(--bg-surface) text-(--text-secondary) hover:text-(--text-primary) hover:border-(--border-strong) hover:bg-(--bg-surface-elevated) transition-all duration-200 cursor-pointer min-h-[40px] min-w-[40px] focus-visible:outline-2 focus-visible:outline-(--border-focus) focus-visible:outline-offset-2"
  >
    <Sun v-if="isDark" class="w-4 h-4 text-[#fbbf24] transition-transform duration-200 rotate-0 hover:rotate-45" aria-hidden="true" />
    <Moon v-else class="w-4 h-4 text-(--brand-primary) transition-transform duration-200" aria-hidden="true" />
  </button>
</template>

