import * as THREE from 'three'

class Stage {
  constructor() {
    this.cameraParam = {
      fov: 45,
      aspect: 0,
      near: 0.1,
      far: 10000,
      lookAt: new THREE.Vector3(0, 0, 0),
      x: 0,
      y: 0,
      z: 10,
    }

    this.scene = null
    this.camera = null
    this.renderer = null
    this.geometry = null
    this.material = null
    this.mesh = null

    this.size = {
      windowW: null,
      windowH: null,
    }

    this.isInitialized = false
  }

  init($canvas) {
    this.setSize()
    this.scene = new THREE.Scene()
    this.renderer = new THREE.WebGLRenderer({
      canvas: $canvas,
      antialias: true,
      alpha: true,
    })
    this.renderer.setClearColor(new THREE.Color(0xd0d0d0))
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(this.size.windowW, this.size.windowH)
    this._setCamera()

    this.isInitialized = true
  }

  _setCamera() {
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight

    if (!this.isInitialized) {
      this.camera = new THREE.PerspectiveCamera(
        this.cameraParam.fov,
        this.cameraParam.aspect,
        this.cameraParam.near,
        this.cameraParam.far
      )

      this.camera.position.set(
        this.cameraParam.x,
        this.cameraParam.y,
        this.cameraParam.z
      )
      this.camera.lookAt(this.cameraParam.lookAt)
    }

    this.camera.aspect = windowWidth / windowHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(windowWidth, windowHeight)
  }

  _render() {
    this.renderer.render(this.scene, this.camera)
  }

  setSize() {
    this.size = {
      windowW: window.innerWidth,
      windowH: window.innerHeight,
    }
  }

  onResize() {
    this.setSize()
    this._setCamera()
    this.renderer.setSize(this.size.windowW, this.size.windowH)
  }

  onRaf() {
    this._render()
  }
}

export default new Stage()
