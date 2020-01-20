<template>
  <page-view :title="false">
    <div slot="headerExtra">
      <a-button type="link" @click="goBack">
        <a-icon type="left"/>返回
      </a-button>
    </div>
    <div slot="pageContent">
      <a-row :gutter="24">
        <a-card :title="articleDetail.title" :bordered="false">
          <a-row style="margin-bottom: 10px;">
            <a-col
              :span="articleDetail.img==true?19:24"
              v-html="articleDetail.content"
              class="article-content"
            >v-html={{ articleDetail.content }}</a-col>
            <a-col :span="articleDetail.img==true?4:0" :offset="articleDetail.img==true?1:0">
              <img :src="articleDetail.imgUrl" width="100%" height="100%" />
            </a-col>
          </a-row>
        </a-card>
      </a-row>
    </div>
  </page-view>
</template>
<script>
import PageView from "@/layouts/PageView";
import { getArticleDeatil } from "@/api/static";
export default {
  name: "ArticleDetail",
  components: { PageView },
  data() {
    return {
      id: null,
      articleDetail: {}
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.id = this.$route.query.id;
      this.articleDetail = getArticleDeatil(this.id);
    },
    goBack() {
      this.$router.replace({ path: "/home" });
    }
  }
};
</script>
<style lang="less" scoped>
</style>