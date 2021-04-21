<template>
  <layout-wrapper>
    <layout-header />
    <transition name="page">
      <Nuxt />
    </transition>
    <layout-footer />
    <my-loading />
    <my-cursor />
    <my-noise />
    <Artwork />
  </layout-wrapper>
</template>

<script>
import MyLoading from '../components/MyLoading.vue'
export default {
  components: { MyLoading },
  pageTransition: 'page',
}
</script>

<style lang="scss" scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
}

.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
