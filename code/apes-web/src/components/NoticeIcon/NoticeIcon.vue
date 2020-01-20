<template v-slot:renderEmpty>
  <a-popover
    trigger="click"
    placement="bottomRight"
    :overlayStyle="{ width: '300px', top: '50px' }"
  >
    <template slot="content">
      <a-tabs defaultActiveKey="1">
        <a-tab-pane key="1">
          <span slot="tab">
            <a-icon type="message" theme="twoTone" />回复我的
          </span>
          <a-list>
            <a-list-item :key="index" v-for="(item, index) in messageData">
              <a-list-item-meta>
                <a-avatar slot="avatar" :src="item.avatar" />
                <div slot="title">
                  <span>{{ item.title }}</span>&nbsp;
                </div>
                <div slot="description">
                  <div class="list-item-meta-description-item">{{ item.content }}</div>
                  <div class="list-item-meta-description-item">{{ item.time }}</div>
                </div>
              </a-list-item-meta>
            </a-list-item>
            <div slot="footer">Footer</div>
          </a-list>
        </a-tab-pane>
        <a-tab-pane key="2">
          <span slot="tab">
            <a-icon type="like" theme="twoTone" twoToneColor="#eb2f96" />收到的赞
          </span>
          <a-list>
            <a-list-item :key="index" v-for="(item, index) in likeData">
              <a-list-item-meta>
                <a-avatar slot="avatar" :src="item.avatar" />
                <div slot="title">
                  <span>{{ item.title }}</span>&nbsp;
                </div>
                <div slot="description">{{ item.time }}</div>
              </a-list-item-meta>
            </a-list-item>
          </a-list>
        </a-tab-pane>
      </a-tabs>
    </template>
    <span class="top-header-action">
      <a-badge :count="99">
        <a-icon class="top-header-notice-icon" type="bell" />
      </a-badge>
    </span>
  </a-popover>
</template>

<script>
import { messageData, likeData } from "@/api/static";

export default {
  name: "NoticeIcon",
  data() {
    return {
      messageData: null,
      likeData: null
    };
  },
  computed: {},
  watch: {},
  created() {
    this.messageData = this.getMessageData();
    this.likeData = this.getLikeData();
  },
  mounted() {},
  methods: {
    getMessageData() {
      return messageData;
    },
    getLikeData() {
      return likeData;
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/core/global.less";

.top-header-action {
  display: inline-block;
  height: 100%;
  padding: 0 12px;
  cursor: pointer;
  transition: all 0.3s;

  .top-header-notice-icon {
    font-size: 16px;
    padding: 4px;
    vertical-align: middle;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
}

.ant-list-item {
  cursor: pointer;

  .list-item-meta-description-item {
    line-height: 1.5;
  }
  /*&:hover {*/
  /*    background-color: #E6F7FF;*/
  /*}*/
}
</style>