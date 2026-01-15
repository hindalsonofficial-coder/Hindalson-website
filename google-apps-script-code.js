/**
 * Google Apps Script Code for Hindalson Form Submissions
 * 
 * Instructions:
 * 1. Open your Google Sheet
 * 2. Go to Extensions → Apps Script
 * 3. Paste this code
 * 4. Save and deploy as Web App
 * 5. Copy the Web App URL to your .env file as REACT_APP_GOOGLE_SCRIPT_URL
 */

// Handle both GET and POST requests
function doGet(e) {
  // Ensure e is an object even if undefined
  e = e || {};
  return doPost(e);
}

function doPost(e) {
  try {
    // Ensure e is an object even if undefined
    e = e || {};
    
    const sheet = SpreadsheetApp.getActiveSpreadsheet();
    
    // Log the incoming request for debugging
    Logger.log('=== Request Received ===');
    Logger.log('e type: ' + typeof e);
    Logger.log('e.postData: ' + (e.postData ? JSON.stringify(e.postData) : 'null'));
    Logger.log('e.parameter: ' + (e.parameter ? JSON.stringify(e.parameter) : 'null'));
    Logger.log('Full e object keys: ' + (e ? Object.keys(e).join(', ') : 'e is null/undefined'));
    
    // Handle different request formats
    let requestData;
    
    // Method 1: POST with JSON body (e.postData.contents)
    if (e.postData && e.postData.contents) {
      try {
        requestData = JSON.parse(e.postData.contents);
        Logger.log('✓ Parsed JSON from postData.contents');
      } catch (parseError) {
        Logger.log('✗ Failed to parse postData.contents: ' + parseError);
        throw new Error('Failed to parse JSON: ' + parseError);
      }
    } 
    // Method 2: POST with form data (e.parameter.data from URLSearchParams)
    else if (e.parameter && e.parameter.data) {
      try {
        // Try decoding if it's URL encoded
        let dataString = e.parameter.data;
        try {
          dataString = decodeURIComponent(dataString);
        } catch (e) {
          // If decode fails, use original string
        }
        requestData = JSON.parse(dataString);
        Logger.log('✓ Parsed JSON from parameter.data (form data)');
      } catch (parseError) {
        Logger.log('✗ Failed to parse parameter.data: ' + parseError);
        Logger.log('Raw parameter.data: ' + e.parameter.data);
        throw new Error('Failed to parse form data JSON: ' + parseError);
      }
    }
    // Method 3: GET request with data in query parameter
    // Check e.parameter first (Google Apps Script auto-parses query string)
    else if (e.parameter && e.parameter.data) {
      try {
        requestData = JSON.parse(decodeURIComponent(e.parameter.data));
        Logger.log('✓ Parsed JSON from e.parameter.data (GET request)');
      } catch (parseError) {
        Logger.log('✗ Failed to parse e.parameter.data: ' + parseError);
        Logger.log('Raw e.parameter.data: ' + e.parameter.data);
        throw new Error('Failed to parse parameter data: ' + parseError);
      }
    }
    // Method 4: Parse query string manually if e.parameter is not available
    else if (e.queryString) {
      // Parse query string manually
      const params = {};
      const pairs = e.queryString.split('&');
      for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i].split('=');
        if (pair.length === 2) {
          params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
      }
      if (params.data) {
        try {
          requestData = JSON.parse(params.data);
          Logger.log('✓ Parsed JSON from query string (manual parse)');
        } catch (parseError) {
          Logger.log('✗ Failed to parse query string data: ' + parseError);
          throw new Error('Failed to parse query data: ' + parseError);
        }
      }
    }
    // Method 4: Direct JSON string in postData
    else if (e.postData && typeof e.postData === 'string') {
      try {
        requestData = JSON.parse(e.postData);
        Logger.log('✓ Parsed JSON from postData directly');
      } catch (parseError) {
        Logger.log('✗ Failed to parse postData string: ' + parseError);
        throw new Error('Failed to parse postData: ' + parseError);
      }
    } 
    else {
      // Log error details
      Logger.log('✗ Error: Invalid request format');
      Logger.log('e.postData type: ' + typeof e.postData);
      Logger.log('e.parameter type: ' + typeof e.parameter);
      Logger.log('e.queryString: ' + (e.queryString || 'null'));
      Logger.log('Full e object: ' + JSON.stringify(e));
      throw new Error('Invalid request format. No valid data found. Check logs for details.');
    }
    
    const sheetName = requestData.sheetName;
    const formData = requestData.data;
    const timestamp = requestData.timestamp || new Date().toISOString();
    
    let targetSheet = sheet.getSheetByName(sheetName);
    
    // Create sheet if it doesn't exist
    if (!targetSheet) {
      targetSheet = sheet.insertSheet(sheetName);
      
      // Add headers based on sheet name
      if (sheetName === 'Contact') {
        targetSheet.appendRow(['Timestamp', 'Full Name', 'Email', 'Message']);
      } else if (sheetName === 'Registration') {
        targetSheet.appendRow([
          'Timestamp', 'Course Duration', 'First Name', 'Last Name', 'Email', 
          'Phone', 'Course', 'Course Fee', 'Preferred Mode', 'Preferred Batch',
          'Backend Technology', 'Highest Qualification', 'Permanent Address',
          'Questions', 'Agree Terms', 'Subscribe Newsletter'
        ]);
      }
    }
    
    // Handle Contact form
    if (sheetName === 'Contact') {
      const row = [
        timestamp,
        formData.fullName || '',
        formData.email || '',
        formData.message || ''
      ];
      targetSheet.appendRow(row);
    }
    
    // Handle Registration form
    if (sheetName === 'Registration') {
      const row = [
        timestamp,
        formData.courseDuration || '',
        formData.firstName || '',
        formData.lastName || '',
        formData.email || '',
        formData.phone || '',
        formData.course || '',
        formData.courseFee || '',
        formData.preferredMode || '',
        formData.preferredBatch || '',
        formData.backendTechnology || '',
        formData.highestQualification || '',
        formData.permanentAddress || '',
        formData.questions || '',
        formData.agreeTerms || '',
        formData.subscribeNewsletter || ''
      ];
      targetSheet.appendRow(row);
    }
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function for Contact form (optional)
function testContact() {
  const testData = {
    sheetName: 'Contact',
    data: {
      fullName: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message'
    },
    timestamp: new Date().toISOString()
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  doPost(mockEvent);
}

// Test function for Registration form (optional)
function testRegistration() {
  const testData = {
    sheetName: 'Registration',
    data: {
      courseDuration: '6-months',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phone: '1234567890',
      course: 'full-stack',
      courseFee: '₹20,000 (6 months) (Estimated)',
      preferredMode: 'Campus',
      preferredBatch: 'morning',
      backendTechnology: 'nodejs',
      highestQualification: 'bachelor',
      permanentAddress: '123 Test St',
      questions: 'Test question',
      agreeTerms: 'Yes',
      subscribeNewsletter: 'Yes'
    },
    timestamp: new Date().toISOString()
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  doPost(mockEvent);
}
