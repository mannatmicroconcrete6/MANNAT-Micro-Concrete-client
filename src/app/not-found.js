"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowRight, Grid3X3, Layers, Compass } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-500 overflow-hidden">
            <Navbar />
            
            <div className="relative h-screen flex items-center justify-center pt-20">
                {/* Background Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-5">
                    <h1 className="text-[25vw] font-black uppercase tracking-tighter leading-none">404</h1>
                </div>

                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="text-[#d4af37] text-xs font-black uppercase tracking-[0.5em] mb-8 block">Lost Continuity</span>
                        <h2 className="text-4xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] mb-12">
                            This Path <br />
                            <span className="text-black/30 dark:text-white/30 italic font-black">Ends Here.</span>
                        </h2>
                        <p className="max-w-md mx-auto text-black/40 dark:text-white/40 text-sm font-bold uppercase tracking-widest leading-loose mb-16">
                            The surface you're looking for was either moved or never existed. Let's redirect your architectural journey.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
                            <Link
                                href="/"
                                className="w-full sm:w-auto px-12 py-5 bg-black dark:bg-white text-white dark:text-black rounded-full text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3 hover:bg-[#d4af37] dark:hover:bg-[#d4af37] hover:text-black transition-all"
                            >
                                <Home size={14} /> Back to Studio
                            </Link>
                            <Link
                                href="/services"
                                className="w-full sm:w-auto px-12 py-5 border border-black/10 dark:border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3 hover:border-[#d4af37] hover:text-[#d4af37] transition-all"
                            >
                                <Compass size={14} /> See Finishes
                            </Link>
                        </div>
                    </motion.div>

                    {/* Quick Explore */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1.5 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto pt-16 border-t border-black/5 dark:border-white/5"
                    >
                        {[
                            { name: 'Microcement', icon: Grid3X3, href: '/services/microcement-flooring' },
                            { name: 'Venetian', icon: Layers, href: '/services/venetian-plaster' },
                            { name: 'Epoxy', icon: Compass, href: '/services/epoxy-coatings' },
                            { name: 'Portfolio', icon: ArrowRight, href: '/projects' }
                        ].map((item, i) => (
                            <Link 
                                key={i} 
                                href={item.href}
                                className="flex flex-col items-center gap-3 group"
                            >
                                <div className="w-12 h-12 rounded-full bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center text-black/20 dark:text-white/10 group-hover:bg-[#d4af37] group-hover:text-black transition-all">
                                    <item.icon size={18} />
                                </div>
                                <span className="text-[8px] font-black uppercase tracking-widest text-black/40 dark:text-white/30 group-hover:text-[#d4af37] transition-colors">
                                    {item.name}
                                </span>
                            </Link>
                        ))}
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
