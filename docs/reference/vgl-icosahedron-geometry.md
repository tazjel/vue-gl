---
layout: reference
---
{% include breadcrumbs/geometries.md %} VglIcosahedronGeometry
# VglIcosahedronGeometry `<vgl-icosahedron-geometry>`
A component for generating a icosahedron geometries., corresponding [THREE.IcosahedronGeometry](https://threejs.org/docs/index.html#api/geometries/IcosahedronGeometry).
## Mixins
See the mixin components below for common properties.
* [VglGeometry](vgl-geometry)

## Properties
* {% include prop.md name="radius" type="float" %} - Radius of the icosahedron.
* {% include prop.md name="detail" type="float" %} - Setting this to a value greater than 0 adds vertices making it no longer a icosahedron.

## Example usage
```html
<vgl-renderer antialias style="width: 300px; height: 150px;">
    <vgl-scene>
        <vgl-icosahedron-geometry name="geo"></vgl-icosahedron-geometry>
        <vgl-mesh-standard-material name="std"></vgl-mesh-standard-material>
        <vgl-mesh geometry="geo" material="std"></vgl-mesh>
        <vgl-ambient-light color="#ffeecc"></vgl-ambient-light>
        <vgl-directional-light position="0 1 2"></vgl-directional-light>
    </vgl-scene>
    <vgl-perspective-camera orbit-position="3 1 0.5"></vgl-perspective-camera>
</vgl-renderer>
```
<div class="vgl-example"><iframe class="vgl-example__content" srcdoc="
    <style>
        body {
            margin: 0;
            overflow: hidden;
        }
        .vgl-canvas {
            height: 100vh;
        }
    </style>
    <vgl-renderer antialias class='vgl-canvas'>
        <vgl-scene>
            <vgl-icosahedron-geometry name='geo'></vgl-icosahedron-geometry>
            <vgl-mesh-standard-material name='std'></vgl-mesh-standard-material>
            <vgl-mesh geometry='geo' material='std'></vgl-mesh>
            <vgl-ambient-light color='#ffeecc'></vgl-ambient-light>
            <vgl-directional-light position='0 1 2'></vgl-directional-light>
        </vgl-scene>
        <vgl-perspective-camera orbit-position='3 1 0.5'></vgl-perspective-camera>
    </vgl-renderer>
    <script src='https://unpkg.com/vue/dist/vue.min.js'></script>
    <script src='https://unpkg.com/three/build/three.min.js'></script>
    <script src='../js/vue-gl.js'></script>
    <script>
        Object.keys(VueGL).forEach(function(name) {
            Vue.component(name, VueGL[name]);
        });
        const vm = new Vue({
            el: '.vgl-canvas'
        });
    </script>
"></iframe></div>
<script src="https://unpkg.com/srcdoc-polyfill@1.0.0/srcdoc-polyfill.min.js"></script>
