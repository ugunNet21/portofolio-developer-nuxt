<!-- components/sections/ProjectSection.vue -->
<template>
  <section id="projects" class="py-20 px-6">
    <div class="container mx-auto max-w-6xl">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          A selection of my recent work showcasing my design and development skills
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Project } from '~/types'

// Sample projects data
const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce solution with focus on user experience and performance.',
    image: '/project1.jpg',
    technologies: ['Vue.js', 'Nuxt 3', 'Tailwind', 'Stripe'],
    demoUrl: '#',
    githubUrl: '#',
    category: 'web'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Productivity application with real-time collaboration features.',
    image: '/project2.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    demoUrl: '#',
    githubUrl: '#',
    category: 'web'
  },
  {
    id: 3,
    title: 'Health & Fitness Tracker',
    description: 'Mobile-first application for tracking workouts and nutrition.',
    image: '/project3.jpg',
    technologies: ['Flutter', 'Firebase', 'Dart', 'Provider'],
    demoUrl: '#',
    githubUrl: '#',
    category: 'mobile'
  }
]
</script>