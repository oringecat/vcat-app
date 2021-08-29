<template>
    <cat-view class="home-mall" inset>
        <template v-slot:header>
            <cat-navbar title="商城"></cat-navbar>
        </template>
        <van-grid :column-num="3">
            <van-grid-item icon="photo-o" text="商品" :to="{ name: 'ProductIndex' }" v-for="index in 6" :key="index" />
        </van-grid>
        <van-button @click="setBootAd" color="linear-gradient(to right, #ff6034, #ee0a24)" block>广告设置</van-button>
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
    import { localData } from "@/utils/storage";
    import mixin from "@/utils/mixin";

    export default defineComponent({
        name: "HomeMall",
        components: {
            [Grid.name]: Grid,
            [GridItem.name]: GridItem,
            [Button.name]: Button,
            [ActionSheet.name]: ActionSheet,
        },
        setup() {
            const { notify } = mixin();
            const showAction = ref(false)

            const actions = [
                { name: '浅色' },
                { name: '深色' },
            ];

            //切换主题样式
            const setAppTheme = (className: string) => {
                const classList = document.body.classList;
                classList.remove(localData.get("appTheme"));
                localData.set("appTheme", className);
                classList.add(localData.get("appTheme"));
            }

            const onSelect = (item: { name: string }) => {
                switch (item.name) {
                    case "浅色":
                        setAppTheme("theme-default");
                        break;
                    case "深色":
                        setAppTheme("theme-dark");
                        break;
                }
                showAction.value = false;
            };

            const setBootAd = () => {
                Dialog.confirm({
                    title: "设置",
                    message: "请选择关闭或打开广告",
                    cancelButtonText: "关闭",
                    confirmButtonText: "打开",
                    closeOnPopstate: false,
                }).then(() => {
                    localData.set("bootAd", true);
                    notify({ type: "success", message: "设置成功，下次启动看个够" });
                }).catch(() => {
                    notify({ type: "warning", message: "妈妈，我想看广告", background: "orange", });
                    localData.set("bootAd", false);
                });
            }

            return {
                showAction,
                setBootAd,
                actions,
                onSelect
            };
        },
    });
</script>

<style lang="less" scoped>
    @import "./index.less";
</style>
