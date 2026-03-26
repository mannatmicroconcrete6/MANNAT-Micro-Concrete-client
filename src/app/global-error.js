"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function GlobalError({
    error,
    reset,
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error("Global Error Caught:", error);
    }, [error]);

    return (
        <html>
            <body>
                <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-md w-full"
                    >
                        <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-red-500 text-3xl font-bold">!</span>
                        </div>

                        <h2 className="text-3xl font-bold uppercase tracking-tighter mb-4 text-[#d4af37]">
                            System Interruption
                        </h2>

                        <p className="text-white/40 text-sm mb-8">
                            We encountered an unexpected error processing your request. Our systems have logged the issue.
                        </p>

                        <button
                            onClick={() => reset()}
                            className="bg-[#d4af37] text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
                        >
                            Recover Session
                        </button>
                    </motion.div>
                </div>
            </body>
        </html>
    );
}
