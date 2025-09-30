-- Insert Tri Nguyen's about me data
INSERT INTO public.about_me (full_name, title, bio, email, location, social_links)
VALUES (
  'Tri Nguyen',
  'Business Analyst',
  'I am a Business Analyst - turning complex requirements into scalable, working systems. I connect business needs with technology by listening, clarifying, and structuring requirements, modeling processes, and turning them into implementable documentation. My focus is on clarity, consistency, and scalability — from the initial idea to a stable solution — ensuring that both business and technical teams speak the same language.',
  'nguyenmanhtri2907@gmail.com',
  'Ho Chi Minh City, Vietnam',
  '{"linkedin": "https://www.linkedin.com/in/nguyenmanhtri2907/", "facebook": "https://www.facebook.com/nmt.2907", "phone": "+84385547027", "resume": "https://drive.google.com/file/d/1JKO5YcO7TRop_o4AJXOXHtOPUFHN8MHb/view?usp=sharing"}'::jsonb
)
ON CONFLICT DO NOTHING;

-- Insert Tri Nguyen's skills
INSERT INTO public.skills (name, category, proficiency, order_index) VALUES
  -- Business Skills
  ('Business Analysis', 'Business', 90, 1),
  ('Requirements Gathering', 'Business', 90, 2),
  ('Process Modeling', 'Business', 85, 3),
  ('Stakeholder Management', 'Business', 90, 4),
  ('Blueprint Documentation', 'Business', 85, 5),
  
  -- Technical Skills
  ('SQL', 'Technical', 80, 6),
  ('Database Design', 'Technical', 75, 7),
  ('API Integration', 'Technical', 70, 8),
  
  -- Tools
  ('Figma', 'Tools', 85, 9),
  ('JIRA', 'Tools', 90, 10),
  ('Confluence', 'Tools', 85, 11),
  ('Microsoft Office', 'Tools', 90, 12),
  ('Draw.io', 'Tools', 80, 13),
  
  -- Methodology
  ('Agile/Scrum', 'Methodology', 85, 14),
  ('Waterfall', 'Methodology', 75, 15),
  
  -- Soft Skills
  ('Effective Communication', 'Soft Skills', 90, 16),
  ('Analytical Thinking', 'Soft Skills', 90, 17),
  ('Teamwork', 'Soft Skills', 90, 18),
  ('Problem Solving', 'Soft Skills', 90, 19),
  ('Systems Thinking', 'Soft Skills', 85, 20),
  ('Adaptability', 'Soft Skills', 85, 21)
ON CONFLICT DO NOTHING;

-- Added Tri Nguyen's education data
-- Insert Tri Nguyen's education
INSERT INTO public.education (institution, degree, field_of_study, description, start_date, end_date, is_current, location, gpa, order_index) VALUES
  (
    'Ho Chi Minh City University of Technology',
    'Bachelor''s Degree',
    'Management Information Systems',
    'Focused on bridging business and technology through systems analysis, database management, and business process optimization.',
    '2020-09-01',
    '2024-06-01',
    false,
    'Ho Chi Minh City, Vietnam',
    '3.3/4.0',
    1
  )
ON CONFLICT DO NOTHING;

-- Insert Tri Nguyen's work experiences
INSERT INTO public.experiences (company, position, description, start_date, end_date, is_current, location, order_index) VALUES
  (
    'Delfi Technologies',
    'Business Analyst',
    'Currently working as Business Analyst, focusing on bridging business requirements with technical solutions.',
    '2025-08-01',
    NULL,
    true,
    'Ho Chi Minh City, Vietnam',
    1
  ),
  (
    'L.C.S CO.,LTD',
    'Business Analyst',
    'Acted as Business Analyst in internal projects including RMS (Repair & Maintenance System), TMS (Transport Management System), and E-Contract. Gathered and analyzed requirements, produced key documents (Blueprint, BRD, URD), designed web/mobile mockups in Figma, and collaborated with stakeholders and development teams to ensure solutions met business needs.',
    '2024-03-01',
    '2025-08-01',
    false,
    'Ho Chi Minh City, Vietnam',
    2
  )
ON CONFLICT DO NOTHING;

-- Insert sample projects (these can be updated by admin later)
INSERT INTO public.projects (title, description, long_description, technologies, images, featured, order_index, project_url) VALUES
  (
    'RMS - Repair & Maintenance System',
    'Internal system for managing repair and maintenance operations',
    'Led business analysis for the Repair & Maintenance System at L.C.S CO.,LTD. Gathered requirements from operations team, created comprehensive Blueprint and BRD documents, designed user-friendly interfaces in Figma, and worked closely with development team to ensure successful implementation. The system streamlined maintenance workflows and improved tracking efficiency.',
    '["Business Analysis", "Blueprint", "BRD", "Figma", "JIRA", "SQL"]'::jsonb,
    '[]'::jsonb,
    true,
    1,
    NULL
  ),
  (
    'TMS - Transport Management System',
    'Comprehensive transport and logistics management platform',
    'Analyzed business processes and requirements for the Transport Management System. Created detailed URD (User Requirements Document) and functional specifications. Designed intuitive web and mobile interfaces to support drivers, dispatchers, and administrators. Collaborated with stakeholders to ensure the system met all operational needs.',
    '["Requirements Analysis", "URD", "Figma", "Process Modeling", "Stakeholder Management"]'::jsonb,
    '[]'::jsonb,
    true,
    2,
    NULL
  ),
  (
    'E-Contract System',
    'Digital contract management and approval workflow system',
    'Developed requirements and designed user experience for an electronic contract management system. Created process flow diagrams, designed approval workflows, and produced comprehensive documentation. The system digitized the contract approval process, reducing processing time and improving compliance tracking.',
    '["Business Analysis", "Process Modeling", "Figma", "Workflow Design", "Documentation"]'::jsonb,
    '[]'::jsonb,
    false,
    3,
    NULL
  )
ON CONFLICT DO NOTHING;
