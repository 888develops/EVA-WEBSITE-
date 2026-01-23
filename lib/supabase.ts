import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ajirbalenvswlppqpqot.supabase.co'

// Lazy initialization to avoid build-time errors
let supabaseInstance: SupabaseClient | null = null

export const getSupabaseClient = (): SupabaseClient => {
  if (!supabaseInstance) {
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    
    if (!supabaseAnonKey) {
      // Use a placeholder for build time, will fail at runtime if not set
      console.warn('NEXT_PUBLIC_SUPABASE_ANON_KEY not set. Password reset will not work.')
      supabaseInstance = createClient(supabaseUrl, 'placeholder-key-for-build')
    } else {
      supabaseInstance = createClient(supabaseUrl, supabaseAnonKey)
    }
  }
  
  return supabaseInstance
}

export const supabase = getSupabaseClient()

