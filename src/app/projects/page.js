// client/src/app/projects/page.js
import ProjectsClient from './ProjectsClient';

export const metadata = {
    title: "Project Portfolio | Mannat Micro Concrete",
    description: "Browse our premium portfolio of Microcement and Venetian Plaster projects across India. See the transformation of floors, walls, and bathrooms.",
    keywords: ["Microcement Projects", "Venetian Plaster Portfolio", "Luxury Surface Design", "Mannat Micro Concrete Portfolio"],
};

export default function ProjectsPage() {
    return <ProjectsClient />;
}
