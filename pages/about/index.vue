<template>
  <layout-main>
    <div class="p-about l-spacer">
      <div class="p-about__inner">
        <base-heading>about</base-heading>
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
.l-spacer {
  padding-top: 72px;
  padding-bottom: 72px;
}

.p-about {
  .p-about__inner {
    @include responsive(xs) {
      padding-right: 40px;
      padding-left: 40px;
    }
    @include responsive(md) {
      padding-right: 80px;
      padding-left: 80px;
    }
  }

  .p-about__text {
    margin-top: 32px;
    @include font($font-size: 14, $line-height: 32);
  }
}
</style>
