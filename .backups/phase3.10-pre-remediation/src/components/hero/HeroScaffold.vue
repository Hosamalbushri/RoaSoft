<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
import { useI18n } from '../../composables/useI18n'
import { useWebGPU } from '../../composables/useWebGPU'
import BaseButton from '../ui/BaseButton.vue'
import BaseBadge from '../ui/BaseBadge.vue'
import ShaderFallback from './ShaderFallback.vue'

const { t, isRTL, localizedPath } = useI18n()
const { shaderActive } = useWebGPU()

// Defer Shaders WebGPU engine: only downloaded if WebGPU is available and reduced motion is false
const HeroShader = defineAsyncComponent(() => import('./HeroShader.vue'))
</script>

<template>
  <section class="relative min-h-[580px] lg:min-h-[660px] flex items-center overflow-hidden border-b border-(--border-subtle) bg-(--bg-app) text-(--text-primary) transition-colors duration-200">
    <!-- Visual Effect Background Layer: Instant zero-CPU fallback always visible as base -->
    <ShaderFallback :is-rtl="isRTL" />

    <!-- Async WebGPU Shader Canvas: Only downloaded and mounted when verified supported -->
    <HeroShader v-if="shaderActive" :is-rtl="isRTL" />

    <!-- Content Container -->
    <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div class="max-w-3xl">
        <!-- Technical System Coordinates Badge -->
        <div class="mb-6 flex items-center gap-3">
          <BaseBadge variant="accent" :dot="true">
            {{ t.hero.badge }}
          </BaseBadge>
          <span class="text-xs font-mono text-(--text-muted) tracking-wider hidden sm:inline">
            // REV.2026.04
          </span>
        </div>

        <!-- Primary Display Headline: High-contrast architectural typography -->
        <h1 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-(--text-primary)">
          <span>{{ t.hero.headlinePrefix }} </span>
          <span class="text-(--brand-primary)">
            {{ t.hero.headlineHighlight }}
          </span>
          <br class="hidden sm:inline" />
          <span> {{ t.hero.headlineSuffix }}</span>
        </h1>

        <!-- Subtitle & Value Proposition -->
        <p class="text-base sm:text-lg lg:text-xl text-(--text-secondary) mb-8 max-w-2xl leading-relaxed">
          {{ t.hero.description }}
        </p>

        <!-- Action CTAs -->
        <div class="flex flex-wrap items-center gap-4 mb-12">
          <!-- Primary CTA Button -->
          <BaseButton variant="primary" size="lg" :to="localizedPath('/contact')">
            <span>{{ t.hero.primaryCta }}</span>
            <ArrowRight class="w-4 h-4 rtl:-scale-x-100 transition-transform duration-200" aria-hidden="true" />
          </BaseButton>

          <!-- Secondary CTA Button -->
          <BaseButton variant="outline" size="lg" :to="localizedPath('/services')">
            <span>{{ t.hero.secondaryCta }}</span>
          </BaseButton>
        </div>

        <!-- Structural Architecture Metrics Strip -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-(--border-subtle)">
          <div class="p-3.5 rounded-lg bg-(--bg-surface) border border-(--border-subtle) shadow-xs">
            <div class="flex items-center justify-between mb-1">
              <span class="text-[10px] font-mono tracking-wider uppercase text-(--text-muted)">// SPEC.01</span>
              <span class="w-1.5 h-1.5 rounded-full bg-(--brand-primary)"></span>
            </div>
            <div class="text-xl lg:text-2xl font-bold font-mono text-(--text-primary)">{{ t.hero.metrics.enterprise.value }}</div>
            <div class="text-xs text-(--text-secondary) mt-0.5">{{ t.hero.metrics.enterprise.label }}</div>
          </div>

          <div class="p-3.5 rounded-lg bg-(--bg-surface) border border-(--border-subtle) shadow-xs">
            <div class="flex items-center justify-between mb-1">
              <span class="text-[10px] font-mono tracking-wider uppercase text-(--text-muted)">// SPEC.02</span>
              <span class="w-1.5 h-1.5 rounded-full bg-(--brand-accent)"></span>
            </div>
            <div class="text-xl lg:text-2xl font-bold font-mono text-(--text-primary)">{{ t.hero.metrics.performance.value }}</div>
            <div class="text-xs text-(--text-secondary) mt-0.5">{{ t.hero.metrics.performance.label }}</div>
          </div>

          <div class="p-3.5 rounded-lg bg-(--bg-surface) border border-(--border-subtle) shadow-xs">
            <div class="flex items-center justify-between mb-1">
              <span class="text-[10px] font-mono tracking-wider uppercase text-(--text-muted)">// SPEC.03</span>
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            </div>
            <div class="text-xl lg:text-2xl font-bold font-mono text-(--text-primary)">{{ t.hero.metrics.architecture.value }}</div>
            <div class="text-xs text-(--text-secondary) mt-0.5">{{ t.hero.metrics.architecture.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
