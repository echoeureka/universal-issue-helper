<template>
  <div class="body">
    <body-tip />
    <body-form />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BodyTip from "./BodyTip.vue";
import BodyForm from "./BodyForm.vue";

export default defineComponent({
  components: { BodyTip, BodyForm },
  name: "AppBody",
  setup() {},
});
</script>

<style scoped>
.body {
  width: 830px;
  margin: 0 auto;
}
</style>
