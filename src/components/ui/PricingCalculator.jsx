"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, ArrowRight, CheckCircle2, Info } from 'lucide-react';

const finishes = [
    { name: 'Microcement Walls', price: 100, unit: 'sq.ft' },
    { name: 'Microcement Flooring', price: 200, unit: 'sq.ft' },
    { name: 'Epoxy Coating', price: 100, unit: 'sq.ft' },
    { name: 'Venetian Lime Plaster', price: 100, unit: 'sq.ft' },
    { name: 'Lime Wash Finish', price: 100, unit: 'sq.ft' },
    { name: 'Terrazzo Flooring', price: 150, unit: 'sq.ft' },
];

const PricingCalculator = () => {
    const [area, setArea] = useState('');
    const [selectedFinish, setSelectedFinish] = useState(finishes[0]);
    const [showResult, setShowResult] = useState(false);

    const total = area ? (parseFloat(area) * selectedFinish.price).toLocaleString('en-IN') : 0;

    return (
        <div className="bg-zinc-50 dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl">
            <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-[#d4af37] text-black rounded-2xl flex items-center justify-center shadow-lg">
                    <Calculator size={24} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold uppercase tracking-tighter">Cost Estimator</h3>
                    <p className="text-[10px] uppercase tracking-widest text-black/40 dark:text-white/40 font-black">Instant Transparent Pricing</p>
                </div>
            </div>

            <div className="space-y-8">
                {/* Area Input */}
                <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-black text-black/40 dark:text-white/40 ml-4 flex items-center gap-2">
                        Total Area (Sq.Ft) <Info size={12} className="text-[#d4af37]" />
                    </label>
                    <input
                        type="number"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        placeholder="e.g. 500"
                        className="w-full bg-white dark:bg-black border border-black/5 dark:border-white/5 rounded-3xl p-6 text-xl font-bold outline-none focus:ring-2 focus:ring-[#d4af37] transition-all"
                    />
                </div>

                {/* Finish Selection */}
                <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-black text-black/40 dark:text-white/40 ml-4">
                        Select Surface Finish
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {finishes.map((f) => (
                            <button
                                key={f.name}
                                onClick={() => setSelectedFinish(f)}
                                className={`p-4 rounded-2xl border text-left transition-all duration-300 ${selectedFinish.name === f.name
                                    ? "bg-[#d4af37] border-[#d4af37] text-black shadow-lg scale-[1.02]"
                                    : "bg-white dark:bg-black border-black/5 dark:border-white/5 text-black/60 dark:text-white/40 hover:border-[#d4af37]/30"
                                    }`}
                            >
                                <div className="text-[10px] font-black uppercase tracking-widest truncate">{f.name}</div>
                                <div className={`text-xs font-bold mt-1 ${selectedFinish.name === f.name ? "text-black/60" : "text-[#d4af37]"}`}>
                                    ₹{f.price}/{f.unit}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Result Display */}
                <AnimatePresence>
                    {area && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pt-8 border-t border-black/5 dark:border-white/5"
                        >
                            <div className="flex justify-between items-end mb-6">
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-black/30 dark:text-white/30">Estimated Investment</span>
                                    <div className="text-4xl md:text-5xl font-black text-[#d4af37] tracking-tighter mt-1">
                                        ₹{total}*
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-black/30 dark:text-white/30">Include Materials</span>
                                    <div className="flex items-center gap-1 text-[#d4af37] font-bold text-xs mt-1">
                                        & Professional Labor
                                    </div>
                                </div>
                            </div>

                            <p className="text-[8px] uppercase tracking-widest text-black/30 dark:text-white/30 mb-8 italic">
                                *Excluding site-specific preparation & taxes. Get a final quote after site visit.
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-6 bg-black dark:bg-white text-white dark:text-black rounded-full font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 shadow-2xl overflow-hidden group"
                            >
                                Get Detailed Quote <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default PricingCalculator;
