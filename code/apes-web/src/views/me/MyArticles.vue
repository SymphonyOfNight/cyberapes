<template>
  <page-view title="我发布的">
    <div slot="pageContent">
      <a-row :gutter="24">
        <a-col :span="24">
          <div style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 0 }">asdasd</div>
        </a-col>
      </a-row>
    </div>
  </page-view>
</template>
<script>
import PageView from "@/layouts/PageView";
export default {
  name: "MyArticles",
  components: { PageView },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {}
};
</script>
<style lang="less" scoped>
</style>