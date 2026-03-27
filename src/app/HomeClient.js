"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';

const Reveal = dynamic(() => import('@/components/ui/Reveal'));
import Hero from '@/components/home/Hero';
const ProjectsGallery = dynamic(() => import('@/components/home/ProjectsGallery'));
const WhyMannat = dynamic(() => import('@/components/home/WhyMannat'));
const BeforeAfterSlider = dynamic(() => import('@/components/ui/BeforeAfterSlider'));
const FinishSeeker = dynamic(() => import('@/components/ui/FinishSeeker'));
const ColorPaletteTool = dynamic(() => import('@/components/ui/ColorPaletteTool'));
const FAQSection = dynamic(() => import('@/components/ui/FAQSection'));
const CTABand = dynamic(() => import('@/components/home/CTABand'));
const InstagramReels = dynamic(() => import('@/components/ui/InstagramReels'));

const homeFAQs = [
    {
        question: "What exactly is Microcement?",
        answer: "Microcement is a composite architectural coating based on the mixture of cement, water-based resins, additives, and mineral pigments. It is applied in thin layers (~3mm) to create a seamless, joint-free surface on floors, walls, and even furniture."
    },
    {
        question: "Is Microcement durable enough for high-traffic areas?",
        answer: "Yes, our specialized industrial-grade microcement systems are exceptionally durable. They are impact-resistant, waterproof, and designed to withstand the heavy traffic of both luxury retail spaces and busy residential homes."
    },
    {
        question: "Can it be applied over existing tiles?",
        answer: "Absolutely. One of the greatest benefits of microcement is its exceptional adhesion. It can be applied directly over tiles, marble, or concrete without the need for demolition, saving time and visual noise."
    },
    {
        question: "Is it completely waterproof?",
        answer: "Our specialized systems for wetrooms and bathrooms include high-performance waterproof seals. This makes them 100% waterproof and grout-free, preventing mold growth and making maintenance effortless."
    },
    {
        question: "How long does a typical installation take?",
        answer: "A standard installation usually takes between 4 to 10 days, depending on the area size and the substrate preparation needed. This includes multiple layers of application, sanding, and final protective sealing."
    }
];
const EnquiryForm = dynamic(() => import('@/components/ui/EnquiryForm'));
const BeforeAfter = dynamic(() => import('@/components/ui/BeforeAfter'));

export default function HomeClient() {
    const businessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Mannat Micro Concrete",
        "image": "https://lh3.googleusercontent.com/d/1rjha7IkwcHFlzTSeQdw5ojgRqCJouQCI",
        "url": "https://mannatmicroconcrete.com",
        "telephone": "+919540490459",
        "email": "mannatmicroconcrete6@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "B II -924 Madanpur khadar extn",
            "addressLocality": "New Delhi",
            "postalCode": "110076",
            "addressCountry": "IN"
        },
        "description": "Premium industrial-grade microcement and venetian plaster surface finishes for architectural projects.",
        "areaServed": ["New Delhi", "Gurgaon", "Mumbai", "Bangalore", "Noida"],
        "priceRange": "$$$",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "20:00"
        }
    };

    return (
        <div className="bg-white dark:bg-black transition-colors duration-500">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
            />
            <Hero />

            {/* Section 2: Services (7 cards) */}
            <section className="py-32 px-6 bg-zinc-50 dark:bg-[#050505] transition-colors duration-500 overflow-hidden">
                <div className="max-w-[1600px] mx-auto">
                    <Reveal width="100%">
                        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24 w-full">
                            <div>
                                <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.4em]">Our Expertise</span>
                                <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-black dark:text-white mt-6 uppercase leading-[0.9]">
                                    Architectural <br />
                                    <span className="text-black/30 dark:text-white/30">Continuity.</span>
                                </h2>
                            </div>
                            <Link href="/services" className="text-black/40 dark:text-white/40 hover:text-[#d4af37] transition-all text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-2 group border-b border-black/5 dark:border-white/10 pb-2">
                                All Finishes <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Microcement Flooring', desc: 'Monolithic seamless floors for high-traffic zones.', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', slug: 'microcement-flooring' },
                            { title: 'Microcement Walls', desc: 'Sculptural, joint-free walls with artistic textures.', image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8', slug: 'microcement-walls' },
                            { title: 'Venetian Lime Plaster', desc: 'Classic Italian marble-like depth and high sheen.', image: 'https://images.unsplash.com/photo-1621293954908-907159247fc8', slug: 'venetian-plaster' },
                            { title: 'Epoxy Coatings', desc: 'Industrial strength meets architectural aesthetics.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158', slug: 'epoxy-coatings' },
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-black/5 dark:border-white/5 shadow-xl"
                            >
                                <Image
                                    src={`${service.image}?auto=format&fit=crop&q=60&w=800`}
                                    alt={service.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                                    <h3 className="text-white text-xl font-bold uppercase tracking-tight mb-2">{service.title}</h3>
                                    <Link href={`/services/${service.slug}`} className="text-[#d4af37] text-[10px] font-black uppercase tracking-widest flex items-center gap-2 group/link">
                                        Explore <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                        {[
                            { title: 'Lime Wash', desc: 'Breathable, mineral-based matte finishes.', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', slug: 'lime-wash' },
                            { title: 'Luxury Wetrooms', desc: 'Joint-free waterproof bathroom solutions.', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14', slug: 'luxury-wetrooms' },
                            { title: 'Bespoke Furniture', desc: 'Seamlessly coated tables and counters.', image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea', slug: 'bespoke-furniture' },
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: (i + 4) * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-black/5 dark:border-white/5 shadow-xl"
                            >
                                <Image
                                    src={`${service.image}?auto=format&fit=crop&q=60&w=1200`}
                                    alt={service.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                                    <h3 className="text-white text-xl font-bold uppercase tracking-tight mb-2">{service.title}</h3>
                                    <Link href={`/services/${service.slug}`} className="text-[#d4af37] text-[10px] font-black uppercase tracking-widest flex items-center gap-2 group/link">
                                        Explore <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: Featured Real Projects */}
            <ProjectsGallery />

            {/* Section: Social Media Showcase */}
            <InstagramReels />

            {/* Section 4: Why Mannat */}
            <WhyMannat />

            {/* Section 5: Interactive Before/After Slider */}
            <BeforeAfterSlider />

            {/* Section 6: Finish Seeker (Visual Filter) */}
            <FinishSeeker />

            {/* Section 7: The Color Palette Interactive Tool */}
            <ColorPaletteTool />

            {/* Section 8: Process Preview (5 steps) */}
            <section className="py-32 px-6 bg-zinc-50 dark:bg-[#050505] transition-colors duration-500 overflow-hidden">
                <div className="max-w-[1600px] mx-auto">
                    <Reveal width="100%">
                        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24 w-full">
                            <div>
                                <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.4em]">Full Method</span>
                                <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-black dark:text-white mt-6 uppercase leading-[0.9]">
                                    Architectural <br />
                                    <span className="text-black/30 dark:text-white/30">Precision.</span>
                                </h2>
                            </div>
                            <Link href="/process" className="text-black/40 dark:text-white/40 hover:text-[#d4af37] transition-all text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-2 group border-b border-black/5 dark:border-white/10 pb-2">
                                Full Methodology <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {[
                            { step: '01', title: 'Consultation', desc: 'Vision alignment & site analysis.' },
                            { step: '02', title: 'Sampling', desc: 'Bespoke texture & color selection.' },
                            { step: '03', title: 'Preparation', desc: 'Substrate treatment & reinforcement.' },
                            { step: '04', title: 'Application', desc: 'Layered artisanal installation.' },
                            { step: '05', title: 'Sealing', desc: 'Protective finishing & handover.' },
                        ].map((item, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="group cursor-default p-8 bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-xl">
                                    <span className="text-5xl font-black text-black/5 dark:text-[#d4af37]/10 transition-colors duration-700 group-hover:text-[#d4af37]/20">{item.step}</span>
                                    <h4 className="text-lg font-bold mt-6 mb-4 tracking-tight uppercase text-black dark:text-white">{item.title}</h4>
                                    <p className="text-black/40 dark:text-white/40 text-[10px] uppercase font-bold tracking-widest leading-relaxed">{item.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 9: FAQs */}
            <FAQSection faqs={homeFAQs} />

            {/* Section 10: CTA Band */}
            <CTABand />
        </div>
    );
}
