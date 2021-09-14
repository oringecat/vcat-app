<template>
    <cat-view class="notice-detail">
        <template #header>
            <cat-navbar title="消息"></cat-navbar>
        </template>
        <van-divider dashed>没有任何消息</van-divider>
    </cat-view>
</template>

<script lang="ts">
    /*!
     * ©teamwei.com
     * author: teamwei
     * date: 2021-08-22
     */

    import { defineComponent } from "vue";
    import { Divider } from "vant";

    export default defineComponent({
        name: "NoticeDetail",
        components: {
            [Divider.name]: Divider,
        },
        setup() {
            console.log("详情");
        },
    });
</script>

<style lang="less">
    @import "./notice.less";
</style>
