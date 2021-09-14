<template>
    <div class="cat-tabbar">
        <div class="cat-tabbar__warpper" :style="fixed && 'position: fixed;'">
            <template v-for="(item, index) in modelValue" :key="index">
                <div class="cat-tabbar__item" @click="onClick(item, index)">
                    <slot :item="item" :index="index">
                        <!--判断是否图片图标-->
                        <template v-if="item.icon">
                            <div :class="['cat-icon-' + item.name, active === index && 'active']">
                                <img :src="item.icon.active" v-if="active === index" />
                                <img :src="item.icon.inactive" v-else />
                                <span>{{ item.label }}</span>
                            </div>
                        </template>
                        <template v-else>
                            <div :class="['cat-icon-' + item.name, active === index && 'active']">
                                <span>{{ item.label }}</span>
                            </div>
                        </template>
                    </slot>
                </div>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
    /*!
     * ©teamwei.com
     * author: teamwei
     * date: 2021-08-21
     */

    import { defineComponent, ref } from "vue";

    export default defineComponent({
        name: "CatTabbar",
        props: {
            //数据列表
            modelValue: Array,
            //是否固定在底部
            fixed: {
                type: Boolean,
                default: false,
            },
        },
        setup(props, { emit }) {
            const active = ref(0);

            const onClick = (item: { [key: string]: string }, index: number) => {
                active.value = index;
                emit("change", item.name, index);
            };

            return {
                active,
                onClick,
            };
        },
    });
</script>

<style lang="less" scoped>
    @import "./index.less";
</style>
