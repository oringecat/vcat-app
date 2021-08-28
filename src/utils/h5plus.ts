/*!
 * ©teamwei.com
 * author: teamwei
 * date: 2021-08-18
 */

export interface HTML5 extends Window {
    plus?: any; // eslint-disable-line
}

//#region 另一种实现方式
//const onPlusReady = (callback: () => void): void => {
//  // call()、bind()重定义函数中的this对象
//  if (Object.prototype.hasOwnProperty.call(window, "plus")) {
//    callback.call(window);
//  } else {
//    document.addEventListener("plusready", callback.bind(window));
//  }
//};

//onPlusReady(function (this: HTML5) {
//  console.log(this.plus);
//});
//#endregion

export const onPlusReady = (callback: (plus: HTML5) => void): void => {
    if (Object.prototype.hasOwnProperty.call(window, "plus")) {
        callback(window);
    } else {
        document.addEventListener("plusready", () => {
            callback(window);
        });
    }
};

/**
 * 设置状态栏文字颜色
 * @param {string} color dark - 黑色，light - 白色
 */
export const setStatusBarStyle = (color: string): void => {
    onPlusReady((e) => {
        e.plus.navigator.setStatusBarStyle(color);
    });
};

/**
 * 隐藏状态栏
 */
export const hideStatusBar = (): void => {
    onPlusReady((e) => {
        e.plus.navigator.setFullscreen(true);
    });
}

/**
 * 显示状态栏
 */
export const showStatusBar = (): void => {
    onPlusReady((e) => {
        e.plus.navigator.setFullscreen(false);
    });
}

/**
 * 应用全屏
 */
export const setFullSreen = (): void => {
    onPlusReady((e) => {
        hideStatusBar();
        e.plus.navigator.hideSystemNavigation();
    });
}

/**
 * 应用退出全屏
 */
export const exitFullSreen = (): void => {
    onPlusReady((e) => {
        showStatusBar();
        e.plus.navigator.showSystemNavigation();
    });
}

/**
 * 调用第三方程序打开指定的URL
 */
export const openUrl = (url: string): void => {
    onPlusReady((e) => {
        e.plus.runtime.openURL(url);
    });
}