<template>
  <section id="projects" class="py-20 md:py-28 bg-gray-900">
    <div class="px-4 mx-auto max-w-7xl">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up" data-aos-duration="600">
        <div
          class="inline-flex items-center space-x-3 mb-6"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
        >
          <div class="h-px w-8 bg-gray-700"></div>
          <span class="text-sm font-semibold tracking-widest text-gray-400 uppercase">
            PORTFOLIO
          </span>
          <div class="h-px w-8 bg-gray-700"></div>
        </div>

        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-6"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="150"
        >
          Featured <span class="text-blue-400">Projects</span>
        </h2>

        <p
          class="text-gray-400 max-w-2xl mx-auto text-lg"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
        >
          A selection of my recent work showcasing my skills in web development and
          design.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Project 1 -->
        <div
          class="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-900/20"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="100"
        >
          <!-- Project Image/Thumbnail -->
          <div
            class="relative h-48 overflow-hidden bg-linear-to-br from-blue-900/20 to-purple-900/20"
          >
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-4xl">🛒</div>
            </div>
            <!-- Tech badges overlay -->
            <div class="absolute top-4 left-4 flex gap-2">
              <span
                class="px-2 py-1 text-xs font-medium bg-blue-900/80 text-blue-300 rounded-md backdrop-blur-sm"
              >
                Flutter
              </span>
              <span
                class="px-2 py-1 text-xs font-medium bg-purple-900/80 text-purple-300 rounded-md backdrop-blur-sm"
              >
                Laravel
              </span>
            </div>
          </div>

          <!-- Project Content -->
          <div class="p-6">
            <h3
              class="text-xl font-bold text-gray-100 mb-2 group-hover:text-blue-400 transition-colors"
            >
              E-Commerce Platform App
            </h3>

            <p class="text-gray-400 text-sm mb-4">
              Full-stack e-commerce solution with user authentication, product management,
              and payment integration.
            </p>

            <!-- Project Features -->
            <ul class="space-y-1 mb-6">
              <li class="flex items-center text-sm text-gray-500">
                <CheckCircleIcon class="w-4 h-4 mr-2 text-green-500" />
                User Authentication & Authorization
              </li>
              <li class="flex items-center text-sm text-gray-500">
                <CheckCircleIcon class="w-4 h-4 mr-2 text-green-500" />
                Payment Gateway Integration
              </li>
              <li class="flex items-center text-sm text-gray-500">
                <CheckCircleIcon class="w-4 h-4 mr-2 text-green-500" />
                Admin Dashboard
              </li>
            </ul>

            <!-- Action Buttons -->
            <div class="flex gap-3">
              <a
                href="#"
                class="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
              >
                <EyeIcon class="w-4 h-4 mr-2" />
                Live Demo
              </a>
              <a
                href="#"
                class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-300 border border-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-colors"
              >
                <Icon icon="mdi:github" class="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <!-- Project 2 -->
        <div
          class="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-900/20"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="200"
        >
          <div
            class="relative h-48 overflow-hidden bg-linear-to-br from-purple-900/20 to-pink-900/20"
          >
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-4xl">📚</div>
            </div>
            <div class="absolute top-4 left-4 flex gap-2">
              <span
                class="px-2 py-1 text-xs font-medium bg-blue-900/80 text-blue-300 rounded-md backdrop-blur-sm"
              >
                Vue 3
              </span>
              <span
                class="px-2 py-1 text-xs font-medium bg-cyan-900/80 text-cyan-300 rounded-md backdrop-blur-sm"
              >
                Tailwind
              </span>
            </div>
          </div>

          <div class="p-6">
            <h3
              class="text-xl font-bold text-gray-100 mb-2 group-hover:text-purple-400 transition-colors"
            >
              Documentation Site
            </h3>

            <p class="text-gray-400 text-sm mb-4">
              Modern documentation portal with search functionality, dark mode, and
              interactive examples.
            </p>

            <ul class="space-y-1 mb-6">
              <li class="flex items-center text-sm text-gray-500">
                <CheckCircleIcon class="w-4 h-4 mr-2 text-green-500" />
                Full-text Search
              </li>
              <li class="flex items-center text-sm text-gray-500">
                <CheckCircleIcon class="w-4 h-4 mr-2 text-green-500" />
                Dark/Light Mode
              </li>
              <li class="flex items-center text-sm text-gray-500">
                <CheckCircleIcon class="w-4 h-4 mr-2 text-green-500" />
                Interactive Code Examples
              </li>
            </ul>

            <div class="flex gap-3">
              <a
                href="#"
                class="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-500 transition-colors"
              >
                <EyeIcon class="w-4 h-4 mr-2" />
                Live Demo
              </a>
              <a
                href="https://github.com/Izuchii1311/vue-learning/tree/frontend"
                target="_blank"
                class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-300 border border-gray-700 rounded-lg hover:border-purple-500 hover:text-purple-400 transition-colors"
              >
                <Icon icon="mdi:github" class="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <!-- Project 3 -->
        <div
          class="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-900/20"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="300"
        >
          <div
            class="relative h-48 overflow-hidden bg-linear-to-br from-green-900/20 to-emerald-900/20"
          >
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-4xl">📱</div>
            </div>
            <div class="absolute top-4 left-4 flex gap-2">
              <span
                class="px-2 py-1 text-xs font-medium bg-green-900/80 text-green-300 rounded-md backdrop-blur-sm"
              >
                Flutter
              </span>
              <span
                class="px-2 py-1 text-xs font-medium bg-orange-900/80 text-orange-300 rounded-md backdrop-blur-sm"
              >
                Firebase
              </span>
              <span
                class="px-2 py-1 text-xs font-medium bg-gray-900/80 text-gray-300 rounded-md backdrop-blur-sm"
              >
                IoT
              </span>
            </div>
          </div>

          <div class="p-6">
            <h3
              class="text-xl font-bold text-gray-100 mb-2 group-hover:text-green-400 transition-colors"
            >
              IoT Tracker App
            </h3>

            <p class="text-gray-400 text-sm mb-4">
              Real-time location tracking application with IoT device integration and live
              monitoring dashboard.
            </p>

            <ul class="space-y-1 mb-6">
              <li class="flex items-center text-sm text-gray-500">
                <CheckCircleIcon class="w-4 h-4 mr-2 text-green-500" />
                Real-time Location Tracking
              </li>
              <li class="flex items-center text-sm text-gray-500">
                <CheckCircleIcon class="w-4 h-4 mr-2 text-green-500" />
                IoT Device Integration
              </li>
              <li class="flex items-center text-sm text-gray-500">
                <CheckCircleIcon class="w-4 h-4 mr-2 text-green-500" />
                Live Dashboard & Analytics
              </li>
            </ul>

            <div class="flex gap-3">
              <a
                href="#"
                class="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-500 transition-colors"
              >
                <EyeIcon class="w-4 h-4 mr-2" />
                Live Demo
              </a>
              <a
                href="https://github.com/Flidoang/ta_project_arduino"
                target="_blank"
                class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-300 border border-gray-700 rounded-lg hover:border-green-500 hover:text-green-400 transition-colors"
              >
                <Icon icon="mdi:github" class="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- View All Projects Button -->
      <div
        class="text-center mt-16"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="400"
      >
        <a
          href="#all-projects"
          class="inline-flex items-center px-6 py-3 text-gray-300 border border-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-colors group"
        >
          <span>View All Projects</span>
          <ArrowRightIcon
            class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import {
  CheckCircleIcon,
  EyeIcon,
  CodeBracketIcon,
  ArrowRightIcon,
} from "@heroicons/vue/24/outline";
</script>
