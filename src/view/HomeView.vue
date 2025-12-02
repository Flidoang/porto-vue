<template>
  <main class="min-h-screen">
    <IntroComponent />
    <HeroComponent />
    <ProjectComponent />
    <SkillComponents />
    <ContactComponent />
  </main>
</template>

<script setup>
import ContactComponent from "@/components/global/ContactComponent.vue";
import HeroComponent from "@/components/global/HeroComponent.vue";
import IntroComponent from "@/components/global/IntroComponent.vue";
import ProjectComponent from "@/components/global/ProjectComponent.vue";
import SkillComponents from "@/components/global/SkillComponents.vue";
</script>
