<template>
  <app-header />
  <app-body />
  <app-footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import AppBody from "./components/AppBody.vue";

export default defineComponent({
  name: "App",
  components: {
    AppHeader,
    AppBody,
    AppFooter,
  },
});
</script>
