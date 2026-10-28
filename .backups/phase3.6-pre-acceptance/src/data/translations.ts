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
      badge: 'هندسة البرمجيات والتحول الرقمي المؤسسي',
      headlinePrefix: 'نهندس',
      headlineHighlight: 'برمجيات فائقة الأداء',
      headlineSuffix: 'لقيادة نمو أعمالك',
      description: 'نبتكر مع شركائنا حلولاً برمجية متقدمة وأنظمة رقمية متكاملة وقابلة للتوسع. من البنى التحتية السحابية الموزعة إلى تكاملات الذكاء الاصطناعي الدقيقة، نحوّل التحديات التقنية المعقدة إلى كفاءة تشغيلية مستدامة.',
      primaryCta: 'ابدأ استشارتك الآن',
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
