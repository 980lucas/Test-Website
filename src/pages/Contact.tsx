import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    language: 'english',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your full name.';
    if (!formData.phone.trim()) newErrors.phone = 'Please enter your phone number.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^\\S+@\\S+\\.\\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.service) newErrors.service = 'Please select a service.';
    if (!formData.message.trim()) newErrors.message = 'Please enter a message.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', phone: '', email: '', language: 'english', service: '', message: '' });
    }, 1500);
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-300">
      {/* Header */}
      <div className="bg-black text-white py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(8,145,178,0.15)_0%,transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
          >
            Contact Us / Contáctenos
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
            Get in touch for a free estimate or to schedule a service. We respond quickly!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">Get in Touch Directly</h2>
            <p className="text-lg text-slate-400 mb-10 font-medium leading-relaxed">
              For the fastest response, please call us directly. We are ready to help with your commercial cleaning, electrical, or pressure washing needs.
            </p>

            <div className="bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-800 space-y-10">
              <div className="flex items-start">
                <div className="bg-slate-950 p-4 rounded-full mr-5 shrink-0 border border-slate-800 shadow-inner">
                  <Phone className="w-7 h-7 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Phone / Teléfono</h3>
                  <a href="tel:704-256-5045" className="text-2xl text-cyan-400 font-bold hover:text-cyan-300 transition-colors">
                    704-256-5045
                  </a>
                  <p className="text-sm text-slate-500 mt-2 font-medium">Call or text us anytime.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-slate-950 p-4 rounded-full mr-5 shrink-0 border border-slate-800 shadow-inner">
                  <Mail className="w-7 h-7 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Email / Correo</h3>
                  <a href="mailto:getsemanim22@gmail.com" className="text-lg text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                    getsemanim22@gmail.com
                  </a>
                  <p className="text-sm text-slate-500 mt-2 font-medium">We typically reply within 24 hours.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-slate-950 p-4 rounded-full mr-5 shrink-0 border border-slate-800 shadow-inner">
                  <Clock className="w-7 h-7 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Fast Response</h3>
                  <p className="text-slate-400 font-medium leading-relaxed">
                    We understand that business needs are urgent. We strive to provide fast, reliable responses to all inquiries.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-slate-950 p-4 rounded-full mr-5 shrink-0 border border-slate-800 shadow-inner">
                  <MapPin className="w-7 h-7 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Service Area / Área de Servicio</h3>
                  <p className="text-slate-400 font-medium leading-relaxed">
                    Proudly serving the local community and surrounding regions.
                  </p>
                </div>
              </div>

              <div className="bg-slate-950 border border-cyan-500/30 p-5 rounded-xl flex items-center justify-center shadow-inner">
                <span className="text-cyan-400 font-bold text-xl tracking-wide">¡Se habla español!</span>
              </div>
            </div>
          </div>

          {/* Quote / Estimate Form */}
          <div id="quote-form">
            <div className="bg-slate-900 p-8 md:p-10 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-slate-800">
              <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Free Estimate – No Obligation</h2>
              <p className="text-slate-400 mb-10 font-medium">Cotización Gratis – Sin Compromiso</p>

              {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-slate-950 border border-cyan-500/50 p-10 rounded-xl text-center shadow-inner"
                >
                  <CheckCircle2 className="w-20 h-20 text-cyan-400 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Message Sent!</h3>
                  <p className="text-slate-400 font-medium text-lg mb-8">
                    Thank you for reaching out. We will get back to you as soon as possible.
                  </p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="inline-flex items-center justify-center px-6 py-3 text-lg font-bold rounded-md bg-slate-800 text-cyan-400 hover:bg-slate-700 transition-colors border border-slate-700 hover:border-cyan-500/50"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="bg-slate-950 border-l-4 border-cyan-500 p-6 rounded-r-md mb-8 shadow-inner">
                    <p className="text-slate-300 font-medium mb-3 leading-relaxed">
                      Need immediate assistance? Call us directly at <a href="tel:704-256-5045" className="font-bold text-cyan-400 hover:text-cyan-300 transition-colors">704-256-5045</a>. We guarantee fast response times!
                    </p>
                    <p className="text-cyan-500 font-bold text-lg tracking-wide">¡Se habla español!</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wider">
                        Full Name / Nombre
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 bg-slate-950 text-white rounded-lg border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-800 focus:ring-cyan-500 focus:border-cyan-500'} focus:ring-2 outline-none transition-all shadow-inner placeholder-slate-600 font-medium`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-2 flex items-center font-medium"><AlertCircle className="w-4 h-4 mr-1"/>{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wider">
                        Phone / Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 bg-slate-950 text-white rounded-lg border ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-slate-800 focus:ring-cyan-500 focus:border-cyan-500'} focus:ring-2 outline-none transition-all shadow-inner placeholder-slate-600 font-medium`}
                        placeholder="(704) 555-0123"
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-sm mt-2 flex items-center font-medium"><AlertCircle className="w-4 h-4 mr-1"/>{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wider">
                        Email / Correo Electrónico
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 bg-slate-950 text-white rounded-lg border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-800 focus:ring-cyan-500 focus:border-cyan-500'} focus:ring-2 outline-none transition-all shadow-inner placeholder-slate-600 font-medium`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-2 flex items-center font-medium"><AlertCircle className="w-4 h-4 mr-1"/>{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="language" className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wider">
                        Preferred Language / Idioma Preferido
                      </label>
                      <select
                        id="language"
                        value={formData.language}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-slate-950 text-white rounded-lg border border-slate-800 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all shadow-inner font-medium appearance-none"
                      >
                        <option value="english">English</option>
                        <option value="spanish">Español</option>
                        <option value="both">Either / Cualquiera</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wider">
                      Service Needed / Servicio Necesitado
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 bg-slate-950 text-white rounded-lg border ${errors.service ? 'border-red-500 focus:ring-red-500' : 'border-slate-800 focus:ring-cyan-500 focus:border-cyan-500'} focus:ring-2 outline-none transition-all shadow-inner font-medium appearance-none`}
                    >
                      <option value="">Select a service...</option>
                      <option value="commercial-cleaning">Commercial Cleaning (Restaurants, etc.)</option>
                      <option value="electrical">Electrical Services</option>
                      <option value="pressure-washing">Pressure Washing</option>
                      <option value="other">Other / Multiple Services</option>
                    </select>
                    {errors.service && (
                      <p className="text-red-400 text-sm mt-2 flex items-center font-medium"><AlertCircle className="w-4 h-4 mr-1"/>{errors.service}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wider">
                      Message / Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 bg-slate-950 text-white rounded-lg border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-800 focus:ring-cyan-500 focus:border-cyan-500'} focus:ring-2 outline-none transition-all shadow-inner resize-none placeholder-slate-600 font-medium`}
                      placeholder="Tell us about your project or issue..."
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-2 flex items-center font-medium"><AlertCircle className="w-4 h-4 mr-1"/>{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full flex items-center justify-center px-8 py-5 text-xl font-bold rounded-lg bg-cyan-600 text-white hover:bg-cyan-500 transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)] hover:shadow-[0_0_30px_rgba(8,145,178,0.6)] disabled:opacity-70 disabled:hover:shadow-[0_0_20px_rgba(8,145,178,0.4)]"
                  >
                    {formStatus === 'submitting' ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-6 h-6 mr-3" />
                        Request Quote / Solicitar Cotización
                      </>
                    )}
                  </button>
                  <p className="text-sm text-center text-slate-500 mt-6 font-medium">
                    We respect your privacy. Your information is secure.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-black py-24 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-400 font-medium">Preguntas Frecuentes</p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Do you offer free estimates?",
                a: "Yes! We provide free, no-obligation estimates for all of our services. Just give us a call or fill out the form above."
              },
              {
                q: "What areas do you serve?",
                a: "We serve the local community and surrounding areas. Please call us at 704-256-5045 to confirm if we can come to your specific location."
              },
              {
                q: "Do you work with restaurants?",
                a: "Absolutely. Commercial cleaning for restaurants is one of our specialties. We understand the strict health and safety standards required for commercial kitchens and dining areas."
              },
              {
                q: "What languages do you speak?",
                a: "We are a bilingual team! We speak both English and Spanish (¡Se habla español!) to ensure clear communication with all our clients."
              },
              {
                q: "How quickly can you start?",
                a: "We pride ourselves on fast response times. Depending on the size of the job and our current schedule, we can often start within a few days, or even sooner for urgent electrical issues."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-900 p-8 rounded-xl border border-slate-800 shadow-lg hover:border-cyan-500/30 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{faq.q}</h3>
                <p className="text-slate-400 font-medium leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
