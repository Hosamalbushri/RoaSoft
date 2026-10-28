export type Locale = 'en' | 'ar'
export type Direction = 'ltr' | 'rtl'
export type Theme = 'light' | 'dark'

export interface NavItem {
  id: string
  labelEn: string
  labelAr: string
  path: string
}

export type ButtonVariant = 'primary' | 'accent' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface MetricItem {
  value: string
  labelEn: string
  labelAr: string
}

export interface CapabilityCard {
  id: string
  titleEn: string
  titleAr: string
  descriptionEn: string
  descriptionAr: string
  tags: string[]
  accentColor?: string
  spanClass?: string
}

export interface ServiceItem {
  id: string
  titleEn: string
  titleAr: string
  shortDescEn: string
  shortDescAr: string
  problemEn: string
  problemAr: string
  valueEn: string
  valueAr: string
  capabilitiesEn: string[]
  capabilitiesAr: string[]
  techStack: string[]
  iconName: string
}

export type ProjectCategory = 'all' | 'web' | 'mobile' | 'cloud' | 'systems'

export interface ProjectItem {
  id: string
  slug: string
  category: 'web' | 'mobile' | 'cloud' | 'systems'
  titleEn: string
  titleAr: string
  taglineEn: string
  taglineAr: string
  summaryEn: string
  summaryAr: string
  challengeEn: string
  challengeAr: string
  architectureEn: string
  architectureAr: string
  technologies: string[]
  metrics: {
    labelEn: string
    labelAr: string
    value: string
  }[]
  isConceptArchitecture: boolean
}

export interface CompanyPrinciple {
  id: string
  titleEn: string
  titleAr: string
  descriptionEn: string
  descriptionAr: string
  iconName: string
}

export interface ProcessStep {
  step: string
  titleEn: string
  titleAr: string
  descriptionEn: string
  descriptionAr: string
  deliverablesEn: string
  deliverablesAr: string
}
