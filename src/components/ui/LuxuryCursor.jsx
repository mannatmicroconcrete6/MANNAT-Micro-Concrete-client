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

    if (!isVisible || isTouch) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[99999]">
            {/* The Main Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-[#d4af37] rounded-full mix-blend-difference"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%'
                }}
            />

            {/* The Trailing Circle */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-[#d4af37]/50 rounded-full"
                animate={{
                    scale: isHovering ? 2 : 1,
                    backgroundColor: isHovering ? 'rgba(212, 175, 55, 0.1)' : 'rgba(212, 175, 55, 0)',
                }}
                transition={{ type: "spring", damping: 30, stiffness: 200 }}
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%'
                }}
            />

            {/* Subtle Glow */}
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
