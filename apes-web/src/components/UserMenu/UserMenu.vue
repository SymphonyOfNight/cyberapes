<template>
  <div>
    <a-tooltip placement="bottom" title="说明文档">
      <span class="top-header-action">
        <a
          href="https://github.com/SymphonyOfNight/cyberapes/blob/master/README.zh-CN.md"
          target="_blank"
        >
          <span style="vertical-align:middle;color:rgba(0, 0, 0, 0.65);">
            <a-icon type="question-circle" />
          </span>
        </a>
      </span>
    </a-tooltip>
    <notice-icon />
    <a-dropdown placement="bottomRight">
      <span class="top-header-action">
        <a-avatar size="small" :src="user.avatar" />
        <span style="padding-left: 8px;font-size: 14px;">{{user.userName}}</span>
      </span>
      <a-menu slot="overlay">
        <a-menu-item key="1">
          <router-link :to="{ name: 'center' }">
            <a-icon type="user" class="menu-item-icon" />
            <span>个人中心</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link :to="{ name: 'settings' }">
            <a-icon type="setting" class="menu-item-icon" />
            <span>账户设置</span>
          </router-link>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="3">
          <a href="javascript:;" @click="handleLogout">
            <a-icon type="logout" class="menu-item-icon" />
            <span>退出登录</span>
          </a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
import NoticeIcon from "@/components/NoticeIcon/NoticeIcon";
import { userInfo } from "@/api/static";

export default {
  name: "UserMenu",
  components: { NoticeIcon },
  data() {
    return {
      user: userInfo
    };
  },
  computed: {},
  watch: {},
  created() {
    this.user = userInfo;
  },
  mounted() {},
  methods: {
    handleLogout() {
      this.$confirm({
        title: "提示",
        content: "真的要注销登录吗 ?",
        onOk: () => {
          // return this.Logout({}).then(() => {
          //     setTimeout(() => {
          //         window.location.reload()
          //     }, 16)
          // }).catch(err => {
          //     this.$message.error({
          //         title: '错误',
          //         description: err.message
          //     })
          // })
        },
        onCancel() {}
      });
    }
  }
};
</script>

<style lang="less" scoped>
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

.menu-item-icon {
  margin-right: 8px;
}
</style>