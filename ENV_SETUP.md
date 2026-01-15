# Environment Variable Setup

## Important: Fix Your .env File

You created the environment variable with the wrong name. Since this is a **Vite** project (not Create React App), you need to use `VITE_GOOGLE_SCRIPT_URL` instead of `REACT_APP_GOOGLE_SCRIPT_URL`.

## Steps to Fix:

1. **Create or update your `.env` file** in the project root (`hindalsontradition/.env`)

2. **Change the variable name** from:
   ```
   REACT_APP_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbxECdVMxPA1GTEtEX305OTAnZLN_p8GhRhLWxykeGe2sGQ8x3VM8txSSpncReUQwHI1uQ/exec
   ```

   To:
   ```
   VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbxECdVMxPA1GTEtEX305OTAnZLN_p8GhRhLWxykeGe2sGQ8x3VM8txSSpncReUQwHI1uQ/exec
   ```

3. **Restart your dev server** after changing the .env file:
   - Stop the current server (Ctrl+C)
   - Run `npm run dev` again

## Update Google Apps Script

You also need to update your Google Apps Script with the improved code that handles requests better. Copy the updated code from `google-apps-script-code.js` and:

1. Go to your Google Apps Script project
2. Replace the `doPost` function with the updated version
3. **Save** the script
4. **Redeploy** as a Web App (important - you must redeploy for changes to take effect)
   - Click "Deploy" → "New deployment"
   - Or update existing deployment
   - Make sure "Execute as: Me" and "Who has access: Anyone" are selected

## Test

After making these changes:
1. Restart your dev server
2. Try submitting the registration form
3. Check your Google Sheet - the data should appear!
