<template>
  <layout-wrapper>
    <layout-header />
    <Nuxt />
    <layout-footer />
    <div class="p-noise"></div>
  </layout-wrapper>
</template>

<style lang="scss" scoped>
.p-noise {
  opacity: 0.4;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('@/assets/image/bg_noise.png');
  pointer-events: none;
  animation: noise 0.4s steps(8) infinite;
}

@keyframes noise {
  0% {
    background-position: 0 0;
  }

  to {
    background-position: 128px 128px;
  }
}
</style>
