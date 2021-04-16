<template>
  <div class="p-cursor js-cursor"></div>
</template>

<script>
export default {
  name: 'MyCursor',
  data() {
    return {
      cursorPosX: 0,
      cursorPosY: 0,
    }
  },
  mounted() {
    this.cursor = document.querySelector('.js-cursor')
    this.link = document.querySelectorAll('a')

    window.addEventListener('mousemove', (e) => {
      this.mouseMoveCursor(this.cursor, e, 1.0)
    })

    for (let i = 0; i < this.link.length; i++) {
      this.link[i].addEventListener('mouseenter', () => {
        this.mouseEnter()
      })

      this.link[i].addEventListener('mouseleave', () => {
        this.mouseLeave()
      })
    }
  },
  methods: {
    mouseMoveCursor(element, event, friction) {
      this.cursorPosX += (event.clientX - this.cursorPosX) * friction
      this.cursorPosY += (event.clientY - this.cursorPosY) * friction
      element.style.transform = `translate(${
        this.cursorPosX - element.clientWidth / 2
      }px,${this.cursorPosY - element.clientHeight / 2}px)`
    },
    mouseEnter() {
      this.cursor.classList.add('is-active')
    },
    mouseLeave() {
      this.cursor.classList.remove('is-active')
    },
  },
}
</script>

<style lang="scss" scoped>
.p-cursor {
  @include responsive(md) {
    position: fixed;
    width: 32px;
    height: 32px;
    border-radius: 100%;
    background-color: rgba($BACKGROUND_COLOR, 0.8);
    pointer-events: none;
    transition: transform 0.4s ease-out, width 0.4s ease-out,
      height 0.4s ease-out;
    &.is-active {
      width: 64px;
      height: 64px;
    }
  }
}
</style>
