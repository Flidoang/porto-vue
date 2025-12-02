<template>
  <section id="contact" class="py-20 md:py-28 bg-gray-900 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0">
      <div
        class="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
      ></div>
    </div>

    <div class="relative z-10 px-4 mx-auto max-w-6xl">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center justify-center mb-6">
          <div class="h-px w-12 bg-gray-700"></div>
          <span
            class="mx-4 text-sm font-semibold tracking-widest text-gray-400 uppercase"
          >
            GET IN TOUCH
          </span>
          <div class="h-px w-12 bg-gray-700"></div>
        </div>

        <h2 class="text-3xl md:text-4xl font-light text-gray-100 mb-4">
          Let's <span class="text-blue-400 font-semibold">Work Together</span>
        </h2>

        <p class="text-gray-400 max-w-xl mx-auto">
          Have a project in mind? I'd love to hear about it. Send me a message and let's
          create something amazing.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Contact Info Cards -->
        <div class="space-y-6">
          <!-- Email Card -->
          <div
            class="p-6 rounded-2xl border border-gray-800 bg-gray-800/30 backdrop-blur-sm"
          >
            <div class="flex items-start mb-4">
              <div class="p-3 rounded-xl bg-blue-900/30 mr-4">
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-100 mb-1">Email</h3>
                <a
                  href="mailto:raflihendarsyah738@gmail.com"
                  class="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  raflihendarsyah738@gmail.com
                </a>
              </div>
            </div>
            <p class="text-gray-400 text-sm">I'll respond within 24 hours</p>
          </div>

          <!-- Location Card -->
          <div
            class="p-6 rounded-2xl border border-gray-800 bg-gray-800/30 backdrop-blur-sm"
          >
            <div class="flex items-start mb-4">
              <div class="p-3 rounded-xl bg-green-900/30 mr-4">
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-100 mb-1">Location</h3>
                <p class="text-gray-300">Bandung, Indonesia</p>
              </div>
            </div>
            <p class="text-gray-400 text-sm">Available for remote work worldwide</p>
          </div>

          <!-- Availability Card -->
          <div
            class="p-6 rounded-2xl border border-gray-800 bg-gray-800/30 backdrop-blur-sm"
          >
            <div class="flex items-start mb-4">
              <div class="p-3 rounded-xl bg-purple-900/30 mr-4">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-100 mb-1">Availability</h3>
                <p class="text-gray-300">Open to opportunities</p>
              </div>
            </div>
            <p class="text-gray-400 text-sm">
              Currently available for freelance projects
            </p>
          </div>

          <!-- Social Links -->
          <div
            class="p-6 rounded-2xl border border-gray-800 bg-gray-800/30 backdrop-blur-sm"
          >
            <h3 class="text-lg font-semibold text-gray-100 mb-4">Connect with me</h3>
            <div class="flex space-x-4">
              <a
                href="https://github.com/Flidoang"
                target="_blank"
                class="p-3 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-gray-600 transition-colors group"
              >
                <svg
                  class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/raflihendarsyah/"
                target="_blank"
                class="p-3 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-blue-600 transition-colors group"
              >
                <svg
                  class="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com/rafli"
                target="_blank"
                class="p-3 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-blue-400 transition-colors group"
              >
                <svg
                  class="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                  />
                </svg>
              </a>
              <a
                href="https://instagram.com/rafli"
                target="_blank"
                class="p-3 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-pink-500 transition-colors group"
              >
                <svg
                  class="w-5 h-5 text-gray-400 group-hover:text-pink-400 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 11a4 4 0 11-8 0 4 4 0 018 0zM12 14a9 9 0 10-5.197-2.635M12 14v6m0 0l3-3m-3 3l-3-3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="lg:col-span-2">
          <div
            class="p-8 rounded-2xl border border-gray-800 bg-gray-800/30 backdrop-blur-sm"
          >
            <h3 class="text-2xl font-semibold text-gray-100 mb-6">Send me a message</h3>

            <form @submit.prevent="submitForm" class="space-y-6">
              <!-- Name & Email Row -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    v-model="form.name"
                    required
                    class="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    required
                    class="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <!-- Subject -->
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="Project inquiry"
                />
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="6"
                  class="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="loading"
                class="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <span v-if="!loading">Send Message</span>
                <span v-else class="flex items-center">
                  <svg
                    class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              </button>

              <!-- Success/Error Message -->
              <div
                v-if="message"
                :class="[
                  'p-4 rounded-lg',
                  message.type === 'success'
                    ? 'bg-green-900/30 text-green-400 border border-green-800'
                    : 'bg-red-900/30 text-red-400 border border-red-800',
                ]"
              >
                {{ message.text }}
              </div>
            </form>

            <p class="text-gray-400 text-sm mt-6">
              By submitting this form, you agree to our privacy policy. I'll never share
              your information with third parties.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const loading = ref(false);
const message = ref(null);

const submitForm = async () => {
  // SIMULASI AJA DULU - untuk development
  loading.value = true;
  message.value = null;

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Success simulation
  message.value = {
    type: "success",
    text:
      "Message sent successfully! (This is a simulation. For real submission, setup EmailJS or deploy to Netlify)",
  };

  // Reset form
  form.value = { name: "", email: "", subject: "", message: "" };

  loading.value = false;
};
</script>

<style scoped>
/* Custom focus styles */
input:focus,
textarea:focus {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Smooth transitions */
input,
textarea,
button {
  transition: all 0.2s ease;
}

/* Loading animation */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
