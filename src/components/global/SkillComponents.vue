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
      <div class="text-center mb-16" data-aos="fade-up" data-aos-duration="600">
        <div
          class="inline-flex items-center justify-center mb-6"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
        >
          <div class="h-px w-12 bg-gray-700"></div>
          <span
            class="mx-4 text-sm font-semibold tracking-widest text-gray-400 uppercase"
          >
            SKILLS & EXPERTISE
          </span>
          <div class="h-px w-12 bg-gray-700"></div>
        </div>

        <h2
          class="text-3xl md:text-4xl font-light text-gray-100 mb-4"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="150"
        >
          What I <span class="text-blue-400 font-semibold">Bring to the Table</span>
        </h2>

        <p
          class="text-gray-400 max-w-xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
        >
          Technical skills combined with systematic approach to problem-solving.
        </p>
      </div>

      <!-- Skill Level Legend -->
      <div
        class="flex justify-center gap-6 mb-8 text-sm"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="250"
      >
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
        <div
          class="space-y-6"
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-delay="300"
        >
          <!-- Category Header -->
          <div class="flex items-center mb-2">
            <div class="p-2 rounded-lg bg-blue-900/30 mr-3">
              <CodeBracketIcon class="w-6 h-6 text-blue-400" />
            </div>
            <h3 class="text-xl font-semibold text-gray-100">Programming</h3>
          </div>

          <!-- Programming Skills -->
          <div class="space-y-4">
            <div
              v-for="(skill, index) in programmingSkills"
              :key="skill.name"
              class="group"
              :data-aos="'fade-right'"
              :data-aos-duration="600"
              :data-aos-delay="300 + index * 50"
            >
              <div class="flex items-center justify-between mb-1">
                <span class="text-gray-300 font-medium">{{ skill.name }}</span>
                <span :class="skill.levelClass">{{ skill.level }}</span>
              </div>
              <div class="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  :class="skill.barColorClass"
                  class="h-full rounded-full"
                  :style="{ width: skill.width }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- System Information -->
        <div
          class="space-y-6"
          data-aos="fade-left"
          data-aos-duration="700"
          data-aos-delay="350"
        >
          <!-- Category Header -->
          <div class="flex items-center mb-2">
            <div class="p-2 rounded-lg bg-purple-900/30 mr-3">
              <ShieldCheckIcon class="w-6 h-6 text-purple-400" />
            </div>
            <h3 class="text-xl font-semibold text-gray-100">System & Analysis</h3>
          </div>

          <!-- System Skills -->
          <div class="space-y-4">
            <div
              v-for="(skill, index) in systemSkills"
              :key="skill.name"
              class="group"
              :data-aos="'fade-left'"
              :data-aos-duration="600"
              :data-aos-delay="350 + index * 50"
            >
              <div class="flex items-center justify-between mb-1">
                <span class="text-gray-300 font-medium">{{ skill.name }}</span>
                <span :class="skill.levelClass">{{ skill.level }}</span>
              </div>
              <div class="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  :class="skill.barColorClass"
                  class="h-full rounded-full"
                  :style="{ width: skill.width }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tech Stack Carousel -->
      <div class="mb-16" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
        <h3 class="text-lg font-semibold text-gray-300 mb-8 text-center">
          Technologies & Tools
        </h3>

        <div class="relative">
          <swiper
            :modules="[Autoplay]"
            :slides-per-view="2"
            :space-between="30"
            :autoplay="{
              delay: 0,
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
            <swiper-slide v-for="tech in technologies" :key="tech.name">
              <div
                :class="`flex items-center justify-center p-4 rounded-xl border border-gray-800 bg-gray-800/30 hover:border-${tech.color}-500/50 transition-colors group h-24`"
              >
                <!-- Use local SVG if available, otherwise use text fallback -->
                <div
                  v-if="tech.localIcon"
                  class="w-14 h-14 flex items-center justify-center"
                >
                  <component
                    :is="tech.localIcon"
                    :class="`w-full h-full text-gray-400 group-hover:text-${tech.color}-400 transition-colors`"
                  />
                </div>
                <!-- Text fallback for tools without SVG -->
                <div v-else class="w-14 h-14 flex items-center justify-center">
                  <span
                    :class="`text-2xl font-bold text-gray-400 group-hover:text-${tech.color}-400 transition-colors`"
                  >
                    {{ tech.fallbackText }}
                  </span>
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

// HeroIcons imports
import {
  CodeBracketIcon,
  ShieldCheckIcon,
  CodeBracketSquareIcon,
  ServerStackIcon,
  CommandLineIcon,
  CpuChipIcon,
  CircleStackIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
  PaintBrushIcon,
  DevicePhoneMobileIcon,
  CubeIcon,
  CloudIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,
  ComputerDesktopIcon,
  FolderIcon,
  PuzzlePieceIcon,
  ClockIcon,
  DocumentMagnifyingGlassIcon,
  QueueListIcon,
  TableCellsIcon,
  ArrowsPointingOutIcon,
  LinkIcon,
  BookOpenIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/vue/24/outline";

// Import Swiper styles
import "swiper/css";

// Carousel breakpoints
const carouselBreakpoints = ref({
  320: { slidesPerView: 2, spaceBetween: 15 },
  480: { slidesPerView: 3, spaceBetween: 20 },
  640: { slidesPerView: 4, spaceBetween: 25 },
  768: { slidesPerView: 5, spaceBetween: 30 },
  1024: { slidesPerView: 6, spaceBetween: 30 },
  1280: { slidesPerView: 8, spaceBetween: 30 },
});

// Programming Skills Data
const programmingSkills = ref([
  {
    name: "Vue.js",
    level: "Intermediate",
    levelClass: "text-sm text-yellow-400",
    barColorClass: "bg-yellow-600",
    width: "50%",
  },
  {
    name: "JavaScript",
    level: "Basic",
    levelClass: "text-sm text-red-400",
    barColorClass: "bg-red-600",
    width: "25%",
  },
  {
    name: "Tailwind CSS",
    level: "Intermediate",
    levelClass: "text-sm text-yellow-400",
    barColorClass: "bg-yellow-600",
    width: "50%",
  },
  {
    name: "Flutter",
    level: "Intermediate",
    levelClass: "text-sm text-yellow-400",
    barColorClass: "bg-yellow-600",
    width: "50%",
  },
  {
    name: "Node.js",
    level: "Basic",
    levelClass: "text-sm text-red-400",
    barColorClass: "bg-red-600",
    width: "25%",
  },
  {
    name: "HTML/CSS",
    level: "Intermediate",
    levelClass: "text-sm text-yellow-400",
    barColorClass: "bg-yellow-600",
    width: "50%",
  },
]);

// System Skills Data
const systemSkills = ref([
  {
    name: "System Analysis",
    level: "Intermediate",
    levelClass: "text-sm text-yellow-400",
    barColorClass: "bg-yellow-600",
    width: "50%",
  },
  {
    name: "Project Management",
    level: "Advanced",
    levelClass: "text-sm text-green-400",
    barColorClass: "bg-green-600",
    width: "75%",
  },
  {
    name: "Requirements Gathering",
    level: "Advanced",
    levelClass: "text-sm text-green-400",
    barColorClass: "bg-green-600",
    width: "75%",
  },
  {
    name: "Database Design",
    level: "Intermediate",
    levelClass: "text-sm text-yellow-400",
    barColorClass: "bg-yellow-600",
    width: "50%",
  },
  {
    name: "API Design",
    level: "Intermediate",
    levelClass: "text-sm text-yellow-400",
    barColorClass: "bg-yellow-600",
    width: "50%",
  },
  {
    name: "Technical Documentation",
    level: "Advanced",
    levelClass: "text-sm text-green-400",
    barColorClass: "bg-green-600",
    width: "75%",
  },
]);

// Technologies Data with Local Icons
const technologies = ref([
  {
    name: "Vue.js",
    color: "blue",
    localIcon: CodeBracketSquareIcon,
  },
  {
    name: "JavaScript",
    color: "yellow",
    localIcon: CodeBracketIcon,
  },
  {
    name: "Tailwind CSS",
    color: "cyan",
    localIcon: PaintBrushIcon,
  },
  {
    name: "Flutter",
    color: "blue",
    localIcon: DevicePhoneMobileIcon,
  },
  {
    name: "Node.js",
    color: "green",
    localIcon: ServerStackIcon,
  },
  {
    name: "HTML5",
    color: "orange",
    localIcon: CommandLineIcon,
  },
  {
    name: "CSS3",
    color: "blue",
    localIcon: PaintBrushIcon,
  },
  {
    name: "Git",
    color: "red",
    localIcon: CubeIcon,
  },
  {
    name: "VS Code",
    color: "blue",
    localIcon: ComputerDesktopIcon,
  },
  {
    name: "Figma",
    color: "purple",
    localIcon: BeakerIcon,
  },
  {
    name: "MySQL",
    color: "blue",
    localIcon: CircleStackIcon,
  },
  {
    name: "PostgreSQL",
    color: "blue",
    localIcon: CircleStackIcon,
  },
  {
    name: "ClickUp",
    color: "purple",
    fallbackText: "CU",
  },
  {
    name: "Jira",
    color: "blue",
    fallbackText: "J",
  },
  {
    name: "draw.io",
    color: "orange",
    fallbackText: "D",
  },
]);
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
