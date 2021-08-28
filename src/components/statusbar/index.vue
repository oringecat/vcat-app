<template>
    <div class="cat-statusbar" :style="styles">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    /*!
     * ©teamwei.com
     * author: teamwei
     * date: 2021-08-19
     */

    import { defineComponent, reactive } from "vue";
    import { onPlusReady } from "@/utils/h5plus";

    export default defineComponent({
        name: "CatStatusbar",
        setup() {
            const styles = reactive({
                paddingTop: "0px",
            });

            onPlusReady((e) => {
                const statusbarHeight = e.plus.navigator.getStatusbarHeight();
                if (Number(statusbarHeight) > 0) {
                    styles.paddingTop = statusbarHeight + "px";
                }
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
