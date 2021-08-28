<template>
    <div class="home-index" :scroll-name="componentName">
        <keep-alive>
            <component class="home-index__warpper" :is="componentName"></component>
        </keep-alive>
        <cat-tabbar class="home-index__tabbar" v-model="tabList" @change="onChange"></cat-tabbar>
        <cat-guide v-if="bootAd"></cat-guide>
    </div>
</template>

<script lang="ts">
    /*!
     * ©teamwei.com
     * author: teamwei
     * date: 2021-08-21
     */

    import { defineComponent, ref, reactive } from "vue";
    import { localData } from "@/utils/storage";
    import index from "./home-main.vue";
    import mall from "./home-mall.vue";
    import cart from "./home-cart.vue";
    import mine from "./home-mine.vue";

    export default defineComponent({
        name: "HomeIndex",
        components: {
            index,
            mall,
            cart,
            mine,
        },
        setup() {
            const bootAd = ref(localData.get("bootAd"));
            const componentName = ref("index");
            const tabList = reactive([
                {
                    name: "index",
                    label: "首页",
                    icon: {
                        active: require("@/assets/icon/wap-home.svg"),
                        inactive: require("@/assets/icon/wap-home-o.svg"),
                    },
                },
                {
                    name: "mall",
                    label: "商城",
                },
                {
                    name: "cart",
                    label: "购物车",
                },
                {
                    name: "mine",
                    label: "我的",
                },
            ]);

            const onChange = (name: string) => {
                componentName.value = name;
            };

            return {
                bootAd,
                componentName,
                tabList,
                onChange,
            };
        },
    });
</script>

<style lang="less" scoped>
    @import "./home.less";
</style>
