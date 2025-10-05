import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

export type Plan = {
  id: string;
  name: string;
  slug: string;
  price: number;
  duration_days: number;
  features: string[];
  created_at?: string;
  updated_at?: string;
};

export type Order = {
  id?: string;
  user_id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country: string;
  plan_id: string;
  plan_name: string;
  amount: number;
  status: string;
  start_date?: string;
  end_date?: string;
  created_at?: string;
  updated_at?: string;
};