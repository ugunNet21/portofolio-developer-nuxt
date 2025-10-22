<!-- components/sections/SkillSection.vue -->
<template>
  <section id="skills" class="py-20 px-6 bg-gray-50">
    <div class="container mx-auto max-w-6xl">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      <!-- Skills Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SkillBadge v-for="skill in skills" :key="skill.name" :skill="skill" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Skill } from '~/types'

// Sample skills data
const skills: Skill[] = [
  { name: 'Vue.js', level: 90, category: 'frontend' },
  { name: 'React', level: 85, category: 'frontend' },
  { name: 'TypeScript', level: 80, category: 'frontend' },
  { name: 'UI/UX Design', level: 88, category: 'design' },
  { name: 'Tailwind CSS', level: 92, category: 'frontend' },
  { name: 'Nuxt.js', level: 85, category: 'frontend' },
  { name: 'Figma', level: 87, category: 'design' },
  { name: 'Node.js', level: 75, category: 'backend' }
]
</script>