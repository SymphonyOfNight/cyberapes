<template>
<div>
  <v-chart force-fit="true" height="250" :padding="[0,10,0,10]" :data="data" :scale="scale">
    <v-tooltip showTitle="false"/>
    <v-axis :dataKey="axis1Opts.dataKey" :line="axis1Opts.line" :tickLine="axis1Opts.tickLine" :grid="axis1Opts.grid" />
    <v-axis :dataKey="axis2Opts.dataKey" :line="axis2Opts.line" :tickLine="axis2Opts.tickLine" :grid="axis2Opts.grid" />
    <v-legend dataKey="user" marker="circle" :offset="30" />
    <v-coord type="polar" :radius="0.8" />
    <v-line position="item*score" color="user" :size="2" />
    <v-point position="item*score" color="user" :size="4" shape="circle" />
    <v-area position="item*score" color="user" />
  </v-chart>
</div>
</template>

<script>
const DataSet = require('@antv/data-set');

const sourceData = [
  { item: 'video game', a: 'A' },
  { item: 'photograph', a: 'B' },
  { item: 'Marketing', a: 'A' },
  { item: 'Development', a: 'C' },
  { item: 'Users', a: 'B' }
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'fold',
  fields: ['a'],
  key: 'user',
  value: 'score',
});
const data = dv.rows;
const scale = [{
  dataKey: 'score',
  values:['E','D','C','B','A'],
  max:'A',
  min: 'E'
}];

const axis1Opts = {
  dataKey: 'item',
  line: null,
  tickLine: null,
  label: null,
  grid: {
    lineStyle: {
      lineDash: null
    },
    hideFirstLine: false,
  }
};

const axis2Opts = {
  dataKey: 'score',
  line: null,
  tickLine: null,
  label: null,
  grid: {
    type: 'polygon',
    lineStyle: {
      lineDash: null,
    }
  },
};

export default {
  name: 'Radar',
  data () {
    return {
      data,
      scale,
      axis1Opts,
      axis2Opts
    }
  }
}
</script>

<style scoped>

</style>
