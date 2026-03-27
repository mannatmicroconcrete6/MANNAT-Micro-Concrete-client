import React from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, ArrowUpRight, CheckCircle2, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { API_ROUTES } from '@/config/api';

const miniFormSchema = z.object({
    name: z.string().min(2, "Name is required"),
    mobile: z.string().min(10, "Valid mobile is required"),
    city: z.string().min(1, "City is required"),
    service: z.string().min(1, "Please select a service"),
});

const CTABand = () => {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(miniFormSchema),
    });

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            const formData = {
                name: data.name,
                mobile: data.mobile,
                city: data.city,
                serviceNeeded: data.service,
                message: `Quick enquiry from CTA Band for ${data.service}`,
            };

            const response = await fetch(API_ROUTES.LEADS, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to submit');

            // WhatsApp Redirect
            const waMessage = `Hi Mannat, I'm ${data.name} from ${data.city}. I'm interested in ${data.service}.`;
            const waLink = `https://wa.me/919540490459?text=${encodeURIComponent(waMessage)}`;

            setIsSuccess(true);
            reset();
            window.open(waLink, '_blank');
        } catch (error) {
            console.error(error);
            alert("Error sending request. Please call us directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-[1600px] mx-auto">
                <div className="bg-[#d4af37] rounded-[4rem] p-12 md:p-24 relative overflow-hidden flex flex-col lg:flex-row gap-20 items-center">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[50%] h-full bg-white blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
                    </div>

                    {/* Left: Content */}
                    <div className="flex-1 text-black relative z-10 text-center lg:text-left">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] mb-8 block">Project Inquiry</span>
                        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.8] mb-10 text-white">
                            Get a Free <br />
                            <span className="text-black">Consultation.</span>
                        </h2>
                        <p className="text-black/60 text-lg font-medium leading-relaxed max-w-sm mx-auto lg:mx-0 mb-12">
                            Transform your space with seamless precision. Our experts are ready to guide you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                            <a href="tel:+919540490459" className="flex items-center gap-4 text-2xl font-bold border-b-2 border-black/10 pb-2 hover:border-black transition-all">
                                <Phone size={24} /> +91 95404 90459
                            </a>
                        </div>
                    </div>

                    {/* Right: Mini Form */}
                    <div className="w-full lg:w-[500px] bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl relative z-10">
                        {isSuccess ? (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-black mb-2 uppercase tracking-tighter">Thank You!</h3>
                                <p className="text-black/40 text-xs font-bold uppercase tracking-widest mb-8">We will connect with you soon.</p>
                                <button onClick={() => setIsSuccess(false)} className="text-black border-b border-black pb-1 uppercase tracking-widest text-[10px] font-extrabold">Send New</button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <input
                                                {...register("name")}
                                                type="text"
                                                placeholder="NAME"
                                                className={`w-full bg-zinc-50 border ${errors.name ? 'border-red-500' : 'border-black/5'} rounded-2xl px-6 py-4 text-[10px] font-black tracking-widest text-black placeholder:text-black/40 focus:ring-2 focus:ring-[#d4af37] outline-none transition-all`}
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <input
                                                {...register("mobile")}
                                                type="tel"
                                                placeholder="PHONE"
                                                className={`w-full bg-zinc-50 border ${errors.mobile ? 'border-red-500' : 'border-black/5'} rounded-2xl px-6 py-4 text-[10px] font-black tracking-widest text-black placeholder:text-black/40 focus:ring-2 focus:ring-[#d4af37] outline-none transition-all`}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <input
                                                {...register("city")}
                                                type="text"
                                                placeholder="CITY"
                                                className={`w-full bg-zinc-50 border ${errors.city ? 'border-red-500' : 'border-black/5'} rounded-2xl px-6 py-4 text-[10px] font-black tracking-widest text-black placeholder:text-black/40 focus:ring-2 focus:ring-[#d4af37] outline-none transition-all`}
                                            />
                                        </div>
                                        <div className="space-y-1 relative">
                                            <select 
                                                {...register("service")}
                                                className={`w-full bg-zinc-50 border ${errors.service ? 'border-red-500' : 'border-black/5'} rounded-2xl px-6 py-4 text-[10px] font-black tracking-widest text-black focus:ring-2 focus:ring-[#d4af37] outline-none appearance-none transition-all`}
                                            >
                                                <option value="">SELECT SERVICE</option>
                                                <option value="MICROCEMENT FLOORING">MICROCEMENT FLOORING</option>
                                                <option value="MICROCEMENT WALLS">MICROCEMENT WALLS</option>
                                                <option value="VENETIAN PLASTER">VENETIAN PLASTER</option>
                                                <option value="EPOXY COATING">EPOXY COATING</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <button 
                                    disabled={isSubmitting}
                                    type="submit"
                                    className="w-full bg-black text-white py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-zinc-800 disabled:bg-zinc-400 transition-all shadow-xl group"
                                >
                                    {isSubmitting ? (
                                        <><Loader2 className="animate-spin" size={16} /> PROCESSING...</>
                                    ) : (
                                        <>Submit Request <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTABand;
