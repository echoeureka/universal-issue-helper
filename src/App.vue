<template>
  <app-header />
  <app-body />
  <app-footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "./components/app-header.vue";
import AppFooter from "./components/app-footer.vue";
import AppBody from "./components/app-body.vue";

export default defineComponent({
  name: "App",
  components: {
    AppHeader,
    AppBody,
    AppFooter,
  },
});
</script>
