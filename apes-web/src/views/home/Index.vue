<template>
  <page-view :title="false" :avatar="avatar">
    <div slot="headerContent">
      <div class="title">{{ welcomeText }}</div>
      <div>{{user.whatsUp}}</div>
    </div>
    <div slot="headerExtra" class="home-header-extra">
      <div class="home-header-extra-item">
        <a-statistic title="文章" :value="40"></a-statistic>
      </div>
      <div class="home-header-extra-item">
        <a-statistic title="视频" :value="15"></a-statistic>
      </div>
      <div class="home-header-extra-item">
        <a-statistic title="全部" :value="55"></a-statistic>
      </div>
    </div>
    <div slot="pageContent">
      <a-row :gutter="24">
        <a-col :span="16">
          <div style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 0 }">
            <article-list></article-list>
          </div>
        </a-col>
        <a-col style="padding: 0 12px" :span="8">
          <a-card
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{padding: 0}"
            hoverable
          >
            <div class="item-group">
              <a-button type="link" icon="thunderbolt" @click="createNewNote">有点儿新想法</a-button>
            </div>
          </a-card>
          <a-card title="标签" style="margin-bottom: 24px" :bordered="false" hoverable>
            <div style="min-height: 200px;"></div>
          </a-card>
        </a-col>
      </a-row>
      <!-- ref子组件需要放在页面根组件中注册 -->
      <create-note-form ref="CreateNoteForm"></create-note-form>
    </div>
  </page-view>
</template>

<script>
import ArticleList from "./ArticleList";
import PageView from "@/layouts/PageView";
import CreateNoteForm from "./Modules/CreateNoteForm";
import { userInfo, timeFix, welcome } from "@/api/static";

export default {
  name: "Index",
  components: {
    CreateNoteForm,
    PageView,
    ArticleList
  },
  data() {
    return {
      user: userInfo,
      avatar: userInfo.avatar,
      projects: [],
      loading: true,
      activities: [],
      teams: []
    };
  },
  computed: {
    welcomeText: function() {
      return timeFix() + "，" + userInfo.userName + "，" + welcome();
    }
  },
  created() {
    this.user = userInfo;
  },
  methods: {
    /**
     * 创建新笔记
     */
    createNewNote() {
      this.$refs.CreateNoteForm.open();
    },

    /**
     * 创建新文章
     */
    createNewArticle() {},

    /**
     * 上传新视频
     */
    createNewVideo() {}
  }
};
</script>

<style lang="less" scoped>
.title {
  margin-bottom: 12px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
}

.home-header-extra {
  display: flex;

  .home-header-extra-item {
    position: relative;
    display: inline-block;
    padding: 0 32px;

    &:not(:last-child):after {
      position: absolute;
      top: 8px;
      right: 0;
      width: 1px;
      height: 40px;
      background-color: #e8e8e8;
      content: "";
    }
  }

  & :last-child {
    padding-right: 0;
  }
}

.item-group {
  padding: 20px;
  font-size: 0;
  text-align: center;
}
</style>
