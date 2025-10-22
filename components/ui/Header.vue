<!-- components/ui/Header.vue -->
<template>
  <header ref="headerRef"
    class="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
    <nav class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center space-x-3">
          <div
            class="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
            <font-awesome-icon :icon="['fas', 'code']" class="text-white text-sm" />
          </div>
          <span class="text-xl font-bold text-gray-900">Gugun Gunawan</span>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a v-for="link in navigationLinks" :key="link.name" :href="link.href"
            class="text-gray-600 hover:text-primary-500 transition-colors duration-200 font-medium flex items-center space-x-1">
            <font-awesome-icon v-if="link.icon" :icon="link.icon" class="text-sm" />
            <span>{{ link.name }}</span>
          </a>
          <a href="#contact"
            class="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-all transform hover:-translate-y-0.5 flex items-center space-x-2">
            <font-awesome-icon :icon="['fas', 'paper-plane']" />
            <span>Get In Touch</span>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="toggleMobileMenu" class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <font-awesome-icon :icon="['fas', isMobileMenuOpen ? 'times' : 'bars']" class="text-gray-600 text-xl" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
        <div class="flex flex-col space-y-4">
          <a v-for="link in navigationLinks" :key="link.name" :href="link.href" @click="closeMobileMenu"
            class="text-gray-600 hover:text-primary-500 transition-colors duration-200 font-medium py-2 flex items-center space-x-3">
            <font-awesome-icon v-if="link.icon" :icon="link.icon" class="text-sm w-5" />
            <span>{{ link.name }}</span>
          </a>
          <a href="#contact" @click="closeMobileMenu"
            class="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors text-center font-medium flex items-center justify-center space-x-2">
            <font-awesome-icon :icon="['fas', 'paper-plane']" />
            <span>Get In Touch</span>
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
// Import Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faUser, faBriefcase, faCode, faEnvelope, faBars, faTimes, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { onClickOutside } from '@vueuse/core'

// Add icons to library
library.add(faHome, faUser, faBriefcase, faCode, faEnvelope, faBars, faTimes, faPaperPlane)

// Mobile menu state
const isMobileMenuOpen = ref(false)

// Header element reference
const headerRef = ref<HTMLElement | null>(null)

// Navigation links data with icons
const navigationLinks = [
  { name: 'Home', href: '#home', icon: ['fas', 'home'] },
  { name: 'About', href: '#about', icon: ['fas', 'user'] },
  { name: 'Projects', href: '#projects', icon: ['fas', 'briefcase'] },
  { name: 'Skills', href: '#skills', icon: ['fas', 'code'] },
  { name: 'Contact', href: '#contact', icon: ['fas', 'envelope'] },
]

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Close mobile menu
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Close mobile menu when clicking outside using VueUse
onClickOutside(headerRef, () => {
  if (isMobileMenuOpen.value) {
    closeMobileMenu()
  }
})

// Close mobile menu when pressing escape key
const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
})
</script>