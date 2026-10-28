import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { useI18n } from '../composables/useI18n'
import type { Locale } from '../types'

import HomeView from '../views/HomeView.vue'
import ServicesView from '../views/ServicesView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'

const getPreferredLocale = (): Locale => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('roa_locale') as Locale | null
    if (saved === 'ar' || saved === 'en') return saved
    if (navigator.language && navigator.language.toLowerCase().startsWith('ar')) return 'ar'
  }
  return 'en'
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: () => `/${getPreferredLocale()}`,
  },
  {
    path: '/:lang(en|ar)',
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
      },
      {
        path: 'services',
        name: 'services',
        component: ServicesView,
      },
      {
        path: 'projects',
        name: 'projects',
        component: ProjectsView,
      },
      {
        path: 'about',
        name: 'about',
        component: AboutView,
      },
      {
        path: 'contact',
        name: 'contact',
        component: ContactView,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: () => `/${getPreferredLocale()}`,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  },
})

const titles: Record<'en' | 'ar', Record<string, string>> = {
  en: {
    home: 'Roa Soft | Software Engineering & Digital Systems',
    services: 'Services | Roa Soft',
    projects: 'Projects & Architectures | Roa Soft',
    about: 'About Us | Roa Soft',
    contact: 'Technical Consultation | Roa Soft',
  },
  ar: {
    home: 'رؤى سوفت | هندسة البرمجيات والأنظمة الرقمية',
    services: 'الخدمات الهندسية | رؤى سوفت',
    projects: 'المعماريات البرمجية والأعمال | رؤى سوفت',
    about: 'عن الشركة | رؤى سوفت',
    contact: 'استشارة هندسية | رؤى سوفت',
  },
}

// Sync router language with document direction & i18n composable
router.beforeEach((to, _from, next) => {
  const lang = to.params.lang as Locale | undefined
  if (lang === 'en' || lang === 'ar') {
    const { setLocale, locale } = useI18n()
    if (locale.value !== lang) {
      setLocale(lang)
    } else if (typeof document !== 'undefined') {
      document.documentElement.lang = lang
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    }
  }
  next()
})

// Update document title dynamically for WCAG 2.4.2 page titling
router.afterEach((to) => {
  const lang = (to.params.lang as Locale) || 'en'
  const routeName = (to.name as string) || 'home'
  if (typeof document !== 'undefined' && titles[lang]?.[routeName]) {
    document.title = titles[lang][routeName]
  }
})

