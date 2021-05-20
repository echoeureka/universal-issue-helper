<template>
  <div class="form">
    <div style="display: flex">
      <div style="flex: 1">
        <div style="display: flex">
          <span class="label-title">repo username</span>
          <input type="text" />
        </div>
        <div style="display: flex">
          <span class="label-title">repo name</span>
          <input type="text" />
        </div>
      </div>

      <div style="flex: 1">
        <div class="label-title">This is a</div>
        <div style="display: flex">
          <router-link
            style="flex: 1"
            to="/bug-report"
            :class="{ active: path === '/bug-report' }"
            >Bug Report</router-link
          >
          <router-link
            style="flex: 1"
            to="/feature-request"
            :class="{ active: path === '/feature-request' }"
            >Feature Request</router-link
          >
        </div>
      </div>
    </div>

    <router-view :setPath="setPath"></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {} from "vue-router";

export default defineComponent({
  name: "body-form",
  data() {
    return {
      path: "",
    };
  },
  methods: {
    changeSelected(e: any) {
      console.log(e);
      e.target.classList.add("selected");
    },
    setPath(path: string) {
      this.path = path;
    },
  },
});
</script>

<style scoped>
.form {
  padding: 0 24px;
}

a {
  background-color: #f4fbf9;
  padding: 8px 66px;
  border-radius: 3px;
  font-size: 14px;
  height: 32px;
  cursor: pointer;
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

/* a:active {
  background-color: #2c3e50;
  color: #fff;
} */
/* a:visited {
  background-color: #2c3e50;
  color: #fff;
} */
/* .selected {
  background-color: #2c3e50;
  color: #fff;
} */
</style>
