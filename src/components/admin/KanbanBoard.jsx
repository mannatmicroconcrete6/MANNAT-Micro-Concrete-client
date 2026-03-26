 "use client";
import React, { useState, useEffect } from "react";
import { DndContext, DragOverlay, useDraggable, useDroppable, closestCorners } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { motion } from "framer-motion";
import { MessageSquare, FileText } from "lucide-react";

const DraggableLead = ({ lead, onMessageClick, onDownloadQuote, downloadingQuote }) => {
    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: lead._id || lead.id,
        data: { lead }
    });

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            className={`relative group p-4 bg-zinc-800 rounded-xl mb-3 cursor-grab active:cursor-grabbing border border-white/5 hover:border-[#d4af37]/50 transition-all ${isDragging ? 'opacity-50' : 'opacity-100'}`}
        >
            <div className="flex justify-between items-start mb-2">
                <span className="font-bold text-sm text-white">{lead.name}</span>
                <span className="text-[10px] text-white/30">{new Date(lead.createdAt).toLocaleDateString()}</span>
            </div>
            <p className="text-xs text-white/60 mb-2 truncate">{lead.serviceNeeded}</p>
            <div className="flex justify-between items-center gap-2">
                <span className="text-[10px] bg-white/5 px-2 py-1 rounded text-white/40">{lead.city}</span>
                <div className="flex gap-2">
                    <button
                        onPointerDown={(e) => {
                            e.stopPropagation();
                            onDownloadQuote(lead);
                        }}
                        disabled={downloadingQuote}
                        className="opacity-0 group-hover:opacity-100 p-1.5 bg-[#d4af37]/20 text-[#d4af37] rounded-lg transition-all hover:bg-[#d4af37] hover:text-black"
                        title="Download Quote"
                    >
                        <FileText size={12} className={downloadingQuote ? 'animate-pulse' : ''} />
                    </button>
                    <button
                        onPointerDown={(e) => {
                            e.stopPropagation(); // Prevent drag start
                            onMessageClick(lead);
                        }}
                        className="opacity-0 group-hover:opacity-100 p-1.5 bg-[#d4af37] text-black rounded-lg transition-all hover:scale-110"
                        title="Send Message"
                    >
                        <MessageSquare size={12} />
                    </button>
                </div>
            </div>
            {/* Area pill if message button is hidden or extra info needed */}
            {lead.areaSqFt && <span className="absolute bottom-4 right-10 text-[10px] text-[#d4af37] opacity-100 group-hover:opacity-0 transition-opacity">{lead.areaSqFt} sq.ft</span>}
        </div>
    );
};

const DroppableColumn = ({ id, title, leads, onMessageClick, onDownloadQuote, downloadingQuote }) => {
    const { setNodeRef, isOver } = useDroppable({
        id: id
    });

    return (
        <div className="flex flex-col min-w-[280px] w-full max-w-xs h-full">
            <div className="flex items-center justify-between mb-4 px-2">
                <h3 className="font-bold text-sm uppercase tracking-widest text-white/70">{title}</h3>
                <span className="bg-white/10 text-white/50 text-xs px-2 py-1 rounded-md font-bold">{leads.length}</span>
            </div>

            <div
                ref={setNodeRef}
                className={`flex-1 bg-zinc-900/30 rounded-2xl p-3 border border-white/5 transition-colors ${isOver ? 'bg-white/5 border-[#d4af37]/30' : ''}`}
            >
                {leads.map((lead) => (
                    <DraggableLead
                        key={lead._id || lead.id}
                        lead={lead}
                        onMessageClick={onMessageClick}
                        onDownloadQuote={onDownloadQuote}
                        downloadingQuote={downloadingQuote}
                    />
                ))}
                {leads.length === 0 && (
                    <div className="h-20 flex items-center justify-center text-white/10 text-xs uppercase tracking-widest border border-dashed border-white/5 rounded-xl">
                        Empty
                    </div>
                )}
            </div>
        </div>
    );
};

const KanbanBoard = ({ leads, onStatusChange, onMessageClick, onDownloadQuote, downloadingQuote }) => {
    const [columns, setColumns] = useState({
        "New": [],
        "Contacted": [],
        "Quoted": [],
        "Won": [],
        "Lost": []
    });

    useEffect(() => {
        // Group leads by status
        const newColumns = {
            "New": leads.filter(l => l.status === "New"),
            "Contacted": leads.filter(l => l.status === "Contacted"),
            "Quoted": leads.filter(l => l.status === "Quoted"),
            "Won": leads.filter(l => l.status === "Won"),
            "Lost": leads.filter(l => l.status === "Lost")
        };
        setColumns(newColumns);
    }, [leads]);

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (!over) return;

        const leadId = active.id;
        const newStatus = over.id; // The droppable ID is the status name

        // Optimistic update locally
        // Find the lead in old columns
        let movedLead = null;
        const currentStatus = Object.keys(columns).find(key => {
            const found = columns[key].find(l => (l._id || l.id) === leadId);
            if (found) {
                movedLead = found;
                return true;
            }
            return false;
        });

        if (currentStatus && currentStatus !== newStatus && movedLead) {
            // Call parent update
            onStatusChange(leadId, newStatus);
        }
    };

    return (
        <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
            <div className="flex gap-6 overflow-x-auto pb-4 h-[calc(100vh-200px)]">
                <DroppableColumn id="New" title="New Inquiries" leads={columns["New"]} onMessageClick={onMessageClick} onDownloadQuote={onDownloadQuote} downloadingQuote={downloadingQuote} />
                <DroppableColumn id="Contacted" title="In Discussion" leads={columns["Contacted"]} onMessageClick={onMessageClick} onDownloadQuote={onDownloadQuote} downloadingQuote={downloadingQuote} />
                <DroppableColumn id="Quoted" title="Price Sent" leads={columns["Quoted"]} onMessageClick={onMessageClick} onDownloadQuote={onDownloadQuote} downloadingQuote={downloadingQuote} />
                <DroppableColumn id="Won" title="Job Won" leads={columns["Won"]} onMessageClick={onMessageClick} onDownloadQuote={onDownloadQuote} downloadingQuote={downloadingQuote} />
                <DroppableColumn id="Lost" title="Closed" leads={columns["Lost"]} onMessageClick={onMessageClick} onDownloadQuote={onDownloadQuote} downloadingQuote={downloadingQuote} />
            </div>
        </DndContext>
    );
};

export default KanbanBoard;
