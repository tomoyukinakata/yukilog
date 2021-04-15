<template>
  <div class="p-cursor">
    <div class="p-cursor__pointer js-cursor__pointer"></div>
    <div class="p-cursor__follow js-cursor__follow"></div>
  </div>
</template>

<script>
export default {
  name: 'MyCursor',
  data() {
    return {
      cursorFollowActiveBuffer: 16,
      cursorPosX: 0,
      cursorPosY: 0,
    }
  },
  mounted() {
    const cursorPointer = document.querySelector('.js-cursor__pointer')
    const cursorFollow = document.querySelector('.js-cursor__follow')
    window.addEventListener('mousemove', (e) => {
      this.mouseMoveCursor(cursorPointer, e, 1.0)
      this.mouseMoveCursor(cursorFollow, e, 1.0)
    })
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
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  .p-cursor__pointer,
  .p-cursor__follow {
    @include responsive(md) {
      position: absolute;
      width: 10px;
      height: 10px;
    }
  }
  .p-cursor__pointer {
    @include responsive(md) {
      border-radius: 100%;
      background-color: $BACKGROUND_COLOR;
    }
  }
  .p-cursor__follow {
    @include responsive(md) {
      padding: 32px;
      border: 1px solid $BORDER_COLOR_2;
      transition: all 0.2s ease-out;
      border-radius: 100%;
    }
  }
}
</style>
