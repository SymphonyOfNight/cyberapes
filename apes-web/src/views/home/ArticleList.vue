<template>
  <div>
    <div style="text-align:center;">
      <a-spin :spinning="spinning" tip="内容加载中，请稍候..." style="padding-top:50px;" />
    </div>
    <a-card
      :key="i"
      v-for="(item, i) in articles"
      :title="item.title"
      style="margin-bottom: 24px"
      :bordered="false"
      :hoverable="true"
    >
      <a href="#" slot="extra" @click="readArticleDetail(item.id)">阅读全文</a>
      <a-row style="margin-bottom: 10px;">
        <a-col
          :span="item.img==true?19:24"
          v-html="item.content"
          class="article-content"
        >v-html={{ item.content }}</a-col>
        <a-col :span="item.img==true?4:0" :offset="item.img==true?1:0">
          <img :src="item.imgUrl" width="100%" height="100%" />
        </a-col>
      </a-row>
      <template slot="actions">
        <span style="text-align: right;">
          <a-icon type="retweet" @click="retweet(item.id)" style="padding-right: 8px;" />
          {{ item.like }}
        </span>
        <span style="text-align: right;">
          <a-icon type="message" @click="comment(item.id)" style="padding-right: 8px;" />
          {{ item.like }}
        </span>
        <span style="text-align: right;">
          <a-icon type="like" @click="like(item.id)" style="padding-right: 8px;" />
          {{ item.like }}
        </span>
      </template>
    </a-card>
    <div :style="{'text-align':'center','display':spinning==true?'none':'block'}">
      <a-pagination :total="185" :pageSize="20" :defaultCurrent="1" />
    </div>
  </div>
</template>

<script>
// import {GetArticleList, GetArticleDetail} from '@/api/apis';
import { articleListData } from "@/api/static";

export default {
  name: "ArticleList",
  data() {
    return {
      spinning: true,
      articles: []
    };
  },
  mounted() {
    this.getArticleList();
  },
  methods: {
    /**
     * 获取文章列表
     */
    getArticleList() {
      const that = this;
      setTimeout(function() {
        that.articles = articleListData;
        that.spinning = false;
      }, 2);
      // GetArticleList(this.getQueryData()).then(res => {
      //     return res;
      // })
    },
    /**
     * 阅读全文
     */
    readArticleDetail(id) {
      this.$router.replace({
        path: "/article/articleDetail",
        query: { id: id }
      });
    },
    // eslint-disable-next-line no-unused-vars
    retweet(id) {},
    // eslint-disable-next-line no-unused-vars
    like(id) {},
    // eslint-disable-next-line no-unused-vars
    comment(id) {}
  }
};
</script>

<style lang="less" scoped>
p {
  /*text-indent: 2em;*/
  margin-bottom: 0.5em;
}

.article-content {
  max-height: 150px;
  position: relative;
  overflow: hidden;

  &:after {
    content: "...";
    position: absolute;
    bottom: 0;
    right: 0;
    padding-left: 40px;
    background: -webkit-linear-gradient(left, transparent, #fff 55%);
    background: -o-linear-gradient(right, transparent, #fff 55%);
    background: -moz-linear-gradient(right, transparent, #fff 55%);
    background: linear-gradient(to right, transparent, #fff 55%);
  }
}
</style>
