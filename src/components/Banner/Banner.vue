<template>
  <div class="flex h-full w-full justify-center items-center">
    <div class="text-5xl relative text-darklight">
      <WindmillMatrix :height="getHeight()" :width="getWidth()"></WindmillMatrix>
      <NeonMatrix :text="content" :width="getNeonWidth()" class="absolute bottom-10 right-0"></NeonMatrix>
      <Planet svg_anchor="#windmill_matrix"></Planet>
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
      content:['Bonjour!','Sail↑ ↑ ↑','@LAUNCH']
    }
  },
  methods:{
    getHeight: function () {
      let bgHeight = document.documentElement.clientHeight * 0.8
      //if(bgHeight < 800) bgHeight = 800
      return bgHeight
    },
    getWidth: function () {
      let bgWidth = document.documentElement.clientWidth * 0.8
      //if(bgWidth < 1400 ) bgWidth = 1400
      return bgWidth
    },
    getNeonWidth: function () {
      let bgWidth = this.getWidth()
      let bgHeight = this.getHeight()
      let resWidth = 0
      if(bgWidth > bgHeight){
        resWidth = bgWidth * 0.6
      } else {
        resWidth = bgWidth * 0.9
      }
      return resWidth
    }
  },
  mounted() {
    this.$data.content.push(this.text)
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

.logo-outline{
  top:1.2rem;
  left:1.2rem;
  color: transparent;
  -webkit-text-stroke: 1px #ffa500;
}
.sublogo{
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  color:transparent;
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
