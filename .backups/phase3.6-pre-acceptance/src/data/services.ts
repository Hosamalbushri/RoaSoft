import type { ServiceItem } from '../types'

export const servicesData: ServiceItem[] = [
  {
    id: 'custom-web',
    titleEn: 'Custom Software & Web Applications',
    titleAr: 'تطوير البرمجيات وتطبيقات الويب المخصصة',
    shortDescEn: 'Scalable, type-safe web platforms designed for high transaction volume, fast response times, and resilience.',
    shortDescAr: 'منصات ويب قابلة للتوسع وعالية الكفاءة، مصممة لاستيعاب أحجام العمليات الكبيرة مع استجابة فائقة السرعة.',
    problemEn: 'Off-the-shelf software often forces workflows into rigid templates, introducing technical debt, performance bottlenecks, and vendor lock-in as your business scales.',
    problemAr: 'غالباً ما تفرض البرمجيات الجاهزة قوالب جامدة على سير العمل، مما يتسبب في تراكم الديون التقنية، وبطء الأداء، والارتباط الإجباري بمزود واحد عند التوسع.',
    valueEn: 'Tailored digital solutions built on modern modular architectures that mirror your exact business processes, deliver sub-second response times, and scale predictably.',
    valueAr: 'حلول رقمية مفصلة مبنية على معمارية برمجية معيارية تطابق متطلبات عملك بدقة، وتضمن استجابة في أجزاء من الثانية وقابلية توقع عالية للتوسع.',
    capabilitiesEn: [
      'Single-Page & Progressive Web Applications (Vue 3, TypeScript)',
      'High-throughput RESTful & GraphQL APIs (Node.js, Go)',
      'Relational & distributed database modeling (PostgreSQL, Redis)',
      'Comprehensive automated testing & CI/CD deployment pipelines'
    ],
    capabilitiesAr: [
      'تطبيقات الويب التفاعلية والتقدمية (Vue 3, TypeScript)',
      'واجهات برمجة تطبيقات عالية التدفق (Node.js, Go)',
      'نمذجة قواعد البيانات العلائقية والموزعة (PostgreSQL, Redis)',
      'خطوط فحص آلي واختبارات شاملة وتكامل ونشر مستمر (CI/CD)'
    ],
    techStack: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Docker'],
    iconName: 'Globe'
  },
  {
    id: 'mobile-dev',
    titleEn: 'Mobile Application Engineering',
    titleAr: 'هندسة تطبيقات الهواتف الذكية',
    shortDescEn: 'High-performance cross-platform and native mobile apps with fluid animations and offline-first capabilities.',
    shortDescAr: 'تطبيقات هواتف ذكية عالية الأداء تدعم مختلف الأنظمة مع تفاعلات سلسة وإمكانية العمل بدون اتصال بالإنترنت.',
    problemEn: 'Poorly engineered mobile apps suffer from laggy frame rates, high battery consumption, brittle offline states, and disparate codebases that double maintenance costs.',
    problemAr: 'تعاني التطبيقات ضعيفة الهندسة من تقطع العرض، واستنزاف البطارية، وفشل العمل في وضع عدم الاتصال، وازدواجية التكلفة لصيانة نسختين منفصلتين.',
    valueEn: 'Unified, smooth 60fps mobile experiences with secure local storage, resilient synchronization protocols, and native platform integration across iOS and Android.',
    valueAr: 'تجربة استخدام متناغمة وسريعة بمعدل 60 إطاراً في الثانية، مع تخزين محلي آمن ومزامنة موثوقة للبيانات ودعم أصيل لمنصتي iOS و Android.',
    capabilitiesEn: [
      'Multiplatform mobile engineering (Flutter / Dart)',
      'Offline-first data sync & SQLite/Hive local storage',
      'Push notification orchestration & real-time websockets',
      'App Store & Google Play compliance, release automation'
    ],
    capabilitiesAr: [
      'تطوير تطبيقات متعددة المنصات (Flutter / Dart)',
      'مزامنة البيانات بدون اتصال بالإنترنت وتخزين محلي آمن',
      'إدارة الإشعارات اللحظية والاتصال الحي عبر WebSockets',
      'إعدادات وتجهيز النشر المعتمد على متاجر App Store و Google Play'
    ],
    techStack: ['Flutter', 'Dart', 'Kotlin', 'Swift', 'SQLite', 'Firebase'],
    iconName: 'Smartphone'
  },
  {
    id: 'ui-ux-design',
    titleEn: 'UI/UX & Design Systems',
    titleAr: 'تصميم تجربة المستخدم وهندسة أنظمة التصميم',
    shortDescEn: 'Mathematical contrast, native RTL typography, and component-driven tokens designed for accessibility and speed.',
    shortDescAr: 'أنظمة تصميم رقمية تعتمد التباين المدروس، والخطوط العربية الأصيلة، ومكونات موحدة لسرعة التطوير وسهولة الوصول.',
    problemEn: 'Fragmented interfaces confuse end users, fail accessibility standards (WCAG), and break when adapted to right-to-left Arabic layouts.',
    problemAr: 'تؤدي الواجهات غير المتناسقة إلى إرباك المستخدمين، ومخالفة معايير إمكانية الوصول العالمية، والتشوه عند تحويل الواجهة إلى اللغة العربية من اليمين لليسار.',
    valueEn: 'A unified design language tokenized into accessible Vue components with verified contrast ratios, native Arabic Cairo typography, and consistent interactive feedback.',
    valueAr: 'لغة تصميم موحدة ومترجمة إلى مكونات برمجية دقيقة، بتباين لوني معتمد، وتيبوغرافيا عربية متوازنة، وتغذية بصرية متناسقة لكل تفاعل.',
    capabilitiesEn: [
      'Bilingual design tokens (Color, Typography, Spacing, Shadows)',
      'Native RTL/LTR symmetric layout architecture',
      'WCAG 2.1 AA contrast & keyboard navigation compliance',
      'Interactive prototyping and component library documentation'
    ],
    capabilitiesAr: [
      'رموز تصميم ثنائية اللغة (الألوان، الخطوط، المسافات، الظلال)',
      'معمارية تخطيط متوازنة تدعم الاتجاهين RTL و LTR تلقائياً',
      'مطابقة تامة لمعايير التباين والتنقل بلوحة المفاتيح (WCAG 2.1 AA)',
      'نماذج تفاعلية وتوثيق شامل لمكتبة المكونات البرمجية'
    ],
    techStack: ['Figma', 'Tailwind CSS v4', 'Tokens Studio', 'ARIA', 'Cairo & Inter'],
    iconName: 'Palette'
  },
  {
    id: 'cloud-systems',
    titleEn: 'Cloud Infrastructure & Distributed Systems',
    titleAr: 'البنية التحتية السحابية والأنظمة الموزعة',
    shortDescEn: 'Infrastructure-as-code, automated deployment pipelines, and high-availability container orchestration.',
    shortDescAr: 'بنية تحتية مشفرة برمجياً، وخطوط نشر مؤتمتة، وإدارة حاويات تدعم التوافرية العالية واستقرار الخدمات.',
    problemEn: 'Manual server provisioning leads to environment drift, unexpected downtime during updates, high cloud bills, and unverified recovery plans.',
    problemAr: 'يؤدي الإعداد اليدوي للخوادم إلى تباين البيئات، وتوقف الخدمات المفاجئ أثناء التحديثات، وارتفاع فواتير السحابة دون خطط تعافي واضحة.',
    valueEn: 'Zero-downtime automated deployment pipelines, observable microservices with metrics and alerts, and cost-controlled cloud architectures.',
    valueAr: 'خطوط نشر مؤتمتة بدون انقطاع للخدمة، ومراقبة شاملة للأداء والمؤشرات التقنية، وتكلفة سحابية محسوبة ومضبوطة بدقة.',
    capabilitiesEn: [
      'Infrastructure as Code (Terraform, Docker Compose)',
      'Automated zero-downtime deployment workflows (GitHub Actions)',
      'Real-time observability, telemetry, and structured logging',
      'Secure networking, SSL management, and edge caching'
    ],
    capabilitiesAr: [
      'البنية التحتية ككود برمجي (Terraform, Docker Compose)',
      'خطوط نشر آلية ومستمرة بدون توقف للخدمة (GitHub Actions)',
      'مراقبة لحظية وتحليل سجلات النظام واستكشاف الأخطاء',
      'أمان الشبكات السحابية، وإدارة شهادات الأمان، وتخزين الحافة المؤقت'
    ],
    techStack: ['Docker', 'Nginx', 'GitHub Actions', 'Linux', 'Terraform', 'Prometheus'],
    iconName: 'Cloud'
  },
  {
    id: 'consulting-audits',
    titleEn: 'Technical Consulting & Code Audits',
    titleAr: 'الاستشارات التقنية ومراجعة الشيفرات البرمجية',
    shortDescEn: 'In-depth code quality reviews, performance profiling, security baseline inspections, and migration roadmaps.',
    shortDescAr: 'فحص شامل لجودة الشيفرة البرمجية، وتحليل دقيق للأداء، ومراجعة المعايير الأمنية، ووضع خطط التحديث والتطوير.',
    problemEn: 'Engineering teams often encounter architectural dead-ends, subtle memory leaks, security oversights, or unclear migration paths when modernizing legacy code.',
    problemAr: 'تواجه الفرق البرمجية انسدادات معمارية، أو تسريباً خفياً في الذاكرة، أو ثغرات أمنية غائبة عند محاولة تحديث الأنظمة القديمة دون خارطة طريق واضحة.',
    valueEn: 'Actionable audit reports with reproducible benchmarks, ranked security and performance remediation steps, and practical engineering guidance.',
    valueAr: 'تقارير فحص عملية مدعومة باختبارات أداء قابلة لإعادة القياس، مع ترتيب الأولويات الأمنية وخطوات واضحة لتحسين الأداء البرمجي.',
    capabilitiesEn: [
      'Full-stack architecture & dependency security audits',
      'Frontend Core Web Vitals & bundle size optimization',
      'Database query indexing and throughput optimization',
      'Technology stack migration feasibility studies'
    ],
    capabilitiesAr: [
      'فحص أمني ومعماري شامل لمكونات النظام والاعتماديات البرمجية',
      'تحسين مؤشرات أداء الويب الأساسية وتقليص حجم الحزم البرمجية',
      'تحسين فهارس واستعلامات قواعد البيانات لرفع معدل المعالجة',
      'دراسات جدوى للانتقال إلى تقنيات أحدث بأقل نسبة مخاطرة'
    ],
    techStack: ['Lighthouse', 'Vite', 'TypeScript Strict', 'Postgres EXPLAIN', 'SonarQube'],
    iconName: 'ShieldCheck'
  }
]

