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

    import { defineComponent, reactive } from "vue";

    export default defineComponent({
        name: "CatView",
        props: {
            //滚动元素名称(适合同页面多组件切换)
            scrollName: {
                type: String,
                default: "default",
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

            return {
                styles,
            };
        },
    });
</script>

<style lang="less" scoped>
    @import "./index.less";
</style>
