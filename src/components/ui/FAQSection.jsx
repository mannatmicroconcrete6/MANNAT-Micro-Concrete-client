"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQSection = ({ faqs = [] }) => {
    const [openIndex, setOpenIndex] = useState(null);

    // JSON-LD FAQPage Schema for Search Results
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section className="py-32 px-6 bg-zinc-50 dark:bg-[#050505] transition-colors duration-500">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="max-w-[1000px] mx-auto">
                <div className="text-center mb-20">
                    <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Expert Guidance</span>
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.85] text-black dark:text-white">
                        Common <br />
                        <span className="text-black/30 dark:text-white/30">Enquiries.</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className="bg-white dark:bg-zinc-900/50 rounded-[2rem] border border-black/5 dark:border-white/5 overflow-hidden shadow-sm"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-10 py-8 flex items-center justify-between text-left group"
                            >
                                <h3 className={`text-sm md:text-lg font-bold uppercase tracking-tight transition-colors duration-300 ${openIndex === index ? "text-[#d4af37]" : "text-black dark:text-white group-hover:text-[#d4af37]"}`}>
                                    {faq.question}
                                </h3>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${openIndex === index ? "bg-[#d4af37] text-black rotate-180" : "bg-black/5 dark:bg-white/5 text-black/20 dark:text-white/20"}`}>
                                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                </div>
                            </button>
                            
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <div className="px-10 pb-10">
                                            <div className="w-full h-px bg-black/5 dark:bg-white/5 mb-8" />
                                            <p className="text-black/60 dark:text-white/50 text-base font-light leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
