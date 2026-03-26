"use client";
import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/admin/Sidebar';
import { Search, Filter, Download, MessageSquare, Trash2, CheckCircle, XCircle, LayoutGrid, List, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import KanbanBoard from '@/components/admin/KanbanBoard';
import { API_ROUTES } from '@/config/api';
import { useRouter } from 'next/navigation';

const AdminLeads = () => {
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('All');
    const [viewMode, setViewMode] = useState('kanban');
    const [activeCategory, setActiveCategory] = useState('All');
    const [messageModalOpen, setMessageModalOpen] = useState(false);
    const [selectedLead, setSelectedLead] = useState(null);
    const [messageText, setMessageText] = useState('');
    const [sendingMessage, setSendingMessage] = useState(false);
    const [downloadingQuote, setDownloadingQuote] = useState(false);
    const router = useRouter();

    const handleDownloadQuote = async (lead) => {
        setDownloadingQuote(true);
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(API_ROUTES.LEADS_QUOTE(lead._id || lead.id), {
                headers: { 'x-auth-token': token }
            });
            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `Mannat_Quote_${lead.name.replace(/\s+/g, '_')}.pdf`;
                document.body.appendChild(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url);
            } else {
                alert('Failed to generate quote');
            }
        } catch (error) {
            console.error("Download error", error);
            alert('Error downloading quote');
        } finally {
            setDownloadingQuote(false);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/admin/login');
            return;
        }
        fetchLeads();
    }, []);

    const fetchLeads = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(API_ROUTES.LEADS, {
                headers: { 'x-auth-token': token }
            });
            const data = await res.json();
            setLeads(Array.isArray(data) ? data : []);
            setLoading(false);
        } catch (error) {
            console.error("Failed to fetch leads", error);
            setLoading(false);
        }
    };

    const updateStatus = async (id, newStatus) => {
        // Optimistic update
        setLeads(prevLeads => prevLeads.map(lead =>
            (lead._id || lead.id) === id ? { ...lead, status: newStatus } : lead
        ));

        try {
            const token = localStorage.getItem('token');
            const res = await fetch(API_ROUTES.LEADS_ID(id), {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                },
                body: JSON.stringify({ status: newStatus })
            });
            if (!res.ok) {
                fetchLeads(); // Revert on failure
            }
        } catch (error) {
            console.error("Update failed", error);
            fetchLeads();
        }
    };

    const openMessageModal = (lead) => {
        setSelectedLead(lead);
        setMessageText(`Hello ${lead.name}, this is regarding your enquiry for ${lead.serviceNeeded || 'Mannat Micro Concrete'}.`);
        setMessageModalOpen(true);
    };

    const handleSendMessage = async () => {
        if (!selectedLead || !messageText.trim()) return;
        setSendingMessage(true);
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(API_ROUTES.LEADS_MESSAGE(selectedLead._id || selectedLead.id), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                },
                body: JSON.stringify({ message: messageText })
            });
            const data = await res.json();
            if (res.ok) {
                alert('Message sent successfully!');
                setMessageModalOpen(false);
                setMessageText('');
            } else {
                alert('Failed to send message: ' + data.message);
            }
        } catch (error) {
            console.error("Failed to send message", error);
            alert('Error sending message');
        } finally {
            setSendingMessage(false);
        }
    };

    const filteredLeads = leads
        .filter(lead => {
            const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                lead.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                lead.city?.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesStatus = filterStatus === 'All' || lead.status === filterStatus;
            return matchesSearch && matchesStatus;
        })
        .sort((a, b) => {
            // Sort by score first (descending), then by date (descending)
            if ((b.score || 0) !== (a.score || 0)) {
                return (b.score || 0) - (a.score || 0);
            }
            return new Date(b.createdAt) - new Date(a.createdAt);
        });

    return (
        <div className="flex bg-[#050505] min-h-screen text-white relative">
            <Sidebar />
            <main className="flex-1 p-12 overflow-hidden">
                <header className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Customer Enquiries</h1>
                        <p className="text-white/40 text-sm mt-1 uppercase tracking-widest">Home / Manage Enquiries</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex bg-zinc-900 border border-white/10 rounded-lg p-1">
                            <button
                                onClick={() => setViewMode('table')}
                                className={`p-2 rounded-md transition-all ${viewMode === 'table' ? 'bg-[#d4af37] text-black' : 'text-white/50 hover:text-white'}`}
                            >
                                <List size={16} />
                            </button>
                            <button
                                onClick={() => setViewMode('kanban')}
                                className={`p-2 rounded-md transition-all ${viewMode === 'kanban' ? 'bg-[#d4af37] text-black' : 'text-white/50 hover:text-white'}`}
                            >
                                <LayoutGrid size={16} />
                            </button>
                        </div>
                        <button className="px-6 py-2 bg-[#d4af37] text-black font-bold uppercase tracking-widest text-xs rounded-lg flex items-center gap-2 hover:bg-white transition-all">
                            <Download size={14} /> Export CSV
                        </button>
                    </div>
                </header>

                {/* Filters */}
                <div className="bg-zinc-900/30 border border-white/5 p-6 rounded-2xl mb-8 flex flex-wrap gap-4 justify-between items-center">
                    <div className="flex gap-4 flex-1">
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={16} />
                            <input
                                className="w-full bg-zinc-900 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:border-[#d4af37] transition-all"
                                placeholder="Search by name, email, or city..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        {viewMode === 'table' && (
                            <select
                                className="bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#d4af37] appearance-none cursor-pointer"
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                            >
                                <option value="All">All Statuses</option>
                                <option value="New">New</option>
                                <option value="Contacted">Contacted</option>
                                <option value="Quoted">Quoted</option>
                                <option value="Won">Won</option>
                                <option value="Lost">Lost</option>
                            </select>
                        )}
                    </div>
                </div>

                {/* Content View */}
                {loading ? (
                    <div className="text-center py-20 text-white/30">Loading leads...</div>
                ) : viewMode === 'kanban' ? (
                    <KanbanBoard
                        leads={filteredLeads}
                        onStatusChange={updateStatus}
                        onMessageClick={openMessageModal}
                        onDownloadQuote={handleDownloadQuote}
                        downloadingQuote={downloadingQuote}
                    />
                ) : (
                    <div className="bg-zinc-900/30 border border-white/5 rounded-3xl overflow-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left border-b border-white/5 text-[10px] uppercase tracking-widest font-bold text-white/30 bg-white/5">
                                    <th className="px-8 py-6">Date</th>
                                    <th className="px-8 py-6">Customer</th>
                                    <th className="px-8 py-6">Contact</th>
                                    <th className="px-8 py-6">Requirement</th>
                                    <th className="px-8 py-6">Priority</th>
                                    <th className="px-8 py-6">Status</th>
                                    <th className="px-8 py-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {filteredLeads.length === 0 ? (
                                    <tr><td colSpan="6" className="px-8 py-12 text-center text-white/30">No leads found matching your criteria.</td></tr>
                                ) : filteredLeads.map((lead) => (
                                    <motion.tr
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        key={lead._id || lead.id}
                                        className="hover:bg-white/5 transition-colors"
                                    >
                                        <td className="px-8 py-6 text-sm text-white/50">
                                            {new Date(lead.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="font-bold text-white">{lead.name}</div>
                                            <div className="text-xs text-white/40">{lead.city}</div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="text-sm text-white/70">{lead.mobile}</div>
                                            <div className="text-xs text-white/40">{lead.email}</div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="text-sm text-white/70">{lead.serviceNeeded}</div>
                                            {lead.areaSqFt && <div className="text-xs text-[#d4af37]">{lead.areaSqFt} sq.ft</div>}
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase border ${(lead.score || 0) >= 70 ? 'bg-[#d4af37]/10 text-[#d4af37] border-[#d4af37]/30' :
                                                (lead.score || 0) >= 40 ? 'bg-blue-500/10 text-blue-400 border-blue-500/30' :
                                                    'bg-white/5 text-white/30 border-white/10'
                                                }`}>
                                                {lead.score || 0} Points
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <select
                                                value={lead.status}
                                                onChange={(e) => updateStatus(lead._id || lead.id, e.target.value)}
                                                className={`bg-transparent border-none text-[10px] font-bold uppercase tracking-widest cursor-pointer outline-none ${lead.status === 'New' ? 'text-[#d4af37]' :
                                                    lead.status === 'Won' ? 'text-green-400' :
                                                        lead.status === 'Lost' ? 'text-red-400' :
                                                            'text-blue-400'
                                                    }`}
                                            >
                                                <option value="New" className="bg-black text-[#d4af37]">New</option>
                                                <option value="Contacted" className="bg-black text-blue-400">Contacted</option>
                                                <option value="Quoted" className="bg-black text-purple-400">Quoted</option>
                                                <option value="Won" className="bg-black text-green-400">Won</option>
                                                <option value="Lost" className="bg-black text-red-400">Lost</option>
                                            </select>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button
                                                    onClick={() => handleDownloadQuote(lead)}
                                                    className="p-2 hover:bg-[#d4af37]/10 rounded-lg text-[#d4af37]/50 hover:text-[#d4af37] transition-colors"
                                                    title="Download PDF Quote"
                                                    disabled={downloadingQuote}
                                                >
                                                    <FileText size={16} className={downloadingQuote ? 'animate-pulse' : ''} />
                                                </button>
                                                <button
                                                    onClick={() => openMessageModal(lead)}
                                                    className="p-2 hover:bg-white/10 rounded-lg text-white/50 hover:text-white transition-colors"
                                                    title="Send Message"
                                                >
                                                    <MessageSquare size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </main>

            {/* Message Modal */}
            {messageModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
                    <div className="bg-zinc-900 w-full max-w-md p-8 rounded-3xl border border-white/10 relative">
                        <button
                            onClick={() => setMessageModalOpen(false)}
                            className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors"
                        >
                            <XCircle size={24} />
                        </button>
                        <h2 className="text-xl font-bold mb-1">Message Lead</h2>
                        <p className="text-white/40 text-xs uppercase tracking-widest mb-6">Send WhatsApp to {selectedLead?.name}</p>

                        <div className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-white/50 block mb-2 uppercase tracking-wide">Message</label>
                                <textarea
                                    className="w-full bg-black border border-white/10 rounded-xl p-4 h-32 text-sm outline-none focus:border-[#d4af37] transition-all resize-none"
                                    value={messageText}
                                    onChange={(e) => setMessageText(e.target.value)}
                                    placeholder="Type your message here..."
                                />
                            </div>
                            <button
                                onClick={handleSendMessage}
                                disabled={sendingMessage}
                                className="w-full py-4 bg-[#d4af37] text-black font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {sendingMessage ? 'Sending...' : 'Send WhatsApp Message'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminLeads;
