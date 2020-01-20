<template>
  <a-carousel autoplay>
    <div v-for="item in hotSpots" :key="item.id" style="text-align: center;text-align: -webkit-center;">
      <img :alt="item.desc" :src="item.url" style="height: 100%; width: 100%;"/>
    </div>
  </a-carousel>
</template>

<script>
export default {
  name: 'HotSpots',
  data () {
    return {
      hotSpots: [{
        id: '201902170002',
        url: require('../../../public/img/20191217113719.jpg'),
        desc: '花草'
      }, {
        id: '201902170003',
        url: require('../../../public/img/20191217113724.jpg'),
        desc: '树'
      }, {
        id: '201902170004',
        url: require('../../../public/img/20191217113638.jpg'),
        desc: '满月'
      }]
    }
  }
}
</script>

<style scoped>
  .ant-carousel >>> .slick-slide {
    text-align: center;
    min-height: 200px;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
  }

</style>
