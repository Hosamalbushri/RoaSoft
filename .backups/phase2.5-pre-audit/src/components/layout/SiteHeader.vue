<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X, ArrowRight } from 'lucide-vue-next'
import { useI18n } from '../../composables/useI18n'
import LanguageSwitcher from '../ui/LanguageSwitcher.vue'
import ThemeToggle from '../ui/ThemeToggle.vue'
import BaseButton from '../ui/BaseButton.vue'

const { t } = useI18n()
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <header
    :class="[
      'fixed top-0 inset-x-0 z-50 transition-all duration-300',
      isScrolled
        ? 'py-3 bg-(--bg-app)/85 backdrop-blur-md border-b border-(--border-subtle) shadow-sm'
        : 'py-5 bg-transparent',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-12">
        <!-- Brand Logo & Monogram -->
        <a
          href="#"
          class="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-(--border-focus) rounded-lg"
          aria-label="Roa Soft Home"
        >
          <!-- Geometric Monogram SVG -->
          <div class="w-9 h-9 rounded-xl bg-(--bg-surface) border border-(--border-subtle) flex items-center justify-center p-1.5 shadow-sm group-hover:border-(--brand-primary) transition-colors duration-200">
            <svg viewBox="0 0 64 64" fill="none" class="w-full h-full">
              <path d="M18 44V20H32C36.4183 20 40 23.5817 40 28C40 32.4183 36.4183 36 32 36H24" stroke="#1c66f6" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M30 36L44 44" stroke="#fe8312" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
              <circle cx="44" cy="24" r="4.5" fill="#fe8312" />
            </svg>
          </div>
          <div class="flex flex-col">
            <span class="text-lg font-black tracking-tight text-(--text-primary) leading-none">
              {{ t.brand.name }}
            </span>
            <span class="text-[10px] font-mono uppercase tracking-wider text-(--text-muted) leading-tight mt-0.5">
              Software Systems
            </span>
          </div>
        </a>

        <!-- Desktop Navigation Bar (21st.dev inspiration [id: 32097]) -->
        <nav class="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-(--bg-surface)/80 backdrop-blur-sm border border-(--border-subtle) shadow-xs" aria-label="Main Navigation">
          <a
            href="#"
            class="px-3.5 py-1.5 text-sm font-medium text-(--text-secondary) hover:text-(--text-primary) transition-colors rounded-full hover:bg-(--bg-surface-elevated)"
          >
            {{ t.nav.home }}
          </a>
          <a
            href="#services"
            class="px-3.5 py-1.5 text-sm font-medium text-(--text-secondary) hover:text-(--text-primary) transition-colors rounded-full hover:bg-(--bg-surface-elevated)"
          >
            {{ t.nav.services }}
          </a>
          <a
            href="#projects"
            class="px-3.5 py-1.5 text-sm font-medium text-(--text-secondary) hover:text-(--text-primary) transition-colors rounded-full hover:bg-(--bg-surface-elevated)"
          >
            {{ t.nav.projects }}
          </a>
          <a
            href="#about"
            class="px-3.5 py-1.5 text-sm font-medium text-(--text-secondary) hover:text-(--text-primary) transition-colors rounded-full hover:bg-(--bg-surface-elevated)"
          >
            {{ t.nav.about }}
          </a>
        </nav>

        <!-- Right Side Utility Controls -->
        <div class="hidden sm:flex items-center gap-2.5">
          <LanguageSwitcher />
          <ThemeToggle />
          <BaseButton variant="primary" size="sm" as="a" href="#contact" class="hidden lg:inline-flex">
            <span>{{ t.hero.primaryCta }}</span>
            <ArrowRight class="w-3.5 h-3.5 rtl:-scale-x-100" aria-hidden="true" />
          </BaseButton>
        </div>

        <!-- Mobile Menu Toggle Button (Touch target >= 44x44px) -->
        <div class="flex items-center gap-2 sm:hidden">
          <ThemeToggle />
          <button
            type="button"
            @click="toggleMobileMenu"
            :aria-expanded="isMobileMenuOpen"
            :aria-label="isMobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu"
            class="w-11 h-11 flex items-center justify-center rounded-xl border border-(--border-subtle) bg-(--bg-surface) text-(--text-primary) focus-visible:outline-2 focus-visible:outline-(--border-focus) cursor-pointer"
          >
            <X v-if="isMobileMenuOpen" class="w-5 h-5" aria-hidden="true" />
            <Menu v-else class="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Drawer Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileMenuOpen"
        class="sm:hidden border-b border-(--border-subtle) bg-(--bg-surface) px-4 pt-4 pb-6 shadow-xl"
      >
        <div class="flex flex-col gap-2">
          <a
            href="#"
            @click="closeMobileMenu"
            class="px-4 py-3 rounded-lg text-base font-semibold text-(--text-primary) hover:bg-(--bg-surface-elevated)"
          >
            {{ t.nav.home }}
          </a>
          <a
            href="#services"
            @click="closeMobileMenu"
            class="px-4 py-3 rounded-lg text-base font-semibold text-(--text-primary) hover:bg-(--bg-surface-elevated)"
          >
            {{ t.nav.services }}
          </a>
          <a
            href="#projects"
            @click="closeMobileMenu"
            class="px-4 py-3 rounded-lg text-base font-semibold text-(--text-primary) hover:bg-(--bg-surface-elevated)"
          >
            {{ t.nav.projects }}
          </a>
          <a
            href="#about"
            @click="closeMobileMenu"
            class="px-4 py-3 rounded-lg text-base font-semibold text-(--text-primary) hover:bg-(--bg-surface-elevated)"
          >
            {{ t.nav.about }}
          </a>

          <div class="pt-4 mt-2 border-t border-(--border-subtle) flex items-center justify-between">
            <LanguageSwitcher />
            <BaseButton variant="primary" size="sm" as="a" href="#contact" @click="closeMobileMenu">
              <span>{{ t.hero.primaryCta }}</span>
            </BaseButton>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>
