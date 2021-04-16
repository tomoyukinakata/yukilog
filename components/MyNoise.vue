<template>
  <div class="p-noise"></div>
</template>

<script>
export default {
  name: 'MyNoise',
}
</script>

<style lang="scss" scoped>
.p-noise {
  opacity: 0.025;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('@/assets/image/bg_noise.png');
  pointer-events: none;
  animation: noise 0.4s steps(10) infinite;
}

@keyframes noise {
  0%,
  100% {
    background-position: 0 0;
  }

  50% {
    background-position: 128px 128px;
  }
}
</style>
