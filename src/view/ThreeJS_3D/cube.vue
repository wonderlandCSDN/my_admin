<template>
    <div class="cubeBox">
        <div id="cube_box"></div>
        <div id="lines_box"></div>
    </div>
</template>
<script>

import * as three from 'three'

export default {
    name: 'cube',
    data() {
        return {
            scene: undefined,
            camera: undefined,
            mesh: undefined,
            renderer: undefined,
            //画线
            sceneL: undefined,
            cameraL: undefined,
            light: undefined,
            meshL: undefined,
            rendererL: undefined,
        }
    },
    //组件
    components: {
    },
    props: {
    },
    watch: {
    },
    computed: { 
    },
    created() {
    },
    mounted() {
        const _that = this;
        _that.init();
    },
    methods: { 
        init(){
            this.cubeFn();
            this.animate();
            this.drawingLines();
        },
        /**立方体 */
        cubeFn(){
            // 获取元素
            let cube_box = document.getElementById('cube_box');
            // 场景（只有一种）
            this.scene = new three.Scene();

            // 透视相机（three.PerspectiveCamera）
            this.camera = new three.PerspectiveCamera(70, cube_box.clientWidth/cube_box.clientHeight, 0.01, 1000);
            this.camera.position.z = 0.6;

            // 立方体
            let geometry = new three.CubeGeometry(0.2, 0.2, 0.2); // CubeGeometry(width, height, depth, segmentsWidth, segmentsHeight, segmentsDepth, materials, sides)
            let material = new three.MeshNormalMaterial(); // MeshBasicMaterial({color: 0x00ff00});
            this.mesh = new three.Mesh(geometry, material);
            this.scene.add(this.mesh);

            // 渲染
            this.renderer = new three.WebGLRenderer({antialias: true});
            this.renderer.setSize(cube_box.clientWidth, cube_box.clientHeight);
            cube_box.appendChild(this.renderer.domElement); // 渲染器renderer的domElement元素，表示渲染器中的画布
        },

        /**动画（渲染循环（实时渲染和离线渲染））*/
        animate() {
            requestAnimationFrame(this.animate);
            this.mesh.rotation.x += 0.01;
            this.mesh.rotation.y += 0.02;
            this.renderer.render(this.scene, this.camera);
       },

       /**画线 */
       drawingLines(){
            this.initScene();
            this.initCamera();
            this.initLight();
            this.initObject();
            this.initRenderer();
            this.rendererL.clear();
            // this.rendererL.render(this.sceneL, this.cameraL);
            this.animationL();
       },
       /**场景 */
       initScene() {
           this.sceneL = new three.Scene();
       },
       /**相机 */
       initCamera() {
           this.cameraL = new three.PerspectiveCamera(45, document.getElementById('lines_box').clientWidth/document.getElementById('lines_box').clientHeight, 1, 10000);
           this.cameraL.position.set(0, 0, 600);
           this.cameraL.up.set(0, 1, 0);
           this.cameraL.lookAt(0, 0, 0);
       },
       /**light */
       initLight(){
           this.light =new three.AmbientLight(0xffffff);
           this.light.position.set(100, 100, 200);
           this.sceneL.add(this.light);

           this.light = new three.PointLight(0x00FF00);
           this.light.position.set(0,0,300);
           this.sceneL.add(this.light);
       },
       /**cube */
       initObject(){

            let geometry = new three.CylinderGeometry(100, 150, 400);
            geometry.vertices.push( new three.Vector3( -500, 0, 0 ), new three.Vector3( 500, 0, 0 ));
            let material = new three.MeshLambertMaterial( { color:0x167F29} )
            this.meshL = new three.Mesh(geometry, material);
            this.sceneL.add(this.meshL);
       },
       /**渲染器 */
       initRenderer () {
            this.rendererL = new three.WebGLRenderer({antialias: true});
            this.rendererL.setSize(document.getElementById('lines_box').clientWidth, document.getElementById('lines_box').clientHeight);
            document.getElementById('lines_box').appendChild(this.rendererL.domElement);
            this.rendererL.setClearColor(0xFFFFFF, 1.0);

            /* stats = new Stats();
            stats.domElement.style.position = 'absolute';
            stats.domElement.style.left = '0px';
            stats.domElement.style.top = '0px';
            document.getElementById('lines_box').appendChild(stats.domElement); */
       },
       animationL() {
            //改变相机移动，让物体移动
            //this.cameraL.position.x = this.cameraL.position.x + 1;

            //改变物体位置，让物体移动
            this.meshL.position.x +=1;
            this.rendererL.render(this.sceneL, this.cameraL);
            requestAnimationFrame(this.animationL);
       }
    },
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
    @import '../../sass/page/cube.scss'
</style>
