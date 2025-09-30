"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface Experience {
  id: string
  company: string
  position: string
  description: string | null
  start_date: string
  end_date: string | null
  is_current: boolean
  location: string | null
}

interface ExperienceSectionProps {
  experiences: Experience[]
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const { t } = useLanguage()

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short" })
  }

  return (
    <section id="experience" className="container py-24 bg-muted/30">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">{t.experience.title}</h2>
          <p className="text-muted-foreground">My professional journey</p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={exp.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-3 flex-1">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.position}</h3>
                      <p className="text-lg text-primary">{exp.company}</p>
                    </div>

                    {exp.description && <p className="text-muted-foreground leading-relaxed">{exp.description}</p>}

                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {formatDate(exp.start_date)} -{" "}
                          {exp.is_current ? t.experience.present : formatDate(exp.end_date!)}
                        </span>
                      </div>
                      {exp.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {exp.is_current && (
                    <Badge variant="secondary" className="w-fit">
                      {t.experience.present}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
