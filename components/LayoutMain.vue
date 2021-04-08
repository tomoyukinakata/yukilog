<template>
  <main class="l-main">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: 'LayoutMain',
}
</script>

<style lang="scss" scoped>
.l-main {
  flex-grow: 1;
}
</style>
