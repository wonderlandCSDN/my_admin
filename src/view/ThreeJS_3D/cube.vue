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
            sceneL: undefined,
            cameraL: undefined,
            line: undefined,
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
        this.init();
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
           //获取元素
           let lines_box = document.getElementById('lines_box');

           //场景
           this.sceneL = new three.Scene();
           
           //相机
           this.cameraL = new three.PerspectiveCamera(45, lines_box.clientWidth/lines_box.clientHeight, 1, 500);
           this.cameraL.position.set(0, 1000, 0);
           this.cameraL.lookAt(0, 0, 0);

           //画线
           let geometry = new three.Geometry();
           geometry.vertices.push(new three.Vector3(-100, 0, 100));
           geometry.vertices.push(new three.Vector3(100, 0, -100));
        //    geometry.vertices.push(new three.Vector3(0, 0, 10));
           let material = new three.LineBasicMaterial({ color:0x0000ff }); // { color:0x0000ff }
           this.line = new three.Line(geometry, material);
           this.sceneL.add(this.line);


           //渲染
           this.rendererL = new three.WebGLRenderer({antialias: true});
           this.rendererL.setSize(lines_box.innerWidth/lines_box.innerHeight,1, 500);
           lines_box.appendChild(this.rendererL.domElement);
           this.rendererL.render(this.sceneL, this.cameraL);
       }
    },
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
    @import '../../sass/page/cube.scss'
</style>
