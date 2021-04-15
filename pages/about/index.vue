<template>
  <layout-main>
    <div class="p-about">
      <div class="p-about__inner">
        <h1 class="p-about__title">about</h1>
        <p class="p-about__text">
          フロントエンドエンジニアのゆきです。<br />
          現在は原宿にある高校でJKをやっています。<br />
          体の120%はナンと甘いものでできています(もはやはみ出している)<br />
          フロントエンド領域をメインに色々と勉強中。<br />
          宗教上の理由でjQueryは使っていません。<br />
          何卒。
        </p>
      </div>
    </div>
  </layout-main>
</template>

<script></script>

<style lang="scss" scoped>
.p-about {
  @include responsive(xs) {
    padding-top: pxtovw(16, sp);
    padding-bottom: pxtovw(16, sp);
  }
  @include responsive(md) {
    padding-top: pxtovw(40, tablet);
    padding-bottom: pxtovw(40, tablet);
  }
  .p-about__inner {
    @include responsive(xs) {
      padding-right: pxtovw(24, sp);
      padding-left: pxtovw(24, sp);
    }
    @include responsive(md) {
      padding-right: pxtovw(40, tablet);
      padding-left: pxtovw(40, tablet);
    }
  }
  .p-about__title {
    @include responsive(xs) {
      @include font($font-size: 24, $device: sp);
    }
    @include responsive(md) {
      @include font($font-size: 24, $device: tablet);
    }
  }
  .p-about__text {
    @include responsive(xs) {
      margin-top: pxtovw(32, sp);
    }
    @include responsive(md) {
      margin-top: pxtovw(32, tablet);
    }
    @include responsive(xs) {
      @include font($font-size: 14, $line-height: 32, $device: sp);
    }
    @include responsive(md) {
      @include font($font-size: 14, $line-height: 32, $device: tablet);
    }
  }
}
</style>
