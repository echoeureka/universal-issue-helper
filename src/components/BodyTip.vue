<template>
  <div class="tip">
    <div style="font-size: 20px">Before You Start...</div>
    <div>
      The issue list is reserved exclusively for bug reports and feature
      requests. That means we do not accept usage questions. If you open an
      issue that does not conform to the requirements,
      <strong>it will be closed immediately.</strong>
      <p><a>Why are we so strict about this?</a></p>
    </div>
    <div class="list-container">
      For usage questions, please use the following resources:
      <ul class="list">
        <li>Read the docs</li>
        <li>Watch video tutorials</li>
        <li>Ask on the forums</li>
        <li>Ask on the chat</li>
        <li>
          Look for / ask questions on
          <a href="https://stackoverflow.com/"> Stack Overflow</a>
        </li>
      </ul>
    </div>
    <p>
      Also try to search for your issue - it may have already been answered or
      even fixed in the development branch. However, if you find that an old,
      closed issue still persists in the latest version, you should open a new
      issue using the form below instead of commenting on the old issue.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BodyTip",
});
</script>

<style scoped>
.tip {
  background-color: rgb(236, 245, 255);
  padding: 24px;
  margin: 24px 0;
  border-radius: 7px;
  color: #2c3e50;
  font-size: 10px;
}
.list-container {
  margin-top: 10px;
}
.list {
  margin-top: 5px;
  margin-bottom: 10px;
  margin-left: 40px;
}
a {
  color: rgb(83, 168, 255);
  text-decoration: none;
}
</style>
