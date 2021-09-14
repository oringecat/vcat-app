/*!
 * author: teamwei
 * date: 2021-08-20
 */

import router from '@/router'
import { state } from "vcat-history";
import { Notify, NotifyOptions } from "vant";
import { hideStatusBar, showStatusBar, setStatusBarStyle } from "@/utils/h5plus";
import { localData } from "@/lib/storage";

let notifyTimer = 0;

// 消息通知
export const notify = (options: NotifyOptions): void => {
    clearTimeout(notifyTimer);
    hideStatusBar();
    Notify({ ...options, duration: 3000 });

    notifyTimer = setTimeout(() => {
        showStatusBar();
    }, 3000)
}

// 返回首页
export const backHome = (homePage = "/"): void => {
    // 计算退回首所需要的步数(根据历史页面数)
    const n = state.historyPages.length - 1;
    if (n > 0) {
        router.go(-n);
    } else {
        router.replace(homePage);
    }
};

// 切换主题样式
export const setAppTheme = (className: string, statusBarStyle: "dark" | "light"): void => {
    const classList = document.body.classList;

    classList.remove(localData.get("appTheme"));

    localData.set("appTheme", className);
    localData.set("statusBarStyle", statusBarStyle);

    classList.add(className);
    setStatusBarStyle(statusBarStyle);
}

// 获取当前主题
export const getAppTheme = (): void => {
    const classList = document.body.classList;
    classList.add(localData.get("appTheme"));
    setStatusBarStyle(localData.get("statusBarStyle"));
}

// 启用或禁用启动广告
export const setBootAd = (state: boolean): void => {
    localData.set("bootAd", state);
    if (state) {
        notify({ type: "success", message: "设置成功，下次启动看个够" });
    } else {
        notify({ type: "warning", message: "妈妈，我想看广告", background: "orange", });
    }
}