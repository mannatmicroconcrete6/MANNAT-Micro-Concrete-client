"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import Breadcrumbs from '@/components/ui/Breadcrumbs';

const AboutClient = () => {
    return (
        <div className="bg-white dark:bg-black text-black dark:text-white pt-40 pb-20 px-6 transition-colors duration-500">
            <div className="max-w-[1600px] mx-auto">
                <div className="mb-12">
                    <Breadcrumbs />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.6em] mb-12 block">Philosophy of Continuity</span>
                        <h1 className="text-4xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter mb-16 uppercase leading-[0.75] transition-colors">
                            The Art <br />
                            <span className="text-black/10 dark:text-white/5 font-black italic">Infinite.</span>
                        </h1>
                        <div className="space-y-8 max-w-xl">
                            <p className="text-black/60 dark:text-white/60 text-xl font-light leading-relaxed">
                                Mannat Micro Concrete didn't start in a boardroom; it started with a single trowel and a fascination for the way light hits a seamless wall. We believe that true luxury is quiet—liberated from the visual noise of grout lines and the predictable patterns of mass-produced materials.
                            </p>
                            <p className="text-black/40 dark:text-white/40 text-[10px] font-black uppercase tracking-widest leading-loose">
                                Our master craftsmen don't just apply material; they sculpt environments. By blending ancestral mineral wisdom with modern engineering, we deliver surfaces that hold a soul. Every project is a unique collaboration between your vision and our hands.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-12 mt-20">
                            <div className="space-y-2">
                                <h4 className="text-[#d4af37] text-6xl font-black tracking-tighter">50+</h4>
                                <p className="text-black/30 dark:text-white/30 text-[10px] uppercase tracking-widest font-black text-center md:text-left">Total Projects Delivered</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-[#d4af37] text-6xl font-black tracking-tighter">2</h4>
                                <p className="text-black/30 dark:text-white/30 text-[10px] uppercase tracking-widest font-black">Year Warranty</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        className="relative aspect-[3/4] rounded-[4rem] overflow-hidden border border-black/5 dark:border-white/5 shadow-2xl group group-hover:shadow-[0_0_100px_rgba(212,175,55,0.1)] transition-all duration-700"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200"
                            alt="Artisanal Hand-Applied Microcement Surface by Mannat Micro Concrete - Luxury Seamless Finishing"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[3s]"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    </motion.div>
                </div>

                {/* Values Section */}
                <section className="py-40 bg-zinc-50 dark:bg-[#080808] rounded-[5rem] px-10 md:px-24 border border-black/5 dark:border-white/5 mb-40">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                            {[
                                { title: 'Authenticity', desc: 'Handcrafted textures using genuine mineral lime and professional micro-cement.' },
                                { title: 'Innovation', desc: 'Pushing the technical limits of seamless application on any substrate.' },
                                { title: 'Dedication', desc: 'Site-specific attention to detail that ensures 100% structural integrity.' },
                            ].map((value, i) => (
                                <div key={i} className="space-y-6">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                                    <h3 className="text-2xl font-bold uppercase tracking-tighter text-black dark:text-white">{value.title}</h3>
                                    <p className="text-black/40 dark:text-white/40 text-[10px] font-black uppercase tracking-[0.4em] leading-relaxed">
                                        {value.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Quality Promise */}
                <div className="text-center max-w-4xl mx-auto mb-40">
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-12 uppercase leading-[0.8]">The Quality <br /> <span className="text-[#d4af37]">Imperative.</span></h2>
                    <p className="text-black/60 dark:text-white/50 text-xl font-light leading-relaxed mb-16">
                        From the initial site analysis to the final protective seal, we oversee every square millimeter. We don't just apply material; we sculpt environments with architectural precision and uncompromising durability.
                    </p>
                    <div className="flex justify-center gap-12">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-px h-20 bg-black/10 dark:bg-white/10" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/30 dark:text-white/30">Certified Artisans</span>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-px h-20 bg-black/10 dark:bg-white/10" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/30 dark:text-white/30">Technical Warranty</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutClient;
