"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, KeyRound, Lock, ArrowRight, ArrowLeft, CheckCircle2, ShieldCheck, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { API_ROUTES } from '@/config/api';

const ForgotPasswordPage = () => {
    const router = useRouter();
    const [step, setStep] = useState(1); // 1: Email, 2: OTP, 3: New Password
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const otpRefs = Array.from({ length: 6 }, () => React.createRef());

    const handleOtpChange = (index, value) => {
        if (value.length > 1) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-focus next input
        if (value && index < 5) {
            otpRefs[index + 1].current?.focus();
        }
    };

    const handleOtpKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            otpRefs[index - 1].current?.focus();
        }
    };

    const handleOtpPaste = (e) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
        const newOtp = [...otp];
        for (let i = 0; i < pasted.length; i++) {
            newOtp[i] = pasted[i];
        }
        setOtp(newOtp);
        if (pasted.length >= 6) {
            otpRefs[5].current?.focus();
        }
    };

    // Step 1: Request OTP
    const handleRequestOTP = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const res = await fetch(API_ROUTES.AUTH_FORGOT_PASSWORD, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });
            const data = await res.json();

            if (data.success) {
                setStep(2);
            } else {
                setError(data.message || 'Failed to send OTP');
            }
        } catch (err) {
            setError('Server connection failed');
        } finally {
            setLoading(false);
        }
    };

    // Step 2: Verify OTP
    const handleVerifyOTP = async (e) => {
        e.preventDefault();
        setError('');
        const otpString = otp.join('');
        if (otpString.length !== 6) {
            setError('Please enter the complete 6-digit OTP');
            return;
        }
        setLoading(true);

        try {
            const res = await fetch(API_ROUTES.AUTH_VERIFY_OTP, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp: otpString })
            });
            const data = await res.json();

            if (data.success) {
                setStep(3);
            } else {
                setError(data.message || 'Invalid OTP');
            }
        } catch (err) {
            setError('Server connection failed');
        } finally {
            setLoading(false);
        }
    };

    // Step 3: Reset Password
    const handleResetPassword = async (e) => {
        e.preventDefault();
        setError('');

        if (newPassword.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }
        if (newPassword !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setLoading(true);

        try {
            const res = await fetch(API_ROUTES.AUTH_RESET_PASSWORD, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp: otp.join(''), newPassword })
            });
            const data = await res.json();

            if (data.success) {
                setSuccess(true);
                setTimeout(() => {
                    router.push('/admin/login');
                }, 3000);
            } else {
                setError(data.message || 'Password reset failed');
            }
        } catch (err) {
            setError('Server connection failed');
        } finally {
            setLoading(false);
        }
    };

    // Success Screen
    if (success) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-md text-center"
                >
                    <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/20">
                        <CheckCircle2 size={48} className="text-green-500" />
                    </div>
                    <h2 className="text-3xl font-black text-white tracking-tighter uppercase mb-4">Password Reset!</h2>
                    <p className="text-white/40 text-sm mb-8">Your password has been successfully updated. Redirecting you to the login page...</p>
                    <div className="w-40 h-1 bg-white/10 rounded-full mx-auto overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 3 }}
                            className="h-full bg-[#d4af37] rounded-full"
                        />
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-6 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d4af37 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4af37]/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md relative z-10"
            >
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold tracking-tighter text-white uppercase">
                        Mannat <span className="text-[#d4af37]">Admin</span>
                    </h2>
                    <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold mt-2">Password Recovery</p>
                </div>

                {/* Progress Steps */}
                <div className="flex items-center justify-center gap-4 mb-10">
                    {[1, 2, 3].map((s) => (
                        <div key={s} className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-black uppercase tracking-wider transition-all duration-500 ${step >= s
                                    ? 'bg-[#d4af37] text-black shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                                    : 'bg-zinc-900 text-white/20 border border-white/5'
                                }`}>
                                {step > s ? <CheckCircle2 size={16} /> : s}
                            </div>
                            {s < 3 && (
                                <div className={`w-12 h-[2px] rounded-full transition-all duration-500 ${step > s ? 'bg-[#d4af37]' : 'bg-white/5'
                                    }`} />
                            )}
                        </div>
                    ))}
                </div>

                {/* Form Card */}
                <div className="bg-zinc-900 border border-white/5 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/5 blur-3xl rounded-full" />

                    <AnimatePresence mode="wait">
                        {/* Step 1: Email Input */}
                        {step === 1 && (
                            <motion.form
                                key="step1"
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{ duration: 0.3 }}
                                onSubmit={handleRequestOTP}
                                className="space-y-6 relative z-10"
                            >
                                <div className="text-center mb-6">
                                    <div className="w-16 h-16 bg-[#d4af37]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#d4af37]">
                                        <Mail size={28} />
                                    </div>
                                    <h3 className="text-xl font-black text-white uppercase tracking-tight">Enter Your Email</h3>
                                    <p className="text-white/30 text-xs mt-2">We&apos;ll send a 6-digit OTP to verify your identity</p>
                                </div>

                                {error && <div className="text-red-500 text-sm text-center font-bold bg-red-500/10 py-2 rounded-lg">{error}</div>}

                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                                    <input
                                        type="email"
                                        id="reset-email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="admin@mannatmicro.com"
                                        autoComplete="email"
                                        required
                                        className="w-full bg-black border border-white/5 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-[#d4af37] transition-all text-white placeholder:text-white/10"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-[#d4af37] text-black py-4 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-white transition-all shadow-xl disabled:opacity-50"
                                >
                                    {loading ? 'Sending OTP...' : 'Send OTP'} <ArrowRight size={14} />
                                </button>
                            </motion.form>
                        )}

                        {/* Step 2: OTP Verification */}
                        {step === 2 && (
                            <motion.form
                                key="step2"
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{ duration: 0.3 }}
                                onSubmit={handleVerifyOTP}
                                className="space-y-6 relative z-10"
                            >
                                <div className="text-center mb-6">
                                    <div className="w-16 h-16 bg-[#d4af37]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#d4af37]">
                                        <ShieldCheck size={28} />
                                    </div>
                                    <h3 className="text-xl font-black text-white uppercase tracking-tight">Verify OTP</h3>
                                    <p className="text-white/30 text-xs mt-2">Enter the 6-digit code sent to <span className="text-[#d4af37]">{email}</span></p>
                                </div>

                                {error && <div className="text-red-500 text-sm text-center font-bold bg-red-500/10 py-2 rounded-lg">{error}</div>}

                                <div className="flex justify-center gap-3" onPaste={handleOtpPaste}>
                                    {otp.map((digit, index) => (
                                        <input
                                            key={index}
                                            ref={otpRefs[index]}
                                            type="text"
                                            inputMode="numeric"
                                            maxLength={1}
                                            id={`otp-${index}`}
                                            name={`otp-${index}`}
                                            value={digit}
                                            onChange={(e) => handleOtpChange(index, e.target.value.replace(/\D/g, ''))}
                                            onKeyDown={(e) => handleOtpKeyDown(index, e)}
                                            className="w-12 h-14 bg-black border border-white/10 rounded-xl text-center text-xl font-black text-[#d4af37] outline-none focus:border-[#d4af37] focus:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all"
                                        />
                                    ))}
                                </div>

                                <p className="text-center text-[10px] text-white/20 uppercase tracking-widest">
                                    Code expires in 10 minutes
                                </p>

                                <div className="flex gap-3">
                                    <button
                                        type="button"
                                        onClick={() => { setStep(1); setError(''); }}
                                        className="flex-1 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs text-white/40 border border-white/5 hover:bg-white/5 transition-all flex items-center justify-center gap-2"
                                    >
                                        <ArrowLeft size={14} /> Back
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="flex-[2] bg-[#d4af37] text-black py-4 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-white transition-all shadow-xl disabled:opacity-50"
                                    >
                                        {loading ? 'Verifying...' : 'Verify Code'} <ArrowRight size={14} />
                                    </button>
                                </div>

                                <button
                                    type="button"
                                    onClick={handleRequestOTP}
                                    disabled={loading}
                                    className="w-full text-center text-[10px] font-black text-white/20 hover:text-[#d4af37] uppercase tracking-widest transition-colors pt-2"
                                >
                                    Didn&apos;t receive code? Resend OTP
                                </button>
                            </motion.form>
                        )}

                        {/* Step 3: New Password */}
                        {step === 3 && (
                            <motion.form
                                key="step3"
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{ duration: 0.3 }}
                                onSubmit={handleResetPassword}
                                className="space-y-6 relative z-10"
                            >
                                <div className="text-center mb-6">
                                    <div className="w-16 h-16 bg-[#d4af37]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#d4af37]">
                                        <KeyRound size={28} />
                                    </div>
                                    <h3 className="text-xl font-black text-white uppercase tracking-tight">New Password</h3>
                                    <p className="text-white/30 text-xs mt-2">Create your new secure password</p>
                                </div>

                                {error && <div className="text-red-500 text-sm text-center font-bold bg-red-500/10 py-2 rounded-lg">{error}</div>}

                                <div className="space-y-4">
                                    <div className="relative">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            id="new-password"
                                            name="newPassword"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            placeholder="New Password"
                                            autoComplete="new-password"
                                            required
                                            minLength={6}
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

                                    <div className="relative">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            id="confirm-password"
                                            name="confirmPassword"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            placeholder="Confirm Password"
                                            autoComplete="new-password"
                                            required
                                            minLength={6}
                                            className="w-full bg-black border border-white/5 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-[#d4af37] transition-all text-white placeholder:text-white/10"
                                        />
                                    </div>

                                    {/* Password strength indicator */}
                                    {newPassword && (
                                        <div className="space-y-2">
                                            <div className="flex gap-1">
                                                {[1, 2, 3, 4].map((level) => (
                                                    <div
                                                        key={level}
                                                        className={`h-1 flex-1 rounded-full transition-all duration-300 ${newPassword.length >= level * 3
                                                                ? level <= 1 ? 'bg-red-500' : level <= 2 ? 'bg-orange-500' : level <= 3 ? 'bg-yellow-500' : 'bg-green-500'
                                                                : 'bg-white/5'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                            <p className="text-[9px] uppercase tracking-widest font-bold text-white/20">
                                                {newPassword.length < 6 ? 'Too short' : newPassword.length < 8 ? 'Fair' : newPassword.length < 12 ? 'Strong' : 'Very Strong'}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-[#d4af37] text-black py-4 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-white transition-all shadow-xl disabled:opacity-50"
                                >
                                    {loading ? 'Resetting...' : 'Reset Password'} <ArrowRight size={14} />
                                </button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>

                {/* Back to login */}
                <div className="text-center mt-8">
                    <Link
                        href="/admin/login"
                        className="text-[10px] font-black text-white/20 hover:text-[#d4af37] uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                    >
                        <ArrowLeft size={12} /> Back to Login
                    </Link>
                </div>

                <p className="text-center text-[8px] uppercase tracking-widest text-white/10 mt-6">
                    Mannat Micro Concrete - Password Recovery
                </p>
            </motion.div>
        </div>
    );
};

export default ForgotPasswordPage;
