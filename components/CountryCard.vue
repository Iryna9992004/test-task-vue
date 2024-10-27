<template>
  <NuxtLink :to="`/country/${props.countryKey}`">
    <div class="border p-4 rounded hover:bg-gray-100 cursor-pointer">
      {{ props.country }}
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  const props = defineProps<{
    countryKey: string
    country: string
  }>()
</script>
