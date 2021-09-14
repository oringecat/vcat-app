import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import validate from "./utils/validate"; // 表单验证指令
import layouts from "./layouts"; // 布局组件
import components from "./components"; // 通用组件
import { clientAgent } from "./utils"; // 工具类
import { onPlusReady } from "./utils/h5plus";
import "./mock" // 模拟数据
//import Vconsole from "vconsole";
//new Vconsole();

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
document.addEventListener("DOMContentLoaded", () => {
    const design = 750;
    const docEl = document.documentElement;
    let clientWidth = docEl.clientWidth;

    if (clientAgent.isPc) {
        clientWidth = design / 1.8;
        document.body.style.width = "540px";
    }

    if (clientWidth > 0) {
        docEl.style.fontSize = (clientWidth / design) * 100 + "px";
    }
}, false);

const app = createApp(App);
app.use(router);
app.use(validate);
app.use(layouts);
app.use(components);
app.mount("#app");
