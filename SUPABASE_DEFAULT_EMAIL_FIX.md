# Fix Supabase Default Email System

## Error You're Seeing

```
535 5.7.8 Error: authentication failed: (reason unavailable)
500: Error sending recovery email
```

Even with SMTP turned off (using default system), this error means Supabase's default email service isn't working.

## Solutions

### Option 1: Enable Supabase Default Email Service

1. Go to **Supabase Dashboard** → **Settings** → **Auth**
2. Scroll to **Email Auth** section
3. Make sure **Enable Email Signup** is enabled
4. Check **Email Templates** section:
   - Go to **Authentication** → **Email Templates**
   - Make sure **Password Reset** template is enabled
   - Verify the template has the correct redirect URL:
     ```
     {{ .SiteURL }}/reset-password
     ```

### Option 2: Check Site URL Configuration

1. Go to **Supabase Dashboard** → **Settings** → **API**
2. Check **Site URL**:
   - Should be: `https://energyvehiclealliance.com`
3. Check **Redirect URLs**:
   - Add: `https://energyvehiclealliance.com/reset-password`
   - Add: `https://energyvehiclealliance.com/**` (wildcard for all paths)

### Option 3: Verify Email Provider Status

Supabase's default email service might be:
- Rate limited
- Temporarily unavailable
- Needs to be enabled in project settings

Check **Supabase Dashboard** → **Settings** → **General** for any email service status.

### Option 4: Use Custom SMTP (If Default Fails)

If the default system continues to fail, you may need to:
1. Enable **Custom SMTP** in Supabase
2. Use a service like Gmail, SendGrid, or Mailgun
3. Configure SMTP credentials

## Quick Checklist

- [ ] Site URL is set to: `https://energyvehiclealliance.com`
- [ ] Redirect URL includes: `https://energyvehiclealliance.com/reset-password`
- [ ] Email templates are enabled
- [ ] Password reset template has correct redirect URL
- [ ] No rate limits on email sending

## If Default Email Still Doesn't Work

Supabase's default email service has limitations. If it continues to fail, you may need to:
- Enable custom SMTP (even with a free service like Gmail)
- Or contact Supabase support about default email service issues

The error suggests the default email authentication is failing, which might require SMTP configuration even if you want to use the "default" system.


