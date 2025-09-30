"use client"

import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Facebook, Phone, FileText } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface AboutData {
  full_name: string
  title: string
  bio: string
  email: string | null
  location: string | null
  social_links: Record<string, string>
}

interface HeroSectionProps {
  data: AboutData
}

export function HeroSection({ data }: HeroSectionProps) {
  const { t } = useLanguage()
  const socialLinks = data.social_links || {}

  return (
    <section id="about" className="container py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center space-y-8">
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">{data.full_name}</h1>
          <p className="text-xl md:text-2xl text-primary font-medium">{data.title}</p>
          {data.location && <p className="text-muted-foreground">{data.location}</p>}
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {data.bio}
        </p>

        <div
          className="flex flex-wrap items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          {data.email && (
            <Button asChild>
              <a href={`mailto:${data.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                {t.hero.contactMe}
              </a>
            </Button>
          )}

          {socialLinks.resume && (
            <Button variant="outline" asChild>
              <a href={socialLinks.resume} target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                {t.hero.viewResume}
              </a>
            </Button>
          )}

          {socialLinks.linkedin && (
            <Button variant="outline" asChild>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          )}

          {socialLinks.facebook && (
            <Button variant="outline" asChild>
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                <Facebook className="mr-2 h-4 w-4" />
                Facebook
              </a>
            </Button>
          )}

          {socialLinks.phone && (
            <Button variant="outline" asChild>
              <a href={`tel:${socialLinks.phone}`}>
                <Phone className="mr-2 h-4 w-4" />
                {socialLinks.phone}
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
