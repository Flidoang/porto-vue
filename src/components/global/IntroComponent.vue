<template>
  <!-- Studio Intro Section - Full Viewport -->
  <section
    class="relative min-h-screen text-white overflow-hidden flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-black"
  >
    <!-- Background dengan pattern modern -->
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute inset-0"
        style="
          background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+');
          background-size: 100px 100px;
        "
      ></div>
    </div>

    <!-- Gradient overlay untuk depth -->
    <div
      class="absolute inset-0 bg-linear-to-t from-blue-900/10 via-transparent to-purple-900/10"
    ></div>

    <!-- Animated background elements dengan warna modern -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute top-1/4 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-1/4 -left-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"
      ></div>
    </div>

    <div class="relative z-10 px-6 mx-auto max-w-6xl w-full">
      <!-- Date & Time Info (seperti referensi) -->
      <div
        class="absolute top-8 left-6 right-6 flex justify-between items-center text-sm text-gray-400"
      >
        <div class="flex items-center space-x-2">
          <div
            class="w-6 h-6 border border-gray-600 rounded flex items-center justify-center"
          >
            <span class="text-xs">☐</span>
          </div>
          <span>{{ currentDay }}, {{ currentDate }}</span>
        </div>

        <div class="flex items-center space-x-4">
          <span>{{ currentTime }}</span>
          <span class="hidden md:inline">•</span>
          <span class="hidden md:inline">{{ weatherTemp }}°C</span>
        </div>
      </div>

      <!-- Main Content Container -->
      <div class="flex flex-col items-center justify-center min-h-[80vh] pt-16">
        <!-- Header dengan garis pembatas -->
        <div class="mb-12 md:mb-16 text-center">
          <div class="inline-flex items-center space-x-4 mb-6 md:mb-8">
            <div class="h-px w-8 md:w-12 bg-gray-600"></div>
            <h2
              class="text-xs md:text-sm font-semibold tracking-widest text-gray-400 uppercase"
            >
              WEBSITE PORTFOLIO
            </h2>
            <div class="h-px w-8 md:w-12 bg-gray-600"></div>
          </div>

          <h1
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 md:mb-8 leading-tight"
          >
            Designing <span class="text-blue-400">elegance</span
            ><br class="hidden sm:block" />
            from simplicity
          </h1>

          <div
            class="h-px w-16 md:w-24 mx-auto bg-linear-to-r from-transparent via-blue-400 to-transparent"
          ></div>
        </div>

        <!-- Konten utama -->
        <div class="max-w-2xl md:max-w-3xl mx-auto text-center px-4">
          <!-- Teks deskripsi utama -->
          <p class="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-6">
            A frontend developer passionate about creating clean, efficient, and
            user-friendly web interfaces with modern technologies.
          </p>

          <!-- Teks tambahan -->
          <p
            class="text-sm md:text-base text-gray-400 leading-relaxed max-w-xl mx-auto mb-10"
          >
            Specializing in Vue.js, modern JavaScript, and responsive design.
          </p>

          <!-- CTA Button - HANYA MOBILE -->
          <div class="mt-8 md:hidden">
            <button
              @click="scrollToHero"
              class="group px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-blue-500 hover:text-white transition-all duration-300 hover:scale-105 bg-gray-900/30 backdrop-blur-sm"
            >
              <span class="flex items-center">
                <span class="mr-2">Explore Portfolio</span>
                <svg
                  class="w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        <!-- Location & Status Info -->
        <div class="absolute bottom-8 left-0 right-0">
          <div
            class="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-500 px-6 space-y-4 md:space-y-0"
          >
            <!-- Location Info -->
            <div class="flex items-center space-x-4">
              <span class="text-gray-400">[Bandung • Indonesia]</span>
              <span class="hidden md:inline">•</span>
              <span class="hidden md:inline text-gray-400">[Available for work]</span>
            </div>

            <!-- Status Indicator -->
            <div class="flex items-center space-x-4">
              <div class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Online</span>
              </div>

              <div class="hidden md:block">•</div>

              <div>© {{ currentYear }} — RAFLI HENDARSYAH</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const currentYear = ref(new Date().getFullYear());
const currentTime = ref("");
const currentDay = ref("");
const currentDate = ref("");
const weatherTemp = ref("24"); // Static atau bisa di-fetch API

const updateDateTime = () => {
  const now = new Date();

  // Format time
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  currentTime.value = `${hours}:${minutes}`;

  // Format day
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  currentDay.value = days[now.getDay()];

  // Format date
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  currentDate.value = `${date} ${month} ${year}`;
};

let timer;

onMounted(() => {
  updateDateTime();
  timer = setInterval(updateDateTime, 60000); // Update setiap menit
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});

// Function untuk scroll ke hero section
const scrollToHero = () => {
  const heroSection = document.getElementById("hero-section");
  if (heroSection) {
    heroSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
</script>

<style scoped>
/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Custom animation untuk background elements */
@keyframes float-slow {
  0%,
  100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(-20px) translateX(10px);
  }
  66% {
    transform: translateY(10px) translateX(-10px);
  }
}

.absolute > div {
  animation: float-slow 15s ease-in-out infinite;
}

.absolute > div:nth-child(2) {
  animation-delay: -5s;
}

.absolute > div:nth-child(3) {
  animation-delay: -10s;
}

/* Glass effect untuk button */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
</style>
