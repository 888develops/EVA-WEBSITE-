# Fix Supabase Email Authentication Error

## Error You're Seeing

```
535 5.7.8 Error: authentication failed: (reason unavailable)
500: Error sending recovery email
```

This means Supabase's email service isn't configured to send emails.

## Solution: Configure SMTP in Supabase

### Option 1: Use Supabase's Built-in Email (Easiest)

1. Go to Supabase Dashboard → **Settings** → **Auth**
2. Scroll to **SMTP Settings**
3. Click **Enable Custom SMTP** (or use default if available)
4. If you need custom SMTP, configure:
   - **Host**: Your SMTP server (e.g., `smtp.gmail.com`)
   - **Port**: Usually `587` or `465`
   - **Username**: Your email address
   - **Password**: Your email password or app-specific password
   - **Sender email**: Email address to send from
   - **Sender name**: Display name (e.g., "EVA")

### Option 2: Use Gmail SMTP

1. In Supabase Dashboard → **Settings** → **Auth** → **SMTP Settings**
2. Enable **Custom SMTP**
3. Configure:
   - **Host**: `smtp.gmail.com`
   - **Port**: `587`
   - **Username**: Your Gmail address
   - **Password**: Gmail App Password (not your regular password)
     - Generate at: https://myaccount.google.com/apppasswords
   - **Sender email**: Your Gmail address
   - **Sender name**: "EVA"

### Option 3: Use a Professional Email Service

You can use services like:
- **SendGrid**
- **Mailgun**
- **Amazon SES**
- **Postmark**

Get SMTP credentials from your provider and enter them in Supabase.

## After Configuring SMTP

1. **Test the configuration** - Supabase will send a test email
2. **Try password reset again** from your app
3. The email should now send successfully

## Important Notes

- The Supabase anon key goes in **Netlify environment variables** (not in Supabase)
- SMTP settings go in **Supabase Dashboard** (Settings → Auth → SMTP)
- These are two separate configurations:
  - **Anon key** = For your website to connect to Supabase
  - **SMTP settings** = For Supabase to send emails

## Quick Checklist

- [ ] Set `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Netlify environment variables
- [ ] Configure SMTP settings in Supabase Dashboard
- [ ] Test email sending in Supabase
- [ ] Try password reset again


