import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nbcizwerqieyxmvulibo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5iY2l6d2VycWlleXhtdnVsaWJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQzNTk0MjEsImV4cCI6MjA3OTkzNTQyMX0.9DH-b1dV05uBFy-9DcC6m4IIiQ2jFr7LKXXMLGq8w24';

export const supabase = createClient(supabaseUrl, supabaseKey);