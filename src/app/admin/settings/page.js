"use client";
import React from 'react';
import Sidebar from '@/components/admin/Sidebar';
import { Save, Lock, User, Bell } from 'lucide-react';

import { useRouter } from 'next/navigation';

const AdminSettings = () => {
    const [emailAlerts, setEmailAlerts] = React.useState(true);
    const [weeklyReport, setWeeklyReport] = React.useState(false);
    const router = useRouter();

    React.useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/admin/login');
        }
    }, [router]);

    const toggleEmailAlerts = () => {
        setEmailAlerts(!emailAlerts);
        // Here you would typically call an API to save the preference
    };

    const toggleWeeklyReport = () => {
        setWeeklyReport(!weeklyReport);
        // Here you would typically call an API to save the preference
    };

    return (
        <div className="flex bg-[#050505] min-h-screen text-white">
            <Sidebar />
            <main className="flex-1 p-12">
                <header className="mb-12">
                    <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
                    <p className="text-white/40 text-sm mt-1 uppercase tracking-widest">Dashboard / Configuration</p>
                </header>

                <div className="max-w-4xl space-y-8">
                    {/* Security Section */}
                    <div className="bg-zinc-900/30 border border-white/5 p-8 rounded-3xl">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                                <Lock size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Security & Login</h3>
                                <p className="text-white/40 text-xs uppercase tracking-widest">Manage your admin access</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest font-bold text-white/50">Current Password</label>
                                    <input type="password" placeholder="••••••••" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#d4af37]" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest font-bold text-white/50">New Password</label>
                                    <input type="password" placeholder="••••••••" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#d4af37]" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest font-bold text-white/50">Confirm Password</label>
                                    <input type="password" placeholder="••••••••" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#d4af37]" />
                                </div>
                            </div>
                            <button className="px-8 py-3 bg-[#d4af37] text-black font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-white transition-all">
                                Update Password
                            </button>
                        </div>
                    </div>

                    {/* Notification Settings */}
                    <div className="bg-zinc-900/30 border border-white/5 p-8 rounded-3xl">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                                <Bell size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Notifications</h3>
                                <p className="text-white/40 text-xs uppercase tracking-widest">Email & Alert Preferences</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {/* Email Alerts Toggle */}
                            <div className="flex items-center justify-between p-4 bg-black/20 rounded-xl border border-white/5 cursor-pointer" onClick={toggleEmailAlerts}>
                                <div>
                                    <h4 className="font-bold text-sm">New Lead Alerts</h4>
                                    <p className="text-white/40 text-xs">Receive email when a new enquiry is submitted</p>
                                </div>
                                <div className={`w-12 h-6 rounded-full relative transition-colors ${emailAlerts ? 'bg-[#d4af37]' : 'bg-zinc-700'}`}>
                                    <div className={`absolute top-1 w-4 h-4 rounded-full shadow-lg transition-all ${emailAlerts ? 'right-1 bg-black' : 'left-1 bg-white'}`}></div>
                                </div>
                            </div>

                            {/* Weekly Report Toggle */}
                            <div className="flex items-center justify-between p-4 bg-black/20 rounded-xl border border-white/5 cursor-pointer" onClick={toggleWeeklyReport}>
                                <div>
                                    <h4 className="font-bold text-sm">Weekly Activity Report</h4>
                                    <p className="text-white/40 text-xs">Summary of website visits and conversions</p>
                                </div>
                                <div className={`w-12 h-6 rounded-full relative transition-colors ${weeklyReport ? 'bg-[#d4af37]' : 'bg-zinc-700'}`}>
                                    <div className={`absolute top-1 w-4 h-4 rounded-full shadow-lg transition-all ${weeklyReport ? 'right-1 bg-black' : 'left-1 bg-white'}`}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminSettings;
