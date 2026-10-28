import { ref, computed, onMounted } from 'vue'
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

  // Initialize on client mount
  onMounted(() => {
    const saved = localStorage.getItem('roa_locale') as Locale | null
    if (saved === 'ar' || saved === 'en') {
      setLocale(saved)
    } else {
      // Check browser language
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith('ar')) {
        setLocale('ar')
      } else {
        setLocale('en')
      }
    }
  })

  return {
    locale: currentLocale,
    isRTL,
    dir,
    t,
    setLocale,
    toggleLocale,
  }
}
