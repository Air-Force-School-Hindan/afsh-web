# Google Calendar Setup Guide

This guide will help you obtain the necessary credentials to display the academic calendar in the application.

## Prerequisites
- A Google Account.
- Access to [Google Cloud Console](https://console.cloud.google.com/).

---

## Step 1: Create a Google Cloud Project
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Click on the project dropdown at the top and select **"New Project"**.
3. Give your project a name (e.g., `AFSH-Calendar`) and click **Create**.

## Step 2: Enable the Google Calendar API
1. In the sidebar, go to **APIs & Services** > **Library**.
2. Search for **"Google Calendar API"**.
3. Click on it and then click **Enable**.

## Step 3: Generate an API Key
1. Go to **APIs & Services** > **Credentials**.
2. Click **+ Create Credentials** and select **API Key**.
3. **Copy your API Key**. This will be your `VITE_GOOGLE_API_KEY`.
4. (Optional but Recommended) Click "Edit API Key" and restrict it:
   - Under **API restrictions**, select "Restrict key".
   - Select "Google Calendar API" from the dropdown.
   - This ensures the key can only be used for the Calendar.

## Step 4: Get your Public Calendar ID
1. Open [Google Calendar](https://calendar.google.com/).
2. In the left sidebar, find the calendar you want to share.
3. Click the **three dots** (options) next to the calendar name and select **Settings and sharing**.
4. Under **Access permissions for events**:
   - Check the box **"Make available to public"**.
5. Scroll down to the **Integrate calendar** section.
6. Copy the **Calendar ID**. It usually looks like an email address (e.g., `yourname@gmail.com` or `abcdef123...group.calendar.google.com`).
7. This will be your `VITE_PUBLIC_CALENDAR_ID`.

---

## Step 5: Configure the Environment Variables
1. Create a `.env` file in the root of your project (or update your existing one).
2. Add the following lines:

```env
VITE_GOOGLE_API_KEY=AIzaSy... (your copied key)
VITE_PUBLIC_CALENDAR_ID=your_calendar_id@group.calendar.google.com
```

3. If you have multiple calendars, you can separate them with commas:
```env
VITE_PUBLIC_CALENDAR_ID=id1@group.calendar.google.com,id2@group.calendar.google.com
```

4. **Restart your development server** for the changes to take effect.
