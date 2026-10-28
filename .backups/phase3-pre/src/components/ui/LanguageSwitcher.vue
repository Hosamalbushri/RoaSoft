<script setup lang="ts">
import { Globe } from 'lucide-vue-next'
import { useI18n } from '../../composables/useI18n'

const { locale, toggleLocale, t } = useI18n()
</script>

<template>
  <button
    type="button"
    @click="toggleLocale"
    :aria-label="t.nav.toggleLanguage"
    class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-(--border-subtle) bg-(--bg-surface) text-(--text-secondary) hover:text-(--text-primary) hover:border-(--border-strong) hover:bg-(--bg-surface-elevated) transition-all duration-200 cursor-pointer min-h-[40px] focus-visible:outline-2 focus-visible:outline-(--border-focus) focus-visible:outline-offset-2"
  >
    <Globe class="w-3.5 h-3.5 text-(--brand-primary)" aria-hidden="true" />
    <span>{{ locale === 'en' ? 'العربية' : 'English' }}</span>
  </button>
</template>

