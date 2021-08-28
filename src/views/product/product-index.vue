<template>
    <cat-view class="product-index">
        <template v-slot:header>
            <cat-navbar title="商品"></cat-navbar>
            <van-search v-model="keyword" placeholder="请输入搜索关键词" shape="round" />
        </template>
        <van-pull-refresh class="container" v-model="state.refreshing" @refresh="onRefresh">
            <van-list v-model:loading="state.loading" :finished="state.finished" finished-text="没有更多了" @load="onLoad">
                <van-cell v-for="item in state.list" :key="item" :title="item" :to="{ name: 'ProductDetail', params: { id: 1 } }" />
            </van-list>
        </van-pull-refresh>
    </cat-view>
</template>

<script lang="ts">
    /*!
     * ©teamwei.com
     * author: teamwei
     * date: 2021-08-21
     */

    import { defineComponent, ref, reactive } from "vue";
    import { Search, List, Cell, PullRefresh } from "vant";

    export default defineComponent({
        name: "ProductIndex",
        components: {
            [Search.name]: Search,
            [List.name]: List,
            [Cell.name]: Cell,
            [PullRefresh.name]: PullRefresh,
        },
        setup() {
            const keyword = ref();
            const state: {
                list: number[];
                loading: boolean;
                finished: boolean;
                refreshing: boolean;
            } = reactive({
                list: [],
                loading: false,
                finished: false,
                refreshing: false,
            });

            const onLoad = () => {
                setTimeout(() => {
                    if (state.refreshing) {
                        state.list = [];
                        state.refreshing = false;
                    }

                    for (let i = 0; i < 20; i++) {
                        state.list.push(state.list.length + 1);
                    }
                    state.loading = false;

                    if (state.list.length >= 60) {
                        state.finished = true;
                    }
                }, 1000);
            };

            const onRefresh = () => {
                // 清空列表数据
                state.finished = false;

                // 重新加载数据
                // 将 loading 设置为 true，表示处于加载状态
                state.loading = true;
                onLoad();
            };

            return {
                state,
                keyword,
                onLoad,
                onRefresh,
            };
        },
    });
</script>

<style lang="less">
    @import "./product.less";
</style>
