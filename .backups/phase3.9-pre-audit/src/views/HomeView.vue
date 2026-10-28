<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowRight, ArrowUpRight } from 'lucide-vue-next'
import { useI18n } from '../composables/useI18n'
import HeroScaffold from '../components/hero/HeroScaffold.vue'
import BentoPreview from '../components/bento/BentoPreview.vue'
import BaseCard from '../components/ui/BaseCard.vue'
import BaseBadge from '../components/ui/BaseBadge.vue'
import BaseButton from '../components/ui/BaseButton.vue'
import { servicesData } from '../data/services'
import { projectsData } from '../data/projects'
import { engineeringProcess } from '../data/company'

const { t, localizedPath, locale } = useI18n()

// Show top 3 featured projects for preview
const featuredProjects = computed(() => projectsData.slice(0, 3))
</script>

<template>
  <div>
    <!-- Hero Section with Verified Shader / CSS Fallback -->
    <HeroScaffold />

    <!-- Services Overview Section -->
    <section id="services-overview" class="py-20 bg-(--bg-app) border-b border-(--border-subtle) scroll-mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div class="max-w-2xl">
            <BaseBadge variant="primary" class="mb-3">
              {{ t.servicesPage.badge }}
            </BaseBadge>
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-(--text-primary) tracking-tight">
              {{ t.servicesPage.title }}
            </h2>
            <p class="mt-3 text-base sm:text-lg text-(--text-secondary) leading-relaxed">
              {{ t.servicesPage.subtitle }}
            </p>
          </div>
          <BaseButton variant="outline" size="md" :to="localizedPath('/services')">
            <span>{{ t.nav.services }}</span>
            <ArrowRight class="w-4 h-4 rtl:-scale-x-100" aria-hidden="true" />
          </BaseButton>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BaseCard
            v-for="(service, idx) in servicesData.slice(0, 3)"
            :key="service.id"
            :interactive="true"
            class="flex flex-col justify-between"
          >
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="text-xs font-mono font-bold tracking-wider text-(--brand-primary)">
                  DOMAIN // 0{{ idx + 1 }}
                </span>
                <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-(--bg-surface-elevated) text-(--text-muted) border border-(--border-subtle)">
                  {{ service.id.toUpperCase() }}
                </span>
              </div>
              <h3 class="text-xl font-bold text-(--text-primary) mb-3">
                {{ locale === 'ar' ? service.titleAr : service.titleEn }}
              </h3>
              <p class="text-sm text-(--text-secondary) leading-relaxed mb-6">
                {{ locale === 'ar' ? service.shortDescAr : service.shortDescEn }}
              </p>
            </div>
            <div class="pt-4 border-t border-(--border-subtle) flex items-center justify-between">
              <span class="text-xs font-mono text-(--text-muted)">{{ service.techStack.slice(0, 3).join(' • ') }}</span>
              <RouterLink
                :to="localizedPath('/services')"
                class="inline-flex items-center gap-1 text-sm font-semibold text-(--brand-primary) hover:underline"
              >
                <span>{{ locale === 'ar' ? 'التفاصيل' : 'Learn More' }}</span>
                <ArrowRight class="w-3.5 h-3.5 rtl:-scale-x-100" aria-hidden="true" />
              </RouterLink>
            </div>
          </BaseCard>
        </div>
      </div>
    </section>

    <!-- Bento Capabilities Grid -->
    <BentoPreview />

    <!-- Projects Portfolio Preview -->
    <section id="projects-preview" class="py-20 bg-(--bg-app) border-b border-(--border-subtle) scroll-mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div class="max-w-2xl">
            <BaseBadge variant="accent" class="mb-3">
              {{ t.projectsPage.badge }}
            </BaseBadge>
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-(--text-primary) tracking-tight">
              {{ t.projectsPage.title }}
            </h2>
            <p class="mt-3 text-base sm:text-lg text-(--text-secondary) leading-relaxed">
              {{ t.projectsPage.subtitle }}
            </p>
          </div>
          <BaseButton variant="outline" size="md" :to="localizedPath('/projects')">
            <span>{{ t.projectsPage.viewArchitecture }}</span>
            <ArrowRight class="w-4 h-4 rtl:-scale-x-100" aria-hidden="true" />
          </BaseButton>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <BaseCard
            v-for="project in featuredProjects"
            :key="project.id"
            :interactive="true"
            class="flex flex-col justify-between"
          >
            <div>
              <div class="flex items-center justify-between gap-2 mb-4">
                <BaseBadge variant="muted">
                  {{ project.category.toUpperCase() }}
                </BaseBadge>
                <span class="text-xs font-mono text-(--text-muted)">
                  {{ t.projectsPage.conceptBadge }}
                </span>
              </div>
              <h3 class="text-xl font-bold text-(--text-primary) mb-2">
                {{ locale === 'ar' ? project.titleAr : project.titleEn }}
              </h3>
              <p class="text-sm text-(--text-secondary) leading-relaxed mb-6">
                {{ locale === 'ar' ? project.summaryAr : project.summaryEn }}
              </p>
              
              <!-- Key Metrics -->
              <div class="grid grid-cols-2 gap-2 p-3 rounded-xl bg-(--bg-surface-elevated) mb-6">
                <div v-for="metric in project.metrics.slice(0, 2)" :key="metric.labelEn">
                  <div class="text-xs text-(--text-muted)">{{ locale === 'ar' ? metric.labelAr : metric.labelEn }}</div>
                  <div class="text-base font-bold font-mono text-(--brand-primary)">{{ metric.value }}</div>
                </div>
              </div>
            </div>

            <div class="pt-4 border-t border-(--border-subtle) flex items-center justify-between">
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="tech in project.technologies.slice(0, 3)"
                  :key="tech"
                  class="px-2 py-0.5 rounded text-[11px] font-mono bg-(--bg-surface-elevated) text-(--text-secondary)"
                >
                  {{ tech }}
                </span>
              </div>
              <RouterLink
                :to="localizedPath('/projects')"
                class="p-2 rounded-lg text-(--text-secondary) hover:text-(--brand-primary) hover:bg-(--bg-surface-elevated) transition-colors"
                :aria-label="locale === 'ar' ? 'عرض تفاصيل المعمارية' : 'View Architecture'"
              >
                <ArrowUpRight class="w-4 h-4 rtl:-scale-x-100" aria-hidden="true" />
              </RouterLink>
            </div>
          </BaseCard>
        </div>
      </div>
    </section>

    <!-- Engineering Methodology & Delivery Process -->
    <section id="process" class="py-20 bg-(--bg-surface-elevated) border-b border-(--border-subtle) scroll-mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <BaseBadge variant="primary" class="mb-3">
            {{ t.aboutPage.processTitle }}
          </BaseBadge>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-(--text-primary) tracking-tight">
            {{ t.aboutPage.processSubtitle }}
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="step in engineeringProcess"
            :key="step.step"
            class="relative p-6 rounded-xl bg-(--bg-surface) border border-(--border-subtle) flex flex-col justify-between shadow-xs hover:border-(--brand-primary)/40 transition-colors"
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
    </section>

    <!-- Consultation Intake CTA Section -->
    <section class="py-20 bg-(--bg-app)">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative overflow-hidden rounded-2xl bg-(--bg-surface) border border-(--border-strong) text-(--text-primary) p-8 sm:p-12 lg:p-16 shadow-lg">
          <!-- Architectural blueprint millimeter grid background -->
          <div
            class="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20"
            style="background-size: 32px 32px; background-image: linear-gradient(to right, var(--grid-line-color) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line-color) 1px, transparent 1px);"
            aria-hidden="true"
          />

          <div class="relative z-10 max-w-3xl">
            <div class="flex items-center gap-3 mb-4">
              <BaseBadge variant="accent">
                {{ t.contactPage.badge }}
              </BaseBadge>
              <span class="text-xs font-mono text-(--text-muted)">
                // DIRECT INTAKE
              </span>
            </div>
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 leading-tight text-(--text-primary)">
              {{ t.footer.contactCta }}
            </h2>
            <p class="text-(--text-secondary) text-base sm:text-lg mb-8 max-w-2xl leading-relaxed">
              {{ t.contactPage.subtitle }}
            </p>
            <div class="flex flex-wrap items-center gap-4">
              <BaseButton variant="accent" size="lg" :to="localizedPath('/contact')">
                <span>{{ t.hero.primaryCta }}</span>
                <ArrowRight class="w-4 h-4 rtl:-scale-x-100" aria-hidden="true" />
              </BaseButton>
              <BaseButton variant="outline" size="lg" :to="localizedPath('/about')">
                <span>{{ t.aboutPage.title }}</span>
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
