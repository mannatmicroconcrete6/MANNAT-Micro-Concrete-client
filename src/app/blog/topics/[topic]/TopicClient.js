"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blogData';
import { ArrowLeft, BookOpen, Layers, Shield, Leaf, ShoppingBag } from 'lucide-react';

const TopicIcons = {
    'microcement': Layers,
    'maintenance': Shield,
    'venetian-plaster': BookOpen,
    'sustainability': Leaf,
    'commercial': ShoppingBag
};

const TopicClient = ({ topic, topicData }) => {
    const Icon = TopicIcons[topic] || BookOpen;

    // Filter posts that belong to this topic's categories
    const filteredPosts = blogPosts.filter(post =>
        topicData.categories.includes(post.category)
    );

    return (
        <div className="bg-white dark:bg-black text-black dark:text-white pt-40 pb-20 px-6 transition-colors duration-500">
            <div className="max-w-[1400px] mx-auto">
                <Link href="/blog" className="inline-flex items-center gap-2 text-black/40 dark:text-white/40 hover:text-[#d4af37] transition-all text-[10px] font-black uppercase tracking-widest mb-12 group">
                    <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Back to Chronicles
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <div className="w-16 h-16 bg-[#d4af37]/10 rounded-2xl flex items-center justify-center text-[#d4af37] mb-8">
                            <Icon size={32} />
                        </div>
                        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] mb-10">
                            {topicData.title}
                        </h1>
                        <p className="text-xl font-light text-black/60 dark:text-white/60 leading-relaxed max-w-xl">
                            {topicData.description}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative aspect-square rounded-[4rem] overflow-hidden border border-black/5 dark:border-white/5 shadow-2xl"
                    >
                        <Image
                            src={`${topicData.image}?auto=format&fit=crop&q=80&w=1200`}
                            alt={topicData.title}
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                        />
                    </motion.div>
                </div>

                <div className="border-t border-black/5 dark:border-white/5 pt-24">
                    <div className="flex justify-between items-end mb-16">
                        <h2 className="text-3xl font-bold uppercase tracking-tighter">Related Articles</h2>
                        <span className="text-[10px] font-black uppercase tracking-widest text-black/30 dark:text-white/30">{filteredPosts.length} Entries</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {filteredPosts.map((post, i) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`}>
                                <motion.article
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group cursor-pointer"
                                >
                                    <div className="aspect-[16/10] bg-zinc-50 dark:bg-zinc-900 rounded-[2.5rem] mb-8 overflow-hidden relative border border-black/5 dark:border-white/10">
                                        <Image
                                            src={`${post.image}?auto=format&fit=crop&q=80&w=800`}
                                            alt={post.title}
                                            fill
                                            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold tracking-tighter uppercase mb-4 group-hover:text-[#d4af37] transition-colors leading-tight">
                                        {post.title}
                                    </h3>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-black/40 dark:text-white/40">
                                        {post.date}
                                    </p>
                                </motion.article>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopicClient;
