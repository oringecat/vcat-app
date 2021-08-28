/*!
 * ©teamwei.com
 * author: teamwei
 * date: 2021-07-29
 */

import { CompatVue, Component } from "vue";
import statusbar from "./statusbar/index.vue";
import navbar from "./navbar/index.vue";
import tabbar from "./tabbar/index.vue";
import guide from "./guide/index.vue";

const components = [statusbar, navbar, tabbar, guide];

const install: Component = (app: CompatVue) => {
  components.map((component) => {
    app.component(component.name, component); //注册全局组件
  });
};

export default {
  install,
};
