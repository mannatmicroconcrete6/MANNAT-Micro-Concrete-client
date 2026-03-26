import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Linkedin, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-[#050505] text-black dark:text-white pt-32 pb-10 border-t border-black/5 dark:border-white/5 px-6 transition-colors duration-500">
            <div className="max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    {/* Brand */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#d4af37]/20 flex-shrink-0">
                                <Image 
                                    src="https://lh3.googleusercontent.com/d/1rjha7IkwcHFlzTSeQdw5ojgRqCJouQCI"
                                    alt="Mannat Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h2 className="text-xl md:text-2xl font-bold tracking-tighter uppercase leading-none">
                                MANNAT <br />
                                <span className="text-[#d4af37] text-[10px] tracking-[0.3em] font-black">MICRO CONCRETE</span>
                            </h2>
                        </div>
                        <p className="text-black/60 dark:text-white/50 font-light text-sm leading-relaxed max-w-xs">
                            Elevating Indian and international spaces with premium seamless surfaces. From monolithic floors to sculptural walls, we craft minimalist excellence.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { Icon: Instagram, href: "https://www.instagram.com/mannat_micro_concrete?igsh=MXJ6Mmo3azkycDJzMA==" },
                                { Icon: Facebook, href: "https://www.facebook.com/mannatmicroconcrete" },
                                { Icon: Linkedin, href: "#" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 border border-black/10 dark:border-white/10 rounded-full flex items-center justify-center hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] transition-all"
                                >
                                    <social.Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-[10px] uppercase tracking-[0.3em] font-black mb-10 text-[#d4af37]">Our Finishes</h4>
                        <ul className="flex flex-col gap-5">
                            {[
                                { name: 'Microcement Flooring', slug: 'microcement-flooring' },
                                { name: 'Artisan Wall Finishes', slug: 'microcement-walls' },
                                { name: 'Technical Epoxy', slug: 'epoxy-coatings' },
                                { name: 'Venetian Lime Plaster', slug: 'venetian-plaster' },
                                { name: 'Artisanal Lime Wash', slug: 'lime-wash' },
                                { name: 'Luxury Wetrooms', slug: 'luxury-wetrooms' },
                                { name: 'Bespoke Furniture', slug: 'bespoke-furniture' }
                            ].map((item) => (
                                <li key={item.slug}>
                                    <Link href={`/services/${item.slug}`} className="text-black/40 dark:text-white/40 hover:text-[#d4af37] transition-colors flex items-center gap-2 group text-[10px] uppercase tracking-widest font-bold">
                                        {item.name} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h4 className="text-[10px] uppercase tracking-[0.3em] font-black mb-10 text-[#d4af37]">Solutions</h4>
                        <ul className="flex flex-col gap-5">
                            {[
                                { name: 'Residential Flooring', href: '/services/microcement-flooring' },
                                { name: 'Waterproof Bathrooms', href: '/services/luxury-wetrooms' },
                                { name: 'Industrial Retail', href: '/services/epoxy-coatings' },
                                { name: 'Architectural Stairs', href: '/services/bespoke-furniture' },
                                { name: 'FAQ & Maintenance', href: '/#faqs' }
                            ].map((item, i) => (
                                <li key={i}>
                                    <Link href={item.href} className="text-black/40 dark:text-white/40 hover:text-[#d4af37] transition-colors text-[10px] uppercase tracking-widest font-bold">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-[10px] uppercase tracking-[0.3em] font-black mb-10 text-[#d4af37]">Connect</h4>
                        <div className="space-y-8">
                            <div>
                                <h5 className="text-[10px] uppercase tracking-widest font-bold text-black/20 dark:text-white/20 mb-3">Headquarters</h5>
                                <p className="text-black/60 dark:text-white/50 font-light text-sm leading-relaxed">
                                    B II -924 Madanpur khadar extn,<br />
                                    New Delhi, 110076
                                </p>
                            </div>
                            <div className="space-y-4">
                                <a href="tel:+919540490459" className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 bg-black/5 dark:bg-white/5 rounded-full flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-all">
                                        <Phone size={16} />
                                    </div>
                                    <span className="text-sm font-bold">+91 95404 90459</span>
                                </a>
                                <a href="tel:+917042178579" className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 bg-black/5 dark:bg-white/5 rounded-full flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-all">
                                        <Phone size={16} />
                                    </div>
                                    <span className="text-sm font-bold">+91 70421 78579</span>
                                </a>
                                <a href="https://wa.me/919540490459" className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 bg-black/5 dark:bg-white/5 rounded-full flex items-center justify-center text-[#d4af37] group-hover:bg-[#25D366] group-hover:text-white transition-all">
                                        <MessageSquare size={16} />
                                    </div>
                                    <span className="text-sm font-bold">WhatsApp Design Assist</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row gap-8 justify-between items-center text-[10px] text-black/20 dark:text-white/20 uppercase tracking-[0.3em] font-bold text-center">
                    <p>© 2024 Mannat Micro Concrete. Artisanal Seamless Excellence.</p>
                    <div className="flex flex-wrap justify-center gap-8">
                        <Link href="/privacy-policy" className="hover:text-black dark:hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-black dark:hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/warranty" className="hover:text-black dark:hover:text-white transition-colors">Warranty & Guarantee</Link>
                        <Link href="/cookies" className="hover:text-black dark:hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
