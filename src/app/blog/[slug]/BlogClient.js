"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Share2, Bookmark, Clock, ArrowRight, MessageSquare } from 'lucide-react';

const BlogClient = ({ post }) => {
    return (
        <div className="bg-white dark:bg-black text-black dark:text-white pt-32 pb-20 px-6 transition-colors duration-500">
            <div className="max-w-[1200px] mx-auto">
                {/* Back Link */}
                <Link href="/blog" className="inline-flex items-center gap-2 text-black/40 dark:text-white/40 hover:text-[#d4af37] transition-all text-[10px] font-black uppercase tracking-widest mb-12 group">
                    <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Back to Chronicles
                </Link>

                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-end">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">
                            {post.category}
                        </span>
                        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.85] mb-10">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-8 border-t border-black/5 dark:border-white/5 pt-8">
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-black uppercase tracking-widest text-black/30 dark:text-white/30 flex items-center gap-2">
                                    <Clock size={12} /> {post.date}
                                </span>
                            </div>
                            <div className="flex gap-4">
                                <button className="text-black/20 dark:text-white/20 hover:text-[#d4af37] transition-colors"><Share2 size={16} /></button>
                                <button className="text-black/20 dark:text-white/20 hover:text-[#d4af37] transition-colors"><Bookmark size={16} /></button>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative aspect-[16/10] rounded-[3rem] overflow-hidden border border-black/5 dark:border-white/5 shadow-2xl"
                    >
                        <Image
                            src={`${post.image}?auto=format&fit=crop&q=80&w=1200`}
                            alt={post.title}
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>

                {/* Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <article
                            className="prose prose-zinc dark:prose-invert max-w-none 
                                       prose-h3:text-2xl prose-h3:font-bold prose-h3:uppercase prose-h3:tracking-tighter 
                                       prose-p:text-lg prose-p:font-light prose-p:leading-relaxed prose-p:text-black/60 dark:prose-p:text-white/50
                                       prose-strong:text-[#d4af37] prose-li:text-black/60 dark:prose-li:text-white/50"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Discussion CTA */}
                        <div className="mt-20 p-12 bg-zinc-50 dark:bg-zinc-900 rounded-[3rem] border border-black/5 dark:border-white/10">
                            <h4 className="text-2xl font-bold uppercase tracking-tighter mb-4">Interested in {post.category}?</h4>
                            <p className="text-black/40 dark:text-white/40 text-sm font-light mb-8">
                                Every architectural vision is unique. Let's discuss how we can bring these technical insights to your specific project.
                            </p>
                            <Link href="/enquiry" className="inline-flex items-center gap-3 px-10 py-5 bg-[#d4af37] text-black rounded-full font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-xl">
                                Consult with a Specialist <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 space-y-12">
                        <div className="sticky top-40 space-y-12">
                            {/* Sticky CTA */}
                            <div className="p-10 bg-black dark:bg-white text-white dark:text-black rounded-[3rem] shadow-2xl">
                                <span className="text-[#d4af37] text-[8px] font-black uppercase tracking-widest mb-4 block">Action</span>
                                <h5 className="text-2xl font-bold tracking-tighter uppercase mb-6 leading-none">Bring this look to your space.</h5>
                                <p className="text-white/40 dark:text-black/40 text-xs font-light mb-8 italic">
                                    Book a site visit for a physical sample board review.
                                </p>
                                <Link href="https://wa.me/919540490459" className="flex items-center justify-center gap-3 w-full py-5 bg-[#d4af37] text-black rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-white dark:hover:bg-black dark:hover:text-white transition-all">
                                    <MessageSquare size={14} /> WhatsApp Us
                                </Link>
                            </div>

                            {/* Tags/Categories */}
                            <div>
                                <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 dark:text-white/30 mb-8">Related Expertise</h5>
                                <div className="flex flex-wrap gap-2 text-justify">
                                    {['Microcement', 'Venetian Plaster', 'Technical Coatings', 'Seamless Design', 'Luxury Living'].map(tag => (
                                        <span key={tag} className="px-5 py-2 border border-black/5 dark:border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest hover:border-[#d4af37] hover:text-[#d4af37] transition-all cursor-pointer">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default BlogClient;
