export interface TranslationSchema {
  brand: {
    name: string
    tagline: string
    shortDesc: string
  }
  nav: {
    home: string
    services: string
    projects: string
    about: string
    contact: string
    toggleTheme: string
    toggleLanguage: string
    openMenu: string
    closeMenu: string
  }
  hero: {
    badge: string
    headlinePrefix: string
    headlineHighlight: string
    headlineSuffix: string
    description: string
    primaryCta: string
    secondaryCta: string
    metrics: {
      enterprise: { value: string; label: string }
      performance: { value: string; label: string }
      architecture: { value: string; label: string }
    }
  }
  foundation: {
    title: string
    subtitle: string
    engineeringStandards: string
    cards: {
      customSoftware: { title: string; desc: string; tag: string }
      cloudArch: { title: string; desc: string; tag: string }
      aiSolutions: { title: string; desc: string; tag: string }
      experienceDesign: { title: string; desc: string; tag: string }
    }
  }
  footer: {
    rights: string
    status: string
    privacy: string
    terms: string
    contactCta: string
  }
}

export const translations: Record<'en' | 'ar', TranslationSchema> = {
  en: {
    brand: {
      name: 'Roa Soft',
      tagline: 'Engineering the Next Generation of Digital Systems',
      shortDesc: 'A specialized software development firm building high-performance enterprise applications, cloud architectures, and intelligent digital platforms.'
    },
    nav: {
      home: 'Home',
      services: 'Services',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
      toggleTheme: 'Toggle theme',
      toggleLanguage: 'Switch to Arabic',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu'
    },
    hero: {
      badge: 'Enterprise Engineering & Digital Transformation',
      headlinePrefix: 'Architecting',
      headlineHighlight: 'Mission-Critical Software',
      headlineSuffix: 'for Modern Business',
      description: 'We partner with ambitious organizations to design, engineer, and scale resilient digital solutions. From distributed cloud platforms to bespoke AI workflows, we turn complex technical challenges into sustainable business velocity.',
      primaryCta: 'Start a Project',
      secondaryCta: 'View Architectural Work',
      metrics: {
        enterprise: { value: '99.9%', label: 'Architecture SLA Target' },
        performance: { value: '<100ms', label: 'Average Core Latency' },
        architecture: { value: '100%', label: 'Strict Type-Safe Systems' }
      }
    },
    foundation: {
      title: 'Engineered for Performance & Scale',
      subtitle: 'Our technical disciplines span modern frontend ecosystems, scalable cloud-native backends, and secure distributed data layers.',
      engineeringStandards: 'Engineering Standards',
      cards: {
        customSoftware: {
          title: 'Enterprise Web & Mobile',
          desc: 'Modular, type-safe full-stack platforms designed for high throughput, sub-second latency, and intuitive interaction.',
          tag: 'Full-Stack Architecture'
        },
        cloudArch: {
          title: 'Cloud & Infrastructure',
          desc: 'Automated CI/CD pipelines, containerized orchestration, and cost-optimized serverless architectures built on AWS & Google Cloud.',
          tag: 'DevOps & Reliability'
        },
        aiSolutions: {
          title: 'AI & Data Integration',
          desc: 'Embedding purpose-built intelligent models, retrieval-augmented workflows, and data pipelines into production systems.',
          tag: 'Applied Intelligence'
        },
        experienceDesign: {
          title: 'Precision UI/UX Engineering',
          desc: 'Accessible, responsive design systems engineered with mathematical contrast, smooth GPU interactions, and native RTL support.',
          tag: 'Design Systems'
        }
      }
    },
    footer: {
      rights: 'All rights reserved.',
      status: 'Systems Operational',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      contactCta: 'Discuss Your Technical Architecture'
    }
  },
  ar: {
    brand: {
      name: 'رؤى سوفت',
      tagline: 'هندسة الجيل القادم من الأنظمة الرقمية',
      shortDesc: 'شركة متخصصة في تطوير البرمجيات وبناء التطبيقات المؤسسية عالية الأداء والحلول السحابية والأنظمة الرقمية الذكية.'
    },
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      projects: 'الأعمال',
      about: 'عن الشركة',
      contact: 'تواصل معنا',
      toggleTheme: 'تبديل المظهر',
      toggleLanguage: 'التحويل للإنجليزية',
      openMenu: 'فتح قائمة التنقل',
      closeMenu: 'إغلاق قائمة التنقل'
    },
    hero: {
      badge: 'هندسة البرمجيات والتحول الرقمي المؤسسي',
      headlinePrefix: 'نهندس',
      headlineHighlight: 'برمجيات فائقة الأداء',
      headlineSuffix: 'لقيادة نمو أعمالك',
      description: 'نبتكر مع شركائنا حلولاً برمجية متقدمة وأنظمة رقمية متكاملة وقابلة للتوسع. من البنى التحتية السحابية الموزعة إلى تكاملات الذكاء الاصطناعي الدقيقة، نحوّل التحديات التقنية المعقدة إلى كفاءة تشغيلية مستدامة.',
      primaryCta: 'ابدأ مشروعك الآن',
      secondaryCta: 'استكشف البنى الهندسية',
      metrics: {
        enterprise: { value: '99.9%', label: 'هدف استقرار الأنظمة' },
        performance: { value: '<100ms', label: 'متوسط سرعة الاستجابة' },
        architecture: { value: '100%', label: 'أنظمة صارمة بأمان الأنواع' }
      }
    },
    foundation: {
      title: 'بنية هندسية صُممت للأداء والتوسع',
      subtitle: 'تغطي خبراتنا التقنية أحدث بيئات الواجهات الأمامية والأنظمة السحابية الخلفية وقواعد البيانات الموزعة والآمنة.',
      engineeringStandards: 'معاييرنا الهندسية',
      cards: {
        customSoftware: {
          title: 'تطبيقات الويب والجوال المؤسسية',
          desc: 'منصات شاملة معيارية تعتمد أمان الأنواع الصارم، مصممة لاستيعاب الضغط العالي مع تجربة استخدام استثنائية.',
          tag: 'معمارية متكاملة'
        },
        cloudArch: {
          title: 'البنية السحابية وإدارة البنية التحتية',
          desc: 'أتمتة خطوط النشر، وإدارة الحاويات السحابية، وبناء معمارية الخوادم المستقلة المحسّنة للتكلفة والكفاءة.',
          tag: 'استقرار وعمليات سحابية'
        },
        aiSolutions: {
          title: 'حلول وتكاملات الذكاء الاصطناعي',
          desc: 'دمج نماذج الذكاء الاصطناعي الدقيقة ومعالجة البيانات المتطورة داخل سير العمل التشغيلي لرفع الإنتاجية.',
          tag: 'ذكاء تطبيقي'
        },
        experienceDesign: {
          title: 'هندسة تجربة وواجهة المستخدم',
          desc: 'أنظمة تصميم رقمية تلبي معايير إمكانية الوصول، وتباين لوني معتمد، ودعم أصيل للغة العربية من اليمين إلى اليسار.',
          tag: 'أنظمة التصميم'
        }
      }
    },
    footer: {
      rights: 'جميع الحقوق محفوظة.',
      status: 'جميع الأنظمة تعمل بكفاءة',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
      contactCta: 'ناقش المعمارية التقنية لمشروعك'
    }
  }
}

