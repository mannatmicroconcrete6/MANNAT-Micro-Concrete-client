"use client";
import React, { createContext, useContext, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { API_ROUTES } from '@/config/api';

const TrackingContext = createContext(null);

export const TrackingProvider = ({ children }) => {
    const pathname = usePathname();

    const safeFetch = async (url, options) => {
        try {
            const res = await fetch(url, options);
            return res;
        } catch (err) {
            console.warn("Tracking silent failure:", err.message);
            return null;
        }
    };

    useEffect(() => {
        if (typeof window === 'undefined') return;

        // Check for existing session
        let sessionId = localStorage.getItem('mannat_session_id');
        if (!sessionId) {
            sessionId = uuidv4();
            localStorage.setItem('mannat_session_id', sessionId);

            // Track Initial Visit
            safeFetch(API_ROUTES.TRACK_VISIT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    sessionId,
                    device: navigator.userAgent,
                    landingPage: window.location.href,
                    referrer: document.referrer
                })
            });

            // GTM Push
            if (window.dataLayer) {
                window.dataLayer.push({
                    event: 'session_start',
                    sessionId
                });
            }
        }

        // Track Page View on Each Nav
        safeFetch(API_ROUTES.TRACK_EVENT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                sessionId,
                type: 'PAGE_VIEW',
                page: pathname
            })
        });

    }, [pathname]);

    const trackInteraction = (type, metadata = {}) => {
        const sessionId = typeof window !== 'undefined' ? localStorage.getItem('mannat_session_id') : null;
        if (!sessionId) return;

        // Push to custom backend
        safeFetch(API_ROUTES.TRACK_EVENT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                sessionId,
                type,
                page: window.location.pathname,
                metadata
            })
        });

        // Push to GTM dataLayer
        if (typeof window !== 'undefined' && window.dataLayer) {
            window.dataLayer.push({
                event: type,
                page_path: window.location.pathname,
                ...metadata
            });
        }
    };

    return (
        <TrackingContext.Provider value={{ trackInteraction }}>
            {children}
        </TrackingContext.Provider>
    );
};

export const useTracking = () => useContext(TrackingContext);
