"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, User, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { API_ROUTES } from '@/config/api';

const AdminLogin = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const res = await fetch(API_ROUTES.AUTH_LOGIN, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await res.json();

            if (data.success) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('admin', JSON.stringify(data.admin));
                router.push('/admin/dashboard');
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (err) {
            setError('Server connection failed');
        }
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md bg-zinc-900 border border-white/5 p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/5 blur-3xl rounded-full" />

                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold tracking-tighter text-white uppercase">Mannat <span className="text-[#d4af37]">Admin</span></h2>
                    <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold mt-2">Official Portal</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    {error && <div className="text-red-500 text-sm text-center font-bold bg-red-500/10 py-2 rounded-lg">{error}</div>}
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Username"
                            className="w-full bg-black border border-white/5 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-[#d4af37] transition-all text-white placeholder:text-white/10"
                        />
                    </div>

                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="w-full bg-black border border-white/5 rounded-2xl py-4 pl-12 pr-12 outline-none focus:border-[#d4af37] transition-all text-white placeholder:text-white/10"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-[#d4af37] transition-colors"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    <div className="flex justify-end pr-2">
                        <Link
                            href="/admin/forgot-password"
                            className="text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-[#d4af37] transition-colors"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    <button className="w-full bg-[#d4af37] text-black py-4 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-white transition-all shadow-xl">
                        Login <ArrowRight size={14} />
                    </button>
                </form>

                <p className="text-center text-[8px] uppercase tracking-widest text-white/10 mt-10">
                    Mannat Micro Concrete - Administrator Login
                </p>
            </motion.div>
        </div>
    );
};

export default AdminLogin;
