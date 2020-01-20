<template>
  <div>
    <page-header :title="title" :avatar="avatar">
      <slot slot="content" name="headerContent"></slot>
      <slot slot="extra" name="headerExtra"></slot>
    </page-header>
    <div class="page-content">
      <div class="page-content-index-wide">
        <div class="page-content-index-content">
          <slot name="pageContent">
            <router-view ref="content" />
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader/PageHeader";

export default {
  name: "PageView",
  components: { PageHeader },
  props: {
    avatar: {
      type: String,
      default: null
    },
    title: {
      type: [String, Boolean],
      default: false
    },
    directTabs: {
      type: Object,
      default: null
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
@import "~@/core/global.less";

.page-content {
  margin: 24px 24px 0;

  .page-content-index-wide {
    margin: 0 auto;
    max-width: @global-max-wight;

    .page-content-index-content {
      margin: 24px;
    }
  }
}
</style>