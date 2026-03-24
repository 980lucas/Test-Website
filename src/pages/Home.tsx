import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Star, Sparkles, PlugZap, SprayCan, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-300">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745a872e?auto=format&fit=crop&q=80&w=1920"
            alt="Commercial Restaurant Kitchen"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-white">
              Reliable Multiservice Solutions for Your Business & Home
              <span className="block text-cyan-400 mt-2 text-3xl md:text-4xl font-bold tracking-wide">
                Soluciones Confiables Para Su Negocio y Hogar
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-medium">
              Expert commercial cleaning, electrical services, and pressure washing. Family-owned, bilingual, and dedicated to quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="tel:704-256-5045"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-md text-white bg-cyan-600 hover:bg-cyan-500 transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)] hover:shadow-[0_0_30px_rgba(8,145,178,0.6)]"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now / Llame Ahora
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-md text-cyan-400 border-2 border-cyan-500/50 hover:bg-cyan-950/50 hover:border-cyan-400 transition-all"
              >
                Get Free Quote / Cotización Gratis
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">Welcome to Getsemani Multiservice</h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-8 font-medium">
              Led by German Policarpo, we are a hardworking, family-owned business committed to keeping your property safe, clean, and functioning perfectly. Whether you need a spotless restaurant kitchen, reliable electrical repairs, or a fresh exterior wash, our bilingual team (English & Spanish) is ready to deliver exceptional results you can trust.
            </p>
            <div className="inline-flex items-center justify-center px-6 py-2 bg-slate-800 border border-slate-700 text-cyan-400 rounded-full font-bold shadow-inner">
              <span className="mr-2">🤝</span> Family-Owned & Operated | ¡Se habla español!
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Our Core Services</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
              Professional solutions tailored to meet the high standards of local businesses and homeowners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-slate-900 rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(8,145,178,0.15)] transition-all p-8 border border-slate-800 hover:border-cyan-500/30 group">
              <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-950/50 transition-colors border border-slate-700 group-hover:border-cyan-500/30">
                <Sparkles className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Commercial Cleaning</h3>
              <p className="text-slate-400 mb-6 font-medium leading-relaxed">
                Specialized deep cleaning for restaurants, kitchens, and commercial spaces to ensure health standards and a pristine appearance.
              </p>
              <Link to="/services" className="inline-flex items-center text-cyan-400 font-bold hover:text-cyan-300 transition-colors">
                Learn more <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-slate-900 rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(8,145,178,0.15)] transition-all p-8 border border-slate-800 hover:border-cyan-500/30 group">
              <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-950/50 transition-colors border border-slate-700 group-hover:border-cyan-500/30">
                <PlugZap className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Electrical Services</h3>
              <p className="text-slate-400 mb-6 font-medium leading-relaxed">
                Safe and reliable electrical repairs, installations, and maintenance for your business or home by experienced professionals.
              </p>
              <Link to="/services" className="inline-flex items-center text-cyan-400 font-bold hover:text-cyan-300 transition-colors">
                Learn more <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-900 rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(8,145,178,0.15)] transition-all p-8 border border-slate-800 hover:border-cyan-500/30 group">
              <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-950/50 transition-colors border border-slate-700 group-hover:border-cyan-500/30">
                <SprayCan className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Pressure Washing</h3>
              <p className="text-slate-400 mb-6 font-medium leading-relaxed">
                Powerful exterior cleaning for sidewalks, buildings, and grease removal to improve safety and curb appeal instantly.
              </p>
              <Link to="/services" className="inline-flex items-center text-cyan-400 font-bold hover:text-cyan-300 transition-colors">
                Learn more <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-black border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white tracking-tight">Why Choose Getsemani Multiservice?</h2>
              <p className="text-slate-400 text-lg mb-10 font-medium leading-relaxed">
                We believe in doing the job right the first time. Our reputation is built on hard work, honesty, and delivering value to our community.
              </p>
              <ul className="space-y-6">
                {[
                  "Family-owned & operated with pride",
                  "Bilingual service (English & Spanish) for clear communication",
                  "Reliable & always on-time",
                  "Affordable, transparent pricing",
                  "Quality guaranteed on every job"
                ].map((item, i) => (
                  <li key={i} className="flex items-start bg-slate-900/50 p-4 rounded-lg border border-slate-800/50">
                    <CheckCircle className="w-6 h-6 text-cyan-500 mr-4 shrink-0" />
                    <span className="text-lg font-medium text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-slate-800 group">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
                alt="Professional working on electrical wiring"
                className="w-full h-full object-cover contrast-105 saturate-105 brightness-105 [image-rendering:high-quality]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">What Our Clients Say</h2>
            <p className="text-lg text-slate-400 font-medium">Don't just take our word for it.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria S.",
                role: "Restaurant Owner",
                text: "Getsemani Multiservice transformed our kitchen. Their deep cleaning is incredibly thorough, and they understand the health standards we need to meet. German and his son are a pleasure to work with."
              },
              {
                name: "David L.",
                role: "Local Business Owner",
                text: "We had an electrical issue that was disrupting our business. They responded quickly, fixed the problem safely, and the price was very fair. Highly recommended for any commercial needs."
              },
              {
                name: "Robert T.",
                role: "Homeowner",
                text: "The pressure washing service made my driveway and siding look brand new. They were on time, professional, and worked hard until the job was perfect. Great family business!"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-slate-900 p-8 rounded-xl border border-slate-800 relative shadow-lg">
                <div className="flex text-cyan-500 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-300 mb-8 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t border-slate-800 pt-4">
                  <p className="font-bold text-white text-lg">{testimonial.name}</p>
                  <p className="text-sm text-cyan-500 font-semibold uppercase tracking-wider mt-1">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-black border-t border-slate-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,145,178,0.1)_0%,transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">Ready to Get Started?</h2>
          <p className="text-xl mb-12 font-medium text-slate-400 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation estimate. Fast response times guaranteed!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="tel:704-256-5045"
              className="flex items-center justify-center px-8 py-4 text-xl font-bold rounded-md bg-cyan-600 text-white hover:bg-cyan-500 transition-all w-full sm:w-auto shadow-[0_0_20px_rgba(8,145,178,0.4)] hover:shadow-[0_0_30px_rgba(8,145,178,0.6)]"
            >
              <Phone className="w-6 h-6 mr-3" />
              704-256-5045
            </a>
            <Link
              to="/contact"
              className="flex items-center justify-center px-8 py-4 text-xl font-bold rounded-md bg-slate-800 border border-slate-700 text-white hover:bg-slate-700 hover:border-cyan-500/50 transition-all w-full sm:w-auto shadow-lg"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
