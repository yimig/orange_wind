<template>
  <div class="flex h-full w-full justify-center items-center">
    <div class="text-5xl relative text-darklight">
      <WindmillMatrix></WindmillMatrix>
      <NeonMatrix :text="['Bonjour!','Sail↑ ↑ ↑','Sputnik→','@LAUNCH','Tell me']" class="absolute bottom-10 right-0"></NeonMatrix>
      <Planet></Planet>
<!--      <div class="absolute top-20 left-10 bg-gray-darker text-white p-6 rounded-2xl cursor-pointer">-->
<!--        <div class="logo">UPANE.CN</div>-->
<!--        <div class="sublogo text-sm text-right mt-2">type.<span class="type text-orangelight">ORANGE_WIND</span> 001</div>-->
<!--        <div class="h-4 w-4 absolute bg-white rounded-full bottom-3 left-3"></div>-->
<!--      </div>-->
<!--              <Three height="300" width="800" class="absolute top-24 left-24"></Three>-->
    </div>
  </div>
</template>

<script>
import NeonMatrix from "../NeonMatrix/NeonMatrix.vue";
import WindmillMatrix from "../WindmillMatrix/WindmillMatrix.vue";
import Three from "../Three/Three.vue";
import Planet from "../Planet/Planet.vue";
export default {
  name: "Banner",
  props:['text'],
  data(){
    return{
    }
  },
  components:{
    Three,NeonMatrix,WindmillMatrix,Planet
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
