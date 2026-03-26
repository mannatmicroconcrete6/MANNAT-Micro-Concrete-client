"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = ({ customLinks = [] }) => {
    const pathname = usePathname();
    const segments = pathname.split('/').filter(x => x);

    // If customLinks is provided, use it, otherwise generate from path
    const breadcrumbLinks = customLinks.length > 0 ? customLinks : [
        { name: 'Home', href: '/' },
        ...segments.map((segment, index) => {
            const href = `/${segments.slice(0, index + 1).join('/')}`;
            // Capitalize and replace hyphens
            const name = segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
            return { name, href };
        })
    ];

    // JSON-LD BreadcrumbList
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbLinks.map((link, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": link.name,
            "item": link.href.startsWith('http') ? link.href : `https://mannatmicroconcrete.com${link.href}`
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <nav className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] overflow-x-auto whitespace-nowrap py-4 border-b border-black/5 dark:border-white/5 no-scrollbar" aria-label="Breadcrumb">
                {breadcrumbLinks.map((link, i) => (
                    <React.Fragment key={i}>
                        <div className="flex items-center gap-4 group">
                            <Link 
                                href={link.href}
                                className={`transition-colors duration-300 ${
                                    i === breadcrumbLinks.length - 1 
                                    ? "text-[#d4af37]" 
                                    : "text-black/30 dark:text-white/20 hover:text-black dark:hover:text-white"
                                }`}
                            >
                                {link.name === 'Home' ? <Home size={12} className="inline mr-2" /> : null}
                                {link.name}
                            </Link>
                            {i < breadcrumbLinks.length - 1 && (
                                <ChevronRight size={10} className="text-black/10 dark:text-white/10" />
                            )}
                        </div>
                    </React.Fragment>
                ))}
            </nav>
        </>
    );
};

export default Breadcrumbs;
