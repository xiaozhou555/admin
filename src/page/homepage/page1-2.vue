<template>
<div id="page1-2">
  <div ref="myChart" :style="{width: '100%', height: '400px'}" class="chart"></div>
</div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        //screenWidth: document.body.clientWidth   // 这里是给到了一个默认值 （这个很重要）
      }
    },
    watch: {
      screenWidth (val) {
        this.drawLine();
//        console.log(val);
      }
    },
    mounted(){
//      const that = this
//      window.onresize = () => {
//        return (() => {
//          window.screenWidth = document.body.clientWidth
//          that.screenWidth = window.screenWidth
//        })()
//      },
      this.drawLine();
    },
    methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(this.$refs.myChart)
        // 绘制图表
        myChart.setOption({
          title: {
            top:'10px',
            left: 'center',
            text: '在Vue中使用echarts'
          },
          tooltip: {  trigger: 'axis'},
          xAxis: {

            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {

          },
          series: [{
            smooth: true,
            showSymbol: false,
            color:'#3dacff',
            name: '销售',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20],
            areaStyle: {}
          }]
        });
      }
    }
  }
</script>

<style>
.chart{
  width: 100%;
  background-color: #fff;
}
</style>
