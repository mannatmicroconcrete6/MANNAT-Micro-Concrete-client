"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '@/components/admin/Sidebar';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, LineChart, Line, Legend
} from 'recharts';
import {
    TrendingUp, Users, MousePointer2, Globe, ArrowUpRight,
    ArrowDownRight, Smartphone, Monitor, MapPin, Search
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { API_ROUTES } from '@/config/api';

const COLORS = ['#d4af37', '#ffffff', '#444444', '#888888', '#aaaaaa'];

const AnalyticsPage = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/admin/login');
            return;
        }

        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get(API_ROUTES.ANALYTICS, {
                    headers: { 'x-auth-token': token }
                });
                setData(res.data);
            } catch (err) {
                console.error('Fetch Analytics Error:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <div className="w-12 h-12 border-4 border-[#d4af37] border-t-transparent rounded-full animate-spin" />
        </div>
    );

    if (!data) return <div className="p-10 text-white font-black italic">ERROR LOADING STATS</div>;

    const eventData = Object.keys(data.events).map(key => ({
        name: key.replace('_', ' '),
        value: data.events[key]
    }));

    const pageViewData = data.pageViews.map(item => ({
        name: item._id === '/' ? 'Home' : item._id.split('/').pop(),
        count: item.count
    }));

    return (
        <div className="flex bg-[#010101] min-h-screen text-white font-sans selection:bg-[#d4af37] selection:text-black">
            <Sidebar />

            <main className="flex-1 p-12 overflow-y-auto relative will-change-transform scroll-smooth">
                {/* CSS Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d4af37 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

                <div className="space-y-12 animate-in fade-in duration-1000 relative z-10">
                    {/* Header */}
                    <div>
                        <h1 className="text-5xl font-black italic tracking-tighter text-white uppercase italic">
                            Visitor <span className="text-[#d4af37]">Stats</span>
                        </h1>
                        <p className="text-xs font-black tracking-[0.4em] text-white/40 uppercase mt-4">Real-time Marketing Insights</p>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { label: 'Total Visits', value: data.totalVisits, icon: Users, trend: '+12%' },
                            { label: 'WhatsApp Clicks', value: data.events.WHATSAPP_CLICK || 0, icon: MousePointer2, trend: '+5%' },
                            { label: 'Form Submits', value: data.events.FORM_SUBMIT || 0, icon: TrendingUp, trend: '+8%' },
                            { label: 'Engaged Cities', value: data.cityStats.length, icon: Globe, trend: 'Global' },
                        ].map((stat, i) => (
                            <div key={i} className="group p-8 bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] hover:border-[#d4af37]/30 transition-all duration-500 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-500">
                                    <stat.icon size={64} className="text-[#d4af37]" />
                                </div>
                                <div className="flex items-start justify-between relative z-10">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#d4af37]">
                                        <stat.icon size={20} />
                                    </div>
                                    <span className="flex items-center gap-1 text-[10px] font-black text-green-500 bg-green-500/10 px-3 py-1 rounded-full tracking-widest uppercase">
                                        <ArrowUpRight size={10} /> {stat.trend}
                                    </span>
                                </div>
                                <div className="mt-8 relative z-10">
                                    <h3 className="text-[10px] font-black tracking-[0.2em] text-white/40 uppercase mb-2">{stat.label}</h3>
                                    <p className="text-4xl font-black italic text-white tracking-tighter">{stat.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Charts Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                        {/* Event Distribution */}
                        <div className="p-10 bg-[#0a0a0a] border border-white/5 rounded-[3rem] space-y-8">
                            <h3 className="text-[10px] font-black tracking-[0.3em] text-white/40 uppercase">Conversion Distribution</h3>
                            <div className="h-[300px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={eventData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={80}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {eventData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip
                                            contentStyle={{ backgroundColor: '#000', border: '1px solid #333', borderRadius: '15px', color: '#fff' }}
                                            itemStyle={{ color: '#d4af37' }}
                                        />
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Top Pages */}
                        <div className="p-10 bg-[#0a0a0a] border border-white/5 rounded-[3rem] space-y-8">
                            <h3 className="text-[10px] font-black tracking-[0.3em] text-white/40 uppercase">Top Visited Pages</h3>
                            <div className="h-[300px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={pageViewData}>
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#666', fontSize: 10 }} />
                                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#666', fontSize: 10 }} />
                                        <Tooltip
                                            cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                            contentStyle={{ backgroundColor: '#000', border: '1px solid #333', borderRadius: '15px' }}
                                        />
                                        <Bar dataKey="count" fill="#d4af37" radius={[10, 10, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>

                    {/* Geo & Location Data */}
                    <div className="p-10 bg-[#0a0a0a] border border-white/5 rounded-[3rem] space-y-8">
                        <h3 className="text-[10px] font-black tracking-[0.3em] text-white/40 uppercase">Geographic Engagement</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                            {data.cityStats.map((city, i) => (
                                <div key={i} className="flex flex-col gap-4 p-6 bg-white/5 rounded-[2rem] border border-white/5 hover:border-[#d4af37]/20 transition-all duration-300">
                                    <div className="flex items-center justify-between">
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#d4af37]">
                                            <MapPin size={14} />
                                        </div>
                                        <span className="text-[10px] font-black text-white/40">#{i + 1}</span>
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-black tracking-widest text-white/40 uppercase mb-1">City</h4>
                                        <p className="text-xl font-black italic text-white truncate">{city._id}</p>
                                        <p className="text-[10px] font-bold text-[#d4af37] mt-1">{city.count} Sessions</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AnalyticsPage;
