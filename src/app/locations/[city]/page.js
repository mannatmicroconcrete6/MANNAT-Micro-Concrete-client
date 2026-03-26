// client/src/app/locations/[city]/page.js
import LocationClient from './LocationClient';

export async function generateMetadata({ params }) {
    const { city } = await params;
    const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);

    return {
        title: `Premium Microcement & Venetian Plaster in ${capitalizedCity} | Mannat`,
        description: `The #1 choice for luxury seamless surfaces in ${capitalizedCity}. Expert microcement flooring, walls, and Venetian plaster installation with a 2-year warranty.`,
        keywords: [`microcement ${city}`, `venetian plaster ${city}`, `luxury flooring ${city}`, `mannat micro concrete ${city}`],
    };
}

export default async function LocationPage({ params }) {
    const { city } = await params;
    return <LocationClient city={city} />;
}
