/**
 * Site Configuration and Business Contact Settings.
 *
 * NOTE: Production business contact details (email, telephone, physical address)
 * have NOT yet been confirmed by the project owner.
 *
 * To avoid claiming unverified credentials, contact channels remain flagged
 * as unconfigured until an authoritative address is provided by the project owner.
 */

export interface ContactConfig {
  email: string | null
  isVerified: boolean
  displayPlaceholderEn: string
  displayPlaceholderAr: string
}

export interface SiteConfig {
  contact: ContactConfig
}

export const siteConfig: SiteConfig = {
  contact: {
    // Left null until explicitly confirmed by the project owner
    email: null,
    isVerified: false,
    displayPlaceholderEn: 'Pending Owner Configuration',
    displayPlaceholderAr: 'بانتظار تأكيد مالك المشروع',
  },
}

