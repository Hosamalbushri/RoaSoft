<script setup lang="ts">
import { useI18n } from './composables/useI18n'
import { useTheme } from './composables/useTheme'
import SiteHeader from './components/layout/SiteHeader.vue'
import HeroScaffold from './components/hero/HeroScaffold.vue'
import BentoPreview from './components/bento/BentoPreview.vue'
import SiteFooter from './components/layout/SiteFooter.vue'

// Initialize reactive i18n & theme composables
useI18n()
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

      <!-- Bento Grid Foundation Showcase -->
      <BentoPreview />
    </main>

    <!-- Global Footer -->
    <SiteFooter />
  </div>
</template>

