import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import layouts from "./layouts";
import components from "./components";
import utils from "./utils";
import { onPlusReady } from "./utils/h5plus";
//import Vconsole from "vconsole";
//new Vconsole();

(function () {
  //监听手机返回键
  onPlusReady((h) => {
    let firstBack = true;
    const webview = h.plus.webview.currentWebview();

    h.plus.key.addEventListener("backbutton", () => {
      // eslint-disable-next-line
      webview.canBack((e: any) => {
        //判断能否继续返回
        if (e.canBack) {
          webview.back();
        } else {
          //1秒内连续两次按返回键退出应用
          if (firstBack) {
            firstBack = false;
            h.plus.nativeUI.toast("再按一次退出应用");
            setTimeout(() => {
              firstBack = true;
            }, 1000);
          } else {
            h.plus.runtime.quit();
          }
        }
      });
    });
  });

  //页面适配rem尺寸
  document.addEventListener(
    "DOMContentLoaded",
    () => {
      const design = 750;
      const docEl = document.documentElement;
      let clientWidth = docEl.clientWidth;

      if (utils.clientAgent.isPc) {
        clientWidth = design / 1.8;
        document.body.style.width = "540px";
      }

      if (clientWidth > 0) {
        docEl.style.fontSize = (clientWidth / design) * 100 + "px";
      }
    },
    false
  );
})();

const app = createApp(App);
app.use(router);
app.use(layouts);
app.use(components);
app.mount("#app");
