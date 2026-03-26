"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Pencil, Settings, Plus, Image as ImageIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AdminServicesPage() {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Initial Auth Check
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/admin/login');
        } else {
            setIsAuthenticated(true);
        }
    }, [router]);

    if (!isAuthenticated) return null;

    return (
        <div className="p-10 min-h-screen bg-[#050505] text-white">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.4em] mb-2 block">Content Management</span>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase leading-[0.9]">
                        Our <span className="text-white/30">Services.</span>
                    </h1>
                </div>
                <button
                    onClick={() => alert("CMS editing will be enabled in a future release.")}
                    className="bg-[#d4af37] text-black px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] flex items-center gap-2 hover:bg-white transition-colors"
                >
                    <Plus size={14} /> Add Service
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Mock CMS list of services to match the client facing data */}
                {[
                    { id: 1, title: 'Microcement Flooring', slug: 'microcement-flooring', category: 'Flooring' },
                    { id: 2, title: 'Microcement Walls', slug: 'microcement-walls', category: 'Walls' },
                    { id: 3, title: 'Venetian Lime Plaster', slug: 'venetian-plaster', category: 'Plaster' },
                    { id: 4, title: 'Epoxy Technical Coating', slug: 'epoxy-coatings', category: 'Flooring' },
                    { id: 5, title: 'Luxury Lime Wash', slug: 'lime-wash', category: 'Walls' },
                    { id: 6, title: 'Luxury Wetrooms', slug: 'luxury-wetrooms', category: 'Bathrooms' },
                    { id: 7, title: 'Bespoke Furniture', slug: 'bespoke-furniture', category: 'Custom' },
                    { id: 8, title: 'Venetian Terrazzo', slug: 'terrazzo', category: 'Flooring' }
                ].map((service) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={service.id}
                        className="bg-zinc-900 border border-white/5 rounded-3xl p-6 hover:border-[#d4af37]/30 transition-colors group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                            <Settings size={40} className="text-[#d4af37] rotate-0 group-hover:rotate-90 transition-transform duration-1000" />
                        </div>

                        <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center border border-white/10 mb-6">
                            <ImageIcon size={20} className="text-white/40" />
                        </div>

                        <span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37] mb-2 block">
                            {service.category}
                        </span>

                        <h3 className="text-lg font-bold uppercase tracking-tight mb-6">
                            {service.title}
                        </h3>

                        <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                            <span className="text-[10px] font-mono text-white/30">
                                /{service.slug}
                            </span>

                            <button
                                onClick={() => alert(`Edit panel for ${service.title} would open here.`)}
                                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#d4af37] hover:text-black flex items-center justify-center transition-colors text-white/60"
                            >
                                <Pencil size={12} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-12 p-8 border border-white/5 rounded-3xl bg-black flex items-center justify-between">
                <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-2">CMS Notice</h4>
                    <p className="text-[10px] uppercase tracking-widest text-white/40">Services are currently hardcoded for optimal Core Web Vitals speed.</p>
                </div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse blur-[2px]" />
            </div>
        </div>
    );
}
