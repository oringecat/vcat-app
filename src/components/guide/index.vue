<template>
    <teleport to="body">
        <div ref="guide" :class="['cat-guide', isClose && 'close']" :style="`transition-duration:${ duration }ms`">
            <div :class="['cat-guide__wrapper', isLoaded && 'show']">
                <div class="cat-guide__header">
                    <van-circle class="circle" v-model:current-rate="currentRate" :rate="rate" :speed="100" :stroke-width="60" color="#eee">
                        <span>{{second}}</span>
                    </van-circle>
                </div>
                <div class="cat-guide__main">
                    <img class="ad" src="@/assets/boot.svg" title="ad" />
                </div>
                <div class="cat-guide__footer">
                    <van-button class="button-close" type="primary" @click="close" round block>进入首页</van-button>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script lang="ts">
    /*!
     * ©teamwei.com
     * author: teamwei
     * date: 2021-08-26
     */

    import { defineComponent, ref } from "vue";
    import { Circle, Button } from 'vant';
    import { hideStatusBar, showStatusBar } from "@/utils/h5plus";

    export default defineComponent({
        name: "CatGuide",
        components: {
            [Circle.name]: Circle,
            [Button.name]: Button
        },
        setup() {
            hideStatusBar();

            const guide = ref(),
                isLoaded = ref(false),
                isClose = ref(false),
                duration = ref(500),
                currentRate = ref(100),
                rate = ref(100),
                second = ref(10);

            let timer = 0;

            const close = () => {
                showStatusBar();
                isClose.value = true;
                clearInterval(timer);
                setTimeout(() => {
                    // 删除自身节点
                    guide.value.parentNode.removeChild(guide.value);
                }, duration.value)
            }

            // 倒计时
            timer = setInterval(() => {
                second.value--;
                rate.value = (100 / 10) * second.value;
                if (second.value <= 0) {
                    close();
                }
            }, 1000);

            setTimeout(() => {
                isLoaded.value = true;
            }, 0)

            return {
                guide,
                isClose,
                isLoaded,
                duration,
                currentRate,
                rate,
                second,
                close,
            };
        }
    });
</script>

<style lang="less" scoped>
    @import "./index.less";
</style>
