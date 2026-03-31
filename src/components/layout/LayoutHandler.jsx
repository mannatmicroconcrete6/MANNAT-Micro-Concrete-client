"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyActions from "@/components/ui/StickyActions";
import EnquiryModal from "@/components/ui/EnquiryModal";
import CookieBanner from "@/components/ui/CookieBanner";
import PageWrapper from "@/components/layout/PageWrapper";

export default function LayoutHandler({ children }) {
    const pathname = usePathname();
    const isAdminPage = pathname?.startsWith("/admin");

    if (isAdminPage) {
        return (
            <main className="min-h-screen">
                {children}
            </main>
        );
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen overflow-x-hidden">
                <PageWrapper>
                    {children}
                </PageWrapper>
            </main>
            <EnquiryModal />
            <CookieBanner />
            <StickyActions />
            <Footer />
        </>
    );
}
