<template>
  <section
    id="hero-section"
    class="pt-20 md:pt-24 lg:pt-0 bg-linear-to-b from-gray-900 via-gray-800 to-gray-900"
  >
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div
        class="grid max-w-md grid-cols-1 mx-auto lg:grid-cols-12 gap-x-6 gap-y-8 lg:max-w-none lg:items-center lg:min-h-[calc(100vh-80px)]"
      >
        <!-- Kolom 1: Intro & CTA (Kiri) -->
        <div
          class="self-center lg:col-span-4 pt-8 md:pt-12 lg:pt-0"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <h1 class="text-3xl font-bold text-gray-100 sm:text-4xl xl:text-5xl">
            Hey 👋 I'm <span class="text-blue-400">Rafli Hendarsyah</span>
          </h1>
          <p
            class="mt-5 text-base font-normal leading-7 text-gray-400"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            Frontend Developer specializing in Vue.js & modern web applications.
            Passionate about creating clean, efficient, and user-friendly interfaces.
          </p>
          <div
            class="relative inline-flex mt-9 group"
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="300"
          >
            <div
              class="absolute transition-all duration-1000 opacity-70 inset-0 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"
            ></div>
            <a
              href="#contact"
              class="relative inline-flex items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900"
              role="button"
            >
              👋 Let's Connect
            </a>
          </div>
        </div>

        <!-- Kolom 2: Latest Projects/Picks (Tengah) -->
        <div
          class="self-end lg:order-last lg:pb-20 lg:col-span-3 pt-8 md:pt-12 lg:pt-0"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          <p class="text-xs font-bold tracking-widest text-gray-500 uppercase">
            ⚡️ Featured Projects
          </p>

          <div class="mt-6 space-y-6 lg:space-y-8">
            <!-- Project 1: E-Commerce App -->
            <div
              class="relative overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="500"
            >
              <div class="flex items-start lg:items-center">
                <div
                  class="flex items-center justify-center w-12 h-12 rounded-lg shrink-0 bg-linear-to-r from-blue-900/30 to-blue-800/20"
                >
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
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
                <p class="ml-5 text-base font-bold leading-6 text-gray-100">
                  <a
                    href="#projects"
                    title=""
                    class="hover:text-blue-400 transition-colors"
                  >
                    E-Commerce App
                    <span class="absolute inset-0" aria-hidden="true"></span>
                  </a>
                  <span class="block mt-1 text-sm font-normal text-gray-400"
                    >Flutter • Laravel</span
                  >
                </p>
              </div>
            </div>

            <!-- Project 2: Documentation Site -->
            <div
              class="relative overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="600"
            >
              <div class="flex items-start lg:items-center">
                <div
                  class="flex items-center justify-center w-12 h-12 rounded-lg shrink-0 bg-linear-to-r from-purple-900/30 to-purple-800/20"
                >
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <p class="ml-5 text-base font-bold leading-6 text-gray-100">
                  <a
                    href="#projects"
                    title=""
                    class="hover:text-purple-400 transition-colors"
                  >
                    Documentation Site
                    <span class="absolute inset-0" aria-hidden="true"></span>
                  </a>
                  <span class="block mt-1 text-sm font-normal text-gray-400"
                    >Vue 3 • Tailwind</span
                  >
                </p>
              </div>
            </div>

            <!-- Project 3: Tracker App integrated with IoT -->
            <div
              class="relative overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="700"
            >
              <div class="flex items-start lg:items-center">
                <div
                  class="flex items-center justify-center w-12 h-12 rounded-lg shrink-0 bg-linear-to-r from-green-900/30 to-green-800/20"
                >
                  <svg
                    class="w-6 h-6 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <p class="ml-5 text-base font-bold leading-6 text-gray-100">
                  <a
                    href="#projects"
                    title=""
                    class="hover:text-green-400 transition-colors"
                  >
                    Tracker App integrated with IoT
                    <span class="absolute inset-0" aria-hidden="true"></span>
                  </a>
                  <span class="block mt-1 text-sm font-normal text-gray-400"
                    >Flutter • Firebase • IoT(C++)</span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Kolom 3: Profile Picture (Kanan) -->
        <div
          class="self-end lg:col-span-5 pt-8 md:pt-12 lg:pt-0"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <div class="relative">
            <img
              class="w-full mx-auto rounded-lg border border-gray-700 transform hover:scale-[1.02] transition-transform duration-300"
              src="@/assets/rafli.png"
              alt="Rafli Hendarsyah - Frontend Developer"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="200"
            />
            <!-- Subtle glow effect -->
            <div class="absolute -inset-4 bg-blue-500/10 rounded-xl blur-xl -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
