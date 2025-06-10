create table if not exists public.subscribers (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text unique not null,
  confirmed boolean default false,
  confirmation_token text,
  created_at timestamp with time zone default now()
);
