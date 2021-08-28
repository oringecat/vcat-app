<template>
    <cat-statusbar class="cat-navbar">
        <div class="cat-navbar__left">
            <div>
                <slot name="left">
                    <button type="button" @click="goback" v-if="backShow">
                        <van-icon name="arrow-left" size=".48rem" />
                        <span v-if="backText">{{ backText }}</span>
                    </button>
                </slot>
            </div>
        </div>
        <div class="cat-navbar__center">
            <div>
                <slot>
                    <span>{{ title }}</span>
                </slot>
            </div>
        </div>
        <div class="cat-navbar__right">
            <div>
                <slot name="right"></slot>
            </div>
        </div>
    </cat-statusbar>
</template>

<script lang="ts">
    /*!
     * ©teamwei.com
     * author: teamwei
     * date: 2021-08-21
     */

    import { defineComponent } from "vue";
    import { useRouter } from "vue-router";
    import { Icon } from "vant";

    export default defineComponent({
        name: "CatNavbar",
        components: {
            [Icon.name]: Icon,
        },
        props: {
            title: String,
            backText: String,
            backShow: {
                type: Boolean,
                default: () => (window.history.state.back ? true : false),
            },
        },
        setup(props, { emit, attrs }) {
            const router = useRouter();

            const goback = () => {
                if (attrs.onBack) {
                    emit("back");
                } else {
                    router.go(-1);
                }
            };

            return {
                goback,
            };
        },
    });
</script>

<style lang="less" scoped>
    @import "./index.less";
</style>
