"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const cities = [
    { name: "Delhi & NCR", slug: "delhi", code: "DEL", desc: "Our primary studio and manufacturing hub." },
    { name: "Mumbai", slug: "mumbai", code: "BOM", desc: "Serving luxury high-rises and coastal residences." },
    { name: "Bangalore", slug: "bangalore", code: "BLR", desc: "Architectural monolithic projects in the tech hub." },
    { name: "Dubai", slug: "dubai", code: "DXB", desc: "International luxury finishes for high-end properties." },
];

const LocationsPage = () => {
    return (
        <div className="bg-black text-white pt-40 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-32">
                    <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.4em]">Presence</span>
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mt-6 uppercase leading-[0.9]">
                        Strategic <br />
                        <span className="text-white/40">Locations.</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cities.map((city, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="bg-[#0a0a0a] border border-white/5 p-10 rounded-[2rem] group hover:border-[#d4af37]/20 transition-all"
                        >
                            <span className="text-4xl font-bold text-white/10 group-hover:text-[#d4af37]/20 transition-colors uppercase mb-6 block">{city.code}</span>
                            <h3 className="text-2xl font-bold mb-4 tracking-tight">{city.name}</h3>
                            <p className="text-white/40 text-sm font-light leading-relaxed mb-8">
                                {city.desc}
                            </p>
                            <Link
                                href={`/locations/${city.slug}`}
                                className="text-xs font-bold uppercase tracking-widest text-[#d4af37] border-b border-[#d4af37]/20 pb-1"
                            >
                                View Services
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LocationsPage;
