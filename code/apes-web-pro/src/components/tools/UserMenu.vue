<template>
  <div class="user-wrapper">
    <div class="content-box">
      <a href="https://github.com" target="_blank">
        <a-tooltip placement="bottom">
          <template slot="title">
            <span>说明文档</span>
          </template>
          <span class="action">
            <a-icon type="question-circle-o"></a-icon>
          </span>
        </a-tooltip>
      </a>
      <notice-icon class="action"/>
      <a href="javascript:;" @click="handleLogout">
        <a-tooltip placement="bottomRight">
          <template slot="title">
            <span>退出登录</span>
          </template>
          <span class="action">
            <a-icon type="logout" />
          </span>
        </a-tooltip>
      </a>
    </div>
  </div>
</template>

<script>
import NoticeIcon from '@/components/NoticeIcon'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'UserMenu',
  components: {
    NoticeIcon
  },
  computed: {
    ...mapGetters(['nickname', 'avatar'])

  },
  methods: {
    ...mapActions(['Logout']),
    handleLogout () {
      this.$confirm({
        title: '提示',
        content: '真的要注销登录吗 ?',
        onOk: () => {
          return this.Logout({}).then(() => {
            setTimeout(() => {
              window.location.reload()
            }, 16)
          }).catch(err => {
            this.$message.error({
              title: '错误',
              description: err.message
            })
          })
        },
        onCancel () {
        }
      })
    }
  }
}
</script>
