import { createClient } from "@/lib/supabase/server"
import { PortfolioHeader } from "@/components/portfolio-header"
import { HeroSection } from "@/components/hero-section"
import { EducationSection } from "@/components/education-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"

export default async function HomePage() {
  const supabase = await createClient()

  // Fetch all portfolio data
  const [{ data: aboutData }, { data: education }, { data: experiences }, { data: skills }, { data: projects }] =
    await Promise.all([
      supabase.from("about_me").select("*").single(),
      supabase.from("education").select("*").order("order_index", { ascending: true }),
      supabase.from("experiences").select("*").order("order_index", { ascending: true }),
      supabase.from("skills").select("*").order("order_index", { ascending: true }),
      supabase.from("projects").select("*").order("order_index", { ascending: true }),
    ])

  return (
    <div className="min-h-screen">
      <PortfolioHeader />

      <main>
        {aboutData && <HeroSection data={aboutData} />}
        {education && education.length > 0 && <EducationSection education={education} />}
        {experiences && experiences.length > 0 && <ExperienceSection experiences={experiences} />}
        {skills && skills.length > 0 && <SkillsSection skills={skills} />}
        {projects && projects.length > 0 && <ProjectsSection projects={projects} />}
        {aboutData && <ContactSection email={aboutData.email} socialLinks={aboutData.social_links || {}} />}
      </main>

      <footer className="border-t border-border/40 py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {aboutData?.full_name || "Portfolio"}.{" "}
            {/* Translation handled by footer context if needed */}
          </p>
        </div>
      </footer>
    </div>
  )
}
