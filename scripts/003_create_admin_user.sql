-- Improved admin user creation script with better instructions
-- This script grants admin role to the specified email
-- 
-- IMPORTANT: Before running this script, you must:
-- 1. Go to /auth/signup and create an account with email: nguyenmanhtri2907@gmail.com
-- 2. Check your email and verify your account
-- 3. Then run this script to grant admin privileges
--
-- After running this script, you can login at /auth/login with:
-- Email: nguyenmanhtri2907@gmail.com
-- Password: nmt29072002

-- Grant admin role to the user
UPDATE public.profiles
SET role = 'admin'
WHERE email = 'nguyenmanhtri2907@gmail.com';

-- Verify the update
SELECT email, role, created_at 
FROM public.profiles 
WHERE email = 'nguyenmanhtri2907@gmail.com';
