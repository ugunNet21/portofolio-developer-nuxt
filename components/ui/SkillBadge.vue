<!-- components/ui/SkillBadge.vue -->
<template>
  <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
    <h3 class="font-semibold text-gray-900 mb-3">{{ skill.name }}</h3>

    <!-- Skill Level Bar -->
    <div class="w-full bg-gray-200 rounded-full h-2 mb-2">
      <div class="bg-primary-500 h-2 rounded-full transition-all duration-1000" :style="{ width: `${skill.level}%` }">
      </div>
    </div>

    <span class="text-sm text-gray-600">{{ skill.level }}%</span>
  </div>
</template>

<script setup lang="ts">
import type { Skill } from '~/types'

interface Props {
  skill: Skill
}

defineProps<Props>()
</script>