import { createRouter, createWebHashHistory } from "vue-router";
import BugReport from "./components/bug-report.vue";
import FeatureRequest from "./components/feature-request.vue";

const routes: any[] = [
  { path: "/", redirect: "/bug-report" },
  { path: "/bug-report", component: BugReport },
  { path: "/feature-request", component: FeatureRequest },
];

export const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});
