<template>
  <div class="footer">
    Inspired by&nbsp;
    <a href="https://github.com/vuejs/vue-issue-helper">vue-issue-helper</a
    >&nbsp;and&nbsp;
    <a href="https://github.com/ecomfe/echarts-issue-helper"
      >echarts-issue-helper</a
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "app-footer",
});
</script>

<style scoped>
.footer {
  margin-top: 42px;
  font-size: 13px;
  text-align: center;
  height: 27px;
}
a {
  color: rgb(83, 168, 255);
  text-decoration: none;
  font-size: 14px;
}
</style>
