<template>
  <header class="l-header">
    <div class="l-header__inner">
      <h1 class="l-header__logo">
        <nuxt-link to="/">Yukilog</nuxt-link>
      </h1>
      <nav class="l-header__nav">
        <ul class="l-header__list">
          <li class="l-header__item">
            <nuxt-link to="/">about</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'LayoutHeader',
}
</script>

<style lang="scss" scoped>
.l-header {
  @include responsive(xs) {
    height: 104px;
  }
  @include responsive(md) {
    height: 160px;
  }

  .l-header__inner {
    display: flex;
    justify-content: space-between;
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

  a {
    display: block;
    color: $TEXT_COLOR_2;
  }

  .l-header__logo {
    a {
      @include responsive(xs) {
        @include font($font-size: 14, $device: sp);
      }
      @include responsive(md) {
        @include font($font-size: 14, $device: tablet);
      }
    }
  }

  .l-header__item {
    a {
      @include responsive(xs) {
        @include font($font-size: 14, $device: sp);
      }
      @include responsive(md) {
        @include font($font-size: 14, $device: tablet);
      }
    }
  }
}
</style>
