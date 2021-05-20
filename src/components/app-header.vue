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
  name: "app-header",
});
</script>

<style scoped>
.header {
  /* background-color: #eea2a4; */
  /* background-color: #f4fbf9; */
  background-color: #409eff;
  /* background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%); */
  /* background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%); */
  /* background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%); */
  height: 73px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #ffffff;
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
  color: #158bb8;
}
</style>
