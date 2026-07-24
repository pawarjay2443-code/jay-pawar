import { createClient } from '@supabase/supabase-js';

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export const submitContactMessage = async (data: ContactMessage) => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('CRITICAL ERROR: Supabase configuration is missing. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your .env.local file.');
    throw new Error('Database connection not configured. Please try again later.');
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  try {
    const { error } = await supabase
      .from('contact_messages')
      .insert([
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
      ]);

    if (error) {
      console.error('Supabase Insert Error:', error);
      throw new Error(error.message || 'Failed to submit message to the database.');
    }
  } catch (err) {
    console.error('Database connection or insert failed:', err);
    throw new Error('Failed to connect to the database. Please try again later.');
  }
};
