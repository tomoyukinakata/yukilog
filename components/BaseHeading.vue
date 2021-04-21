<template>
  <h1 class="c-heading">
    <slot />
  </h1>
</template>

<script>
export default {
  name: 'BaseHeading',
}
</script>

<style lang="scss" scoped>
.c-heading {
  padding-top: 24px;
  text-transform: uppercase;
  @include font($font-size: 24, $line-height: 32);
}
</style>
