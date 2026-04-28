import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export const TRANSLATIONS = {
  ar: {
    dir: "rtl",
    name: "العربية",
    nav: {
      home: "الرئيسية",
      projects: "أعمالي",
      skills: "مهاراتي",
      about: "من أنا",
      contact: "تواصل معي",
      cta: "تواصل الآن",
    },
    hero: {
      badge: "متاح للعمل الحر الآن",
      title1: "مطوّر ويب محترف",
      title2: "يبني مواقع تبيع",
      sub: " محمد محسن — مطوّر ويب متخصص في React وNode.js\nبنيت مواقع وتطبيقات لعملاء من مجالات مختلفة.\nمهتم بالتفاصيل، السرعة، وتجربة المستخدم.",
      note: "السوشيال ميديا اليوم مش خيار… ومواقع الويب كمان.\nلكن بناء موقع احترافي بوخذ وقت — وهون بيجي دوري.",
      btnProjects: "شوف أعمالي",
      btnContact: "تواصل معي",
      tagline: "[اجى الوقت تعطي موقعك حقه]",
    },
    benefits: {
      sectionTitle: "موقعك بعد الشغل معي",
      sectionSub: "صرت أقوى من منافسيك رقمياً",
      cta: "ابدأ مشروعك اليوم",
      tagline: "[اجى الوقت تعطي موقعك حقه]",
      items: [
        { title: "سرعة فائقة", desc: "مواقع محسّنة للأداء — تحميل سريع يقلل معدل الترك ويزيد المبيعات." },
        { title: "متوافق مع الجوال", desc: "كل موقع أبنيه يظهر مثالياً على كل الأجهزة — جوال، تابلت، ولابتوب." },
        { title: "كود نظيف ومنظّم", desc: "أكتب كود احترافي قابل للتطوير، سهل الصيانة، وخالي من المشاكل." },
        { title: "تصميم جذّاب", desc: "مواقع بتشبهك، بتعكس هويتك، وتجذب العملاء من أول نظرة." },
        { title: "آمن وموثوق", desc: "أبني مواقع بمعايير أمان عالية — بياناتك وبيانات عملائك محمية." },
        { title: "نتائج حقيقية", desc: "مواقع مصممة للتحويل — مش بس حلوة بالشكل، تجيب عملاء فعلاً." },
      ],
    },
    projects: {
      tag: "من أعمالي الأخيرة",
      title: "جزء صغير من الشغل اللي بنفتخر فيه",
      sub: "مواقع حقيقية صمّمتها وطوّرتها من مجالات مختلفة، كل مشروع فيه قصة وتحدي تقني حللته.",
      all: "الكل",
      frontend: "فرونت إند",
      fullstack: "فول ستاك",
      mobile: "موبايل",
      viewSite: "مشاهدة الموقع",
      code: "الكود",
      noProjects: "لا توجد مشاريع بعد.",
    },
    how: {
      tag: "كيف نشتغل",
      title: "3 خطوات = موقع احترافي",
      steps: [
        { number: "01", title: "التواصل والفهم", desc: "أول خطوة… نتحدث ونفهم احتياجاتك صح.\nمن خلالها نبني استراتيجية تناسب مجالك وجمهورك." },
        { number: "02", title: "التطوير والبناء", desc: "بعد ما نتفق على كل التفاصيل، أبدأ بالتطوير.\nبطلعك على تحديثات مستمرة خلال العمل." },
        { number: "03", title: "الإطلاق والتسليم", desc: "موقعك يتطلق باحتراف، سريع، وآمن.\nبتستلم موقع جاهز ومتوافق مع كل الأجهزة." },
      ],
    },
    skills: {
      tag: "أدواتي",
      title: "التقنيات اللي أستخدمها",
      sub: "ترسانة تقنية كاملة لبناء أي مشروع ويب من الصفر للنهاية",
    },
    about: {
      tag: "من أنا",
      title: "من البداية... محمد محسن",
      bio1: "        . دخلت عالم التقنية وتعلمت كيف الكود يتحوّل لتجارب مستخدم حقيقية.",
      bio2: "اليوم، أنا مطوّر ويب متكامل — أفهم المبيعات، التقنية، وتجربة المستخدم. بدمج كل هاي العوالم عشان أطلعلك موقع احترافي وبيشتغل فعلاً.",
      bio3: "الفرق؟ إني مش بس مطوّر.\nأنا فاهم شو بتحتاجه مصلحتك رقمياً، ومستعد أبنيه لك.",
      guaranteeTitle: "ضمان الرضا الكامل",
      guaranteeDesc: "ثقتي بالشغل اللي بقدمه كبيرة. إذا ما عجبك الناتج أو حسيت إنك ما استفدت — نتفق على حل يناسب الطرفين.",
      degreeTitle: "شهادتي الجامعية",
      degreeDesc: "هندسة البرمجيات — كلية الإدارة Minhal College",
      degreePlaceholder: "اضغط لإضافة صورة الشهادة",
    },
    contact: {
      tag: "تواصل معي",
      title: "جاهز تبني موقعك؟",
      sub: "كل موقع أبنيه بيختصر عليك وقت ومجهود، ويخليك تظهر باحتراف قدام عملائك.\nاترك تفاصيلك، وأنا بتواصل معك لنحدد الموعد ونبدأ.",
      whatsapp: "تواصل عبر واتساب الآن",
      services: ["مواقع landing page احترافية", "تطبيقات ويب كاملة", "متاجر إلكترونية", "لوحات تحكم وأنظمة إدارة", "تحسين وتطوير مواقع قائمة"],
      formTitle: "أرسل رسالة",
      name: "الاسم الكامل *",
      namePh: "محمد أحمد",
      phone: "رقم الهاتف *",
      phonePh: "05XXXXXXXX",
      service: "نوع الخدمة",
      servicePh: "اختر الخدمة...",
      message: "تفاصيل إضافية",
      messagePh: "اشرح فكرتك أو مشروعك باختصار...",
      send: "ابدأ الآن",
      sending: "جاري الإرسال...",
      tagline: "[اجى الوقت تعطي موقعك حقه]",
      sentTitle: "تم الإرسال!",
      sentSub: "سأتواصل معك في أقرب وقت ممكن.",
      sendAnother: "إرسال رسالة أخرى",
      availableFor: "متاح الآن لـ:",
      serviceOptions: ["landing", "webapp", "store", "dashboard", "update", "other"],
      serviceLabels: ["Landing Page", "تطبيق ويب كامل", "متجر إلكتروني", "لوحة تحكم", "تطوير موقع قائم", "أخرى"],
    },
    footer: "جميع الحقوق محفوظة",
  },
};

TRANSLATIONS.he = {
  ...TRANSLATIONS.ar,
  name: "עברית",
  dir: "rtl",
  nav: {
    home: "בית",
    projects: "פרויקטים",
    skills: "כישורים",
    about: "אודות",
    contact: "צור קשר",
    cta: "צור קשר עכשיו",
  },
};

TRANSLATIONS.en = {
  ...TRANSLATIONS.ar,
  name: "English",
  dir: "ltr",
  nav: {
    home: "Home",
    projects: "Projects",
    skills: "Skills",
    about: "About",
    contact: "Contact",
    cta: "Contact Now",
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("ar");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved && TRANSLATIONS[saved]) {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = TRANSLATIONS[lang] || TRANSLATIONS.ar;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}