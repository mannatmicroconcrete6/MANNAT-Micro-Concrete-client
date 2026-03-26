"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import EnquiryForm from './EnquiryForm';

const EnquiryModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if user has already submitted the form in the past
        const hasSubmitted = localStorage.getItem('hasSubmittedEnquiry');

        if (!hasSubmitted) {
            // First time it opens after 8 seconds, then repeatedly every 8 seconds if closed
            const interval = setInterval(() => {
                const currentStatus = localStorage.getItem('hasSubmittedEnquiry');
                if (!currentStatus && !isOpen) {
                    setIsOpen(true);
                }
            }, 8000); // 8 seconds

            return () => clearInterval(interval);
        }
    }, [isOpen]);

    const handleClose = () => {
        // Just close it currently, letting the 8s timer potentially bring it back
        setIsOpen(false);
    };

    const handleSuccess = () => {
        // Mark as permanently submitted so it never pops up again
        localStorage.setItem('hasSubmittedEnquiry', 'true');
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6 md:p-10">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-2xl bg-white dark:bg-[#0a0a0a] rounded-[2rem] shadow-2xl border border-black/5 dark:border-white/10 max-h-[92vh] overflow-y-auto"
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-8 right-8 z-10 w-10 h-10 bg-black/5 dark:bg-white/5 hover:bg-[#d4af37] hover:text-black rounded-full flex items-center justify-center transition-all group"
                        >
                            <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                        </button>

                        <div className="p-5 md:p-8">
                            <div className="mb-4 text-center">
                                <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.4em] mb-1 block">Consultation</span>
                                <h2 className="text-xl md:text-3xl font-bold tracking-tighter uppercase leading-[0.9]">
                                    Architectural <br />
                                    <span className="text-black/30 dark:text-white/40">Inquiry.</span>
                                </h2>
                                <p className="text-black/40 dark:text-white/40 text-[9px] uppercase tracking-widest mt-2 font-black">
                                    Book a free site visit & physical sample review
                                </p>
                            </div>

                            <EnquiryForm onSuccess={handleSuccess} />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default EnquiryModal;
