"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Menu, X, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeToggle from '@/components/ui/ThemeToggle';

const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Process', href: '/process' },
    { name: 'Finishes', href: '/finishes' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHomePage = pathname === '/';
    const shouldShowSolid = scrolled || !isHomePage;

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 w-full z-[100] transition-all duration-500 px-6 md:px-12",
                    shouldShowSolid
                        ? "bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-black/5 dark:border-white/5 py-3 shadow-sm"
                        : "bg-transparent pt-12 pb-8"
                )}
            >
                <div className="max-w-[1600px] mx-auto flex justify-between items-center">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-4 group shrink-0">
                        <div className="relative w-8 h-8 md:w-11 md:h-11 rounded-full overflow-hidden border border-[#d4af37]/20 shadow-2xl">
                            <Image 
                                src="https://lh3.googleusercontent.com/d/1rjha7IkwcHFlzTSeQdw5ojgRqCJouQCI"
                                alt="Mannat Logo"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                priority
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className={cn(
                                "text-xl md:text-2xl font-black tracking-tighter transition-colors duration-500 leading-none",
                                shouldShowSolid ? "text-black dark:text-white" : "text-white"
                            )}>
                                MANNAT <span className="text-[#d4af37]">.</span>
                            </span>
                            <span className={cn(
                                "text-[8px] uppercase tracking-[0.4em] font-black mt-1 transition-opacity leading-none",
                                shouldShowSolid ? "text-black/60 dark:text-white/40" : "text-white/50"
                            )}>
                                Micro Concrete
                            </span>
                        </div>
                    </Link>
                    {/* Navigation - Centered Desktop Link Grid */}
                    <div className={cn(
                        "hidden lg:flex items-center backdrop-blur-md rounded-full px-8 py-3 border gap-8 transition-all duration-500",
                        shouldShowSolid
                            ? "bg-black/[0.03] dark:bg-white/5 border-black/5 dark:border-white/10"
                            : "bg-white/10 border-white/20"
                    )}>
                        {navLinks.slice(0, 5).map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-[9px] uppercase tracking-[0.25em] font-black transition-all duration-300 relative group",
                                    pathname === link.href
                                        ? "text-[#d4af37]"
                                        : (shouldShowSolid ? "text-black/60 dark:text-white/40 hover:text-black dark:hover:text-white" : "text-white/60 hover:text-white")
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-4">
                        <div className="hidden xl:flex items-center gap-6 mr-4 border-r border-black/5 dark:border-white/10 pr-6">
                            {navLinks.slice(5).map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "text-[9px] uppercase tracking-[0.25em] font-black transition-all duration-300",
                                        pathname === link.href
                                            ? "text-[#d4af37]"
                                            : (shouldShowSolid ? "text-black/60 dark:text-white/40 hover:text-black dark:hover:text-white" : "text-white/40 hover:text-white/80")
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="hidden lg:block">
                            <ThemeToggle />
                        </div>

                        <Link
                            href="/enquiry"
                            className="bg-[#d4af37] text-black px-6 md:px-8 py-3 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-white dark:hover:bg-zinc-800 dark:hover:text-white transition-all duration-500 shadow-xl"
                        >
                            Enquire
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className={cn(
                                "lg:hidden p-2 transition-colors",
                                scrolled ? "text-black dark:text-white" : "text-white"
                            )}
                        >
                            <Menu size={24} strokeWidth={2} />
                        </button>
                    </div>
                </div>
            </nav >

            {/* Mobile Drawer */}
            < AnimatePresence >
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] bg-white dark:bg-black"
                    >
                        {/* Background Decorative Logo */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
                            <h2 className="text-[30vw] font-black leading-none uppercase">Mannat</h2>
                        </div>

                        <div className="relative h-full flex flex-col pt-32 pb-12 px-10">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-10 right-10 text-black dark:text-white group"
                            >
                                <div className="w-12 h-12 rounded-full border border-black/5 dark:border-white/10 flex items-center justify-center group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all">
                                    <X size={24} strokeWidth={1} />
                                </div>
                            </button>

                            <div className="flex flex-col gap-4 flex-1">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-px bg-[#d4af37]" />
                                        <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.4em]">Project Index 01-07</span>
                                    </div>
                                    <ThemeToggle />
                                </div>

                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.08, duration: 0.8 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={cn(
                                                "text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] block py-2 transition-all duration-500",
                                                pathname === link.href ? "text-[#d4af37]" : "text-black/10 dark:text-white/10 hover:text-black dark:hover:text-white"
                                            )}
                                        >
                                            {link.name} <span className="text-[14px] text-[#d4af37] align-top">{String(i + 1).padStart(2, '0')}</span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-black/5 dark:border-white/5">
                                <Link
                                    href="/enquiry"
                                    onClick={() => setIsOpen(false)}
                                    className="col-span-2 bg-[#d4af37] text-black py-5 rounded-full text-center font-black uppercase tracking-[0.2em] text-[10px] shadow-2xl"
                                >
                                    Start a Project
                                </Link>
                                <a href="tel:+919540490459" className="text-center text-[10px] font-black uppercase tracking-widest text-black/40 dark:text-white/40">Call Studio</a>
                                <a href="https://wa.me/919540490459" className="text-center text-[10px] font-black uppercase tracking-widest text-black/40 dark:text-white/40">WhatsApp</a>
                            </div>
                        </div>
                    </motion.div>
                )
                }
            </AnimatePresence >
        </>
    );
};

export default Navbar;
