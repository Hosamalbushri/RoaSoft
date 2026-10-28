<script setup lang="ts">
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

      <!-- Bento Box Grid (Architectural Engineering Archetype) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Bento Tile 1: Full-Stack Runtime Platforms (Wide 2-col span on LG) -->
        <BaseCard class="lg:col-span-2 flex flex-col justify-between group">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono font-bold tracking-wider text-(--brand-primary)">
                // CONTRACT_INTERFACE.TS
              </span>
              <BaseBadge variant="muted">
                {{ t.foundation.cards.customSoftware.tag }}
              </BaseBadge>
            </div>

            <!-- Architectural TypeScript Contract Specimen -->
            <div class="p-3.5 mb-6 rounded-lg bg-(--code-bg) text-(--code-text) font-mono text-xs border border-(--border-subtle) overflow-x-auto shadow-inner">
              <div class="flex items-center gap-2 mb-2 pb-2 border-b border-white/10 text-[10px] text-slate-400">
                <span class="w-2 h-2 rounded-full bg-rose-500/80"></span>
                <span class="w-2 h-2 rounded-full bg-amber-500/80"></span>
                <span class="w-2 h-2 rounded-full bg-emerald-500/80"></span>
                <span class="ms-1">core/distributed/stream_engine.ts</span>
              </div>
              <div class="text-slate-400">// Compile-time validated runtime RPC contract</div>
              <div><span class="text-sky-400">export interface</span> <span class="text-amber-300">DistributedRuntime</span>&lt;<span class="text-emerald-400">TPayload</span>&gt; {</div>
              <div class="ps-4"><span class="text-slate-400">readonly</span> <span class="text-blue-300">clusterEpoch</span>: <span class="text-emerald-400">number</span>;</div>
              <div class="ps-4"><span class="text-blue-300">dispatch</span>(message: <span class="text-emerald-400">TPayload</span>): <span class="text-purple-300">Promise</span>&lt;<span class="text-amber-300">SLAState</span>&gt;;</div>
              <div>}</div>
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
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono font-bold tracking-wider text-sky-500">
                // TOPOLOGY_FLOW
              </span>
              <BaseBadge variant="muted">
                {{ t.foundation.cards.cloudArch.tag }}
              </BaseBadge>
            </div>

            <!-- Architectural Container Pipeline Schematic -->
            <div class="p-3.5 mb-6 rounded-lg bg-(--bg-surface-elevated) border border-(--border-subtle) font-mono text-[11px] space-y-2">
              <div class="flex items-center justify-between text-slate-400 text-[10px]">
                <span>STAGE</span>
                <span>METRIC</span>
              </div>
              <div class="flex items-center justify-between p-1.5 rounded bg-(--bg-surface) border border-(--border-subtle)">
                <span class="text-(--text-primary) font-semibold">1. OCI Immutable Build</span>
                <span class="text-emerald-500">PASS</span>
              </div>
              <div class="flex items-center justify-between p-1.5 rounded bg-(--bg-surface) border border-(--border-subtle)">
                <span class="text-(--text-primary) font-semibold">2. Gateway Mesh TLS</span>
                <span class="text-(--brand-primary)">&lt;2ms</span>
              </div>
              <div class="flex items-center justify-between p-1.5 rounded bg-(--bg-surface) border border-(--border-subtle)">
                <span class="text-(--text-primary) font-semibold">3. Multi-Region Replica</span>
                <span class="text-(--brand-accent) font-semibold">TOPOLOGY SPEC</span>
              </div>
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
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono font-bold tracking-wider text-(--brand-accent)">
                // VECTOR_INDEX
              </span>
              <BaseBadge variant="accent">
                {{ t.foundation.cards.aiSolutions.tag }}
              </BaseBadge>
            </div>

            <!-- Architectural Data Flow Diagram -->
            <div class="p-3.5 mb-6 rounded-lg bg-(--bg-surface-elevated) border border-(--border-subtle) font-mono text-[11px] space-y-1.5">
              <div class="text-[10px] text-slate-400 mb-1">// Vector Retrieval Pipeline (Synthetic Benchmark)</div>
              <div class="flex items-center gap-2">
                <span class="px-1.5 py-0.5 rounded bg-(--brand-accent-light) text-(--brand-accent) font-bold text-[10px]">INGEST</span>
                <span class="text-(--text-secondary)">Raw Chunk Stream</span>
              </div>
              <div class="text-center text-slate-400 text-[10px]">↓ HNSW Index (Cosine)</div>
              <div class="flex items-center justify-between p-1.5 rounded bg-(--bg-surface) border border-(--border-subtle)">
                <span class="text-(--text-primary)">Synthetic Benchmark P99</span>
                <span class="text-(--brand-accent) font-bold">11.8ms</span>
              </div>
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
            <span class="text-xs px-2.5 py-1 rounded-md bg-(--bg-surface-elevated) text-(--text-secondary) font-mono">HNSW</span>
            <span class="text-xs px-2.5 py-1 rounded-md bg-(--bg-surface-elevated) text-(--text-secondary) font-mono">Vector DB</span>
          </div>
        </BaseCard>

        <!-- Bento Tile 4: Precision UI/UX Engineering (Wide 2-col span on LG) -->
        <BaseCard class="lg:col-span-2 flex flex-col justify-between group">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono font-bold tracking-wider text-purple-500">
                // TYPOGRAPHY_CONTRAST_SPEC
              </span>
              <BaseBadge variant="muted">
                {{ t.foundation.cards.experienceDesign.tag }}
              </BaseBadge>
            </div>

            <!-- Architectural Typography & Bi-Directional Specimen -->
            <div class="p-3.5 mb-6 rounded-lg bg-(--bg-surface-elevated) border border-(--border-subtle) grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="p-3 rounded bg-(--bg-surface) border border-(--border-subtle)">
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-[10px] font-mono text-slate-400">LATIN // INTER</span>
                  <span class="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">AAA CONTRAST VERIFIED</span>
                </div>
                <div class="text-base font-bold text-(--text-primary)">Geometric Precision</div>
                <div class="text-xs text-(--text-secondary) font-mono">tracking-tight • 600 weight</div>
              </div>
              <div class="p-3 rounded bg-(--bg-surface) border border-(--border-subtle)">
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-[10px] font-mono text-slate-400">ARABIC // CAIRO</span>
                  <span class="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">AAA CONTRAST VERIFIED</span>
                </div>
                <div class="text-base font-bold text-(--text-primary)" dir="rtl">تناسق طباعي أصيل</div>
                <div class="text-xs text-(--text-secondary) font-mono" dir="rtl">normal tracking • 1.35 leading</div>
              </div>
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
