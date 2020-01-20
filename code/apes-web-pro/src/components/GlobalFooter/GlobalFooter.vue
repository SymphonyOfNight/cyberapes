<template>
  <div class="footer">
    <div class="links">
      <a
        href="https://github.com"
        target="_blank"
      >
        <a-icon type="github"/>
      </a>
      <a
        href="https://github.com"
        target="_blank"
      >
        <a-icon type="weibo-circle"/>
      </a>
      <a
        href="https://github.com"
        target="_blank"
      >
        <a-icon type="wechat"/>
      </a>
    </div>
    <div class="copyright">
      <a href="http://www.beian.miit.gov.cn"  target="_blank" rel="noopener noreferrer">粤ICP备18132675号</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalFooter',
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
  .footer {
    padding: 0 16px;
    margin: 48px 0 24px;
    text-align: center;

    .links {
      margin-bottom: 8px;

      a {
        color: rgba(0, 0, 0, 0.45);

        &:hover {
          color: rgba(0, 0, 0, 0.65);
        }

        &:not(:last-child) {
          margin-right: 40px;
        }
      }
    }

    .copyright {
      color: rgba(0, 0, 0, 0.45);
      font-size: 14px;
    }
  }
</style>
