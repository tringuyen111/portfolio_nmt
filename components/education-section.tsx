"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, GraduationCap } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface Education {
  id: string
  institution: string
  degree: string
  field_of_study: string
  description: string | null
  start_date: string
  end_date: string | null
  is_current: boolean
  location: string | null
  gpa: string | null
}

interface EducationSectionProps {
  education: Education[]
}

export function EducationSection({ education }: EducationSectionProps) {
  const { t } = useLanguage()

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short" })
  }

  return (
    <section id="education" className="container py-24">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">{t.education.title}</h2>
          <p className="text-muted-foreground">{t.education.subtitle}</p>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={edu.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-2 rounded-lg bg-primary/10">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                        <p className="text-lg text-primary">{edu.institution}</p>
                        <p className="text-muted-foreground">{edu.field_of_study}</p>
                      </div>
                    </div>

                    {edu.description && <p className="text-muted-foreground leading-relaxed">{edu.description}</p>}

                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {formatDate(edu.start_date)} -{" "}
                          {edu.is_current ? t.education.present : formatDate(edu.end_date!)}
                        </span>
                      </div>
                      {edu.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                      )}
                      {edu.gpa && (
                        <Badge variant="secondary" className="font-mono">
                          GPA: {edu.gpa}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {edu.is_current && (
                    <Badge variant="secondary" className="w-fit">
                      {t.education.present}
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
