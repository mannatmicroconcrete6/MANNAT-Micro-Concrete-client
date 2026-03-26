// client/src/app/services/page.js
import ServicesClient from './ServicesClient';

export const metadata = {
    title: "Luxury Surface Services | Microcement, Venetian Plaster & Epoxy",
    description: "Our bespoke architectural finishes are designed by artisans for the modern minimalist. From waterproof bathroom microcement to polished lime plasters in Mumbai, Delhi and Dubai.",
    keywords: [
        "Microcement Flooring India",
        "Venetian Plaster Walls",
        "Seamless Bathroom Surfaces",
        "Eco-friendly Lime Wash",
        "Commercial Epoxy Coatings",
        "Luxury Surface Estimate India"
    ],
};

export default function ServicesPage() {
    return <ServicesClient />;
}
