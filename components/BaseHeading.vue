<template>
  <h1 :class="`c-heading ${uppercase}`">
    <slot />
  </h1>
</template>

<script>
export default {
  name: 'BaseHeading',
  props: {
    uppercase: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.c-heading {
  padding-top: 24px;
  @include font($font-size: 24, $line-height: 32);
  &.c-heading--uppercase {
    text-transform: uppercase;
  }
}
</style>
