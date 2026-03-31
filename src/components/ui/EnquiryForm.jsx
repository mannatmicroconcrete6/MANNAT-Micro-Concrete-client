"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Send, Upload, CheckCircle2 } from 'lucide-react';
import { API_ROUTES } from '@/config/api';

const formSchema = z.object({
    name: z.string().min(2, "Name is required"),
    mobile: z.string().min(10, "Valid mobile is required"),
    email: z.string().email("Invalid email").optional().or(z.literal('')),
    city: z.string().min(1, "City is required"),
    service: z.string().min(1, "Please select a service"),
    area: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters"),
    budget: z.string().optional(),
});

const EnquiryForm = ({ onSuccess }) => {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            // Read Cookie Consent for Audit Trail
            const consentStr = typeof window !== 'undefined' ? localStorage.getItem('cookieConsent') : null;
            const consentData = consentStr ? JSON.parse(consentStr) : null;

            const formData = {
                name: data.name,
                mobile: data.mobile,
                email: data.email || null,
                city: data.city,
                serviceNeeded: data.service,
                areaSqFt: data.area || null,
                message: data.message,
                budgetRange: data.budget || null,
                consentStatus: consentData?.status || 'Not Specified',
                consentTimestamp: consentData?.timestamp || null
            };

            const response = await fetch(API_ROUTES.LEADS, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                console.error('Server responded with error:', response.status, errorData);
                throw new Error(errorData.message || 'Failed to submit lead');
            }

            const responseData = await response.json();

            // Generate WhatsApp Message
            const waMessage = `Hi Mannat, I'm ${data.name} from ${data.city}. My Mobile: ${data.mobile}. I'm interested in ${data.service}. My Project Area: ${data.area || 'N/A'} sq ft. Message: ${data.message}`;
            const waLink = `https://wa.me/919540490459?text=${encodeURIComponent(waMessage)}`;

            setTimeout(() => {
                setIsSuccess(true);
                setIsSubmitting(false);
                reset();

                if (onSuccess) {
                    onSuccess();
                }

                // Redirect to WhatsApp in a new tab
                window.open(waLink, '_blank');
            }, 1000);
        } catch (error) {
            console.error("Submission error details:", error);
            setIsSubmitting(false);
            
            // Helpful message for "Failed to fetch" (usually server down)
            if (error.message === 'Failed to fetch') {
                const isDev = process.env.NODE_ENV === 'development';
                const msg = isDev 
                    ? 'Connection Error: The backend server appears to be offline. Make sure you have run "npm run dev" in the server directory.'
                    : 'System is currently undergoing maintenance. Please try again after 5 minutes or contact us directly on WhatsApp.';
                alert(msg);
            } else {
                alert(`Error submitting form: ${error.message}`);
            }
        }
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-zinc-900 border border-[#d4af37]/30 p-12 rounded-2xl text-center"
            >
                <div className="w-20 h-20 bg-[#d4af37]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#d4af37]">
                    <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Enquiry Sent!</h3>
                <p className="text-white/60 mb-8 max-w-sm mx-auto font-light">
                    Thank you for choosing Mannat. Our luxury design consultant will contact you within 24 hours.
                </p>
                <button
                    onClick={() => setIsSuccess(false)}
                    className="text-[#d4af37] border-b border-[#d4af37] pb-1 uppercase tracking-widest text-xs font-bold"
                >
                    Send another enquiry
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-[#d4af37] mb-1">Name *</label>
                    <input
                        {...register("name")}
                        id="name"
                        name="name"
                        className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-3 focus:border-[#d4af37] outline-none transition-colors text-black dark:text-white font-light"
                        autoComplete="name"
                    />
                    {errors.name && <span className="text-red-500 text-[10px] uppercase font-bold mt-1">{errors.name.message}</span>}
                </div>
                <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-[#d4af37] mb-1">Mobile *</label>
                    <input
                        {...register("mobile")}
                        id="mobile"
                        name="mobile"
                        type="tel"
                        className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-3 focus:border-[#d4af37] outline-none transition-colors text-black dark:text-white font-light"
                        autoComplete="tel"
                    />
                    {errors.mobile && <span className="text-red-500 text-[10px] uppercase font-bold mt-1">{errors.mobile.message}</span>}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-[#d4af37] mb-1">City *</label>
                    <input
                        {...register("city")}
                        id="city"
                        name="city"
                        className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-3 focus:border-[#d4af37] outline-none transition-colors text-black dark:text-white font-light"
                        autoComplete="address-level2"
                    />
                    {errors.city && <span className="text-red-500 text-[10px] uppercase font-bold mt-1">{errors.city.message}</span>}
                </div>
                <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-[#d4af37] mb-1">Service Needed *</label>
                    <select
                        {...register("service")}
                        id="service"
                        name="service"
                        className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-3 focus:border-[#d4af37] outline-none transition-colors text-black/60 dark:text-white/50 font-light appearance-none"
                    >
                        <option value="" className="bg-white dark:bg-black">Select a Service</option>
                        <option value="microcement_flooring" className="bg-white dark:bg-black">Microcement Flooring</option>
                        <option value="microcement_walls" className="bg-white dark:bg-black">Microcement Walls</option>
                        <option value="countertops" className="bg-white dark:bg-black">Countertops & Stairs</option>
                        <option value="bathrooms" className="bg-white dark:bg-black">Wetrooms / Bathrooms</option>
                        <option value="epoxy" className="bg-white dark:bg-black">Epoxy Solutions</option>
                        <option value="venetian" className="bg-white dark:bg-black">Venetian Plaster</option>
                        <option value="limewash" className="bg-white dark:bg-black">Lime Wash</option>
                    </select>
                    {errors.service && <span className="text-red-500 text-[10px] uppercase font-bold mt-1">{errors.service.message}</span>}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-[#d4af37] mb-1">Area (Sq Ft)</label>
                    <input
                        {...register("area")}
                        id="area"
                        name="area"
                        className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-3 focus:border-[#d4af37] outline-none transition-colors text-black dark:text-white font-light"
                    />
                </div>
                <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-[#d4af37] mb-1">Budget Range</label>
                    <select
                        {...register("budget")}
                        id="budget"
                        name="budget"
                        className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-3 focus:border-[#d4af37] outline-none transition-colors text-black/60 dark:text-white/50 font-light appearance-none"
                    >
                        <option value="" className="bg-white dark:bg-black">Optional</option>
                        <option value="lux" className="bg-white dark:bg-black">Luxury (High End)</option>
                        <option value="premium" className="bg-white dark:bg-black">Premium</option>
                        <option value="standard" className="bg-white dark:bg-black">Standard</option>
                    </select>
                </div>
            </div>

            <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-[#d4af37] mb-1">Tell us about your project *</label>
                <textarea
                    {...register("message")}
                    id="message"
                    name="message"
                    rows={2}
                    className="w-full bg-transparent border border-black/10 dark:border-white/10 p-3 focus:border-[#d4af37] outline-none transition-colors text-black dark:text-white font-light resize-none mt-1"
                />
                {errors.message && <span className="text-red-500 text-[10px] uppercase font-bold mt-1">{errors.message.message}</span>}
            </div>

            <button
                disabled={isSubmitting}
                className="w-full bg-[#d4af37] text-black py-3 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 flex items-center justify-center gap-3 shadow-xl"
            >
                {isSubmitting ? "Sending..." : "Submit Enquiry"}
                <Send size={14} />
            </button>

            <p className="text-[10px] text-center text-black/30 dark:text-white/30 uppercase tracking-widest pt-2">
                Our experts will contact you directly on WhatsApp & Email.
            </p>
        </form>
    );
};

export default EnquiryForm;
