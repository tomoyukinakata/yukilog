<template>
  <section class="artwork">
    <canvas ref="canvas" class="artwork__canvas"></canvas>
  </section>
</template>

<script>
import ArtworkGL from './js/ArtworkGL'
export default {
  name: 'Artwork',
  data() {
    return {}
  },
  mounted() {
    if (!this.artworkGL)
      this.artworkGL = new ArtworkGL({
        $canvas: this.$refs.canvas,
      })
  },
  destroyed() {},
  methods: {},
}
</script>

<style>
.artwork {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
}
</style>
