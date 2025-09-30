"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { useState } from "react"
import { ProjectModal } from "./project-modal"
import { useLanguage } from "@/lib/language-context"

interface Project {
  id: string
  title: string
  description: string
  long_description: string | null
  technologies: string[]
  images: string[]
  project_url: string | null
  github_url: string | null
  featured: boolean
}

interface ProjectsSectionProps {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const { t } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  return (
    <>
      <section id="projects" className="container py-24 bg-muted/30">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold">{t.projects.title}</h2>
            <p className="text-muted-foreground">Selected work and case studies</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="group cursor-pointer hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleProjectClick(project)}
              >
                <div className="aspect-video bg-muted overflow-hidden">
                  <img
                    src={
                      project.images[0] ||
                      `/placeholder.svg?height=300&width=400&query=${encodeURIComponent(project.title) || "/placeholder.svg"}`
                    }
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    {project.featured && (
                      <Badge variant="secondary" className="shrink-0">
                        {t.projects.featured}
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-4 w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    {t.projects.viewDetails}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal project={selectedProject} open={modalOpen} onOpenChange={setModalOpen} />
    </>
  )
}
