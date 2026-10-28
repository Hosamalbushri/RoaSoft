<script setup lang="ts">
import { Code2, Zap, Eye, Layers, ArrowRight, ShieldCheck } from 'lucide-vue-next'
import { useI18n } from '../composables/useI18n'
import BaseBadge from '../components/ui/BaseBadge.vue'
import BaseButton from '../components/ui/BaseButton.vue'
import BaseCard from '../components/ui/BaseCard.vue'
import { engineeringPrinciples, engineeringProcess, techStackCategories } from '../data/company'

const { t, localizedPath, locale } = useI18n()

const principleIcons: Record<string, any> = {
  Code2,
  Zap,
  Eye,
  Layers,
}
</script>

<template>
  <div class="py-12 sm:py-16 lg:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Page Header -->
      <div class="max-w-3xl mb-16">
        <BaseBadge variant="primary" class="mb-3">
          {{ t.aboutPage.badge }}
        </BaseBadge>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-(--text-primary) tracking-tight mb-4">
          {{ t.aboutPage.title }}
        </h1>
        <p class="text-lg sm:text-xl text-(--text-secondary) leading-relaxed">
          {{ t.aboutPage.subtitle }}
        </p>
      </div>

      <!-- Who We Are / Ethos -->
      <div class="p-8 sm:p-12 rounded-3xl bg-(--bg-surface) border border-(--border-subtle) mb-20 shadow-xs">
        <div class="max-w-3xl">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-(--text-primary) mb-6">
            {{ t.aboutPage.ethosTitle }}
          </h2>
          <div class="space-y-4 text-base sm:text-lg text-(--text-secondary) leading-relaxed">
            <p>
              {{ t.aboutPage.ethosP1 }}
            </p>
            <p>
              {{ t.aboutPage.ethosP2 }}
            </p>
          </div>
        </div>
      </div>

      <!-- Engineering Principles Grid -->
      <div class="mb-20">
        <div class="max-w-3xl mb-10">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-(--text-primary) mb-3">
            {{ t.aboutPage.principlesTitle }}
          </h2>
          <p class="text-base text-(--text-secondary)">
            {{ t.aboutPage.principlesSubtitle }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BaseCard
            v-for="principle in engineeringPrinciples"
            :key="principle.id"
            :interactive="false"
          >
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-(--brand-primary-light) text-(--brand-primary) flex items-center justify-center shrink-0">
                <component :is="principleIcons[principle.iconName] || ShieldCheck" class="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <h3 class="text-lg font-bold text-(--text-primary) mb-2">
                  {{ locale === 'ar' ? principle.titleAr : principle.titleEn }}
                </h3>
                <p class="text-sm text-(--text-secondary) leading-relaxed">
                  {{ locale === 'ar' ? principle.descriptionAr : principle.descriptionEn }}
                </p>
              </div>
            </div>
          </BaseCard>
        </div>
      </div>

      <!-- Delivery Methodology -->
      <div class="mb-20">
        <div class="max-w-3xl mb-10">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-(--text-primary) mb-3">
            {{ t.aboutPage.processTitle }}
          </h2>
          <p class="text-base text-(--text-secondary)">
            {{ t.aboutPage.processSubtitle }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="step in engineeringProcess"
            :key="step.step"
            class="p-6 rounded-2xl bg-(--bg-surface) border border-(--border-subtle) flex flex-col justify-between"
          >
            <div>
              <div class="text-3xl font-extrabold font-mono text-(--brand-primary)/40 mb-4">
                {{ step.step }}
              </div>
              <h3 class="text-lg font-bold text-(--text-primary) mb-2">
                {{ locale === 'ar' ? step.titleAr : step.titleEn }}
              </h3>
              <p class="text-sm text-(--text-secondary) leading-relaxed mb-6">
                {{ locale === 'ar' ? step.descriptionAr : step.descriptionEn }}
              </p>
            </div>
            <div class="pt-4 border-t border-(--border-subtle)">
              <div class="text-[11px] font-mono uppercase tracking-wider text-(--text-muted) mb-1">
                {{ t.aboutPage.deliverablesLabel }}
              </div>
              <p class="text-xs text-(--text-secondary)">
                {{ locale === 'ar' ? step.deliverablesAr : step.deliverablesEn }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Technology Radar -->
      <div class="p-8 sm:p-12 rounded-3xl bg-(--bg-surface-elevated) border border-(--border-subtle) mb-20">
        <div class="max-w-3xl mb-8">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-(--text-primary) mb-2">
            {{ t.aboutPage.techStackTitle }}
          </h2>
          <p class="text-base text-(--text-secondary)">
            {{ t.aboutPage.techStackSubtitle }}
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="cat in techStackCategories"
            :key="cat.nameEn"
            class="p-5 rounded-2xl bg-(--bg-surface) border border-(--border-subtle)"
          >
            <h3 class="text-sm font-bold font-mono text-(--brand-primary) mb-4">
              {{ locale === 'ar' ? cat.nameAr : cat.nameEn }}
            </h3>
            <ul class="space-y-2 text-xs sm:text-sm text-(--text-secondary)">
              <li v-for="item in cat.items" :key="item" class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-(--brand-accent)"></span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Action CTA -->
      <div class="text-center max-w-2xl mx-auto">
        <h2 class="text-2xl font-bold text-(--text-primary) mb-4">
          {{ t.footer.contactCta }}
        </h2>
        <BaseButton variant="primary" size="lg" :to="localizedPath('/contact')">
          <span>{{ t.hero.primaryCta }}</span>
          <ArrowRight class="w-4 h-4 rtl:-scale-x-100" aria-hidden="true" />
        </BaseButton>
      </div>
    </div>
  </div>
</template>
