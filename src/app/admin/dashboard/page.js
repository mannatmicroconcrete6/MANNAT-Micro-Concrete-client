"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/admin/Sidebar';
import {
    Plus,
    LayoutGrid,
    MessageSquare,
    TrendingUp,
    Users,
    ArrowRight,
    Briefcase
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { API_ROUTES } from '@/config/api';

const AdminDashboard = () => {
    const [stats, setStats] = useState({
        leadsCount: 0,
        projectsCount: 0,
        recentLeads: []
    });
    const [loading, setLoading] = useState(true);
    const router = useRouter(); // For route guarding

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/admin/login');
            return;
        }

        let isMounted = true;
        const fetchData = async () => {
            try {
                // Background fetch with cache handling for "Instant" feel
                const cachedLeads = localStorage.getItem('admin_stats_leads');
                const cachedProjects = localStorage.getItem('admin_stats_projects');
                if (cachedLeads && cachedProjects) {
                    setStats(prev => ({
                        ...prev,
                        leadsCount: parseInt(cachedLeads),
                        projectsCount: parseInt(cachedProjects)
                    }));
                }

                const token = localStorage.getItem('token');
                const [leadsRes, projectsRes] = await Promise.all([
                    fetch(API_ROUTES.LEADS, {
                        cache: 'no-store',
                        headers: { 'x-auth-token': token }
                    }),
                    fetch(API_ROUTES.PROJECTS, { cache: 'no-store' })
                ]);
                const leadsData = await leadsRes.json();
                const projectsData = await projectsRes.json();

                if (isMounted) {
                    setStats({
                        leadsCount: Array.isArray(leadsData) ? leadsData.length : 0,
                        projectsCount: Array.isArray(projectsData) ? projectsData.length : 0,
                        recentLeads: Array.isArray(leadsData) ? leadsData.slice(0, 8) : []
                    });
                    localStorage.setItem('admin_stats_leads', leadsData.length);
                    localStorage.setItem('admin_stats_projects', projectsData.length);
                    setLoading(false);
                }
            } catch (error) {
                console.error("Dashboard fetch error:", error);
                if (isMounted) setLoading(false);
            }
        };
        fetchData();
        return () => { isMounted = false; };
    }, []);

    const SkeletonCard = () => (
        <div className="p-8 bg-zinc-900/40 border border-white/5 rounded-[2.5rem] animate-pulse">
            <div className="w-12 h-4 bg-white/5 rounded mb-4" />
            <div className="w-24 h-12 bg-white/10 rounded mb-2" />
            <div className="w-20 h-3 bg-white/5 rounded" />
        </div>
    );

    return (
        <div className="flex bg-[#010101] min-h-screen text-white font-sans selection:bg-[#d4af37] selection:text-black">
            <Sidebar />

            <main className="flex-1 p-12 overflow-y-auto relative will-change-transform scroll-smooth">
                {/* CSS Grid Pattern (Faster than external image) */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d4af37 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

                {/* Header Section */}
                <header className="flex justify-between items-start mb-16 relative z-10">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <h1 className="text-5xl font-black tracking-tighter uppercase italic">Main <span className="text-[#d4af37]">Dashboard</span></h1>
                            <div className="px-3 py-1 bg-[#d4af37]/10 rounded-md border border-[#d4af37]/20">
                                <span className="text-[10px] font-black text-[#d4af37] tracking-widest uppercase">Admin Panel</span>
                            </div>
                        </div>
                        <p className="text-white/30 text-xs font-bold uppercase tracking-[0.3em]">Business Overview & Management</p>
                    </div>

                    <div className="flex gap-4">
                        <div className="text-right">
                            <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">Console Engine</p>
                            <p className="font-mono text-sm text-green-500 uppercase">Accelerated</p>
                        </div>
                    </div>
                </header>

                {/* Main Dashboard Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">

                    {/* Left Column: Intelligence Hub */}
                    <div className="lg:col-span-8 space-y-8">

                        {/* Summary Brackets */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {loading && stats.leadsCount === 0 ? (
                                <>
                                    <SkeletonCard />
                                    <SkeletonCard />
                                    <SkeletonCard />
                                </>
                            ) : (
                                [
                                    { label: 'Total Enquiries', value: stats.leadsCount, sub: 'New Customer Leads', color: 'text-blue-400', icon: MessageSquare },
                                    { label: 'Completed Projects', value: stats.projectsCount, sub: 'Portfolio Items', color: 'text-[#d4af37]', icon: Briefcase },
                                    { label: 'Monthly Growth', value: '+24%', sub: 'Website Performance', color: 'text-green-500', icon: TrendingUp },
                                ].map((item, i) => (
                                    <div key={i} className="group p-8 bg-zinc-900/40 border border-white/5 rounded-[2.5rem] hover:border-[#d4af37]/30 transition-all duration-300 relative overflow-hidden will-change-auto h-full">
                                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                            <item.icon size={60} />
                                        </div>
                                        <p className="text-white/20 text-[9px] uppercase font-black tracking-[0.2em] mb-4">{item.label}</p>
                                        <h4 className={`text-5xl font-black mb-2 tracking-tighter ${item.color}`}>{item.value}</h4>
                                        <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">{item.sub}</p>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Large Analytics visualization placeholder */}
                        <div className="bg-zinc-900/30 border border-white/5 rounded-[3rem] p-10 relative overflow-hidden h-[450px]">
                            <div className="flex justify-between items-center mb-10">
                                <h3 className="text-xl font-black uppercase italic tracking-tighter">Visitor Activity</h3>
                                <div className="flex gap-2">
                                    {['7D', '1M', '1Y'].map(t => (
                                        <button key={t} className="px-4 py-2 bg-white/5 rounded-xl text-[9px] font-black tracking-widest hover:bg-[#d4af37] hover:text-black transition-colors">{t}</button>
                                    ))}
                                </div>
                            </div>

                            {/* Abstract Graphic Design representing data */}
                            <div className="absolute inset-0 top-32 flex items-end justify-between px-10 pb-10 opacity-20 pointer-events-none">
                                {[30, 80, 45, 90, 60, 100, 75, 40, 85, 55].map((h, i) => (
                                    <div key={i} style={{ height: `${h}%` }} className="w-12 bg-gradient-to-t from-[#d4af37] to-transparent rounded-t-full transition-all duration-1000" />
                                ))}
                            </div>

                            <div className="relative z-10 grid grid-cols-2 gap-10 mt-20">
                                <div>
                                    <p className="text-white/20 text-[10px] uppercase font-black tracking-widest mb-2">Market Dominance</p>
                                    <p className="text-3xl font-black text-white">Top 3%</p>
                                    <div className="w-full h-1 bg-white/5 rounded-full mt-4 overflow-hidden">
                                        <div className="w-[85%] h-full bg-[#d4af37] shadow-[0_0_10px_#d4af37]" />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-white/20 text-[10px] uppercase font-black tracking-widest mb-2">Search Velocity</p>
                                    <p className="text-3xl font-black text-white">Accelerating</p>
                                    <div className="w-full h-1 bg-white/5 rounded-full mt-4 overflow-hidden">
                                        <div className="w-[60%] h-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Signal Feed */}
                    <div className="lg:col-span-4 space-y-8">

                        {/* Live Feed Hub */}
                        <div className="bg-zinc-900/50 border border-white/5 rounded-[3rem] p-8 h-full flex flex-col">
                            <div className="flex items-center justify-between mb-10">
                                <h3 className="text-xl font-black uppercase italic tracking-tighter">Recent Enquiries</h3>
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            </div>

                            <div className="space-y-4 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                                {loading && stats.recentLeads.length === 0 ? (
                                    Array(4).fill(0).map((_, i) => (
                                        <div key={i} className="p-6 bg-black/20 border border-white/5 rounded-2xl animate-pulse">
                                            <div className="w-8 h-8 rounded-lg bg-white/5 mb-4" />
                                            <div className="w-2/3 h-4 bg-white/10 rounded mb-2" />
                                            <div className="w-full h-3 bg-white/5 rounded" />
                                        </div>
                                    ))
                                ) : stats.recentLeads.length === 0 ? (
                                    <div className="text-white/20 text-center py-20 font-black tracking-widest text-xs uppercase">No Signal Detected</div>
                                ) : (
                                    stats.recentLeads.map((lead, i) => (
                                        <div key={i} className="group p-6 bg-black/40 border border-white/5 rounded-2xl hover:border-[#d4af37]/30 transition-all duration-200 cursor-pointer will-change-auto transform-gpu">
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="w-8 h-8 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] font-black text-[10px]">
                                                    {lead.name.charAt(0)}
                                                </div>
                                                <span className="text-[9px] font-black uppercase tracking-widest text-white/20">
                                                    {new Date(lead.createdAt).toLocaleDateString()}
                                                </span>
                                            </div>
                                            <h5 className="font-black text-sm uppercase tracking-tight mb-1">{lead.name}</h5>
                                            <p className="text-[#d4af37] text-[10px] font-black uppercase tracking-widest mb-4">{lead.service || lead.serviceNeeded}</p>
                                            <div className="flex items-center gap-2 text-[9px] font-bold text-white/30 uppercase tracking-widest group-hover:text-white transition-colors">
                                                Analyze <ArrowRight size={10} />
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>

                            <Link href="/admin/leads" className="block w-full py-5 mt-6 text-center text-[10px] font-black uppercase tracking-[0.3em] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all border border-[#d4af37]/20 rounded-2xl">
                                View All Enquiries
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
