<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useI18n } from './composables/useI18n'
import { useTheme } from './composables/useTheme'
import SiteHeader from './components/layout/SiteHeader.vue'
import SiteFooter from './components/layout/SiteFooter.vue'

// Initialize reactive i18n & theme composables
useI18n()
useTheme()
</script>

<template>
  <div class="min-h-screen flex flex-col bg-(--bg-app) text-(--text-primary) transition-colors duration-200">
    <!-- Global Header & Navigation -->
    <SiteHeader />

    <!-- Main Content Area Rendered by Localized Route -->
    <main class="flex-1 pt-20">
      <RouterView />
    </main>

    <!-- Global Footer -->
    <SiteFooter />
  </div>
</template>
