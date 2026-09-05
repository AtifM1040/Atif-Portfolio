import { createClient } from '@supabase/supabase-js';

// User's new personal Supabase credentials
export const SUPABASE_URL = 'https://xzjwbiphosaitzpjiqpv.supabase.co';
export const SUPABASE_KEY = 'sb_publishable_D-0kEGIxIBhYoLeAnL1iFg_6R_NsnQp';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
