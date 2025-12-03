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
            GET IN TOUCH
          </span>
          <div class="h-px w-12 bg-gray-700"></div>
        </div>

        <h2
          class="text-3xl md:text-4xl font-light text-gray-100 mb-4"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="150"
        >
          Let's <span class="text-blue-400 font-semibold">Work Together</span>
        </h2>

        <p
          class="text-gray-400 max-w-xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
        >
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
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-delay="250"
          >
            <div class="flex items-start mb-4">
              <div class="p-3 rounded-xl bg-blue-900/30 mr-4">
                <EnvelopeIcon class="w-6 h-6 text-blue-400" />
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
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-delay="300"
          >
            <div class="flex items-start mb-4">
              <div class="p-3 rounded-xl bg-green-900/30 mr-4">
                <MapPinIcon class="w-6 h-6 text-green-400" />
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
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-delay="350"
          >
            <div class="flex items-start mb-4">
              <div class="p-3 rounded-xl bg-purple-900/30 mr-4">
                <ClockIcon class="w-6 h-6 text-purple-400" />
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
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-delay="400"
          >
            <h3 class="text-lg font-semibold text-gray-100 mb-4">Connect with me</h3>
            <div class="flex space-x-4">
              <a
                href="https://github.com/Flidoang"
                target="_blank"
                class="p-3 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-gray-600 transition-colors group"
              >
                <Icon
                  icon="mdi:github"
                  class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/raflihendarsyah/"
                target="_blank"
                class="p-3 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-blue-600 transition-colors group"
              >
                <Icon
                  icon="mdi:linkedin"
                  class="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors"
                />
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div
          class="lg:col-span-2"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="250"
        >
          <div
            class="p-8 rounded-2xl border border-gray-800 bg-gray-800/30 backdrop-blur-sm"
          >
            <h3 class="text-2xl font-semibold text-gray-100 mb-6">Send me a message</h3>

            <!-- Netlify Form -->
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              @submit.prevent="handleSubmit"
              class="space-y-6"
            >
              <!-- Hidden Netlify Fields -->
              <input type="hidden" name="form-name" value="contact" />
              <p class="hidden">
                <label>
                  Don't fill this out if you're human:
                  <input name="bot-field" />
                </label>
              </p>

              <!-- Name & Email Row -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    v-model="form.name"
                    required
                    class="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="John Doe"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  />
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    v-model="form.email"
                    required
                    class="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="john@example.com"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="350"
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
                  name="subject"
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="Project inquiry"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="400"
                />
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  v-model="form.message"
                  required
                  rows="6"
                  class="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="450"
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="loading"
                class="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay="500"
              >
                <span v-if="!loading" class="flex items-center">
                  <PaperAirplaneIcon class="w-5 h-5 mr-2" />
                  Send Message
                </span>
                <span v-else class="flex items-center">
                  <ArrowPathIcon class="animate-spin w-5 h-5 mr-2" />
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
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <div class="flex items-center">
                  <CheckCircleIcon
                    v-if="message.type === 'success'"
                    class="w-5 h-5 mr-2"
                  />
                  <ExclamationTriangleIcon v-else class="w-5 h-5 mr-2" />
                  {{ message.text }}
                </div>
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
import { Icon } from "@iconify/vue";

// HeroIcons untuk UI icons
import {
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  PaperAirplaneIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/vue/24/outline";

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const loading = ref(false);
const message = ref(null);

const handleSubmit = async () => {
  // Validasi
  if (
    !form.value.name ||
    !form.value.email ||
    !form.value.subject ||
    !form.value.message
  ) {
    message.value = {
      type: "error",
      text: "Please fill in all required fields.",
    };
    return;
  }

  loading.value = true;
  message.value = null;

  try {
    // Encode form data untuk Netlify
    const formData = new FormData();
    formData.append("form-name", "contact");
    formData.append("name", form.value.name);
    formData.append("email", form.value.email);
    formData.append("subject", form.value.subject);
    formData.append("message", form.value.message);

    // Kirim ke Netlify
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });

    // Success message
    message.value = {
      type: "success",
      text: "Message sent successfully! I'll get back to you within 24 hours.",
    };

    // Reset form
    form.value = { name: "", email: "", subject: "", message: "" };
  } catch (error) {
    console.error("Form submission error:", error);
    message.value = {
      type: "error",
      text:
        "Failed to send message. Please try again or email me directly at raflihendarsyah738@gmail.com",
    };
  } finally {
    loading.value = false;
  }
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
