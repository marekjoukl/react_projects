import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://xmmhwkysvtjzfidroszj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtbWh3a3lzdnRqemZpZHJvc3pqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1NTA4NzAsImV4cCI6MjA1MzEyNjg3MH0.8xNEy_Po3ARC07fLYTaCGweNbc5NilDvl2Jzr1wu948";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
