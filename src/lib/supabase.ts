import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xuhozzclgverzelqtapr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1aG96emNsZ3ZlcnplbHF0YXByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE2ODQzODksImV4cCI6MjA0NzI2MDM4OX0.OBHVVP5xK2SqLkkUMYkge_tGgoVQZP1vnN6Wr-n8yds';

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false
  }
});