<template>
  <div class="form">
    <div style="display: flex">
      <div style="margin-right: 14px; flex: 1">
        <div>I am opening an issue for</div>
        <el-input
          v-model="path"
          placeholder="username/reponame"
          clearable
          size="medium"
          style="margin: 6px 0"
        ></el-input>
        <div>Please make sure to file the issue at appropriate repo.</div>
      </div>
      <div style="flex: 1">
        <div class="label-title">This is a</div>
        <div style="display: flex; margin: 6px 0">
          <router-link style="flex: 1" to="/bugReport">Bug Report</router-link>
          <router-link style="flex: 1" to="/featureRequest"
            >Feature Request</router-link
          >
        </div>
      </div>
    </div>
    <router-view />
    <div style="display: flex; justify-content: center; align-items: center">
      <el-button type="primary" style="margin-top: 14px">Preview</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BodyForm",
  data() {
    return {
      path: "",
      params: "",
    };
  },
  methods: {
    changeSelected(e: any) {
      console.log(e);
      e.target.classList.add("selected");
    },
    setPath(params: string) {
      this.params = params;
    },
  },
});
</script>

<style scoped>
.form {
  padding: 0 5px;
}

a {
  background-color: rgb(236, 245, 255);
  border-radius: 3px;
  font-size: 14px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* cursor: pointer; */
  text-decoration: none;
  color: #2c3e50;
}

a.active {
  background-color: #2c3e50;
  color: #fff;
}

input {
  background-color: #f7fcfa;
  border: 1px solid #e4f5ef;
  border-radius: 3px;
  outline: 0;
  height: 24px;
}

input:focus {
  background: #fff;
  border-bottom: 2px solid #e4f5ef;
}

.label-title {
  margin-bottom: 3px;
}

:deep() input.el-input__inner,
:deep() textarea.el-textarea__inner {
  background-color: rgb(236, 245, 255);
  text-align: center;
}

:deep() input.el-input__inner:focus,
:deep() textarea.el-textarea__inner:focus {
  background-color: white;
}

:deep() .el-button--primary {
  background-color: rgb(83, 168, 255);
}

:deep() .el-button span {
  color: #fff;
}
/* a:active {
  background-color: #2c3e50;
  color: #fff;
} */
/* a:visited {
  background-color: #2c3e50;
  color: #fff;
} */
.selected {
  background-color: #2c3e50;
  color: #fff;
}
</style>
