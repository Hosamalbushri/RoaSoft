import type { ProjectItem } from '../types'

export const projectsData: ProjectItem[] = [
  {
    id: 'proj-enterprise-portal',
    slug: 'enterprise-analytics-platform',
    category: 'web',
    titleEn: 'Enterprise Telemetry & Analytics Platform',
    titleAr: 'منصة القياسات والتحليلات المؤسسية',
    taglineEn: 'Type-safe distributed dashboard processing high-frequency business events.',
    taglineAr: 'لوحة تحكم معيارية وموزعة لمعالجة أحداث الأعمال عالية التردد بأمان كامل للأنواع.',
    summaryEn: 'An end-to-end web architecture engineered to visualize real-time operational data across distributed nodes with sub-second update cycles.',
    summaryAr: 'معمارية ويب متكاملة صُممت لعرض البيانات التشغيلية اللحظية عبر العقد الموزعة بدورة تحديث لا تتجاوز جزءاً من الثانية.',
    challengeEn: 'Rendering complex timeseries data for thousands of active nodes without freezing the browser main thread or causing layout re-renders.',
    challengeAr: 'معالجة وعرض كميات ضخمة من سلاسل البيانات الزمنية لآلاف العقد التشغيلية دون التسبب في تجميد خيط المعالجة الرئيسي للمتصفح.',
    architectureEn: 'Built with Vue 3 reactive primitives, Web Workers for off-thread aggregation, and a Canvas-based visualization layer backed by WebSockets.',
    architectureAr: 'اعتمدت البنية على دوال Vue 3 التفاعلية، وخيوط عمل الويب (Web Workers) للتجميع خارج الخيط الرئيسي، وطبقة عرض مبنية على Canvas مدعومة بتقنية WebSockets.',
    technologies: ['Vue 3', 'TypeScript', 'WebSockets', 'Web Workers', 'Tailwind CSS', 'FastAPI'],
    metrics: [
      { labelEn: 'Client Render Frame Rate', labelAr: 'معدل تحديث الإطارات', value: '60 FPS' },
      { labelEn: 'WebSocket Ingestion Latency', labelAr: 'زمن استقبال البيانات', value: '<45ms' },
      { labelEn: 'Bundle Size (Gzip)', labelAr: 'حجم الحزمة المضغوطة', value: '48 kB' }
    ],
    isConceptArchitecture: true
  },
  {
    id: 'proj-field-operations',
    slug: 'field-operations-mobile',
    category: 'mobile',
    titleEn: 'Field Operations & Dispatch Suite',
    titleAr: 'تطبيق العمليات الميدانية وإدارة المهام',
    taglineEn: 'Offline-first mobile application with cryptographic sync protocols.',
    taglineAr: 'تطبيق جوال يعمل بدون اتصال بالإنترنت مع بروتوكولات مزامنة مشفرة وموثوقة.',
    summaryEn: 'A resilient mobile workflow client designed for field technicians operating in environments with intermittent or zero cellular connectivity.',
    summaryAr: 'تطبيق جوال مصمم للفرق الميدانية التي تعمل في بيئات ذات اتصال ضعيف أو منعدم بالشبكة الخلوية مع حفظ البيانات محلياً.',
    challengeEn: 'Resolving bidirectional synchronization conflicts when multiple technicians update shared dispatch records while offline.',
    challengeAr: 'حل تعارضات المزامنة ثنائية الاتجاه عند تحديث سجلات المهام المشتركة من قبل عدة فنيين في وضع عدم الاتصال.',
    architectureEn: 'Implemented CRDT (Conflict-free Replicated Data Types) sync models with encrypted SQLite local persistence and background queues.',
    architectureAr: 'تطبيق نماذج بيانات خالية من التعارض (CRDT) مع قاعدة بيانات محلية مشفرة عبر SQLite وقوائم انتظار مجدولة في الخلفية.',
    technologies: ['Flutter', 'Dart', 'SQLite', 'Riverpod', 'AES-256', 'RESTful API'],
    metrics: [
      { labelEn: 'Offline Data Recovery', labelAr: 'نسبة استعادة البيانات في عدم الاتصال', value: '100%' },
      { labelEn: 'Local Storage Footprint', labelAr: 'المساحة التخزينية المحلية', value: '<18 MB' },
      { labelEn: 'Sync Conflict Resolution', labelAr: 'حل التعارض تلقائياً', value: 'Deterministic' }
    ],
    isConceptArchitecture: true
  },
  {
    id: 'proj-cloud-orchestration',
    slug: 'microservices-mesh',
    category: 'cloud',
    titleEn: 'Cloud Service Mesh & Observability',
    titleAr: 'شبكة الخدمات السحابية والمراقبة الموحدة',
    taglineEn: 'Zero-downtime microservice orchestration with distributed tracing.',
    taglineAr: 'إدارة وتوجيه الخدمات المصغرة بدون أي انقطاع مع تتبع دقيق للمسارات البرمجية.',
    summaryEn: 'A hardened infrastructure template providing containerized routing, automated TLS certificate renewal, and unified metrics telemetry.',
    summaryAr: 'نموذج بنية تحتية سحابية يقدم توجيهاً متطوراً للحاويات، وتجديداً تلقائياً لشهادات الأمان، وتتبعاً موحداً لمؤشرات الأداء.',
    challengeEn: 'Managing inter-service communication securely while maintaining observability and preventing cascading failures under sudden traffic spikes.',
    challengeAr: 'إدارة الاتصال الآمن بين الخدمات المصغرة مع الحفاظ على شفافية المراقبة ومنع الانهيارات المتتالية أثناء طفرات الزيارات.',
    architectureEn: 'Engineered using Docker containers behind an automated Nginx reverse proxy with circuit breakers, OpenTelemetry hooks, and Prometheus metrics.',
    architectureAr: 'بنية معتمدة على حاويات Docker خلف خادم Nginx العكسي، مع قواطع دوائر برمجية، وتتبع عبر OpenTelemetry ومقاييس Prometheus.',
    technologies: ['Docker', 'Nginx', 'Prometheus', 'Grafana', 'OpenTelemetry', 'Linux'],
    metrics: [
      { labelEn: 'Deployment Downtime (Target)', labelAr: 'فترة توقف النظام المستهدفة', value: '0 sec' },
      { labelEn: 'P99 Gateway Overhead (Target)', labelAr: 'زمن المعالجة الإضافي المستهدف', value: '<2ms' },
      { labelEn: 'Automated Recovery SLA (Target)', labelAr: 'زمن التعافي التلقائي المستهدف', value: '<10s' }
    ],
    isConceptArchitecture: true
  },
  {
    id: 'proj-bilingual-design-system',
    slug: 'bilingual-design-tokens',
    category: 'systems',
    titleEn: 'Bilingual Design System Core',
    titleAr: 'نظام تصميم ثنائي اللغة ومعياري',
    taglineEn: 'Token-driven UI component library with mathematical RTL/LTR symmetry.',
    taglineAr: 'مكتبة مكونات واجهة مستخدم تعتمد الرموز البرمجية مع تكافؤ هندسي تام بين العربية والإنجليزية.',
    summaryEn: 'An accessible, tokenized component system designed for enterprise products that require predictable structural alignment across language transitions without horizontal overflow.',
    summaryAr: 'نظام مكونات متكامل ومعياري للمؤسسات، يضمن التبديل المتوازن بين اللغتين دون أي طفح أفقي أو تشوه في التخطيط.',
    challengeEn: 'Creating harmonious visual balance between Latin geometric typography (Inter) and Arabic calligraphic cursive forms (Cairo) across all screen densities.',
    challengeAr: 'تحقيق توازن بصري دقيق بين الخطوط اللاتينية الهندسية (Inter) والخط العربي المتصل (Cairo) على مختلف الشاشات والأجهزة.',
    architectureEn: 'Tailwind CSS v4 variable layer paired with WCAG AA verified color tokens, responsive optical sizing, and strict ARIA interaction contracts.',
    architectureAr: 'طبقة متغيرات Tailwind CSS v4 مع رموز ألوان معتمدة بمعايير WCAG AA، ومقاسات بصرية متكيفة، ومعايير وصول ARIA صارمة.',
    technologies: ['Vue 3', 'Tailwind CSS v4', 'TypeScript', 'ARIA', 'Cairo', 'Inter'],
    metrics: [
      { labelEn: 'Accessibility Compliance', labelAr: 'مطابقة إمكانية الوصول', value: 'WCAG 2.1 AA' },
      { labelEn: 'Contrast Ratio (Brand Blue)', labelAr: 'نسبة التباين للأزرق الأساسي', value: '4.91:1' },
      { labelEn: 'Horizontal Overflow', labelAr: 'الطفح الأفقي عند التبديل', value: '0px' }
    ],
    isConceptArchitecture: true
  }
]

