<template></template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "bug-report",
  props: ["setPath"],
  created() {
    this.setPath(this.$route.path);
  },
});
</script>

<style scoped></style>
