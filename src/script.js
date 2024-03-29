import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
// mesh.position.y=-0.5
// mesh.position.x=0.6
// mesh.position.z=0.6
mesh.position.set(0.7,-0.3,1)
//mesh.position.normalize()
scene.add(mesh)

// Axes helper

const axesHelper =  new THREE.AxesHelper(2)
scene.add(axesHelper)

//scale

// mesh.scale.x=2
// mesh.scale.y=0.5
// mesh.scale.z=0.5
mesh.scale.set(0.5,0.5,0.5)


console.log(mesh.position.length())
//console.log(mesh.position.distanceTo(new THREE.Vector3(0,1,2)))

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

console.log(mesh.position.distanceTo(camera.position))
    
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

/*any change before renderer is taken in account*/

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)