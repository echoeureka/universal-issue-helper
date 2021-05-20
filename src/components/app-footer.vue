<template>
  <div class="footer">
    inspired by&nbsp;
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
  font-size: 13px;
  text-align: center;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
  color: #158bb8;
  text-decoration: none;
  font-size: 13px;
}
</style>
