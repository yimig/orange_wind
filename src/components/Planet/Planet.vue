<template>
<div class="planet"></div>
</template>

<script>
import * as d3 from "d3"
export default {
  name: "Planet",
  mounted() {
    let svg=d3.select('#windmill_matrix').select('svg')
    let cx=svg.attr('width')/2
    let cy=svg.attr('height')/2
    let layout = svg.insert('g')
    //'M20.27,717C1.6,676.92,290.79,502.55,666.19,327.5S1361.06,43,1379.73,83'
    let dcx = cx - 1379.73 / 2
    let dcy = cy - 717 / 2
    layout.insert('path').attr('d',
        'M' + (20.27+dcx) +
        ',' + (717+dcy) +
        'C' + (1.6+dcx) +
        ',' + (676.92+dcy) +
        ',' + (290.79+dcx) +
        ',' + (502.55+dcy) +
        ',' + (666.19+dcx) +
        ',' + (327.5+dcy) +
        'S' + (1361.06+dcx) +
        ',' + (43+dcy) +
        ',' + (1379.73+dcx) +
        ',' + (83+dcy)
    )
        .attr('stroke','orange').attr('stroke-width',2).attr('fill','none')

    layout.insert('circle').attr('cx',cx).attr('cy',cy).attr('r',180)
        .attr('stroke','#707070').attr('stroke-width',2).attr('fill','#FEF6E8')

    //'M1379.73,83c18.67,40-270.52,214.41-645.92,389.46S38.94,757,20.27,717'
    layout.insert('path').attr('d',
        'M' + (1379.73+dcx) +
        ',' + (83+dcy) +
        'c' + (18.67) +
        ',' + (40) +
        ',' + (-270.52) +
        ',' + (214.41) +
        ',' + (-645.92) +
        ',' + (389.46) +
        'S' + (38.94+dcx) +
        ',' + (757+dcy) +
        ',' + (20.27+dcx) +
        ',' + (717+dcy)
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
