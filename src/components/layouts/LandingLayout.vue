<template>
  <main>
    <NavbarComponent />
    <RouterView />
    <FooterComponent />
  </main>
</template>

<script setup>
import { useRoute } from "vue-router";
import NavbarComponent from "../global/NavbarComponent.vue";
import FooterComponent from "../global/FooterComponent.vue";
</script>
