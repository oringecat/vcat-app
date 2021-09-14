<template>
    <cat-view class="user-login">
        <template #header>
            <cat-navbar title="登录"></cat-navbar>
        </template>
        <h2 style="padding: 16px; font-size: .28rem; color: #455a6499;">用户登录</h2>
        <van-form @submit="login">
            <van-cell-group inset>
                <van-field v-model="user.account"
                           name="account"
                           label="用户名"
                           placeholder="请输入用户名"
                           :rules="[{ required: true, message: '随便输入' }]" />
                <van-field v-model="user.password"
                           name="password"
                           type="password"
                           label="密码"
                           placeholder="请输入密码"
                           :rules="[{ required: true, message: '随便输入' }]" />
            </van-cell-group>
            <div style="margin: 16px 16px 0px">
                <van-button type="primary" native-type="submit" round block>登录</van-button>
            </div>
        </van-form>
    </cat-view>
</template>

<script lang="ts">
    import { defineComponent, reactive, computed } from "vue";
    import { useRoute, useRouter, onBeforeRouteLeave } from "vue-router";
    import { Button, Field, CellGroup, Toast, Form } from "vant";
    import { store } from "@/store";
    import { User, UserService } from "@/api/user";
    import { notify } from "@/utils/mixin";

    export default defineComponent({
        name: "UserLogin",
        components: {
            [Form.name]: Form,
            [Button.name]: Button,
            [Field.name]: Field,
            [CellGroup.name]: CellGroup,
        },
        setup() {
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
                // 请求接口
                UserService.login({
                    data: {
                        account: user.account,
                        passwordHash: user.getPasswordHash(),
                    },
                    success: (res) => {
                        notify({ type: "success", message: "登录成功" });
                        store.dispatch("user/login", res.data);

                        // 等待 loading 结束
                        setTimeout(() => {
                            const redirect = route.query.redirect;
                            if (redirect) {
                                router.replace(redirect.toString());
                            } else {
                                router.go(-1);
                            }
                        }, 0);
                    },
                    fail: (err) => {
                        notify({ type: "danger", message: err.message });
                    },
                    complete: () => {
                        toast.clear();
                    }
                });
            };

            // 登录中禁止返回
            onBeforeRouteLeave((to, from, next) => {
                if (loading.value) {
                    next(false);
                } else {
                    next();
                }
            });

            return {
                user,
                login,
            };
        },
    });
</script>

<style lang="less">
    @import "./user.less";
</style>
