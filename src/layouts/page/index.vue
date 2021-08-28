<template>
    <router-view class="cat-page" v-slot="{ Component }">
        <transition :name="transitionName">
            <keep-alive :exclude="excludePages">
                <component :is="Component" :key="$route.fullPath" />
            </keep-alive>
        </transition>
    </router-view>
</template>

<script lang="ts">
    /*!
     * ©teamwei.com
     * author: teamwei
     * date: 2021-08-19
     */

    import { defineComponent, computed } from "vue";
    import { state } from "vcat-history";

    export default defineComponent({
        name: "CatPage",
        setup() {
            const transitionName = computed(() => state.transitionName);
            const excludePages = computed(() => state.excludePages);

            return {
                transitionName,
                excludePages,
            };
        },
    });
</script>

<style lang="less" scoped>
    @import "./index.less";
</style>
