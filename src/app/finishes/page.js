"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Droplets, Ruler } from 'lucide-react';

const finishTypes = [
    {
        title: "Matte Finish",
        subtitle: "Organic & Minimalist",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        description: "Zero reflection for a natural, stone-like appearance. Best for contemporary living rooms and commercial spaces.",
        features: ['Anti-glare', 'Natural look', 'Conceals scratches']
    },
    {
        title: "Satin / Silk",
        subtitle: "Sophisticated Glow",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
        description: "A subtle eggshell sheen that reflects light gently. Our most popular choice for modern residences.",
        features: ['Easy cleaning', 'Smooth feel', 'Light-enhancing']
    },
    {
        title: "High Gloss",
        subtitle: "Technical Brilliance",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        description: "Maximum reflection with a mirror-like depth. Ideal for architectural features and industrial epoxy systems.",
        features: ['Deep reflection', 'Ultra-durable', 'Water-tight']
    }
];

const FinishesPage = () => {
    return (
        <div className="bg-white dark:bg-black text-black dark:text-white pt-40 pb-20 px-6 transition-colors duration-500">
            <div className="max-w-[1600px] mx-auto">
                <div className="text-center mb-32">
                    <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.4em]">The Selection</span>
                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter mt-6 mb-12 uppercase leading-[0.85]">
                        Textures & <br />
                        <span className="text-black/30 dark:text-white/40">Sheens.</span>
                    </h1>
                </div>

                {/* Section 1: Textures */}
                <section className="mb-40">
                    <div className="flex justify-between items-end mb-16 border-b border-black/5 dark:border-white/5 pb-8">
                        <h2 className="text-3xl font-bold uppercase tracking-tighter">Surface Textures</h2>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/30 dark:text-white/30">Artisanal Choice</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Polished', desc: 'Smooth, marble-like hand troweled texture.', image: 'https://images.unsplash.com/photo-1621293954908-907159247fc8', icon: Sparkles },
                            { title: 'Textured', desc: 'Higher depth with visible artisanal strokes.', image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8', icon: Ruler },
                            { title: 'Salt & Pepper', desc: 'Micro-terrazzo look with fine visual grains.', image: 'https://plus.unsplash.com/premium_photo-1678447323507-aeae3b4ee525', icon: Droplets },
                        ].map((item, i) => (
                            <div key={i} className="group cursor-default">
                                <div className="aspect-square bg-zinc-50 dark:bg-zinc-900 rounded-[3rem] mb-8 border border-black/5 dark:border-white/5 relative overflow-hidden flex items-center justify-center">
                                    <Image
                                        src={`${item.image}?auto=format&fit=crop&q=80&w=1000`}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700" />
                                    <item.icon size={40} strokeWidth={1} className="relative z-10 text-white opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{item.title}</h3>
                                <p className="text-black/40 dark:text-white/40 text-[10px] uppercase font-bold tracking-widest leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 2: Sheen Grids */}
                <section className="mb-40">
                    <div className="flex justify-between items-end mb-16 border-b border-black/5 dark:border-white/5 pb-8">
                        <h2 className="text-3xl font-bold uppercase tracking-tighter">Level of Sheen</h2>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/30 dark:text-white/30">Light Reflection</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {finishTypes.map((finish, i) => (
                            <div key={i} className="group relative p-12 bg-zinc-50 dark:bg-zinc-900 rounded-[3rem] border border-black/5 dark:border-white/5 hover:border-[#d4af37]/30 transition-all duration-500 overflow-hidden min-h-[500px] flex flex-col justify-end">
                                <Image
                                    src={`${finish.image}?auto=format&fit=crop&q=80&w=800`}
                                    alt={finish.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 group-hover:from-black group-hover:via-black/20 group-hover:to-transparent transition-all duration-700" />

                                <div className="relative z-10">
                                    <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-widest mb-4 block">{finish.subtitle}</span>
                                    <h3 className="text-3xl font-bold mb-6 tracking-tight uppercase leading-none text-white">{finish.title}</h3>
                                    <p className="text-white/60 font-light mb-8 leading-relaxed text-sm">
                                        {finish.description}
                                    </p>
                                    <ul className="space-y-3">
                                        {finish.features.map((f, j) => (
                                            <li key={j} className="text-[10px] uppercase tracking-widest font-black text-white/40 flex items-center gap-2">
                                                <div className="w-1 h-1 bg-[#d4af37] rounded-full" /> {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Maintenance Section */}
                <section className="bg-zinc-50 dark:bg-[#080808] rounded-[4rem] p-12 md:p-24 border border-black/5 dark:border-white/5 mb-40">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Durability First</span>
                            <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tighter uppercase leading-[0.9]">Maintenance <br /> <span className="text-black/30 dark:text-white/30">& Cleaning</span></h2>
                            <p className="text-black/60 dark:text-white/50 text-xl font-light leading-relaxed mb-12">
                                Mannat finishes are designed for endurance. Our microcement is sealed with professional-grade polyurethane to resist stains and water. Neutral PH cleaners are recommended for daily care.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4 items-center">
                                    <Shield className="text-[#d4af37] shrink-0" size={24} />
                                    <p className="text-[10px] text-black/40 dark:text-white/40 font-black uppercase tracking-widest leading-loose">Anti-scratch protective top-coats applied as standard.</p>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <Droplets className="text-[#d4af37] shrink-0" size={24} />
                                    <p className="text-[10px] text-black/40 dark:text-white/40 font-black uppercase tracking-widest leading-loose">100% waterproof for bathrooms & exterior zones.</p>
                                </div>
                            </div>
                        </div>
                        <div className="aspect-[4/5] bg-white dark:bg-black rounded-[3rem] overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl relative">
                            <Image src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=1000" fill sizes="(max-width: 1024px) 100vw, 50vw" alt="Mannat Microcement Bathroom Finish" className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000" />
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <div className="text-center">
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.8] mb-12">
                        Found Your <br />
                        <span className="text-[#d4af37]">Ideal Finish?</span>
                    </h2>
                    <Link
                        href="/enquiry"
                        className="inline-block px-12 py-6 bg-black dark:bg-[#d4af37] text-white dark:text-black rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-zinc-800 dark:hover:bg-white transition-all shadow-2xl"
                    >
                        Request Sample Board
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FinishesPage;
