# Debugging Guide - Google Sheets Integration

## Step 1: Check Your .env File

1. **Open your `.env` file** in the project root (`hindalsontradition/.env`)

2. **Make sure it has the CORRECT variable name:**
   ```
   VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbxECdVMxPA1GTEtEX305OTAnZLN_p8GhRhLWxykeGe2sGQ8x3VM8txSSpncReUQwHI1uQ/exec
   ```
   
   ⚠️ **IMPORTANT:** It must be `VITE_GOOGLE_SCRIPT_URL` (NOT `REACT_APP_GOOGLE_SCRIPT_URL`)

3. **Save the file**

## Step 2: Restart Your Dev Server

**This is CRITICAL!** Environment variables are only loaded when the server starts.

1. Stop your current dev server (press `Ctrl+C` in the terminal)
2. Start it again: `npm run dev`
3. Wait for it to fully start

## Step 3: Check Browser Console

1. Open your website in the browser
2. Open Developer Tools (F12)
3. Go to the **Console** tab
4. Look for a message that says:
   ```
   Environment check: { VITE_GOOGLE_SCRIPT_URL exists: true/false, ... }
   ```
   
   - If `exists: false` → Your .env file is wrong or server wasn't restarted
   - If `exists: true` → Environment variable is loaded correctly

## Step 4: Test Form Submission

1. Fill out the registration form
2. Click "Complete Registration"
3. **Check the browser console** for:
   - `saveToGoogleSheets called:` - Shows the function was called
   - `Sending payload to Google Sheets:` - Shows the data being sent
   - `Request sent to Google Sheets` - Shows the request completed

## Step 5: Check Google Apps Script Logs

1. Go to your Google Apps Script project
2. Click on **Executions** (clock icon) in the left sidebar
3. Look for recent executions
4. Click on a recent execution to see the logs
5. You should see:
   - `Received request. e.postData: ...`
   - `Parsed JSON from postData.contents` (or similar)
   - Any error messages

## Step 6: Verify Google Apps Script Deployment

1. In Google Apps Script, click **Deploy** → **Manage deployments**
2. Make sure you have an active deployment
3. **Important:** If you updated the script code, you MUST:
   - Click **Deploy** → **New deployment** (or edit existing)
   - Click **Deploy**
   - Copy the NEW URL if it changed

## Common Issues:

### Issue 1: "VITE_GOOGLE_SCRIPT_URL exists: false"
**Solution:** 
- Check your .env file has `VITE_GOOGLE_SCRIPT_URL` (not `REACT_APP_...`)
- Restart your dev server
- Make sure the .env file is in the project root

### Issue 2: "Invalid request format" in Google Apps Script
**Solution:**
- Make sure you updated the Google Apps Script code with the latest version
- Redeploy the Google Apps Script as a Web App
- Check the execution logs for detailed error messages

### Issue 3: No data in Google Sheet
**Solution:**
- Check Google Apps Script execution logs
- Make sure the sheet names match exactly: "Contact" or "Registration"
- Verify the script has permission to edit the spreadsheet

## Quick Test:

Open browser console and run:
```javascript
console.log('Env check:', import.meta.env.VITE_GOOGLE_SCRIPT_URL);
```

If it shows `undefined`, your .env file is not being loaded correctly.
