<template>
    <cat-view class="home-mine" inset>
        <template #header>
            <cat-navbar title="我的"></cat-navbar>
        </template>
        <van-cell-group>
            <van-cell is-link title="登录" :to="{ name: 'UserLogin' }" />
            <van-cell is-link title="注册" :to="{ name: 'UserRegister' }" />
            <van-cell is-link title="通知" :to="{ name: 'NoticeIndex' }" />
            <van-cell is-link title="GitHub" @click="toGitHub" />
        </van-cell-group>
        <div class="copyright" style="color: #999;text-align: center;line-height: 0.4rem;padding: 0.32rem;font-size: 0.24rem;">
            <div>开发不易，请勿盗用</div>
            <div>VCAT-APP v0.1.0</div>
            <div>@2021 teamwei.com</div>
            <div>{{ github }}</div>
        </div>
    </cat-view>
</template>

<script lang="ts">
    /*!
     * ©teamwei.com
     * author: teamwei
     * date: 2021-08-21
     */

    import { defineComponent, onActivated } from "vue";
    import { Cell, CellGroup } from "vant";
    import { openUrl } from "@/utils/h5plus";
    import { clientAgent } from "@/utils";

    export default defineComponent({
        name: "HomeMine",
        components: {
            [Cell.name]: Cell,
            [CellGroup.name]: CellGroup,
        },
        setup() {
            const github = "https://github.com/oringecat/vcat-app";
            const toGitHub = () => {
                if (clientAgent.isPc) {
                    window.open(github, "_blank");
                } else {
                    openUrl(github);
                }
            }

            onActivated(() => {
                console.log("我的");
            });

            return {
                github,
                toGitHub
            }
        },
    });
</script>

<style lang="less">
    @import "./index.less";
</style>
