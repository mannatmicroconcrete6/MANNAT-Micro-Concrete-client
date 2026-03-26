"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Diamond, Award } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const reasons = [
    {
        icon: Diamond,
        title: "Seamless Finish",
        desc: "End-to-end monolithic continuity that expands your sense of space."
    },
    {
        icon: ShieldCheck,
        title: "High Durability",
        desc: "Impact resistant and flexible surfaces designed for decades of use."
    },
    {
        icon: Zap,
        title: "Expert Preparation",
        desc: "Multi-stage substrate treatment ensuring perfect adhesion and zero cracks."
    },
    {
        icon: Award,
        title: "Premium Sealing",
        desc: "Multi-layer protective coatings for stain resistance and easy cleaning."
    }
];

const WhyMannat = () => {
    return (
        <section className="py-32 px-6 bg-zinc-50 dark:bg-[#080808] transition-colors duration-500">
            <div className="max-w-[1600px] mx-auto">
                <Reveal width="100%">
                    <div className="text-center mb-24 w-full">
                        <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.4em]">The Mannat Edge</span>
                        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-black dark:text-white mt-6 uppercase leading-[0.9]">
                            Luxury <span className="text-black/30 dark:text-white/30">Value.</span>
                        </h2>
                    </div>
                </Reveal>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-32">
                    {[
                        { label: 'Total Projects', value: '50+' },
                        { label: 'Technical Warranty', value: '2YR' },
                        { label: 'Client Satisfaction', value: '100%' },
                        { label: 'Service Network', value: 'Pan India' },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-transparent text-center group"
                        >
                            <h3 className="text-6xl md:text-8xl font-black text-black dark:text-white/10 group-hover:text-[#d4af37] transition-all duration-700 tracking-tighter mb-4">
                                {stat.value}
                            </h3>
                            <p className="text-[10px] uppercase tracking-[0.5em] font-black text-black/40 dark:text-white/30">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 1 }}
                            viewport={{ once: true }}
                            className="p-16 rounded-[4rem] glass border border-black/5 dark:border-white/5 shadow-2xl hover:border-[#d4af37]/30 transition-all duration-700 group hover:-translate-y-4"
                        >
                            <div className="w-20 h-20 bg-[#d4af37]/5 rounded-[2rem] flex items-center justify-center text-[#d4af37] mb-12 group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-700 group-hover:rotate-[15deg]">
                                <reason.icon size={40} strokeWidth={1} />
                            </div>
                            <h3 className="text-2xl font-bold mb-6 tracking-tighter uppercase text-black dark:text-white transition-colors">{reason.title}</h3>
                            <p className="text-black/40 dark:text-white/40 font-light leading-relaxed text-[11px] uppercase tracking-widest">
                                {reason.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyMannat;
