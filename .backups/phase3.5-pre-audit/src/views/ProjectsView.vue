<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import { ArrowUpRight, X, ShieldCheck } from 'lucide-vue-next'
import { useI18n } from '../composables/useI18n'
import BaseBadge from '../components/ui/BaseBadge.vue'
import BaseButton from '../components/ui/BaseButton.vue'
import BaseCard from '../components/ui/BaseCard.vue'
import { projectsData } from '../data/projects'
import type { ProjectCategory, ProjectItem } from '../types'

const { t, localizedPath, locale } = useI18n()

const selectedCategory = ref<ProjectCategory>('all')
const activeProject = ref<ProjectItem | null>(null)
const modalCloseBtnRef = ref<HTMLButtonElement | null>(null)

const categories: { key: ProjectCategory; labelKey: keyof typeof t.value.projectsPage }[] = [
  { key: 'all', labelKey: 'filterAll' },
  { key: 'web', labelKey: 'filterWeb' },
  { key: 'mobile', labelKey: 'filterMobile' },
  { key: 'cloud', labelKey: 'filterCloud' },
  { key: 'systems', labelKey: 'filterSystems' },
]

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'all') return projectsData
  return projectsData.filter((p) => p.category === selectedCategory.value)
})

const openModal = async (project: ProjectItem) => {
  activeProject.value = project
  await nextTick()
  modalCloseBtnRef.value?.focus()
}

const closeModal = () => {
  activeProject.value = null
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && activeProject.value) {
    closeModal()
  }
}

watch(activeProject, (val) => {
  if (typeof window !== 'undefined') {
    if (val) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeydown)
    } else {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeydown)
    }
  }
})
</script>

<template>
  <div class="py-12 sm:py-16 lg:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Page Header -->
      <div class="max-w-3xl mb-10">
        <BaseBadge variant="accent" class="mb-3">
          {{ t.projectsPage.badge }}
        </BaseBadge>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-(--text-primary) tracking-tight mb-4">
          {{ t.projectsPage.title }}
        </h1>
        <p class="text-lg sm:text-xl text-(--text-secondary) leading-relaxed">
          {{ t.projectsPage.subtitle }}
        </p>
      </div>

      <!-- Honest Architecture Transparency Notice -->
      <div class="mb-10 p-4 sm:p-5 rounded-2xl bg-(--bg-surface-elevated) border border-(--border-subtle) flex items-start gap-3">
        <ShieldCheck class="w-5 h-5 text-(--brand-primary) shrink-0 mt-0.5" aria-hidden="true" />
        <p class="text-xs sm:text-sm text-(--text-secondary) leading-relaxed">
          {{ t.projectsPage.conceptNotice }}
        </p>
      </div>

      <!-- Filter Tabs / Pills -->
      <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar" role="tablist" :aria-label="t.projectsPage.title">
        <button
          v-for="cat in categories"
          :key="cat.key"
          role="tab"
          :aria-selected="selectedCategory === cat.key"
          @click="selectedCategory = cat.key"
          :class="[
            'px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer min-h-[44px] flex items-center gap-2',
            selectedCategory === cat.key
              ? 'bg-(--brand-primary) text-white shadow-xs'
              : 'bg-(--bg-surface) text-(--text-secondary) border border-(--border-subtle) hover:text-(--text-primary) hover:border-(--border-strong)',
          ]"
        >
          <span>{{ t.projectsPage[cat.labelKey] }}</span>
          <span
            :class="[
              'px-1.5 py-0.2 rounded-full text-[11px] font-mono',
              selectedCategory === cat.key ? 'bg-white/20 text-white' : 'bg-(--bg-surface-elevated) text-(--text-muted)',
            ]"
          >
            {{ cat.key === 'all' ? projectsData.length : projectsData.filter(p => p.category === cat.key).length }}
          </span>
        </button>
      </div>

      <!-- Project Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <BaseCard
          v-for="project in filteredProjects"
          :key="project.id"
          :interactive="true"
          class="flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between gap-2 mb-4">
              <BaseBadge variant="primary">
                {{ project.category.toUpperCase() }}
              </BaseBadge>
              <span class="text-xs font-mono text-(--text-muted) px-2 py-0.5 rounded bg-(--bg-app) border border-(--border-subtle)">
                {{ t.projectsPage.conceptBadge }}
              </span>
            </div>

            <h2 class="text-2xl font-bold text-(--text-primary) mb-2">
              {{ locale === 'ar' ? project.titleAr : project.titleEn }}
            </h2>
            <p class="text-sm font-medium text-(--brand-primary) mb-4">
              {{ locale === 'ar' ? project.taglineAr : project.taglineEn }}
            </p>
            <p class="text-sm text-(--text-secondary) leading-relaxed mb-6">
              {{ locale === 'ar' ? project.summaryAr : project.summaryEn }}
            </p>

            <!-- Key Metrics Grid -->
            <div class="grid grid-cols-3 gap-3 p-3.5 rounded-2xl bg-(--bg-app) border border-(--border-subtle) mb-6">
              <div v-for="metric in project.metrics" :key="metric.labelEn" class="text-center sm:text-start">
                <div class="text-[11px] text-(--text-muted) leading-tight truncate">
                  {{ locale === 'ar' ? metric.labelAr : metric.labelEn }}
                </div>
                <div class="text-base sm:text-lg font-bold font-mono text-(--text-primary) mt-1">
                  {{ metric.value }}
                </div>
              </div>
            </div>
          </div>

          <div class="pt-4 border-t border-(--border-subtle) flex flex-wrap items-center justify-between gap-4">
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-2 py-1 rounded-md text-xs font-mono bg-(--bg-surface-elevated) text-(--text-secondary)"
              >
                {{ tech }}
              </span>
            </div>
            <BaseButton
              variant="secondary"
              size="sm"
              @click="openModal(project)"
              :aria-label="`${t.projectsPage.viewArchitecture}: ${locale === 'ar' ? project.titleAr : project.titleEn}`"
            >
              <span>{{ t.projectsPage.viewArchitecture }}</span>
              <ArrowUpRight class="w-3.5 h-3.5 rtl:-scale-x-100" aria-hidden="true" />
            </BaseButton>
          </div>
        </BaseCard>
      </div>

      <!-- Architecture Detail Modal / Dialog -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="activeProject"
          class="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          :aria-label="locale === 'ar' ? activeProject.titleAr : activeProject.titleEn"
        >
          <div
            class="relative w-full max-w-3xl rounded-3xl bg-(--bg-surface) border border-(--border-strong) p-6 sm:p-8 lg:p-10 shadow-2xl my-8 overflow-hidden"
          >
            <!-- Close Button -->
            <button
              ref="modalCloseBtnRef"
              type="button"
              @click="closeModal"
              :aria-label="t.projectsPage.closeModal"
              class="absolute top-6 end-6 w-11 h-11 rounded-full border border-(--border-subtle) bg-(--bg-surface-elevated) text-(--text-secondary) hover:text-(--text-primary) flex items-center justify-center cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-(--border-focus)"
            >
              <X class="w-5 h-5" aria-hidden="true" />
            </button>

            <!-- Modal Header -->
            <div class="mb-6 pe-12">
              <BaseBadge variant="primary" class="mb-3">
                {{ activeProject.category.toUpperCase() }} // {{ t.projectsPage.conceptBadge }}
              </BaseBadge>
              <h2 class="text-2xl sm:text-3xl font-extrabold text-(--text-primary)">
                {{ locale === 'ar' ? activeProject.titleAr : activeProject.titleEn }}
              </h2>
              <p class="text-base font-medium text-(--brand-primary) mt-1">
                {{ locale === 'ar' ? activeProject.taglineAr : activeProject.taglineEn }}
              </p>
            </div>

            <!-- Deep Architectural Content -->
            <div class="space-y-6 max-h-[60vh] overflow-y-auto pe-2">
              <!-- Summary -->
              <div class="p-4 rounded-2xl bg-(--bg-app) text-sm text-(--text-secondary) leading-relaxed">
                {{ locale === 'ar' ? activeProject.summaryAr : activeProject.summaryEn }}
              </div>

              <!-- Challenge -->
              <div>
                <h3 class="text-sm font-bold uppercase tracking-wider text-(--text-primary) font-mono mb-2">
                  {{ t.projectsPage.challengeTitle }}
                </h3>
                <p class="text-sm text-(--text-secondary) leading-relaxed">
                  {{ locale === 'ar' ? activeProject.challengeAr : activeProject.challengeEn }}
                </p>
              </div>

              <!-- Solution -->
              <div>
                <h3 class="text-sm font-bold uppercase tracking-wider text-(--text-primary) font-mono mb-2">
                  {{ t.projectsPage.solutionTitle }}
                </h3>
                <p class="text-sm text-(--text-secondary) leading-relaxed">
                  {{ locale === 'ar' ? activeProject.architectureAr : activeProject.architectureEn }}
                </p>
              </div>

              <!-- Benchmarks -->
              <div>
                <h3 class="text-sm font-bold uppercase tracking-wider text-(--text-primary) font-mono mb-3">
                  {{ t.projectsPage.metricsTitle }}
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div
                    v-for="metric in activeProject.metrics"
                    :key="metric.labelEn"
                    class="p-3.5 rounded-xl bg-(--bg-surface-elevated) border border-(--border-subtle)"
                  >
                    <div class="text-xs text-(--text-muted)">
                      {{ locale === 'ar' ? metric.labelAr : metric.labelEn }}
                    </div>
                    <div class="text-lg font-bold font-mono text-(--brand-primary) mt-0.5">
                      {{ metric.value }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Tech Stack -->
              <div>
                <h3 class="text-sm font-bold uppercase tracking-wider text-(--text-primary) font-mono mb-2">
                  {{ t.projectsPage.technologiesTitle }}
                </h3>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in activeProject.technologies"
                    :key="tech"
                    class="px-2.5 py-1 rounded-lg text-xs font-mono bg-(--bg-app) text-(--text-primary) border border-(--border-subtle)"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Footer of Modal -->
            <div class="pt-6 mt-6 border-t border-(--border-subtle) flex items-center justify-between">
              <BaseButton variant="outline" size="sm" @click="closeModal">
                <span>{{ t.projectsPage.closeModal }}</span>
              </BaseButton>
              <BaseButton variant="primary" size="sm" :to="localizedPath('/contact')">
                <span>{{ t.hero.primaryCta }}</span>
              </BaseButton>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
