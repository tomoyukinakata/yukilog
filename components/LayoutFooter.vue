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
  height: 80px;
  color: $TEXT_COLOR_2;

  .l-footer__inner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    @include responsive(xs) {
      padding-right: pxtovw(24, sp);
      padding-left: pxtovw(24, sp);
    }
    @include responsive(md) {
      padding-right: pxtovw(40, tablet);
      padding-left: pxtovw(40, tablet);
    }
  }

  .l-footer__copyright {
    @include responsive(xs) {
      @include font($font-size: 10, $device: sp);
    }
    @include responsive(md) {
      @include font($font-size: 10, $device: tablet);
    }
  }
}
</style>
