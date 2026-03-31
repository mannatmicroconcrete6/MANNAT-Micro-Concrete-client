"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="relative min-h-[100dvh] w-full flex items-center pt-24 pb-12 overflow-hidden bg-black">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-white/10 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent z-10" />

            {/* Background Video / Image Fallback */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                    src="/images/bright_hero.png"
                    alt="Premium Microcement and Venetian Plaster Luxury Interior Finish in India"
                    fill
                    className="object-cover opacity-100 transition-transform duration-[10s] ease-linear"
                    priority
                />
            </div>

            {/* Content Container */}
            <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col items-center md:items-start justify-center h-full pt-10 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl"
                >
                    <motion.div
                        initial={{ opacity: 0, letterSpacing: "0.2em" }}
                        animate={{ opacity: 1, letterSpacing: "0.4em" }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="flex items-center justify-center md:justify-start gap-4 text-[#d4af37] uppercase text-[10px] font-black mb-10"
                    >
                        <div className="hidden md:block w-12 h-[1px] bg-[#d4af37]" />
                        EST. 2024 — NEW DELHI
                    </motion.div>

                    <h1 className="text-4xl md:text-7xl font-light tracking-tight text-black mb-6 md:mb-10 leading-[1.1] uppercase text-center md:text-left">
                        <span className="block font-medium italic serif tracking-wider opacity-100 mb-2">Mannat</span>
                        <span className="text-black/60 font-light block">Micro Concrete.</span>
                        <span className="sr-only">Premium Microcement and Venetian Plaster Finishes in India</span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="text-lg md:text-xl text-black/50 font-light max-w-xl mx-auto md:mx-0 mb-10 md:mb-14 leading-relaxed text-center md:text-left"
                    >
                        Pioneers in <span className="text-black/80">Seamless Surfaces</span> and <span className="text-black/80">Premium Microcement</span>. Elevating architectural spaces across India with artisanal precision and joint-free continuity.
                    </motion.p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 md:gap-10">
                        <Link
                            href="/enquiry"
                            className="w-full sm:w-auto px-12 py-6 bg-[#d4af37] text-black rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white transition-all duration-700 gold-glow relative overflow-hidden group"
                        >
                            <span className="relative z-10">Request Consultation</span>
                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </Link>
                        <Link
                            href="/projects"
                            className="w-full sm:w-auto px-12 py-6 border border-black/10 text-black rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-black/5 transition-all duration-700 backdrop-blur-sm"
                        >
                            Explore Portfolio
                        </Link>
                    </div>
                </motion.div>

            </div>

            {/* Trust Strip */}
            <div className="absolute bottom-0 left-0 w-full z-20 py-8 bg-black/40 backdrop-blur-md border-t border-white/5 hidden md:block">
                <div className="max-w-[1600px] mx-auto px-12 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.4em] text-black/30">
                    <span className="flex items-center gap-3">Seamless <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" /></span>
                    <span className="flex items-center gap-3">Waterproof Options <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" /></span>
                    <span className="flex items-center gap-3">Premium Finishes <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" /></span>
                    <span className="flex items-center gap-3">Easy Maintenance</span>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 lg:bottom-28 left-1/2 -translate-x-1/2 z-20 text-[#d4af37]/50 flex flex-col items-center gap-2 cursor-pointer md:hidden"
            >
                <ChevronDown size={18} />
            </motion.div>
        </section>
    );
};

export default Hero;
