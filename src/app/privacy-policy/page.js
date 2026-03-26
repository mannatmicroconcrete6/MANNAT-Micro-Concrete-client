"use client";
import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="bg-black text-white pt-40 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12 uppercase">Privacy Policy.</h1>
                <div className="space-y-8 text-white/50 font-light leading-relaxed">
                    <section>
                        <h2 className="text-white text-xl font-bold mb-4 uppercase tracking-widest">Introduction</h2>
                        <p>Mannat Micro Concrete is committed to protecting your privacy. This policy explains how we collect and use your data when you visit our luxury architectural platform.</p>
                    </section>
                    <section>
                        <h2 className="text-white text-xl font-bold mb-4 uppercase tracking-widest">Data Collection</h2>
                        <p>We collect information you provide through enquiry forms (Name, Mobile, City) and anonymous session data to improve our service experience.</p>
                    </section>
                    <section>
                        <h2 className="text-white text-xl font-bold mb-4 uppercase tracking-widest">Communication</h2>
                        <p>By submitting an enquiry, you consent to being contacted via WhatsApp or Email regarding your design project.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
