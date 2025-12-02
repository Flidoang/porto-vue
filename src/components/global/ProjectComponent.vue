<template>
  <section id="projects" class="py-20 md:py-28 bg-gray-900">
    <div class="px-4 mx-auto max-w-7xl">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center space-x-3 mb-6">
          <div class="h-px w-8 bg-gray-700"></div>
          <span class="text-sm font-semibold tracking-widest text-gray-400 uppercase">
            PORTFOLIO
          </span>
          <div class="h-px w-8 bg-gray-700"></div>
        </div>

        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-6">
          Featured <span class="text-blue-400">Projects</span>
        </h2>

        <p class="text-gray-400 max-w-2xl mx-auto text-lg">
          A selection of my recent work showcasing my skills in web development and
          design.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Project 1 -->
        <div
          class="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-900/20"
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
                <svg
                  class="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                User Authentication & Authorization
              </li>
              <li class="flex items-center text-sm text-gray-500">
                <svg
                  class="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Payment Gateway Integration
              </li>
              <li class="flex items-center text-sm text-gray-500">
                <svg
                  class="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Admin Dashboard
              </li>
            </ul>

            <!-- Action Buttons -->
            <div class="flex gap-3">
              <a
                href="#"
                class="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
              >
                <svg
                  class="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                Live Demo
              </a>
              <a
                href="#"
                class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-300 border border-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-colors"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Project 2 -->
        <div
          class="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-900/20"
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
                <svg
                  class="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Full-text Search
              </li>
              <li class="flex items-center text-sm text-gray-500">
                <svg
                  class="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Dark/Light Mode
              </li>
              <li class="flex items-center text-sm text-gray-500">
                <svg
                  class="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Interactive Code Examples
              </li>
            </ul>

            <div class="flex gap-3">
              <a
                href="#"
                class="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-500 transition-colors"
              >
                <svg
                  class="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                Live Demo
              </a>
              <a
                href="https://github.com/Izuchii1311/vue-learning/tree/frontend"
                target="_blank"
                class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-300 border border-gray-700 rounded-lg hover:border-purple-500 hover:text-purple-400 transition-colors"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Project 3 -->
        <div
          class="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-900/20"
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
                <svg
                  class="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Real-time Location Tracking
              </li>
              <li class="flex items-center text-sm text-gray-500">
                <svg
                  class="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                IoT Device Integration
              </li>
              <li class="flex items-center text-sm text-gray-500">
                <svg
                  class="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Live Dashboard & Analytics
              </li>
            </ul>

            <div class="flex gap-3">
              <a
                href="#"
                class="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-500 transition-colors"
              >
                <svg
                  class="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                Live Demo
              </a>
              <a
                href="https://github.com/Flidoang/ta_project_arduino"
                target="_blank"
                class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-300 border border-gray-700 rounded-lg hover:border-green-500 hover:text-green-400 transition-colors"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- View All Projects Button -->
      <div class="text-center mt-16">
        <a
          href="#all-projects"
          class="inline-flex items-center px-6 py-3 text-gray-300 border border-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-colors group"
        >
          <span>View All Projects</span>
          <svg
            class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
