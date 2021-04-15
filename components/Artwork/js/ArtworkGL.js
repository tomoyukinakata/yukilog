import Stage from './Stage'
import Mesh from './Mesh'

export default class ArtworkGL {
  constructor(props) {
    this.props = props
    this.init()
  }

  init() {
    Stage.init(this.props.$canvas)

    const mesh = new Mesh(Stage)

    mesh.init()

    window.addEventListener('resize', this.resize.bind(this))

    const _raf = () => {
      window.requestAnimationFrame(() => {
        Stage.onRaf()
        mesh.onRaf()
        _raf()
      })
    }
    _raf()
  }

  resize() {
    Stage.onResize()
  }
}
