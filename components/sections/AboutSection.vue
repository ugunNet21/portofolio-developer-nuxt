<!-- components/sections/AboutSection.vue -->
<template>
  <section id="about" class="py-20 px-6 bg-gray-50">
    <div class="container mx-auto max-w-6xl">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
        <div class="flex justify-center mb-6">
          <div class="w-16 h-1 bg-primary-500 rounded-full"></div>
        </div>
        <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Passionate about creating digital experiences that are both beautiful and functional
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- About Image -->
        <div class="relative order-last lg:order-first">
          <div class="w-full h-80 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl shadow-xl flex items-center justify-center">
            <font-awesome-icon :icon="['fas', 'user']" class="text-white text-8xl opacity-80" />
          </div>
          <div class="absolute -bottom-4 -right-4 w-20 h-20 bg-yellow-400 rounded-2xl shadow-lg flex items-center justify-center">
            <font-awesome-icon :icon="['fas', 'award']" class="text-white text-2xl" />
          </div>
        </div>

        <!-- About Content -->
        <div class="space-y-6">
          <p class="text-lg text-gray-700 leading-relaxed">
            With over 5 years of experience in UI/UX design and frontend development,
            I specialize in creating user-centered digital products that deliver
            exceptional experiences.
          </p>

          <p class="text-lg text-gray-700 leading-relaxed">
            My approach combines design thinking with technical expertise to build
            solutions that are not only visually appealing but also highly functional
            and accessible.
          </p>

          <div class="grid grid-cols-2 gap-6 pt-6">
            <div v-for="stat in stats" :key="stat.label" 
              class="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <font-awesome-icon :icon="stat.icon" class="text-primary-500 text-2xl mb-2" />
              <div class="text-2xl font-bold text-gray-900">{{ stat.value }}+</div>
              <div class="text-gray-600 text-sm">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core';
import { faProjectDiagram, faUsers, faCalendarAlt, faTrophy } from '@fortawesome/free-solid-svg-icons'

library.add(faProjectDiagram, faUsers, faCalendarAlt, faTrophy)

// About section statistics
const stats = [
  { label: 'Projects Completed', value: 50, icon: ['fas', 'project-diagram'] },
  { label: 'Happy Clients', value: 30, icon: ['fas', 'users'] },
  { label: 'Years Experience', value: 5, icon: ['fas', 'calendar-alt'] },
  { label: 'Awards Won', value: 3, icon: ['fas', 'trophy'] }
]
</script>