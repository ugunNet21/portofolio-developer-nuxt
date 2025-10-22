<!-- components/ui/ProjectCard.vue -->
<template>
  <div
    class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
    <!-- Project Image -->
    <div class="h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
      <div class="absolute inset-0 bg-black/10"></div>
    </div>

    <!-- Project Content -->
    <div class="p-6">
      <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ project.title }}</h3>
      <p class="text-gray-600 mb-4">{{ project.description }}</p>

      <!-- Technologies -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span v-for="tech in project.technologies" :key="tech"
          class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
          {{ tech }}
        </span>
      </div>

      <!-- Action Buttons -->
      <div class="flex space-x-3">
        <a v-if="project.demoUrl" :href="project.demoUrl"
          class="flex-1 bg-primary-500 text-white text-center py-2 rounded-lg hover:bg-primary-600 transition-colors">
          Live Demo
        </a>
        <a v-if="project.githubUrl" :href="project.githubUrl"
          class="flex-1 border border-gray-300 text-gray-700 text-center py-2 rounded-lg hover:border-primary-500 transition-colors">
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/types'

// Define props with TypeScript
interface Props {
  project: Project
}

defineProps<Props>()
</script>