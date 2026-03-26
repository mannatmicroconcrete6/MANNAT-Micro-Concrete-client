"use client";
import React, { useState } from 'react';
import Sidebar from '@/components/admin/Sidebar';
import { Upload, X, Loader2, Image as ImageIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { API_ROUTES } from '@/config/api';

const NewProjectPage = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState([]);
    const [previews, setPreviews] = useState([]);

    React.useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/admin/login');
        }
    }, [router]);

    const [formData, setFormData] = useState({
        title: '',
        category: 'Microcement Flooring',
        location: '',
        area: '',
        year: new Date().getFullYear(),
        client: '',
        tags: '',
        description: ''
    });

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 0) {
            setImages([...images, ...files]);

            // Create previews
            const newPreviews = files.map(file => URL.createObjectURL(file));
            setPreviews([...previews, ...newPreviews]);
        }
    };

    const removeImage = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);

        const newPreviews = [...previews];
        URL.revokeObjectURL(newPreviews[index]); // Cleanup
        newPreviews.splice(index, 1);
        setPreviews(newPreviews);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const data = new FormData();
            Object.keys(formData).forEach(key => {
                data.append(key, formData[key]);
            });

            images.forEach(image => {
                data.append('images', image);
            });

            const getAuthToken = () => {
                if (typeof window !== 'undefined') {
                    return localStorage.getItem('token');
                }
                return null;
            };

            const token = getAuthToken();

            const res = await fetch(API_ROUTES.PROJECTS, {
                method: 'POST',
                headers: {
                    'x-auth-token': token // Matching server/middleware/auth.js
                },
                body: data
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.msg || 'Failed to create project');
            }

            // Success
            router.push('/admin/projects');

        } catch (error) {
            console.error(error);
            alert('Error creating project: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex bg-[#050505] min-h-screen text-white">
            <Sidebar />
            <main className="flex-1 p-12">
                <header className="mb-12">
                    <h1 className="text-3xl font-bold tracking-tight">Add New Project</h1>
                    <p className="text-white/40 text-sm mt-1 uppercase tracking-widest">Project Gallery / Add New</p>
                </header>

                <form onSubmit={handleSubmit} className="max-w-4xl space-y-8">
                    {/* Basic Info */}
                    <div className="bg-zinc-900/30 border border-white/5 p-8 rounded-3xl space-y-6">
                        <h3 className="text-xl font-bold mb-6">About the Project</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest font-bold text-white/50">Project Title *</label>
                                <input
                                    required
                                    value={formData.title}
                                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#d4af37]"
                                    placeholder="e.g. Modern Villa, Mumbai"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest font-bold text-white/50">Category *</label>
                                <select
                                    value={formData.category}
                                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#d4af37]"
                                >
                                    <option value="Microcement Flooring">Microcement Flooring</option>
                                    <option value="Microcement Walls">Microcement Walls</option>
                                    <option value="Countertops & Stairs">Countertops & Stairs</option>
                                    <option value="Wetrooms / Bathrooms">Wetrooms / Bathrooms</option>
                                    <option value="Terrazzo">Terrazzo</option>
                                    <option value="Epoxy">Epoxy</option>
                                    <option value="Venetian Lime Plaster">Venetian Lime Plaster</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest font-bold text-white/50">Location</label>
                                <input
                                    value={formData.location}
                                    onChange={e => setFormData({ ...formData, location: e.target.value })}
                                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#d4af37]"
                                    placeholder="e.g. Bandra, Mumbai"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest font-bold text-white/50">Area (Sq Ft)</label>
                                <input
                                    value={formData.area}
                                    onChange={e => setFormData({ ...formData, area: e.target.value })}
                                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#d4af37]"
                                    placeholder="e.g. 2500"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest font-bold text-white/50">Description</label>
                            <textarea
                                rows={4}
                                value={formData.description}
                                onChange={e => setFormData({ ...formData, description: e.target.value })}
                                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#d4af37]"
                                placeholder="Describe the project..."
                            />
                        </div>
                    </div>

                    {/* Image Upload */}
                    <div className="bg-zinc-900/30 border border-white/5 p-8 rounded-3xl">
                        <h3 className="text-xl font-bold mb-6">Project Photos</h3>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            {previews.map((src, idx) => (
                                <div key={idx} className="relative aspect-square rounded-xl overflow-hidden group border border-white/10">
                                    <img src={src} alt="Preview" className="w-full h-full object-cover" />
                                    <button
                                        type="button"
                                        onClick={() => removeImage(idx)}
                                        className="absolute top-2 right-2 p-1 bg-red-500 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <X size={14} />
                                    </button>
                                </div>
                            ))}
                            <label className="aspect-square rounded-xl border-2 border-dashed border-white/10 hover:border-[#d4af37] flex flex-col items-center justify-center cursor-pointer transition-colors text-white/30 hover:text-[#d4af37]">
                                <Upload size={24} className="mb-2" />
                                <span className="text-xs font-bold uppercase tracking-widest">Upload</span>
                                <input type="file" multiple accept="image/*" onChange={handleImageChange} className="hidden" />
                            </label>
                        </div>
                    </div>

                    {/* Submit */}
                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            onClick={() => router.back()}
                            className="px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs text-white/50 hover:text-white"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-8 py-3 bg-[#d4af37] text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white transition-all flex items-center gap-2"
                        >
                            {loading ? <Loader2 size={16} className="animate-spin" /> : <Upload size={16} />}
                            {loading ? 'Saving Project...' : 'Save Project'}
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default NewProjectPage;
