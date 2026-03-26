"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Share2, Info } from 'lucide-react';

const colors = [
    { name: 'Bone White', hex: '#f2f0e9', vibe: 'Pure Calm' },
    { name: 'Warm Sand', hex: '#d9c9b4', vibe: 'Organic Sanctuary' },
    { name: 'Ash Grey', hex: '#b3b3b3', vibe: 'Urban Minimalist' },
    { name: 'Charcoal Slub', hex: '#404040', vibe: 'Industrial Bold' },
    { name: 'Olive Mineral', hex: '#5b5e54', vibe: 'Natural Deep' },
    { name: 'Deep Terracotta', hex: '#8c4c3e', vibe: 'Soulful Earth' },
];

const ColorPaletteTool = () => {
    const [activeColor, setActiveColor] = useState(colors[2]);

    return (
        <section className="py-24 px-6 bg-zinc-50 dark:bg-black">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Visual Preview */}
                    <div className="relative group">
                        <div className="relative aspect-square md:aspect-[4/3] rounded-[4rem] overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl transition-all duration-700 bg-white dark:bg-zinc-900">
                            {/* Main Scene (Room Image with transparent wall or overlay) */}
                            {/* Using a high-end minimalist render with color overlay */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                                    alt="Minimalist Room"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Color Overlay Layer */}
                            <motion.div
                                key={activeColor.name}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.4 }}
                                transition={{ duration: 0.8 }}
                                className="absolute inset-0 z-10 mix-blend-multiply pointer-events-none"
                                style={{ backgroundColor: activeColor.hex }}
                            />

                            <div className="absolute top-10 left-10 z-20">
                                <div className="bg-white/80 dark:bg-black/80 backdrop-blur-md px-6 py-4 rounded-3xl border border-white/10 shadow-xl">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-black/30 dark:text-white/30 block mb-1">Active Hue</span>
                                    <h5 className="text-xl font-bold uppercase tracking-tighter">{activeColor.name}</h5>
                                    <div className="flex items-center gap-2 mt-2">
                                        <div className="w-3 h-3 rounded-full border border-black/10" style={{ backgroundColor: activeColor.hex }} />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">{activeColor.vibe}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="space-y-12">
                        <div>
                            <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Interactive Palette</span>
                            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.85] mb-8">
                                Mix Your <br />
                                <span className="text-black/30 dark:text-white/30">Soulful Shade.</span>
                            </h2>
                            <p className="text-lg font-light text-black/60 dark:text-white/40 max-w-md leading-relaxed">
                                Our minerals are hand-mixed on site. Choose a base tone below to visualize how it transforms the temperature of a luxury residence.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            {colors.map((color) => (
                                <button
                                    key={color.name}
                                    onClick={() => setActiveColor(color)}
                                    className={`relative aspect-square rounded-2xl transition-all duration-300 group ${activeColor.name === color.name
                                            ? "ring-4 ring-[#d4af37] ring-offset-4 ring-offset-white dark:ring-offset-black scale-95"
                                            : "hover:scale-105"
                                        }`}
                                    style={{ backgroundColor: color.hex }}
                                >
                                    <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center">
                                        <span className="text-[7px] font-black uppercase tracking-widest bg-black/40 text-white px-2 py-1 rounded-full backdrop-blur-sm whitespace-nowrap">
                                            {color.name}
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>

                        <div className="pt-12 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                            <div className="flex gap-4">
                                <button className="flex items-center gap-3 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#d4af37] dark:hover:bg-[#d4af37] hover:border-[#d4af37] transition-all">
                                    <Share2 size={14} /> Share Concept
                                </button>
                                <button className="flex items-center gap-3 px-8 py-4 border border-black/5 dark:border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:border-[#d4af37] hover:text-[#d4af37] transition-all">
                                    Request Sample Set
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ColorPaletteTool;
