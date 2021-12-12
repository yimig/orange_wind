<template>
<div class="windmill">
  <div id="windmill_matrix"></div>
</div>
</template>

<script>
import * as d3 from "d3"
export default {
  name: "WindmillMatrix",
  data(){
    return{
      height:800,
      width:1400,
      length:100,
      rows:0,
      columns:0,
      layout_matrix:[],
      line_length:15
    }
  },
  methods:{
    initMatrix:function () {
      let layout=d3.select('#windmill_matrix').insert('svg').attr('height',this.$data.height).attr('width',this.$data.width)
      this.$data.rows=Math.ceil(this.$data.height/this.$data.length)
      this.$data.columns=Math.ceil(this.$data.width/this.$data.length)
      let layout_matrix=[]
      for (let i = 0; i < this.$data.rows; i++) {
        let rows=[]
        for (let j = 0; j < this.$data.columns; j++) {
          rows.push(this.initPattern(layout,i,j))
        }
        layout_matrix.push(rows)
      }
      this.$data.layout_matrix=layout_matrix
    },
    initPattern:function(layout,rows,columns){
      let line_margin_left=(this.$data.length-this.$data.line_length)/2
      let center_x=columns*this.$data.length+this.$data.length/2
      let center_y=rows*this.$data.length+this.$data.length/2
      let line_x1=this.$data.length*columns+line_margin_left
      let line_x2=line_x1+this.$data.line_length
      let g = layout.insert('g').attr('stroke','#707070').attr('stroke-width',1).attr('transform','rotate(0)')
          .on('mouseover',this.pattern_OnMouseOver).on('mouseout',this.pattern_OnMouseOut)
      this.initAnimate(g,center_x,center_y)
      this.initLine(g,line_x1,line_x2,center_x,center_y,45)
      this.initLine(g,line_x1,line_x2,center_x,center_y,135)
      this.initActionField(g,line_x1,rows*this.$data.length+line_margin_left)
      return g
    },
    initAnimate:function (g,center_x,center_y) {
      return g.insert('animateTransform').attr('attributeName','transform').attr('type','rotate')
          .attr('from','0 '+center_x+' '+center_y).attr('to','360 '+center_x+' '+center_y)
          .attr('dur','2s').attr('repeatCount',0)
    },
    initLine:function (g,x1,x2,cx,cy,deg){
      return g.insert('line').attr('x1',x1).attr('y1',cy)
          .attr('x2',x2).attr('y2',cy)
          .attr('transform','rotate('+deg+','+cx+','+cy+')')
    },
    initActionField:function (g,x,y) {
      return g.insert('rect').attr('width',this.$data.line_length).attr('height',this.$data.line_length)
          .attr('x',x).attr('y',y)
          .attr('fill','transparent').attr('stroke','none')
    },
    pattern_OnMouseOver(event){
      var g=d3.select(event.target.parentElement)
      g.select('animateTransform').attr('repeatCount','indefinite')
      g.selectAll('line').transition().attr('stroke','orange')
    },
    pattern_OnMouseOut(event){
      var g=d3.select(event.target.parentElement)
      g.select('animateTransform').attr('repeatCount',1)
      g.selectAll('line').transition().attr('stroke','#707070')
    }
  },
  mounted() {
    this.initMatrix()
  }
}
</script>

<style scoped>

</style>
