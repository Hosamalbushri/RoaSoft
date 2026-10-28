<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { ArrowRight, Terminal, ShieldCheck, Zap } from 'lucide-vue-next'
import { useI18n } from '../../composables/useI18n'
import { useWebGPU } from '../../composables/useWebGPU'
import BaseButton from '../ui/BaseButton.vue'
import BaseBadge from '../ui/BaseBadge.vue'
import ShaderFallback from './ShaderFallback.vue'

const { t, isRTL } = useI18n()
const { shaderActive } = useWebGPU()

// Defer Shaders WebGPU engine: only downloaded if WebGPU is available and reduced motion is false
const HeroShader = defineAsyncComponent(() => import('./HeroShader.vue'))
</script>

<template>
  <section class="relative min-h-[580px] lg:min-h-[680px] flex items-center overflow-hidden border-b border-(--border-subtle) bg-[#080b11] text-white">
    <!-- Visual Effect Background Layer: Instant zero-CPU fallback always visible as base -->
    <ShaderFallback :is-rtl="isRTL" />

    <!-- Async WebGPU Shader Canvas: Only downloaded and mounted when verified supported -->
    <HeroShader v-if="shaderActive" :is-rtl="isRTL" />

    <!-- Content Container -->
    <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div class="max-w-3xl">
        <!-- Top Operational Badge -->
        <div class="mb-6">
          <BaseBadge variant="accent" :dot="true">
            {{ t.hero.badge }}
          </BaseBadge>
        </div>

        <!-- Primary Display Headline -->
        <h1 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          <span>{{ t.hero.headlinePrefix }} </span>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#fe8312]">
            {{ t.hero.headlineHighlight }}
          </span>
          <br class="hidden sm:inline" />
          <span> {{ t.hero.headlineSuffix }}</span>
        </h1>

        <!-- Subtitle & Value Proposition -->
        <p class="text-base sm:text-lg lg:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
          {{ t.hero.description }}
        </p>

        <!-- Action CTAs -->
        <div class="flex flex-wrap items-center gap-4 mb-12">
          <!-- Primary CTA Button -->
          <BaseButton variant="primary" size="lg" as="a" href="#contact">
            <span>{{ t.hero.primaryCta }}</span>
            <ArrowRight class="w-4 h-4 rtl:-scale-x-100 transition-transform duration-200" aria-hidden="true" />
          </BaseButton>

          <!-- Secondary CTA Button -->
          <BaseButton variant="outline" size="lg" as="a" href="#services" class="border-slate-700 hover:border-slate-500 text-slate-200">
            <span>{{ t.hero.secondaryCta }}</span>
          </BaseButton>
        </div>

        <!-- Key Engineering Metrics -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-800/80">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-lg bg-(--brand-primary)/20 border border-(--brand-primary)/30 flex items-center justify-center shrink-0">
              <ShieldCheck class="w-4 h-4 text-[#60a5fa]" aria-hidden="true" />
            </div>
            <div>
              <div class="text-xl font-bold font-mono text-white">{{ t.hero.metrics.enterprise.value }}</div>
              <div class="text-xs text-slate-400">{{ t.hero.metrics.enterprise.label }}</div>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-lg bg-(--brand-accent)/20 border border-(--brand-accent)/30 flex items-center justify-center shrink-0">
              <Zap class="w-4 h-4 text-[#fe8312]" aria-hidden="true" />
            </div>
            <div>
              <div class="text-xl font-bold font-mono text-white">{{ t.hero.metrics.performance.value }}</div>
              <div class="text-xs text-slate-400">{{ t.hero.metrics.performance.label }}</div>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <Terminal class="w-4 h-4 text-emerald-400" aria-hidden="true" />
            </div>
            <div>
              <div class="text-xl font-bold font-mono text-white">{{ t.hero.metrics.architecture.value }}</div>
              <div class="text-xs text-slate-400">{{ t.hero.metrics.architecture.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
