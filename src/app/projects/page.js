// client/src/app/projects/page.js
import ProjectsClient from './ProjectsClient';

export const metadata = {
    title: "Project Portfolio | Micro Concrete & Finishes",
    description: "Browse our premium portfolio of Micro Concrete and Microcement projects across India. See the transformation of floors, walls, and luxury bathrooms.",
    keywords: [
        "Micro Concrete Projects", 
        "Micro Concrete Portfolio", 
        "Microcement Projects", 
        "Venetian Plaster Portfolio", 
        "Luxury Surface Design", 
        "Mannat Micro Concrete Portfolio"
    ],
};

export default function ProjectsPage() {
    return <ProjectsClient />;
}
