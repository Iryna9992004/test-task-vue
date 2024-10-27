<template>
  <div class="p-4 border rounded-lg shadow-md bg-white mb-4 hover:bg-gray-100 cursor-pointer">
    <h2 class="text-xl font-semibold text-gray-800">
      {{ props.description }}
    </h2>
    <h3 class="text-gray-600">
      {{ props.date }}
    </h3>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{ description: string; date: string }>()
</script>
