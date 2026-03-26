"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const testimonials = [
    {
        name: "Vikram Mehta",
        role: "Luxury Architect",
        text: "The finish provided by Mannat is unparalleled. Their attention to joint-less continuity transformed my client's penthouse into a monolithic work of art.",
        rating: 5
    },
    {
        name: "Sarah Hussain",
        role: "Home Owner, Dubai Hills",
        text: "Minimalist, durable, and absolutely stunning. We chose the satin finish for our flooring and it feels incredible underfoot. Perfection in every sq.ft.",
        rating: 5
    },
    {
        name: "Arjun Kapoor",
        role: "Interior Designer",
        text: "Finally, a microcement provider in India that understands European aesthetics and quality standards. Their execution team is highly professional.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className="py-32 px-6 bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
            <div className="max-w-[1600px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24">
                    <div>
                        <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.4em]">Client Reflections</span>
                        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-black dark:text-white mt-6 uppercase leading-[0.9]">
                            Trusted by <br />
                            <span className="text-black/30 dark:text-white/30">Visionaries.</span>
                        </h2>
                    </div>
                    <Link href="/reviews" className="text-black/40 dark:text-white/40 hover:text-[#d4af37] transition-all text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-2 group border-b border-black/5 dark:border-white/10 pb-2">
                        Read All Stories <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="p-12 rounded-[3.5rem] bg-zinc-50 dark:bg-zinc-900 border border-black/5 dark:border-white/5 relative group hover:bg-white dark:hover:bg-zinc-800 transition-all duration-700 shadow-xl"
                        >
                            <div className="absolute top-10 right-12 text-[#d4af37]/10 group-hover:text-[#d4af37]/20 transition-colors">
                                <Quote size={60} strokeWidth={1} />
                            </div>

                            <div className="flex gap-1 mb-8">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} size={14} fill="#d4af37" className="text-[#d4af37]" />
                                ))}
                            </div>

                            <p className="text-black/60 dark:text-white/60 text-lg font-light leading-relaxed mb-10 italic">
                                "{item.text}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center text-[#d4af37] font-bold">
                                    {item.name[0]}
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-black dark:text-white uppercase tracking-tight">{item.name}</h4>
                                    <p className="text-[10px] text-black/40 dark:text-white/40 uppercase tracking-widest font-black">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
