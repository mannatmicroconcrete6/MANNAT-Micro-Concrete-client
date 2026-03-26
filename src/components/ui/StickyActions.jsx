"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, Edit3, X } from 'lucide-react';
import Link from 'next/link';

const StickyActions = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const actions = [
        { icon: MessageSquare, label: 'WhatsApp', href: 'https://wa.me/919540490459', color: '#25D366' },
        { icon: Phone, label: 'Call', href: 'tel:+919540490459', color: '#d4af37' },
        { icon: Edit3, label: 'Email', href: 'mailto:mannatmicroconcrete6@gmail.com', color: '#3b82f6' },
    ];

    return (
        <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex flex-col items-end gap-3 md:gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        className="flex flex-col gap-3 md:gap-4 mb-2"
                    >
                        {actions.map((action, i) => (
                            <motion.a
                                key={i}
                                href={action.href}
                                aria-label={`${action.label} - Contact Mannat Micro Concrete`}
                                target={action.label === 'WhatsApp' ? "_blank" : undefined}
                                rel={action.label === 'WhatsApp' ? "noopener noreferrer" : undefined}
                                whileHover={{ scale: 1.05, x: -5 }}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white dark:bg-zinc-900 text-black dark:text-white px-5 md:px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl font-bold text-[10px] uppercase tracking-widest border border-black/5 dark:border-white/5 group"
                            >
                                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white transition-colors" style={{ backgroundColor: action.color }}>
                                    <action.icon size={16} fill={action.label === 'WhatsApp' ? "white" : "none"} />
                                </div>
                                <span>{action.label}</span>
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close contact menu" : "Open contact options"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 md:w-16 md:h-16 bg-[#d4af37] text-black rounded-full flex items-center justify-center shadow-2xl transition-all relative overflow-hidden group"
            >
                <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ type: 'spring', damping: 20 }}
                >
                    {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
                </motion.div>
                <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
            </motion.button>
        </div>
    );
};

export default StickyActions;
