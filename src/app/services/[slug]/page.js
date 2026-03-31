import React from 'react';
import ServiceClient from './ServiceClient';

const serviceData = {
    'microcement-flooring': {
        title: "Microcement Flooring",
        desc: "Seamless, monolithic flooring solutions for luxury homes and commercial spaces.",
    },
    'microcement-walls': {
        title: "Microcement Walls",
        desc: "Continuous, joint-free textured wall finishes for modern bathrooms and interiors.",
    },
    'venetian-plaster': {
        title: "Venetian Lime Plaster",
        desc: "Premium Italian lime plasters with depth, sheen, and hand-applied artisan textures.",
    },
    'epoxy-coatings': {
        title: "Epoxy",
        desc: "Industrial-grade durability with high-end retail and residential aesthetics.",
    },
    'lime-wash': {
        title: "Lime Wash",
        desc: "Organic, mineral-based matte finishes for a soft, breathable wall patina.",
    },
    'luxury-wetrooms': {
        title: "Wetrooms & Bathrooms",
        desc: "Seamless, waterproof bathroom transformations without grout lines.",
    },
    'bespoke-furniture': {
        title: "Bespoke Furniture",
        desc: "Hand-applied mineral coatings for furniture, desks, and sculptural elements.",
    },
    'terrazzo': {
        title: "Terrazzo",
        desc: "Timeless marble aggregate flooring with a polished, seamless finish.",
    },
    'countertops-stairs': {
        title: "Countertops & Stairs",
        desc: "Custom seamless coatings for furniture and structural elements.",
    },
};

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = serviceData[slug] || {
        title: "Luxury Surface Finish",
        desc: "Premium architectural finishes by Mannat Micro Concrete."
    };

    return {
        title: `${service.title} | Luxury Finishes by Mannat`,
        description: service.desc,
        alternates: {
            canonical: `/services/${slug}`,
        },
        keywords: [
            `${service.title} India`, 
            `Premium ${service.title} Delhi`, 
            `${service.title} contractors Mumbai`,
            "Mannat Micro Concrete", 
            "Luxury Seamless Surface", 
            "Architectural Finishes India",
            "Modern Wall Texture"
        ],
        openGraph: {
            title: `${service.title} | Mannat Micro Concrete`,
            description: service.desc,
            type: 'website',
        }
    };
}

export default async function Page({ params }) {
    const { slug } = await params;
    const service = serviceData[slug] || { title: "Luxury Surface Finish" };
    
    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.desc,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Mannat Micro Concrete",
            "url": "https://www.mannatmicroconcrete.site"
        },
        "areaServed": ["New Delhi", "Mumbai", "Bangalore", "Hyderabad", "Pune", "Chennai", "Ahmedabad"],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Luxury Surface Finishes",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Microcement Application" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Venetian Plastering" } }
            ]
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
            />
            <ServiceClient slug={slug} />
        </>
    );
}
