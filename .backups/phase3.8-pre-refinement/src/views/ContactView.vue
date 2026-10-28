<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { Mail, Clock, ShieldCheck, CheckCircle2, AlertCircle, RefreshCw, Send } from 'lucide-vue-next'
import { useI18n } from '../composables/useI18n'
import BaseBadge from '../components/ui/BaseBadge.vue'
import BaseButton from '../components/ui/BaseButton.vue'
import BaseCard from '../components/ui/BaseCard.vue'
import { servicesData } from '../data/services'
import { siteConfig } from '../config/site'

const { t, locale } = useI18n()
const route = useRoute()

interface FormState {
  name: string
  email: string
  service: string
  description: string
  budget: string
}

const form = reactive<FormState>({
  name: '',
  email: '',
  service: '',
  description: '',
  budget: '',
})

const errors = reactive<Record<string, string>>({
  name: '',
  email: '',
  service: '',
  description: '',
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const budgetOptions = [
  { value: 'mvp', labelEn: 'Architecture Prototype / MVP', labelAr: 'نموذج أولي / إثبات معمارية' },
  { value: 'scale', labelEn: 'Full Platform Engineering & Scale', labelAr: 'بناء منصة متكاملة وقابلة للتوسع' },
  { value: 'audit', labelEn: 'Code Audit & Performance Profiling', labelAr: 'مراجعة أمنية وهندسية شاملة' },
  { value: 'retainer', labelEn: 'Long-term Engineering Advisory', labelAr: 'استشارات وتوجيه هندسي مستمر' },
]

const validateField = (field: keyof FormState): boolean => {
  let valid = true
  const errs = t.value.contactPage.form.errors

  if (field === 'name') {
    if (!form.name.trim()) {
      errors.name = errs.nameRequired
      valid = false
    } else if (form.name.trim().length < 2) {
      errors.name = errs.nameMin
      valid = false
    } else {
      errors.name = ''
    }
  }

  if (field === 'email') {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!form.email.trim()) {
      errors.email = errs.emailRequired
      valid = false
    } else if (!emailPattern.test(form.email.trim())) {
      errors.email = errs.emailInvalid
      valid = false
    } else {
      errors.email = ''
    }
  }

  if (field === 'service') {
    if (!form.service) {
      errors.service = errs.serviceRequired
      valid = false
    } else {
      errors.service = ''
    }
  }

  if (field === 'description') {
    if (!form.description.trim()) {
      errors.description = errs.descriptionRequired
      valid = false
    } else if (form.description.trim().length < 15) {
      errors.description = errs.descriptionMin
      valid = false
    } else {
      errors.description = ''
    }
  }

  return valid
}

const validateAll = (): boolean => {
  const isNameValid = validateField('name')
  const isEmailValid = validateField('email')
  const isServiceValid = validateField('service')
  const isDescValid = validateField('description')
  return isNameValid && isEmailValid && isServiceValid && isDescValid
}

const handleSubmit = async () => {
  if (!validateAll()) return

  isSubmitting.value = true

  // Demonstration mode: simulate input validation latency without remote transmission
  await new Promise((resolve) => setTimeout(resolve, 500))

  isSubmitting.value = false
  isSubmitted.value = true
  // Privacy note: Personal details are NOT persisted to browser storage or sent to unverified endpoints
}

const resetForm = () => {
  form.name = ''
  form.email = ''
  form.service = ''
  form.description = ''
  form.budget = ''
  errors.name = ''
  errors.email = ''
  errors.service = ''
  errors.description = ''
  isSubmitted.value = false
}

onMounted(() => {
  // Preselect service if query param is passed
  if (route.query.service && typeof route.query.service === 'string') {
    const found = servicesData.find((s) => s.id === route.query.service)
    if (found) {
      form.service = found.id
    }
  }
})
</script>

<template>
  <div class="py-12 sm:py-16 lg:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Page Header -->
      <div class="max-w-3xl mb-12">
        <BaseBadge variant="accent" class="mb-3">
          {{ t.contactPage.badge }}
        </BaseBadge>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-(--text-primary) tracking-tight mb-4">
          {{ t.contactPage.title }}
        </h1>
        <p class="text-lg sm:text-xl text-(--text-secondary) leading-relaxed">
          {{ t.contactPage.subtitle }}
        </p>
      </div>

      <!-- Integration Boundary Notice -->
      <div class="mb-12 p-4 sm:p-5 rounded-2xl bg-(--brand-primary-light)/50 border border-(--brand-primary)/20 flex items-start gap-3">
        <ShieldCheck class="w-5 h-5 text-(--brand-primary) shrink-0 mt-0.5" aria-hidden="true" />
        <p class="text-xs sm:text-sm text-(--text-primary) leading-relaxed">
          {{ t.contactPage.boundaryNotice }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <!-- Contact Information & Details (Col 1-4) -->
        <div class="lg:col-span-4 space-y-6">
          <BaseCard :interactive="false">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-(--brand-primary-light) text-(--brand-primary) flex items-center justify-center shrink-0">
                <Mail class="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <span class="text-xs font-mono uppercase tracking-wider text-(--text-muted) block mb-1">
                  {{ t.contactPage.directEmailLabel }}
                </span>
                <a
                  v-if="siteConfig.contact.isVerified && siteConfig.contact.email"
                  :href="`mailto:${siteConfig.contact.email}`"
                  class="text-base font-bold text-(--brand-primary) hover:underline block break-all"
                >
                  {{ siteConfig.contact.email }}
                </a>
                <div v-else class="flex items-center gap-2 mt-1">
                  <span class="text-xs sm:text-sm font-medium text-(--text-muted)">
                    {{ locale === 'ar' ? siteConfig.contact.displayPlaceholderAr : siteConfig.contact.displayPlaceholderEn }}
                  </span>
                  <BaseBadge variant="muted">TBD</BaseBadge>
                </div>
              </div>
            </div>
          </BaseCard>

          <BaseCard :interactive="false">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-(--brand-accent-light) text-[#fe8312] flex items-center justify-center shrink-0">
                <Clock class="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <span class="text-xs font-mono uppercase tracking-wider text-(--text-muted) block mb-1">
                  {{ t.contactPage.responseTimeLabel }}
                </span>
                <span class="text-base font-bold text-(--text-primary) block">
                  {{ t.contactPage.responseTimeValue }}
                </span>
              </div>
            </div>
          </BaseCard>

          <div class="p-6 rounded-2xl bg-(--bg-surface-elevated) border border-(--border-subtle)">
            <h2 class="text-xs font-mono uppercase tracking-wider text-(--text-muted) font-semibold mb-3">
              Direct Engineering Consultation
            </h2>
            <p class="text-xs text-(--text-secondary) leading-relaxed">
              Every inquiry is reviewed directly by a systems engineer. We assess architectural scope, technical feasibility, and delivery timeline before providing initial recommendations.
            </p>
          </div>
        </div>

        <!-- Consultation Form (Col 5-12) -->
        <div class="lg:col-span-8">
          <div class="p-6 sm:p-10 rounded-3xl bg-(--bg-surface) border border-(--border-subtle) shadow-xs">
            <!-- Success Message State -->
            <div v-if="isSubmitted" class="text-center py-8">
              <div class="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 class="w-8 h-8" aria-hidden="true" />
              </div>
              <h2 class="text-2xl font-bold text-(--text-primary) mb-3">
                {{ t.contactPage.form.successTitle }}
              </h2>
              <p class="text-sm sm:text-base text-(--text-secondary) max-w-lg mx-auto mb-8 leading-relaxed">
                {{ t.contactPage.form.successDesc }}
              </p>
              <BaseButton variant="outline" size="md" @click="resetForm">
                <RefreshCw class="w-4 h-4" aria-hidden="true" />
                <span>{{ t.contactPage.form.resetBtn }}</span>
              </BaseButton>
            </div>

            <!-- Form Inputs -->
            <form v-else @submit.prevent="handleSubmit" novalidate class="space-y-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <!-- Full Name -->
                <div>
                  <label for="contact-name" class="block text-xs font-mono uppercase tracking-wider text-(--text-primary) font-semibold mb-2">
                    {{ t.contactPage.form.nameLabel }} <span class="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    v-model="form.name"
                    type="text"
                    required
                    :aria-invalid="!!errors.name"
                    :aria-describedby="errors.name ? 'name-error' : undefined"
                    @blur="validateField('name')"
                    :placeholder="t.contactPage.form.namePlaceholder"
                    :class="[
                      'w-full px-4 py-3 rounded-xl bg-(--bg-app) border text-sm text-(--text-primary) transition-colors',
                      'focus:outline-2 focus:outline-(--border-focus) focus:bg-(--bg-surface)',
                      errors.name ? 'border-rose-500 bg-rose-500/5' : 'border-(--border-subtle)',
                    ]"
                  />
                  <p v-if="errors.name" id="name-error" class="mt-1.5 text-xs text-rose-500 flex items-center gap-1" role="alert">
                    <AlertCircle class="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>{{ errors.name }}</span>
                  </p>
                </div>

                <!-- Email Address -->
                <div>
                  <label for="contact-email" class="block text-xs font-mono uppercase tracking-wider text-(--text-primary) font-semibold mb-2">
                    {{ t.contactPage.form.emailLabel }} <span class="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    v-model="form.email"
                    type="email"
                    required
                    :aria-invalid="!!errors.email"
                    :aria-describedby="errors.email ? 'email-error' : undefined"
                    @blur="validateField('email')"
                    :placeholder="t.contactPage.form.emailPlaceholder"
                    :class="[
                      'w-full px-4 py-3 rounded-xl bg-(--bg-app) border text-sm text-(--text-primary) transition-colors',
                      'focus:outline-2 focus:outline-(--border-focus) focus:bg-(--bg-surface)',
                      errors.email ? 'border-rose-500 bg-rose-500/5' : 'border-(--border-subtle)',
                    ]"
                  />
                  <p v-if="errors.email" id="email-error" class="mt-1.5 text-xs text-rose-500 flex items-center gap-1" role="alert">
                    <AlertCircle class="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>{{ errors.email }}</span>
                  </p>
                </div>
              </div>

              <!-- Service of Interest -->
              <div>
                <label for="contact-service" class="block text-xs font-mono uppercase tracking-wider text-(--text-primary) font-semibold mb-2">
                  {{ t.contactPage.form.serviceLabel }} <span class="text-rose-500">*</span>
                </label>
                <select
                  id="contact-service"
                  v-model="form.service"
                  required
                  :aria-invalid="!!errors.service"
                  :aria-describedby="errors.service ? 'service-error' : undefined"
                  @change="validateField('service')"
                  :class="[
                    'w-full px-4 py-3 rounded-xl bg-(--bg-app) border text-sm text-(--text-primary) transition-colors cursor-pointer',
                    'focus:outline-2 focus:outline-(--border-focus) focus:bg-(--bg-surface)',
                    errors.service ? 'border-rose-500 bg-rose-500/5' : 'border-(--border-subtle)',
                  ]"
                >
                  <option value="" disabled>{{ t.contactPage.form.servicePlaceholder }}</option>
                  <option v-for="s in servicesData" :key="s.id" :value="s.id">
                    {{ locale === 'ar' ? s.titleAr : s.titleEn }}
                  </option>
                </select>
                <p v-if="errors.service" id="service-error" class="mt-1.5 text-xs text-rose-500 flex items-center gap-1" role="alert">
                  <AlertCircle class="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{{ errors.service }}</span>
                </p>
              </div>

              <!-- Project Description -->
              <div>
                <label for="contact-description" class="block text-xs font-mono uppercase tracking-wider text-(--text-primary) font-semibold mb-2">
                  {{ t.contactPage.form.descriptionLabel }} <span class="text-rose-500">*</span>
                </label>
                <textarea
                  id="contact-description"
                  v-model="form.description"
                  rows="4"
                  required
                  :aria-invalid="!!errors.description"
                  :aria-describedby="errors.description ? 'desc-error' : undefined"
                  @blur="validateField('description')"
                  :placeholder="t.contactPage.form.descriptionPlaceholder"
                  :class="[
                    'w-full px-4 py-3 rounded-xl bg-(--bg-app) border text-sm text-(--text-primary) transition-colors',
                    'focus:outline-2 focus:outline-(--border-focus) focus:bg-(--bg-surface)',
                    errors.description ? 'border-rose-500 bg-rose-500/5' : 'border-(--border-subtle)',
                  ]"
                ></textarea>
                <p v-if="errors.description" id="desc-error" class="mt-1.5 text-xs text-rose-500 flex items-center gap-1" role="alert">
                  <AlertCircle class="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{{ errors.description }}</span>
                </p>
              </div>

              <!-- Scope / Budget (Optional) -->
              <div>
                <label for="contact-budget" class="block text-xs font-mono uppercase tracking-wider text-(--text-primary) font-semibold mb-2">
                  {{ t.contactPage.form.budgetLabel }}
                </label>
                <select
                  id="contact-budget"
                  v-model="form.budget"
                  class="w-full px-4 py-3 rounded-xl bg-(--bg-app) border border-(--border-subtle) text-sm text-(--text-primary) transition-colors cursor-pointer focus:outline-2 focus:outline-(--border-focus) focus:bg-(--bg-surface)"
                >
                  <option value="">{{ t.contactPage.form.budgetSelectPrompt }}</option>
                  <option v-for="b in budgetOptions" :key="b.value" :value="b.value">
                    {{ locale === 'ar' ? b.labelAr : b.labelEn }}
                  </option>
                </select>
              </div>

              <!-- Submit Button -->
              <div class="pt-2">
                <BaseButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  :loading="isSubmitting"
                  class="w-full sm:w-auto"
                >
                  <Send class="w-4 h-4 rtl:-scale-x-100" aria-hidden="true" />
                  <span>{{ isSubmitting ? t.contactPage.form.submitting : t.contactPage.form.submitBtn }}</span>
                </BaseButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
