<template>
  <header
    class="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl border border-gray-800 bg-linear-to-r from-gray-900/95 to-gray-800/95 py-3 shadow-lg backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-5xl"
  >
    <div class="px-4">
      <div class="flex items-center justify-between">
        <!-- Logo - Hanya Nama -->
        <div class="flex shrink-0">
          <a aria-current="page" class="flex items-center" href="/">
            <span class="text-2xl font-bold text-gray-100">
              <span
                class="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              >
                Rafli
              </span>
              <span class="text-gray-300">H</span>
            </span>
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex md:items-center md:justify-center md:gap-5">
          <a
            class="inline-block rounded-lg px-3 py-2 text-sm font-medium text-gray-300 transition-all duration-200 hover:bg-linear-to-r hover:from-gray-800 hover:to-gray-700 hover:text-blue-400 hover:shadow-sm"
            href="#"
          >
            <div class="flex items-center gap-2">
              <svg
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              Home
            </div>
          </a>
          <a
            class="inline-block rounded-lg px-3 py-2 text-sm font-medium text-gray-300 transition-all duration-200 hover:bg-linear-to-r hover:from-gray-800 hover:to-gray-700 hover:text-blue-400 hover:shadow-sm"
            href="#hero-section"
          >
            <div class="flex items-center gap-2">
              <svg
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              About
            </div>
          </a>
          <a
            class="inline-block rounded-lg px-3 py-2 text-sm font-medium text-gray-300 transition-all duration-200 hover:bg-linear-to-r hover:from-gray-800 hover:to-gray-700 hover:text-blue-400 hover:shadow-sm"
            href="#projects"
          >
            <div class="flex items-center gap-2">
              <svg
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                />
              </svg>
              Projects
            </div>
          </a>
        </div>

        <!-- Desktop Button - Contact Me -->
        <div class="hidden md:flex md:items-center md:justify-end">
          <a
            class="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-150 hover:from-blue-500 hover:to-cyan-500 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            href="#contact"
          >
            <svg
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            Contact Me
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="inline-flex items-center justify-center rounded-xl bg-linear-to-r from-gray-800 to-gray-700 p-2.5 text-gray-300 transition-all duration-200 hover:from-gray-700 hover:to-gray-600 hover:text-blue-400 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 md:hidden"
          :aria-label="mobileMenuOpen ? 'Close main menu' : 'Open main menu'"
          :aria-expanded="mobileMenuOpen.toString()"
        >
          <svg
            v-if="!mobileMenuOpen"
            class="h-5 w-5 text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <svg
            v-else
            class="h-5 w-5 text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="mobileMenuOpen"
        class="mt-4 space-y-4 rounded-2xl border border-gray-700 bg-linear-to-b from-gray-900 to-gray-800/50 p-4 shadow-xl backdrop-blur-md md:hidden"
      >
        <div class="flex flex-col space-y-2">
          <a
            @click="mobileMenuOpen = false"
            class="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-gray-300 transition-all duration-200 hover:bg-linear-to-r hover:from-gray-800 hover:to-gray-700 hover:text-blue-400"
            href="#home"
          >
            <svg
              class="h-5 w-5 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            Home
          </a>
          <a
            @click="mobileMenuOpen = false"
            class="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-gray-300 transition-all duration-200 hover:bg-linear-to-r hover:from-gray-800 hover:to-gray-700 hover:text-blue-400"
            href="#about"
          >
            <svg
              class="h-5 w-5 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            About
          </a>
          <a
            @click="mobileMenuOpen = false"
            class="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-gray-300 transition-all duration-200 hover:bg-linear-to-r hover:from-gray-800 hover:to-gray-700 hover:text-blue-400"
            href="#projects"
          >
            <svg
              class="h-5 w-5 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
              />
            </svg>
            Projects
          </a>
        </div>
        <div class="pt-4">
          <a
            @click="mobileMenuOpen = false"
            class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-cyan-600 px-4 py-3 text-base font-semibold text-white shadow-lg transition-all duration-150 hover:from-blue-500 hover:to-cyan-500 hover:shadow-xl"
            href="#contact"
          >
            <svg
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            Contact Me
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>
