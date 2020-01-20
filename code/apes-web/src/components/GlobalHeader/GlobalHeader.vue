<template>
  <div>
    <a-alert
      v-if="isMobile"
      message="为获得最佳的使用体验，请尽量使用PC浏览器访问，建议分辨率为1200*500及以上。"
      :showIcon="false"
      banner
      style="text-align: center;"
    />
    <transition name="showHeader">
      <a-layout-header class="top-header light">
        <div class="top-header-main wide">
          <div class="top-header-main-left">
            <logo />
          </div>
          <div class="top-header-main-middle">
            <header-menu />
          </div>
          <div class="top-header-main-right">
            <user-menu />
          </div>
        </div>
      </a-layout-header>
    </transition>
  </div>
</template>

<script>
import Logo from "@/components/Logo/Logo";
import HeaderMenu from "@/components/HeaderMenu/HeaderMenu";
import UserMenu from "@/components/UserMenu/UserMenu";

export default {
  name: "GlobalHeader",
  components: { UserMenu, Logo, HeaderMenu },
  data() {
    return {
      isMobile: localStorage.getItem("isMobile") == "true" ? true : false
    };
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
@import "~@/core/global.less";

.top-header {
  position: relative;
  padding: 0px;
  width: 100%;
  height: 64px;
  box-shadow: 0 2px 8px rgba(2, 1, 1, 0.15);
  transition: background 0.3s, width 0.2s;
  z-index: 9;
}

.top-header-main {
  height: 64px;
  display: flex;

  &.wide {
    max-width: @global-max-wight;
    margin: auto;
  }

  .top-header-main-middle {
    height: 100%;
    flex: 1 1 0%;
    overflow: hidden;
  }

  .top-header-main-right {
    padding-right: 8px;
    min-width: 288px;
    text-align: right;
  }
}

.light {
  background-color: #fff;
}

.showHeader-enter-active {
  transition: all 0.25s ease;
}

.showHeader-leave-active {
  transition: all 0.5s ease;
}

.showHeader-enter,
.showHeader-leave-to {
  opacity: 0;
}
</style>