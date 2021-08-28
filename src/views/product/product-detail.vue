<template>
    <cat-view class="product-detail" inset>
        <template v-slot:header>
            <cat-navbar title="详情"></cat-navbar>
        </template>
        <van-button type="primary" @click="backHome()" block>返回首页</van-button>
    </cat-view>
</template>

<script lang="ts">
    /*!
     * ©teamwei.com
     * author: teamwei
     * date: 2021-08-21
     */

    import { defineComponent } from "vue";
    import { Button } from "vant";
    import mixin from "@/utils/mixin";

    export default defineComponent({
        name: "ProductDetail",
        components: {
            [Button.name]: Button,
        },
        setup() {
            const { backHome } = mixin();

            return {
                backHome,
            };
        },
    });
</script>

<style lang="less">
    @import "./product.less";
</style>
