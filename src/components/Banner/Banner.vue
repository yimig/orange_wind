<template>
  <div class="flex h-full w-full justify-center items-center">
    <div class="text-5xl relative text-darklight">
      <WindmillMatrix :height="getHeight()" :width="getWidth()"></WindmillMatrix>
      <NeonMatrix :text="content" class="absolute bottom-10 right-0"></NeonMatrix>
      <Planet></Planet>
<!--      <div class="absolute top-20 left-10 bg-gray-darker text-white p-6 rounded-2xl cursor-pointer">-->
<!--        <div class="logo">UPANE.CN</div>-->
<!--        <div class="sublogo text-sm text-right mt-2">type.<span class="type text-orangelight">ORANGE_WIND</span> 001</div>-->
<!--        <div class="h-4 w-4 absolute bg-white rounded-full bottom-3 left-3"></div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import NeonMatrix from "../NeonMatrix/NeonMatrix.vue";
import WindmillMatrix from "../WindmillMatrix/WindmillMatrix.vue";
import Planet from "../Planet/Planet.vue";
export default {
  name: "Banner",
  props:['text'],
  data(){
    return{
      content:['Bonjour!','Sail↑ ↑ ↑','@LAUNCH','HELLO']
    }
  },
  methods:{
    getHeight: function () {
      let bgHeight = document.body.clientHeight * 0.8
      if(bgHeight < 800) bgHeight = 800
      return bgHeight
    },
    getWidth: function () {
      let bgWidth = document.body.clientWidth * 0.8
      if(bgWidth < 1400 ) bgWidth = 1400
      return bgWidth
    }
  },
  mounted() {
    let vm = this
    window.wallpaperPropertyListener = {
      applyUserProperties: function(properties) {
        if (properties.customtext) {
          vm.content = properties.customtext.value.split('|');
        }
      },
    };
  },
  components:{
    NeonMatrix,WindmillMatrix,Planet
  },
  computed:{
  }
}
</script>
<style lang="less" scoped>
@font-face {
  font-family: SourceCN;
  src: url('./res/font/SourceCN_lite.otf');
}
.logo{
  font-family: "SourceCN","Microsoft YaHei UI Light";
}
.sublogo{
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  ::after{
    content:'';
    position: absolute;
    height:1px;
    width:200px;
    border-radius: 1px;
    background: white;
    right: 20px;
    bottom:20px;
  }
}

::selection {
  color:#707070;
  background:orange;
}

::-moz-selection {
  color:#707070;
  background:orange;
}

::-webkit-selection {
  color:#707070;
  background:orange;
}
</style>
