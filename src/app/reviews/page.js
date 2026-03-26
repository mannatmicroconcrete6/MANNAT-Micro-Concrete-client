"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [];

const ReviewsPage = () => {
    return (
        <div className="bg-white dark:bg-black text-black dark:text-white pt-40 pb-20 px-6 transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-32">
                    <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.4em]">Testimonials</span>
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mt-6 uppercase leading-[0.8] mb-12">
                        Client <br />
                        <span className="text-black/40 dark:text-white/40">Reflections.</span>
                    </h1>
                </div>

                {reviews.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {reviews.map((review, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-zinc-50 dark:bg-zinc-900 border border-black/5 dark:border-white/5 p-12 rounded-[3rem] relative group hover:border-[#d4af37]/30 transition-all"
                            >
                                <Quote size={40} className="text-[#d4af37]/10 dark:text-[#d4af37]/5 absolute top-10 right-10" />

                                <div className="flex gap-1 mb-8">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} size={14} fill="#d4af37" className="text-[#d4af37]" />
                                    ))}
                                </div>

                                <p className="text-black/60 dark:text-white/40 text-lg font-light leading-relaxed mb-10">
                                    "{review.text}"
                                </p>

                                <div>
                                    <h4 className="text-xl font-bold tracking-tight uppercase">{review.name}</h4>
                                    <p className="text-[#d4af37] text-[10px] uppercase tracking-widest font-bold mt-1">{review.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 border border-dashed border-black/10 dark:border-white/10 rounded-[3rem]">
                        <p className="text-black/40 dark:text-white/40 text-xl font-light">Client testimonials coming soon. We're currently collecting reflections from our latest masterpiece projects.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReviewsPage;
