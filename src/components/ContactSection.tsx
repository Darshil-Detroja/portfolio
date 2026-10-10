// src/components/ContactSection.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/darshildetroja@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Inquiry from ${formData.name} (${formData.email})`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        setSent(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Unable to submit transmission.');
      }
    } catch (err: unknown) {
      console.error('Contact submission error:', err);
      setErrorMessage(
        'Online submission failed. Please verify your connection or click below to send directly via email.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-12 sm:pt-16 pb-12 sm:pb-16 px-5 xs:px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-8">
            <div>
              {/* Eyebrow Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center space-x-4 mb-4 sm:mb-5"
              >
                <span
                  className="text-[10px] sm:text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  05 / CONTACT
                </span>
                <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-6 sm:mb-8"
              >
                <h2
                  className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                    CONNECT &amp;
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                    COLLABORATE.
                  </span>
                </h2>
              </motion.div>

              <p
                className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-relaxed max-w-md mb-6 sm:mb-8"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Open for software engineering roles, web development projects, AI/ML initiatives, or technical inquiries. Fill out the dispatch form and your message will be forwarded directly to my mailbox.
              </p>

              {/* Direct Channels Cards */}
              <div className="space-y-3">
                {/* Email */}
                <a
                  href="mailto:darshildetroja@gmail.com"
                  className="p-3 sm:p-3.5 rounded-sm border border-[#8C6D4F]/30 bg-[#100D0B] flex items-center justify-between group hover:border-[#D4AF37] transition-all duration-300 block"
                >
                  <div className="flex items-center space-x-2.5 sm:space-x-3">
                    <span className="text-[9.5px] sm:text-[10px] font-mono text-[#D4AF37]">EMAIL //</span>
                    <span className="text-xs text-[#E8DFD8] group-hover:text-white transition-colors break-all" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      darshildetroja@gmail.com
                    </span>
                  </div>
                  <span className="text-xs text-[#8C6D4F] group-hover:text-[#D4AF37] transition-colors shrink-0 ml-2">↗</span>
                </a>

                {/* Phone */}
                <a
                  href="tel:+918488002969"
                  className="p-3 sm:p-3.5 rounded-sm border border-[#8C6D4F]/30 bg-[#100D0B] flex items-center justify-between group hover:border-[#D4AF37] transition-all duration-300 block"
                >
                  <div className="flex items-center space-x-2.5 sm:space-x-3">
                    <span className="text-[9.5px] sm:text-[10px] font-mono text-[#D4AF37]">PHONE //</span>
                    <span className="text-xs text-[#E8DFD8] group-hover:text-white transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      (+91) 8488002969
                    </span>
                  </div>
                  <span className="text-xs text-[#8C6D4F] group-hover:text-[#D4AF37] transition-colors shrink-0 ml-2">↗</span>
                </a>

                {/* Location */}
                <div className="p-3 sm:p-3.5 rounded-sm border border-[#8C6D4F]/20 bg-[#0C0A08] flex items-center justify-between">
                  <div className="flex items-center space-x-2.5 sm:space-x-3">
                    <span className="text-[9.5px] sm:text-[10px] font-mono text-[#8C6D4F]">LOCATION //</span>
                    <span className="text-xs text-[#B3A497]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      Morbi-363642, Gujarat, India
                    </span>
                  </div>
                  <span className="text-[9.5px] sm:text-[10px] font-mono text-[#8C6D4F] shrink-0 ml-2">IND</span>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="flex items-center gap-3 pt-5 sm:pt-6">
                <a
                  href="https://github.com/Darshil-Detroja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 sm:px-4 text-center rounded-sm border border-[#8C6D4F]/40 bg-[#120F0C] hover:border-[#D4AF37] hover:bg-[#1A1510] text-[#E8DFD8] hover:text-[#F7E7C4] text-[10px] font-medium tracking-[0.2em] uppercase transition-all duration-300"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  GITHUB ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/darshil-detroja-tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 sm:px-4 text-center rounded-sm border border-[#8C6D4F]/40 bg-[#120F0C] hover:border-[#D4AF37] hover:bg-[#1A1510] text-[#E8DFD8] hover:text-[#F7E7C4] text-[10px] font-medium tracking-[0.2em] uppercase transition-all duration-300"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  LINKEDIN ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Monolith Terminal Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-sm border border-[#8C6D4F]/40 bg-[#0A0806] p-5 xs:p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {/* Top Gold Horizon Edge */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
            
            {/* Precision Corner Crosshairs */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/60" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#D4AF37]/60" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#D4AF37]/60" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/60" />

            {sent ? (
              <div className="py-12 sm:py-14 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37] text-xl font-bold shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                  ✓
                </div>
                <h3 className="text-2xl sm:text-3xl text-white font-normal uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  TRANSMISSION DELIVERED
                </h3>
                <p className="text-xs sm:text-[13px] text-[#A8988B] font-light max-w-md mx-auto leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Your message was sent successfully to <span className="text-[#F7E7C4] font-medium">darshildetroja@gmail.com</span>. Darshil will review your inquiry and follow up shortly.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setErrorMessage(null);
                    }}
                    className="px-6 py-2.5 text-[10px] font-mono uppercase tracking-[0.2em] text-[#D4AF37] border border-[#8C6D4F]/50 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all rounded-sm"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                
                {errorMessage && (
                  <div className="p-3.5 rounded-sm border border-red-500/40 bg-red-950/20 text-red-300 text-xs flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span>{errorMessage}</span>
                    <a
                      href={`mailto:darshildetroja@gmail.com?subject=Portfolio Inquiry from ${formData.name}&body=${encodeURIComponent(formData.message)}`}
                      className="underline text-[#D4AF37] shrink-0 hover:text-white"
                    >
                      Open Email App ↗
                    </a>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <span className="block text-[9px] sm:text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-1.5 sm:mb-2">
                      // SENDER NAME
                    </span>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-base md:text-xs text-white placeholder-[#8C6D4F]/50 px-3.5 sm:px-4 py-3 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>

                  <div>
                    <span className="block text-[9px] sm:text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-1.5 sm:mb-2">
                      // SENDER EMAIL
                    </span>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-base md:text-xs text-white placeholder-[#8C6D4F]/50 px-3.5 sm:px-4 py-3 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>
                </div>

                <div>
                  <span className="block text-[9px] sm:text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-1.5 sm:mb-2">
                    // MESSAGE CONTENT
                  </span>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, opportunity, or collaboration idea..."
                    className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-base md:text-xs text-white placeholder-[#8C6D4F]/50 p-3.5 sm:p-4 outline-none rounded-sm transition-colors resize-none"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 border border-[#8C6D4F]/50 bg-[#14100D] hover:border-[#D4AF37] hover:bg-[#1A1510] text-[#E8DFD8] hover:text-[#F7E7C4] disabled:opacity-60 disabled:cursor-not-allowed text-xs font-medium tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center justify-center space-x-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
                      <span>TRANSMITTING TO DARSHIL...</span>
                    </>
                  ) : (
                    <>
                      <span>EXECUTE DISPATCH TO DARSHIL</span>
                      <span className="text-xs">↗</span>
                    </>
                  )}
                </button>

              </form>
            )}
          </motion.div>

        </div>

        {/* System Footer Line */}
        <div className="pt-12 sm:pt-16 mt-12 sm:mt-16 border-t border-[#8C6D4F]/15 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-3 sm:gap-4">
          <span className="text-[9.5px] sm:text-[10px] font-mono tracking-widest text-[#8C6D4F] uppercase">
            DARSHIL DETROJA // PORTFOLIO 2026
          </span>
          <span className="text-[9.5px] sm:text-[10px] font-mono text-[#8C6D4F]">
            © {new Date().getFullYear()} DARSHIL DETROJA • ENGINEERED WITH PRECISION
          </span>
        </div>

      </div>
    </footer>
  );
};

export default ContactSection;