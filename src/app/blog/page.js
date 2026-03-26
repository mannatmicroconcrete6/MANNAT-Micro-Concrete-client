"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';


import { blogPosts } from '@/data/blogData';

const BlogPage = () => {
    return (
        <div className="bg-white dark:bg-black text-black dark:text-white pt-40 pb-20 px-6 transition-colors duration-500">
            <div className="max-w-[1600px] mx-auto">
                <div className="text-center mb-32">
                    <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.4em]">Chronicles</span>
                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter mt-6 mb-12 uppercase leading-[0.8] mb-12">
                        Architectural <br />
                        <span className="text-black/30 dark:text-white/40">Insights.</span>
                    </h1>
                </div>

                {/* Topics Explorer */}
                <div className="mb-32">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-px flex-1 bg-black/5 dark:bg-white/10" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/30 dark:text-white/30 whitespace-nowrap">Explore by Specialty</span>
                        <div className="h-px flex-1 bg-black/5 dark:bg-white/10" />
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            { id: 'microcement', label: 'Microcement' },
                            { id: 'venetian-plaster', label: 'Venetian Plaster' },
                            { id: 'maintenance', label: 'Care & Guides' },
                            { id: 'sustainability', label: 'Sustainability' },
                            { id: 'commercial', label: 'Commercial' },
                        ].map((topic) => (
                            <Link
                                key={topic.id}
                                href={`/blog/topics/${topic.id}`}
                                className="px-10 py-5 rounded-full border border-black/5 dark:border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] transition-all"
                            >
                                {topic.label}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {blogPosts.map((post, i) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`}>
                            <motion.article
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                            >
                                <div className="aspect-[16/10] bg-zinc-50 dark:bg-zinc-900 rounded-[2.5rem] mb-10 overflow-hidden relative border border-black/5 dark:border-white/10 shadow-xl">
                                    <Image
                                        src={`${post.image}?auto=format&fit=crop&q=80&w=800`}
                                        alt={post.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                    />
                                    <div className="absolute top-6 left-6">
                                        <span className="px-4 py-2 bg-black/60 backdrop-blur-md text-white rounded-full text-[8px] font-black uppercase tracking-widest">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-black/30 dark:text-white/30">{post.date}</span>
                                    <div className="h-px flex-1 bg-black/5 dark:bg-white/10" />
                                </div>
                                <h3 className="text-2xl font-bold tracking-tighter uppercase mb-6 group-hover:text-[#d4af37] transition-colors leading-none">{post.title}</h3>
                                <p className="text-black/40 dark:text-white/40 text-[10px] font-black uppercase tracking-[0.4em] leading-relaxed">
                                    {post.excerpt}
                                </p>
                            </motion.article>
                        </Link>
                    ))}
                </div>

                <div className="mt-40 text-center">
                    <button className="px-12 py-6 border border-black/5 dark:border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                        Load More Entries
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
