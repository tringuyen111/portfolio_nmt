"use client"

import type React from "react"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

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
  order_index: number
}

interface ProjectFormDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  project: Project | null
}

export function ProjectFormDialog({ open, onOpenChange, project }: ProjectFormDialogProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    long_description: "",
    project_url: "",
    github_url: "",
    featured: false,
  })
  const [technologies, setTechnologies] = useState<string[]>([])
  const [techInput, setTechInput] = useState("")
  const [images, setImages] = useState<string[]>([])
  const [imageInput, setImageInput] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title,
        description: project.description,
        long_description: project.long_description || "",
        project_url: project.project_url || "",
        github_url: project.github_url || "",
        featured: project.featured,
      })
      setTechnologies(project.technologies)
      setImages(project.images)
    } else {
      setFormData({
        title: "",
        description: "",
        long_description: "",
        project_url: "",
        github_url: "",
        featured: false,
      })
      setTechnologies([])
      setImages([])
    }
  }, [project, open])

  const handleAddTechnology = () => {
    if (techInput.trim() && !technologies.includes(techInput.trim())) {
      setTechnologies([...technologies, techInput.trim()])
      setTechInput("")
    }
  }

  const handleRemoveTechnology = (tech: string) => {
    setTechnologies(technologies.filter((t) => t !== tech))
  }

  const handleAddImage = () => {
    if (imageInput.trim() && !images.includes(imageInput.trim())) {
      setImages([...images, imageInput.trim()])
      setImageInput("")
    }
  }

  const handleRemoveImage = (img: string) => {
    setImages(images.filter((i) => i !== img))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const projectData = {
        ...formData,
        technologies,
        images,
        long_description: formData.long_description || null,
        project_url: formData.project_url || null,
        github_url: formData.github_url || null,
      }

      if (project) {
        // Update existing project
        const { error } = await supabase.from("projects").update(projectData).eq("id", project.id)
        if (error) throw error
      } else {
        // Create new project
        const { error } = await supabase.from("projects").insert([projectData])
        if (error) throw error
      }

      router.refresh()
      onOpenChange(false)
    } catch (error) {
      console.error("[v0] Error saving project:", error)
      alert("Error saving project: " + (error instanceof Error ? error.message : "Unknown error"))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{project ? "Edit Project" : "Add New Project"}</DialogTitle>
          <DialogDescription>
            {project ? "Update the project details below" : "Fill in the details for your new project"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Project Title *</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              placeholder="E-Commerce Platform Redesign"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Short Description *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
              placeholder="A brief overview of the project (shown on cards)"
              rows={2}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="long_description">Detailed Description</Label>
            <Textarea
              id="long_description"
              value={formData.long_description}
              onChange={(e) => setFormData({ ...formData, long_description: e.target.value })}
              placeholder="A comprehensive description of the project (shown in modal)"
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label>Technologies</Label>
            <div className="flex gap-2">
              <Input
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    handleAddTechnology()
                  }
                }}
                placeholder="Add a technology (e.g., React, Node.js)"
              />
              <Button type="button" onClick={handleAddTechnology} variant="secondary">
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="gap-1">
                  {tech}
                  <button type="button" onClick={() => handleRemoveTechnology(tech)} className="ml-1">
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Image URLs</Label>
            <div className="flex gap-2">
              <Input
                value={imageInput}
                onChange={(e) => setImageInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    handleAddImage()
                  }
                }}
                placeholder="Add an image URL"
              />
              <Button type="button" onClick={handleAddImage} variant="secondary">
                Add
              </Button>
            </div>
            <div className="space-y-2 mt-2">
              {images.map((img, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-muted rounded">
                  <span className="text-sm flex-1 truncate">{img}</span>
                  <Button type="button" variant="ghost" size="sm" onClick={() => handleRemoveImage(img)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="project_url">Project URL</Label>
              <Input
                id="project_url"
                type="url"
                value={formData.project_url}
                onChange={(e) => setFormData({ ...formData, project_url: e.target.value })}
                placeholder="https://example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="github_url">GitHub URL</Label>
              <Input
                id="github_url"
                type="url"
                value={formData.github_url}
                onChange={(e) => setFormData({ ...formData, github_url: e.target.value })}
                placeholder="https://github.com/username/repo"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="featured"
              checked={formData.featured}
              onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
            />
            <Label htmlFor="featured" className="cursor-pointer">
              Featured Project
            </Label>
          </div>

          <div className="flex gap-3 justify-end pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={isSubmitting}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : project ? "Update Project" : "Create Project"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
