<template>
    <cat-view class="home-mall" inset>
        <template #header>
            <cat-navbar title="商城"></cat-navbar>
        </template>
        <van-grid :column-num="3">
            <van-grid-item icon="photo-o" text="商品" :to="{ name: 'ProductIndex' }" v-for="index in 6" :key="index" />
        </van-grid>
        <van-button @click="adSetting" color="linear-gradient(to right, #ff6034, #ee0a24)" block>广告设置</van-button>
        <van-button @click="showAction = true" plain block>更换主题</van-button>
        <van-action-sheet v-model:show="showAction" :actions="actions" teleport="body" cancel-text="取消" @select="onSelect" />
    </cat-view>
</template>

<script lang="ts">
    /*!
     * ©teamwei.com
     * author: teamwei
     * date: 2021-08-21
     */

    import { defineComponent, ref } from "vue";
    import { Grid, GridItem, Button, ActionSheet, Dialog } from "vant";
    import { setAppTheme, setBootAd } from "@/utils/mixin";

    export default defineComponent({
        name: "HomeMall",
        components: {
            [Grid.name]: Grid,
            [GridItem.name]: GridItem,
            [Button.name]: Button,
            [ActionSheet.name]: ActionSheet,
        },
        setup() {
            const showAction = ref(false)
            const actions = [
                { name: '浅色' },
                { name: '深色' },
            ];

            const onSelect = (item: { name: string }) => {
                switch (item.name) {
                    case "浅色":
                        setAppTheme("theme-default", "dark");
                        break;
                    case "深色":
                        setAppTheme("theme-dark", "light");
                        break;
                }
                showAction.value = false;
            };

            const adSetting = () => {
                Dialog.confirm({
                    title: "设置",
                    message: "请选择关闭或打开广告",
                    cancelButtonText: "关闭",
                    confirmButtonText: "打开",
                    closeOnPopstate: false,
                }).then(() => {
                    setBootAd(true);
                }).catch(() => {
                    setBootAd(false);
                });
            }

            return {
                showAction,
                adSetting,
                actions,
                onSelect
            };
        },
    });
</script>

<style lang="less">
    @import "./index.less";
</style>
