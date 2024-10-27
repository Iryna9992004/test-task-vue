<template>
  <div>
    <h2 class="text-xl font-semibold mb-4">Random Countries</h2>
    <CountryCard
      v-for="country in randomCountries"
      :key="country.key"
      :country="country.value"
      :country-key="country.key"
    />
  </div>
</template>

<script setup lang="ts">
  import axios from 'axios'
  import { ref, onMounted } from 'vue'
  import CountryCard from '../components/CountryCard'

  const randomCountries = ref([])

  onMounted(async () => {
    const { data } = await axios.get('https://date.nager.at/Api/v2/AvailableCountries')
    randomCountries.value = data.sort(() => 0.5 - Math.random()).slice(0, 3)
  })
</script>
