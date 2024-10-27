<template>
  <div>
    <div class="px-20 mb-20">
      <h1>Public Holidays in {{ countryName }}</h1>
      <div v-if="holidays.length">
        <HolidayCard
          v-for="holiday in holidays"
          :key="holiday.localName"
          :description="holiday.localName"
          :date="holiday.date"
        />
      </div>
      <div v-else>
        <p>No holidays found for this country.</p>
      </div>
    </div>

    <div
      class="fixed bottom-0 left-0 right-0 h-16 shadow-md w-full bg-blue-600 flex items-center justify-around p-4 z-20"
    >
      <button
        v-for="year in years"
        :key="year"
        class="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition duration-200"
        @click="handleYearClick(year)"
      >
        {{ year }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import axios from 'axios'
  import HolidayCard from '../../components/HolidayCard.vue'
  import { useRuntimeConfig } from '#app'

  const route = useRoute()

  const countryName = ref('')
  const config = useRuntimeConfig()
  const holidays = ref([])

  const years = Array.from({ length: 11 }, (_, i) => 2020 + i)

  const fetchHolidays = async (year?: number) => {
    try {
      const countryCode = route.params.countryCode
      countryName.value = countryCode.toUpperCase()

      const url = year
        ? `${config.public.apiCountryHolidays}/${year}/${countryCode}`
        : `${config.public.apiYearHoidays}/${countryCode}`

      const response = await axios.get(url)
      holidays.value = response.data
    } catch (error) {
      console.error('Error fetching holidays:', error)
      holidays.value = []
    }
  }

  const handleYearClick = (year: number) => {
    fetchHolidays(year)
  }

  onMounted(() => {
    fetchHolidays()
  })
</script>
