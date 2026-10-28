export type Locale = 'en' | 'ar'
export type Direction = 'ltr' | 'rtl'
export type Theme = 'light' | 'dark'

export interface NavItem {
  id: string
  labelEn: string
  labelAr: string
  href: string
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

