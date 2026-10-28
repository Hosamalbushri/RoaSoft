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
  servicesPage: {
    badge: string
    title: string
    subtitle: string
    problemTitle: string
    valueTitle: string
    capabilitiesTitle: string
    techTitle: string
    discussCta: string
    viewProjectsCta: string
  }
  projectsPage: {
    badge: string
    title: string
    subtitle: string
    filterAll: string
    filterWeb: string
    filterMobile: string
    filterCloud: string
    filterSystems: string
    conceptNotice: string
    conceptBadge: string
    viewArchitecture: string
    challengeTitle: string
    solutionTitle: string
    technologiesTitle: string
    metricsTitle: string
    closeModal: string
  }
  aboutPage: {
    badge: string
    title: string
    subtitle: string
    ethosTitle: string
    ethosP1: string
    ethosP2: string
    principlesTitle: string
    principlesSubtitle: string
    processTitle: string
    processSubtitle: string
    deliverablesLabel: string
    techStackTitle: string
    techStackSubtitle: string
  }
  contactPage: {
    badge: string
    title: string
    subtitle: string
    boundaryNotice: string
    directEmailLabel: string
    responseTimeLabel: string
    responseTimeValue: string
    form: {
      nameLabel: string
      namePlaceholder: string
      emailLabel: string
      emailPlaceholder: string
      serviceLabel: string
      servicePlaceholder: string
      descriptionLabel: string
      descriptionPlaceholder: string
      budgetLabel: string
      budgetOptional: string
      budgetSelectPrompt: string
      submitBtn: string
      submitting: string
      successTitle: string
      successDesc: string
      resetBtn: string
      errors: {
        nameRequired: string
        nameMin: string
        emailRequired: string
        emailInvalid: string
        serviceRequired: string
        descriptionRequired: string
        descriptionMin: string
      }
    }
  }
  footer: {
    rights: string
    status: string
    privacy: string
    terms: string
    contactCta: string
    builtWith: string
    quickLinks: string
    servicesHeading: string
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
      badge: 'Systems Engineering & Distributed Platforms',
      headlinePrefix: 'High-Throughput',
      headlineHighlight: 'Distributed Systems',
      headlineSuffix: 'Engineered for Scale.',
      description: 'Roa Soft is a specialized software engineering studio. We architect and implement high-concurrency web platforms, resilient cloud infrastructure, and type-safe data pipelines with verifiable SLAs.',
      primaryCta: 'Start an Engineering Consultation',
      secondaryCta: 'Inspect Technical Architectures',
      metrics: {
        enterprise: { value: '99.95%', label: 'P99 Target Availability SLA' },
        performance: { value: '<85ms', label: 'Engineered Core P95 Latency' },
        architecture: { value: '100%', label: 'Type-Safe Interface Contracts' }
      }
    },
    foundation: {
      title: 'Technical Disciplines & Architecture Standards',
      subtitle: 'Our engineering stack spans low-latency frontend runtimes, containerized cloud orchestration, and mathematically validated design tokens.',
      engineeringStandards: 'Engineering Disciplines',
      cards: {
        customSoftware: {
          title: 'Full-Stack Runtime Platforms',
          desc: 'End-to-end type-safe client-server architectures built with compile-time contract validation, optimistic updates, and deterministic state synchronization.',
          tag: 'ARCH // 01'
        },
        cloudArch: {
          title: 'Cloud Infrastructure & SRE',
          desc: 'Declarative infrastructure-as-code, immutable container deployments, multi-region load balancing, and automated disaster-recovery pipelines.',
          tag: 'ARCH // 02'
        },
        aiSolutions: {
          title: 'Vector Retrieval & Data Pipelines',
          desc: 'Production-grade embeddings, low-latency HNSW vector search indices, and strictly validated schema pipelines integrated into business logic.',
          tag: 'ARCH // 03'
        },
        experienceDesign: {
          title: 'Bilingual Engineering Design Systems',
          desc: 'Mathematical WCAG AAA contrast scales, native bi-directional layout engines (RTL/LTR), fluid typography curves, and zero-runtime CSS tokens.',
          tag: 'ARCH // 04'
        }
      }
    },
    servicesPage: {
      badge: 'Core Technical Capabilities',
      title: 'Disciplined Software Engineering Services',
      subtitle: 'We design and deliver bespoke digital solutions with zero technical compromises. Every system is built for measurable throughput, strict security, and long-term maintainability.',
      problemTitle: 'The Challenge',
      valueTitle: 'Our Solution & Value',
      capabilitiesTitle: 'Core Capabilities',
      techTitle: 'Technology Stack',
      discussCta: 'Consult With Our Engineers',
      viewProjectsCta: 'Explore Architecture Case Studies'
    },
    projectsPage: {
      badge: 'Engineering Showcase',
      title: 'Architectures & Technical Case Studies',
      subtitle: 'Explore our architectural prototypes, system implementations, and technical benchmarks across web, mobile, and cloud environments.',
      filterAll: 'All Disciplines',
      filterWeb: 'Web Platforms',
      filterMobile: 'Mobile Apps',
      filterCloud: 'Cloud Systems',
      filterSystems: 'Design Systems',
      conceptNotice: 'All entries below represent verified technical architectures, open engineering benchmarks, or demonstration systems developed by Roa Soft.',
      conceptBadge: 'Architecture Showcase',
      viewArchitecture: 'Inspect Architecture',
      challengeTitle: 'Engineering Challenge',
      solutionTitle: 'Architectural Implementation',
      technologiesTitle: 'Core Technologies',
      metricsTitle: 'Verified Benchmarks',
      closeModal: 'Close Architecture Details'
    },
    aboutPage: {
      badge: 'Engineering Ethos',
      title: 'Building Software with Craftsmanship & Discipline',
      subtitle: 'Roa Soft is an independent software development studio dedicated to engineering reliable, performant, and maintainable digital systems.',
      ethosTitle: 'Who We Are',
      ethosP1: 'We believe that exceptional software is not built by chasing transient trends, but by adhering to proven engineering principles: strict type safety, verified accessibility, minimal runtime overhead, and clean separation of concerns.',
      ethosP2: 'Whether developing modern cloud-native web platforms, offline-first mobile applications, or unified bilingual design tokens, we approach every project with engineering rigor, transparent architecture, and respect for both developer productivity and end-user performance.',
      principlesTitle: 'Our Engineering Principles',
      principlesSubtitle: 'The foundational tenets that guide every architectural decision we make.',
      processTitle: 'Our Delivery Methodology',
      processSubtitle: 'A structured, transparent engineering lifecycle designed to eliminate uncertainty.',
      deliverablesLabel: 'Key Deliverables',
      techStackTitle: 'Technology Radar',
      techStackSubtitle: 'Selected tools and frameworks we use to build resilient systems.'
    },
    contactPage: {
      badge: 'Technical Consultation',
      title: 'Start an Engineering Consultation',
      subtitle: 'Have a project in mind or need an architectural review? Let us know what you are building, and our engineering team will get back to you promptly.',
      boundaryNotice: 'Integration Boundary: This client form demonstrates real-time accessible input validation in demonstration mode. In this release, submissions are not transmitted to any remote backend and no personal details are stored in browser storage. Official production contact channels will be activated upon project owner verification.',
      directEmailLabel: 'Official Engineering Contact',
      responseTimeLabel: 'Typical Response Window',
      responseTimeValue: 'Within 24 business hours',
      form: {
        nameLabel: 'Your Full Name',
        namePlaceholder: 'e.g. Alex Vance',
        emailLabel: 'Work Email Address',
        emailPlaceholder: 'alex@company.com',
        serviceLabel: 'Service Area of Interest',
        servicePlaceholder: 'Select an area of interest',
        descriptionLabel: 'Project Overview & Objectives',
        descriptionPlaceholder: 'Tell us about your system requirements, timeline, or current technical bottlenecks...',
        budgetLabel: 'Estimated Project Scope (Optional)',
        budgetOptional: 'Optional',
        budgetSelectPrompt: 'Select an approximate scope',
        submitBtn: 'Send Consultation Request',
        submitting: 'Validating Request...',
        successTitle: 'Client Validation Completed (Demonstration Mode)',
        successDesc: 'Your inquiry inputs have been validated successfully against client schema. Because a production backend is not yet connected, no data was transmitted or retained in browser storage.',
        resetBtn: 'Submit Another Inquiry',
        errors: {
          nameRequired: 'Please enter your name.',
          nameMin: 'Name must be at least 2 characters.',
          emailRequired: 'Please enter your email address.',
          emailInvalid: 'Please enter a valid email address (e.g., name@domain.com).',
          serviceRequired: 'Please select a service area of interest.',
          descriptionRequired: 'Please provide a brief description of your project.',
          descriptionMin: 'Description must be at least 15 characters.'
        }
      }
    },
    footer: {
      rights: 'All rights reserved.',
      status: 'Systems Operational',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      contactCta: 'Discuss Your Technical Architecture',
      builtWith: 'Engineered with Vue 3 & Tailwind CSS',
      quickLinks: 'Navigation',
      servicesHeading: 'Engineering Services'
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
      toggleLanguage: 'Switch to English',
      openMenu: 'فتح قائمة التنقل',
      closeMenu: 'إغلاق قائمة التنقل'
    },
    hero: {
      badge: 'هندسة النظم والمنصات الموزعة',
      headlinePrefix: 'أنظمة برمجية',
      headlineHighlight: 'عالية الإنتاجية',
      headlineSuffix: 'ومعمارية سحابية موثوقة.',
      description: 'رؤى سوفت استوديو هندسي متخصص في بناء الأنظمة البرمجية المعقدة. نصمم وننفذ منصات رقمية عالية الأداء، وبنى تحتية سحابية مرنة، وخطوط معالجة بيانات بأمان نوعي صارم ومؤشرات استقرار مقاسة.',
      primaryCta: 'ابدأ استشارة معمارية',
      secondaryCta: 'معاينة المعماريات التقنية',
      metrics: {
        enterprise: { value: '99.95%', label: 'مستوى استقرار بنية P99' },
        performance: { value: '<85ms', label: 'زمن استجابة النواة P95' },
        architecture: { value: '100%', label: 'عقود برمجية صارمة بأمان الأنواع' }
      }
    },
    foundation: {
      title: 'التخصصات الهندسية والمعايير المعمارية',
      subtitle: 'تغطي كفاءاتنا الهندسية بيئات التشغيل منخفضة الكمون، وأتمتة الحاويات السحابية، ورموز التصميم المحسوبة رياضياً.',
      engineeringStandards: 'التخصصات الهندسية',
      cards: {
        customSoftware: {
          title: 'منصات التشغيل المتكاملة',
          desc: 'معماريات متكاملة بين العميل والخادم بأمان نوعي في وقت الترجمة، مع مزامنة حالة حتمية وتحديثات فورية استباقية.',
          tag: 'معمارية // 01'
        },
        cloudArch: {
          title: 'البنية التحتية وهندسة الاعتمادية',
          desc: 'بنية تحتية برمجية بالكامل، ونشر غير قابل للتعديل للحاويات، وموازنة أحمال متعددة المناطق مع خطط تعافي مؤتمتة.',
          tag: 'معمارية // 02'
        },
        aiSolutions: {
          title: 'استرجاع المتجهات وأنابيب البيانات',
          desc: 'تضمين متقدم ومؤشرات بحث متجهي HNSW منخفضة الكمون، مع معالجة صارمة لمخططات البيانات في بيئات الإنتاج الحية.',
          tag: 'معمارية // 03'
        },
        experienceDesign: {
          title: 'أنظمة تصميم هندسية ثنائية اللغة',
          desc: 'مقاييس تباين رياضي تلبي معايير AAA، وتخطيط أصيل لاتجاهي القراءة (RTL/LTR)، ومنحنيات طباعية مرنة بدون أي هدر تشغيلي.',
          tag: 'معمارية // 04'
        }
      }
    },
    servicesPage: {
      badge: 'القدرات الهندسية الأساسية',
      title: 'خدمات هندسة وتطوير البرمجيات المتقدمة',
      subtitle: 'نصمم ونبني حلولاً برمجية مخصصة بلا أي مساومة على المعايير الهندسية. تُبنى أنظمتنا لضمان سرعة معالجة عالية، وأمان صارم، وسهولة تامة في الصيانة والتوسع.',
      problemTitle: 'التحدي التقني',
      valueTitle: 'الحل والقيمة المقدمة',
      capabilitiesTitle: 'القدرات والمخرجات الأساسية',
      techTitle: 'حزمة التقنيات المستخدمة',
      discussCta: 'استشر مهندسينا الآن',
      viewProjectsCta: 'استعرض دراسات المعمارية'
    },
    projectsPage: {
      badge: 'معرض الأعمال الهندسية',
      title: 'المعماريات البرمجية ودراسات الحالة التقنية',
      subtitle: 'استكشف نماذجنا المعمارية، وتطبيقات الأنظمة المتكاملة، ومؤشرات الأداء المقاسة عبر بيئات الويب والهواتف والسحابة.',
      filterAll: 'جميع التخصصات',
      filterWeb: 'منصات الويب',
      filterMobile: 'تطبيقات الجوال',
      filterCloud: 'الأنظمة السحابية',
      filterSystems: 'أنظمة التصميم',
      conceptNotice: 'كافة الأعمال الواردة تمثل معماريات برمجية موثقة ونماذج هندسية استعراضية مطورة داخلياً في رؤى سوفت.',
      conceptBadge: 'معمارية استعراضية موثقة',
      viewArchitecture: 'معاينة المعمارية التقنية',
      challengeTitle: 'التحدي الهندسي',
      solutionTitle: 'التنفيذ المعماري',
      technologiesTitle: 'التقنيات الأساسية',
      metricsTitle: 'المقاييس المعتمدة',
      closeModal: 'إغلاق تفاصيل المعمارية'
    },
    aboutPage: {
      badge: 'فلسفتنا الهندسية',
      title: 'بناء البرمجيات بإتقان وانضباط هندسي',
      subtitle: 'رؤى سوفت استوديو برمجي مستقل مكرس لهندسة أنظمة رقمية موثوقة وعالية الأداء وسهلة الصيانة والتطوير.',
      ethosTitle: 'من نحن',
      ethosP1: 'نؤمن بأن البرمجيات الاستثنائية لا تُبنى باتباع الصيحات العابرة، بل بالتمسك بالمبادئ الهندسية الراسخة: أمان الأنواع الصارم، التحقق الدائم من إمكانية الوصول، استبعاد أي هدر برمجي، والفصل النظيف بين المسؤوليات.',
      ethosP2: 'سواء كنا نطور منصات ويب سحابية حديثة، أو تطبيقات جوال تعمل بفاعلية بدون اتصال، أو رموز تصميم ثنائية اللغة، فإننا نتعامل مع كل مشروع بانضباط هندسي وشفافية معمارية ترتقي بإنتاجية المطورين وتجربة المستخدمين على حد سواء.',
      principlesTitle: 'مبادئنا الهندسية الراسخة',
      principlesSubtitle: 'القواعد الأساسية التي توجه كل قرار معماري نتخذه في مشاريعنا.',
      processTitle: 'منهجية العمل والتسليم',
      processSubtitle: 'دورة حياة هندسية واضحة ومنظمة صُممت لإلغاء أي غموض أو مخاطرة تقنية.',
      deliverablesLabel: 'المخرجات الرئيسية',
      techStackTitle: 'الرادار التقني',
      techStackSubtitle: 'الأدوات والأطر البرمجية المختارة التي نعتمد عليها لبناء أنظمة مرنة ومستقرة.'
    },
    contactPage: {
      badge: 'استشارة هندسية',
      title: 'ابدأ استشارتك التقنية مع خبرائنا',
      subtitle: 'هل لديك مشروع قيد التخطيط أو تحتاج إلى مراجعة معمارية لنظامك؟ شاركنا تفاصيل ما تبنيه، وسيتواصل معك فريقنا الهندسي مباشرة.',
      boundaryNotice: 'حدود التكامل التجريبي: هذا النموذج يقدم فحصاً تفاعلياً للمدخلات وإمكانية الوصول في الوضع التجريبي. في هذا الإصدار، لا يتم إرسال البيانات إلى خادم خلفي ولا تُحفظ أي بيانات شخصية في ذاكرة المتصفح. سيتم تفعيل قنوات الاتصال الرسمية فور اعتمادها من مالك المشروع.',
      directEmailLabel: 'قناة التواصل الهندسي الرسمية',
      responseTimeLabel: 'نافذة الاستجابة المعتادة',
      responseTimeValue: 'خلال 24 ساعة عمل',
      form: {
        nameLabel: 'الاسم الكامل',
        namePlaceholder: 'مثال: أحمد عبد الله',
        emailLabel: 'بريد العمل الإلكتروني',
        emailPlaceholder: 'ahmed@company.com',
        serviceLabel: 'مجال الخدمة المطلوب',
        servicePlaceholder: 'اختر المجال البرمجي المطلوب',
        descriptionLabel: 'نبذة عن المشروع وأهدافه التقنية',
        descriptionPlaceholder: 'صف متطلبات النظام، الجدول الزمني المتوقع، أو التحديات التقنية التي تواجهها حالياً...',
        budgetLabel: 'النطاق التقديري للمشروع (اختياري)',
        budgetOptional: 'اختياري',
        budgetSelectPrompt: 'اختر النطاق التقديري التقريبي',
        submitBtn: 'إرسال طلب الاستشارة',
        submitting: 'جاري التحقق من الطلب...',
        successTitle: 'اكتمل التحقق من المدخلات (الوضع التجريبي)',
        successDesc: 'تم التحقق من صحة مدخلات النموذج بنجاح. نظراً لعدم ربط خادم خلفي إنتاجي حتى الآن، لم يتم إرسال أو حفظ أي بيانات في ذاكرة المتصفح.',
        resetBtn: 'إرسال استفسار آخر',
        errors: {
          nameRequired: 'يرجى إدخال اسمك الكريم.',
          nameMin: 'يجب أن يتكون الاسم من حرفين على الأقل.',
          emailRequired: 'يرجى إدخال بريدك الإلكتروني.',
          emailInvalid: 'يرجى إدخال بريد إلكتروني صحيح (مثال: name@domain.com).',
          serviceRequired: 'يرجى اختيار مجال الخدمة المطلوب.',
          descriptionRequired: 'يرجى تقديم نبذة مختصرة عن المشروع.',
          descriptionMin: 'يجب أن لا تقل النبذة عن 15 حرفاً.'
        }
      }
    },
    footer: {
      rights: 'جميع الحقوق محفوظة.',
      status: 'جميع الأنظمة تعمل بكفاءة',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
      contactCta: 'ناقش المعمارية التقنية لمشروعك',
      builtWith: 'تمت الهندسة باستخدام Vue 3 و Tailwind CSS',
      quickLinks: 'التنقل السريع',
      servicesHeading: 'الخدمات الهندسية'
    }
  }
}
