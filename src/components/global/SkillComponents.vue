<template>
  <section id="skills" class="py-20 md:py-28 bg-gray-900 relative overflow-hidden">
    <!-- Background Elements - subtle -->
    <div class="absolute inset-0">
      <div
        class="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
      ></div>
    </div>

    <div class="relative z-10 px-4 mx-auto max-w-6xl">
      <!-- Section Header - Minimal -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center justify-center mb-6">
          <div class="h-px w-12 bg-gray-700"></div>
          <span
            class="mx-4 text-sm font-semibold tracking-widest text-gray-400 uppercase"
          >
            SKILLS & EXPERTISE
          </span>
          <div class="h-px w-12 bg-gray-700"></div>
        </div>

        <h2 class="text-3xl md:text-4xl font-light text-gray-100 mb-4">
          What I <span class="text-blue-400 font-semibold">Bring to the Table</span>
        </h2>

        <p class="text-gray-400 max-w-xl mx-auto">
          Technical skills combined with systematic approach to problem-solving.
        </p>
      </div>

      <!-- Skill Level Legend -->
      <div class="flex justify-center gap-6 mb-8 text-sm">
        <div class="flex items-center">
          <div class="w-3 h-3 rounded-full bg-green-600 mr-2"></div>
          <span class="text-gray-400">Advanced (3/4)</span>
        </div>
        <div class="flex items-center">
          <div class="w-3 h-3 rounded-full bg-yellow-600 mr-2"></div>
          <span class="text-gray-400">Intermediate (2/4)</span>
        </div>
        <div class="flex items-center">
          <div class="w-3 h-3 rounded-full bg-red-600 mr-2"></div>
          <span class="text-gray-400">Basic (1/4)</span>
        </div>
      </div>

      <!-- Main Skills Grid - 2 Columns -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <!-- Programming Skills -->
        <div class="space-y-6">
          <!-- Category Header -->
          <div class="flex items-center mb-2">
            <div class="p-2 rounded-lg bg-blue-900/30 mr-3">
              <svg
                class="w-6 h-6 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-100">Programming</h3>
          </div>

          <!-- Programming Skills -->
          <div class="space-y-4">
            <!-- Vue.js -->
            <div class="group">
              <div class="flex items-center justify-between mb-1">
                <span class="text-gray-300 font-medium">Vue.js</span>
                <span class="text-sm text-yellow-400">Intermediate</span>
              </div>
              <div class="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div class="h-full bg-yellow-600 rounded-full w-2/4"></div>
              </div>
            </div>

            <!-- JavaScript -->
            <div class="group">
              <div class="flex items-center justify-between mb-1">
                <span class="text-gray-300 font-medium">JavaScript</span>
                <span class="text-sm text-red-400">Basic</span>
              </div>
              <div class="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div class="h-full bg-red-600 rounded-full w-1/4"></div>
              </div>
            </div>

            <!-- Tailwind CSS -->
            <div class="group">
              <div class="flex items-center justify-between mb-1">
                <span class="text-gray-300 font-medium">Tailwind CSS</span>
                <span class="text-sm text-yellow-400">Intermediate</span>
              </div>
              <div class="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div class="h-full bg-yellow-600 rounded-full w-2/4"></div>
              </div>
            </div>

            <!-- Flutter -->
            <div class="group">
              <div class="flex items-center justify-between mb-1">
                <span class="text-gray-300 font-medium">Flutter</span>
                <span class="text-sm text-yellow-400">Intermediate</span>
              </div>
              <div class="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div class="h-full bg-yellow-600 rounded-full w-2/4"></div>
              </div>
            </div>

            <!-- Node.js -->
            <div class="group">
              <div class="flex items-center justify-between mb-1">
                <span class="text-gray-300 font-medium">Node.js</span>
                <span class="text-sm text-red-400">Basic</span>
              </div>
              <div class="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div class="h-full bg-red-600 rounded-full w-1/4"></div>
              </div>
            </div>

            <!-- HTML/CSS -->
            <div class="group">
              <div class="flex items-center justify-between mb-1">
                <span class="text-gray-300 font-medium">HTML/CSS</span>
                <span class="text-sm text-yellow-400">Intermediate</span>
              </div>
              <div class="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div class="h-full bg-yellow-600 rounded-full w-2/4"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- System Information -->
        <div class="space-y-6">
          <!-- Category Header -->
          <div class="flex items-center mb-2">
            <div class="p-2 rounded-lg bg-purple-900/30 mr-3">
              <svg
                class="w-6 h-6 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-100">System & Analysis</h3>
          </div>

          <!-- System Skills -->
          <div class="space-y-4">
            <!-- System Analysis -->
            <div class="group">
              <div class="flex items-center justify-between mb-1">
                <span class="text-gray-300 font-medium">System Analysis</span>
                <span class="text-sm text-yellow-400">Intermediate</span>
              </div>
              <div class="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div class="h-full bg-yellow-600 rounded-full w-2/4"></div>
              </div>
            </div>

            <!-- Project Management -->
            <div class="group">
              <div class="flex items-center justify-between mb-1">
                <span class="text-gray-300 font-medium">Project Management</span>
                <span class="text-sm text-green-400">Advanced</span>
              </div>
              <div class="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div class="h-full bg-green-600 rounded-full w-3/4"></div>
              </div>
            </div>

            <!-- Requirements Gathering -->
            <div class="group">
              <div class="flex items-center justify-between mb-1">
                <span class="text-gray-300 font-medium">Requirements Gathering</span>
                <span class="text-sm text-green-400">Advanced</span>
              </div>
              <div class="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div class="h-full bg-green-600 rounded-full w-3/4"></div>
              </div>
            </div>

            <!-- Database Design -->
            <div class="group">
              <div class="flex items-center justify-between mb-1">
                <span class="text-gray-300 font-medium">Database Design</span>
                <span class="text-sm text-yellow-400">Intermediate</span>
              </div>
              <div class="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div class="h-full bg-yellow-600 rounded-full w-2/4"></div>
              </div>
            </div>

            <!-- API Design -->
            <div class="group">
              <div class="flex items-center justify-between mb-1">
                <span class="text-gray-300 font-medium">API Design</span>
                <span class="text-sm text-yellow-400">Intermediate</span>
              </div>
              <div class="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div class="h-full bg-yellow-600 rounded-full w-2/4"></div>
              </div>
            </div>

            <!-- Documentation -->
            <div class="group">
              <div class="flex items-center justify-between mb-1">
                <span class="text-gray-300 font-medium">Technical Documentation</span>
                <span class="text-sm text-green-400">Advanced</span>
              </div>
              <div class="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div class="h-full bg-green-600 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tech Stack Carousel -->
      <div class="mb-16">
        <h3 class="text-lg font-semibold text-gray-300 mb-8 text-center">
          Technologies & Tools
        </h3>

        <div class="relative">
          <swiper
            :modules="[Autoplay]"
            :slides-per-view="2"
            :space-between="30"
            :autoplay="{
              delay: 0, // No delay for continuous scrolling
              disableOnInteraction: false,
              waitForTransition: false,
              pauseOnMouseEnter: true,
            }"
            :speed="8000"
            :loop="true"
            :loopAdditionalSlides="10"
            :breakpoints="carouselBreakpoints"
            class="tech-carousel"
          >
            <!-- Vue.js -->
            <swiper-slide>
              <div
                class="flex items-center justify-center p-4 rounded-xl border border-gray-800 bg-gray-800/30 hover:border-blue-500/50 transition-colors group h-24"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                  class="w-14 h-14 text-gray-400 group-hover:scale-110 transition-transform"
                  alt="Vue.js"
                />
              </div>
            </swiper-slide>

            <!-- JavaScript -->
            <swiper-slide>
              <div
                class="flex items-center justify-center p-4 rounded-xl border border-gray-800 bg-gray-800/30 hover:border-yellow-500/50 transition-colors group h-24"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  class="w-14 h-14 text-gray-400 group-hover:scale-110 transition-transform"
                  alt="JavaScript"
                />
              </div>
            </swiper-slide>

            <!-- Tailwind CSS -->
            <swiper-slide>
              <div
                class="flex items-center justify-center p-4 rounded-xl border border-gray-800 bg-gray-800/30 hover:border-cyan-500/50 transition-colors group h-24"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  class="w-14 h-14 text-gray-400 group-hover:scale-110 transition-transform"
                  alt="Tailwind CSS"
                />
              </div>
            </swiper-slide>

            <!-- Flutter -->
            <swiper-slide>
              <div
                class="flex items-center justify-center p-4 rounded-xl border border-gray-800 bg-gray-800/30 hover:border-blue-500/50 transition-colors group h-24"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                  class="w-14 h-14 text-gray-400 group-hover:scale-110 transition-transform"
                  alt="Flutter"
                />
              </div>
            </swiper-slide>

            <!-- Node.js -->
            <swiper-slide>
              <div
                class="flex items-center justify-center p-4 rounded-xl border border-gray-800 bg-gray-800/30 hover:border-green-500/50 transition-colors group h-24"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  class="w-14 h-14 text-gray-400 group-hover:scale-110 transition-transform"
                  alt="Node.js"
                />
              </div>
            </swiper-slide>

            <!-- HTML5 -->
            <swiper-slide>
              <div
                class="flex items-center justify-center p-4 rounded-xl border border-gray-800 bg-gray-800/30 hover:border-orange-500/50 transition-colors group h-24"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  class="w-14 h-14 text-gray-400 group-hover:scale-110 transition-transform"
                  alt="HTML5"
                />
              </div>
            </swiper-slide>

            <!-- CSS3 -->
            <swiper-slide>
              <div
                class="flex items-center justify-center p-4 rounded-xl border border-gray-800 bg-gray-800/30 hover:border-blue-500/50 transition-colors group h-24"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  class="w-14 h-14 text-gray-400 group-hover:scale-110 transition-transform"
                  alt="CSS3"
                />
              </div>
            </swiper-slide>

            <!-- Git -->
            <swiper-slide>
              <div
                class="flex items-center justify-center p-4 rounded-xl border border-gray-800 bg-gray-800/30 hover:border-red-500/50 transition-colors group h-24"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  class="w-14 h-14 text-gray-400 group-hover:scale-110 transition-transform"
                  alt="Git"
                />
              </div>
            </swiper-slide>

            <!-- VS Code -->
            <swiper-slide>
              <div
                class="flex items-center justify-center p-4 rounded-xl border border-gray-800 bg-gray-800/30 hover:border-blue-500/50 transition-colors group h-24"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                  class="w-14 h-14 text-gray-400 group-hover:scale-110 transition-transform"
                  alt="VS Code"
                />
              </div>
            </swiper-slide>

            <!-- Figma -->
            <swiper-slide>
              <div
                class="flex items-center justify-center p-4 rounded-xl border border-gray-800 bg-gray-800/30 hover:border-purple-500/50 transition-colors group h-24"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                  class="w-14 h-14 text-gray-400 group-hover:scale-110 transition-transform"
                  alt="Figma"
                />
              </div>
            </swiper-slide>

            <!-- MySQL -->
            <swiper-slide>
              <div
                class="flex items-center justify-center p-4 rounded-xl border border-gray-800 bg-gray-800/30 hover:border-blue-500/50 transition-colors group h-24"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                  class="w-14 h-14 text-gray-400 group-hover:scale-110 transition-transform"
                  alt="MySQL"
                />
              </div>
            </swiper-slide>

            <!-- PostgreSQL -->
            <swiper-slide>
              <div
                class="flex items-center justify-center p-4 rounded-xl border border-gray-800 bg-gray-800/30 hover:border-blue-500/50 transition-colors group h-24"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                  class="w-14 h-14 text-gray-400 group-hover:scale-110 transition-transform"
                  alt="PostgreSQL"
                />
              </div>
            </swiper-slide>

            <!-- ClickUp -->
            <swiper-slide>
              <div
                class="flex items-center justify-center p-4 rounded-xl border border-gray-800 bg-gray-800/30 hover:border-purple-500/50 transition-colors group h-24"
              >
                <div class="w-14 h-14 flex items-center justify-center">
                  <span
                    class="text-2xl font-bold text-gray-400 group-hover:text-purple-400 transition-colors"
                    >CU</span
                  >
                </div>
              </div>
            </swiper-slide>

            <!-- Jira -->
            <swiper-slide>
              <div
                class="flex items-center justify-center p-4 rounded-xl border border-gray-800 bg-gray-800/30 hover:border-blue-500/50 transition-colors group h-24"
              >
                <div class="w-14 h-14 flex items-center justify-center">
                  <span
                    class="text-2xl font-bold text-gray-400 group-hover:text-blue-400 transition-colors"
                    >J</span
                  >
                </div>
              </div>
            </swiper-slide>

            <!-- draw.io -->
            <swiper-slide>
              <div
                class="flex items-center justify-center p-4 rounded-xl border border-gray-800 bg-gray-800/30 hover:border-orange-500/50 transition-colors group h-24"
              >
                <div class="w-14 h-14 flex items-center justify-center">
                  <span
                    class="text-2xl font-bold text-gray-400 group-hover:text-orange-400 transition-colors"
                    >D</span
                  >
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

// Carousel breakpoints
const carouselBreakpoints = ref({
  320: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  480: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  640: {
    slidesPerView: 4,
    spaceBetween: 25,
  },
  768: {
    slidesPerView: 5,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 6,
    spaceBetween: 30,
  },
  1280: {
    slidesPerView: 8,
    spaceBetween: 30,
  },
});
</script>

<style>
/* Swiper Carousel Styles */
.tech-carousel {
  padding: 10px 5px 20px;
}

/* Continuous scrolling effect */
.tech-carousel .swiper-wrapper {
  transition-timing-function: linear !important;
}

/* Hide scrollbar for cleaner look */
.tech-carousel::-webkit-scrollbar {
  display: none;
}

/* Progress bar colors */
.bg-green-600 {
  background-color: #16a34a;
}

.bg-yellow-600 {
  background-color: #ca8a04;
}

.bg-red-600 {
  background-color: #dc2626;
}
</style>
