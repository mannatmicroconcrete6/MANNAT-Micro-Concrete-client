"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const BeforeAfter = ({ before, after, title }) => {
    const [sliderPosition, setSliderPosition] = useState(50);

    const handleMove = (e) => {
        const containerRect = e.currentTarget.getBoundingClientRect();
        const x = ((e.pageX - containerRect.left) / containerRect.width) * 100;
        if (x >= 0 && x <= 100) {
            setSliderPosition(x);
        }
    };

    return (
        <div
            className="relative aspect-video rounded-3xl overflow-hidden border border-white/5 cursor-ew-resize select-none shadow-2xl"
            onMouseMove={handleMove}
            onTouchMove={(e) => handleMove(e.touches[0])}
        >
            <div className="absolute inset-0">
                <Image
                    src={after}
                    alt="After"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                />
            </div>

            <div
                className="absolute inset-0 z-10"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <Image
                    src={before}
                    alt="Before"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover grayscale"
                />
            </div>

            <div
                className="absolute top-0 bottom-0 w-[2px] bg-white z-20"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-2xl">
                    <div className="flex gap-1">
                        <div className="w-[1px] h-3 bg-black/20" />
                        <div className="w-[1px] h-3 bg-black/20" />
                    </div>
                </div>
            </div>

            <div className="absolute bottom-6 left-6 z-30 pointer-events-none">
                <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/10 uppercase">Before</span>
            </div>
            <div className="absolute bottom-6 right-6 z-30 pointer-events-none">
                <span className="bg-[#d4af37] text-black text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full uppercase">After</span>
            </div>
        </div>
    );
};

export default BeforeAfter;
