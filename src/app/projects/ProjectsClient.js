"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Maximize2 } from 'lucide-react';
import Image from 'next/image';
import { API_ROUTES } from '@/config/api';

const ProjectsClient = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("All");
    const [city, setCity] = useState("All Cities");
    const [isCommercial, setIsCommercial] = useState(false);

    React.useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch(API_ROUTES.PROJECTS);
                const data = await res.json();
                setProjects(data);
            } catch (error) {
                console.error("Failed to fetch projects", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    const filteredProjects = projects.filter(p => {
        const matchesCat = filter === "All" || p.category === filter;
        const matchesCity = city === "All Cities" || p.city === city;
        return matchesCat && matchesCity;
    });

    return (
        <div className="bg-white dark:bg-black text-black dark:text-white pt-40 pb-20 px-6 transition-colors duration-500">
            <div className="max-w-[1600px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-24"
                >
                    <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.4em]">Portfolio</span>
                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter mt-6 mb-12 uppercase leading-[0.85]">
                        Featured <br />
                        <span className="text-black/30 dark:text-white/40">Masterpieces.</span>
                    </h1>
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center gap-6 mb-20 bg-zinc-50 dark:bg-[#0a0a0a] p-4 rounded-[3rem] border border-black/5 dark:border-white/5 shadow-xl">
                    <div className="flex-1 flex flex-wrap gap-4 items-center">
                        <select
                            onChange={(e) => setFilter(e.target.value)}
                            className="bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 rounded-full px-8 py-4 text-[10px] font-black tracking-widest uppercase outline-none focus:ring-1 focus:ring-[#d4af37] transition-all"
                        >
                            <option value="All">All Services</option>
                            <option value="Microcement Flooring">Microcement Flooring</option>
                            <option value="Microcement Walls">Microcement Walls</option>
                            <option value="Wetrooms / Bathrooms">Wetrooms</option>
                            <option value="Epoxy">Epoxy Coating</option>
                            <option value="Terrazzo">Terrazzo</option>
                            <option value="Countertops & Stairs">Countertops & Stairs</option>
                            <option value="Venetian Lime Plaster">Venetian Lime Plaster</option>
                        </select>

                        <select
                            onChange={(e) => setCity(e.target.value)}
                            className="bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 rounded-full px-8 py-4 text-[10px] font-black tracking-widest uppercase outline-none focus:ring-1 focus:ring-[#d4af37] transition-all"
                        >
                            <option value="All Cities">All Cities</option>
                            <option value="Delhi">Delhi NCR</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Bangalore">Bangalore</option>
                        </select>

                        <div className="flex items-center gap-2 p-1 bg-white dark:bg-zinc-900 rounded-full border border-black/5 dark:border-white/5">
                            <button
                                onClick={() => setIsCommercial(false)}
                                className={`px-6 py-3 rounded-full text-[10px] font-black tracking-widest uppercase transition-all ${!isCommercial ? "bg-[#d4af37] text-black shadow-lg" : "text-black/30 dark:text-white/30"}`}
                            >
                                Residential
                            </button>
                            <button
                                onClick={() => setIsCommercial(true)}
                                className={`px-6 py-3 rounded-full text-[10px] font-black tracking-widest uppercase transition-all ${isCommercial ? "bg-[#d4af37] text-black shadow-lg" : "text-black/30 dark:text-white/30"}`}
                            >
                                Commercial
                            </button>
                        </div>
                    </div>
                </div>

                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {filteredProjects.map((project, i) => (
                                <motion.div
                                    key={project.slug || project._id || i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ delay: i * 0.1 }}
                                    layout
                                    className="group relative aspect-[4/5] overflow-hidden rounded-[3rem] border border-black/5 dark:border-white/5"
                                >
                                    <div className="absolute inset-0">
                                        <Image
                                            src={project.images && project.images[0] ? project.images[0].url : project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-10 flex flex-col justify-end">
                                        <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-widest mb-2">{project.category}</span>
                                        <h3 className="text-white text-2xl font-bold uppercase tracking-tight mb-6">{project.title}</h3>
                                        <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-75 group-hover:scale-100 translate-y-4 group-hover:translate-y-0">
                                            <Maximize2 size={20} />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                ) : (
                    <div className="text-center py-40 border border-dashed border-black/10 dark:border-white/10 rounded-[4rem] group hover:border-[#d4af37]/30 transition-all duration-700">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-20 h-20 bg-[#d4af37]/10 rounded-full flex items-center justify-center text-[#d4af37] mb-10 group-hover:scale-110 transition-all duration-500">
                                <Filter size={32} />
                            </div>
                            <h3 className="text-2xl font-bold uppercase tracking-tight text-black dark:text-white mb-4">Curating Excellence</h3>
                            <p className="max-w-xs mx-auto text-black/40 dark:text-white/40 text-[10px] uppercase tracking-[0.4em] font-black leading-relaxed">
                                Our latest premium project <br /> reveals are underway.
                            </p>
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectsClient;
