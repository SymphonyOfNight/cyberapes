<template>
  <div class="footer">
    <div class="footer-wrap">
      <a-row>
        <a-col :span="6">
          <h3>关于我们</h3>
          <div>
            <a
              href="https://github.com/SymphonyOfNight/cyberapes/blob/master/README.zh-CN.md"
              target="_blank"
            >
              <a-icon type="question-circle" />
              <span class="link">说明文档</span>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/SymphonyOfNight/cyberapes/graphs/contributors"
              target="_blank"
            >
              <a-icon type="team" />
              <span class="link">贡献人</span>
            </a>
          </div>
          <div>
            <a href="https://github.com/SymphonyOfNight/cyberapes/projects" target="_blank">
              <a-icon type="flag" />
              <span class="link">项目计划</span>
            </a>
          </div>
        </a-col>
        <a-col :span="6">
          <h3>联系我们</h3>
          <div>
            <a href="https://github.com/SymphonyOfNight/cyberapes" target="_blank">
              <a-icon type="github" />
              <span class="link">贡献代码</span>
            </a>
          </div>
          <div>
            <a href="https://github.com/SymphonyOfNight/cyberapes/issues" target="_blank">
              <a-icon type="bug" />
              <span class="link">报告Bug</span>
            </a>
          </div>
        </a-col>
        <a-col :span="6">
          <h3>支持我们</h3>
          <div>
            <a-popover title="打赏一分钱">
              <template slot="content">
                <img src="@/assets/wxpay.png" class="footer-img" />
              </template>
              <a-icon type="wechat" />
              <span class="link">微信赞助</span>
            </a-popover>
          </div>
          <div>
            <a-popover title="打赏一分钱">
              <template slot="content">
                <img src="@/assets/wxpay.png" class="footer-img" />
              </template>
              <a-icon type="alipay" />
              <span class="link">支付宝赞助</span>
            </a-popover>
          </div>
        </a-col>
        <a-col :span="6">
          <h3>浏览器兼容</h3>
          <div>
            <svg-icon type="ie" title="IE/Edge"/>
            <span>IE11,Edge</span>
          </div>
          <div>
            <svg-icon type="firefox" title="Firefox"/>
            <span>last 2 versions</span>
          </div>
          <div>
            <svg-icon type="chrome" title="Chrome"/>
            <span>last 2 versions</span>
          </div>
          <div>
            <svg-icon type="safari" title="Safari"/>
            <span>last 2 versions</span>
          </div>
          <div>
            <svg-icon type="opera" title="Opera"/>
            <span>last 2 versions</span>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="copyright">
       <span>备案号：</span>
      <a
        href="http://www.beian.miit.gov.cn"
        target="_blank"
        rel="noopener noreferrer"
      >粤ICP备18132675号</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "GlobalFooter",
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
@import "~@/core/global.less";

.footer {
  max-width: @global-max-wight;
  display: block;
  margin: auto;
  padding: 0 16px;
  text-align: left;

  .footer-wrap {
    position: relative;
    padding: 30px 0 30px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);

    div {
      margin: 12px 0;
    }

    span {
      margin-left: 15px;
    }
  }

  * {
    color: #fff;
  }

  h3 {
    margin-bottom: 1.5em;
    color: darkgray;
  }

  .copyright {
    padding-top: 24px;
    font-size: 16px;
    span {
      color: darkgray;
    }
  }
}

.footer-img {
  display: block;
  padding: 0;
  height: 160px;
  width: 160px;
}
</style>
