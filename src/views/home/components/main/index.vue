<template>
    <cat-view class="home-main" inset>
        <template v-slot:header>
            <cat-navbar title="首页"></cat-navbar>
            <van-search v-model="keyword" placeholder="请输入搜索关键词" shape="round" />
        </template>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-swipe class="banner" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="index in 4" :key="index">{{ index }}</van-swipe-item>
            </van-swipe>
            <dl class="desc" @click="toDetail">
                <dt>
                    <span>VCAT-APP</span>
                    <span>developer: teamwei</span>
                </dt>
                <dd>
                    <h2>Vue3.0 + Typescript + Vant</h2>
                    <p>APP(H5+) 混合开发基础框架，可快速搭建开发环境，可打包成 Android、iOS 等应用程序，目前已实现基本操作逻辑功能，请自行体验(使用移动端模式)，后面有空的话会慢慢更新完善...</p>
                </dd>
            </dl>
            <dl class="desc" @click="toDetail">
                <dt>
                    <span>特性说明</span>
                </dt>
                <dd>
                    <h2>布局</h2>
                    <p>基本的APP页面布局和用户操作逻辑</p>
                </dd>
                <dd>
                    <h2>路由</h2>
                    <p>准确的前进后退动画，A→B→C或C→A</p>
                </dd>
                <dd>
                    <h2>缓存</h2>
                    <p>支持前进刷新后退缓存</p>
                </dd>
                <dd>
                    <h2>Html5+</h2>
                    <p>支持调用手机原生API</p>
                </dd>
                <dd>
                    <h2>Axios</h2>
                    <p>已封装Http请求接口类</p>
                </dd>
                <dd>
                    <h2>模块化</h2>
                    <p>功能拆分，组件与组件自由组合页面</p>
                </dd>
                <dd>
                    <h2>其他</h2>
                    <p>自己去发现... ...</p>
                </dd>
            </dl>
        </van-pull-refresh>
    </cat-view>
</template>

<script lang="ts">
    /*!
     * ©teamwei.com
     * author: teamwei
     * date: 2021-08-21
     */

    import { defineComponent, ref } from "vue";
    import { useRouter } from "vue-router";
    import { Search, Swipe, SwipeItem, PullRefresh } from "vant";

    export default defineComponent({
        name: "HomeMain",
        components: {
            [Search.name]: Search,
            [Swipe.name]: Swipe,
            [SwipeItem.name]: SwipeItem,
            [PullRefresh.name]: PullRefresh,
        },
        setup() {
            const router = useRouter();
            const keyword = ref();
            const refreshing = ref(false);

            const toDetail = () => {
                router.push({ name: "ProductDetail", params: { id: 1 } });
            };

            const onRefresh = () => {
                setTimeout(() => {
                    refreshing.value = false;
                }, 1000);
            };

            return {
                keyword,
                toDetail,
                refreshing,
                onRefresh,
            };
        },
    });
</script>

<style lang="less" scoped>
    @import "./index.less";
</style>
