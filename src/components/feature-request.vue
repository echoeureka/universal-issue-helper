<template>
  <el-form label-width="100px" label-position="top" size="medium">
    <el-form-item label="issue title">
      <el-input class="input" />
    </el-form-item>
    <el-form-item label="what problem does this feature solve?">
      <el-input type="textarea" />
    </el-form-item>
    <el-form-item label="what does the proposed API look like?">
      <el-input type="textarea" />
    </el-form-item>
  </el-form>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "feature-request",
  setup() {},
  props: ["setPath"],
  created() {
    this.setPath(this.$route.path);
  },
});
</script>
<style scoped>
.input {
  background-color: #f7fcfa !important;
  border: 1px solid #e4f5ef;
  border-radius: 3px;
  outline: 0;
  height: 24px;
}

input:focus {
  background: #fff;
  border-bottom: 2px solid #e4f5ef;
}
</style>
