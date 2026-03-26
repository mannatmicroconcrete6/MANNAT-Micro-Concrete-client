"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
    TrendingUp,
    MessageSquare,
    Eye,
    Settings,
    LogOut
} from 'lucide-react';

const Sidebar = () => {
    const pathname = usePathname();
    const router = useRouter();

    const isActive = (path) => pathname === path;

    const handleLogout = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('token');
            localStorage.removeItem('admin');
            router.push('/admin/login');
        }
    };

    return (
        <aside className="w-80 border-r border-white/5 p-10 flex flex-col gap-12 bg-[#020202] min-h-screen relative overflow-hidden group">
            <div className="relative z-10">
                <h2 className="text-2xl font-black tracking-tighter text-white uppercase italic">
                    Admin <span className="text-[#d4af37]">Panel</span>
                </h2>
                <p className="text-[10px] font-black tracking-[0.4em] text-white/20 uppercase mt-2">Mannat Micro Concrete</p>
            </div>

            <nav className="flex flex-col gap-2 relative z-10">
                <span className="text-[9px] font-black tracking-[0.3em] text-white/20 uppercase mb-4 ml-4">Menu</span>

                {[
                    { href: '/admin/dashboard', label: 'Dashboard', icon: TrendingUp },
                    { href: '/admin/leads', label: 'Enquiries / Leads', icon: MessageSquare },
                    { href: '/admin/projects', label: 'Project Gallery', icon: Eye },
                    { href: '/admin/services', label: 'Our Services', icon: Settings },
                    { href: '/admin/analytics', label: 'Visitor Stats', icon: TrendingUp },
                ].map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-4 px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all duration-300 group/item ${isActive(item.href)
                            ? 'bg-[#d4af37] text-black shadow-[0_0_30px_rgba(212,175,55,0.2)]'
                            : 'text-white/40 hover:text-white hover:bg-white/5'
                            }`}
                    >
                        <item.icon size={16} className={isActive(item.href) ? 'text-black' : 'text-[#d4af37]'} />
                        {item.label}
                    </Link>
                ))}
            </nav>

            <div className="mt-auto relative z-10 space-y-6">
                <div className="p-6 bg-white/5 rounded-3xl border border-white/5 backdrop-blur-md">
                    <p className="text-[9px] font-black tracking-[0.2em] text-[#d4af37] uppercase mb-2">Live Status</p>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                        <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">System Online</span>
                    </div>
                </div>

                <button
                    onClick={handleLogout}
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl border border-red-500/20 text-red-500 font-black text-[10px] uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                    <LogOut size={16} /> Logout
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
