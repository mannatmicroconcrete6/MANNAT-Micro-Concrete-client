"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Info } from 'lucide-react';
import Link from 'next/link';

const ComparisonGrid = () => {
    const finishes = [
        {
            name: "Microcement",
            durability: "High",
            maintenance: "Very Low",
            waterproof: true,
            seamless: true,
            bestFor: "Floors, Walls, Wetrooms",
            href: "/services/microcement-flooring"
        },
        {
            name: "Venetian Plaster",
            durability: "Moderate",
            maintenance: "Low",
            waterproof: false,
            seamless: true,
            bestFor: "Feature Walls, Luxury Interiors",
            href: "/services/venetian-plaster"
        },
        {
            name: "Epoxy Technical",
            durability: "Industrial",
            maintenance: "Very Low",
            waterproof: true,
            seamless: true,
            bestFor: "Commercial, High-Traffic Retail",
            href: "/services/epoxy-coatings"
        },
        {
            name: "Lime Wash",
            durability: "Low/Patina",
            maintenance: "Moderate",
            waterproof: false,
            seamless: true,
            bestFor: "Eco-Friendly Matte Walls",
            href: "/services/lime-wash"
        }
    ];

    return (
        <section className="py-32 px-6 bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
            <div className="max-w-[1600px] mx-auto">
                <div className="text-center mb-24">
                    <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Surface Intelligence</span>
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.85] text-black dark:text-white">
                        Finish <br />
                        <span className="text-black/30 dark:text-white/30">Comparison.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {finishes.map((finish, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-zinc-50 dark:bg-zinc-900/30 p-10 rounded-[3rem] border border-black/5 dark:border-white/5 flex flex-col group hover:border-[#d4af37]/30 transition-all duration-500"
                        >
                            <h3 className="text-2xl font-bold uppercase tracking-tighter text-black dark:text-white mb-8 group-hover:text-[#d4af37] transition-colors">{finish.name}</h3>
                            
                            <div className="space-y-6 flex-grow">
                                <div className="flex justify-between items-center border-b border-black/5 dark:border-white/5 pb-4">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-black/30 dark:text-white/20">Durability</span>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">{finish.durability}</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-black/5 dark:border-white/5 pb-4">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-black/30 dark:text-white/20">Maintenance</span>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-black/60 dark:text-white/60">{finish.maintenance}</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-black/5 dark:border-white/5 pb-4">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-black/30 dark:text-white/20">Waterproof</span>
                                    {finish.waterproof ? <Check className="text-[#25D366]" size={14} /> : <X className="text-red-500/30" size={14} />}
                                </div>
                                <div className="flex flex-col gap-2 pt-2">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-black/30 dark:text-white/20">Ideal For:</span>
                                    <span className="text-xs font-light text-black/60 dark:text-white/50 leading-relaxed italic">{finish.bestFor}</span>
                                </div>
                            </div>

                            <Link 
                                href={finish.href}
                                className="mt-12 flex items-center justify-center gap-3 py-5 rounded-2xl bg-black dark:bg-white text-white dark:text-black text-[10px] font-black uppercase tracking-widest hover:bg-[#d4af37] hover:text-black dark:hover:bg-[#d4af37] transition-all"
                            >
                                <Info size={14} /> Details
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ComparisonGrid;
