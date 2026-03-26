"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Maximize, Clock, Zap, ArrowRight, Share2 } from 'lucide-react';
import CTABand from '@/components/home/CTABand';

const ProjectDetail = () => {
    const { slug } = useParams();

    return (
        <div className="bg-white dark:bg-black min-h-screen transition-colors duration-500">
            {/* Full-width Gallery (Slider Placeholder) */}
            <section className="relative h-[80vh] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600"
                    alt="Project Hero"
                    fill
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-12 left-6 md:left-12 z-10 flex gap-4">
                    <button className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white/20 transition-all">
                        <Share2 size={18} />
                    </button>
                </div>
            </section>

            {/* Project Info */}
            <section className="py-24 px-6">
                <div className="max-w-[1600px] mx-auto">
                    <div className="flex flex-col lg:flex-row gap-20">
                        {/* Main Content */}
                        <div className="flex-1 space-y-12">
                            <div>
                                <div className="flex flex-wrap gap-3 mb-8">
                                    {['Flooring', 'Residential', 'Satin Finish'].map(tag => (
                                        <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-[#d4af37] py-1 border-b border-[#d4af37]/30">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-black dark:text-white uppercase leading-[0.9] mb-12">
                                    The Ivory <br />
                                    <span className="text-black/30 dark:text-white/30">Penthouse.</span>
                                </h1>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-12 border-y border-black/5 dark:border-white/5 mb-16">
                                    <div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-black/30 dark:text-white/30 block mb-2">City</span>
                                        <p className="text-sm font-bold text-black dark:text-white uppercase">Delhi NCR</p>
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-black/30 dark:text-white/30 block mb-2">Area</span>
                                        <p className="text-sm font-bold text-black dark:text-white uppercase">4,500 SQ.FT</p>
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-black/30 dark:text-white/30 block mb-2">Timeline</span>
                                        <p className="text-sm font-bold text-black dark:text-white uppercase">12 DAYS</p>
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-black/30 dark:text-white/30 block mb-2">Finish</span>
                                        <p className="text-sm font-bold text-black dark:text-white uppercase">MARBLE TEXTURE</p>
                                    </div>
                                </div>

                                <div className="prose dark:prose-invert max-w-none text-black/60 dark:text-white/50 text-xl font-light leading-relaxed space-y-8">
                                    <p>
                                        Located in the heart of the city, The Ivory Penthouse required a floor that could unify the expansive open-plan living area while maintaining a warm, residential feel.
                                    </p>
                                    <p>
                                        We applied our signature dual-tone microcement in a matte finish, creating a seamless flow from the entrance through to the balcony transitions, eliminating all traditional skirting lines for a truly monolithic look.
                                    </p>
                                </div>
                            </div>

                            {/* Additional Images */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-20">
                                <div className="aspect-square relative rounded-[3rem] overflow-hidden border border-black/5 dark:border-white/5">
                                    <Image src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                                </div>
                                <div className="aspect-square relative rounded-[3rem] overflow-hidden border border-black/5 dark:border-white/5">
                                    <Image src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="w-full lg:w-[400px] h-fit lg:sticky lg:top-32">
                            <div className="bg-zinc-50 dark:bg-zinc-900 p-12 rounded-[4rem] border border-black/5 dark:border-white/5 space-y-10">
                                <h4 className="text-2xl font-bold tracking-tighter uppercase text-black dark:text-white leading-tight">
                                    Want a <span className="text-[#d4af37]">Similar Finish?</span>
                                </h4>
                                <p className="text-black/40 dark:text-white/40 text-[10px] font-black uppercase tracking-widest leading-relaxed">
                                    Each project is bespoke. Talk to our designers to replicate this aesthetic in your space.
                                </p>
                                <Link
                                    href="/enquiry"
                                    className="w-full bg-black text-white py-6 rounded-3xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-zinc-800 shadow-xl transition-all"
                                >
                                    Get Estimates <ArrowRight size={16} />
                                </Link>
                                <div className="pt-10 border-t border-black/5 dark:border-white/10 flex justify-between items-center">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-black/30 dark:text-white/30">Next Project</span>
                                    <Link href="/projects" className="text-black dark:text-white hover:text-[#d4af37] transition-colors font-bold text-sm flex items-center gap-2 uppercase tracking-tighter">
                                        Horizon Villa <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Projects Carousel Placeholder */}
            {/* ... */}

            <CTABand />
        </div>
    );
};

export default ProjectDetail;
