"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Search, ClipboardCheck, Paintbrush, ShieldCheck, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const steps = [
    {
        icon: Search,
        title: "Consultation",
        desc: "We align with your architectural vision, lighting, and lifestyle requirements."
    },
    {
        icon: ClipboardCheck,
        title: "Sampling",
        desc: "On-site sampling to finalize texture and color under your natural light."
    },
    {
        icon: Zap,
        title: "Preparation",
        desc: "Substrate reinforcement and surface stabilization to ensure zero cracking."
    },
    {
        icon: Paintbrush,
        title: "Application",
        desc: "Artisanal, multi-layered hand troweled installation by master craftsmen."
    },
    {
        icon: ShieldCheck,
        title: "Handover",
        desc: "Protective high-grade sealing and final detailed quality assurance."
    }
];

const ProcessClient = () => {
    return (
        <div className="bg-white dark:bg-black text-black dark:text-white pt-40 pb-20 px-6 transition-colors duration-500">
            <div className="max-w-[1600px] mx-auto">
                <div className="text-center mb-32">
                    <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.4em]">The Methodology</span>
                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter mt-6 uppercase leading-[0.8] mb-12">
                        Architectural <br />
                        <span className="text-black/30 dark:text-white/40">Precision.</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-40">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="p-10 rounded-[3rem] bg-zinc-50 dark:bg-zinc-900 border border-black/5 dark:border-white/5 relative overflow-hidden group shadow-xl"
                        >
                            <span className="absolute -top-4 -right-4 text-9xl font-black text-black/5 dark:text-white/5 group-hover:text-[#d4af37]/10 transition-colors">0{i + 1}</span>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-[#d4af37]/10 rounded-2xl flex items-center justify-center text-[#d4af37] mb-8 group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-500">
                                    <step.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-6 tracking-tight uppercase leading-tight">{step.title}</h3>
                                <p className="text-black/40 dark:text-white/40 font-bold leading-relaxed text-[10px] uppercase tracking-widest">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="relative h-[70vh] rounded-[4rem] overflow-hidden mb-40">
                    <Image
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600"
                        alt="Process Execution"
                        fill
                        sizes="100vw"
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-[30s] scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center text-center p-6">
                        <div className="max-w-xl">
                            <h2 className="text-4xl md:text-7xl font-bold text-white mb-10 tracking-tighter uppercase leading-[0.9]">Quality as <br /> <span className="text-[#d4af37]">Standard.</span></h2>
                            <p className="text-white/70 font-light leading-relaxed text-xl mb-12">
                                Our master craftsmen undergo rigorous training to ensure every square foot of microcement is applied with absolute perfection.
                            </p>
                            <Link
                                href="/enquiry"
                                className="inline-block px-12 py-6 bg-[#d4af37] text-black rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-white transition-all shadow-2xl"
                            >
                                Book Site Visit
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProcessClient;
