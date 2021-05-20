<template>
  <div class="body">
    <body-tip />
    <body-form />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BodyTip from "./body-tip.vue";
import BodyForm from "./body-form.vue";

export default defineComponent({
  components: { BodyTip, BodyForm },
  name: "app-body",
  setup() {},
});
</script>

<style scoped>
.body {
  max-width: 900px;
  height: 800px;
  margin: 0 auto;
  /* background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%); */
}
</style>
