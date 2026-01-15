/**
 * Utility functions for sending data to Google Sheets via Google Apps Script
 */

// Replace this URL with your Google Apps Script Web App URL after deployment
// In Vite, use import.meta.env instead of process.env
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';

// Debug: Log environment variable status
console.log('Environment check:', {
  'VITE_GOOGLE_SCRIPT_URL exists': !!import.meta.env.VITE_GOOGLE_SCRIPT_URL,
  'GOOGLE_SCRIPT_URL value': GOOGLE_SCRIPT_URL ? 'SET' : 'NOT SET',
  'All env vars': Object.keys(import.meta.env).filter(key => key.startsWith('VITE_'))
});

/**
 * Sends form data to Google Sheets
 * @param {string} sheetName - Name of the sheet (e.g., 'Contact' or 'Registration')
 * @param {Object} data - Form data object to save
 * @returns {Promise<Object>} Response from the server
 */
export const saveToGoogleSheets = async (sheetName, data) => {
  console.log('saveToGoogleSheets called:', { sheetName, data, url: GOOGLE_SCRIPT_URL });
  
  if (!GOOGLE_SCRIPT_URL) {
    console.warn('Google Script URL is not configured. Form submission will continue, but data will not be saved to Google Sheets. To enable Google Sheets integration, set VITE_GOOGLE_SCRIPT_URL in your .env file');
    // Return success so form submission doesn't fail
    return { success: true, warning: 'Google Sheets not configured' };
  }

  try {
    // Prepare the payload
    const payload = {
      sheetName: sheetName,
      data: data,
      timestamp: new Date().toISOString()
    };
    
    console.log('Sending payload to Google Sheets:', payload);
    console.log('Google Script URL:', GOOGLE_SCRIPT_URL);

    // For Google Apps Script with no-cors, POST body doesn't work reliably
    // Use GET with query parameters instead - this is the most reliable method
    const encodedData = encodeURIComponent(JSON.stringify(payload));
    const urlWithData = `${GOOGLE_SCRIPT_URL}?data=${encodedData}`;
    
    console.log('Sending GET request with data in URL:', urlWithData.substring(0, 100) + '...');
    
    try {
      await fetch(urlWithData, {
        method: 'GET',
        mode: 'no-cors'
      });
      
      console.log('Request sent successfully using GET method');
      return { success: true };
    } catch (error) {
      console.error('GET request failed:', error);
      return { success: false, error: error.message };
    }
  } catch (error) {
    console.error('Error saving to Google Sheets:', error);
    // Don't throw error - allow form submission to succeed even if Google Sheets fails
    return { success: false, error: error.message };
  }
};

/**
 * Saves contact form data to Google Sheets
 * @param {Object} contactData - Contact form data
 */
export const saveContactData = async (contactData) => {
  console.log('saveContactData received:', contactData);
  
  const data = {
    fullName: contactData?.fullName || '',
    email: contactData?.email || '',
    message: contactData?.message || ''
  };
  
  console.log('saveContactData processed data:', data);
  
  return await saveToGoogleSheets('Contact', data);
};

/**
 * Saves registration form data to Google Sheets
 * @param {Object} registrationData - Registration form data
 * @param {string} courseDuration - Course duration (6-months or 45-days)
 */
export const saveRegistrationData = async (registrationData, courseDuration) => {
  const data = {
    courseDuration: courseDuration || '',
    firstName: registrationData.firstName || '',
    lastName: registrationData.lastName || '',
    email: registrationData.email || '',
    phone: registrationData.phone || '',
    course: registrationData.course || '',
    courseFee: registrationData.courseFee || '',
    preferredMode: registrationData.preferredMode || '',
    preferredBatch: registrationData.preferredBatch || '',
    backendTechnology: registrationData.backendTechnology || '',
    highestQualification: registrationData.highestQualification || '',
    permanentAddress: registrationData.permanentAddress || '',
    questions: registrationData.questions || '',
    agreeTerms: registrationData.agreeTerms ? 'Yes' : 'No',
    subscribeNewsletter: registrationData.subscribeNewsletter ? 'Yes' : 'No'
  };
  
  return await saveToGoogleSheets('Registration', data);
};
