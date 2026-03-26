// client/src/app/comparisons/microcement-vs-tiles/page.js
import ComparisonClient from './ComparisonClient';

export const metadata = {
    title: "Microcement vs Tiles: Which is Best for Your Home? | Mannat",
    description: "A comprehensive comparison between seamless microcement and traditional tiles. Discover the pros, cons, costs, and durability of each for your luxury interior.",
    keywords: ["microcement vs tiles", "seamless flooring vs tiles", "microcement cost india", "luxury flooring comparison", "grout-free floors"],
    openGraph: {
        title: "Microcement vs Tiles: Professional Comparison",
        description: "Thinking of switching to seamless? Read our deep dive into microcement vs traditional tiling.",
        type: "article",
    }
};

export default function MicrocementComparisonPage() {
    return <ComparisonClient />;
}
