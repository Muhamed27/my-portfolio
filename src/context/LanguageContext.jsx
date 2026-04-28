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
      sub: "محمد محسن — مطوّر ويب متخصص في React و Node.js\nبنيت مواقع وتطبيقات لعملاء من مجالات مختلفة.\nمهتم بالتفاصيل، السرعة، وتجربة المستخدم.",
      note: "السوشيال ميديا اليوم مش خيار… ومواقع الويب كمان.\nلكن بناء موقع احترافي بوخذ وقت — وهون بيجي دوري.",
      btnProjects: "شوف أعمالي",
      btnContact: "تواصل معي",
      tagline: "[اجى الوقت تعطي موقعك حقه]",
    },
    benefits: {
      sectionTitle: "موقعك بعد الشغل معي",
      sectionSub: "صرت أقوى من منافسيك رقميًا",
      cta: "ابدأ مشروعك اليوم",
      tagline: "[اجى الوقت تعطي موقعك حقه]",
      items: [
        { title: "سرعة فائقة", desc: "مواقع محسّنة للأداء — تحميل سريع يقلل مغادرة الزائر ويزيد فرص التواصل." },
        { title: "متوافق مع الجوال", desc: "كل موقع يظهر بشكل ممتاز على الهاتف، التابلت، والكمبيوتر." },
        { title: "كود نظيف ومنظّم", desc: "كود احترافي قابل للتطوير وسهل الصيانة." },
        { title: "تصميم جذّاب", desc: "تصميم يعكس هويتك ويجذب العميل من أول نظرة." },
        { title: "آمن وموثوق", desc: "بناء منظم يحافظ على ثقة المستخدم وتجربة التصفح." },
        { title: "نتائج حقيقية", desc: "موقع جميل وعملي هدفه تحويل الزائر إلى عميل." },
      ],
    },
    projects: {
      tag: "من أعمالي الأخيرة",
      title: "جزء من المشاريع التي عملت عليها",
      sub: "مواقع حقيقية صممتها وطورتها لمجالات مختلفة.",
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
        { number: "01", title: "التواصل والفهم", desc: "نفهم فكرتك وهدف الموقع والجمهور المستهدف." },
        { number: "02", title: "التطوير والبناء", desc: "أبدأ ببناء الموقع بتصميم احترافي وتجربة استخدام واضحة." },
        { number: "03", title: "الإطلاق والتسليم", desc: "نطلق الموقع ونجهزه ليعمل بسرعة على كل الأجهزة." },
      ],
    },
    skills: {
      tag: "أدواتي",
      title: "التقنيات التي أستخدمها",
      sub: "تقنيات حديثة لبناء مواقع سريعة واحترافية.",
    },
    about: {
      tag: "من أنا",
      title: "محمد محسن",
      bio1: "دخلت عالم التقنية وتعلمت كيف يتحول الكود إلى تجربة مستخدم حقيقية.",
      bio2: "أنا مطوّر ويب أفهم التصميم، التقنية، وتجربة المستخدم، وأبني مواقع تساعد أصحاب الأعمال على الظهور بشكل احترافي.",
      bio3: "الفرق؟ إني لا أبني موقعًا فقط.\nأبني تجربة رقمية تساعدك على كسب ثقة العميل.",
      guaranteeTitle: "ضمان الرضا",
      guaranteeDesc: "أعمل معك حتى نصل إلى نتيجة مناسبة واحترافية.",
      degreeTitle: "شهادتي الجامعية",
      degreeDesc: "هندسة البرمجيات — Minhal College",
      degreePlaceholder: "صورة الشهادة",
    },
    contact: {
      tag: "تواصل معي",
      title: "جاهز تبني موقعك؟",
      sub: "اترك تفاصيلك، وسأتواصل معك لنبدأ بناء موقعك بشكل احترافي.",
      whatsapp: "تواصل عبر واتساب الآن",
      services: ["Landing Page", "تطبيق ويب كامل", "متجر إلكتروني", "لوحة تحكم", "تطوير موقع قائم"],
      formTitle: "أرسل رسالة",
      name: "الاسم الكامل *",
      namePh: "محمد أحمد",
      phone: "رقم الهاتف *",
      phonePh: "05XXXXXXXX",
      service: "نوع الخدمة",
      servicePh: "اختر الخدمة...",
      message: "تفاصيل إضافية",
      messagePh: "اشرح فكرتك باختصار...",
      send: "ابدأ الآن",
      sending: "جاري الإرسال...",
      tagline: "[اجى الوقت تعطي موقعك حقه]",
      sentTitle: "تم الإرسال!",
      sentSub: "سأتواصل معك قريبًا.",
      sendAnother: "إرسال رسالة أخرى",
      availableFor: "متاح الآن لـ:",
      serviceOptions: ["landing", "webapp", "store", "dashboard", "update", "other"],
      serviceLabels: ["Landing Page", "تطبيق ويب كامل", "متجر إلكتروني", "لوحة تحكم", "تطوير موقع قائم", "أخرى"],
    },
    footer: "جميع الحقوق محفوظة",
  },

  he: {
    dir: "rtl",
    name: "עברית",
    nav: {
      home: "בית",
      projects: "פרויקטים",
      skills: "כישורים",
      about: "אודות",
      contact: "צור קשר",
      cta: "צור קשר עכשיו",
    },
    hero: {
      badge: "זמין לעבודה עכשיו",
      title1: "מפתח אתרים מקצועי",
      title2: "בונה אתרים שמוכרים",
      sub: "מוחמד מוחסן — מפתח Web המתמחה ב-React ו-Node.js\nבניתי אתרים ואפליקציות ללקוחות מתחומים שונים.\nאני מתמקד בפרטים, מהירות וחוויית משתמש.",
      note: "היום נוכחות דיגיטלית היא לא אופציה — היא חובה.\nואתר מקצועי הוא אחד הכלים החשובים ביותר לעסק.",
      btnProjects: "צפה בפרויקטים",
      btnContact: "צור קשר",
      tagline: "[הגיע הזמן לתת לאתר שלך את המקום שמגיע לו]",
    },
    benefits: {
      sectionTitle: "מה האתר שלך יקבל",
      sectionSub: "נוכחות דיגיטלית חזקה ומקצועית יותר",
      cta: "התחל את הפרויקט שלך",
      tagline: "[הגיע הזמן לתת לאתר שלך את המקום שמגיע לו]",
      items: [
        { title: "מהירות גבוהה", desc: "אתרים מהירים שמספקים חוויית גלישה חלקה." },
        { title: "מותאם לנייד", desc: "עיצוב שנראה מצוין בטלפון, טאבלט ומחשב." },
        { title: "קוד נקי", desc: "קוד מסודר, מקצועי וקל לתחזוקה." },
        { title: "עיצוב מושך", desc: "עיצוב שמשדר מקצועיות ובונה אמון." },
        { title: "אמין ובטוח", desc: "מבנה נכון וחוויית משתמש יציבה." },
        { title: "תוצאות אמיתיות", desc: "אתר שנבנה כדי להפוך מבקרים ללקוחות." },
      ],
    },
    projects: {
      tag: "הפרויקטים האחרונים שלי",
      title: "חלק מהעבודות שבניתי",
      sub: "אתרים אמיתיים שעיצבתי ופיתחתי לתחומים שונים.",
      all: "הכל",
      frontend: "Frontend",
      fullstack: "Full Stack",
      mobile: "Mobile",
      viewSite: "צפה באתר",
      code: "קוד",
      noProjects: "אין פרויקטים עדיין.",
    },
    how: {
      tag: "תהליך העבודה",
      title: "3 שלבים = אתר מקצועי",
      steps: [
        { number: "01", title: "הבנת הצורך", desc: "מבינים את הרעיון, המטרה והקהל שלך." },
        { number: "02", title: "פיתוח האתר", desc: "בונים אתר מקצועי עם עיצוב ברור וחוויית משתמש טובה." },
        { number: "03", title: "השקה", desc: "מעלים את האתר לאוויר ומוודאים שהוא עובד בכל המכשירים." },
      ],
    },
    skills: {
      tag: "הכלים שלי",
      title: "הטכנולוגיות שאני משתמש בהן",
      sub: "טכנולוגיות מודרניות לבניית אתרים מהירים ומקצועיים.",
    },
    about: {
      tag: "אודות",
      title: "מוחמד מוחסן",
      bio1: "נכנסתי לעולם הטכנולוגיה ולמדתי איך קוד הופך לחוויית משתמש אמיתית.",
      bio2: "אני מפתח אתרים שמבין עיצוב, טכנולוגיה וחוויית משתמש, ובונה אתרים שעוזרים לעסקים להיראות מקצועיים.",
      bio3: "אני לא רק בונה אתר.\nאני בונה נוכחות דיגיטלית שמייצרת אמון.",
      guaranteeTitle: "שביעות רצון",
      guaranteeDesc: "אני עובד איתך עד שמגיעים לתוצאה מקצועית ומתאימה.",
      degreeTitle: "התואר שלי",
      degreeDesc: "הנדסת תוכנה — Minhal College",
      degreePlaceholder: "תמונת תעודה",
    },
    contact: {
      tag: "צור קשר",
      title: "מוכן לבנות את האתר שלך?",
      sub: "השאר פרטים ואחזור אליך כדי להתחיל לבנות אתר מקצועי.",
      whatsapp: "צור קשר בוואטסאפ",
      services: ["Landing Page", "אפליקציית Web", "חנות אונליין", "מערכת ניהול", "שדרוג אתר קיים"],
      formTitle: "שלח הודעה",
      name: "שם מלא *",
      namePh: "מוחמד אחמד",
      phone: "מספר טלפון *",
      phonePh: "05XXXXXXXX",
      service: "סוג שירות",
      servicePh: "בחר שירות...",
      message: "פרטים נוספים",
      messagePh: "כתוב בקצרה על הרעיון שלך...",
      send: "שלח",
      sending: "שולח...",
      tagline: "[הגיע הזמן לתת לאתר שלך את המקום שמגיע לו]",
      sentTitle: "נשלח!",
      sentSub: "אחזור אליך בהקדם.",
      sendAnother: "שלח הודעה נוספת",
      availableFor: "זמין עכשיו עבור:",
      serviceOptions: ["landing", "webapp", "store", "dashboard", "update", "other"],
      serviceLabels: ["Landing Page", "אפליקציית Web", "חנות אונליין", "מערכת ניהול", "שדרוג אתר קיים", "אחר"],
    },
    footer: "כל הזכויות שמורות",
  },

  en: {
    dir: "ltr",
    name: "English",
    nav: {
      home: "Home",
      projects: "Projects",
      skills: "Skills",
      about: "About",
      contact: "Contact",
      cta: "Contact Now",
    },
    hero: {
      badge: "Available for freelance work",
      title1: "Professional Web Developer",
      title2: "Building websites that sell",
      sub: "Mohamed Muhsen — Web developer specialized in React and Node.js\nI build websites and apps for clients across different fields.\nFocused on details, speed, and user experience.",
      note: "Today, digital presence is not optional.\nA professional website helps your business look trusted and serious.",
      btnProjects: "View Projects",
      btnContact: "Contact Me",
      tagline: "[It is time to give your website the value it deserves]",
    },
    benefits: {
      sectionTitle: "What your website gets",
      sectionSub: "A stronger and more professional digital presence",
      cta: "Start Your Project",
      tagline: "[It is time to give your website the value it deserves]",
      items: [
        { title: "High Speed", desc: "Optimized websites with fast loading and smooth browsing." },
        { title: "Mobile Friendly", desc: "Perfect layout on phones, tablets, and desktops." },
        { title: "Clean Code", desc: "Professional, organized, and maintainable code." },
        { title: "Attractive Design", desc: "A design that reflects your brand and builds trust." },
        { title: "Reliable Structure", desc: "Stable website structure and smooth user experience." },
        { title: "Real Results", desc: "A website designed to turn visitors into customers." },
      ],
    },
    projects: {
      tag: "Recent Projects",
      title: "Some of the work I built",
      sub: "Real websites I designed and developed for different fields.",
      all: "All",
      frontend: "Frontend",
      fullstack: "Full Stack",
      mobile: "Mobile",
      viewSite: "View Website",
      code: "Code",
      noProjects: "No projects yet.",
    },
    how: {
      tag: "How It Works",
      title: "3 steps = Professional website",
      steps: [
        { number: "01", title: "Understanding", desc: "We understand your idea, goal, and target audience." },
        { number: "02", title: "Development", desc: "I build a professional website with clean design and smooth UX." },
        { number: "03", title: "Launch", desc: "The website goes live and works perfectly on all devices." },
      ],
    },
    skills: {
      tag: "My Tools",
      title: "Technologies I Use",
      sub: "Modern technologies for building fast and professional websites.",
    },
    about: {
      tag: "About Me",
      title: "Mohamed Muhsen",
      bio1: "I entered the tech world and learned how code becomes a real user experience.",
      bio2: "I am a web developer who understands design, technology, and user experience. I build websites that help businesses look professional.",
      bio3: "I do not just build a website.\nI build a digital presence that creates trust.",
      guaranteeTitle: "Satisfaction Guarantee",
      guaranteeDesc: "I work with you until we reach a professional result that fits your needs.",
      degreeTitle: "My Degree",
      degreeDesc: "Software Engineering — Minhal College",
      degreePlaceholder: "Degree image",
    },
    contact: {
      tag: "Contact Me",
      title: "Ready to build your website?",
      sub: "Leave your details and I will contact you to start building your professional website.",
      whatsapp: "Contact on WhatsApp",
      services: ["Landing Page", "Full Web App", "Online Store", "Dashboard", "Existing Website Upgrade"],
      formTitle: "Send a Message",
      name: "Full Name *",
      namePh: "Mohamed Ahmed",
      phone: "Phone Number *",
      phonePh: "05XXXXXXXX",
      service: "Service Type",
      servicePh: "Choose service...",
      message: "Additional Details",
      messagePh: "Briefly describe your idea...",
      send: "Start Now",
      sending: "Sending...",
      tagline: "[It is time to give your website the value it deserves]",
      sentTitle: "Sent!",
      sentSub: "I will contact you soon.",
      sendAnother: "Send another message",
      availableFor: "Available now for:",
      serviceOptions: ["landing", "webapp", "store", "dashboard", "update", "other"],
      serviceLabels: ["Landing Page", "Full Web App", "Online Store", "Dashboard", "Existing Website Upgrade", "Other"],
    },
    footer: "All rights reserved",
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