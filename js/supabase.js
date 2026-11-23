// Foody - Supabase Connection

const SUPABASE_URL = "https://vnptgjmvercxthkdazqt.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_0t_JgKKMo1L3JTphoSWBHw_GioidNu-";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
);
