<script setup lang="ts">
import { ArrowRight, CheckCircle2, AlertCircle, Sparkles } from 'lucide-vue-next'
import { useI18n } from '../composables/useI18n'
import BaseBadge from '../components/ui/BaseBadge.vue'
import BaseButton from '../components/ui/BaseButton.vue'
import { servicesData } from '../data/services'

const { t, localizedPath, locale } = useI18n()
</script>

<template>
  <div class="py-12 sm:py-16 lg:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Page Header -->
      <div class="max-w-3xl mb-16">
        <BaseBadge variant="primary" class="mb-3">
          {{ t.servicesPage.badge }}
        </BaseBadge>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-(--text-primary) tracking-tight mb-4">
          {{ t.servicesPage.title }}
        </h1>
        <p class="text-lg sm:text-xl text-(--text-secondary) leading-relaxed">
          {{ t.servicesPage.subtitle }}
        </p>
      </div>

      <!-- Services List (Modular Breakdown) -->
      <div class="space-y-12">
        <div
          v-for="(service, idx) in servicesData"
          :key="service.id"
          :id="service.id"
          class="rounded-xl border border-(--border-subtle) bg-(--bg-surface) p-6 sm:p-8 lg:p-10 shadow-xs hover:border-(--border-strong) transition-colors"
        >
          <!-- Header of Service -->
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-(--border-subtle)">
            <div>
              <div class="flex items-center gap-3 mb-2">
                <span class="text-xs font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-(--bg-surface-elevated) text-(--brand-primary) border border-(--border-subtle)">
                  DOMAIN // 0{{ idx + 1 }}
                </span>
                <span class="text-xs font-mono text-(--text-muted)">
                  // {{ service.id.toUpperCase() }}_SUBSYSTEM
                </span>
              </div>
              <h2 class="text-2xl sm:text-3xl font-extrabold text-(--text-primary)">
                {{ locale === 'ar' ? service.titleAr : service.titleEn }}
              </h2>
            </div>
            
            <BaseButton
              variant="accent"
              size="md"
              :to="`${localizedPath('/contact')}?service=${service.id}`"
              class="self-start md:self-auto shrink-0"
            >
              <span>{{ t.servicesPage.discussCta }}</span>
              <ArrowRight class="w-4 h-4 rtl:-scale-x-100" aria-hidden="true" />
            </BaseButton>
          </div>

          <!-- Problem vs Solution Matrix -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
            <!-- Problem / Bottleneck -->
            <div class="p-5 sm:p-6 rounded-lg bg-(--bg-app) border border-(--border-subtle)">
              <div class="flex items-center gap-2 mb-3 text-amber-500 font-semibold text-sm">
                <AlertCircle class="w-4 h-4" aria-hidden="true" />
                <span>{{ t.servicesPage.problemTitle }}</span>
              </div>
              <p class="text-sm sm:text-base text-(--text-secondary) leading-relaxed">
                {{ locale === 'ar' ? service.problemAr : service.problemEn }}
              </p>
            </div>

            <!-- Value / Solution -->
            <div class="p-5 sm:p-6 rounded-lg bg-(--brand-primary-light)/40 border border-(--brand-primary)/20">
              <div class="flex items-center gap-2 mb-3 text-(--brand-primary) font-semibold text-sm">
                <Sparkles class="w-4 h-4" aria-hidden="true" />
                <span>{{ t.servicesPage.valueTitle }}</span>
              </div>
              <p class="text-sm sm:text-base text-(--text-primary) leading-relaxed">
                {{ locale === 'ar' ? service.valueAr : service.valueEn }}
              </p>
            </div>
          </div>

          <!-- Capabilities Checklist & Tech Stack -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6 border-t border-(--border-subtle)">
            <div class="lg:col-span-2">
              <h3 class="text-xs font-mono uppercase tracking-wider text-(--text-muted) font-semibold mb-4">
                {{ t.servicesPage.capabilitiesTitle }}
              </h3>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <li
                  v-for="cap in (locale === 'ar' ? service.capabilitiesAr : service.capabilitiesEn)"
                  :key="cap"
                  class="flex items-start gap-2.5 text-(--text-secondary)"
                >
                  <CheckCircle2 class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{{ cap }}</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-xs font-mono uppercase tracking-wider text-(--text-muted) font-semibold mb-4">
                {{ t.servicesPage.techTitle }}
              </h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in service.techStack"
                  :key="tech"
                  class="px-2.5 py-1 rounded-lg text-xs font-mono bg-(--bg-app) text-(--text-primary) border border-(--border-subtle)"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Next Step CTA -->
      <div class="mt-20 p-8 sm:p-12 rounded-xl bg-(--bg-surface-elevated) border border-(--border-subtle) flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
        <div>
          <h2 class="text-2xl font-bold text-(--text-primary) mb-2">
            {{ t.footer.contactCta }}
          </h2>
          <p class="text-sm sm:text-base text-(--text-secondary)">
            {{ t.brand.shortDesc }}
          </p>
        </div>
        <div class="flex flex-wrap items-center gap-4 shrink-0">
          <BaseButton variant="primary" size="lg" :to="localizedPath('/contact')">
            <span>{{ t.hero.primaryCta }}</span>
            <ArrowRight class="w-4 h-4 rtl:-scale-x-100" aria-hidden="true" />
          </BaseButton>
          <BaseButton variant="outline" size="lg" :to="localizedPath('/projects')">
            <span>{{ t.servicesPage.viewProjectsCta }}</span>
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
