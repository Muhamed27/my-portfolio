import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accessibility,
  X,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Sun,
  Moon,
  Contrast,
  MousePointer2,
  Type,
  Minus,
  Plus,
  Eye,
  EyeOff,
  Underline,
  StopCircle,
  Link2,
  Highlighter,
  Volume2,
  Keyboard,
  MoveHorizontal,
  TextCursorInput,
  PauseCircle,
} from "lucide-react";

const cls = (...c) => c.filter(Boolean).join(" ");

const FONT_SIZES = [90, 100, 110, 125, 140, 160];
const LINE_HEIGHTS = [1.2, 1.5, 1.8, 2.2, 2.6];
const LETTER_SPACINGS = [0, 1, 2, 3, 4];

const DEFAULT = {
  fontSize: 1,
  lineHeight: 1,
  letterSpacing: 0,
  textAlign: "default",
  contrast: "default",
  cursor: "default",
  highlightLinks: false,
  highlightHeadings: false,
  underlineLinks: false,
  hideImages: false,
  stopAnimations: false,
  readingGuide: false,
  dyslexiaFont: false,
};

function applyStyles(state) {
  const root = document.documentElement;
  const body = document.body;

  root.style.setProperty("--a11y-font-scale", `${FONT_SIZES[state.fontSize]}%`);
  body.style.lineHeight = state.lineHeight > 0 ? LINE_HEIGHTS[state.lineHeight] : "";
  body.style.letterSpacing =
    state.letterSpacing > 0 ? `${LETTER_SPACINGS[state.letterSpacing]}px` : "";
  body.style.textAlign = state.textAlign !== "default" ? state.textAlign : "";

  root.classList.remove(
    "a11y-high-contrast",
    "a11y-inverted",
    "a11y-dark-bg",
    "a11y-light-bg",
    "a11y-no-animations",
    "a11y-dyslexia",
    "a11y-big-cursor",
    "a11y-reading-cursor"
  );

  if (state.contrast === "high") root.classList.add("a11y-high-contrast");
  if (state.contrast === "inverted") root.classList.add("a11y-inverted");
  if (state.contrast === "dark") root.classList.add("a11y-dark-bg");
  if (state.contrast === "light") root.classList.add("a11y-light-bg");

  root.classList.toggle("a11y-no-animations", state.stopAnimations);
  root.classList.toggle("a11y-dyslexia", state.dyslexiaFont);

  if (state.cursor === "big") root.classList.add("a11y-big-cursor");
  if (state.cursor === "reading") root.classList.add("a11y-reading-cursor");

  document.querySelectorAll("a, button").forEach((el) => {
    el.style.outline = state.highlightLinks ? "2px solid #f59e0b" : "";
    el.style.outlineOffset = state.highlightLinks ? "2px" : "";
  });

  document.querySelectorAll("a").forEach((el) => {
    el.style.textDecoration = state.underlineLinks ? "underline" : "";
    el.style.textDecorationColor = state.underlineLinks ? "#a78bfa" : "";
  });

  document.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach((el) => {
    el.style.outline = state.highlightHeadings ? "2px solid #34d399" : "";
    el.style.outlineOffset = state.highlightHeadings ? "3px" : "";
  });

  document.querySelectorAll("img").forEach((el) => {
    el.style.visibility = state.hideImages ? "hidden" : "";
  });
}

const INJECTED_STYLE = `
  .a11y-high-contrast { filter: contrast(2) !important; }
  .a11y-inverted { filter: invert(1) hue-rotate(180deg) !important; }
  .a11y-dark-bg body { background: #000 !important; color: #fff !important; }
  .a11y-light-bg body { background: #fff !important; color: #000 !important; }

  .a11y-no-animations *, 
  .a11y-no-animations *::before, 
  .a11y-no-animations *::after {
    animation-duration: 0.001ms !important;
    transition-duration: 0.001ms !important;
  }

  .a11y-dyslexia body,
  .a11y-dyslexia p,
  .a11y-dyslexia span,
  .a11y-dyslexia h1,
  .a11y-dyslexia h2,
  .a11y-dyslexia h3,
  .a11y-dyslexia h4 {
    font-family: Arial, sans-serif !important;
    word-spacing: 4px !important;
  }

  .a11y-big-cursor,
  .a11y-big-cursor * {
    cursor: pointer !important;
  }

  .a11y-reading-cursor,
  .a11y-reading-cursor * {
    cursor: crosshair !important;
  }

  html {
    font-size: var(--a11y-font-scale, 100%);
  }
`;

function ReadingGuide() {
  const [y, setY] = useState(0);

  useEffect(() => {
    const move = (e) => setY(e.clientY);
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="fixed inset-0 z-[9998] pointer-events-none">
      <div className="absolute left-0 right-0 bg-black/60" style={{ top: 0, height: y - 30 }} />
      <div className="absolute left-0 right-0 h-16 border-y-2 border-yellow-400/80" style={{ top: y - 30 }} />
      <div className="absolute left-0 right-0 bg-black/60" style={{ top: y + 34, bottom: 0 }} />
    </div>
  );
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(DEFAULT);
  const [speaking, setSpeaking] = useState(false);
  const [activeSection, setActiveSection] = useState("main");

  useEffect(() => {
    if (!document.getElementById("a11y-styles")) {
      const style = document.createElement("style");
      style.id = "a11y-styles";
      style.textContent = INJECTED_STYLE;
      document.head.appendChild(style);
    }
  }, []);

  useEffect(() => {
    applyStyles(state);
  }, [state]);

  const update = useCallback((key, val) => {
    setState((prev) => ({ ...prev, [key]: val }));
  }, []);

  const toggle = useCallback((key) => {
    setState((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const reset = () => {
    setState(DEFAULT);
    window.speechSynthesis?.cancel();
    setSpeaking(false);
  };

  const handleTTS = () => {
    if (!window.speechSynthesis) return;

    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }

    const text = document.body.innerText.slice(0, 3000);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ar-SA";
    utterance.rate = 0.9;
    utterance.onend = () => setSpeaking(false);

    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
  };

  const Btn = ({ icon: Icon, label, active, onClick }) => (
    <button
      onClick={onClick}
      title={label}
      className={cls(
        "flex flex-col items-center justify-center gap-1.5 rounded-xl p-3 text-center transition-all duration-200 border text-xs font-bold leading-tight min-h-[72px]",
        active
          ? "bg-primary text-white border-primary shadow-[0_0_12px_hsl(265_85%_58%/0.4)]"
          : "bg-card/80 text-white/70 border-border/40 hover:border-primary/50 hover:text-white hover:bg-card"
      )}
    >
      <Icon className="w-5 h-5 flex-shrink-0" />
      <span>{label}</span>
    </button>
  );

  const Stepper = ({ label, icon: Icon, value, min, max, onDec, onInc }) => (
    <div className="flex items-center justify-between bg-card/80 border border-border/40 rounded-xl px-4 py-3 gap-3">
      <div className="flex items-center gap-2 text-white/70 text-xs font-bold">
        <Icon className="w-4 h-4 text-primary flex-shrink-0" />
        {label}
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onDec}
          disabled={value <= min}
          className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center text-white/70 hover:text-white hover:bg-primary/30 disabled:opacity-30 transition-colors"
        >
          <Minus className="w-3.5 h-3.5" />
        </button>

        <span className="text-white text-sm font-black w-8 text-center">
          {value}
        </span>

        <button
          onClick={onInc}
          disabled={value >= max}
          className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center text-white/70 hover:text-white hover:bg-primary/30 disabled:opacity-30 transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );

  return (
    <>
      {state.readingGuide && <ReadingGuide />}

      <motion.button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 left-5 z-[9999] w-14 h-14 rounded-full bg-primary text-white shadow-[0_4px_24px_hsl(265_85%_58%/0.5)] flex items-center justify-center hover:scale-110 transition-transform"
        whileTap={{ scale: 0.92 }}
        title="أدوات إمكانية الوصول"
        aria-label="Accessibility"
      >
        <Accessibility className="w-7 h-7" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -30, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 left-5 z-[9999] w-[310px] max-h-[80vh] flex flex-col rounded-2xl border border-border/60 bg-background/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden"
            dir="rtl"
          >
            <div className="flex items-center justify-between px-4 py-3.5 border-b border-border/40 bg-card/50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                  <Accessibility className="w-4 h-4 text-primary" />
                </div>

                <div>
                  <h3 className="text-white font-black text-sm leading-tight">
                    إمكانية الوصول
                  </h3>
                  <p className="text-white/40 text-[10px]">
                    أدوات ذوي الاحتياجات الخاصة
                  </p>
                </div>
              </div>

              <div className="flex gap-1.5">
                <button
                  onClick={reset}
                  title="إعادة ضبط"
                  className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center text-white/50 hover:text-white"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setOpen(false)}
                  className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center text-white/50 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="flex border-b border-border/30">
              {[
                { id: "main", label: "عام" },
                { id: "text", label: "نص" },
                { id: "display", label: "عرض" },
                { id: "tools", label: "أدوات" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={cls(
                    "flex-1 py-2.5 text-xs font-bold transition-colors",
                    activeSection === tab.id
                      ? "text-primary border-b-2 border-primary bg-primary/5"
                      : "text-white/40 hover:text-white/70"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="overflow-y-auto flex-1 p-3 space-y-3">
              {activeSection === "main" && (
                <>
                  <p className="text-white/40 text-[10px] text-center pb-1">
                    الأدوات الأكثر استخداماً
                  </p>

                  <div className="grid grid-cols-3 gap-2">
                    <Btn
                      icon={ZoomIn}
                      label="تكبير الخط"
                      active={state.fontSize > 1}
                      onClick={() =>
                        update("fontSize", Math.min(state.fontSize + 1, FONT_SIZES.length - 1))
                      }
                    />
                    <Btn
                      icon={ZoomOut}
                      label="تصغير الخط"
                      active={state.fontSize < 1}
                      onClick={() =>
                        update("fontSize", Math.max(state.fontSize - 1, 0))
                      }
                    />
                    <Btn
                      icon={Contrast}
                      label="تباين عالي"
                      active={state.contrast === "high"}
                      onClick={() =>
                        update("contrast", state.contrast === "high" ? "default" : "high")
                      }
                    />
                    <Btn
                      icon={Eye}
                      label="خط دسليكسيا"
                      active={state.dyslexiaFont}
                      onClick={() => toggle("dyslexiaFont")}
                    />
                    <Btn
                      icon={MousePointer2}
                      label="مؤشر كبير"
                      active={state.cursor === "big"}
                      onClick={() =>
                        update("cursor", state.cursor === "big" ? "default" : "big")
                      }
                    />
                    <Btn
                      icon={Link2}
                      label="إبراز الروابط"
                      active={state.highlightLinks}
                      onClick={() => toggle("highlightLinks")}
                    />
                    <Btn
                      icon={MoveHorizontal}
                      label="دليل القراءة"
                      active={state.readingGuide}
                      onClick={() => toggle("readingGuide")}
                    />
                    <Btn
                      icon={PauseCircle}
                      label="إيقاف الحركة"
                      active={state.stopAnimations}
                      onClick={() => toggle("stopAnimations")}
                    />
                    <Btn
                      icon={speaking ? StopCircle : Volume2}
                      label={speaking ? "إيقاف" : "قارئ الشاشة"}
                      active={speaking}
                      onClick={handleTTS}
                    />
                  </div>
                </>
              )}

              {activeSection === "text" && (
                <>
                  <Stepper
                    label="حجم الخط"
                    icon={Type}
                    value={FONT_SIZES[state.fontSize]}
                    min={FONT_SIZES[0]}
                    max={FONT_SIZES[FONT_SIZES.length - 1]}
                    onDec={() => update("fontSize", Math.max(state.fontSize - 1, 0))}
                    onInc={() =>
                      update("fontSize", Math.min(state.fontSize + 1, FONT_SIZES.length - 1))
                    }
                  />

                  <Stepper
                    label="ارتفاع السطر"
                    icon={MoveHorizontal}
                    value={LINE_HEIGHTS[state.lineHeight]}
                    min={LINE_HEIGHTS[0]}
                    max={LINE_HEIGHTS[LINE_HEIGHTS.length - 1]}
                    onDec={() => update("lineHeight", Math.max(state.lineHeight - 1, 0))}
                    onInc={() =>
                      update("lineHeight", Math.min(state.lineHeight + 1, LINE_HEIGHTS.length - 1))
                    }
                  />

                  <Stepper
                    label="تباعد الأحرف"
                    icon={TextCursorInput}
                    value={LETTER_SPACINGS[state.letterSpacing]}
                    min={0}
                    max={4}
                    onDec={() =>
                      update("letterSpacing", Math.max(state.letterSpacing - 1, 0))
                    }
                    onInc={() =>
                      update(
                        "letterSpacing",
                        Math.min(state.letterSpacing + 1, LETTER_SPACINGS.length - 1)
                      )
                    }
                  />

                  <div className="space-y-2 pt-1">
                    <p className="text-white/40 text-[10px]">محاذاة النص</p>

                    <div className="grid grid-cols-4 gap-1.5">
                      {["default", "right", "center", "left"].map((a) => (
                        <button
                          key={a}
                          onClick={() => update("textAlign", a)}
                          className={cls(
                            "py-2 rounded-lg text-xs font-bold transition-all border",
                            state.textAlign === a
                              ? "bg-primary text-white border-primary"
                              : "bg-card border-border/40 text-white/50 hover:text-white"
                          )}
                        >
                          {a === "default"
                            ? "افتراضي"
                            : a === "right"
                            ? "يمين"
                            : a === "center"
                            ? "وسط"
                            : "يسار"}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <Btn
                      icon={Eye}
                      label="خط دسليكسيا"
                      active={state.dyslexiaFont}
                      onClick={() => toggle("dyslexiaFont")}
                    />
                    <Btn
                      icon={Underline}
                      label="تسطير الروابط"
                      active={state.underlineLinks}
                      onClick={() => toggle("underlineLinks")}
                    />
                  </div>
                </>
              )}

              {activeSection === "display" && (
                <>
                  <p className="text-white/40 text-[10px] pb-1">وضع الألوان</p>

                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { val: "default", icon: Sun, label: "افتراضي" },
                      { val: "high", icon: Contrast, label: "تباين عالي" },
                      { val: "inverted", icon: Moon, label: "ألوان معكوسة" },
                      { val: "dark", icon: Moon, label: "خلفية سوداء" },
                      { val: "light", icon: Sun, label: "خلفية بيضاء" },
                    ].map(({ val, icon, label }) => (
                      <Btn
                        key={val}
                        icon={icon}
                        label={label}
                        active={state.contrast === val}
                        onClick={() => update("contrast", val)}
                      />
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <Btn
                      icon={EyeOff}
                      label="إخفاء الصور"
                      active={state.hideImages}
                      onClick={() => toggle("hideImages")}
                    />
                    <Btn
                      icon={Highlighter}
                      label="إبراز العناوين"
                      active={state.highlightHeadings}
                      onClick={() => toggle("highlightHeadings")}
                    />
                    <Btn
                      icon={Link2}
                      label="إبراز الروابط"
                      active={state.highlightLinks}
                      onClick={() => toggle("highlightLinks")}
                    />
                    <Btn
                      icon={Underline}
                      label="تسطير الروابط"
                      active={state.underlineLinks}
                      onClick={() => toggle("underlineLinks")}
                    />
                  </div>
                </>
              )}

              {activeSection === "tools" && (
                <>
                  <div className="grid grid-cols-2 gap-2">
                    <Btn
                      icon={MoveHorizontal}
                      label="دليل القراءة"
                      active={state.readingGuide}
                      onClick={() => toggle("readingGuide")}
                    />
                    <Btn
                      icon={PauseCircle}
                      label="إيقاف الحركة"
                      active={state.stopAnimations}
                      onClick={() => toggle("stopAnimations")}
                    />
                    <Btn
                      icon={MousePointer2}
                      label="مؤشر كبير"
                      active={state.cursor === "big"}
                      onClick={() =>
                        update("cursor", state.cursor === "big" ? "default" : "big")
                      }
                    />
                    <Btn
                      icon={Keyboard}
                      label="مؤشر قراءة"
                      active={state.cursor === "reading"}
                      onClick={() =>
                        update("cursor", state.cursor === "reading" ? "default" : "reading")
                      }
                    />
                    <Btn
                      icon={speaking ? StopCircle : Volume2}
                      label={speaking ? "إيقاف القراءة" : "قراءة الصفحة"}
                      active={speaking}
                      onClick={handleTTS}
                    />
                  </div>

                  <div className="bg-card/60 border border-border/30 rounded-xl p-3 text-white/40 text-[10px] leading-relaxed text-center">
                    قارئ الشاشة يقرأ نص الصفحة بصوت عالٍ باستخدام متصفحك.
                  </div>
                </>
              )}
            </div>

            <div className="px-4 py-3 border-t border-border/30 flex items-center justify-between">
              <button
                onClick={reset}
                className="flex items-center gap-1.5 text-white/40 hover:text-white text-xs transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                إعادة الضبط
              </button>

              <span className="text-white/20 text-[10px]">
                إمكانية الوصول WCAG 2.1
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}