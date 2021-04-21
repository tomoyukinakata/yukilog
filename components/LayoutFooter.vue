<template>
  <footer class="l-footer">
    <div class="l-footer__inner">
      <p class="l-footer__copyright">©Yukilog</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'LayoutFooter',
}
</script>

<style lang="scss" scoped>
.l-footer {
  color: $TEXT_COLOR_2;
  @include responsive(xs) {
    height: 49.5px;
  }
  @include responsive(md) {
    height: 99px;
  }

  .l-footer__inner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    @include responsive(xs) {
      padding-right: 40px;
      padding-left: 40px;
    }
    @include responsive(md) {
      padding-right: 80px;
      padding-left: 80px;
    }
  }

  .l-footer__copyright {
    @include font($font-size: 14);
  }
}
</style>
