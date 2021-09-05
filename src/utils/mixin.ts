/*!
 * author: teamwei
 * date: 2021-08-20
 */

import router from '@/router'
import { state } from "vcat-history";
import { Notify, NotifyOptions } from "vant";
import { hideStatusBar, showStatusBar } from "@/utils/h5plus";

interface Mixin {
    backHome: (homePage: string) => void;
    notify: (options: NotifyOptions) => void;
}

export default function (): Mixin {
    let notifyTimer = 0;

    // 返回首页
    const backHome = (homePage = "/") => {
        // 计算退回首所需要的步数(根据历史页面数)
        const n = state.historyPages.length - 1;
        if (n > 0) {
            router.go(-n);
        } else {
            router.replace(homePage);
        }
    };

    // 消息通知
    const notify = (options: NotifyOptions) => {
        clearTimeout(notifyTimer);
        hideStatusBar();
        Notify({ ...options, duration: 3000 });

        notifyTimer = setTimeout(() => {
            showStatusBar();
        }, 3000)
    }

    return {
        backHome,
        notify
    };
}
