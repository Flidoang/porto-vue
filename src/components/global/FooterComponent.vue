<template>
  <footer class="bg-gray-900 border-t border-gray-800">
    <div class="px-4 mx-auto max-w-6xl">
      <div class="py-12">
        <!-- Logo & Copyright -->
        <div class="text-center mb-8">
          <div class="inline-flex items-center justify-center mb-4">
            <span class="text-xl font-bold text-gray-100">
              <span class="text-blue-400">Rafli</span>H
            </span>
          </div>
          <p class="text-gray-500 text-sm">© {{ currentYear }} Rafli Hendarsyah</p>
        </div>

        <!-- Simple Links -->
        <div class="flex flex-wrap justify-center gap-6 mb-8">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="text-gray-400 hover:text-blue-400 transition-colors text-sm"
          >
            {{ link.name }}
          </a>
        </div>

        <!-- Simple Social -->
        <div class="flex justify-center space-x-4 mb-8">
          <a
            v-for="social in simpleSocial"
            :key="social.name"
            :href="social.url"
            target="_blank"
            class="text-gray-400 hover:text-white transition-colors"
            :aria-label="social.name"
          >
            <component :is="social.icon" class="w-4 h-4" />
          </a>
        </div>

        <!-- Status -->
        <div class="text-center">
          <div class="inline-flex items-center text-gray-500 text-sm">
            <div class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span>Available for freelance work</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import { Github, Linkedin, Mail } from "lucide-vue-next";

const currentYear = ref(new Date().getFullYear());

const navLinks = ref([
  { name: "Home", href: "#" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]);

const simpleSocial = ref([
  { name: "GitHub", url: "https://github.com/Flidoang", icon: Github },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/raflihendarsyah/",
    icon: Linkedin,
  },
  { name: "Email", url: "mailto:raflihendarsyah738@gmail.com", icon: Mail },
]);
</script>
