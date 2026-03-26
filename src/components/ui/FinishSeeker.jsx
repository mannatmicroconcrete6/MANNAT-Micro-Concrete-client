"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Info } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const rooms = [
    { id: 'bathroom', label: 'Bathroom', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14' },
    { id: 'living', label: 'Living Room', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c' },
    { id: 'kitchen', label: 'Kitchen', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d' },
    { id: 'commercial', label: 'Retail Space', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750' },
];

const styles = [
    { id: 'industrial', label: 'Industrial Brutal' },
    { id: 'minimalist', label: 'Zen Minimalist' },
    { id: 'luxury', label: 'Royal Venetian' },
];

const finishes = [
    { id: 1, name: 'Microcement Flooring', room: 'living', style: 'minimalist', image: 'https://images.unsplash.com/photo-1621293954908-907159247fc8' },
    { id: 2, name: 'Textured Walls', room: 'commercial', style: 'industrial', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158' },
    { id: 3, name: 'Venetian Plaster', room: 'living', style: 'luxury', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c' },
    { id: 4, name: 'Seamless Wetroom', room: 'bathroom', style: 'minimalist', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14' },
    { id: 5, name: 'Polished Terrazzo', room: 'commercial', style: 'luxury', image: 'https://plus.unsplash.com/premium_photo-1678447323507-aeae3b4ee525' },
    { id: 6, name: 'Raw Concrete Wall', room: 'commercial', style: 'industrial', image: 'https://images.unsplash.com/photo-1512914890251-2f96a9b0bbe2' },
];

const FinishSeeker = () => {
    const [selectedRoom, setSelectedRoom] = useState(rooms[1].id);
    const [selectedStyle, setSelectedStyle] = useState(styles[1].id);

    const filteredFinishes = finishes.filter(f => f.room === selectedRoom || f.style === selectedStyle);

    return (
        <section className="py-24 px-6 bg-white dark:bg-[#050505]">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-20">
                    <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block text-center lg:text-left">Visual Filter</span>
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.85] text-center lg:text-left">
                        Discover Your <br />
                        <span className="text-black/30 dark:text-white/30">Perfect Finish.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Selectors */}
                    <div className="lg:col-span-4 space-y-12">
                        {/* Room Selector */}
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-black/30 dark:text-white/30 mb-6 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" /> Select Environment
                            </h4>
                            <div className="grid grid-cols-2 gap-3">
                                {rooms.map(room => (
                                    <button
                                        key={room.id}
                                        onClick={() => setSelectedRoom(room.id)}
                                        className={`p-4 rounded-2xl border transition-all text-left group ${selectedRoom === room.id
                                            ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white shadow-xl scale-[1.02]"
                                            : "bg-zinc-50 dark:bg-[#0a0a0a] border-black/5 dark:border-white/5 text-black/50 dark:text-white/30 hover:border-[#d4af37]/30"
                                            }`}
                                    >
                                        <div className="text-[10px] font-black uppercase tracking-widest">{room.label}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Style Selector */}
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-black/30 dark:text-white/30 mb-6 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" /> Select Aesthetic
                            </h4>
                            <div className="space-y-3">
                                {styles.map(style => (
                                    <button
                                        key={style.id}
                                        onClick={() => setSelectedStyle(style.id)}
                                        className={`w-full p-5 rounded-2xl border transition-all text-left flex items-center justify-between group ${selectedStyle === style.id
                                            ? "bg-[#d4af37] text-black border-[#d4af37] shadow-lg"
                                            : "bg-zinc-50 dark:bg-[#0a0a0a] border-black/5 dark:border-white/5 text-black/50 dark:text-white/30 hover:border-[#d4af37]/30"
                                            }`}
                                    >
                                        <div className="text-xs font-black uppercase tracking-widest">{style.label}</div>
                                        {selectedStyle === style.id && <Check size={16} />}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 bg-zinc-50 dark:bg-[#0a0a0a] rounded-3xl border border-black/5 dark:border-white/5">
                            <Info size={20} className="text-[#d4af37] mb-4" />
                            <p className="text-[10px] font-medium text-black/40 dark:text-white/20 uppercase tracking-widest leading-relaxed">
                                Our AI-driven engine suggests these finishes based on structural requirements and current luxury design trends in {selectedRoom === 'commercial' ? 'Retail' : 'Residential'} environments.
                            </p>
                        </div>
                    </div>

                    {/* Results Display */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <AnimatePresence mode="popLayout">
                                {filteredFinishes.map((finish, i) => (
                                    <motion.div
                                        key={finish.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="group"
                                    >
                                        <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-black/5 dark:border-white/10 shadow-xl mb-6">
                                            <Image
                                                src={`${finish.image}?auto=format&fit=crop&q=70&w=800`}
                                                alt={finish.name}
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                                                <Link href="/enquiry" className="w-fit px-6 py-3 bg-[#d4af37] text-black rounded-full font-black uppercase tracking-widest text-[8px] hover:scale-105 transition-all">
                                                    Request Sample
                                                </Link>
                                            </div>
                                        </div>
                                        <h5 className="text-lg font-bold tracking-tighter uppercase">{finish.name}</h5>
                                        <div className="flex gap-4 mt-2">
                                            <span className="text-[8px] font-black uppercase tracking-widest text-[#d4af37]">{finish.style} Vibe</span>
                                            <span className="text-[8px] font-black uppercase tracking-widest text-black/20 dark:text-white/20">Artisanal Mix #0{finish.id}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinishSeeker;
