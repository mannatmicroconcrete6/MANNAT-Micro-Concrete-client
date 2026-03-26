"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, CheckCircle2, Zap, HelpCircle, FileText } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const WarrantyClient = () => {
    return (
        <div className="bg-white dark:bg-black text-black dark:text-white pt-40 pb-20 px-6 transition-colors duration-500">
            <div className="max-w-[1400px] mx-auto">
                {/* Hero section */}
                <div className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-20 h-20 bg-[#d4af37]/10 rounded-full flex items-center justify-center mx-auto mb-8 text-[#d4af37]"
                    >
                        <ShieldCheck size={40} />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.8] mb-10"
                    >
                        The Mannat <br />
                        <span className="text-black/30 dark:text-white/30">Assurance.</span>
                    </motion.h1>
                    <p className="text-xl font-light text-black/60 dark:text-white/60 max-w-2xl mx-auto leading-relaxed">
                        Luxury is not just how it looks today—it's how it performs for years. We stand behind every square inch of our artisanal execution.
                    </p>
                </div>

                {/* The 2-Year Promise */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-block px-6 py-2 bg-[#d4af37] text-black text-[10px] font-black uppercase tracking-widest rounded-full mb-8">
                            Certified Execution
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none mb-8">
                            2-Year <br />Comprehensive <br />Warranty.
                        </h2>
                        <p className="text-lg font-light text-black/60 dark:text-white/60 mb-10 leading-relaxed">
                            Unlike standard contractors who disappear after the project, Mannat provides a formal certificate of warranty. We cover structural adhesion, surface integrity, and artisanal consistency.
                        </p>

                        <div className="space-y-6">
                            {[
                                "Full Adhesion Guarantee (No peeling or delamination)",
                                "UV Stability (No yellowing under sunlight)",
                                "Resistance to standard household chemicals",
                                "Artisanal texture consistency"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                        <CheckCircle2 size={14} />
                                    </div>
                                    <span className="text-sm font-medium uppercase tracking-widest text-black/40 dark:text-white/40">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-square rounded-[4rem] overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1621293954908-907159247fc8"
                            alt="Quality Test"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-12">
                            <div className="text-center">
                                <Award size={80} className="text-[#d4af37] mx-auto mb-6" />
                                <span className="text-white text-3xl font-bold uppercase tracking-tighter">Gold Standard Installation</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Why We Are Confident */}
                <div className="mb-40">
                    <h3 className="text-3xl font-bold uppercase tracking-tighter mb-16 text-center">Engineered for Endurance</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: Zap,
                                title: "European Standards",
                                desc: "Our materials are tested against strict ISO standards for abrasion, impact, and chemical resistance."
                            },
                            {
                                icon: HelpCircle,
                                title: "Site-Specific Mix",
                                desc: "Every batch is mixed considering your local humidity and substrate type to prevent cracking."
                            },
                            {
                                icon: FileText,
                                title: "Documented Care",
                                desc: "Every project comes with a maintenance handbook to help you maintain the 'Day 1' look forever."
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-12 bg-zinc-50 dark:bg-zinc-900 rounded-[3rem] border border-black/5 dark:border-white/10 group hover:border-[#d4af37]/30 transition-all">
                                <item.icon className="text-[#d4af37] mb-8" size={32} />
                                <h4 className="text-xl font-bold uppercase tracking-tight mb-4">{item.title}</h4>
                                <p className="text-sm font-light text-black/40 dark:text-white/40 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final CTA */}
                <div className="p-16 md:p-24 bg-black text-white rounded-[4rem] text-center border border-white/10 shadow-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-10 opacity-10">
                        <ShieldCheck size={200} />
                    </div>
                    <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-10 relative z-10">
                        Ready for a <br />Life-Long Finish?
                    </h3>
                    <Link href="/enquiry" className="inline-flex items-center gap-4 px-12 py-6 bg-[#d4af37] text-black rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-all relative z-10">
                        Discuss your project <Zap size={16} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WarrantyClient;
