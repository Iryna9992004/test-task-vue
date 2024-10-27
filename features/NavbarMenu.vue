<template>
  <nav class="bg-blue-600 p-4 shadow-lg rounded-b-lg">
    <div class="container mx-auto flex justify-between items-center">
      <NuxtLink to="/" class="text-white text-2xl font-bold hover:text-gray-200">
        Country Holidays App
      </NuxtLink>

      <button class="text-white md:hidden focus:outline-none" @click="isOpen = !isOpen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div
        :class="{ block: isOpen, hidden: !isOpen }"
        class="w-full md:flex md:items-center md:w-auto"
      >
        <ul class="mt-4 md:flex md:space-x-6 md:mt-0">
          <li>
            <NuxtLink
              to="/"
              class="text-white text-lg block py-2 md:py-0 hover:text-gray-300 transition duration-200"
            >
              Home
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import { ref } from 'vue'
  const isOpen = ref(false)
</script>
