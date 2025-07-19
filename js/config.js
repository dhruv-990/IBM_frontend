// Configuration for LifeSure Insurance App
const CONFIG = {
    // Railway backend URL
    API_BASE_URL: 'https://modest-enjoyment-production.up.railway.app',
    
    // Local development URL (for testing)
    LOCAL_API_URL: 'http://localhost:3000',
    
    // App settings
    APP_NAME: 'LifeSure Insurance',
    VERSION: '1.0.0'
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} 