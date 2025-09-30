"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Facebook, Phone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface ContactSectionProps {
  email: string | null
  socialLinks: Record<string, string>
}

export function ContactSection({ email, socialLinks }: ContactSectionProps) {
  const { t } = useLanguage()

  return (
    <section id="contact" className="container py-24">
      <div className="mx-auto max-w-2xl text-center space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">{t.contact.title}</h2>
          <p className="text-muted-foreground">{t.contact.description}</p>
        </div>

        <Card>
          <CardContent className="p-8">
            <div className="space-y-6">
              {email && (
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{t.contact.email}</p>
                  <p className="text-lg font-medium">{email}</p>
                </div>
              )}

              <div className="flex flex-wrap items-center justify-center gap-4">
                {email && (
                  <Button asChild size="lg">
                    <a href={`mailto:${email}`}>
                      <Mail className="mr-2 h-5 w-5" />
                      {t.contact.email}
                    </a>
                  </Button>
                )}

                {socialLinks.phone && (
                  <Button variant="outline" size="lg" asChild>
                    <a href={`tel:${socialLinks.phone}`}>
                      <Phone className="mr-2 h-5 w-5" />
                      {t.contact.phone}
                    </a>
                  </Button>
                )}

                {socialLinks.linkedin && (
                  <Button variant="outline" size="lg" asChild>
                    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-5 w-5" />
                      {t.contact.linkedin}
                    </a>
                  </Button>
                )}

                {socialLinks.facebook && (
                  <Button variant="outline" size="lg" asChild>
                    <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                      <Facebook className="mr-2 h-5 w-5" />
                      {t.contact.facebook}
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
