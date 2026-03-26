"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ShieldCheck, Zap, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import PortfolioPreview from '@/components/home/PortfolioPreview';
import PricingCalculator from '@/components/ui/PricingCalculator';

const LocationClient = ({ city }) => {
    const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);

    return (
        <div className="bg-white dark:bg-black text-black dark:text-white pt-40 pb-20 px-6 transition-colors duration-500">
            <div className="max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.4em] mb-8 block flex items-center gap-2">
                            <MapPin size={12} /> Serving {capitalizedCity} NCR & Surrounding Areas
                        </span>
                        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-10 uppercase leading-[0.85] transition-colors">
                            The Finest <br />
                            Microcement in <br />
                            <span className="text-[#d4af37]">{capitalizedCity}.</span>
                        </h1>
                        <p className="text-black/60 dark:text-white/60 text-xl font-light leading-relaxed max-w-xl mb-12">
                            Elevate your {capitalizedCity} property with our artisanal seamless surfaces. From luxury apartments in the heart of the city to sprawling commercial spaces, we deliver the gold standard in architectural finishes.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-16">
                            {['Certified Artisans', '2 Year Warranty', 'Imported Minerals'].map((tag) => (
                                <div key={tag} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#d4af37] bg-[#d4af37]/10 px-6 py-3 rounded-full">
                                    <ShieldCheck size={14} /> {tag}
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/enquiry"
                            className="inline-block px-12 py-6 bg-black dark:bg-white text-white dark:text-black rounded-full font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-2xl"
                        >
                            Request Site Visit in {capitalizedCity}
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative aspect-square md:aspect-[4/5] rounded-[4rem] overflow-hidden border border-black/5 dark:border-white/5 shadow-2xl group"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200"
                            alt={`Luxury Interior in ${capitalizedCity}`}
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s]"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-black/80 to-transparent">
                            <h3 className="text-white text-3xl font-bold uppercase tracking-tighter mb-2">Artisanal Excellence</h3>
                            <p className="text-white/50 text-xs font-black uppercase tracking-widest leading-none">Hand-Troweled in {capitalizedCity}</p>
                        </div>
                    </motion.div>
                </div>

                {/* Local Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
                    {[
                        { label: 'Site Visits', value: '24hr', sub: 'Response Time' },
                        { label: 'Projects Done', value: '150+', sub: `In ${capitalizedCity} Metro` },
                        { label: 'Local Team', value: '12', sub: 'Qualified Artisans' },
                    ].map((stat, i) => (
                        <div key={i} className="p-12 rounded-[3.5rem] bg-zinc-50 dark:bg-zinc-900 border border-black/5 dark:border-white/5 text-center">
                            <h4 className="text-[#d4af37] text-6xl font-black tracking-tighter mb-2">{stat.value}</h4>
                            <p className="text-black dark:text-white font-bold uppercase tracking-tighter text-xl mb-1">{stat.label}</p>
                            <p className="text-black/30 dark:text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">{stat.sub}</p>
                        </div>
                    ))}
                </div>

                {/* Pricing Calculator Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
                    <div className="order-2 lg:order-1">
                        <PricingCalculator />
                    </div>
                    <div className="order-1 lg:order-2 space-y-10">
                        <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.4em]">Investment</span>
                        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.9]">Transparent <br /><span className="text-black/30 dark:text-white/30">Local Rates.</span></h2>
                        <p className="text-black/60 dark:text-white/50 text-xl font-light leading-relaxed">
                            We believe in clarity. Our pricing for {capitalizedCity} is standardized, ensuring you get the same premium quality without hidden "city premiums." Use our calculator to get an instant estimate for your space.
                        </p>
                        <ul className="space-y-6">
                            {['No hidden travel fees in metro zones', 'Complimentary site sample session', 'Structural assessment included'].map(item => (
                                <li key={item} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest">
                                    <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">
                                        <Award size={14} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mb-40">
                    <div className="text-center mb-20">
                        <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.4em]">Local Gallery</span>
                        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.9] mt-6">Projects near <br /><span className="text-black/30 dark:text-white/40">{capitalizedCity}.</span></h2>
                    </div>
                    <PortfolioPreview city={capitalizedCity} />
                </div>
            </div>
        </div>
    );
};

export default LocationClient;
