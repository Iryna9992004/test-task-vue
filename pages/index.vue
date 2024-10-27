<template>
  <div class="grid grid-cols-2 px-10 gap-10">
    <div class="flex flex-col">
      <SearchInput @search="updateSearchTerm" />
      <CountriesList :search-term="searchTerm" />
    </div>
    <RandomCountries />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import SearchInput from '@/components/SearchInput.vue'
  import CountriesList from '@/widgets/CountriesList.vue'
  import RandomCountries from '@/widgets/RandomCountries.vue'

  const searchTerm = ref('')

  const updateSearchTerm = (term: string) => {
    searchTerm.value = term
  }
</script>
