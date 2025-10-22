// types/index.ts
// Project type definition
export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
  category: string
}

// Skill type definition
export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'design' | 'tools'
}

// Contact form type
export interface ContactForm {
  name: string
  email: string
  message: string
}