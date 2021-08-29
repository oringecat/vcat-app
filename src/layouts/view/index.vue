<template>
    <div class="cat-view">
        <div class="cat-view__header">
            <slot name="header"></slot>
        </div>
        <cat-scrollbar class="cat-view__container" :scroll-name="scrollName" :style="styles">
            <slot></slot>
        </cat-scrollbar>
        <div class="cat-view__footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script lang="ts">
    /*!
     * ©teamwei.com
     * author: teamwei
     * date: 2021-08-19
     */

    import { defineComponent, reactive, watch } from "vue";
    import { setStatusBarStyle } from "@/utils/h5plus";

    export default defineComponent({
        name: "CatView",
        props: {
            //滚动元素名称(适合同页面多组件切换)
            scrollName: {
                type: String,
                default: "default",
            },
            //状态栏文字颜色
            statusBarStyle: {
                type: String,
                default: "dark",
            },
            //是否使用内边距
            inset: Boolean
        },
        setup(props) {
            let styles: { [key: string]: string } = reactive({});

            if (props.inset) {
                styles = {
                    padding: '.24rem',
                }
            }

            //监听状态栏字体颜色
            watch(() => props.statusBarStyle, (value) => {
                setStatusBarStyle(value);
            }, {
                immediate: true,
            });

            return {
                styles,
            };
        },
    });
</script>

<style lang="less" scoped>
    @import "./index.less";
</style>
