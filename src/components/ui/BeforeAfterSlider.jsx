"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const BeforeAfterSlider = ({
    beforeImage = "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff",
    afterImage = "https://images.unsplash.com/photo-1621293954908-907159247fc8",
    beforeLabel = "Old Concrete",
    afterLabel = "Mannat Luxury"
}) => {
    const [sliderPos, setSliderPos] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);

    const handleMove = (clientX) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        setSliderPos((x / rect.width) * 100);
    };

    const handleMouseMove = (e) => isDragging && handleMove(e.clientX);
    const handleTouchMove = (e) => isDragging && handleMove(e.touches[0].clientX);

    const handleMouseDown = () => setIsDragging(true);
    const handleTouchStart = () => setIsDragging(true);

    useEffect(() => {
        const handleUp = () => setIsDragging(false);
        window.addEventListener('mouseup', handleUp);
        window.addEventListener('touchend', handleUp);
        return () => {
            window.removeEventListener('mouseup', handleUp);
            window.removeEventListener('touchend', handleUp);
        };
    }, []);

    return (
        <section className="py-24 px-6 bg-zinc-50 dark:bg-black overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">The Transformation</span>
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.85]">
                        Witness The <br />
                        <span className="text-black/30 dark:text-white/30 text-3xl md:text-6xl">Metamorphosis.</span>
                    </h2>
                </div>

                <div
                    ref={containerRef}
                    className="relative aspect-[21/9] w-full rounded-[3rem] overflow-hidden shadow-2xl border border-black/5 dark:border-white/10 select-none cursor-ew-resize"
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleTouchMove}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleTouchStart}
                >
                    {/* After Image (Background) */}
                    <div className="absolute inset-0">
                        <Image
                            src={`${afterImage}?auto=format&fit=crop&q=70&w=1600`}
                            alt="After transformation"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-8 right-12 bg-black/60 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 text-white text-[10px] font-black uppercase tracking-widest z-20">
                            {afterLabel}
                        </div>
                    </div>

                    {/* Before Image (Foreground) */}
                    <div
                        className="absolute inset-0 overflow-hidden z-10"
                        style={{ width: `${sliderPos}%` }}
                    >
                        <div className="absolute inset-0 w-[100vw] lg:w-[1400px]">
                            <Image
                                src={`${beforeImage}?auto=format&fit=crop&q=70&w=1600`}
                                alt="Before transformation"
                                fill
                                className="object-cover grayscale"
                            />
                        </div>
                        <div className="absolute bottom-8 left-12 bg-white/60 backdrop-blur-md px-6 py-2 rounded-full border border-black/10 text-black text-[10px] font-black uppercase tracking-widest whitespace-nowrap z-20">
                            {beforeLabel}
                        </div>
                    </div>

                    {/* Slider Line & Handle */}
                    <div
                        className="absolute top-0 bottom-0 w-1 bg-white shadow-xl z-10"
                        style={{ left: `${sliderPos}%` }}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-[#d4af37]">
                            <div className="flex gap-1">
                                <div className="w-1 h-3 bg-black/20 rounded-full" />
                                <div className="w-1 h-3 bg-[#d4af37] rounded-full" />
                                <div className="w-1 h-3 bg-black/20 rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-center text-[10px] uppercase tracking-[0.3em] font-black text-black/30 dark:text-white/30 mt-12 animate-pulse">
                    Drag the slider to see the difference
                </p>
            </div>
        </section>
    );
};

export default BeforeAfterSlider;
