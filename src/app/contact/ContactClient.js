"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageSquare } from 'lucide-react';
import EnquiryForm from '@/components/ui/EnquiryForm';

const ContactClient = () => {
    return (
        <div className="bg-white dark:bg-black text-black dark:text-white pt-40 pb-20 px-6 transition-colors duration-500">
            <div className="max-w-[1600px] mx-auto">
                <div className="text-center mb-32">
                    <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.4em]">Get in Touch</span>
                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter mt-6 uppercase leading-[0.8] mb-12">
                        Seamless <br />
                        <span className="text-black/30 dark:text-white/40">Communication.</span>
                    </h1>
                    <p className="text-black/40 dark:text-white/40 text-xl font-light uppercase tracking-widest">Global Reach — Local Craftsmanship</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-16"
                    >
                        <div className="space-y-10">
                            <h2 className="text-3xl font-bold tracking-tighter uppercase mb-12">Surface Consultants</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-[#d4af37]/10 rounded-2xl flex items-center justify-center text-[#d4af37]">
                                        <Phone size={24} strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-[10px] uppercase tracking-widest font-black text-black/30 dark:text-white/30">Call Direct</h4>
                                    <p className="text-xl font-bold tracking-tighter uppercase leading-tight">
                                        +91 95404 90459<br />+91 70421 78573
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-[#d4af37]/10 rounded-2xl flex items-center justify-center text-[#d4af37]">
                                        <Mail size={24} strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-[10px] uppercase tracking-widest font-black text-black/30 dark:text-white/30">Email Us</h4>
                                    <p className="text-xl font-bold tracking-tighter uppercase truncate">mannatmicroconcrete6@gmail.com</p>
                                </div>

                                <div className="md:col-span-2 space-y-4">
                                    <div className="w-12 h-12 bg-[#d4af37]/10 rounded-2xl flex items-center justify-center text-[#d4af37]">
                                        <MapPin size={24} strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-[10px] uppercase tracking-widest font-black text-black/30 dark:text-white/30">Visit Studio</h4>
                                    <p className="text-xl font-bold tracking-tighter uppercase leading-relaxed">
                                        B II -924 Madanpur khadar extn, <br />
                                        New Delhi, India — 110076
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Map Embed Placeholder */}
                        <div className="aspect-video w-full rounded-[3rem] overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl relative grayscale hover:grayscale-0 transition-all duration-1000">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112190.13788755606!2d77.12648581640626!3d28.5106198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce0df39f37f3f%3A0xe726857189f7823e!2sMadanpur%20Khadar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        <div className="pt-10 border-t border-black/5 dark:border-white/5 flex gap-6">
                            {[
                                { Icon: Instagram, href: "https://www.instagram.com/mannat_micro_concrete?igsh=MXJ6Mmo3azkycDJzMA==" },
                                { Icon: Facebook, href: "https://www.facebook.com/mannatmicroconcrete" },
                                { Icon: MessageSquare, href: "https://wa.me/919540490459" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-14 h-14 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-black/5 dark:border-white/5 flex items-center justify-center text-black/40 dark:text-white/40 hover:text-[#d4af37] hover:border-[#d4af37] transition-all"
                                >
                                    <social.Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-zinc-50 dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 p-12 md:p-20 rounded-[4rem] shadow-2xl sticky top-32"
                    >
                        <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Direct Inquiry</span>
                        <h3 className="text-4xl font-bold mb-12 tracking-tighter uppercase leading-none">Estimate Your <br /><span className="text-black/30 dark:text-white/30">Masterpiece.</span></h3>
                        <EnquiryForm />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactClient;
