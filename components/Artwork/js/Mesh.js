import * as THREE from 'three'

import vertexShader from './glsl/shape.vert'
import fragmentShader from './glsl/shape.frag'

export default class Mesh {
  constructor(stage) {
    this.uniforms = {
      u_texture: {
        type: 't',
        value: new THREE.TextureLoader().load(
          'https://i.postimg.cc/65Tr7ksh/1920-Web-1.jpg'
        ),
      },
      u_time: { type: 'f', value: 1.0 },
    }
    this.stage = stage
    this.mesh = null
  }

  init() {
    this.geometry = new THREE.PlaneGeometry(4, 2.5, 20, 20)

    this.material = new THREE.RawShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: this.uniforms,
    })

    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.mesh.rotation.x = -0.25
    this.stage.scene.add(this.mesh)
  }

  _render() {
    this.uniforms.u_time.value += 0.02
  }

  onRaf() {
    this._render()
  }
}
