<template>
<div class="three_layout">
</div>
</template>

<script>
import * as THREE from 'three';
export default {
  name: "Three",
  props:['height','width'],
  data(){
    console.log(this);
    return{};
  },
  mounted() {
    var scene=new THREE.Scene();
    /**
     * 创建网格模型
     */
    // var box=new THREE.BoxGeometry(100,100,100);//创建一个立方体几何对象
    var ball = new THREE.SphereGeometry(100,50,50)
    var material=new THREE.MeshLambertMaterial({
      color:0xffffff,
      reflectivity:0.05
    });//材质对象
    var mesh=new THREE.Mesh(ball,material);//网格模型对象
    const geometry = new THREE.RingGeometry( 350, 450, 100 );
    geometry.rotateX(30)
    geometry.rotateY(0)
    const material2 = new THREE.MeshLambertMaterial( {
      color: 0xaeaeae,
      reflectivity:0.05,
    } );
    const mesh2 = new THREE.Mesh( geometry, material2 );
    scene.add(mesh);//网格模型添加到场景中
    scene.add( mesh2 );
    /**
     * 光源设置
     */
    //点光源
    var point=new THREE.PointLight(0xffffff,10);
    point.position.set(150,150,-300);//点光源位置
    scene.add(point);//点光源添加到场景中
    var point2=new THREE.PointLight(0xffffff);
    point2.position.set(-100,-100,-300);//点光源位置
    scene.add(point2);//点光源添加到场景中
    //环境光
    var ambient=new THREE.AmbientLight(0xffffff,0.04);
    scene.add(ambient);
    /**
     * 相机设置
     */
    var width = this.width;//窗口宽度
    var height = this.height;//窗口高度
    var k = width/height;//窗口宽高比
    var s = 200;//三维场景缩放系数
    //创建相机对象
    //var camera=new THREE.OrthographicCamera(-s*k,s*k, s,-s,1,1000);
    var camera=new THREE.OrthographicCamera(-s*k,s*k, s,-s,1,1000);
    camera.position.set(0,10, 500);//设置相机位置
    camera.lookAt(scene.position);//设置相机方向(指向的场景对象)
    /**
     * 创建渲染器对象
     */
    var renderer=new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(width,height);
    renderer.setClearColor(0x000000,1);//设置背景颜色
    this.$el.appendChild(renderer.domElement);//body元素中插入canvas对象
    //执行渲染操作
    renderer.render(scene,camera);
  }
}
</script>

<style scoped>

</style>