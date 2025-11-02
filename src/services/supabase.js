import { createClient } from '@supabase/supabase-js'

// Get Supabase credentials from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials. Check environment variables.')
  console.error('URL:', supabaseUrl ? 'Set' : 'Missing')
  console.error('Key:', supabaseKey ? 'Set' : 'Missing')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

// Validate Supabase configuration
export const validateSupabaseConfig = () => {
  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase configuration missing. Please check environment variables.')
  }
  return true
}

// Waitlist service functions
export const waitlistService = {
  // Add a new waitlist signup
  async addSignup(data) {
    try {
      // Validate configuration before making request
      validateSupabaseConfig()
      
      const { data: result, error } = await supabase
        .from('waitlist')
        .insert({
          name: data.name,
          email: data.email
        })
        .select()
      
      if (error) {
        throw new Error(`Database error: ${error.message}`)
      }
      
      return { success: true, data: result }
    } catch (err) {
      throw err
    }
  },

  // Get all waitlist signups (for admin use)
  async getAllSignups() {
    const { data, error } = await supabase
      .from('waitlist')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) {
      throw new Error(error.message)
    }
    
    return data
  },

  // Check if email already exists
  async checkEmailExists(email) {
    try {
      const { data, error, count } = await supabase
        .from('waitlist')
        .select('email', { count: 'exact' })
        .eq('email', email)
      
      if (error) {
        // If there's an error checking, assume it doesn't exist to avoid blocking
        return false
      }
      
      const exists = count > 0
      return exists
    } catch (err) {
      return false
    }
  }
}