<template>
    <a-layout>
      <a-layout style="minHeight: '100vh' ">
        <!-- layout header -->
        <zoom-x-transition :delay="200">
            <global-header v-show="show"/>
        </zoom-x-transition>

        <!-- layout content -->
        <zoom-x-transition :delay="400">
            <a-layout-content>
            <transition name="fade">
                <router-view />
            </transition>
            </a-layout-content>
        </zoom-x-transition>
        
        <!-- layout footer -->
        <slide-x-left-transition :delay="600">
            <a-layout-footer style="background-color:#000;">
            <global-footer />
            </a-layout-footer>
        </slide-x-left-transition>
      </a-layout>
      <a-back-top />
    </a-layout>
</template>

<script>
import GlobalFooter from "@/components/GlobalFooter/GlobalFooter";
import GlobalHeader from "@/components/GlobalHeader/GlobalHeader";
export default {
  name: "BaseLayout",
  components: {
    GlobalHeader,
    GlobalFooter
  },
  data() {
    return {
        show: true
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
</style>