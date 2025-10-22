<!-- pages/index.vue -->
<template>
  <div>
    <Hero />
    <AboutSection />
    <ProjectsSection />
    <SkillsSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
// Main portfolio page - brings all sections together
useSeoMeta({
  title: 'Gugun Gunawan - Full-stack Developer Portfolio',
  description: 'Professional Full-stack Developer specializing in modern web applications, Vue.js, React, and user experience design. View my portfolio and get in touch.',
  ogImage: 'https://portfolio-nuxt.vercel.app/og-image.jpg'
})

// Page metadata
definePageMeta({
  title: 'Home'
})
</script>