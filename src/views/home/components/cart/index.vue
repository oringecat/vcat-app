<template>
    <cat-view class="home-cart">
        <template v-slot:header>
            <cat-navbar title="购物车"></cat-navbar>
        </template>
        <van-notice-bar left-icon="volume-o" text="框架由 teamwei@李兔饼 构建，支持快速开发！有问题请留言或联系！" />
        <van-empty description="描述文字" />
    </cat-view>
</template>

<script lang="ts">
    /*!
     * ©teamwei.com
     * author: teamwei
     * date: 2021-08-21
     */

    import { defineComponent, onActivated } from "vue";
    import { Empty, NoticeBar } from "vant";

    export default defineComponent({
        name: "HomeCart",
        components: {
            [Empty.name]: Empty,
            [NoticeBar.name]: NoticeBar,
        },
        setup() {
            onActivated(() => {
                console.log("购物车");
            });
        },
    });
</script>

<style lang="less" scoped>
    @import "./index.less";
</style>
