import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Send,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const WHATSAPP_NUMBER = "972524849796";

export default function ContactSection() {
  const { t } = useLang();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone) return;

    setSending(true);

    // فتح واتساب بدل الإيميل
    const text = `الاسم: ${form.name}
رقم الهاتف: ${form.phone}
الخدمة: ${form.service}

${form.message}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");

    setTimeout(() => {
      setSent(true);
      setSending(false);
    }, 500);
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "مرحبا محمد، وصلت عن طريق موقعك وأريد الاستفسار عن خدماتك"
      )}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-20 px-4" dir={t.dir}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary font-bold text-sm mb-2">
            {t.contact.tag}
          </p>

          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            {t.contact.title}
          </h2>

          <p className="text-white/60 max-w-xl mx-auto whitespace-pre-line">
            {t.contact.sub}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* الجانب الأيسر */}
          <motion.div
            initial={{ opacity: 0, x: t.dir === "rtl" ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <button
              onClick={openWhatsApp}
              className="w-full flex items-center justify-center gap-3 bg-green-500 text-white font-black text-lg py-4 rounded-2xl hover:bg-green-400 transition-all"
            >
              <MessageCircle className="w-6 h-6" />
              {t.contact.whatsapp}
            </button>

            <a
              href="mailto:muhamed.muhsen27@gmail.com"
              className="flex items-center gap-4 bg-card border rounded-2xl p-4"
            >
              <Mail />
              <span className="text-white">
                muhamed.muhsen27@gmail.com
              </span>
            </a>

            <a
              href="tel:+972524849796"
              className="flex items-center gap-4 bg-card border rounded-2xl p-4"
            >
              <Phone />
              <span className="text-white">0524849796</span>
            </a>
          </motion.div>

          {/* الفورم */}
          <motion.div>
            {sent ? (
              <div className="text-center p-8 bg-card rounded-2xl">
                <CheckCircle className="mx-auto mb-4 text-primary" />
                <h3 className="text-white">{t.contact.sentTitle}</h3>
                <p className="text-white/60">{t.contact.sentSub}</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card p-6 rounded-2xl space-y-4"
              >
                <input
                  placeholder={t.contact.namePh}
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full p-3 rounded bg-muted text-white"
                />

                <input
                  placeholder={t.contact.phonePh}
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  className="w-full p-3 rounded bg-muted text-white"
                />

                <textarea
                  placeholder={t.contact.messagePh}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full p-3 rounded bg-muted text-white"
                />

                <button
                  type="submit"
                  className="w-full bg-primary py-3 rounded text-white"
                >
                  {sending ? t.contact.sending : t.contact.send}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}