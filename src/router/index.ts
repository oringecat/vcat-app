import { createWebHashHistory, RouteRecordRaw } from "vue-router";
import { initRouter } from "vcat-history";
import { clearPending } from "@/api/service";
import { store } from "@/store";
import Page from "@/layouts/page/index.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/:catchAll(.*)",
        redirect: { name: "HomeIndex" },
    },
    {
        path: "/",
        redirect: "/home",
        component: Page,
        children: [
            {
                path: "",
                name: "HomeIndex",
                component: () => import("@/views/home/home-index.vue"),
            },
        ],
    },
    {
        path: "/user",
        component: Page,
        children: [
            {
                path: "",
                name: "UserIndex",
                component: () => import("@/views/user/user-index.vue"),
            },
            {
                path: "login",
                name: "UserLogin",
                component: () => import("@/views/user/user-login.vue"),
            },
            {
                path: "register",
                name: "UserRegister",
                component: () => import("@/views/user/user-register.vue"),
            },
        ],
    },
    {
        path: "/product",
        component: Page,
        children: [
            {
                path: "",
                name: "ProductIndex",
                component: () => import("@/views/product/product-index.vue"),
            },
            {
                path: "detail/:id",
                name: "ProductDetail",
                component: () => import("@/views/product/product-detail.vue"),
            },
        ],
    },
    {
        path: "/notice",
        component: Page,
        children: [
            {
                path: "",
                name: "NoticeIndex",
                component: () => import("@/views/notice/notice-index.vue"),
            },
            {
                path: "detail/:id",
                name: "NoticeDetail",
                component: () => import("@/views/notice/notice-detail.vue"),
                meta: {
                    requireAuth: true,
                },
            },
        ],
    },
];

const router = initRouter({
    history: createWebHashHistory(),
    routes,
});

//路由跳转之前调用
router.beforeEach((to, from, next) => {
    clearPending();

    const loginInfo = store.state.user.loginInfo;
    if (to.meta.requireAuth) {
        if (loginInfo.token) {
            next();
        } else {
            next({
                name: "UserLogin",
                query: { redirect: to.fullPath },
            });
        }
    } else {
        next();
    }
});

export default router;
