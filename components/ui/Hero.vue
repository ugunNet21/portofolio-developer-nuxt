<!-- components/ui/Hero.vue -->
<template>
  <section id="home" class="pt-32 pb-20 px-6 min-h-screen flex items-center">
    <div class="container mx-auto max-w-6xl">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Hero Content -->
        <div class="animate-slide-up text-center lg:text-left">
          <div class="flex justify-center lg:justify-start mb-6">
            <div class="w-20 h-1 bg-primary-500 rounded-full"></div>
          </div>
          
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Full-stack Developer &
            <span class="text-primary-500 block mt-2">Digital Creator</span>
          </h1>
          
          <p class="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            I craft beautiful, functional digital experiences that users love.
            Specializing in modern web technologies and user-centered design.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#projects"
              class="bg-primary-500 text-white px-8 py-4 rounded-lg hover:bg-primary-600 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 font-semibold">
              <font-awesome-icon :icon="['fas', 'eye']" />
              <span>View My Work</span>
            </a>
            <a href="#contact"
              class="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-primary-500 hover:text-primary-500 transition-all flex items-center justify-center space-x-2 font-semibold">
              <font-awesome-icon :icon="['fas', 'download']" />
              <span>Download CV</span>
            </a>
          </div>

          <!-- Social Links -->
          <div class="flex justify-center lg:justify-start space-x-6 mt-8">
            <a v-for="social in socialLinks" :key="social.name" :href="social.url" 
              class="text-gray-400 hover:text-primary-500 transition-colors transform hover:-translate-y-1"
              :title="social.name">
              <font-awesome-icon :icon="social.icon" class="text-2xl" />
            </a>
          </div>
        </div>

        <!-- Hero Image/Graphic -->
        <div class="relative order-first lg:order-last">
          <div class="w-64 h-64 md:w-80 md:h-80 mx-auto bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl transform rotate-6 shadow-2xl flex items-center justify-center">
            <font-awesome-icon :icon="['fas', 'laptop-code']" class="text-white text-6xl md:text-8xl opacity-80" />
          </div>
          <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-400 rounded-2xl shadow-lg flex items-center justify-center">
            <font-awesome-icon :icon="['fas', 'lightbulb']" class="text-white text-xl" />
          </div>
          <div class="absolute -top-4 -right-4 w-12 h-12 bg-green-400 rounded-2xl shadow-lg flex items-center justify-center">
            <font-awesome-icon :icon="['fas', 'check']" class="text-white text-lg" />
          </div>
          <div class="absolute -bottom-6 -right-6 w-20 h-20 bg-purple-400 rounded-2xl shadow-lg flex items-center justify-center">
            <font-awesome-icon :icon="['fas', 'rocket']" class="text-white text-2xl" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faTwitter, faDribbble } from '@fortawesome/free-brands-svg-icons'

// Add brand icons to library
library.add(faGithub, faLinkedin, faTwitter, faDribbble)

// Social links data
const socialLinks = [
  { name: 'GitHub', url: '#', icon: ['fab', 'github'] },
  { name: 'LinkedIn', url: '#', icon: ['fab', 'linkedin'] },
  { name: 'Twitter', url: '#', icon: ['fab', 'twitter'] },
  { name: 'Dribbble', url: '#', icon: ['fab', 'dribbble'] },
]
</script>