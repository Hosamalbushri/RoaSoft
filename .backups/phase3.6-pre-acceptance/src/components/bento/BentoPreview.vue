<script setup lang="ts">
import { Code2, Cloud, Cpu, Layout } from 'lucide-vue-next'
import { useI18n } from '../../composables/useI18n'
import BaseCard from '../ui/BaseCard.vue'
import BaseBadge from '../ui/BaseBadge.vue'

const { t } = useI18n()
</script>

<template>
  <section id="services" class="py-20 lg:py-28 bg-(--bg-app) transition-colors duration-200 scroll-mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="max-w-3xl mb-14">
        <BaseBadge variant="primary" class="mb-4">
          {{ t.foundation.engineeringStandards }}
        </BaseBadge>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-(--text-primary) mb-4">
          {{ t.foundation.title }}
        </h2>
        <p class="text-base sm:text-lg text-(--text-secondary) leading-relaxed">
          {{ t.foundation.subtitle }}
        </p>
      </div>

      <!-- Bento Box Grid (UI/UX Pro Max Archetype: bento-box-grid) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Bento Tile 1: Enterprise Web & Mobile (Wide 2-col span on LG) -->
        <BaseCard class="lg:col-span-2 flex flex-col justify-between group">
          <div>
            <div class="flex items-center justify-between mb-6">
              <div class="w-12 h-12 rounded-xl bg-(--brand-primary-light) border border-(--brand-primary)/20 flex items-center justify-center text-(--brand-primary)">
                <Code2 class="w-6 h-6" aria-hidden="true" />
              </div>
              <BaseBadge variant="muted">
                {{ t.foundation.cards.customSoftware.tag }}
              </BaseBadge>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold text-(--text-primary) mb-3 group-hover:text-(--brand-primary) transition-colors duration-200">
              {{ t.foundation.cards.customSoftware.title }}
            </h3>
            <p class="text-sm sm:text-base text-(--text-secondary) leading-relaxed max-w-xl mb-6">
              {{ t.foundation.cards.customSoftware.desc }}
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-2 pt-4 border-t border-(--border-subtle)">
            <span class="text-xs px-2.5 py-1 rounded-md bg-(--bg-surface-elevated) text-(--text-secondary) font-mono">Vue 3</span>
            <span class="text-xs px-2.5 py-1 rounded-md bg-(--bg-surface-elevated) text-(--text-secondary) font-mono">TypeScript</span>
            <span class="text-xs px-2.5 py-1 rounded-md bg-(--bg-surface-elevated) text-(--text-secondary) font-mono">Node.js</span>
            <span class="text-xs px-2.5 py-1 rounded-md bg-(--bg-surface-elevated) text-(--text-secondary) font-mono">PostgreSQL</span>
          </div>
        </BaseCard>

        <!-- Bento Tile 2: Cloud & Infrastructure -->
        <BaseCard class="flex flex-col justify-between group">
          <div>
            <div class="flex items-center justify-between mb-6">
              <div class="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-500">
                <Cloud class="w-6 h-6" aria-hidden="true" />
              </div>
              <BaseBadge variant="muted">
                {{ t.foundation.cards.cloudArch.tag }}
              </BaseBadge>
            </div>
            <h3 class="text-xl font-bold text-(--text-primary) mb-3 group-hover:text-(--brand-primary) transition-colors duration-200">
              {{ t.foundation.cards.cloudArch.title }}
            </h3>
            <p class="text-sm text-(--text-secondary) leading-relaxed mb-6">
              {{ t.foundation.cards.cloudArch.desc }}
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-2 pt-4 border-t border-(--border-subtle)">
            <span class="text-xs px-2.5 py-1 rounded-md bg-(--bg-surface-elevated) text-(--text-secondary) font-mono">Docker</span>
            <span class="text-xs px-2.5 py-1 rounded-md bg-(--bg-surface-elevated) text-(--text-secondary) font-mono">AWS</span>
            <span class="text-xs px-2.5 py-1 rounded-md bg-(--bg-surface-elevated) text-(--text-secondary) font-mono">Kubernetes</span>
          </div>
        </BaseCard>

        <!-- Bento Tile 3: AI & Data Integration -->
        <BaseCard class="flex flex-col justify-between group">
          <div>
            <div class="flex items-center justify-between mb-6">
              <div class="w-12 h-12 rounded-xl bg-(--brand-accent-light) border border-(--brand-accent)/20 flex items-center justify-center text-(--brand-accent)">
                <Cpu class="w-6 h-6" aria-hidden="true" />
              </div>
              <BaseBadge variant="accent">
                {{ t.foundation.cards.aiSolutions.tag }}
              </BaseBadge>
            </div>
            <h3 class="text-xl font-bold text-(--text-primary) mb-3 group-hover:text-(--brand-accent) transition-colors duration-200">
              {{ t.foundation.cards.aiSolutions.title }}
            </h3>
            <p class="text-sm text-(--text-secondary) leading-relaxed mb-6">
              {{ t.foundation.cards.aiSolutions.desc }}
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-2 pt-4 border-t border-(--border-subtle)">
            <span class="text-xs px-2.5 py-1 rounded-md bg-(--bg-surface-elevated) text-(--text-secondary) font-mono">PyTorch</span>
            <span class="text-xs px-2.5 py-1 rounded-md bg-(--bg-surface-elevated) text-(--text-secondary) font-mono">LLM APIs</span>
            <span class="text-xs px-2.5 py-1 rounded-md bg-(--bg-surface-elevated) text-(--text-secondary) font-mono">Vector DB</span>
          </div>
        </BaseCard>

        <!-- Bento Tile 4: Precision UI/UX Engineering (Wide 2-col span on LG) -->
        <BaseCard class="lg:col-span-2 flex flex-col justify-between group">
          <div>
            <div class="flex items-center justify-between mb-6">
              <div class="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500">
                <Layout class="w-6 h-6" aria-hidden="true" />
              </div>
              <BaseBadge variant="muted">
                {{ t.foundation.cards.experienceDesign.tag }}
              </BaseBadge>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold text-(--text-primary) mb-3 group-hover:text-(--brand-primary) transition-colors duration-200">
              {{ t.foundation.cards.experienceDesign.title }}
            </h3>
            <p class="text-sm sm:text-base text-(--text-secondary) leading-relaxed max-w-xl mb-6">
              {{ t.foundation.cards.experienceDesign.desc }}
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-2 pt-4 border-t border-(--border-subtle)">
            <span class="text-xs px-2.5 py-1 rounded-md bg-(--bg-surface-elevated) text-(--text-secondary) font-mono">WCAG 2.2 AAA</span>
            <span class="text-xs px-2.5 py-1 rounded-md bg-(--bg-surface-elevated) text-(--text-secondary) font-mono">RTL Symmetry</span>
            <span class="text-xs px-2.5 py-1 rounded-md bg-(--bg-surface-elevated) text-(--text-secondary) font-mono">WebGPU</span>
            <span class="text-xs px-2.5 py-1 rounded-md bg-(--bg-surface-elevated) text-(--text-secondary) font-mono">Design Tokens</span>
          </div>
        </BaseCard>
      </div>
    </div>
  </section>
</template>
