<template>
    <router-view></router-view>
</template>

<script lang="ts">
    import { defineComponent, onMounted, computed, provide } from "vue";
    import { store } from "@/store";
    import { getAppTheme } from "@/utils/mixin";

    export default defineComponent({
        name: "App",
        setup() {
            const loginInfo = computed(() => store.state.user.loginInfo);

            // 全局共享登陆信息
            provide("loginInfo", loginInfo);

            onMounted(() => {
                getAppTheme();
            })
        },
    });
</script>

<style lang="less">
    @import "./themes/style.less";
</style>
