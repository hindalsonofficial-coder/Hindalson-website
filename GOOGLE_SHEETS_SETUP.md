# Google Sheets Integration Setup Guide

This guide will help you set up automatic form submissions to Google Sheets for both Contact and Registration forms.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it something like "Hindalson Form Submissions"
4. Create two sheets within the spreadsheet:
   - Name the first sheet: **Contact**
   - Name the second sheet: **Registration**

## Step 2: Set Up Headers in Your Sheets

### Contact Sheet Headers (Row 1):
- Column A: `Timestamp`
- Column B: `Full Name`
- Column C: `Email`
- Column D: `Message`

### Registration Sheet Headers (Row 1):
- Column A: `Timestamp`
- Column B: `Course Duration`
- Column C: `First Name`
- Column D: `Last Name`
- Column E: `Email`
- Column F: `Phone`
- Column G: `Course`
- Column H: `Course Fee`
- Column I: `Preferred Mode`
- Column J: `Preferred Batch`
- Column K: `Backend Technology`
- Column L: `Highest Qualification`
- Column M: `Permanent Address`
- Column N: `Questions`
- Column O: `Agree Terms`
- Column P: `Subscribe Newsletter`

## Step 3: Create Google Apps Script

1. In your Google Sheet, click on **Extensions** → **Apps Script**
2. Delete any existing code
3. Copy and paste the following code:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet();
    const data = JSON.parse(e.postData.contents);
    const sheetName = data.sheetName;
    const formData = data.data;
    const timestamp = data.timestamp || new Date().toISOString();
    
    let targetSheet = sheet.getSheetByName(sheetName);
    
    // Create sheet if it doesn't exist
    if (!targetSheet) {
      targetSheet = sheet.insertSheet(sheetName);
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
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function (optional - for testing)
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
```

4. Click **Save** (💾 icon) and give your project a name like "Hindalson Form Handler"

## Step 4: Deploy as Web App

1. Click on **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type" and choose **Web app**
3. Set the following:
   - **Description**: "Form submission handler"
   - **Execute as**: "Me" (your email)
   - **Who has access**: "Anyone" (important for public forms)
4. Click **Deploy**
5. **Copy the Web App URL** - you'll need this in the next step
6. Click **Authorize access** and grant the necessary permissions

## Step 5: Configure Your React App

1. In your project root, create a `.env` file (if it doesn't exist)
2. Add the following line:

```
REACT_APP_GOOGLE_SCRIPT_URL=YOUR_WEB_APP_URL_HERE
```

Replace `YOUR_WEB_APP_URL_HERE` with the Web App URL you copied in Step 4.

**Example:**
```
REACT_APP_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycby.../exec
```

3. Save the `.env` file
4. **Restart your development server** for the changes to take effect

## Step 6: Test the Integration

1. Start your React app: `npm run dev`
2. Fill out the Contact form and submit
3. Check your Google Sheet - you should see the data appear in the "Contact" sheet
4. Fill out the Registration form and submit
5. Check your Google Sheet - you should see the data appear in the "Registration" sheet

## Troubleshooting

### Data not appearing in sheets?
- Make sure the sheet names match exactly: "Contact" and "Registration" (case-sensitive)
- Check that headers are in Row 1
- Verify the Web App URL is correct in your `.env` file
- Make sure you've restarted your dev server after adding the `.env` file

### CORS errors?
- The code uses `no-cors` mode, which is normal for Google Apps Script
- The data should still save even if you see CORS warnings in the console

### Permission errors?
- Make sure you've authorized the Apps Script to access your Google Sheets
- Check that "Who has access" is set to "Anyone" in the deployment settings

### Need to update the script?
- After making changes to the Apps Script code, you need to create a **New deployment** (not update the existing one)
- Or update the existing deployment version

## Security Notes

- The Web App URL will be visible in your frontend code
- Anyone with the URL can potentially submit data to your sheet
- Consider adding validation or rate limiting in the Apps Script if needed
- For production, you might want to add additional security measures

## Support

If you encounter any issues, check:
1. Browser console for errors
2. Google Apps Script execution logs (View → Logs in Apps Script editor)
3. Google Sheet permissions
