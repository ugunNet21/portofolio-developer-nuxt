<!-- components/sections/ContactSection.vue -->
<template>
  <section id="contact" class="py-20 px-6 bg-white">
    <div class="container mx-auto max-w-6xl">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
        <div class="flex justify-center mb-6">
          <div class="w-16 h-1 bg-primary-500 rounded-full"></div>
        </div>
        <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Ready to start your next project? Let's talk about how we can work together
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div class="space-y-8">
          <h3 class="text-2xl font-semibold text-gray-900 mb-6 flex items-center space-x-3">
            <font-awesome-icon :icon="['fas', 'comments']" class="text-primary-500" />
            <span>Let's Connect</span>
          </h3>

          <div v-for="contact in contactMethods" :key="contact.type" 
            class="flex items-center space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors group">
            <div class="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <font-awesome-icon :icon="contact.icon" class="text-white text-lg" />
            </div>
            <div>
              <p class="font-semibold text-gray-900">{{ contact.label }}</p>
              <p class="text-gray-600">{{ contact.value }}</p>
            </div>
          </div>

          <!-- Social Media Links -->
          <div class="pt-6">
            <h4 class="font-semibold text-gray-900 mb-4">Follow Me</h4>
            <div class="flex space-x-4">
              <a v-for="social in socialLinks" :key="social.name" :href="social.url"
                class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all transform hover:-translate-y-1">
                <font-awesome-icon :icon="social.icon" />
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-gray-50 p-8 rounded-2xl shadow-lg">
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faEnvelope, faPhone, faMapMarkerAlt)

// Contact methods data
const contactMethods = [
  {
    type: 'email',
    icon: ['fas', 'envelope'],
    label: 'Email',
    value: 'hello@ugun.com'
  },
  {
    type: 'phone',
    icon: ['fas', 'phone'],
    label: 'Phone',
    value: '+1 (555) 123-4567'
  },
  {
    type: 'location',
    icon: ['fas', 'map-marker-alt'],
    label: 'Location',
    value: 'San Francisco, CA'
  }
]

// Social links
const socialLinks = [
  { name: 'GitHub', url: '#', icon: ['fab', 'github'] },
  { name: 'LinkedIn', url: '#', icon: ['fab', 'linkedin'] },
  { name: 'Twitter', url: '#', icon: ['fab', 'twitter'] },
]
</script>