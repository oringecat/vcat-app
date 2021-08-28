<template>
    <div class="cat-view">
        <div class="cat-view__header">
            <slot name="header"></slot>
        </div>
        <div ref="scrollElement" class="cat-view__container" :style="styles">
            <slot></slot>
        </div>
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

    import { defineComponent, onActivated, onDeactivated, ref, reactive, watch } from "vue";
    import { setStatusBarStyle } from "@/utils/h5plus";

    export default defineComponent({
        name: "CatView",
        props: {
            //滚动元素名称(适合同页面多组件切换)
            scrollName: {
                type: String,
                default: "default",
            },
            //状态栏字体颜色
            statusBarStyle: {
                type: String,
                default: "dark",
            },
            //是否使用内边距
            inset: Boolean
        },
        setup(props) {
            let timer = 0;
            let styles: { [key: string]: string } = reactive({});
            const scrollElement = ref(); //滚动元素
            const scrollTargets: { name: string; top: number }[] = []; //滚动元素列表

            if (props.inset) {
                styles = {
                    padding: '.24rem',
                }
            }

            //获取当前滚动元素
            const getScrollTarget = (defaultValue = 0) => {
                const target = scrollTargets.find((t) => t.name === props.scrollName);
                if (target == null) {
                    scrollTargets.push({
                        name: props.scrollName,
                        top: defaultValue,
                    });
                    return scrollTargets[scrollTargets.length - 1];
                }
                return target;
            };

            //监听滚动条位置
            const onScrollPosition = (e: Event) => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    const scrollTop = (e.target as HTMLDivElement).scrollTop;
                    const target = getScrollTarget(scrollTop);
                    target.top = scrollTop;
                }, 50);
            };

            //监听状态栏字体颜色
            watch(
                () => props.statusBarStyle,
                (value) => {
                    setStatusBarStyle(value);
                },
                {
                    immediate: true,
                }
            );

            //监听滚动元素名称
            watch(
                () => props.scrollName,
                (newValue) => {
                    const target = scrollTargets.find((t) => t.name === newValue);
                    const el = scrollElement.value;

                    el.style.opacity = 0;
                    if (target != null) {
                        setTimeout(() => {
                            el.scrollTop = target.top;
                            el.style.opacity = 1;
                        }, 0);
                    } else {
                        el.style.opacity = 1;
                    }
                }
            );

            onActivated(() => {
                const el = scrollElement.value;
                el.scrollTop = getScrollTarget().top;
                el.style.opacity = 0;

                setTimeout(() => {
                    el.style.opacity = 1;
                    //添加监听事件
                    el.addEventListener("scroll", onScrollPosition);
                }, 0);
            });

            onDeactivated(() => {
                const el = scrollElement.value;
                //移除监听事件
                el && el.removeEventListener("scroll", onScrollPosition);
            });

            return {
                styles,
                scrollElement,
            };
        },
    });
</script>

<style lang="less" scoped>
    @import "./index.less";
</style>
