"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center overflow-hidden bg-black">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

            {/* Background Video / Image Fallback */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=70&w=1600"
                    alt="Luxury Interior Fallback"
                    fill
                    className="object-cover scale-105 opacity-40 transition-transform duration-[10s] ease-linear"
                    priority
                    quality={75}
                />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    poster="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=10&w=200"
                    className="absolute inset-0 w-full h-full object-cover scale-105 opacity-60 mix-blend-lighten pointer-events-none transition-opacity duration-1000"
                >
                    <source src="https://player.vimeo.com/external/370331493.sd.mp4?s=23186259c40277f3e80f9ae1a0ef3f6f1c4df2f2&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
                </video>
            </div>

            {/* Content Container */}
            <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 items-center h-full pt-28 lg:pt-0">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-3xl text-center lg:text-left pt-20 lg:pt-0"
                >
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: "0.2em" }}
                        animate={{ opacity: 1, letterSpacing: "0.4em" }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="inline-block text-[#d4af37] uppercase text-[10px] md:text-sm font-black mb-8"
                    >
                        EST. 2024 — THE ART OF CONTINUITY
                    </motion.span>

                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.8] uppercase">
                        Mannat <br />
                        <span className="text-white/20 italic font-light">Micro Concrete.</span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="text-lg md:text-2xl text-white/40 font-light max-w-xl mb-14 leading-relaxed mx-auto lg:mx-0"
                    >
                        Mastering <span className="text-white/80 font-medium">Micro Cement</span> and <span className="text-white/80 font-medium">Micro Concrete</span>. We deliver premium <span className="text-white/80 font-medium">Seamless Flooring</span> and <span className="text-white/80 font-medium">Decorative Concrete</span> for luxury architectural projects in India.
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
                            className="w-full sm:w-auto px-12 py-6 border border-white/10 text-white rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white/5 transition-all duration-700 backdrop-blur-sm"
                        >
                            Explore Portfolio
                        </Link>
                    </div>
                </motion.div>

            </div>

            {/* Trust Strip */}
            <div className="absolute bottom-0 left-0 w-full z-20 py-8 bg-black/40 backdrop-blur-md border-t border-white/5 hidden md:block">
                <div className="max-w-[1600px] mx-auto px-12 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.4em] text-white/30">
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
