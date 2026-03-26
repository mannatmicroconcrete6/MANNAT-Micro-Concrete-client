"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, ArrowUpRight } from 'lucide-react';

const CTABand = () => {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-[1600px] mx-auto">
                <div className="bg-[#d4af37] rounded-[4rem] p-12 md:p-24 relative overflow-hidden flex flex-col lg:flex-row gap-20 items-center">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[50%] h-full bg-white blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
                    </div>

                    {/* Left: Content */}
                    <div className="flex-1 text-black relative z-10 text-center lg:text-left">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] mb-8 block">Project Inquiry</span>
                        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.8] mb-10">
                            Get a Free <br />
                            <span className="text-white">Consultation.</span>
                        </h2>
                        <p className="text-black/60 text-lg font-medium leading-relaxed max-w-sm mx-auto lg:mx-0 mb-12">
                            Transform your space with seamless precision. Our experts are ready to guide you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                            <a href="tel:+919540490459" className="flex items-center gap-4 text-2xl font-bold border-b-2 border-black/10 pb-2 hover:border-black transition-all">
                                <Phone size={24} /> +91 95404 90459
                            </a>
                        </div>
                    </div>

                    {/* Right: Mini Form */}
                    <div className="w-full lg:w-[500px] bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl relative z-10">
                        <form className="space-y-6">
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="NAME"
                                        className="w-full bg-zinc-50 border border-black/5 rounded-2xl px-6 py-4 text-[10px] font-black tracking-widest text-black placeholder:text-black/40 focus:ring-2 focus:ring-[#d4af37] outline-none transition-all"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="PHONE"
                                        className="w-full bg-zinc-50 border border-black/5 rounded-2xl px-6 py-4 text-[10px] font-black tracking-widest text-black placeholder:text-black/40 focus:ring-2 focus:ring-[#d4af37] outline-none transition-all"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="CITY"
                                        className="w-full bg-zinc-50 border border-black/5 rounded-2xl px-6 py-4 text-[10px] font-black tracking-widest text-black placeholder:text-black/40 focus:ring-2 focus:ring-[#d4af37] outline-none transition-all"
                                    />
                                    <select className="w-full bg-zinc-50 border border-black/5 rounded-2xl px-6 py-4 text-[10px] font-black tracking-widest text-black focus:ring-2 focus:ring-[#d4af37] outline-none appearance-none transition-all">
                                        <option className="text-black/40">SELECT SERVICE</option>
                                        <option className="text-black">MICROCEMENT FLOORING</option>
                                        <option className="text-black">MICROCEMENT WALLS</option>
                                        <option className="text-black">VENETIAN PLASTER</option>
                                        <option className="text-black">EPOXY COATING</option>
                                    </select>
                                </div>
                            </div>
                            <button className="w-full bg-black text-white py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all shadow-xl group">
                                Submit Request <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTABand;
