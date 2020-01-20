<template>
  <a-modal
    :visible="visible"
    @ok="handleOk"
    @cancel="handleCancel"
    title="新想法"
    okText="发布"
    width="1200px"
    :bodyStyle="{padding:0}"
    :maskClosable="false"
    :keyboard="false"
    :closable="false"
  >
    <mavon-editor @save="saveDoc" @change="updateDoc" ref="editor" v-model="doc"></mavon-editor>
    <template slot="footer">
      <a-popconfirm
        title="是否保存为草稿?"
        @confirm="confirmSaveDraf"
        @cancel="cancelSaveDraf"
        okText="是"
        cancelText="否"
      >
        <a-button key="cancel">取消</a-button>
      </a-popconfirm>
      <a-button key="submit" type="primary" @click="handleOk">发布</a-button>
    </template>
  </a-modal>
</template>

<script>
export default {
  name: "CreateNoteForm",
  data() {
    return {
      visible: false,
      confirmLoading: false,
      doc: ""
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    open() {
      this.visible = true;
    },
    handleOk() {},
    handleCancel() {
      this.visible = true;
    },
    /**
     * 保存草稿
     */
    confirmSaveDraf() {},
    /**
     * 不保存草稿
     */
    cancelSaveDraf() {
      this.visible = false;
    },
    saveDoc() {},
    updateDoc() {}
  }
};
</script>

<style lang="less" scoped>
</style>