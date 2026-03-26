"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Waves, Layers, Ruler, Droplets, Grid3X3, Zap, Paintbrush } from 'lucide-react';

const services = [
    {
        title: "Microcement Flooring",
        slug: "microcement-flooring",
        icon: Grid3X3,
        description: "Industrial strength meet residential elegance. Joint-free monolithic floors.",
        price: "200",
        image: "https://images.adsttc.com/media/images/5823/4b5f/e58e/ce4f/cd00/0046/medium_jpg/06.jpg?1478708056"
    },
    {
        title: "Microcement Walls",
        slug: "microcement-walls",
        icon: Layers,
        description: "Sculptural vertical surfaces that redefine architectural limits.",
        price: "100",
        image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Epoxy",
        slug: "epoxy",
        icon: Zap,
        description: "High-gloss, ultra-durable technical coating solutions.",
        price: "100",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Venetian Lime Plaster",
        slug: "venetian-plaster",
        icon: Paintbrush,
        description: "Traditional lime-based finishes for timeless luxury.",
        price: "100",
        image: "https://images.unsplash.com/photo-1621293954908-907159247fc8?auto=format&fit=crop&q=80&w=1200"
    },
    {
        title: "Lime Wash",
        slug: "lime-wash",
        icon: Waves,
        description: "Artisanal textured walls with a breathable, mineral finish.",
        price: "100",
        image: "https://media.istockphoto.com/id/1864866424/photo/dark-wabi-sabi-style-interior-with-copy-space-on-the-limewash-wall-background-wall-mockup-3d.jpg?s=1024x1024&w=is&k=20&c=c6cBuYNmkgzUsqjVovTBwAomuRA8Y3IsdLNKbxTrG6A="
    },
    {
        title: "Terrazzo",
        slug: "terrazzo",
        icon: Grid3X3,
        description: "Classic Italian composite with marble aggregates.",
        price: "150",
        image: "https://plus.unsplash.com/premium_photo-1678447323507-aeae3b4ee525?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVycmF6em98ZW58MHx8MHx8fDA%3D"
    },
    {
        title: "Countertops & Stairs",
        slug: "countertops-stairs",
        icon: Ruler,
        description: "Seamless transitions for furniture and structural elements.",
        price: "200+",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "Wetrooms & Bathrooms",
        slug: "bathrooms",
        icon: Droplets,
        description: "100% waterproof luxury finishes for spa-like experiences.",
        price: "150+",
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800"
    }
];

import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ComparisonGrid from '@/components/ui/ComparisonGrid';

const ServicesClient = () => {
    return (
        <div className="bg-white dark:bg-black text-black dark:text-white pt-40 pb-20 px-6 transition-colors duration-500">
            <div className="max-w-[1600px] mx-auto">
                <div className="mb-12">
                    <Breadcrumbs />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-32"
                >
                    <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.4em]">Expert Finishes</span>
                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter mt-6 mb-12 uppercase leading-[0.85]">
                        Premium <br />
                        <span className="text-black/30 dark:text-white/40">Surface Finishes.</span>
                    </h1>
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {['Residential', 'Commercial', 'Wet Areas', 'Furniture'].map((badge) => (
                            <span key={badge} className="px-8 py-3 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-full text-[10px] font-black uppercase tracking-widest text-black/40 dark:text-white/40">
                                {badge}
                            </span>
                        ))}
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative h-[600px] bg-zinc-50 dark:bg-[#0a0a0a] border border-black/5 dark:border-white/5 rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-700"
                        >
                            <div className="absolute inset-0 overflow-hidden">
                                <Image
                                    src={`${service.image}&w=1200&q=60`}
                                    alt={service.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-10 flex flex-col items-start">
                                <div className="w-14 h-14 bg-[#d4af37] text-black rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                                    <service.icon size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4 tracking-tighter uppercase leading-none">{service.title}</h3>
                                <p className="text-white/50 text-sm font-light mb-8 max-w-xs leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="flex justify-between items-center w-full pt-8 border-t border-white/10">
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="text-[#d4af37] text-[10px] font-black uppercase tracking-widest flex items-center gap-2 group/link"
                                    >
                                        Details <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
                                    </Link>
                                    <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">₹{service.price}/sq.ft</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Band */}
                <div className="bg-[#d4af37] rounded-[4rem] p-12 md:p-24 text-center mb-40">
                    <h2 className="text-4xl md:text-7xl font-bold text-black tracking-tighter uppercase leading-[0.8] mb-12">
                        Ready to Begin Your <br />
                        <span className="text-white">Seamless Journey?</span>
                    </h2>
                    <Link
                        href="/enquiry"
                        className="inline-block px-12 py-6 bg-black text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-zinc-800 transition-all shadow-2xl"
                    >
                        Book Consultation
                    </Link>
                </div>

                {/* Section 6: Comparison Grid */}
                <ComparisonGrid />

                {/* Pricing Guide Section */}
                <section className="py-24 border-t border-black/5 dark:border-white/5">
                    <div className="text-center mb-16">
                        <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.4em]">Investment Guide</span>
                        <h2 className="text-4xl font-bold tracking-tighter mt-4 uppercase text-black dark:text-white transition-colors">Standard <span className="text-black/30 dark:text-white/30">Pricing.</span></h2>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {[
                            { name: 'Microcement Walls', price: '100' },
                            { name: 'Microcement Flooring', price: '200' },
                            { name: 'Epoxy Coating', price: '100' },
                            { name: 'Venetian Lime Plaster', price: '100' },
                            { name: 'Lime Wash Finish', price: '100' },
                            { name: 'Terrazzo', price: '150' },
                        ].map((item, i) => (
                            <div key={i} className="flex justify-between items-center p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-black/5 dark:border-white/5 group hover:border-[#d4af37]/30 transition-all">
                                <span className="text-lg font-bold tracking-tight uppercase group-hover:text-[#d4af37] transition-colors text-black dark:text-white">{item.name}</span>
                                <div className="text-right">
                                    <span className="text-[#d4af37] text-3xl font-black">₹{item.price}</span>
                                    <span className="text-[10px] text-black/30 dark:text-white/30 uppercase tracking-widest block font-bold">Per Square Feet</span>
                                </div>
                            </div>
                        ))}
                        <p className="text-center text-black/40 dark:text-white/40 text-[10px] uppercase tracking-widest font-bold mt-12 leading-relaxed">
                            *Prices are indicative and may vary based on site conditions, <br /> substrate preparation, and design complexity.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ServicesClient;
