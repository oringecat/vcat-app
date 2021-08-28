<template>
  <cat-view class="notice-index" inset>
    <template v-slot:header>
      <cat-navbar title="通知"></cat-navbar>
    </template>
    <van-button @click="toDetail" block>登录才能查看</van-button>
  </cat-view>
</template>

<script lang="ts">
/*!
 * ©teamwei.com
 * author: teamwei
 * date: 2021-08-22
 */

import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { Button } from "vant";

export default defineComponent({
  name: "NoticeIndex",
  components: {
    [Button.name]: Button,
  },
  setup() {
    const router = useRouter();

    const toDetail = () => {
      router.push({ name: "NoticeDetail", params: { id: 1 } });
    };

    return {
      toDetail,
    };
  },
});
</script>

<style lang="less">
@import "./notice.less";
</style>
