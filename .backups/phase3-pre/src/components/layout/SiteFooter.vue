<script setup lang="ts">
import { useI18n } from '../../composables/useI18n'
import BaseBadge from '../ui/BaseBadge.vue'

const { t } = useI18n()
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-(--border-subtle) bg-(--bg-surface) text-(--text-secondary) transition-colors duration-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <!-- Col 1: Brand & Bio -->
        <div class="md:col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-8 rounded-lg bg-(--bg-surface-elevated) border border-(--border-subtle) flex items-center justify-center p-1">
              <svg viewBox="0 0 64 64" fill="none" class="w-full h-full">
                <path d="M18 44V20H32C36.4183 20 40 23.5817 40 28C40 32.4183 36.4183 36 32 36H24" stroke="#1c66f6" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M30 36L44 44" stroke="#fe8312" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                <circle cx="44" cy="24" r="4.5" fill="#fe8312" />
              </svg>
            </div>
            <span class="text-xl font-bold text-(--text-primary)">{{ t.brand.name }}</span>
          </div>
          <p class="text-sm text-(--text-muted) max-w-sm mb-6 leading-relaxed">
            {{ t.brand.shortDesc }}
          </p>
          <div class="inline-flex items-center gap-2">
            <BaseBadge variant="success" :dot="true">
              {{ t.footer.status }}
            </BaseBadge>
          </div>
        </div>

        <!-- Col 2: Navigation Links -->
        <div>
          <h4 class="text-xs font-mono uppercase tracking-wider text-(--text-primary) font-semibold mb-4">
            {{ t.nav.services }}
          </h4>
          <ul class="space-y-2.5 text-sm">
            <li><a href="#services" class="hover:text-(--brand-primary) transition-colors">Enterprise Web & Mobile</a></li>
            <li><a href="#services" class="hover:text-(--brand-primary) transition-colors">Cloud & Infrastructure</a></li>
            <li><a href="#services" class="hover:text-(--brand-primary) transition-colors">AI & Data Integration</a></li>
            <li><a href="#services" class="hover:text-(--brand-primary) transition-colors">UI/UX Engineering</a></li>
          </ul>
        </div>

        <!-- Col 3: Company & Governance -->
        <div>
          <h4 class="text-xs font-mono uppercase tracking-wider text-(--text-primary) font-semibold mb-4">
            {{ t.nav.about }}
          </h4>
          <ul class="space-y-2.5 text-sm">
            <li><a href="#about" class="hover:text-(--brand-primary) transition-colors">{{ t.nav.about }}</a></li>
            <li><a href="#projects" class="hover:text-(--brand-primary) transition-colors">{{ t.nav.projects }}</a></li>
            <li><a href="#" class="hover:text-(--brand-primary) transition-colors">{{ t.footer.privacy }}</a></li>
            <li><a href="#" class="hover:text-(--brand-primary) transition-colors">{{ t.footer.terms }}</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-(--border-subtle) flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-(--text-muted)">
        <div>
          &copy; {{ currentYear }} {{ t.brand.name }}. {{ t.footer.rights }}
        </div>
        <div class="flex items-center gap-4">
          <span class="inline-flex items-center gap-1 font-mono">
            Phase 2: Foundation &amp; Design System
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>
