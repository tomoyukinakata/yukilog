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
    const cursor = document.querySelector('.js-cursor')
    const link = document.querySelectorAll('a')

    window.addEventListener('mousemove', (e) => {
      this.mouseMoveCursor(cursor, e, 1.0)
    })

    for (let i = 0; i < link.length; i++) {
      link[i].addEventListener('mouseenter', (e) => {
        cursor.classList.add('is-active')
      })

      link[i].addEventListener('mouseleave', (e) => {
        cursor.classList.remove('is-active')
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
