"use client";
import React from 'react';
import EnquiryForm from '@/components/ui/EnquiryForm';
import { motion } from 'framer-motion';

const EnquiryPage = () => {
    return (
        <div className="bg-white dark:bg-black text-black dark:text-white pt-40 pb-20 px-6 min-h-screen transition-colors duration-500">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.4em]">Design Consultation</span>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mt-6 uppercase leading-tight">
                        Begin Your <br />
                        <span className="text-black/30 dark:text-white/40">Continuity Journey.</span>
                    </h1>
                    <p className="text-black/40 dark:text-white/40 mt-6 font-light max-w-sm mx-auto">
                        Submit your project details and our lead designer will contact you within 24 hours.
                    </p>
                </motion.div>

                <div className="bg-zinc-50 dark:bg-[#0a0a0a] border border-black/5 dark:border-white/5 p-8 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/5 blur-3xl rounded-full" />
                    <EnquiryForm />
                </div>

                <p className="text-center text-[10px] uppercase tracking-widest text-black/20 dark:text-white/20 mt-12 mb-20">
                    By submitting this form, you agree to our <a href="/privacy-policy" className="underline">Privacy Policy</a> & <a href="/terms" className="underline">Terms</a>.
                </p>
            </div>
        </div>
    );
};

export default EnquiryPage;
