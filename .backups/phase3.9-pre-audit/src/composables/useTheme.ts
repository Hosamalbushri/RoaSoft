import { ref, computed, onMounted } from 'vue'
import type { Theme } from '../types'

const currentTheme = ref<Theme>('dark')

export function useTheme() {
  const isDark = computed<boolean>(() => currentTheme.value === 'dark')

  const applyTheme = (newTheme: Theme) => {
    currentTheme.value = newTheme
    if (typeof window !== 'undefined') {
      localStorage.setItem('roa_theme', newTheme)
      document.documentElement.setAttribute('data-theme', newTheme)
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }

  const toggleTheme = () => {
    applyTheme(currentTheme.value === 'dark' ? 'light' : 'dark')
  }

  onMounted(() => {
    const saved = localStorage.getItem('roa_theme') as Theme | null
    if (saved === 'dark' || saved === 'light') {
      applyTheme(saved)
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      applyTheme(prefersDark ? 'dark' : 'light')
    }

    // Listen for OS theme changes if user hasn't explicitly set one
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('roa_theme')) {
        applyTheme(e.matches ? 'dark' : 'light')
      }
    }
    mediaQuery.addEventListener('change', handleChange)
  })

  return {
    theme: currentTheme,
    isDark,
    applyTheme,
    toggleTheme,
  }
}

