<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { useI18n } from '../composables/useI18n'
import BaseBadge from '../components/ui/BaseBadge.vue'
import BaseButton from '../components/ui/BaseButton.vue'
import BaseCard from '../components/ui/BaseCard.vue'
import { engineeringPrinciples, engineeringProcess, techStackCategories } from '../data/company'

const { t, localizedPath, locale } = useI18n()
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
      <div class="p-8 sm:p-12 rounded-xl bg-(--bg-surface) border border-(--border-subtle) mb-20 shadow-xs">
        <div class="max-w-3xl">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-xs font-mono font-bold text-(--brand-primary)">// STUDIO ETHOS</span>
            <span class="text-xs font-mono text-(--text-muted)">FOUNDED ON VERIFIED INVARIANTS</span>
          </div>
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
            v-for="(principle, idx) in engineeringPrinciples"
            :key="principle.id"
            :interactive="false"
          >
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="text-xs font-mono font-bold tracking-wider text-(--brand-primary)">
                  PRINCIPLE // 0{{ idx + 1 }}
                </span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-(--bg-surface-elevated) text-(--text-muted)">
                  {{ principle.id.toUpperCase() }}
                </span>
              </div>
              <h3 class="text-lg font-bold text-(--text-primary) mb-2">
                {{ locale === 'ar' ? principle.titleAr : principle.titleEn }}
              </h3>
              <p class="text-sm text-(--text-secondary) leading-relaxed">
                {{ locale === 'ar' ? principle.descriptionAr : principle.descriptionEn }}
              </p>
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
            class="p-6 rounded-xl bg-(--bg-surface) border border-(--border-subtle) flex flex-col justify-between shadow-xs hover:border-(--brand-primary)/40 transition-colors"
          >
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="text-xs font-mono font-bold tracking-wider text-(--brand-primary)">
                  STAGE // 0{{ step.step }}
                </span>
                <span class="w-2 h-2 rounded-full bg-(--border-strong)"></span>
              </div>
              <h3 class="text-lg font-bold text-(--text-primary) mb-2">
                {{ locale === 'ar' ? step.titleAr : step.titleEn }}
              </h3>
              <p class="text-sm text-(--text-secondary) leading-relaxed mb-6">
                {{ locale === 'ar' ? step.descriptionAr : step.descriptionEn }}
              </p>
            </div>
            <div class="pt-4 border-t border-(--border-subtle)">
              <div class="text-[10px] font-mono uppercase tracking-wider text-(--text-muted) mb-1">
                {{ t.aboutPage.deliverablesLabel }}
              </div>
              <p class="text-xs font-mono text-(--text-secondary)">
                {{ locale === 'ar' ? step.deliverablesAr : step.deliverablesEn }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Technology Radar -->
      <div class="p-8 sm:p-12 rounded-xl bg-(--bg-surface-elevated) border border-(--border-subtle) mb-20 shadow-xs">
        <div class="max-w-3xl mb-8">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-xs font-mono font-bold text-(--brand-primary)">// TECH RADAR</span>
            <span class="text-xs font-mono text-(--text-muted)">TIER-1 ARCHITECTURE STACK</span>
          </div>
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
            class="p-5 rounded-lg bg-(--bg-surface) border border-(--border-subtle) shadow-xs"
          >
            <div class="flex items-center justify-between mb-3 pb-2 border-b border-(--border-subtle)">
              <h3 class="text-xs font-bold font-mono text-(--brand-primary)">
                {{ locale === 'ar' ? cat.nameAr : cat.nameEn }}
              </h3>
              <span class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-semibold">ADOPT</span>
            </div>
            <ul class="space-y-2 text-xs sm:text-sm text-(--text-secondary)">
              <li v-for="item in cat.items" :key="item" class="flex items-center justify-between font-mono text-xs">
                <span>{{ item }}</span>
                <span class="text-slate-400">✓</span>
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
