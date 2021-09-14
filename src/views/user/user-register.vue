<template>
    <cat-view class="user-register">
        <template #header>
            <cat-navbar title="注册"></cat-navbar>
        </template>
    </cat-view>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import { onBeforeRouteLeave } from "vue-router";
    import { Dialog } from "vant";

    export default defineComponent({
        name: "UserRegister",
        setup() {
            onBeforeRouteLeave((to, from, next) => {
                Dialog.confirm({
                    title: "提示",
                    message: "未保存，是否退出？",
                    closeOnPopstate: false,
                }).then(() => {
                    next();
                }).catch(() => {
                    next(false);
                });
            });
        },
    });
</script>

<style lang="less">
    @import "./user.less";
</style>
