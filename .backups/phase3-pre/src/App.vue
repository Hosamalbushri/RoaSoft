<script setup lang="ts">
import { useI18n } from './composables/useI18n'
import { useTheme } from './composables/useTheme'
import SiteHeader from './components/layout/SiteHeader.vue'
import HeroScaffold from './components/hero/HeroScaffold.vue'
import BentoPreview from './components/bento/BentoPreview.vue'
import SiteFooter from './components/layout/SiteFooter.vue'
import BaseCard from './components/ui/BaseCard.vue'
import BaseBadge from './components/ui/BaseBadge.vue'
import BaseButton from './components/ui/BaseButton.vue'
import { FolderGit2, Users, Mail, ArrowUpRight } from 'lucide-vue-next'

// Initialize reactive i18n & theme composables
const { t } = useI18n()
useTheme()
</script>

<template>
  <div class="min-h-screen flex flex-col bg-(--bg-app) text-(--text-primary) transition-colors duration-200">
    <!-- Global Header & Navigation -->
    <SiteHeader />

    <!-- Main Content Area -->
    <main class="flex-1 pt-20">
      <!-- Hero Section with Verified Shader / CSS Fallback -->
      <HeroScaffold />

      <!-- Bento Grid Foundation Showcase (Services) -->
      <BentoPreview />

      <!-- Anchor Section: Projects & Portfolio Boundary (Scheduled for Phase 3) -->
      <section id="projects" class="py-16 border-t border-(--border-subtle) bg-(--bg-app)">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <BaseBadge variant="muted" class="mb-2">Phase 3 Preview</BaseBadge>
              <h2 class="text-2xl sm:text-3xl font-bold text-(--text-primary)">
                {{ t.nav.projects }}
              </h2>
            </div>
          </div>
          <BaseCard :interactive="false" class="border-dashed border-2">
            <div class="flex items-center gap-4 text-(--text-muted)">
              <FolderGit2 class="w-8 h-8 text-(--brand-primary)" aria-hidden="true" />
              <div>
                <h3 class="text-base font-semibold text-(--text-primary)">
                  Case Studies &amp; Architecture Showcase
                </h3>
                <p class="text-sm text-(--text-secondary) mt-0.5">
                  Full project portfolio grid and technical architectures scheduled for implementation in Phase 3.
                </p>
              </div>
            </div>
          </BaseCard>
        </div>
      </section>

      <!-- Anchor Section: About & Engineering Culture Boundary (Scheduled for Phase 3) -->
      <section id="about" class="py-16 border-t border-(--border-subtle) bg-(--bg-app)">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="mb-8">
            <BaseBadge variant="muted" class="mb-2">Phase 3 Preview</BaseBadge>
            <h2 class="text-2xl sm:text-3xl font-bold text-(--text-primary)">
              {{ t.nav.about }}
            </h2>
          </div>
          <BaseCard :interactive="false" class="border-dashed border-2">
            <div class="flex items-center gap-4 text-(--text-muted)">
              <Users class="w-8 h-8 text-[#fe8312]" aria-hidden="true" />
              <div>
                <h3 class="text-base font-semibold text-(--text-primary)">
                  Engineering Culture &amp; Leadership
                </h3>
                <p class="text-sm text-(--text-secondary) mt-0.5">
                  Company methodology, leadership profiles, and engineering ethos scheduled for implementation in Phase 3.
                </p>
              </div>
            </div>
          </BaseCard>
        </div>
      </section>

      <!-- Anchor Section: Contact & Consultation Intake Boundary -->
      <section id="contact" class="py-16 border-t border-(--border-subtle) bg-(--bg-surface-elevated)">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl">
            <BaseBadge variant="accent" class="mb-2">Integration Boundary</BaseBadge>
            <h2 class="text-2xl sm:text-3xl font-bold text-(--text-primary) mb-3">
              {{ t.footer.contactCta }}
            </h2>
            <p class="text-sm sm:text-base text-(--text-secondary) mb-6">
              {{ t.brand.shortDesc }}
            </p>
            <BaseCard :interactive="false">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-(--brand-primary-light) text-(--brand-primary) flex items-center justify-center shrink-0">
                    <Mail class="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span class="text-xs uppercase font-mono tracking-wider text-(--text-muted)">Direct Engineering Contact</span>
                    <div class="text-base font-semibold text-(--text-primary)">contact@roasoft.com</div>
                  </div>
                </div>
                <BaseButton variant="accent" size="md" as="a" href="mailto:contact@roasoft.com">
                  <span>{{ t.hero.primaryCta }}</span>
                  <ArrowUpRight class="w-4 h-4 rtl:-scale-x-100" aria-hidden="true" />
                </BaseButton>
              </div>
            </BaseCard>
          </div>
        </div>
      </section>
    </main>

    <!-- Global Footer -->
    <SiteFooter />
  </div>
</template>
