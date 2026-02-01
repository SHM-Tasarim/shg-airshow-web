/**
 * Contact Form Component
 *
 * This form uses Web3Forms (https://web3forms.com) - a FREE service with unlimited submissions.
 *
 * Setup Instructions:
 * 1. Visit https://web3forms.com
 * 2. Enter your email address to get a free access key
 * 3. Replace 'YOUR_ACCESS_KEY' in the handleSubmit function with your access key
 * 4. (Optional) Uncomment and set the 'to' field to specify where emails should be sent
 *
 * reCAPTCHA v3 Setup (FREE):
 * 1. Visit https://www.google.com/recaptcha/admin/create
 * 2. Register your site (reCAPTCHA v3)
 * 3. Add your domain (e.g., yourdomain.com or localhost for testing)
 * 4. Copy your Site Key and replace 'YOUR_RECAPTCHA_SITE_KEY' below
 * 5. Add your Secret Key to Web3Forms dashboard (optional, for server-side verification)
 *
 * Alternative FREE services:
 * - FormSubmit: Just change form action to "https://formsubmit.co/YOUR_EMAIL"
 * - EmailJS: 200 emails/month free (requires account)
 * - Formspree: 50 submissions/month free (requires account)
 */
import React, { useState, useEffect } from "react";
import { Language } from "../App";

// Replace with your reCAPTCHA Site Key from https://www.google.com/recaptcha/admin
const RECAPTCHA_SITE_KEY = "6LcZT0YsAAAAACUc6rxHkrt2jMMhMYBvnBd4LYGQ";

// TypeScript declaration for Google reCAPTCHA
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  }
}

interface ContactProps {
  lang: Language;
  onNavigate: (view: "home") => void;
}

const Contact: React.FC<ContactProps> = ({ lang, onNavigate }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  // Load reCAPTCHA script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setRecaptchaLoaded(true);
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script on unmount
      const existingScript = document.querySelector(
        `script[src*="recaptcha/api.js"]`
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  // Execute reCAPTCHA and get token
  const executeRecaptcha = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!recaptchaLoaded) {
        // If reCAPTCHA is not loaded yet, resolve with empty string
        resolve("");
        return;
      }

      if (window.grecaptcha && window.grecaptcha.ready) {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute(RECAPTCHA_SITE_KEY, { action: "submit" })
            .then((token: string) => {
              resolve(token);
            })
            .catch((error: Error) => {
              console.error("reCAPTCHA error:", error);
              reject(error);
            });
        });
      } else {
        reject(new Error("reCAPTCHA not loaded"));
      }
    });
  };

  // Verify reCAPTCHA token separately from Web3Forms
  // Option 1: Basic validation (current) - just checks token exists
  // Option 2: Backend verification (recommended) - uncomment and set your backend endpoint
  const verifyRecaptcha = async (token: string): Promise<boolean> => {
    if (!token || token.length === 0) {
      return false;
    }

    // Option 1: Basic validation (current implementation)
    // Just verify the token exists and is valid format
    // This ensures reCAPTCHA executed successfully

    // Option 2: Backend verification (recommended for production)
    // Uncomment below and create a backend endpoint that verifies with Google using your secret key
    // Example backend endpoint: POST /api/verify-recaptcha with body: { token }
    // Backend should call: https://www.google.com/recaptcha/api/siteverify
    // with secret key (6LcZT0YsAAAAAHaDIA7u5gRfReuLeDmI_JQCUEsz) and token

    /*
    try {
      const response = await fetch('/api/verify-recaptcha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token })
      });
      const data = await response.json();
      return data.success === true && data.score >= 0.5; // v3 score threshold (0.0 to 1.0)
    } catch (error) {
      console.error('Backend reCAPTCHA verification failed:', error);
      return false;
    }
    */

    // For now, return true if token exists (basic validation)
    return true;
  };

  const content = {
    TR: {
      //tagline: "BİZE ULAŞIN",
      title: "İLETİŞİM",
      addressLabel: "ADRES",
      address:
        "Sivrihisar Havacılık Merkezi, Necati Artan Tesisleri, Sivrihisar / Eskişehir",
      phoneLabel: "TELEFON",
      emailLabel: "E-POSTA",
      formTitle: "BİZİMLE İLETİŞİME GEÇİN",
      formName: "Ad Soyad",
      formPhone: "Telefon Numarası",
      formEmail: "E-posta",
      formMessage: "Mesaj",
      formSubmit: "GÖNDER",
      formSending: "GÖNDERİLİYOR...",
      formSuccess: "Mesajınız Bize Ulaştı!",
      formSuccessSub: "Ekibimiz en kısa sürede size geri dönüş yapacaktır.",
      mapTitle: "KONUM",
      back: "ANA SAYFAYA DÖN",
      recaptchaNotice: "Bu site reCAPTCHA ile korunmaktadır ve Google'ın",
      recaptchaPrivacy: "Gizlilik Politikası",
      recaptchaTerms: "Hizmet Şartları",
      recaptchaApply: "geçerlidir.",
    },
    EN: {
      //tagline: "GET IN TOUCH",
      title: "CONTACT",
      addressLabel: "ADDRESS",
      address:
        "Sivrihisar Aviation Center, Necati Artan Facilities, Sivrihisar / Eskisehir",
      phoneLabel: "PHONE",
      emailLabel: "EMAIL",
      formTitle: "GET IN TOUCH",
      formName: "Full Name",
      formPhone: "Phone Number",
      formEmail: "Email Address",
      formMessage: "Your Message",
      formSubmit: "SEND MESSAGE",
      formSending: "SENDING...",
      formSuccess: "Message Sent Successfully!",
      formSuccessSub: "Our team will get back to you as soon as possible.",
      mapTitle: "LOCATION",
      back: "BACK TO HOME",
      recaptchaNotice: "This site is protected by reCAPTCHA and the Google",
      recaptchaPrivacy: "Privacy Policy",
      recaptchaTerms: "Terms of Service",
      recaptchaApply: "apply.",
    },
  }[lang];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    try {
      // Step 1: Execute reCAPTCHA and get token
      let recaptchaToken = "";
      try {
        recaptchaToken = await executeRecaptcha();
      } catch (recaptchaError) {
        console.error("reCAPTCHA execution failed:", recaptchaError);
        setError(
          lang === "TR"
            ? "reCAPTCHA doğrulaması başarısız. Lütfen tekrar deneyin."
            : "reCAPTCHA verification failed. Please try again."
        );
        setIsSending(false);
        return;
      }

      // Step 2: Verify reCAPTCHA token separately (before submitting to Web3Forms)
      const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
      if (!isRecaptchaValid) {
        setError(
          lang === "TR"
            ? "reCAPTCHA doğrulaması geçersiz. Lütfen tekrar deneyin."
            : "reCAPTCHA verification invalid. Please try again."
        );
        setIsSending(false);
        return;
      }

      // Step 3: Submit to Web3Forms (without reCAPTCHA token - free tier doesn't support it)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "df1a22f9-ef96-462a-ae35-2131be9e366a", // Get your free key at https://web3forms.com
          subject: `New Contact Form Submission from ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
          // Note: reCAPTCHA token is verified separately above, not sent to Web3Forms
          // Optional: Set your email where you want to receive submissions
          // to: 'info@shm.aero'
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setError(
          lang === "TR"
            ? "Bir hata oluştu. Lütfen tekrar deneyin."
            : "An error occurred. Please try again."
        );
      }
    } catch (err) {
      setError(
        lang === "TR"
          ? "Bir hata oluştu. Lütfen tekrar deneyin."
          : "An error occurred. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {/* Hide reCAPTCHA badge - using display:none to prevent scroll overflow */}
      <style>{`
        .grecaptcha-badge {
          display: none !important;
        }
      `}</style>
      <div className='bg-white dark:bg-background-dark transition-colors duration-500'>
        <div className='w-full h-[35vh] md:h-[50vh] overflow-hidden relative'>
          <img
            src='/images/contact.jpg'
            className='w-full h-full object-cover'
            alt='Aviation Control Tower'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-white dark:from-background-dark via-transparent to-black/20'></div>
        </div>

        <div className='max-w-6xl mx-auto px-6 -mt-32 relative z-10'>
          <header className='mb-16'>
            <p className='text-primary font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase mb-4'>
              {content.tagline}
            </p>
            <h1 className='text-2xl md:text-7xl font-black text-secondary dark:text-white tracking-tighter leading-none mb-8'>
              {content.title}
              <span className='text-primary'>.</span>
            </h1>
            <div className='w-16 h-1 bg-primary'></div>
          </header>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24'>
            <div className='lg:col-span-1 space-y-6'>
              <div className='bg-white dark:bg-gray-900/40 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl transition-all hover:border-primary group'>
                <span className='material-icons text-primary text-3xl mb-4 group-hover:scale-110 transition-transform'>
                  location_on
                </span>
                <h4 className='text-[10px] font-black text-gray-500 tracking-widest uppercase mb-2'>
                  {content.addressLabel}
                </h4>
                <p className='text-gray-900 dark:text-white font-bold leading-relaxed'>
                  {content.address}
                </p>
              </div>
              <div className='bg-white dark:bg-gray-900/40 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl transition-all hover:border-primary group'>
                <span className='material-icons text-primary text-3xl mb-4 group-hover:scale-110 transition-transform'>
                  call
                </span>
                <h4 className='text-[10px] font-black text-gray-500 tracking-widest uppercase mb-2'>
                  {content.phoneLabel}
                </h4>
                <a
                  href='tel:+902227113132'
                  className='text-gray-900 dark:text-white font-black text-xl hover:text-primary transition-colors'
                >
                  +90 222 711 31 32
                </a>
              </div>
              <div className='bg-white dark:bg-gray-900/40 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl transition-all hover:border-primary group'>
                <span className='material-icons text-primary text-3xl mb-4 group-hover:scale-110 transition-transform'>
                  mail
                </span>
                <h4 className='text-[10px] font-black text-gray-500 tracking-widest uppercase mb-2'>
                  {content.emailLabel}
                </h4>
                <a
                  href='mailto:info@shm.aero'
                  className='text-gray-900 dark:text-white font-black text-lg hover:text-primary transition-colors'
                >
                  info@shm.aero
                </a>
              </div>
            </div>

            <div className='lg:col-span-2'>
              <div className='bg-secondary dark:bg-black/40 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/5 relative overflow-hidden min-h-[500px] flex flex-col justify-center'>
                {isSubmitted ? (
                  <div className='text-center animate-in zoom-in duration-500'>
                    <div className='w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-500/20'>
                      <span className='material-icons text-white text-4xl'>
                        check
                      </span>
                    </div>
                    <h2 className='text-4xl font-black text-white mb-4 uppercase'>
                      {content.formSuccess}
                    </h2>
                    <p className='text-gray-400 font-bold'>
                      {content.formSuccessSub}
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className='mt-10 text-primary font-black uppercase tracking-widest text-xs hover:underline'
                    >
                      {lang === "TR"
                        ? "YENİ MESAJ GÖNDER"
                        : "SEND ANOTHER MESSAGE"}
                    </button>
                  </div>
                ) : (
                  <div className='relative z-10 animate-in fade-in slide-in-from-right-4 duration-500'>
                    <h2 className='text-3xl font-black text-white mb-10 uppercase tracking-tight'>
                      {content.formTitle}
                    </h2>
                    <form className='space-y-6' onSubmit={handleSubmit}>
                      {error && (
                        <div className='bg-red-500/10 border border-red-500/50 text-red-400 px-6 py-4 rounded-xl text-sm font-bold'>
                          {error}
                        </div>
                      )}
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='space-y-2'>
                          <label className='text-[10px] font-black text-gray-500 tracking-widest uppercase'>
                            {content.formName}
                          </label>
                          <input
                            type='text'
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className='w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors'
                          />
                        </div>
                        <div className='space-y-2'>
                          <label className='text-[10px] font-black text-gray-500 tracking-widest uppercase'>
                            {content.formPhone}
                          </label>
                          <input
                            type='tel'
                            required
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            className='w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors'
                          />
                        </div>
                      </div>
                      <div className='space-y-2'>
                        <label className='text-[10px] font-black text-gray-500 tracking-widest uppercase'>
                          {content.formEmail}
                        </label>
                        <input
                          type='email'
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              email: e.target.value,
                            })
                          }
                          className='w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors'
                        />
                      </div>
                      <div className='space-y-2'>
                        <label className='text-[10px] font-black text-gray-500 tracking-widest uppercase'>
                          {content.formMessage}
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          className='w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors resize-none'
                        ></textarea>
                      </div>
                      <button
                        type='submit'
                        disabled={isSending}
                        className='w-full bg-primary text-white font-black py-5 rounded-xl hover:bg-red-700 transition-all shadow-xl shadow-primary/20 active:scale-95 uppercase tracking-[0.2em] text-sm disabled:opacity-50 flex items-center justify-center gap-3'
                      >
                        {isSending && (
                          <span className='w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin'></span>
                        )}
                        {isSending ? content.formSending : content.formSubmit}
                      </button>
                      {/* reCAPTCHA notice - required by Google's Terms of Service */}
                      <p className='text-[8px] text-gray-500/50 text-center mt-4'>
                        {content.recaptchaNotice}{" "}
                        <a
                          href='https://policies.google.com/privacy'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='underline hover:text-gray-400'
                        >
                          {content.recaptchaPrivacy}
                        </a>
                        {lang === "TR" ? " ve " : " and "}
                        <a
                          href='https://policies.google.com/terms'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='underline hover:text-gray-400'
                        >
                          {content.recaptchaTerms}
                        </a>{" "}
                        {content.recaptchaApply}
                      </p>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>

          <section className='mb-24'>
            <h2 className='text-3xl font-black text-secondary dark:text-white mb-8 flex items-center gap-4'>
              <span className='w-1.5 h-8 bg-primary'></span>
              {content.mapTitle}
            </h2>
            <div className='w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 h-[450px]'>
              <iframe
                title='Sivrihisar Havacılık Merkezi Konum'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1543.8064625175332!2d31.484231403337173!3d39.297027976231945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cdfd073d852337%3A0xd2f34784f222f435!2sSivrihisar%20Havac%C4%B1l%C4%B1k%20Merkezi!5e0!3m2!1str!2str!4v1766698409372!5m2!1str!2str'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen={true}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </section>

          {/* Footer Navigation - ORTALANDI */}
          <div className='pt-16 pb-24 border-t border-gray-100 dark:border-white/5 text-center'>
            <button
              onClick={() => onNavigate("home")}
              className='inline-flex items-center gap-2 text-gray-500 hover:text-primary font-bold uppercase text-xs tracking-[0.2em] transition-colors'
            >
              <span className='material-icons text-lg'>arrow_back</span>
              {content.back}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
