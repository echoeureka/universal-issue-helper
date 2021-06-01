<template>
  <div style="margin-top: 20px">
    <div>Issue title</div>
    <el-input class="input" size="medium" clearable style="margin: 6px 0" />
    <div style="margin-top: 14px">What problem does this feature solve?</div>
    <el-input type="textarea" style="margin: 6px 0" />
    <div style="color: #476582">
      Explain your use case, context, and rationale behind this feature request.
      More importantly, what is the <b>end user experience</b> you are trying to
      build that led to the need for this feature? An important design goal of
      Vue is keeping the API surface small and straightforward. In general, we
      only consider adding new features that solve a problem that cannot be
      easily dealt with using existing APIs (i.e. not just an alternative way of
      doing things that can already be done). The problem should also be common
      enough to justify the addition.
    </div>
    <div style="margin-top: 14px">What does the proposed API look like?</div>
    <el-input type="textarea" style="margin: 6px 0" />
    <div style="color: #476582">
      Describe how you propose to solve the problem and provide code samples of
      how the API would work once implemented. Note that you can use
      <a href="https://guides.github.com/features/mastering-markdown/"
        >Markdown</a
      >
      to format your code blocks.
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FeatureRequest",
});
</script>
<style scoped>
a {
  color: rgb(83, 168, 255);
  text-decoration: none;
}
</style>
