<template>
  <div class="p-top-loading js-top-loading">
    <div class="p-top-loading__logo js-top-loading__logo">
      <span class="p-top-loading__logo-inner js-top-loading__logo-inner"
        ><img src="https://i.postimg.cc/tJh0M3jr/image.png" alt=""
      /></span>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'MyLoading',
  mounted() {
    this.openingAnimation()
  },
  methods: {
    openingAnimation() {
      const tl = gsap.timeline()
      const loading = document.querySelector('.js-top-loading')

      if (sessionStorage.getItem('visited')) {
        tl.kill()
        loading.remove()
      } else {
        tl.fromTo(
          '.js-top-loading__logo .js-top-loading__logo-inner',
          1.2,
          {
            y: '100%',
          },
          {
            y: '0%',
            ease: 'Power4.easeOut',
          }
        )
          .to('.js-top-loading__logo .js-top-loading__logo-inner', 1.0, {
            y: '-100%',
            ease: 'Expo.easeIn',
            delay: 0.6,
          })
          .to('.js-top-loading', 1.0, {
            scaleY: 0,
            transformOrigin: '50% 0%',
            ease: 'Power4.easeOut',
          })
        sessionStorage.setItem('visited', 1)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.p-top-loading {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100vh;
  background: $BACKGROUND_COLOR_3;
  .p-top-loading__logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    overflow: hidden;
    @include responsive(xs) {
      width: 160px;
    }
    @include responsive(md) {
      width: 240px;
    }
  }

  .p-top-loading__logo-inner {
    display: block;
    transform: translateY(-100%);
  }
}
</style>
