export type Lang = "ru" | "en";
export type LText = { ru: string; en: string };

export const tx = (o: LText | string | undefined | null, lang: Lang): string =>
  o == null ? "" : typeof o === "string" ? o : (o[lang] ?? o.ru ?? "");

export type ServiceItem = {
  code: string;
  icon: string;
  title: LText;
  body: LText;
  foot: LText;
};

export type AdvantageItem = {
  k: string;
  icon: string;
  t: LText;
  d: LText;
};

export type FaqItem = {
  q: LText;
  a: LText;
};

export const CONTENT = {
  brand: {
    name: "LUMEN ARCHITECTURE",
    short: "LUMEN",
    tag: {
      ru: "Инженерная студия архитектурного света",
      en: "Architectural lighting engineering studio",
    } as LText,
  },
  nav: {
    home: { ru: "Главная", en: "Home" } as LText,
    services: { ru: "Услуги", en: "Services" } as LText,
    pricing: { ru: "Стоимость", en: "Pricing" } as LText,
    cases: { ru: "Кейсы", en: "Cases" } as LText,
    cta: { ru: "Получить расчёт", en: "Request quote" } as LText,
  },
  home: {
    hero: {
      sub: {
        ru: "Проектируем и собираем системы управления светом для отелей, бизнес-центров и landmark-фасадов. От одной плоскости до объединённой драматургии всего здания.",
        en: "We design and build lighting control for hotels, business centres and landmark facades. From a single plane to the unified dramaturgy of an entire building.",
      } as LText,
    },
    intro: {
      kicker: { ru: "[ 01 / СТУДИЯ ]", en: "[ 01 / STUDIO ]" } as LText,
      h: {
        ru: "Инженерия, написанная вручную для каждого фасада.",
        en: "Engineering written by hand for every facade.",
      } as LText,
      p1: {
        ru: "Lumen Architecture — студия архитектурного освещения и систем управления. Мы работаем там, где свет — часть имени здания, а не декорация. С 2014 года реализовали 112 объектов: от приватных резиденций до landmark-фасадов в трёх странах.",
        en: "Lumen Architecture is a studio of architectural lighting and control systems. We work where light is part of a building’s identity, not a decoration. Since 2014 we have delivered 112 projects across three countries.",
      } as LText,
      p2: {
        ru: "Каждый сценарий мы пишем вручную. Не используем шаблоны, не упрощаем геометрию, не подменяем индивидуальную драматургию готовыми эффектами.",
        en: "Each scene is written by hand. We do not use templates, do not simplify geometry, do not replace individual dramaturgy with off-the-shelf effects.",
      } as LText,
    },
    services: {
      h: {
        ru: "Полный цикл — от инженерии до сервисного сопровождения.",
        en: "Full cycle — from engineering to service support.",
      } as LText,
      items: [
        {
          code: "S.01",
          icon: "dmx",
          title: { ru: "DMX / SPI системы управления", en: "DMX / SPI control systems" },
          body: {
            ru: "Проектирование топологии, шкафы управления, синхронизация плоскостей, единая логика сценариев.",
            en: "Topology design, control cabinets, plane synchronisation, unified scene logic.",
          },
          foot: { ru: "Под ключ", en: "Turn-key" },
        },
        {
          code: "S.02",
          icon: "pixel",
          title: { ru: "Пиксельный фасад / медиафасад", en: "Pixel facade / media facade" },
          body: {
            ru: "Расчёт сетки, монтаж, контент-сценарии, калибровка по всей плоскости здания.",
            en: "Grid calculation, installation, content scenes, full-plane calibration.",
          },
          foot: { ru: "От 1×1 до 64×64 м", en: "From 1×1 to 64×64 m" },
        },
        {
          code: "S.03",
          icon: "scene",
          title: { ru: "Фасадная анимация", en: "Facade animation" },
          body: {
            ru: "Авторские сцены — от спокойного дыхания до сложной нарративной анимации фасада.",
            en: "Authored scenes — from quiet breathing to complex narrative facade animation.",
          },
          foot: { ru: "Простая · Средняя · Сложная", en: "Basic · Medium · Complex" },
        },
        {
          code: "S.04",
          icon: "neon",
          title: { ru: "Гибкий неон", en: "Flexible neon" },
          body: {
            ru: "Контурный свет, силуэты, акцентная подсветка карнизов, интеграция в общую DMX-логику.",
            en: "Contour light, silhouettes, cornice accents, integrated into shared DMX logic.",
          },
          foot: { ru: "RGB / RGBW / monochrome", en: "RGB / RGBW / monochrome" },
        },
        {
          code: "S.05",
          icon: "service",
          title: { ru: "Сервис и техобслуживание", en: "Service & maintenance" },
          body: {
            ru: "Регламентные выезды, диагностика, замена модулей, удалённый мониторинг сценариев.",
            en: "Scheduled visits, diagnostics, module replacement, remote scene monitoring.",
          },
          foot: { ru: "SLA от 4 часов", en: "SLA from 4 hours" },
        },
        {
          code: "S.06",
          icon: "multi",
          title: { ru: "Объединение фасадов", en: "Facade orchestration" },
          body: {
            ru: "Синхронизация нескольких плоскостей в единый сценарий, переходы, тестирование драматургии.",
            en: "Synchronising several planes into one scenario, transitions, dramaturgy testing.",
          },
          foot: { ru: "Считается отдельно", en: "Priced separately" },
        },
      ] satisfies ServiceItem[],
    },
    advantages: {
      h: {
        ru: "Мы считаем стоимость через сценарий, а не через метраж.",
        en: "We price by the scenario, not by the metre.",
      } as LText,
      items: [
        {
          k: "01",
          icon: "responsibility",
          t: { ru: "Сценарий, не прайс", en: "Scenario, not a price list" },
          d: {
            ru: "Каждый объект — индивидуальная инженерная задача. Мы не берём готовые библиотеки эффектов.",
            en: "Each object is an individual engineering task. We do not reuse off-the-shelf effect libraries.",
          },
        },
        {
          k: "02",
          icon: "scene",
          t: { ru: "Архитектурная логика", en: "Architectural logic" },
          d: {
            ru: "Ритм сценариев работает с геометрией здания: фасадная пластика, ламели, карнизы, стеклопакеты.",
            en: "Scene rhythm follows the building geometry: facade relief, lamellae, cornices, glazing.",
          },
        },
        {
          k: "03",
          icon: "multi",
          t: { ru: "Драматургия здания", en: "Building dramaturgy" },
          d: {
            ru: "Несколько фасадов читаются как одно целое. Переходы и фазы согласованы.",
            en: "Multiple facades read as one whole. Transitions and phases stay in sync.",
          },
        },
        {
          k: "04",
          icon: "team",
          t: { ru: "Долгое сопровождение", en: "Long-term care" },
          d: {
            ru: "Сервис, обновление сценариев, удалённый мониторинг и подмена модулей по SLA.",
            en: "Service, scenario updates, remote monitoring and SLA-based module replacement.",
          },
        },
      ] satisfies AdvantageItem[],
    },
    faqHeading: { ru: "Частые вопросы.", en: "Frequently asked." } as LText,
    contactHeading: {
      ru: "Опишите фасад — соберём расчёт за 1–2 рабочих дня.",
      en: "Describe the facade — we return an estimate in 1–2 business days.",
    } as LText,
  },
  faq: [
    {
      q: {
        ru: "Сколько стоит DMX система управления?",
        en: "How much does a DMX control system cost?",
      },
      a: {
        ru: "Стоимость DMX-системы складывается из топологии шкафов, контроллеров, количества вселенных, синхронизации плоскостей и сложности сценариев. Для премиальных объектов она формируется индивидуально и обычно начинается от 4 000 USD за объединение нескольких фасадов в единый сценарий. Сценарии под ключ считаются отдельно — простая сцена от 600 USD, сложная — до 3 000 USD за сцену.",
        en: "A DMX system price depends on cabinet topology, controllers, number of universes, plane synchronisation and scene complexity. For premium projects pricing is individual and starts from 4 000 USD for unified facade orchestration. Turn-key scenes are quoted separately — basic from 600 USD, complex up to 3 000 USD per scene.",
      },
    },
    {
      q: { ru: "Сколько стоит фасадная анимация?", en: "How much does a facade animation cost?" },
      a: {
        ru: "Фасадная анимация считается по сценам. Простая сцена — 600 USD, средняя — 1 000 USD, сложная — 3 000 USD. На пиксельных и ламельных фасадах сцены дешевле: 200 / 600 / 1 600 USD. Объединение нескольких фасадов в единый сценарий — отдельная позиция, от 4 000 USD.",
        en: "Facade animation is quoted by scene. Basic — 600 USD, medium — 1 000 USD, complex — 3 000 USD. On pixel and lamellae facades scenes are lower: 200 / 600 / 1 600 USD. Multi-facade orchestration is a separate item, from 4 000 USD.",
      },
    },
    {
      q: {
        ru: "Сколько стоит 1 пиксель медиафасада?",
        en: "How much does one media-facade pixel cost?",
      },
      a: {
        ru: "Стоимость одного пикселя зависит от шага сетки, типа крепления, защиты от внешней среды и контроллера. Цена варьируется от нескольких долларов за пиксель в плотных уличных матрицах до десятков долларов в крупном уличном пикселе с независимой адресацией. Точную цифру мы даём после изучения геометрии фасада.",
        en: "The price of one pixel depends on pitch, mounting type, environmental rating and the controller. It varies from a few USD per pixel in dense outdoor matrices to tens of USD in large independently addressed nodes. We give the exact figure after reviewing facade geometry.",
      },
    },
    {
      q: {
        ru: "Сколько стоит 1 точка пиксельного фасада?",
        en: "How much does one pixel-facade point cost?",
      },
      a: {
        ru: "Точка ламельного и пиксельного фасада обычно стоит дешевле классического медиапикселя за счёт большего шага и упрощённой адресации. Реальная цена считается под задачу, мы выдаём её в коммерческом предложении вместе со схемой раскладки.",
        en: "A lamellae or pixel-facade point is usually cheaper than a classic media pixel due to larger pitch and simpler addressing. The real price is calculated for the task and supplied with a layout in the proposal.",
      },
    },
    {
      q: {
        ru: "Сколько стоит 1 метр гибкого неона?",
        en: "How much does one metre of flexible neon cost?",
      },
      a: {
        ru: "Стоимость метра неона зависит от типа: моно RGB, RGBW, IP-класса, толщины и крепежа. Базовый монохромный неон стоит существенно дешевле, чем полноцветный с пиксельным управлением. Финальная цена — после раскладки контура.",
        en: "The metre price of neon depends on the type: mono, RGB, RGBW, IP rating, thickness and mounts. Basic monochrome neon is significantly cheaper than full-colour pixel-controlled neon. The final price follows the contour layout.",
      },
    },
    {
      q: {
        ru: "Чем отличается простая, средняя и сложная анимация?",
        en: "What is the difference between basic, medium and complex animation?",
      },
      a: {
        ru: "Простая сцена — базовая волна, спокойный архитектурный акцент, минимальная ручная доработка. Средняя — зонирование, диммирование частей, несколько фаз, работа с геометрией. Сложная — индивидуальная логика, ручная работа по большому количеству элементов, длительная настройка, до двух недель на сцену.",
        en: "Basic — a base wave, quiet architectural accent, minimal manual work. Medium — zoning, partial dimming, several phases, geometry-aware. Complex — individual logic, large-volume hand-tuned work, lengthy setup, up to two weeks per scene.",
      },
    },
    {
      q: {
        ru: "Почему сложная анимация стоит дороже?",
        en: "Why does complex animation cost more?",
      },
      a: {
        ru: "Сложная сцена пишется вручную для конкретного фасада: ритм геометрии, индивидуальные группы, многослойные переходы, ночные тесты и точная калибровка. На один такой сценарий уходит до двух недель работы инженера и художника по свету.",
        en: "A complex scene is hand-authored for a specific facade: geometry rhythm, custom groups, multi-layered transitions, night tests and precise calibration. One such scene takes up to two weeks of an engineer and a lighting designer.",
      },
    },
    {
      q: { ru: "Что входит в стоимость?", en: "What is included in the price?" },
      a: {
        ru: "В стоимость сцены входит написание сценария, настройка на оборудовании заказчика или нашей лабе, синхронизация фаз, ночное тестирование на объекте, документация по сцене и передача исходников. Оборудование и монтаж считаются отдельно.",
        en: "The scene price includes scenario authoring, setup on the client’s or our lab equipment, phase synchronisation, on-site night testing, documentation and source handover. Hardware and installation are quoted separately.",
      },
    },
    {
      q: {
        ru: "Почему объединение фасадов считается отдельно?",
        en: "Why is multi-facade orchestration priced separately?",
      },
      a: {
        ru: "Когда здание имеет 2+ фасада, появляется единая драматургия: переходы между плоскостями, согласование общей логики, тестирование сценариев на разных углах и удалённый монтажный надзор. Это отдельная инженерная работа, не сводимая к сумме сцен.",
        en: "When a building has 2+ facades, a unified dramaturgy appears: transitions between planes, common logic alignment, scene testing across angles and remote installation supervision. This is separate engineering work, not a sum of scenes.",
      },
    },
    {
      q: {
        ru: "Сколько стоит обслуживание архитектурного освещения?",
        en: "How much does architectural lighting maintenance cost?",
      },
      a: {
        ru: "Стоимость сервиса формируется как годовой контракт: количество регламентных выездов, время реакции по SLA, удалённый мониторинг и склад запасных модулей. Для отелей и landmark-фасадов мы предлагаем расширенный SLA с реакцией от 4 часов.",
        en: "Maintenance is a yearly contract: number of scheduled visits, SLA response time, remote monitoring and a spare-module pool. For hotels and landmarks we offer an extended SLA with response from 4 hours.",
      },
    },
  ] satisfies FaqItem[],
} as const;

// ── PRICING data ────────────────────────────────────────────
export const PRICING = {
  hero: {
    kicker: { ru: "[ СТРАНИЦА · СТОИМОСТЬ ]", en: "[ PAGE · PRICING ]" } as LText,
    h1: {
      ru: "Стоимость DMX-систем, фасадной анимации и медиафасадов.",
      en: "DMX, facade animation and media-facade pricing.",
    } as LText,
    sub: {
      ru: "Понятный экспертный ответ на вопросы, которые задают в Google и ChatGPT после получения коммерческого предложения. Без скрытого прайса. Без шаблонов.",
      en: "A clear expert answer to questions asked in Google and ChatGPT after receiving a proposal. No hidden price list. No templates.",
    } as LText,
  },
  tariffs: [
    {
      n: { ru: "S.01 · Простая", en: "S.01 · Basic" } as LText,
      dyn: 600,
      pix: 200 as number | null,
      t: { ru: "3–5 дней", en: "3–5 days" } as LText,
      ch: {
        ru: "Базовая динамика, спокойный архитектурный акцент",
        en: "Base dynamics, quiet architectural accent",
      } as LText,
      from: false,
    },
    {
      n: { ru: "S.02 · Средняя", en: "S.02 · Medium" } as LText,
      dyn: 1000,
      pix: 600 as number | null,
      t: { ru: "5–8 дней", en: "5–8 days" } as LText,
      ch: {
        ru: "Зонирование, несколько фаз, работа с геометрией",
        en: "Zoning, phases, geometry-aware",
      } as LText,
      from: false,
    },
    {
      n: { ru: "S.03 · Сложная", en: "S.03 · Complex" } as LText,
      dyn: 3000,
      pix: 1600 as number | null,
      t: { ru: "до 2 недель", en: "up to 2 weeks" } as LText,
      ch: {
        ru: "Авторская работа, многослойные переходы, ночные тесты",
        en: "Authored work, multi-layered transitions, night tests",
      } as LText,
      from: false,
    },
    {
      n: { ru: "S.04 · Объединение фасадов", en: "S.04 · Orchestration" } as LText,
      dyn: 4000,
      pix: null as number | null,
      t: { ru: "по объекту", en: "per object" } as LText,
      ch: {
        ru: "Единая драматургия 2+ плоскостей, синхронизация фаз",
        en: "Unified dramaturgy of 2+ planes, phase sync",
      } as LText,
      from: true,
    },
  ],
  answers: [
    {
      q: {
        ru: "Сколько стоит DMX система управления",
        en: "How much does a DMX control system cost",
      } as LText,
      h: {
        ru: "DMX-управление — это инженерия, а не коробка.",
        en: "DMX control is engineering, not a box.",
      } as LText,
      p: [
        {
          ru: "DMX-система управления — это шкаф, контроллеры, разводка, вселенные, синхронизация плоскостей и логика сценариев. Готового прайса нет: каждое здание считается отдельно.",
          en: "A DMX control system is a cabinet, controllers, wiring, universes, plane synchronisation and scene logic. There is no fixed price list: each building is calculated separately.",
        },
        {
          ru: "Для премиальных объектов мы фиксируем стартовый порог: объединение нескольких фасадов в единый сценарий — от 4 000 USD. Сами сцены считаются отдельно по тарифной сетке ниже.",
          en: "For premium projects we fix the entry threshold: orchestrating multiple facades into one scenario starts from 4 000 USD. Scenes themselves are quoted by the tariff grid below.",
        },
      ] as LText[],
    },
    {
      q: { ru: "Стоимость фасадной анимации", en: "Facade animation pricing" } as LText,
      h: {
        ru: "Сцена — атомарная единица расчёта.",
        en: "A scene is the atomic billing unit.",
      } as LText,
      p: [
        {
          ru: "Мы считаем фасадную анимацию по сценам, а не по метражу. Это позволяет точно отделять простую динамику от сложной авторской работы и не платить за объём, которого нет.",
          en: "We bill facade animation by scene, not by the metre. It cleanly separates basic dynamics from complex authored work and avoids paying for volume that does not exist.",
        },
        {
          ru: "Для окон и фасадной светодинамики тарифы выше — там больше каналов и тоньше ручная работа. Для пиксельных ламелей сцены дешевле за счёт стандартизованной адресации.",
          en: "Window and facade dynamics scenes are higher — more channels and finer manual work. Pixel lamellae scenes are lower thanks to standardised addressing.",
        },
      ] as LText[],
    },
    {
      q: { ru: "Цена пиксельного фасада", en: "Pixel facade price" } as LText,
      h: {
        ru: "Сетка, шаг, среда, контроллер.",
        en: "Grid, pitch, environment, controller.",
      } as LText,
      p: [
        {
          ru: "Цена пиксельного фасада складывается из количества точек, шага сетки, IP-класса, типа крепления и контроллера. Точные цифры мы даём только после изучения геометрии и условий монтажа.",
          en: "Pixel facade pricing consists of pixel count, pitch, IP rating, mounting type and the controller. Exact figures follow once we examine geometry and installation conditions.",
        },
        {
          ru: "Сцены для пиксельного фасада считаются по тарифу ниже: простая — 200 USD, средняя — 600 USD, сложная — 1 600 USD. Это позволяет точно планировать бюджет на контент.",
          en: "Pixel-facade scenes follow the lower grid: basic — 200 USD, medium — 600 USD, complex — 1 600 USD. It makes content budgeting precise.",
        },
      ] as LText[],
    },
    {
      q: {
        ru: "Почему сложная анимация стоит дороже",
        en: "Why complex animation costs more",
      } as LText,
      h: {
        ru: "Сложная сцена — это две недели ручной работы.",
        en: "A complex scene is two weeks of hand work.",
      } as LText,
      p: [
        {
          ru: "Сложная сцена пишется индивидуально под фасад. Это ручная работа с большим количеством элементов, многослойные переходы, ночные тесты и точная калибровка ритма анимации к геометрии.",
          en: "A complex scene is authored for the specific facade. It is hand work across many elements, multi-layered transitions, night tests and precise calibration of rhythm to geometry.",
        },
      ] as LText[],
    },
    {
      q: {
        ru: "Почему объединение фасадов считается отдельно",
        en: "Why multi-facade orchestration is priced separately",
      } as LText,
      h: { ru: "Здание читается как одно целое.", en: "A building reads as one whole." } as LText,
      p: [
        {
          ru: "Когда у объекта 2+ фасада, мы синхронизируем плоскости в единую драматургию. Это переходы между сторонами, согласование фаз, тестирование с нескольких ракурсов и удалённый монтажный контроль.",
          en: "When the object has 2+ facades, we synchronise planes into a unified dramaturgy. It is side-to-side transitions, phase alignment, multi-angle testing and remote installation supervision.",
        },
      ] as LText[],
    },
  ],
  examples: [
    {
      ttl: { ru: "Бутик-отель, два фасада", en: "Boutique hotel, two facades" } as LText,
      meta: {
        ru: "Окна / световая динамика · 2 плоскости",
        en: "Windows / dynamic lighting · 2 planes",
      } as LText,
      rows: [
        { l: { ru: "Простая сцена × 4", en: "Basic scene × 4" } as LText, v: "2 400" },
        { l: { ru: "Средняя сцена × 2", en: "Medium scene × 2" } as LText, v: "2 000" },
        { l: { ru: "Сложная сцена × 1", en: "Complex scene × 1" } as LText, v: "3 000" },
        { l: { ru: "Объединение фасадов", en: "Facade orchestration" } as LText, v: "4 000" },
      ],
      total: "11 400",
    },
    {
      ttl: {
        ru: "Бизнес-центр с пиксельными ламелями",
        en: "Business centre with pixel lamellae",
      } as LText,
      meta: { ru: "Пиксельный фасад · 1 плоскость", en: "Pixel facade · 1 plane" } as LText,
      rows: [
        { l: { ru: "Простая сцена × 6", en: "Basic scene × 6" } as LText, v: "1 200" },
        { l: { ru: "Средняя сцена × 3", en: "Medium scene × 3" } as LText, v: "1 800" },
        { l: { ru: "Сложная сцена × 1", en: "Complex scene × 1" } as LText, v: "1 600" },
      ],
      total: "4 600",
    },
    {
      ttl: { ru: "Landmark с тремя плоскостями", en: "Landmark with three planes" } as LText,
      meta: {
        ru: "Световая динамика + пиксель · 3 плоскости",
        en: "Dynamic + pixel · 3 planes",
      } as LText,
      rows: [
        { l: { ru: "Сложная сцена × 3 (свет)", en: "Complex × 3 (dynamic)" } as LText, v: "9 000" },
        {
          l: { ru: "Сложная сцена × 2 (пиксель)", en: "Complex × 2 (pixel)" } as LText,
          v: "3 200",
        },
        { l: { ru: "Средняя сцена × 4", en: "Medium scene × 4" } as LText, v: "4 000" },
        { l: { ru: "Объединение фасадов", en: "Facade orchestration" } as LText, v: "4 000" },
      ],
      total: "20 200",
    },
  ],
};

// ── SERVICES detail ────────────────────────────────────────
export const SERVICES_DETAIL = [
  {
    what: {
      ru: "Проектирование топологии DMX-сети, сборка управляющих шкафов, выбор контроллеров, разводка вселенных и протоколов.",
      en: "DMX network topology design, control cabinet assembly, controller selection, universe and protocol layout.",
    } as LText,
    objects: {
      ru: "Отели, бизнес-кварталы, landmark-фасады, ритейл-флагманы.",
      en: "Hotels, business districts, landmark facades, retail flagships.",
    } as LText,
    includes: [
      { ru: "Аудит фасада и геометрии", en: "Facade and geometry audit" },
      { ru: "Топология DMX и резервирование", en: "DMX topology and redundancy" },
      { ru: "Шкафы управления и пусконаладка", en: "Control cabinets and commissioning" },
      { ru: "Удалённое управление и SLA", en: "Remote control and SLA" },
    ] as LText[],
    pricing: {
      ru: "Считается под объект. Объединение нескольких фасадов — от 4 000 USD.",
      en: "Object-specific pricing. Multi-facade orchestration from 4 000 USD.",
    } as LText,
  },
  {
    what: {
      ru: "Расчёт сетки, монтаж пиксельной матрицы, написание контент-сценариев, калибровка по всей плоскости здания.",
      en: "Grid calculation, pixel matrix installation, content scenarios, full-plane calibration.",
    } as LText,
    objects: {
      ru: "Башни, ламельные обшивки, торговые галереи, ритейл-флагманы.",
      en: "Towers, lamellae cladding, retail galleries, flagship stores.",
    } as LText,
    includes: [
      { ru: "Раскладка пикселей и шага", en: "Pixel layout and pitch" },
      { ru: "Монтаж и адресация", en: "Installation and addressing" },
      { ru: "Контент-сценарии под объект", en: "Object-specific content scenes" },
      { ru: "Калибровка плоскости", en: "Plane calibration" },
    ] as LText[],
    pricing: {
      ru: "Сцены: простая 200 / средняя 600 / сложная 1 600 USD.",
      en: "Scenes: basic 200 / medium 600 / complex 1 600 USD.",
    } as LText,
  },
  {
    what: {
      ru: "Авторские сцены для оконной и фасадной светодинамики — от спокойного дыхания до сложной нарративной анимации.",
      en: "Authored scenes for window and facade dynamics — from quiet breathing to complex narrative animation.",
    } as LText,
    objects: {
      ru: "Отели, рестораны, культурные пространства, knock-out фасады.",
      en: "Hotels, restaurants, cultural venues, knock-out facades.",
    } as LText,
    includes: [
      { ru: "Сценарий и сторибординг", en: "Scenario and storyboard" },
      { ru: "Зонирование и фазы", en: "Zoning and phases" },
      { ru: "Ночное тестирование на объекте", en: "On-site night testing" },
      { ru: "Передача исходников и доков", en: "Source and documentation handover" },
    ] as LText[],
    pricing: {
      ru: "Сцены: простая 600 / средняя 1 000 / сложная 3 000 USD.",
      en: "Scenes: basic 600 / medium 1 000 / complex 3 000 USD.",
    } as LText,
  },
  {
    what: {
      ru: "Контурный гибкий неон, силуэты, акцентная подсветка, интеграция в общую DMX-логику здания.",
      en: "Contour flexible neon, silhouettes, accent lighting, integration into the building DMX logic.",
    } as LText,
    objects: {
      ru: "Рестораны, бутики, культурные кластеры, входные группы отелей.",
      en: "Restaurants, boutiques, cultural clusters, hotel entrances.",
    } as LText,
    includes: [
      { ru: "Раскладка контура", en: "Contour layout" },
      { ru: "Монтаж и сборка контуров", en: "Installation and contour assembly" },
      { ru: "Интеграция в DMX-сценарий", en: "Integration into DMX scenarios" },
      { ru: "Гарантия и сервисный план", en: "Warranty and service plan" },
    ] as LText[],
    pricing: {
      ru: "Цена — за метр контура, по типу неона. Считается после раскладки.",
      en: "Per-metre pricing by neon type. Calculated after layout.",
    } as LText,
  },
  {
    what: {
      ru: "Регламентные выезды, диагностика, удалённый мониторинг сценариев, замена модулей по SLA.",
      en: "Scheduled visits, diagnostics, remote scene monitoring, SLA-based module replacement.",
    } as LText,
    objects: {
      ru: "Все объекты, где свет — часть имени здания.",
      en: "All objects where light is part of a building’s identity.",
    } as LText,
    includes: [
      { ru: "Календарь регламентного обслуживания", en: "Scheduled service calendar" },
      { ru: "Удалённая диагностика", en: "Remote diagnostics" },
      { ru: "Склад запасных модулей", en: "Spare module pool" },
      { ru: "SLA от 4 часов", en: "SLA from 4 hours" },
    ] as LText[],
    pricing: {
      ru: "Годовой контракт. Считается по количеству выездов и SLA.",
      en: "Yearly contract. Priced by visits and SLA.",
    } as LText,
  },
  {
    what: {
      ru: "Синхронизация нескольких фасадов в единую драматургию: переходы, фазы, тестирование на разных плоскостях.",
      en: "Synchronising several facades into one dramaturgy: transitions, phases, multi-plane testing.",
    } as LText,
    objects: {
      ru: "Отели с несколькими фасадами, landmark-объекты, кварталы.",
      en: "Multi-facade hotels, landmark objects, blocks.",
    } as LText,
    includes: [
      { ru: "Согласование общей логики", en: "Unified logic alignment" },
      { ru: "Настройка переходов", en: "Transition setup" },
      { ru: "Тестирование с разных ракурсов", en: "Multi-angle testing" },
      { ru: "Драматургия здания", en: "Building dramaturgy" },
    ] as LText[],
    pricing: {
      ru: "Считается отдельно от 4 000 USD.",
      en: "Quoted separately from 4 000 USD.",
    } as LText,
  },
];

// ── CASES ──────────────────────────────────────────────────
export const CASES = [
  {
    idx: "01",
    type: { ru: "Отель · 5★ · 2 фасада", en: "Hotel · 5★ · 2 facades" } as LText,
    ttl: { ru: "Отель Vasiliev на двух фасадах", en: "Hotel Vasiliev across two facades" } as LText,
    task: {
      ru: "Объединить два фасада отеля в единую световую драматургию, не нарушая ночной режим жилой зоны.",
      en: "Unify two hotel facades into one light dramaturgy without breaking the residential night zone.",
    } as LText,
    sol: {
      ru: "Спроектирована DMX-сеть на две вселенные, написаны 7 авторских сцен и единая ночная программа с тихим режимом после 23:00.",
      en: "Designed a two-universe DMX network, authored 7 scenes and a unified night programme with a quiet mode after 23:00.",
    } as LText,
    res: {
      ru: "Объект получил собственный световой подпись на обеих сторонах квартала. Скорость подмены модулей по SLA — 4 часа.",
      en: "The object obtained its own light signature on both sides of the block. Module replacement SLA — 4 hours.",
    } as LText,
    stats: [
      { k: { ru: "Сцен", en: "Scenes" } as LText, v: "7" },
      { k: { ru: "Плоскостей", en: "Planes" } as LText, v: "2" },
      { k: { ru: "Бюджет", en: "Budget" } as LText, v: "$22.4k" },
    ],
    drivers: {
      ru: "Стоимость определила: ночная регламентация, ручная сложная сцена и объединение фасадов.",
      en: "Price drivers: night regulation, hand-authored complex scene and facade orchestration.",
    } as LText,
  },
  {
    idx: "02",
    type: { ru: "Бизнес-центр · ламели", en: "Business centre · lamellae" } as LText,
    ttl: { ru: "Северный портал, пиксельные ламели", en: "North Portal, pixel lamellae" } as LText,
    task: {
      ru: "Превратить ламельную обшивку BC в управляемый пиксельный фасад без потери архитектурного ритма.",
      en: "Turn lamellae cladding into a controllable pixel facade without losing architectural rhythm.",
    } as LText,
    sol: {
      ru: "Размечена сетка 64×24, написано 10 базовых и 2 ивент-сценария, интеграция с ивент-календарём арендаторов.",
      en: "Laid out a 64×24 grid, authored 10 base and 2 event scenes, integrated with the tenants’ event calendar.",
    } as LText,
    res: {
      ru: "Здание стало точкой ориентира района. Сценарии переключаются в 1 клик через админ-панель.",
      en: "The building became a district landmark. Scenes switch in 1 click via admin panel.",
    } as LText,
    stats: [
      { k: { ru: "Точек", en: "Points" } as LText, v: "1 536" },
      { k: { ru: "Сцен", en: "Scenes" } as LText, v: "12" },
      { k: { ru: "Бюджет", en: "Budget" } as LText, v: "$8.6k" },
    ],
    drivers: {
      ru: "Стоимость определила: плотность сетки, объём авторских сцен, интеграция с CRM арендаторов.",
      en: "Price drivers: grid density, scene volume, tenant CRM integration.",
    } as LText,
  },
  {
    idx: "03",
    type: { ru: "Ресторанный комплекс · неон", en: "Restaurant complex · neon" } as LText,
    ttl: { ru: "Гастрокластер «Меридиан»", en: "Meridian gastro cluster" } as LText,
    task: {
      ru: "Подсветить три ресторана единой ночной идентикой, сохранив автономию каждого фасада.",
      en: "Light three restaurants with a single night identity, preserving each facade’s autonomy.",
    } as LText,
    sol: {
      ru: "Контурный гибкий неон, три независимых группы DMX, общая «ужинная» сцена в 19:30.",
      en: "Contour flexible neon, three independent DMX groups, a shared dinner-hour scene at 19:30.",
    } as LText,
    res: {
      ru: "Кластер читается как единое место с тремя характерами. Поток гостей в часы общей сцены вырос на 18%.",
      en: "The cluster reads as one place with three characters. Guest flow during the shared scene grew by 18%.",
    } as LText,
    stats: [
      { k: { ru: "Контур", en: "Contour" } as LText, v: "412 м" },
      { k: { ru: "Сцен", en: "Scenes" } as LText, v: "9" },
      { k: { ru: "Бюджет", en: "Budget" } as LText, v: "$14.0k" },
    ],
    drivers: {
      ru: "Стоимость определила: длина контура, синхронизация трёх фасадов, авторский ритм общей сцены.",
      en: "Price drivers: contour length, three-facade sync, shared-scene authored rhythm.",
    } as LText,
  },
  {
    idx: "04",
    type: {
      ru: "Торговая галерея · фасадная анимация",
      en: "Retail gallery · facade animation",
    } as LText,
    ttl: {
      ru: "Галерея «Корсо», окна второго света",
      en: "Corso gallery, second-light windows",
    } as LText,
    task: {
      ru: "Сделать фасад галереи самостоятельным ночным аттракционом, читаемым с трёх ракурсов.",
      en: "Turn the gallery facade into a stand-alone night attraction visible from three angles.",
    } as LText,
    sol: {
      ru: "Световая динамика по окнам, 5 авторских сцен, программа сезонных переходов, сложная сцена «Новый год».",
      en: "Window-based dynamics, 5 authored scenes, a seasonal transition programme, a complex New-Year scene.",
    } as LText,
    res: {
      ru: "Сезонная сцена даёт галерее главную медиа-публикацию каждый декабрь.",
      en: "The seasonal scene gives the gallery its main media publication every December.",
    } as LText,
    stats: [
      { k: { ru: "Сцен", en: "Scenes" } as LText, v: "5" },
      { k: { ru: "Окон", en: "Windows" } as LText, v: "84" },
      { k: { ru: "Бюджет", en: "Budget" } as LText, v: "$11.4k" },
    ],
    drivers: {
      ru: "Стоимость определила: индивидуальная сложная сцена и сезонная программа.",
      en: "Price drivers: hand-authored complex scene and seasonal programme.",
    } as LText,
  },
  {
    idx: "05",
    type: { ru: "Landmark · 3 плоскости", en: "Landmark · 3 planes" } as LText,
    ttl: {
      ru: "Башня «Атлас», объединение трёх плоскостей",
      en: "Atlas Tower, three-plane orchestration",
    } as LText,
    task: {
      ru: "Создать узнаваемую световую идентику высотного landmark-объекта на трёх ракурсах одновременно.",
      en: "Create a recognisable light identity for a high-rise landmark across three angles simultaneously.",
    } as LText,
    sol: {
      ru: "Гибрид: пиксельный фасад на гранях + динамика на парапете, объединение трёх плоскостей и сценарии «час пик» / «ночь».",
      en: "Hybrid: pixel facade on edges + parapet dynamics, three-plane orchestration and rush-hour / night scenes.",
    } as LText,
    res: {
      ru: "Башня стала ночным ориентиром района. Программа гибко перестраивается под городские события.",
      en: "The tower became a night landmark of the district. The programme reconfigures flexibly for city events.",
    } as LText,
    stats: [
      { k: { ru: "Плоскостей", en: "Planes" } as LText, v: "3" },
      { k: { ru: "Сцен", en: "Scenes" } as LText, v: "14" },
      { k: { ru: "Бюджет", en: "Budget" } as LText, v: "$36.8k" },
    ],
    drivers: {
      ru: "Стоимость определила: 3-плоскостная синхронизация, 4 сложные сцены, ивент-режимы.",
      en: "Price drivers: 3-plane sync, 4 complex scenes, event modes.",
    } as LText,
  },
];

export const SITE = {
  url: "https://lumen-arch.studio",
  name: "LUMEN ARCHITECTURE",
  shortName: "LUMEN",
  email: "hello@lumen-arch.studio",
  phone: "+7 495 000 00 00",
  telegram: "@lumen_arch",
  whatsapp: "+971 50 000 0000",
  founded: 2014,
  projects: 112,
  offices: ["Москва, Б. Якиманка, 32", "Dubai, DIFC, Gate Village 4", "Алматы, Аль-Фараби, 7"],
};
