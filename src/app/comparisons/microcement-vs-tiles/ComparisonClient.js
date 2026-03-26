"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ShieldAlert, Award, Grid3X3, Layers } from 'lucide-react';
import Link from 'next/link';

const ComparisonClient = () => {
    return (
        <div className="bg-white dark:bg-black text-black dark:text-white pt-40 pb-20 px-6 transition-colors duration-500">
            <div className="max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-32"
                >
                    <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.4em]">Expert Guide</span>
                    <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter mt-6 mb-12 uppercase leading-none">
                        Microcement <span className="text-black/30 dark:text-white/40">vs.</span> Tiles
                    </h1>
                    <p className="max-w-2xl mx-auto text-black/60 dark:text-white/50 text-xl font-light leading-relaxed">
                        Choosing between the timeless precision of seamless surfaces and the traditional grid of tiles. A technical and aesthetic breakdown.
                    </p>
                </motion.div>

                {/* Head to Head Table */}
                <div className="overflow-x-auto mb-40">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-black/10 dark:border-white/10">
                                <th className="p-8 text-left text-[10px] font-black uppercase tracking-widest text-black/40 dark:text-white/40">Feature</th>
                                <th className="p-8 text-left text-2xl font-bold uppercase tracking-tighter text-[#d4af37]">Microcement</th>
                                <th className="p-8 text-left text-2xl font-bold uppercase tracking-tighter text-black/40 dark:text-white/40">Traditional Tiles</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-black/5 dark:divide-white/5">
                            {[
                                { f: 'Joints & Grout', m: 'Zero Joints. Monolithic.', t: 'Visible Grout lines every few inches.' },
                                { f: 'Thickness', m: '2-3mm (No need to trim doors).', t: '10-15mm (Requires substrate adjustment).' },
                                { f: 'Hygiene', m: '100% Seamless. No mold/bacteria.', t: 'Grout lines trap dirt and mold.' },
                                { f: 'Customization', m: 'Infinite colors & textures.', t: 'Limited to manufacturer designs.' },
                                { f: 'Renovation', m: 'Apply over existing tiles.', t: 'Major demolition required.' },
                                { f: 'Durability', m: 'Industrial grade. Impact resistant.', t: 'Prone to cracking/chipping.' }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                                    <td className="p-8 text-[10px] font-black uppercase tracking-widest text-black/40 dark:text-white/40">{row.f}</td>
                                    <td className="p-8 font-bold text-lg text-black dark:text-white">{row.m}</td>
                                    <td className="p-8 font-light text-lg text-black/50 dark:text-white/40">{row.t}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Depth Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-40">
                    <div className="space-y-10 text-justify">
                        <div className="w-14 h-14 bg-[#d4af37]/10 rounded-2xl flex items-center justify-center text-[#d4af37]">
                            <Grid3X3 size={28} />
                        </div>
                        <h2 className="text-4xl font-bold tracking-tighter uppercase leading-none">The Problem <br /><span className="text-black/30 dark:text-white/30">with the Grid.</span></h2>
                        <p className="text-black/60 dark:text-white/50 text-lg font-light leading-relaxed">
                            Traditional tiles depend on grout—a porous, cement-based material that fundamentally breaks the visual continuity of a room. Grout is the weakest point of any floor; it absorbs moisture, changes color over time, and becomes a breeding ground for bacteria.
                        </p>
                        <p className="text-black/60 dark:text-white/50 text-lg font-light leading-relaxed">
                            A tiled floor is an assembly of many parts. A microcement floor is one single, sculptural piece.
                        </p>
                    </div>

                    <div className="space-y-10 text-justify">
                        <div className="w-14 h-14 bg-[#d4af37]/10 rounded-2xl flex items-center justify-center text-[#d4af37]">
                            <Layers size={28} />
                        </div>
                        <h2 className="text-4xl font-bold tracking-tighter uppercase leading-none">The Seamless <br /><span className="text-black/30 dark:text-white/30">Advantage.</span></h2>
                        <p className="text-black/60 dark:text-white/50 text-lg font-light leading-relaxed">
                            Mannat Micro Cement offers a technical overlay that bonds to almost any substrate. Because it is applied in layers and troweled by hand, it carries the soul of craftsmanship—something machine-cut tiles can never replicate.
                        </p>
                        <p className="text-black/60 dark:text-white/50 text-lg font-light leading-relaxed">
                            It is waterproof, fire-resistant, and can be applied over existing floors, making it the most sophisticated choice for modern luxury renovations.
                        </p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-[#d4af37] rounded-[4rem] p-12 md:p-24 text-center">
                    <h2 className="text-4xl md:text-7xl font-bold text-black tracking-tighter uppercase leading-[0.8] mb-12">
                        Ready to Ditch <br />
                        <span className="text-white">The Grout?</span>
                    </h2>
                    <Link
                        href="/enquiry"
                        className="inline-block px-12 py-6 bg-black text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-zinc-800 transition-all shadow-2xl"
                    >
                        Get a Seamless Estimate
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ComparisonClient;
