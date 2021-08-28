<template>
    <cat-view class="user-login">
        <template v-slot:header>
            <cat-navbar title="登录"></cat-navbar>
        </template>
        <van-cell-group title="李兔饼" inset>
            <van-field v-model="user.account"
                       label="用户名"
                       placeholder="请输入用户名" />
            <van-field type="password"
                       v-model="user.password"
                       label="密码"
                       placeholder="请输入密码" />
        </van-cell-group>
        <div style="margin: 16px 16px 0px">
            <van-button type="primary" @click="login" round block>登录失败</van-button>
            <van-button type="success" @click="loginSuccess" round block style="margin-top:16px">模拟登录成功</van-button>
        </div>
    </cat-view>
</template>

<script lang="ts">
    import { defineComponent, reactive, computed } from "vue";
    import { useRoute, useRouter, onBeforeRouteLeave } from "vue-router";
    import { Button, Field, CellGroup, Toast } from "vant";
    import { store } from "@/store";
    import { User, UserService } from "@/api/user";
    import mixin from "@/utils/mixin";

    export default defineComponent({
        name: "UserLogin",
        components: {
            [Button.name]: Button,
            [Field.name]: Field,
            [CellGroup.name]: CellGroup,
        },
        setup() {
            const { notify } = mixin();
            const route = useRoute();
            const router = useRouter();
            const user = reactive(new User());
            const loading = computed(() => store.state.app.loading);

            const login = () => {
                const toast = Toast.loading({
                    message: "正在登录...",
                    forbidClick: true,
                    duration: 0,
                });
                //请求接口
                UserService.login({
                    data: {
                        account: user.account,
                        passwordHash: user.getPasswordHash(),
                    },
                    success: (res) => {
                        notify({ type: "success", message: "登录成功" });
                        store.dispatch("user/setLoginInfo", res.data);

                        const redirect = route.query.redirect;
                        if (redirect) {
                            router.replace(redirect.toString());
                        } else {
                            router.go(-1);
                        }
                    },
                    fail: (err) => {
                        notify({ type: "danger", message: err.message });
                    },
                    complete: () => {
                        toast.clear();
                    }
                });
            };

            //登录中禁止返回
            onBeforeRouteLeave((to, from, next) => {
                if (loading.value) {
                    next(false);
                } else {
                    next();
                }
            });

            //模拟登录成功
            const loginSuccess = () => {
                const toast = Toast.loading({
                    message: "正在登录...",
                    forbidClick: true,
                    duration: 0,
                });

                setTimeout(() => {
                    store.dispatch("user/setLoginInfo", {
                        id: 1001,
                        account: "admin",
                        realname: "超级管理员",
                        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
                    });

                    toast.clear();
                    notify({ type: "success", message: "登录成功" });

                    const redirect = route.query.redirect;
                    if (redirect) {
                        router.replace(redirect.toString());
                    } else {
                        router.go(-1);
                    }
                }, 500);
            }

            return {
                user,
                login,
                loginSuccess
            };
        },
    });
</script>

<style lang="less">
    @import "./user.less";
</style>
