"use client";
import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const LuxuryCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 200 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        const checkTouch = () => {
            setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
        };
        checkTouch();

        const moveMouse = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleHoverStart = (e) => {
            if (e.target.closest('a, button, select, [role="button"]')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveMouse);
        window.addEventListener('mouseover', handleHoverStart);

        return () => {
            window.removeEventListener('mousemove', moveMouse);
            window.removeEventListener('mouseover', handleHoverStart);
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[99999]">
            {/* The Main Arrow Cursor */}
            <motion.div
                className="fixed top-0 left-0"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%'
                }}
            >
                <motion.div
                    animate={{
                        scale: isHovering ? 1.5 : 1,
                        rotate: isHovering ? 45 : 0
                    }}
                    transition={{ type: "spring", damping: 30, stiffness: 200 }}
                    className="relative"
                >
                    {/* Architectural Arrow Icon */}
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Outer Glow Circle */}
                        <circle cx="20" cy="20" r="18" stroke="#d4af37" strokeWidth="1" strokeDasharray="2 4" className="opacity-30" />
                        
                        {/* The Arrow */}
                        <g className={isHovering ? "text-[#d4af37]" : "text-[#d4af37]"}>
                            <path d="M14 20H26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="round"/>
                            <path d="M22 16L26 20L22 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="round"/>
                        </g>
                    </svg>
                    
                    {/* Hover Indicator Label */}
                    <motion.span 
                        animate={{ opacity: isHovering ? 1 : 0, x: isHovering ? 30 : 20 }}
                        className="absolute left-full top-1/2 -translate-y-1/2 text-[10px] font-black uppercase tracking-[0.3em] text-[#d4af37] whitespace-nowrap bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#d4af37]/20"
                    >
                        View
                    </motion.span>
                </motion.div>
            </motion.div>

            {/* Subtle Glow Trail */}
            <motion.div
                className="fixed top-0 left-0 w-32 h-32 bg-[#d4af37]/5 rounded-full blur-3xl"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%'
                }}
            />
        </div>
    );
};

export default LuxuryCursor;
