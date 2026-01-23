# Supabase Password Reset Setup

## ✅ Updated to Use Supabase Default Password Reset

The reset password page now uses Supabase's built-in password reset system instead of custom Edge Functions.

## Required Configuration

### 1. Set Environment Variable in Netlify

1. Go to your Netlify dashboard
2. Site settings → Environment variables
3. Add new variable:
   - **Key**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **Value**: Your Supabase anon key (get it from: https://supabase.com/dashboard/project/ajirbalenvswlppqpqot/settings/api)
4. Redeploy the site

### 2. Configure Supabase Redirect URL

1. Go to Supabase Dashboard → Authentication → URL Configuration
2. Add to **Redirect URLs**:
   ```
   https://energyvehiclealliance.com/reset-password
   ```
3. Also add for local development:
   ```
   http://localhost:3000/reset-password
   ```

### 3. Enable Supabase Password Reset Emails

1. Go to Supabase Dashboard → Authentication → Email Templates
2. Make sure **Password Reset** email template is enabled
3. The email will automatically include a link to your reset password page

## How It Works

1. **Mobile App**: User requests password reset
   - App calls: `supabase.auth.resetPasswordForEmail(email)`
   - Supabase sends default password reset email

2. **Email Link**: Supabase email contains link like:
   ```
   https://energyvehiclealliance.com/reset-password#access_token=...&type=recovery
   ```

3. **Reset Page**: User clicks link → Opens reset password page
   - Page extracts `access_token` from URL hash
   - User enters new password
   - Page uses Supabase auth to update password

4. **Complete**: Password updated, user redirected to home

## Flow

```
Mobile App → supabase.auth.resetPasswordForEmail()
    ↓
Supabase sends email with link
    ↓
User clicks: https://energyvehiclealliance.com/reset-password#access_token=...&type=recovery
    ↓
Reset page extracts token from URL hash
    ↓
User enters new password
    ↓
supabase.auth.updateUser({ password: newPassword })
    ↓
Password updated ✅
```

## Files Updated

- ✅ `app/reset-password/page.tsx` - Now uses Supabase auth
- ✅ `lib/supabase.ts` - Supabase client configuration
- ✅ Removed Edge Function dependencies

## Testing

1. Request password reset from mobile app
2. Check email inbox for Supabase reset email
3. Click email link
4. Should open: `https://energyvehiclealliance.com/reset-password#access_token=...&type=recovery`
5. Enter new password
6. Verify password updated successfully

## Notes

- No MailerSend needed - using Supabase default emails
- No Edge Functions needed - using Supabase built-in auth
- Make sure `NEXT_PUBLIC_SUPABASE_ANON_KEY` is set in Netlify
- Make sure redirect URL is configured in Supabase dashboard

