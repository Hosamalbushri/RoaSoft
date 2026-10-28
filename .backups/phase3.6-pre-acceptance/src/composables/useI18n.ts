import { ref, computed } from 'vue'
import type { Locale, Direction } from '../types'
import { translations } from '../data/translations'

const currentLocale = ref<Locale>('en')

export function useI18n() {
  const isRTL = computed<boolean>(() => currentLocale.value === 'ar')
  const dir = computed<Direction>(() => (isRTL.value ? 'rtl' : 'ltr'))
  const t = computed(() => translations[currentLocale.value])

  const setLocale = (newLocale: Locale) => {
    currentLocale.value = newLocale
    if (typeof window !== 'undefined') {
      localStorage.setItem('roa_locale', newLocale)
      document.documentElement.lang = newLocale
      document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr'
    }
  }

  const toggleLocale = () => {
    setLocale(currentLocale.value === 'en' ? 'ar' : 'en')
  }

  const localizedPath = (path: string): string => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`
    return `/${currentLocale.value}${cleanPath === '/' ? '' : cleanPath}`
  }

  return {
    locale: currentLocale,
    isRTL,
    dir,
    t,
    setLocale,
    toggleLocale,
    localizedPath,
  }
}
