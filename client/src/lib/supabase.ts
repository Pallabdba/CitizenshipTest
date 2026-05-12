import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://gddcdfwhmxnenzdrkkac.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkZGNkZndobXhuZW56ZHJra2FjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1NTM2ODMsImV4cCI6MjA5NDEyOTY4M30.dFYe-rBZBzjktZbbyX59OPOqgM4iQvSr1eZDrYVc5qo'
);
