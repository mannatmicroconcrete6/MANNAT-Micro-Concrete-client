import React from "react";

export default function Loading() {
    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-[99999]">
            <div className="flex flex-col items-center">
                {/* Animated Gold Ring */}
                <div className="relative w-24 h-24 mb-6">
                    <div className="absolute inset-0 border-2 border-[#d4af37]/20 rounded-full" />
                    <div className="absolute inset-0 border-2 border-[#d4af37] border-t-transparent rounded-full animate-spin" />
                </div>

                {/* Text */}
                <p className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.4em] animate-pulse">
                    Crafting Surface
                </p>
            </div>
        </div>
    );
}
