<template>
  <div class="page-header">
    <div class="page-header-wide">
      <div class="page-header-main">
        <a-row type="flex" style="width: 100%">
          <div v-if="title != false" class="page-header-heading">
            <span class="page-header-heading-title">{{this.title}}</span>
          </div>
          <div class="page-header-content-wrap">
            <div class="page-header-content">
              <div v-if="avatar" class="page-header-content-avatar">
                <a-avatar :src="avatar" :size="72" />
              </div>
              <div v-if="this.$slots.content" class="page-header-content-content">
                <slot name="content"></slot>
              </div>
            </div>
            <div v-if="this.$slots.extra" class="page-header-extra">
              <slot name="extra"></slot>
            </div>
          </div>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    title: {
      type: [String, Boolean],
      default: true,
      required: false
    },
    avatar: {
      type: String,
      default: "",
      required: false
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

.page-header {
  padding: 0px;
  width: 100%;
  min-height: 50px;
  background-color: #fff;

  .page-header-wide {
    display: flex;
    margin: 0 auto;
    max-width: @global-max-wight;
  }

  .page-header-main {
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    padding: 12px 24px;
    background-color: #fff;
    display: flex;

    .page-header-heading {
      padding-bottom: 12px;
      width: 100%;
      overflow: hidden;

      .page-header-heading-title {
        display: block;
        float: left;
        margin-bottom: 0;
        padding-right: 12px;
        color: rgba(0, 0, 0, 0.85);
        font-weight: 600;
        font-size: 20px;
        line-height: 32px;
      }
    }

    .page-header-content-wrap {
      display: flex;
      overflow: hidden;
      flex: auto;
      width: 100%;

      .page-header-content {
        overflow: hidden;
        display: flex;
        flex: auto;

        .page-header-content-avatar {
          flex: 0 1 72px;

          & > span {
            display: block;
            width: 72px;
            height: 72px;
            border-radius: 72px;
          }
        }

        .page-header-content-content {
          position: relative;
          top: 4px;
          flex: 1 1 auto;
          margin-left: 24px;
          color: rgba(0, 0, 0, 0.45);
          line-height: 22px;
        }
      }
    }

    .page-header-extra {
      min-width: 242px;
      margin-left: 88px;
      text-align: right;
      flex: 0 1 auto;
    }
  }
}
</style>