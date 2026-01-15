# ⚠️ URGENT: Fix Your .env File

## The Problem

Your console shows: **"Google Script URL is not configured"** and `url: ''` (empty).

This means your `.env` file is either:
1. Using the wrong variable name (`REACT_APP_GOOGLE_SCRIPT_URL` instead of `VITE_GOOGLE_SCRIPT_URL`)
2. Not in the correct location
3. Dev server wasn't restarted after creating/updating it

## Quick Fix (3 Steps)

### Step 1: Open/Create `.env` file
Open or create a file named `.env` in this location:
```
hindalsontradition/.env
```
(It should be in the same folder as `package.json`)

### Step 2: Add this EXACT line:
```env
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbxECdVMxPA1GTEtEX305OTAnZLN_p8GhRhLWxykeGe2sGQ8x3VM8txSSpncReUQwHI1uQ/exec
```

**IMPORTANT:**
- Must start with `VITE_` (NOT `REACT_APP_`)
- No spaces around the `=`
- No quotes around the URL
- Must be on a single line

### Step 3: Restart Dev Server
1. **Stop** your current dev server (press `Ctrl+C` in the terminal)
2. **Start** it again:
   ```bash
   npm run dev
   ```

## Verify It's Working

After restarting, open your browser console and look for:
```
Environment check: { VITE_GOOGLE_SCRIPT_URL exists: true, ... }
```

If you see `exists: true`, it's working! ✅

If you still see `exists: false`, check:
- File is named exactly `.env` (not `.env.txt` or `.env.local`)
- File is in the project root (same folder as `package.json`)
- Variable name is exactly `VITE_GOOGLE_SCRIPT_URL`
- You restarted the dev server

## Common Mistakes

❌ **Wrong:** `REACT_APP_GOOGLE_SCRIPT_URL=...`  
✅ **Correct:** `VITE_GOOGLE_SCRIPT_URL=...`

❌ **Wrong:** `VITE_GOOGLE_SCRIPT_URL = "https://..."` (spaces/quotes)  
✅ **Correct:** `VITE_GOOGLE_SCRIPT_URL=https://...` (no spaces, no quotes)

❌ **Wrong:** File in wrong location  
✅ **Correct:** File in `hindalsontradition/.env` (project root)
