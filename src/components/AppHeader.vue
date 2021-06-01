<template>
  <div class="header">
    <div class="header-title">✨ Universal Issue Helper</div>
    <div class="header-tags">
      <span class="header-tag-en select">English</span>
      <span class="header-tag-zh">中文</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppHeader",
});
</script>

<style scoped>
.header {
  --blue-100: rgb(236, 245, 255);
  --blue-200: rgb(217, 236, 255);
  --blue-300: rgb(198, 226, 255);
  --blue-400: rgb(179, 216, 255);
  --blue-500: rgb(160, 207, 255);
  --blue-600: rgb(140, 197, 255);
  --blue-700: rgb(121, 187, 255);
  --blue-800: rgb(102, 177, 255);
  --blue-900: rgb(83, 168, 255);
  background-color: var(--blue-100);
  color: #2c3e50;
  height: 73px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-title {
  flex: 1;
}
.header-tags {
  flex: 1;
}
.header-tag-en {
  margin-right: 10px;
  cursor: pointer;
}

.header-tag-zh {
  cursor: pointer;
}

.select {
  color: var(--blue-900);
}
</style>
