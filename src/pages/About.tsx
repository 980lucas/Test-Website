import { Link } from 'react-router-dom';
import { Users, ShieldCheck, HeartHandshake, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
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
            About Us / Sobre Nosotros
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
            The story of German Policarpo and the hardworking family behind Getsemani Multiservice.
          </p>
        </div>
      </div>

      {/* Main Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 tracking-tight">A Foundation of Hard Work and Honesty</h2>
            <div className="prose prose-lg prose-invert text-slate-400 space-y-6 font-medium leading-relaxed">
              <p>
                Getsemani Multiservice was founded by German Policarpo with a simple but powerful mission: to provide reliable, high-quality services to our local community. As a family-owned business, we understand the value of a dollar and the importance of trust.
              </p>
              <p>
                German brings years of hands-on experience, an unbeatable work ethic, and a deep sense of pride to every job. Whether he's deep-cleaning a bustling restaurant kitchen, fixing a complex electrical issue, or pressure washing a storefront to make it look brand new, German treats every property as if it were his own.
              </p>
              <p>
                We are proud to be a bilingual team. While German primarily speaks Spanish, his son works alongside him to ensure seamless communication in English. Together, they bridge the gap, ensuring that every client—English or Spanish speaking—receives clear, honest, and friendly service.
              </p>
              <div className="bg-slate-900 p-8 rounded-xl border-l-4 border-cyan-500 mt-10 shadow-lg">
                <p className="text-white font-bold italic mb-0 text-xl tracking-wide">
                  "Our reputation is built on doing the job right, being on time, and treating our customers like family."
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-slate-800 group">
              <img 
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800" 
                alt="Contractor working on site" 
                className="w-full h-full object-cover contrast-105 saturate-105 brightness-105 [image-rendering:high-quality]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-slate-900 p-6 rounded-xl shadow-2xl border border-slate-800 hidden md:block">
              <div className="flex items-center space-x-5">
                <div className="bg-slate-800 p-4 rounded-full border border-slate-700">
                  <HeartHandshake className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <p className="font-extrabold text-white text-lg">Family Owned</p>
                  <p className="text-sm text-cyan-500 font-semibold uppercase tracking-wider mt-1">Operated with pride</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-black py-24 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Our Core Values</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
              The principles that guide every job we take on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-10 rounded-xl bg-slate-900 hover:bg-slate-800 transition-colors border border-slate-800 hover:border-cyan-500/30 shadow-lg group">
              <div className="w-20 h-20 bg-slate-950 rounded-full flex items-center justify-center mx-auto mb-8 border border-slate-800 group-hover:border-cyan-500/50 transition-colors shadow-inner">
                <ShieldCheck className="w-10 h-10 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Trust & Reliability</h3>
              <p className="text-slate-400 font-medium leading-relaxed">
                We show up when we say we will, and we don't leave until the job is done right. You can count on us.
              </p>
            </div>

            <div className="text-center p-10 rounded-xl bg-slate-900 hover:bg-slate-800 transition-colors border border-slate-800 hover:border-cyan-500/30 shadow-lg group">
              <div className="w-20 h-20 bg-slate-950 rounded-full flex items-center justify-center mx-auto mb-8 border border-slate-800 group-hover:border-cyan-500/50 transition-colors shadow-inner">
                <Users className="w-10 h-10 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Community Focus</h3>
              <p className="text-slate-400 font-medium leading-relaxed">
                We are proud to serve local businesses and homeowners, helping our community shine and stay safe.
              </p>
            </div>

            <div className="text-center p-10 rounded-xl bg-slate-900 hover:bg-slate-800 transition-colors border border-slate-800 hover:border-cyan-500/30 shadow-lg group">
              <div className="w-20 h-20 bg-slate-950 rounded-full flex items-center justify-center mx-auto mb-8 border border-slate-800 group-hover:border-cyan-500/50 transition-colors shadow-inner">
                <HeartHandshake className="w-10 h-10 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Honest Pricing</h3>
              <p className="text-slate-400 font-medium leading-relaxed">
                No hidden fees or surprises. We provide clear, affordable estimates and deliver exceptional value.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(8,145,178,0.1)_0%,transparent_60%)]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">Let Our Family Help Yours</h2>
          <p className="text-xl text-slate-400 mb-12 font-medium">
            Experience the difference of working with a dedicated, hardworking team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="tel:704-256-5045"
              className="flex items-center justify-center px-8 py-4 text-xl font-bold rounded-md bg-cyan-600 text-white hover:bg-cyan-500 transition-all w-full sm:w-auto shadow-[0_0_20px_rgba(8,145,178,0.4)] hover:shadow-[0_0_30px_rgba(8,145,178,0.6)]"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call 704-256-5045
            </a>
            <Link
              to="/contact"
              className="flex items-center justify-center px-8 py-4 text-xl font-bold rounded-md border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-950/50 hover:border-cyan-400 transition-all w-full sm:w-auto shadow-lg"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
