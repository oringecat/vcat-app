<template>
    <cat-view class="user-index">
        <template v-slot:header>
            <cat-navbar title="李兔饼"></cat-navbar>
        </template>
    </cat-view>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "User",
        setup() {
            console.log("用户");
        },
    });
</script>

<style lang="less">
    @import "./user.less";
</style>
