<template>
  <div>
    <div style="display: flex; margin-top: 14px">
      <div style="flex: 1; margin-right: 20px">
        <div>Version</div>
        <el-input
          v-model="version"
          size="medium"
          style="margin: 6px 0"
        ></el-input>
        <div style="color: #476582">
          Check if the issue is reproducible with the latest stable version.
        </div>
      </div>
      <div style="flex: 1">
        <div>Link to minimal reproduction</div>
        <el-input
          v-model="reproduction"
          size="medium"
          style="margin: 6px 0"
        ></el-input>
        <div style="color: #476582">
          If the reproduction does not need a build setup, please provide a link
          to a <a href="https://jsfiddle.net/">JSFiddle</a> ,
          <a href="https://jsfiddle.net/">JSBin</a> or
          <a href="https://jsfiddle.net/">CodePen</a>. If it requires a build
          setup, you can use <a href="https://jsfiddle.net/">CodeSandbox</a> or
          provide a <a href="https://github.com/">GitHub repo</a>.
          <div style="margin: 6px 0">
            <a href=""
              >What is a minimal reproduction, and why is it required?</a
            >
          </div>
          Please do not just fill in a random link. We will close your issue if
          you do that.
        </div>
      </div>
    </div>
    <div style="margin-top: 14px">Steps to reproduce</div>
    <el-input v-model="steps" type="textarea" style="margin: 6px 0" />
    <div style="color: #476582">
      What do we need to do after opening your repro in order to make the bug
      happen? Clear and concise reproduction instructions are important for us
      to be able to triage your issue in a timely manner. Note that you can use
      Markdown to format lists and code.
    </div>
    <div style="display: flex; margin-top: 14px">
      <div style="flex: 1; margin-right: 20px">
        <div>What is expected?</div>
        <el-input
          v-model="expecte"
          style="margin: 6px 0"
          type="textarea"
        ></el-input>
      </div>
      <div style="flex: 1">
        <div>What is actually happening?</div>
        <el-input
          v-model="happen"
          style="margin: 6px 0"
          type="textarea"
        ></el-input>
      </div>
    </div>
    <div style="margin-top: 14px">Any additional comments? (optional)</div>
    <el-input v-model="comments" type="textarea" style="margin: 6px 0" />
    <div style="color: #476582" @click="md">
      e.g. some background/context of how you ran into this bug.
    </div>
    <div style="padding: 10px" v-html="markdown"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import mdit from "markdown-it";

export default defineComponent({
  name: "BugReport",
  data() {
    return {
      version: "",
      reproduction: "",
      steps: "",
      expecte: "",
      happen: "",
      comments: "",
      markdown: {},
    };
  },
  methods: {
    md() {
      this.markdown = mdit({
        html: true,
        linkify: true,
        typographer: true,
      }).render(this.comments);
    },
  },
});
</script>

<style>
@import "../vue.css";
</style>
