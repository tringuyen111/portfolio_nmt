# Admin Setup Instructions

This guide will help you set up your admin account to manage your portfolio.

## Step 1: Run Database Scripts

Make sure all database scripts have been executed in order:

1. **001_create_tables.sql** - Creates all database tables including the new `education` table
2. **002_seed_data.sql** - Populates your portfolio with your real data (Tri Nguyen's information)
3. **003_create_admin_user.sql** - Grants admin privileges (run AFTER creating your account)

## Step 2: Create Your Admin Account

1. Go to `/auth/signup` in your browser
2. Fill in the signup form with:
   - **Full Name**: Tri Nguyen (or your preferred name)
   - **Email**: `nguyenmanhtri2907@gmail.com`
   - **Password**: `nmt29072002`
3. Click "Sign Up"
4. Check your email inbox for a verification email from Supabase
5. Click the verification link in the email

## Step 3: Grant Admin Privileges

After verifying your email:

1. Run the script `003_create_admin_user.sql` from the scripts folder
2. This will update your account role from 'viewer' to 'admin'

## Step 4: Login to Admin Panel

1. Go to `/auth/login`
2. Enter your credentials:
   - **Email**: `nguyenmanhtri2907@gmail.com`
   - **Password**: `nmt29072002`
3. Click "Login"
4. You should be redirected to `/admin` where you can manage your portfolio

## What's Included in Your Portfolio

Your portfolio now includes:

### Personal Information
- **Name**: Tri Nguyen
- **Title**: Business Analyst
- **Location**: Ho Chi Minh City, Vietnam
- **Email**: nguyenmanhtri2907@gmail.com
- **Phone**: +84385547027
- **Social Links**: LinkedIn, Facebook, Resume

### Education
- **Institution**: Ho Chi Minh City University of Technology
- **Degree**: Bachelor's Degree in Management Information Systems
- **GPA**: 3.3/4.0
- **Period**: September 2020 - June 2024

### Work Experience
1. **Delfi Technologies** - Business Analyst (August 2025 - Present)
2. **L.C.S CO.,LTD** - Business Analyst (March 2024 - August 2025)

### Skills
- **Business**: Business Analysis, Requirements Gathering, Process Modeling, Stakeholder Management, Blueprint Documentation
- **Technical**: SQL, Database Design, API Integration
- **Tools**: Figma, JIRA, Confluence, Microsoft Office, Draw.io
- **Methodology**: Agile/Scrum, Waterfall
- **Soft Skills**: Effective Communication, Analytical Thinking, Teamwork, Problem Solving, Systems Thinking, Adaptability

### Projects
1. **RMS - Repair & Maintenance System**
2. **TMS - Transport Management System**
3. **E-Contract System**

## Features

### Language Toggle
- Switch between English (EN) and Vietnamese (VN)
- Available in the header navigation

### Theme Toggle
- Switch between Light and Dark mode
- Available in the header navigation

### Professional Color Scheme
- Uses blue/teal tones suitable for Business Analyst profession
- Clean, professional design with good contrast

## Troubleshooting

### Can't Login?
- Make sure you verified your email
- Make sure you ran the `003_create_admin_user.sql` script
- Check that your email matches exactly: `nguyenmanhtri2907@gmail.com`

### Data Not Showing?
- Make sure you ran `002_seed_data.sql` script
- Check your Supabase database to verify data was inserted
- Try refreshing the page

### Need Help?
- Check the Supabase integration in Project Settings
- Verify all environment variables are set correctly
- Make sure Row Level Security (RLS) policies are enabled

## Next Steps

Once logged in as admin, you can:
- Edit your personal information
- Add/edit/delete education entries
- Add/edit/delete work experiences
- Add/edit/delete skills
- Add/edit/delete projects
- Upload project images
- Update your bio and contact information
