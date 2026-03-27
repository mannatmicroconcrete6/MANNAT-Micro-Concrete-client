"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ArrowRight } from 'lucide-react';

const InstagramReels = ({ reels = [] }) => {
    // Default placeholders if no reels provided
    const displayReels = reels.length > 0 ? reels : [
        'DVMHYMKCLzi', // Residential Loft
        'DVMH2rFiPSH', // Artisanal Kitchen
        'DVUHLgCkhC8', // Zen Bathroom
        'DVafjDkEu3e', // Luxury Showroom
        'DVK1KLTEr1d',
        'DVL9owAEoN9',
        'DVMGSTYCKJ2',
        'DVMGZsLCK_A',
        'DVMGo9UCG4c',
        'DVMG6PGCOu5',
        'DVMHBoWCIUt'
    ];

    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section 
            className="py-32 px-6 bg-white dark:bg-black transition-colors duration-500 overflow-hidden" 
            aria-labelledby="social-showcase-title"
        >
            {/* Hidden for SEO Context */}
            <div className="sr-only">
                <h2 id="social-showcase-title">Mannat Micro Concrete Project Reels</h2>
                <p>Watch our artisanal process including Microcement flooring, Venetian plaster application, and luxury surface finishing projects in New Delhi, Mumbai, and Bangalore.</p>
            </div>

            <div className="max-w-[1600px] mx-auto relative group/slider">
                <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20 px-8">
                    <div className="relative">
                        <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Execution Excellence</span>
                        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-black dark:text-white uppercase leading-[0.9]">
                            Mannat <br />
                            <span className="text-black/30 dark:text-white/30">In Action.</span>
                        </h2>
                        
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute -right-20 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-2"
                        >
                            <span className="text-[8px] font-black uppercase tracking-widest text-black/20 dark:text-white/20 vertical-text" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
                            <motion.div 
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="w-px h-12 bg-gradient-to-b from-[#d4af37] to-transparent"
                            />
                        </motion.div>
                    </div>
                    
                    <a 
                        href="https://www.instagram.com/mannat_micro_concrete/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 bg-zinc-100 dark:bg-zinc-900 px-8 py-4 rounded-full border border-black/5 dark:border-white/5 hover:bg-[#d4af37] hover:text-white transition-all duration-500 shadow-none text-black dark:text-white mb-2"
                    >
                        <Instagram size={20} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Connect</span>
                    </a>
                </div>

                {/* Navigation Arrows - Desktop Only (Always Visible) */}
                <div className="hidden md:block">
                    <button 
                        onClick={() => scroll('left')}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-md border border-black/10 dark:border-white/20 flex items-center justify-center text-black dark:text-white hover:bg-[#d4af37] hover:text-white transition-all shadow-xl"
                        aria-label="Previous"
                    >
                        <ArrowRight className="rotate-180" size={24} />
                    </button>
                    <button 
                        onClick={() => scroll('right')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-md border border-black/10 dark:border-white/20 flex items-center justify-center text-black dark:text-white hover:bg-[#d4af37] hover:text-white transition-all shadow-xl"
                        aria-label="Next"
                    >
                        <ArrowRight size={24} />
                    </button>
                </div>

                {/* Slider Container */}
                <div 
                    ref={scrollRef}
                    className="flex gap-8 overflow-x-auto pb-12 hide-scrollbar snap-x snap-mandatory px-8"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {displayReels.map((reelId, index) => (
                        <motion.div
                            key={reelId + index}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="min-w-[310px] md:min-w-[420px] aspect-[1/1.25] bg-zinc-50 dark:bg-zinc-900 rounded-xl overflow-hidden border border-black/5 dark:border-white/5 snap-center relative shadow-none"
                        >
                            <iframe
                                src={`https://www.instagram.com/reel/${reelId}/embed`}
                                title={`Instagram Reel - Mannat Project ${index + 1}`}
                                className="w-full h-full border-0 absolute inset-0"
                                scrolling="no"
                                allowtransparency="true"
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            ></iframe>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-black/40 dark:text-white/40 text-xs uppercase tracking-widest font-bold max-w-2xl mx-auto leading-relaxed">
                        Follow our daily architectural transformation. Updated live from our premium project sites across India.
                    </p>
                </div>
            </div>
            
            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default InstagramReels;
