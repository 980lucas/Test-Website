import { Link } from 'react-router-dom';
import { Sparkles, PlugZap, SprayCan, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
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
            Our Services / Nuestros Servicios
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
            Professional, reliable, and affordable solutions for your business and home.
          </p>
        </div>
      </div>

      {/* Service: Commercial Cleaning */}
      <section className="py-24 bg-slate-950" id="cleaning">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center justify-center px-5 py-2 bg-slate-900 border border-slate-800 text-cyan-400 rounded-full font-bold mb-8 shadow-inner">
                <Sparkles className="w-5 h-5 mr-3" />
                Commercial Cleaning
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">Deep Cleaning for Restaurants & Businesses</h2>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed font-medium">
                A clean environment is crucial for any business, especially restaurants. We specialize in deep cleaning commercial kitchens, dining areas, and facilities to ensure you meet health standards and leave a lasting positive impression on your customers.
              </p>
              
              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Key Benefits:</h3>
              <ul className="space-y-4 mb-10">
                {[
                  "Safer, more sanitary environment for staff and guests",
                  "Compliance with health and safety regulations",
                  "Better customer impression and reviews",
                  "Extended life of kitchen equipment and flooring"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start bg-slate-900/50 p-4 rounded-lg border border-slate-800/50">
                    <CheckCircle className="w-6 h-6 text-cyan-500 mr-4 shrink-0" />
                    <span className="text-slate-300 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Example Tasks:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-lg hover:border-cyan-500/30 transition-colors">
                  <p className="font-bold text-white text-lg mb-2">Kitchen Deep Clean</p>
                  <p className="text-sm text-slate-400 font-medium">Hoods, fryers, ovens, and prep areas.</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-lg hover:border-cyan-500/30 transition-colors">
                  <p className="font-bold text-white text-lg mb-2">Floor Sanitation</p>
                  <p className="text-sm text-slate-400 font-medium">Degreasing, scrubbing, and polishing.</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-lg hover:border-cyan-500/30 transition-colors">
                  <p className="font-bold text-white text-lg mb-2">Dining Areas</p>
                  <p className="text-sm text-slate-400 font-medium">Tables, chairs, windows, and high-touch surfaces.</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-lg hover:border-cyan-500/30 transition-colors">
                  <p className="font-bold text-white text-lg mb-2">Restrooms</p>
                  <p className="text-sm text-slate-400 font-medium">Complete sanitization and restocking.</p>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-md bg-cyan-600 text-white hover:bg-cyan-500 transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)] hover:shadow-[0_0_30px_rgba(8,145,178,0.6)]"
              >
                Request a Cleaning Quote <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-slate-800 relative group">
                <img 
                  src="https://media.istockphoto.com/id/1330730864/photo/janitor-cleaning-the-bathroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZczEDpT0woIZdzDgSiQT5yHfyHALjqZq0pa8z-Y6kmk=" 
                  alt="Worker cleaning sink with blue gloves" 
                  className="w-full h-full object-cover contrast-105 saturate-105 brightness-105 [image-rendering:high-quality]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service: Electrical Services */}
      <section className="py-24 bg-black border-y border-slate-800" id="electrical">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-slate-800 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800" 
                  alt="Electrician actively working on an electrical panel" 
                  className="w-full h-full object-cover contrast-105 saturate-105 brightness-105 [image-rendering:high-quality]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div>
              <div className="inline-flex items-center justify-center px-5 py-2 bg-slate-900 border border-slate-800 text-cyan-400 rounded-full font-bold mb-8 shadow-inner">
                <PlugZap className="w-5 h-5 mr-3" />
                Electrical Services
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">Safe & Reliable Electrical Work</h2>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed font-medium">
                Electrical issues can be dangerous and disruptive. We provide basic electrical work, repairs, and installations for both commercial and residential properties, prioritizing safety and reliability above all else.
              </p>
              
              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Key Benefits:</h3>
              <ul className="space-y-4 mb-10">
                {[
                  "Peace of mind knowing the job is done safely",
                  "Reduced risk of fire or electrical hazards",
                  "Fast response to minimize business downtime",
                  "Properly installed fixtures that last longer"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start bg-slate-900/50 p-4 rounded-lg border border-slate-800/50">
                    <CheckCircle className="w-6 h-6 text-cyan-500 mr-4 shrink-0" />
                    <span className="text-slate-300 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Example Tasks:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-lg hover:border-cyan-500/30 transition-colors">
                  <p className="font-bold text-white text-lg mb-2">Lighting Installation</p>
                  <p className="text-sm text-slate-400 font-medium">Indoor, outdoor, and security lighting.</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-lg hover:border-cyan-500/30 transition-colors">
                  <p className="font-bold text-white text-lg mb-2">Outlet & Switch Repair</p>
                  <p className="text-sm text-slate-400 font-medium">Fixing faulty or outdated connections.</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-lg hover:border-cyan-500/30 transition-colors">
                  <p className="font-bold text-white text-lg mb-2">Basic Troubleshooting</p>
                  <p className="text-sm text-slate-400 font-medium">Identifying and resolving circuit issues.</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-lg hover:border-cyan-500/30 transition-colors">
                  <p className="font-bold text-white text-lg mb-2">Appliance Hookups</p>
                  <p className="text-sm text-slate-400 font-medium">Safe connections for commercial equipment.</p>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-md bg-cyan-600 text-white hover:bg-cyan-500 transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)] hover:shadow-[0_0_30px_rgba(8,145,178,0.6)]"
              >
                Call for Electrical Help <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service: Pressure Washing */}
      <section className="py-24 bg-slate-950" id="pressure-washing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center justify-center px-5 py-2 bg-slate-900 border border-slate-800 text-cyan-400 rounded-full font-bold mb-8 shadow-inner">
                <SprayCan className="w-5 h-5 mr-3" />
                Pressure Washing
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">Powerful Exterior Cleaning</h2>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed font-medium">
                First impressions matter. Our high-powered pressure washing services remove years of dirt, grime, and grease from your property's exterior, instantly boosting curb appeal and preventing slip hazards.
              </p>
              
              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Key Benefits:</h3>
              <ul className="space-y-4 mb-10">
                {[
                  "Dramatically improved appearance and curb appeal",
                  "Removal of slippery algae, moss, and grease for safety",
                  "Prevention of long-term damage to concrete and siding",
                  "Preparation for painting or sealing"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start bg-slate-900/50 p-4 rounded-lg border border-slate-800/50">
                    <CheckCircle className="w-6 h-6 text-cyan-500 mr-4 shrink-0" />
                    <span className="text-slate-300 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Example Tasks:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-lg hover:border-cyan-500/30 transition-colors">
                  <p className="font-bold text-white text-lg mb-2">Sidewalks & Walkways</p>
                  <p className="text-sm text-slate-400 font-medium">Removing gum, dirt, and stains.</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-lg hover:border-cyan-500/30 transition-colors">
                  <p className="font-bold text-white text-lg mb-2">Building Exteriors</p>
                  <p className="text-sm text-slate-400 font-medium">Washing siding, brick, and stucco.</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-lg hover:border-cyan-500/30 transition-colors">
                  <p className="font-bold text-white text-lg mb-2">Drive-Thrus & Parking</p>
                  <p className="text-sm text-slate-400 font-medium">Heavy grease and oil removal.</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-lg hover:border-cyan-500/30 transition-colors">
                  <p className="font-bold text-white text-lg mb-2">Patios & Decks</p>
                  <p className="text-sm text-slate-400 font-medium">Restoring outdoor seating areas.</p>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-md bg-cyan-600 text-white hover:bg-cyan-500 transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)] hover:shadow-[0_0_30px_rgba(8,145,178,0.6)]"
              >
                Get a Washing Estimate <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-slate-800 relative group">
                <img 
                  src="https://media.istockphoto.com/id/1372306644/photo/man-cleaning-the-terrace-with-high-pressure-cleaner.webp?a=1&b=1&s=612x612&w=0&k=20&c=cZTQcWe9tavFNSDnru64QWvEC1TjDLA9TiolJYHJIQ0=" 
                  alt="Pressure washing concrete surface" 
                  className="w-full h-full object-cover contrast-105 saturate-105 brightness-105 [image-rendering:high-quality]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
