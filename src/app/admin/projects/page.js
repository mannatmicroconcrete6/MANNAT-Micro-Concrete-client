"use client";
import React, { useEffect, useState } from 'react';
import Sidebar from '@/components/admin/Sidebar';
import { Plus, Edit, Trash2, Search, Filter } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { API_ROUTES } from '@/config/api';

const ProjectsAdminPage = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/admin/login');
            return;
        }

        // Fetch projects from API
        const fetchProjects = async () => {
            try {
                const res = await fetch(API_ROUTES.PROJECTS);
                const data = await res.json();
                setProjects(data);
            } catch (error) {
                console.error("Failed to fetch projects", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="flex bg-[#050505] min-h-screen text-white">
            <Sidebar />
            <main className="flex-1 p-12">
                <header className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Project Gallery</h1>
                        <p className="text-white/40 text-sm mt-1 uppercase tracking-widest">Home / Projects</p>
                    </div>
                    <Link href="/admin/projects/new" className="px-6 py-3 bg-[#d4af37] text-black font-bold uppercase tracking-widest text-xs rounded-full flex items-center gap-2 hover:bg-white transition-all shadow-lg">
                        <Plus size={16} /> Add Project
                    </Link>
                </header>

                {/* Filters & Search */}
                <div className="bg-zinc-900/30 border border-white/5 rounded-3xl overflow-hidden mb-8">
                    <div className="p-6 border-b border-white/5 flex justify-between items-center">
                        <div className="flex gap-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={16} />
                                <input className="bg-zinc-900 border border-white/10 rounded-full pl-10 pr-4 py-2 text-xs outline-none focus:border-[#d4af37] text-white w-64" placeholder="Search projects..." />
                            </div>
                            <button className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white/50 hover:text-white px-4">
                                <Filter size={14} /> Filter
                            </button>
                        </div>
                    </div>

                    <table className="w-full">
                        <thead>
                            <tr className="text-left border-b border-white/5 text-[10px] uppercase tracking-widest font-bold text-white/30">
                                <th className="px-8 py-6">Project</th>
                                <th className="px-8 py-6">Category</th>
                                <th className="px-8 py-6">Location</th>
                                <th className="px-8 py-6 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {loading ? (
                                <tr>
                                    <td colSpan="4" className="px-8 py-12 text-center text-white/30">Loading projects...</td>
                                </tr>
                            ) : projects.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="px-8 py-12 text-center text-white/30">No projects found. Add your first one!</td>
                                </tr>
                            ) : (
                                projects.map((project) => (
                                    <tr key={project._id} className="hover:bg-white/5 transition-colors group">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-zinc-800 rounded-lg overflow-hidden relative">
                                                    {project.images && project.images[0] && (
                                                        <img src={project.images[0].url} alt={project.title} className="w-full h-full object-cover" />
                                                    )}
                                                </div>
                                                <span className="font-bold text-white block">{project.title}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-sm text-white/60">
                                            <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/70">
                                                {project.category}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6 text-sm text-white/60">{project.city || project.location}</td>
                                        <td className="px-8 py-6 text-right">
                                            <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="p-2 hover:bg-white/10 rounded-full text-[#d4af37] transition-colors" title="Edit">
                                                    <Edit size={16} />
                                                </button>
                                                <button className="p-2 hover:bg-red-500/10 rounded-full text-red-500 transition-colors" title="Delete">
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default ProjectsAdminPage;
