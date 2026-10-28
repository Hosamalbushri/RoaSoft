import type { CompanyPrinciple, ProcessStep } from '../types'

export const engineeringPrinciples: CompanyPrinciple[] = [
  {
    id: 'type-safety',
    titleEn: 'Strict Type Safety & Predictability',
    titleAr: 'أمان الأنواع الصارم وقابلية التوقع',
    descriptionEn: 'We eliminate entire classes of runtime errors through end-to-end TypeScript, strict interface contracts, and deterministic data models.',
    descriptionAr: 'نستبعد فئات كاملة من أخطاء وقت التشغيل عبر استخدام TypeScript الصارم، والعقود البرمجية الدقيقة، ونماذج البيانات المحددة بدقة.',
    iconName: 'Code2'
  },
  {
    id: 'performance-first',
    titleEn: 'Measured Performance, Zero Bloat',
    titleAr: 'أداء مقاس واستبعاد أي هدر برمجي',
    descriptionEn: 'We optimize critical rendering paths, profile bundle sizes, and minimize external runtime dependencies to keep applications responsive and lean.',
    descriptionAr: 'نعمل على تحسين مسارات العرض الحرجة، وقياس أحجام الحزم بدقة، وتقليل الاعتماديات الخارجية لضمان سرعة فائقة وخفة في الاستهلاك.',
    iconName: 'Zap'
  },
  {
    id: 'accessibility-symmetry',
    titleEn: 'Bilingual Symmetry & Accessibility',
    titleAr: 'تكافؤ ثنائي اللغة وإمكانية وصول شاملة',
    descriptionEn: 'Arabic is treated as a first-class citizen with dedicated typographic rhythm, native RTL geometry, and verified WCAG 2.1 AA accessibility.',
    descriptionAr: 'تحظى اللغة العربية بالأولوية مع عناية فائقة بضبط المسافات والارتفاعات الرأسية، وهندسة متكافئة لليمين واليسار ومطابقة لمعايير إمكانية الوصول.',
    iconName: 'Eye'
  },
  {
    id: 'maintainable-architecture',
    titleEn: 'Maintainable, Modular Architectures',
    titleAr: 'معماريات معيارية سهلة التطوير والصيانة',
    descriptionEn: 'We build systems with clean isolation of concerns, making future migrations, feature expansions, and automated refactoring straightforward.',
    descriptionAr: 'نبني الأنظمة بفصل دقيق للمسؤوليات والطبقات، مما يسهل التطوير المستقبلي وإضافة الخصائص الجديدة وإعادة الهيكلة الآلية بأمان.',
    iconName: 'Layers'
  }
]

export const engineeringProcess: ProcessStep[] = [
  {
    step: '01',
    titleEn: 'Discovery & System Design',
    titleAr: 'استكشاف المتطلبات وتصميم المعمارية',
    descriptionEn: 'We dissect your functional requirements, data workflows, and scalability targets before writing a single line of production code.',
    descriptionAr: 'نحلل المتطلبات الوظيفية وسير تدفق البيانات وأهداف التوسع بدقة قبل البدء في كتابة أي سطر برمجي للإنتاج.',
    deliverablesEn: 'Technical specification, database schema, and component hierarchy',
    deliverablesAr: 'المواصفات التقنية، مخطط قاعدة البيانات، وهيكلية المكونات البرمجية'
  },
  {
    step: '02',
    titleEn: 'Prototyping & Design Systems',
    titleAr: 'بناء النماذج التفاعلية ونظام التصميم',
    descriptionEn: 'We construct bilingual UI tokens, verify contrast ratios, and establish reusable component foundations across both Arabic and English.',
    descriptionAr: 'نبني رموز التصميم ثنائية اللغة، ونتحقق من نسب التباين، ونؤسس مكتبة المكونات الموحدة للغتين العربية والإنجليزية.',
    deliverablesEn: 'Accessible component tokens, Figma wireframes, and design specs',
    deliverablesAr: 'رموز تصميم معتمدة للوصول، مخططات واجهات Figma، ومواصفات بصرية'
  },
  {
    step: '03',
    titleEn: 'Iterative Engineering & Verification',
    titleAr: 'الهندسة البرمجية والتحقق المستمر',
    descriptionEn: 'We develop features in incremental milestones with strict TypeScript checks, unit coverage, and automated integration pipelines.',
    descriptionAr: 'نطور الخصائص على مراحل متتالية مع فحوصات برمجية صارمة، وتغطية اختبارات آلية، وخطوط فحص مستمرة.',
    deliverablesEn: 'Type-safe codebase, automated test suites, and staging previews',
    deliverablesAr: 'شيفرة برمجية آمنة، حزم اختبارات آلية، وبيئات تجريبية تفاعلية'
  },
  {
    step: '04',
    titleEn: 'Deployment, Monitoring & Handover',
    titleAr: 'النشر السحابي والمراقبة والتسليم',
    descriptionEn: 'We deploy to resilient cloud environments, verify Core Web Vitals, and deliver thorough technical documentation and maintenance guides.',
    descriptionAr: 'ننشر النظام على بيئات سحابية مستقرة، ونتحقق من معايير أداء الويب الأساسية، ونسلم توثيقاً تقنياً شاملاً مع إرشادات الصيانة.',
    deliverablesEn: 'Production deployment, telemetry dashboards, and documentation',
    deliverablesAr: 'النشر الإنتاجي، لوحات مراقبة المؤشرات، والتوثيق التقني'
  }
]

export const techStackCategories = [
  {
    nameEn: 'Frontend & Architecture',
    nameAr: 'الواجهات الأمامية والمعمارية',
    items: ['Vue 3 (Composition API)', 'TypeScript', 'Tailwind CSS v4', 'Vite', 'Pinia']
  },
  {
    nameEn: 'Mobile Platforms',
    nameAr: 'منصات الهواتف الذكية',
    items: ['Flutter', 'Dart', 'Riverpod', 'SQLite', 'Native Platform Channels']
  },
  {
    nameEn: 'Backend & Databases',
    nameAr: 'الأنظمة الخلفية وقواعد البيانات',
    items: ['Node.js', 'Go', 'FastAPI', 'PostgreSQL', 'Redis']
  },
  {
    nameEn: 'DevOps & Tooling',
    nameAr: 'العمليات السحابية والأدوات',
    items: ['Docker', 'Nginx', 'GitHub Actions', 'Prometheus', 'Linux / POSIX']
  }
]

