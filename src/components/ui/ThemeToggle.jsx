"use client";
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/providers/ThemeProvider';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <label className="relative inline-flex items-center cursor-pointer group">
            <input
                type="checkbox"
                className="sr-only"
                checked={theme === 'dark'}
                onChange={toggleTheme}
            />
            <div className="w-12 h-6 bg-black/5 dark:bg-white/10 rounded-full border border-black/5 dark:border-white/10 transition-colors duration-500 relative flex items-center px-1">
                <motion.div
                    animate={{ x: theme === 'dark' ? 24 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="w-4 h-4 bg-white dark:bg-[#d4af37] rounded-full shadow-lg flex items-center justify-center"
                >
                    {theme === 'dark' ? <Moon size={8} className="text-black" /> : <Sun size={8} className="text-[#d4af37]" />}
                </motion.div>
            </div>
        </label>
    );
};

export default ThemeToggle;
