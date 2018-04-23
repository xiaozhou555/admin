<template>
  <div id="app">
    <schart :canvasId="canvasId"
            :type="type"
            :width="width"
            :height="height"
            :data="data"
            :options="options"
    ></schart>
  </div>
</template>
<script>
  import Schart from 'vue-schart';
  export default {
    data() {
      return {
        canvasId: 'myCanvas',
        type: 'line',
        width: 500,
        height: 400,
        data: [
          {name: '2014', value: 1342},
          {name: '2015', value: 2123},
          {name: '2016', value: 1654},
          {name: '2017', value: 8795},

        ],
        options: {
          autoWidth: true,                // 设置宽高自适应
          showValue: false,               // 是否在图表中显示数值
          bgColor: '#ffffff',             // 默认背景颜色
          fillColor: '#1E9FFF',           // 默认填充颜色

          title: 'Total sales of stores in recent years'
        }
      }
    },
    components: {
      Schart
    }
  }
</script>
