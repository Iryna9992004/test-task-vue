<template>
  <div>
    <CountryCard
      v-for="country in filteredCountries"
      :key="country.key"
      :country-key="country.key"
      :country="country.value"
    />
  </div>
  <div v-if="filteredCountries.length === 0">No results</div>
</template>

<script setup lang="ts">
  import { computed, ref, watch } from 'vue'
  import CountryCard from '../components/CountryCard'
  import axios from 'axios'
  import { useRuntimeConfig } from '#app'

  const props = defineProps<{ searchTerm: string }>()
  const config = useRuntimeConfig()
  const countries = ref([])
  try {
    const response = await axios.get(`${config.public.apiCountriesUrl}`)
    countries.value = response.data
  } catch (error) {
    console.error('Error fetching countries:', error)
    countries.value = []
  }

  watch(
    () => props.searchTerm,
    (newTerm) => {
      console.log('Search term updated in CountriesList:', newTerm)
    }
  )

  const filteredCountries = computed(() => {
    if (!countries.value || !props.searchTerm) {
      return countries.value || []
    }

    return countries.value.filter((country) =>
      country.value.toLowerCase().includes(props.searchTerm.toLowerCase())
    )
  })
</script>
