<template>
  <header class="l-header">
    <div class="l-header__inner">
      <h1 class="l-header__logo">
        <nuxt-link to="/">Yukilog</nuxt-link>
      </h1>
      <nav class="l-header__nav">
        <ul class="l-header__list">
          <li class="l-header__item">
            <nuxt-link to="/about">about</nuxt-link>
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
    height: 51px;
  }
  @include responsive(md) {
    height: 102px;
  }

  .l-header__inner {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
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

  a {
    display: block;
    color: $TEXT_COLOR_2;
    text-transform: uppercase;
    @include font($font-size: 16);
  }

  .l-header__item {
    a {
      position: relative;
      &::after {
        content: '';
        display: block;
        position: absolute;
        bottom: -6px;
        left: 0;
        width: 0;
        height: 1px;
        background-color: $BACKGROUND_COLOR;
        transition: width 0.4s ease-out;
      }
      &:hover {
        &::after {
          width: 100%;
        }
      }
    }
  }
}
</style>
