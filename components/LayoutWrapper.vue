<template>
  <div class="l-wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LayoutWrapper',
}
</script>

<style lang="scss" scoped>
.l-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
