-- Drop the foreign key constraint if it exists
ALTER TABLE IF EXISTS registered_users
DROP CONSTRAINT IF EXISTS registered_users_id_fkey;

-- Re-add the constraint with ON DELETE CASCADE
ALTER TABLE registered_users
ADD CONSTRAINT registered_users_id_fkey
FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE;

-- Make sure RLS is disabled (it's disabled by default, but just to be explicit)
ALTER TABLE registered_users DISABLE ROW LEVEL SECURITY;
