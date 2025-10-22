<!-- components/ui/ContactForm.vue -->
<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <!-- Name Input -->
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
        Full Name
      </label>
      <input id="name" v-model="form.name" type="text" required
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
        placeholder="Your full name" />
    </div>

    <!-- Email Input -->
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
        Email Address
      </label>
      <input id="email" v-model="form.email" type="email" required
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
        placeholder="your.email@example.com" />
    </div>

    <!-- Message Textarea -->
    <div>
      <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
        Message
      </label>
      <textarea id="message" v-model="form.message" rows="5" required
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
        placeholder="Tell me about your project..."></textarea>
    </div>

    <!-- Submit Button -->
    <button type="submit" :disabled="isSubmitting"
      class="w-full bg-primary-500 text-white py-3 px-6 rounded-lg hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:-translate-y-0.5">
      {{ isSubmitting ? 'Sending...' : 'Send Message' }}
    </button>
  </form>
</template>

<script setup lang="ts">
import type { ContactForm } from '~/types'

// Reactive form state
const form = reactive<ContactForm>({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)

// Form submission handler
const handleSubmit = async () => {
  isSubmitting.value = true

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('Form submitted:', form)

    // Reset form
    Object.assign(form, { name: '', email: '', message: '' })
    alert('Message sent successfully!')
  } catch (error) {
    console.error('Error sending message:', error)
    alert('Failed to send message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>