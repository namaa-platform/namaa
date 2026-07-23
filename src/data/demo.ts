import type { Category, EpisodeBasic, LearningPath, Tag } from "@/types/platform"

export const categories: Category[] = [
  {
    "id": "cmrxmrmeq0000pl7yoose2vdc",
    "name": "ريادة أعمال",
    "slug": "riada-aamal",
    "description": "اكتشف كيف تبني مشروعك من الصفر وتديره بنجاح",
    "icon": "Rocket",
    "order": 1,
    "_count": {
      "episodes": 3
    }
  },
  {
    "id": "cmrxmrmer0001pl7yo80ysdzq",
    "name": "تسويق ومبيعات",
    "slug": "tasweeg-mabeaat",
    "description": "تعلّم استراتيجيات التسويق الفعّالة وزيادة المبيعات",
    "icon": "Megaphone",
    "order": 2,
    "_count": {
      "episodes": 5
    }
  },
  {
    "id": "cmrxmrmes0002pl7yp8xpiszf",
    "name": "اقتصاد ومال",
    "slug": "eqtesad-mal",
    "description": "افهم كيف يعمل الاقتصاد وأدِر أموالك بذكاء",
    "icon": "TrendingUp",
    "order": 3,
    "_count": {
      "episodes": 3
    }
  },
  {
    "id": "cmrxmrmes0003pl7yss97afot",
    "name": "إدارة وقيادة",
    "slug": "edara-qiada",
    "description": "طوّر مهاراتك القيادية وأدِر فرقك بكفاءة",
    "icon": "Users",
    "order": 4,
    "_count": {
      "episodes": 2
    }
  },
  {
    "id": "cmrxmrmet0004pl7ybi7csii3",
    "name": "تنمية وإنتاجية",
    "slug": "tanmia-intajiya",
    "description": "حسّن أداءك الشخصي وحقق أهدافك بأقل جهد",
    "icon": "Target",
    "order": 5,
    "_count": {
      "episodes": 2
    }
  },
  {
    "id": "cmrxmrmet0005pl7yydqtzzaj",
    "name": "علم نفس وسلوك",
    "slug": "elm-nafs-slooke",
    "description": "افهم سلوك البشر واستخدمه في حياتك وعملك",
    "icon": "Brain",
    "order": 6,
    "_count": {
      "episodes": 2
    }
  },
  {
    "id": "cmrxmrmeu0006pl7y09brj99v",
    "name": "ثقافة وفكر",
    "slug": "thaqafa-fikr",
    "description": "توسّع آفاقك بأفكار تغير طريقة تفكيرك",
    "icon": "BookOpen",
    "order": 7,
    "_count": {
      "episodes": 0
    }
  }
]

export const tags: Tag[] = [
  {
    "id": "cmrxmrmf0000epl7yojywch10",
    "name": "إدارة مشاريع",
    "slug": "إدارة مشاريع"
  },
  {
    "id": "cmrxmrmf0000fpl7ysua65kzq",
    "name": "إدارة وقت",
    "slug": "إدارة وقت"
  },
  {
    "id": "cmrxmrmey000apl7yburstnlw",
    "name": "ابتكار",
    "slug": "ابتكار"
  },
  {
    "id": "cmrxmrmf3000lpl7yhk425oje",
    "name": "اتخاذ قرار",
    "slug": "اتخاذ قرار"
  },
  {
    "id": "cmrxmrmew0009pl7y2gw57nwo",
    "name": "استثمار",
    "slug": "استثمار"
  },
  {
    "id": "cmrxmrmez000cpl7ytsmnkxu9",
    "name": "اقتصاد سلوكي",
    "slug": "اقتصاد سلوكي"
  },
  {
    "id": "cmrxmrmf3000mpl7ycf6u6h9e",
    "name": "بناء عادات",
    "slug": "بناء عادات"
  },
  {
    "id": "cmrxmrmf4000npl7ygvien0f1",
    "name": "تسعير",
    "slug": "تسعير"
  },
  {
    "id": "cmrxmrmez000dpl7yto3vhx3g",
    "name": "تسويق رقمي",
    "slug": "تسويق رقمي"
  },
  {
    "id": "cmrxmrmf5000qpl7y1vx88q7m",
    "name": "تطوير ذات",
    "slug": "تطوير ذات"
  },
  {
    "id": "cmrxmrmew0007pl7yukkzkk1h",
    "name": "تفاوض",
    "slug": "تفاوض"
  },
  {
    "id": "cmrxmrmf2000ipl7ypsn2r9e7",
    "name": "تفكير نقدي",
    "slug": "تفكير نقدي"
  },
  {
    "id": "cmrxmrmf1000hpl7ytbmzgeck",
    "name": "تواصل فعّال",
    "slug": "تواصل فعّال"
  },
  {
    "id": "cmrxmrmf4000opl7ys6ow933n",
    "name": "ذكاء عاطفي",
    "slug": "ذكاء عاطفي"
  },
  {
    "id": "cmrxmrmey000bpl7ymjr1vfu4",
    "name": "ريادة",
    "slug": "ريادة"
  },
  {
    "id": "cmrxmrmew0008pl7yed3p4wqw",
    "name": "علامة تجارية",
    "slug": "علامة تجارية"
  },
  {
    "id": "cmrxmrmf1000gpl7yv7uekjkh",
    "name": "قيادة فرق",
    "slug": "قيادة فرق"
  },
  {
    "id": "cmrxmrmf2000jpl7yxql5diug",
    "name": "مالية شخصية",
    "slug": "مالية شخصية"
  },
  {
    "id": "cmrxmrmf4000ppl7ynwz9cv5o",
    "name": "مبيعات",
    "slug": "مبيعات"
  },
  {
    "id": "cmrxmrmf3000kpl7y0i46e7q8",
    "name": "نمو الأعمال",
    "slug": "نمو الأعمال"
  }
]

export const episodes: EpisodeBasic[] = [
  {
    "id": "cmrxmrmg6001apl7ycd6xpw28",
    "title": "بناء فرق عالية الأداء: من المجموعة إلى الفريق",
    "slug": "high-performing-teams",
    "author": "باتريك لينسيوني",
    "authorOriginal": "Patrick Lencioni",
    "duration": 24,
    "description": "المجموعة ليست فريقًا. الفريق الحقيقي يتحقق فيه خمس وظائف أساسية. هذا الكتاب يشرح لماذا تفشل الفرق وكيف تتحول إلى فرق عالية الأداء.",
    "fullContent": null,
    "mainIdea": "الفرق تفشل بسبب غياب الثقة، وليس بسبب نقص المهارات. الخمس وظائف مترابطة: الثقة، النقاش، الالتزام، المساءلة، والنتائج.",
    "targetAudience": "القادة والمديرون الذين يديرون فرقًا ويريدون تحسين أدائها الجماعي.",
    "whatYouLearn": "كيف تبني الثقة بين أعضاء الفريق، وكيف تشجع النقاش البنّاء، وكيف تحوّل الالتزام إلى نتائج.",
    "applyAfter": "في اجتماع فريقك القادم، شارك نقطة ضعف شخصية صغيرة واطلب من الفريق أن يفعلوا نفس الشيء.",
    "listenNext": "القيادة في 5 مستويات",
    "level": "متوسط",
    "categoryId": "cmrxmrmes0003pl7yss97afot",
    "pathId": null,
    "pathOrder": null,
    "listenCount": 3100,
    "completeCount": 2200,
    "saveCount": 900,
    "coverColor": "#154360",
    "isFeatured": false,
    "isNew": false,
    "coverImage": "/covers/high-performing-teams.svg",
    "category": {
      "id": "cmrxmrmes0003pl7yss97afot",
      "name": "إدارة وقيادة",
      "slug": "edara-qiada",
      "description": "طوّر مهاراتك القيادية وأدِر فرقك بكفاءة",
      "icon": "Users",
      "order": 4
    },
    "tags": [
      {
        "id": "cmrxmrmf1000gpl7yv7uekjkh",
        "name": "قيادة فرق",
        "slug": "قيادة فرق"
      },
      {
        "id": "cmrxmrmf1000hpl7ytbmzgeck",
        "name": "تواصل فعّال",
        "slug": "تواصل فعّال"
      },
      {
        "id": "cmrxmrmf0000epl7yojywch10",
        "name": "إدارة مشاريع",
        "slug": "إدارة مشاريع"
      }
    ],
    "path": null
  },
  {
    "id": "cmrxmrmg40019pl7yl7jpjs70",
    "title": "استراتيجيات البيع المتقدمة: من العرض إلى العقد",
    "slug": "advanced-selling",
    "author": "نيل راهامه",
    "authorOriginal": "Neil Rackham",
    "duration": 28,
    "description": "البيع لم يعد عن الإقناع اللفظي. البحث أثبت أن أفضل البائعين يتبعون منهجية واضحة في اكتشاف المشكلة وتقديم الحل. هذا الملخص يعرض منهجية SPIN.",
    "fullContent": null,
    "mainIdea": "البيع الناجح يعتمد على طرح الأسئلة الصحيحة بالترتيب الصحيح، وليس على عرض المميزات.",
    "targetAudience": "فرق المبيعات وأصحاب المشاريع الذين يبيعون منتجات أو خدمات عالية القيمة.",
    "whatYouLearn": "أسئلة SPIN: الموقف، المشكلة، التأثير، والحاجة لحل المشكلة. وكيف تدير محادثة البيع.",
    "applyAfter": "أعد صياغة نص البيع الخاص بك: بدلًا من عرض المميزات، ابدأ بثلاث أسئلة عن مشكلة العميل.",
    "listenNext": "فهم التسعير: لماذا لا يشتري الناس الأرخص؟",
    "level": "متقدم",
    "categoryId": "cmrxmrmer0001pl7yo80ysdzq",
    "pathId": "cmrxmrmfb000spl7yl1qyxood",
    "pathOrder": 5,
    "listenCount": 2200,
    "completeCount": 1500,
    "saveCount": 620,
    "coverColor": "#7D6608",
    "isFeatured": false,
    "isNew": false,
    "coverImage": "/covers/advanced-selling.svg",
    "category": {
      "id": "cmrxmrmer0001pl7yo80ysdzq",
      "name": "تسويق ومبيعات",
      "slug": "tasweeg-mabeaat",
      "description": "تعلّم استراتيجيات التسويق الفعّالة وزيادة المبيعات",
      "icon": "Megaphone",
      "order": 2
    },
    "tags": [
      {
        "id": "cmrxmrmf4000ppl7ynwz9cv5o",
        "name": "مبيعات",
        "slug": "مبيعات"
      },
      {
        "id": "cmrxmrmew0007pl7yukkzkk1h",
        "name": "تفاوض",
        "slug": "تفاوض"
      },
      {
        "id": "cmrxmrmez000dpl7yto3vhx3g",
        "name": "تسويق رقمي",
        "slug": "تسويق رقمي"
      }
    ],
    "path": {
      "id": "cmrxmrmfb000spl7yl1qyxood",
      "title": "مسار التسويق الاحترافي",
      "slug": "masaar-altasweeg",
      "description": "من فهم العميل إلى بناء علامة تجارية قوية وتحويل العملاء المحتملين",
      "icon": "Megaphone",
      "episodeCount": 6
    }
  },
  {
    "id": "cmrxmrmg30018pl7yjfc14pn4",
    "title": "بناء نموذج العمل التجاري",
    "slug": "business-model-canvas",
    "author": "أليكسندر أوستروالدر",
    "authorOriginal": "Alexander Osterwalder",
    "duration": 25,
    "description": "نموذج العمل التجاري ليس خطة طويلة، بل لوحة واحدة تسألك تسعة أسئلة جوهرية. هذا الملخص يشرح كيف تصمم نموذج عملك بأبسط طريقة ممكنة.",
    "fullContent": null,
    "mainIdea": "نموذج العمل الناجح يربط بين القيمة التي تقدمها والعملاء الذين يخدمهم والطريقة التي تحقق بها الإيرادات.",
    "targetAudience": "روّاد الأعمال الذين لديهم فكرة ويحتاجون ترجمتها إلى نموذج عمل واضح وقابل للتنفيذ.",
    "whatYouLearn": "التسعة عناصر: شرائح العملاء، القيمة، القنوات، العلاقات، مصادر الإيرادات، الموارد، الأنشطة، الشركاء، التكلفة.",
    "applyAfter": "ارسم لوحة نموذج العمل الخاصة بك على ورقة كبيرة واملأ كل قسم بجملة واحدة.",
    "listenNext": "من الصفر إلى الواحد: كيف تبني المستقبل",
    "level": "مبتدئ",
    "categoryId": "cmrxmrmeq0000pl7yoose2vdc",
    "pathId": "cmrxmrmfa000rpl7yrfoceueo",
    "pathOrder": 4,
    "listenCount": 2800,
    "completeCount": 1900,
    "saveCount": 810,
    "coverColor": "#1A5276",
    "isFeatured": false,
    "isNew": false,
    "coverImage": "/covers/business-model-canvas.svg",
    "category": {
      "id": "cmrxmrmeq0000pl7yoose2vdc",
      "name": "ريادة أعمال",
      "slug": "riada-aamal",
      "description": "اكتشف كيف تبني مشروعك من الصفر وتديره بنجاح",
      "icon": "Rocket",
      "order": 1
    },
    "tags": [
      {
        "id": "cmrxmrmey000bpl7ymjr1vfu4",
        "name": "ريادة",
        "slug": "ريادة"
      },
      {
        "id": "cmrxmrmey000apl7yburstnlw",
        "name": "ابتكار",
        "slug": "ابتكار"
      },
      {
        "id": "cmrxmrmf3000lpl7yhk425oje",
        "name": "اتخاذ قرار",
        "slug": "اتخاذ قرار"
      }
    ],
    "path": {
      "id": "cmrxmrmfa000rpl7yrfoceueo",
      "title": "مسار إطلاق مشروعك",
      "slug": "itlaq-mashrooak",
      "description": "من الفكرة إلى أول عميل: رحلة عملية لبناء مشروعك خطوة بخطوة",
      "icon": "Rocket",
      "episodeCount": 7
    }
  },
  {
    "id": "cmrxmrmg10017pl7yl666eex0",
    "title": "فن الإقناع: كيف تؤثر في قرارات الآخرين",
    "slug": "art-of-persuasion",
    "author": "روبرت سيالديني",
    "authorOriginal": "Robert Cialdini",
    "duration": 22,
    "description": "ستة مبادئ علمية للإقناع يستخدمها الخبراء دون أن يدركوا. فهمها يعطيك قدرة غير عادية على التأثير في الآخرين بطرق أخلاقية.",
    "fullContent": null,
    "mainIdea": "الإقناع ليس غموضًا أو سحرًا، بل مبادئ علمية قابلة للتعلم والتطبيق في أي مجال.",
    "targetAudience": "كل من يتعامل مع الناس في مجال البيع أو التسويق أو الإدارة أو حتى العلاقات الشخصية.",
    "whatYouLearn": "ستة مبادئ: الالتزام والتناسق، الإعجاب المتبادل، الدليل الاجتماعي، السلطة، الندرة، والتوافر.",
    "applyAfter": "حدّد مبدأ واحد من الستة واستخدمه في رسالتك التسويقية أو عرضك القادم.",
    "listenNext": "التفاوض الذي لا يُنسى",
    "level": "مبتدئ",
    "categoryId": "cmrxmrmet0005pl7yydqtzzaj",
    "pathId": null,
    "pathOrder": null,
    "listenCount": 4300,
    "completeCount": 3100,
    "saveCount": 1350,
    "coverColor": "#641E16",
    "isFeatured": false,
    "isNew": false,
    "coverImage": "/covers/art-of-persuasion.svg",
    "category": {
      "id": "cmrxmrmet0005pl7yydqtzzaj",
      "name": "علم نفس وسلوك",
      "slug": "elm-nafs-slooke",
      "description": "افهم سلوك البشر واستخدمه في حياتك وعملك",
      "icon": "Brain",
      "order": 6
    },
    "tags": [
      {
        "id": "cmrxmrmew0007pl7yukkzkk1h",
        "name": "تفاوض",
        "slug": "تفاوض"
      },
      {
        "id": "cmrxmrmf4000opl7ys6ow933n",
        "name": "ذكاء عاطفي",
        "slug": "ذكاء عاطفي"
      },
      {
        "id": "cmrxmrmf4000ppl7ynwz9cv5o",
        "name": "مبيعات",
        "slug": "مبيعات"
      }
    ],
    "path": null
  },
  {
    "id": "cmrxmrmfz0016pl7yv453x5uv",
    "title": "الميلاد المالي: كيف تبدأ ثروتك من الصفر",
    "slug": "financial-birth",
    "author": "روبرت كيوساكي",
    "authorOriginal": "Robert Kiyosaki",
    "duration": 26,
    "description": "الفرق بين الأغنياء والفقراء ليس في المال، بل في الطريقة التي يفكرون بها عن المال. هذا الملخص يعرض الفلسفة التي تغيّر علاقتك مع المال.",
    "fullContent": null,
    "mainIdea": "الأغنياء يشترون أصولًا تولّد دخلًا، بينما الفقراء يشترون التزامات يعتقدون أنها أصول.",
    "targetAudience": "كل من يريد بناء قاعدة مالية قوية ويفهم الفرق بين الأصول والالتزامات.",
    "whatYouLearn": "كيف تقرأ البيانات المالية الشخصية، وكيف تبني مصادر دخل متعددة، وما هو الفرق الحقيقي بين الأصول والالتزامات.",
    "applyAfter": "سجّل كل مصاريفك لمدة أسبوع وصرّفها إلى أصول والتزامات. ستفاجأ بالنتيجة.",
    "listenNext": "فهم التسعير: لماذا لا يشتري الناس الأرخص؟",
    "level": "مبتدئ",
    "categoryId": "cmrxmrmes0002pl7yp8xpiszf",
    "pathId": "cmrxmrmfd000tpl7yg3bjx34k",
    "pathOrder": 3,
    "listenCount": 5800,
    "completeCount": 4200,
    "saveCount": 1800,
    "coverColor": "#1C2833",
    "isFeatured": false,
    "isNew": false,
    "coverImage": "/covers/financial-birth.svg",
    "category": {
      "id": "cmrxmrmes0002pl7yp8xpiszf",
      "name": "اقتصاد ومال",
      "slug": "eqtesad-mal",
      "description": "افهم كيف يعمل الاقتصاد وأدِر أموالك بذكاء",
      "icon": "TrendingUp",
      "order": 3
    },
    "tags": [
      {
        "id": "cmrxmrmf2000jpl7yxql5diug",
        "name": "مالية شخصية",
        "slug": "مالية شخصية"
      },
      {
        "id": "cmrxmrmew0009pl7y2gw57nwo",
        "name": "استثمار",
        "slug": "استثمار"
      },
      {
        "id": "cmrxmrmf2000ipl7ypsn2r9e7",
        "name": "تفكير نقدي",
        "slug": "تفكير نقدي"
      }
    ],
    "path": {
      "id": "cmrxmrmfd000tpl7yg3bjx34k",
      "title": "مسار فهم الاقتصاد",
      "slug": "fhm-aliqtisad",
      "description": "تعلّم أساسيات الاقتصاد وكيف تؤثر الأحداث العالمية على حياتك ومالك",
      "icon": "TrendingUp",
      "episodeCount": 5
    }
  },
  {
    "id": "cmrxmrmfy0015pl7ypi0m3khi",
    "title": "التسويق بالمحتوى: كيف تجذب العملاء بدل مطاردتهم",
    "slug": "content-marketing",
    "author": "جو بوليتزي",
    "authorOriginal": "Joe Pulizzi",
    "duration": 23,
    "description": "التسويق بالمحتوى ليس نشر مقالات عشوائية. إنه استراتيجية منهجية لجذب جمهور مستهدف وبناء علاقة ثقة تتحول إلى مبيعات.",
    "fullContent": null,
    "mainIdea": "المحتوى الذي يثقّف ويضيف قيمة حقيقية يجذب العملاء المناسبين ويحتفظ بهم أطول من أي إعلان مدفوع.",
    "targetAudience": "أصحاب المشاريع والمسوّقون الرقميون الذين يريدون بناء استراتيجية محتوى تحوّل القراء إلى عملاء.",
    "whatYouLearn": "كيف تحدد هوية محتواك، وكيف تبني تقويم محتوى سنوي، وكيف تقيس نجاح استراتيجيتك.",
    "applyAfter": "اكتب ثلاثة مواضيع يبحث عنها عملاؤك المستهدفون وابدأ بمحتوى واحد هذا الأسبوع.",
    "listenNext": "بناء علامة تجارية لا تُنسى",
    "level": "مبتدئ",
    "categoryId": "cmrxmrmer0001pl7yo80ysdzq",
    "pathId": "cmrxmrmfb000spl7yl1qyxood",
    "pathOrder": 3,
    "listenCount": 2500,
    "completeCount": 1700,
    "saveCount": 680,
    "coverColor": "#784212",
    "isFeatured": false,
    "isNew": false,
    "coverImage": "/covers/content-marketing.svg",
    "category": {
      "id": "cmrxmrmer0001pl7yo80ysdzq",
      "name": "تسويق ومبيعات",
      "slug": "tasweeg-mabeaat",
      "description": "تعلّم استراتيجيات التسويق الفعّالة وزيادة المبيعات",
      "icon": "Megaphone",
      "order": 2
    },
    "tags": [
      {
        "id": "cmrxmrmez000dpl7yto3vhx3g",
        "name": "تسويق رقمي",
        "slug": "تسويق رقمي"
      },
      {
        "id": "cmrxmrmew0008pl7yed3p4wqw",
        "name": "علامة تجارية",
        "slug": "علامة تجارية"
      },
      {
        "id": "cmrxmrmf4000ppl7ynwz9cv5o",
        "name": "مبيعات",
        "slug": "مبيعات"
      }
    ],
    "path": {
      "id": "cmrxmrmfb000spl7yl1qyxood",
      "title": "مسار التسويق الاحترافي",
      "slug": "masaar-altasweeg",
      "description": "من فهم العميل إلى بناء علامة تجارية قوية وتحويل العملاء المحتملين",
      "icon": "Megaphone",
      "episodeCount": 6
    }
  },
  {
    "id": "cmrxmrmfw0014pl7yqmbrvnmm",
    "title": "إدارة الوقت وفق أولويات حقيقية",
    "slug": "essentialism-time",
    "author": "غريغ ماكيون",
    "authorOriginal": "Greg McKeown",
    "duration": 20,
    "description": "ليست المشكلة أننا لا نملك وقتًا كافيًا، بل أننا نقضيه على أشياء لا أهمية حقيقية لها. هذا الكتاب يقدّم فلسفة \"الجوهري\" للتركيز على ما يهم حقًا.",
    "fullContent": null,
    "mainIdea": "الطريقة الوحيدة للقيام بأشياء عظيمة هي التركيز على الأقلية الحاسمة من الأنشطة وتجاهل البقية.",
    "targetAudience": "كل من يشعر بالضغط المستمر ويشك في أنه يقضي وقته على أشياء لا قيمة حقيقية لها.",
    "whatYouLearn": "كتحدد أولوياتك الحقيقية بعيدًا عن ضغوط الآخرين، وكيف تقول لا بلباقة، وكيف تصمم روتينًا يدعم أهدافك.",
    "applyAfter": "راجع جدول أسبوعك القادم وألغِ أو فوّض ثلاثة أنشطة لا تندرج ضمن أولوياتك الحقيقية.",
    "listenNext": "العادات الذرية: كيف تتغيّر بمجهود ضئيل",
    "level": "مبتدئ",
    "categoryId": "cmrxmrmet0004pl7ybi7csii3",
    "pathId": null,
    "pathOrder": null,
    "listenCount": 3900,
    "completeCount": 2800,
    "saveCount": 1200,
    "coverColor": "#0E6655",
    "isFeatured": false,
    "isNew": false,
    "coverImage": "/covers/essentialism-time.svg",
    "category": {
      "id": "cmrxmrmet0004pl7ybi7csii3",
      "name": "تنمية وإنتاجية",
      "slug": "tanmia-intajiya",
      "description": "حسّن أداءك الشخصي وحقق أهدافك بأقل جهد",
      "icon": "Target",
      "order": 5
    },
    "tags": [
      {
        "id": "cmrxmrmf0000fpl7ysua65kzq",
        "name": "إدارة وقت",
        "slug": "إدارة وقت"
      },
      {
        "id": "cmrxmrmf3000mpl7ycf6u6h9e",
        "name": "بناء عادات",
        "slug": "بناء عادات"
      },
      {
        "id": "cmrxmrmf5000qpl7y1vx88q7m",
        "name": "تطوير ذات",
        "slug": "تطوير ذات"
      }
    ],
    "path": null
  },
  {
    "id": "cmrxmrmfu0013pl7yj6bz67k4",
    "title": "الاقتصاد السلوكي: كيف يفكر الناس فعلًا بالمال؟",
    "slug": "behavioral-economics",
    "author": "دان آريلي",
    "authorOriginal": "Dan Ariely",
    "duration": 24,
    "description": "دان آريلي يثبت بالتجارب العلمية أننا لسنا عقلانيين كما نعتقد. قراراتنا المالية تتأثر بالسياق والتحيزات بشكل أكبر مما نتخيل.",
    "fullContent": null,
    "mainIdea": "السلوك البشري يمكن التنبؤ به رغم عدم عقلانيته الظاهرة. فهم هذه الأنماط يمنحك قوة في اتخاذ القرارات والتأثير على الآخرين.",
    "targetAudience": "كل من يريد فهم لماذا يشتري الناس ما يشترون، ولماذا يتخذون القرارات المالية التي يتخذونها.",
    "whatYouLearn": "تأثير التسعير المجاني، وقوة القيمة الافتراضية، وكيف تؤثر الخيارات المحيطة على قراراتنا.",
    "applyAfter": "لاحظ ثلاث قرارات شراء اتخذتها هذا الأسبوع وحدّد ما الذي أثّر فيها: السعر أم السياق أم المشاعر.",
    "listenNext": "اقتصاد الغفلة: لماذا نُسيء فهم الاقتصاد؟",
    "level": "مبتدئ",
    "categoryId": "cmrxmrmes0002pl7yp8xpiszf",
    "pathId": "cmrxmrmfd000tpl7yg3bjx34k",
    "pathOrder": 2,
    "listenCount": 3400,
    "completeCount": 2400,
    "saveCount": 1050,
    "coverColor": "#1B2631",
    "isFeatured": false,
    "isNew": true,
    "coverImage": "/covers/behavioral-economics.svg",
    "category": {
      "id": "cmrxmrmes0002pl7yp8xpiszf",
      "name": "اقتصاد ومال",
      "slug": "eqtesad-mal",
      "description": "افهم كيف يعمل الاقتصاد وأدِر أموالك بذكاء",
      "icon": "TrendingUp",
      "order": 3
    },
    "tags": [
      {
        "id": "cmrxmrmez000cpl7ytsmnkxu9",
        "name": "اقتصاد سلوكي",
        "slug": "اقتصاد سلوكي"
      },
      {
        "id": "cmrxmrmf4000npl7ygvien0f1",
        "name": "تسعير",
        "slug": "تسعير"
      },
      {
        "id": "cmrxmrmf2000ipl7ypsn2r9e7",
        "name": "تفكير نقدي",
        "slug": "تفكير نقدي"
      }
    ],
    "path": {
      "id": "cmrxmrmfd000tpl7yg3bjx34k",
      "title": "مسار فهم الاقتصاد",
      "slug": "fhm-aliqtisad",
      "description": "تعلّم أساسيات الاقتصاد وكيف تؤثر الأحداث العالمية على حياتك ومالك",
      "icon": "TrendingUp",
      "episodeCount": 5
    }
  },
  {
    "id": "cmrxmrmft0012pl7yypprm1m3",
    "title": "بناء علامة تجارية لا تُنسى",
    "slug": "building-brand",
    "author": "دوغلاس فان برنت",
    "authorOriginal": "Douglas Van Praet",
    "duration": 21,
    "description": "العلامات التجارية الناجحة لا تُبنى بالإعلانات فقط، بل بفهم عميق للعقل الباطن. هذا الكتاب يشرح كيف تستخدم علم الأعصاب لبناء علامة تجارية يتفاعل معها الناس لا إراديًا.",
    "fullContent": null,
    "mainIdea": "قرارات الشراء تُتخذ لا إراديًا في ثوانٍ معدودة بناءً على مشاعر لا منطق. العلامة التجارية القوية تستهدف هذا المستوى.",
    "targetAudience": "المسوّقون وأصحاب العلامات التجارية الذين يريدون بناء رابط عاطفي عميق مع عملائهم.",
    "whatYouLearn": "كيف يقرر العقل الباطن، وما علاقة الدوبامين بالولاء للعلامة التجارية، وكيف تصمم تجربة تُشعر العميل بالأمان.",
    "applyAfter": "حدّد ثلاث مشاعر تريد أن يرتبط بها العملاء بعلامتك التجارية وابدأ في تعزيزها.",
    "listenNext": "العرض القيّم: كيف تجعل العملاء يطلبون منتجك",
    "level": "متوسط",
    "categoryId": "cmrxmrmer0001pl7yo80ysdzq",
    "pathId": "cmrxmrmfb000spl7yl1qyxood",
    "pathOrder": 2,
    "listenCount": 2650,
    "completeCount": 1800,
    "saveCount": 760,
    "coverColor": "#4A235A",
    "isFeatured": false,
    "isNew": false,
    "coverImage": "/covers/building-brand.svg",
    "category": {
      "id": "cmrxmrmer0001pl7yo80ysdzq",
      "name": "تسويق ومبيعات",
      "slug": "tasweeg-mabeaat",
      "description": "تعلّم استراتيجيات التسويق الفعّالة وزيادة المبيعات",
      "icon": "Megaphone",
      "order": 2
    },
    "tags": [
      {
        "id": "cmrxmrmew0008pl7yed3p4wqw",
        "name": "علامة تجارية",
        "slug": "علامة تجارية"
      },
      {
        "id": "cmrxmrmez000dpl7yto3vhx3g",
        "name": "تسويق رقمي",
        "slug": "تسويق رقمي"
      },
      {
        "id": "cmrxmrmf4000opl7ys6ow933n",
        "name": "ذكاء عاطفي",
        "slug": "ذكاء عاطفي"
      }
    ],
    "path": {
      "id": "cmrxmrmfb000spl7yl1qyxood",
      "title": "مسار التسويق الاحترافي",
      "slug": "masaar-altasweeg",
      "description": "من فهم العميل إلى بناء علامة تجارية قوية وتحويل العملاء المحتملين",
      "icon": "Megaphone",
      "episodeCount": 6
    }
  },
  {
    "id": "cmrxmrmfr0011pl7yol6i5fyo",
    "title": "من الصفر إلى الواحد: كيف تبني المستقبل",
    "slug": "zero-to-one",
    "author": "بيتر ثيل",
    "authorOriginal": "Peter Thiel",
    "duration": 30,
    "description": "بيتر ثيل، المؤسس المشارك لـ PayPal، يطرح فكرة جذرية: الابتكار الحقيقي يذهب من الصفر إلى الواحد، وليس من واحد إلى اثنين. هذا الملخص يشرح كيف تفكر بشكل مختلف.",
    "fullContent": null,
    "mainIdea": "كل لحظة عظيمة في الأعمال تحدث عندما شخص واحد يفكر بشيء لم يكن موجودًا من قبل ويتخذ خطوة لتحقيقه.",
    "targetAudience": "روّاد الأعمال الطموحون الذين لا يريدون تقليد الآخرين بل بناء شيء جديد بالكامل.",
    "whatYouLearn": "الفرق بين المنافسة والاحتكار، وكيف تبني \"سرًا\" يعطيك ميزة غير قابلة للتقليد، وأهمية البداية الصغيرة.",
    "applyAfter": "اسأل نفسك: ما السر الذي تعرفه أنت عن سوقك ولا يعرفه معظم المنافسين؟",
    "listenNext": "كيف تختبر فكرتك قبل أن تنفق قرشًا",
    "level": "متقدم",
    "categoryId": "cmrxmrmeq0000pl7yoose2vdc",
    "pathId": "cmrxmrmfa000rpl7yrfoceueo",
    "pathOrder": 3,
    "listenCount": 4600,
    "completeCount": 3200,
    "saveCount": 1300,
    "coverColor": "#212F3D",
    "isFeatured": false,
    "isNew": false,
    "coverImage": "/covers/zero-to-one.svg",
    "category": {
      "id": "cmrxmrmeq0000pl7yoose2vdc",
      "name": "ريادة أعمال",
      "slug": "riada-aamal",
      "description": "اكتشف كيف تبني مشروعك من الصفر وتديره بنجاح",
      "icon": "Rocket",
      "order": 1
    },
    "tags": [
      {
        "id": "cmrxmrmey000bpl7ymjr1vfu4",
        "name": "ريادة",
        "slug": "ريادة"
      },
      {
        "id": "cmrxmrmey000apl7yburstnlw",
        "name": "ابتكار",
        "slug": "ابتكار"
      },
      {
        "id": "cmrxmrmf3000lpl7yhk425oje",
        "name": "اتخاذ قرار",
        "slug": "اتخاذ قرار"
      }
    ],
    "path": {
      "id": "cmrxmrmfa000rpl7yrfoceueo",
      "title": "مسار إطلاق مشروعك",
      "slug": "itlaq-mashrooak",
      "description": "من الفكرة إلى أول عميل: رحلة عملية لبناء مشروعك خطوة بخطوة",
      "icon": "Rocket",
      "episodeCount": 7
    }
  },
  {
    "id": "cmrxmrmfp0010pl7yi1f71y1w",
    "title": "التفاوض الذي لا يُنسى: حصّل أكثر مما تتوقع",
    "slug": "never-split-difference",
    "author": "كريس فوس",
    "authorOriginal": "Chris Voss",
    "duration": 27,
    "description": "كريس فوس، المفاوض الرئيسي السابق في FBI، يكشف أسرار التفاوض في أصعب المواقف. ليست عن المنطق والبيانات، بل عن فهم المشاعر البشرية العميقة.",
    "fullContent": null,
    "mainIdea": "التفاوض الناجح يعتمد على الاستماع العميق وفهم مشاعر الطرف الآخر، وليس على إقناعه بالمنطق.",
    "targetAudience": "كل من يتفاوض في عمله: مبيعات، عقود، رواتب، شراكات، أو حتى في حياته الشخصية.",
    "whatYouLearn": "تقنية النبرة الصوتية الإيجابية، والمرايا الصوتية، وكيف تطلب \"لا\" بدلاً من \"نعم\".",
    "applyAfter": "في مفاوضاتك القادمة، جرب أن تصمت 3 ثوانٍ بعد عرض الطرف الآخر وراقب ما يحدث.",
    "listenNext": "فن الإقناع والنفوذ",
    "level": "متوسط",
    "categoryId": "cmrxmrmet0005pl7yydqtzzaj",
    "pathId": null,
    "pathOrder": null,
    "listenCount": 4800,
    "completeCount": 3500,
    "saveCount": 1420,
    "coverColor": "#1A1A2E",
    "isFeatured": false,
    "isNew": false,
    "coverImage": "/covers/never-split-difference.svg",
    "category": {
      "id": "cmrxmrmet0005pl7yydqtzzaj",
      "name": "علم نفس وسلوك",
      "slug": "elm-nafs-slooke",
      "description": "افهم سلوك البشر واستخدمه في حياتك وعملك",
      "icon": "Brain",
      "order": 6
    },
    "tags": [
      {
        "id": "cmrxmrmew0007pl7yukkzkk1h",
        "name": "تفاوض",
        "slug": "تفاوض"
      },
      {
        "id": "cmrxmrmf4000opl7ys6ow933n",
        "name": "ذكاء عاطفي",
        "slug": "ذكاء عاطفي"
      },
      {
        "id": "cmrxmrmf1000hpl7ytbmzgeck",
        "name": "تواصل فعّال",
        "slug": "تواصل فعّال"
      }
    ],
    "path": null
  },
  {
    "id": "cmrxmrmfo000zpl7yuv3czsdq",
    "title": "فهم التسعير: لماذا لا يشتتري الناس الأرخص؟",
    "slug": "pricing-psychology",
    "author": "ويليام بوند",
    "authorOriginal": "William Poundstone",
    "duration": 23,
    "description": "السعر ليس مجرد رقم، بل هو رسالة نفسية. هذا الكتاب يكشف كيف يستخدم المسوّقون علم النفس لتبرير أسعار أعلى وكيف يمكنك استخدام نفس الأدوات.",
    "fullContent": null,
    "mainIdea": "المستهلك لا يحكم على السعر بقيمته الموضوعية، بل بالمقارنة مع مراجع نفسية يبنيها السياق المحيط.",
    "targetAudience": "أصحاب المتاجر والمنتجات الرقمية الذين يحتارون في تحديد سعر منتجاتهم.",
    "whatYouLearn": "تأثير الارتساء، وتأثير الإطار، وكيف تقدّم ثلاثة خيارات أسعار لزيادة المبيعات.",
    "applyAfter": "أعد تصميم صفحة أسعارك بثلاث باقات بدلاً من خيار واحد وراقب الفرق.",
    "listenNext": "استراتيجيات البيع المتقدمة",
    "level": "متوسط",
    "categoryId": "cmrxmrmer0001pl7yo80ysdzq",
    "pathId": "cmrxmrmfb000spl7yl1qyxood",
    "pathOrder": 4,
    "listenCount": 3150,
    "completeCount": 2200,
    "saveCount": 940,
    "coverColor": "#B7410E",
    "isFeatured": false,
    "isNew": true,
    "coverImage": "/covers/pricing-psychology.svg",
    "category": {
      "id": "cmrxmrmer0001pl7yo80ysdzq",
      "name": "تسويق ومبيعات",
      "slug": "tasweeg-mabeaat",
      "description": "تعلّم استراتيجيات التسويق الفعّالة وزيادة المبيعات",
      "icon": "Megaphone",
      "order": 2
    },
    "tags": [
      {
        "id": "cmrxmrmf4000npl7ygvien0f1",
        "name": "تسعير",
        "slug": "تسعير"
      },
      {
        "id": "cmrxmrmf4000ppl7ynwz9cv5o",
        "name": "مبيعات",
        "slug": "مبيعات"
      },
      {
        "id": "cmrxmrmez000dpl7yto3vhx3g",
        "name": "تسويق رقمي",
        "slug": "تسويق رقمي"
      }
    ],
    "path": {
      "id": "cmrxmrmfb000spl7yl1qyxood",
      "title": "مسار التسويق الاحترافي",
      "slug": "masaar-altasweeg",
      "description": "من فهم العميل إلى بناء علامة تجارية قوية وتحويل العملاء المحتملين",
      "icon": "Megaphone",
      "episodeCount": 6
    }
  },
  {
    "id": "cmrxmrmfm000ypl7y5nc9935q",
    "title": "العادات الذرية: كيف تتغيّر بمجهود ضئيل",
    "slug": "atomic-habits",
    "author": "جيمس كلير",
    "authorOriginal": "James Clear",
    "duration": 24,
    "description": "التغيير الحقيقي لا يأتي من قرارات كبيرة momentous، بل من تحسينات صغيرة يومية تتراكم بمرور الوقت. هذا الملخص يقدّم نظامًا عمليًا لبناء عادات جيدة والتخلص من السيئة.",
    "fullContent": null,
    "mainIdea": "النجاح ليس نتاج تحوّل واحد دراماتيكي، بل نتاج تحسينات يومية صغيرة تتراكم مثل الفائدة المركبة.",
    "targetAudience": "كل من يشعر بالعجز أمام أهدافه الكبيرة ويريد طريقة عملية للتغيير التدريجي.",
    "whatYouLearn": "أربع قواعد لبناء عادة: اجعلها واضحة، جذابة، سهلة، ومُرضية. وكيف تكسر العادات السيئة.",
    "applyAfter": "اختر عادة واحدة وطبّق قاعدة الـ 2 دقيقة: قلّصها لأبسط نسخة ممكنة وابدأ اليوم.",
    "listenNext": "إدارة الوقت وفق أولويات حقيقية",
    "level": "مبتدئ",
    "categoryId": "cmrxmrmet0004pl7ybi7csii3",
    "pathId": null,
    "pathOrder": null,
    "listenCount": 5200,
    "completeCount": 3800,
    "saveCount": 1650,
    "coverColor": "#6C3483",
    "isFeatured": true,
    "isNew": false,
    "coverImage": "/covers/atomic-habits.svg",
    "category": {
      "id": "cmrxmrmet0004pl7ybi7csii3",
      "name": "تنمية وإنتاجية",
      "slug": "tanmia-intajiya",
      "description": "حسّن أداءك الشخصي وحقق أهدافك بأقل جهد",
      "icon": "Target",
      "order": 5
    },
    "tags": [
      {
        "id": "cmrxmrmf3000mpl7ycf6u6h9e",
        "name": "بناء عادات",
        "slug": "بناء عادات"
      },
      {
        "id": "cmrxmrmf0000fpl7ysua65kzq",
        "name": "إدارة وقت",
        "slug": "إدارة وقت"
      },
      {
        "id": "cmrxmrmf5000qpl7y1vx88q7m",
        "name": "تطوير ذات",
        "slug": "تطوير ذات"
      }
    ],
    "path": null
  },
  {
    "id": "cmrxmrmfk000xpl7y8vsatpwc",
    "title": "القيادة في 5 مستويات: من المدير إلى القائد الملهم",
    "slug": "5-levels-leadership",
    "author": "جون ماكسويل",
    "authorOriginal": "John C. Maxwell",
    "duration": 26,
    "description": "القيادة ليست موهبة فطرية فقط، بل هي مهارة يمكن تطويرها عبر خمس مراحل متدرجة. هذا الملخص يشرح كل مستوى وما يحتاجه للانتقال إلى المستوى التالي.",
    "fullContent": null,
    "mainIdea": "القائد الحقيقي لا يكتفي بإصدار الأوامر، بل يبني قادة آخرين ويتخلى عن السيطرة لصالح التأثير.",
    "targetAudience": "المديرون ورؤساء الأقسام الذين يريدون الانتقال من الإدارة التشغيلية إلى القيادة الاستراتيجية.",
    "whatYouLearn": "الفرق بين القوة والسلطة، وكيف تبني ثقة فريقك، ومتى تتخلى عن السيطرة اليومية.",
    "applyAfter": "قيّم نفسك: في أي مستوى من المستويات الخمسة أنت الآن؟ وما الذي تحتاجه للانتقال؟",
    "listenNext": "بناء فرق عالية الأداء",
    "level": "مبتدئ",
    "categoryId": "cmrxmrmes0003pl7yss97afot",
    "pathId": null,
    "pathOrder": null,
    "listenCount": 4100,
    "completeCount": 2900,
    "saveCount": 1100,
    "coverColor": "#0C3547",
    "isFeatured": false,
    "isNew": false,
    "coverImage": "/covers/5-levels-leadership.svg",
    "category": {
      "id": "cmrxmrmes0003pl7yss97afot",
      "name": "إدارة وقيادة",
      "slug": "edara-qiada",
      "description": "طوّر مهاراتك القيادية وأدِر فرقك بكفاءة",
      "icon": "Users",
      "order": 4
    },
    "tags": [
      {
        "id": "cmrxmrmf1000gpl7yv7uekjkh",
        "name": "قيادة فرق",
        "slug": "قيادة فرق"
      },
      {
        "id": "cmrxmrmf1000hpl7ytbmzgeck",
        "name": "تواصل فعّال",
        "slug": "تواصل فعّال"
      },
      {
        "id": "cmrxmrmf0000epl7yojywch10",
        "name": "إدارة مشاريع",
        "slug": "إدارة مشاريع"
      }
    ],
    "path": null
  },
  {
    "id": "cmrxmrmfi000wpl7yggrydc0h",
    "title": "اقتصاد الغفلة: لماذا نُسيء فهم الاقتصاد؟",
    "slug": "economics-of-inattention",
    "author": "سونال أرورا",
    "authorOriginal": "Sendhil Mullainathan",
    "duration": 22,
    "description": "نحن نفشل في فهم القرارات الاقتصادية لأننا نتجاهل العوامل النفسية. هذا الكتاب يكشف كيف تؤثر الانتباه الجزئي والتحيزات المعرفية على قراراتنا المالية.",
    "fullContent": null,
    "mainIdea": "الفشل الاقتصادي غالبًا ليس بسبب نقص المعلومات، بل بسبب عدم الانتباه للمعلومات الصحيحة في الوقت المناسب.",
    "targetAudience": "كل من يريد فهم لماذا يتخذ الناس قرارات مالية غير عقلانية رغم معرفتهم بالأفضل.",
    "whatYouLearn": "كيف تؤثر التحيزات المعرفية على القرارات الاقتصادية، وكيف تصمم سياسات أو منتجات تأخذ في الاعتبار سلوك الإنسان الحقيقي.",
    "applyAfter": "راجع آخر ثلاث قرارات مالية كبيرة اتخذتها وحدّد أي تحيز معرفي أثّر فيها.",
    "listenNext": "الاقتصاد السلوكي في 30 دقيقة",
    "level": "متوسط",
    "categoryId": "cmrxmrmes0002pl7yp8xpiszf",
    "pathId": "cmrxmrmfd000tpl7yg3bjx34k",
    "pathOrder": 1,
    "listenCount": 2100,
    "completeCount": 1340,
    "saveCount": 580,
    "coverColor": "#2D3436",
    "isFeatured": false,
    "isNew": true,
    "coverImage": "/covers/economics-of-inattention.svg",
    "category": {
      "id": "cmrxmrmes0002pl7yp8xpiszf",
      "name": "اقتصاد ومال",
      "slug": "eqtesad-mal",
      "description": "افهم كيف يعمل الاقتصاد وأدِر أموالك بذكاء",
      "icon": "TrendingUp",
      "order": 3
    },
    "tags": [
      {
        "id": "cmrxmrmez000cpl7ytsmnkxu9",
        "name": "اقتصاد سلوكي",
        "slug": "اقتصاد سلوكي"
      },
      {
        "id": "cmrxmrmf4000opl7ys6ow933n",
        "name": "ذكاء عاطفي",
        "slug": "ذكاء عاطفي"
      },
      {
        "id": "cmrxmrmf3000lpl7yhk425oje",
        "name": "اتخاذ قرار",
        "slug": "اتخاذ قرار"
      }
    ],
    "path": {
      "id": "cmrxmrmfd000tpl7yg3bjx34k",
      "title": "مسار فهم الاقتصاد",
      "slug": "fhm-aliqtisad",
      "description": "تعلّم أساسيات الاقتصاد وكيف تؤثر الأحداث العالمية على حياتك ومالك",
      "icon": "TrendingUp",
      "episodeCount": 5
    }
  },
  {
    "id": "cmrxmrmfh000vpl7y8tlrai2s",
    "title": "العرض القيّم: كيف تجعل العملاء يطلبون منتجك",
    "slug": "value-proposition",
    "author": "ستيف بلانك",
    "authorOriginal": "Steve Blank",
    "duration": 28,
    "description": "العرض القيّم هو السبب الذي يجعل العميل يختارك على المنافسين. هذا الملخص يشرح كيف تبني عرضًا قيّمًا واضحًا ومقنعًا يستهدف حاجة حقيقية لدى عميلك.",
    "fullContent": null,
    "mainIdea": "العرض القيّم الناجح يجيب عن ثلاثة أسئلة: ما مشكلة العميل؟ كيف تحلّها أنت؟ ولماذا أنت أفضل من البديل؟",
    "targetAudience": "أصحاب المشاريع ومديرو التسويق الذين يريدون تمييز منتجهم في سوق مزدحم.",
    "whatYouLearn": "كيف تحدد مشكلة العميل بدقة، وكيف تصمم رسالة واضحة، وكيف تختبر قوة عرضك القيّم.",
    "applyAfter": "أعد كتابة وصف منتجك في جملة واحدة تجيب فيها عن الأسئلة الثلاثة.",
    "listenNext": "بناء علامة تجارية لا تُنسى",
    "level": "متوسط",
    "categoryId": "cmrxmrmer0001pl7yo80ysdzq",
    "pathId": "cmrxmrmfa000rpl7yrfoceueo",
    "pathOrder": 2,
    "listenCount": 2890,
    "completeCount": 1750,
    "saveCount": 720,
    "coverColor": "#7F4F24",
    "isFeatured": false,
    "isNew": false,
    "coverImage": "/covers/value-proposition.svg",
    "category": {
      "id": "cmrxmrmer0001pl7yo80ysdzq",
      "name": "تسويق ومبيعات",
      "slug": "tasweeg-mabeaat",
      "description": "تعلّم استراتيجيات التسويق الفعّالة وزيادة المبيعات",
      "icon": "Megaphone",
      "order": 2
    },
    "tags": [
      {
        "id": "cmrxmrmez000dpl7yto3vhx3g",
        "name": "تسويق رقمي",
        "slug": "تسويق رقمي"
      },
      {
        "id": "cmrxmrmew0008pl7yed3p4wqw",
        "name": "علامة تجارية",
        "slug": "علامة تجارية"
      },
      {
        "id": "cmrxmrmf4000ppl7ynwz9cv5o",
        "name": "مبيعات",
        "slug": "مبيعات"
      }
    ],
    "path": {
      "id": "cmrxmrmfa000rpl7yrfoceueo",
      "title": "مسار إطلاق مشروعك",
      "slug": "itlaq-mashrooak",
      "description": "من الفكرة إلى أول عميل: رحلة عملية لبناء مشروعك خطوة بخطوة",
      "icon": "Rocket",
      "episodeCount": 7
    }
  },
  {
    "id": "cmrxmrmfe000upl7yr7epufld",
    "title": "كيف تختبر فكرتك قبل أن تنفق قرشًا",
    "slug": "test-your-idea",
    "author": "إريك ريس",
    "authorOriginal": "Eric Ries",
    "duration": 25,
    "description": "قبل أن تستثمر وقتك ومالك في فكرة مشروع جديد، يجب أن تختبرها بسرعة وبأقل تكلفة. هذا الملخص يعرض منهجية الاختبار السريع المستوحاة من الشركات الناشئة الناجحة.",
    "fullContent": null,
    "mainIdea": "لا تبني منتجًا كاملًا وتنتظر رد فعل السوق. بل ابنِ نسخة مصغّرة تختبر بها افتراضاتك الأساسية في أيام وليس أشهر.",
    "targetAudience": "لكل من لديه فكرة مشروع ويتساءل: هل هذه الفكرة تستحق الاستثمار فيها؟",
    "whatYouLearn": "كيف تحدد افتراضاتك الأكثر خطورة، وكيف تبني MVP بسيط لاختبارها، وكيف تقرأ إشارات السوق بدقة.",
    "applyAfter": "اكتب ثلاثة افتراضات أساسية عن مشروعك وصمّم اختبارًا بسيطًا لكل واحد منها خلال هذا الأسبوع.",
    "listenNext": "بناء نموذج العمل التجاري",
    "level": "مبتدئ",
    "categoryId": "cmrxmrmeq0000pl7yoose2vdc",
    "pathId": "cmrxmrmfa000rpl7yrfoceueo",
    "pathOrder": 1,
    "listenCount": 3420,
    "completeCount": 2180,
    "saveCount": 890,
    "coverColor": "#1B4332",
    "isFeatured": true,
    "isNew": true,
    "coverImage": "/covers/test-your-idea.svg",
    "category": {
      "id": "cmrxmrmeq0000pl7yoose2vdc",
      "name": "ريادة أعمال",
      "slug": "riada-aamal",
      "description": "اكتشف كيف تبني مشروعك من الصفر وتديره بنجاح",
      "icon": "Rocket",
      "order": 1
    },
    "tags": [
      {
        "id": "cmrxmrmey000bpl7ymjr1vfu4",
        "name": "ريادة",
        "slug": "ريادة"
      },
      {
        "id": "cmrxmrmey000apl7yburstnlw",
        "name": "ابتكار",
        "slug": "ابتكار"
      },
      {
        "id": "cmrxmrmf3000lpl7yhk425oje",
        "name": "اتخاذ قرار",
        "slug": "اتخاذ قرار"
      }
    ],
    "path": {
      "id": "cmrxmrmfa000rpl7yrfoceueo",
      "title": "مسار إطلاق مشروعك",
      "slug": "itlaq-mashrooak",
      "description": "من الفكرة إلى أول عميل: رحلة عملية لبناء مشروعك خطوة بخطوة",
      "icon": "Rocket",
      "episodeCount": 7
    }
  }
]

const pathMeta = [
  {
    "id": "cmrxmrmfa000rpl7yrfoceueo",
    "title": "مسار إطلاق مشروعك",
    "slug": "itlaq-mashrooak",
    "description": "من الفكرة إلى أول عميل: رحلة عملية لبناء مشروعك خطوة بخطوة",
    "icon": "Rocket",
    "episodeCount": 4
  },
  {
    "id": "cmrxmrmfb000spl7yl1qyxood",
    "title": "مسار التسويق الاحترافي",
    "slug": "masaar-altasweeg",
    "description": "من فهم العميل إلى بناء علامة تجارية قوية وتحويل العملاء المحتملين",
    "icon": "Megaphone",
    "episodeCount": 4
  },
  {
    "id": "cmrxmrmfd000tpl7yg3bjx34k",
    "title": "مسار فهم الاقتصاد",
    "slug": "fhm-aliqtisad",
    "description": "تعلّم أساسيات الاقتصاد وكيف تؤثر الأحداث العالمية على حياتك ومالك",
    "icon": "TrendingUp",
    "episodeCount": 3
  }
] as const

export const learningPaths: LearningPath[] = pathMeta.map((path) => ({
  ...path,
  episodes: episodes
    .filter((episode) => episode.pathId === path.id)
    .sort((a, b) => (a.pathOrder ?? 999) - (b.pathOrder ?? 999)),
}))

export function searchEpisodes(query: string): EpisodeBasic[] {
  const normalized = query.trim().toLocaleLowerCase("ar")
  if (normalized.length < 2) return []
  return episodes
    .filter((episode) => {
      const haystack = [
        episode.title,
        episode.author,
        episode.authorOriginal ?? "",
        episode.description,
        episode.mainIdea ?? "",
        episode.targetAudience ?? "",
        episode.whatYouLearn ?? "",
        episode.category.name,
        ...episode.tags.map((tag) => tag.name),
      ].join(" ").toLocaleLowerCase("ar")
      return haystack.includes(normalized)
    })
    .sort((a, b) => b.listenCount - a.listenCount)
}
