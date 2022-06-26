<template>
<div class="planet"></div>
</template>

<script>
import * as d3 from "d3"
export default {
  name: "Planet",
  props: ['svg_anchor'],
  mounted() {
    let svg=d3.select(this.svg_anchor).select('svg')
    let w=svg.attr('width') //1400
    let h=svg.attr('height') //800
    let cx=w/2
    let cy=h/2
    let layout = svg.insert('g')
    //'M20.27,717C1.6,676.92,290.79,502.55,666.19,327.5S1361.06,43,1379.73,83'
    let dx = -1379.73 / 2 //10
    let dy = -717 / 2 //41.5
    let scale_arg = w/1400 < h/800 ? w/1400 : h/800
    layout.insert('path').attr('d',
        'M' + (scale_arg * (20.27+dx) + cx ) +
        ',' + (scale_arg * (717+dy) + cy ) +
        'C' + (scale_arg * (1.6+dx) + cx ) +
        ',' + (scale_arg * (676.92+dy) + cy ) +
        ',' + (scale_arg * (290.79+dx) + cx ) +
        ',' + (scale_arg * (502.55+dy) + cy ) +
        ',' + (scale_arg * (666.19+dx) + cx ) +
        ',' + (scale_arg * (327.5+dy) + cy ) +
        'S' + (scale_arg * (1361.06+dx) + cx ) +
        ',' + (scale_arg * (43+dy) + cy ) +
        ',' + (scale_arg * (1379.73+dx) + cx ) +
        ',' + (scale_arg * (83+dy) + cy )
    )
        .attr('stroke','orange').attr('stroke-width',2).attr('fill','none')

    layout.insert('circle').attr('cx',cx).attr('cy',cy).attr('r',scale_arg*180)
        .attr('stroke','#707070').attr('stroke-width',2).attr('fill','#FEF6E8')

    //'M1379.73,83c18.67,40-270.52,214.41-645.92,389.46S38.94,757,20.27,717'
    layout.insert('path').attr('d',
        'M' + (scale_arg * (1379.73+dx) + cx ) +
        ',' + (scale_arg * (83+dy) + cy ) +
        'c' + (scale_arg * (18.67)) +
        ',' + (scale_arg * (40)) +
        ',' + (scale_arg * (-270.52)) +
        ',' + (scale_arg * (214.41)) +
        ',' + (scale_arg * (-645.92)) +
        ',' + (scale_arg * (389.46)) +
        'S' + (scale_arg * (38.94+dx) + cx ) +
        ',' + (scale_arg * (757+dy) + cy ) +
        ',' + (scale_arg * (20.27+dx) + cx ) +
        ',' + (scale_arg * (717+dy) + cy )
    )
        .attr('stroke','orange').attr('stroke-width',2).attr('fill','none')

    svg.on('mousemove',function (event) {
      let mx=(event.layerX-cx)
      let my=(event.layerY-cy)
      // console.log('x:'+mx+';y:'+my)
      layout.selectAll('path').attr('transform','translate('+(-mx/80)+','+(-my/100)+')')
      layout.select('circle').attr('transform','translate('+(mx/200)+','+(my/200)+')')
    })
  }
}
</script>

<style scoped>

</style>
