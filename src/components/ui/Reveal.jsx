"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Reveal({ children, delay = 0, width = "fit-content" }) {
    return (
        <div style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay }}
                viewport={{ once: true }}
            >
                {children}
            </motion.div>
        </div>
    );
}
