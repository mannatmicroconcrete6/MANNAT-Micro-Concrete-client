const rawUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
export const API_BASE_URL = rawUrl.endsWith('/') ? rawUrl.slice(0, -1) : rawUrl;

export const API_ROUTES = {
    // Tracking
    TRACK_VISIT: `${API_BASE_URL}/api/track/visit`,
    TRACK_EVENT: `${API_BASE_URL}/api/track/event`,
    ANALYTICS: `${API_BASE_URL}/api/track/analytics`,

    // Leads
    LEADS: `${API_BASE_URL}/api/leads`,
    LEADS_ID: (id) => `${API_BASE_URL}/api/leads/${id}`,
    LEADS_MESSAGE: (id) => `${API_BASE_URL}/api/leads/${id}/message`,
    LEADS_QUOTE: (id) => `${API_BASE_URL}/api/leads/${id}/quote`,
    // Auth
    AUTH_LOGIN: `${API_BASE_URL}/api/auth/login`,
    AUTH_FORGOT_PASSWORD: `${API_BASE_URL}/api/auth/forgot-password`,
    AUTH_VERIFY_OTP: `${API_BASE_URL}/api/auth/verify-otp`,
    AUTH_RESET_PASSWORD: `${API_BASE_URL}/api/auth/reset-password`,

    // Projects
    PROJECTS: `${API_BASE_URL}/api/projects`,
    PROJECTS_ID: (id) => `${API_BASE_URL}/api/projects/${id}`,
};
