<template>
  <header class="header border-b border-gray-300 bg-gray-100">
    <div class="container">
      <div class="flex items-center py-3">
        <NuxtLink to="/" class="header-logo__link">
          <img src="/logo.png" alt="logo" class="w-12 h-12" />
        </NuxtLink>
        <nav class="flex items-center gap-x-8 ml-20">
          <NuxtLink class="text-sm font-semibold text-gray-500" to="/"
            >Запросы на слияние</NuxtLink
          >
          <NuxtLink class="text-sm font-semibold text-gray-500" to="/"
            >Проблемы</NuxtLink
          >
        </nav>
        <div class="ml-40">
          <input
            type="text"
            placeholder="Поиск..."
            class="w-96 rounded-lg shadow-sm px-3 py-2 focus:outline-none"
          />
        </div>
        <div class="flex items-center ml-auto">
          <div class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-gray-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </div>
          <div class="ml-8">
            <img src="/logo.png" alt="" class="h-8 w-8" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
