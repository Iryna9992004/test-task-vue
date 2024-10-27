<template>
  <div>
    <input
      v-model="searchValue"
      type="text"
      placeholder="Search countries..."
      class="border p-2 mb-4 w-full"
      @input="emitSearch"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const searchValue = ref('')
  const emit = defineEmits(['search'])

  const emitSearch = () => {
    emit('search', searchValue.value)
  }
</script>
