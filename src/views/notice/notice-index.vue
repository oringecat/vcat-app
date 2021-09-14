<template>
    <cat-view class="notice-index" inset>
        <template #header>
            <cat-navbar title="通知"></cat-navbar>
        </template>
        <van-button @click="toDetail" block>
            <template v-if="loginInfo.token">
                <span>消息列表</span>
            </template>
            <template v-else>
                <span>登录才能查看</span>
            </template>
        </van-button>
    </cat-view>
</template>

<script lang="ts">
    /*!
     * ©teamwei.com
     * author: teamwei
     * date: 2021-08-22
     */

    import { defineComponent, inject } from "vue";
    import { Button } from "vant";
    import router from "@/router";

    export default defineComponent({
        name: "NoticeIndex",
        components: {
            [Button.name]: Button,
        },
        setup() {
            const loginInfo = inject("loginInfo");

            const toDetail = () => {
                router.push({ name: "NoticeDetail", params: { id: 1 } });
            };

            return {
                loginInfo,
                toDetail,
            };
        },
    });
</script>

<style lang="less">
    @import "./notice.less";
</style>
