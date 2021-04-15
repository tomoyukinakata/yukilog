<template>
  <layout-main>
    <div class="p-blog">
      <div class="p-blog__inner">
        <h1 class="p-blog__title">{{ title }}</h1>
        <p class="p-blog__publishedAt">{{ publishedAt }}</p>
        <p class="p-blog__category">{{ category && category.name }}</p>
        <div class="p-blog__post" v-html="body"></div>
      </div>
    </div>
  </layout-main>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://yukilog.microcms.io/api/v1/blog/${params.slug}`,
      {
        headers: { 'X-API-KEY': '19ddd70a-0f27-4dca-a4f4-96f250654688' },
      }
    )
    return data
  },
}
</script>

<style lang="scss" scoped>
.p-blog {
  @include responsive(xs) {
    padding-top: pxtovw(16, sp);
    padding-bottom: pxtovw(16, sp);
  }
  @include responsive(md) {
    padding-top: pxtovw(40, tablet);
    padding-bottom: pxtovw(40, tablet);
  }
  .p-blog__inner {
    @include responsive(xs) {
      padding-right: pxtovw(24, sp);
      padding-left: pxtovw(24, sp);
    }
    @include responsive(md) {
      padding-right: pxtovw(40, tablet);
      padding-left: pxtovw(40, tablet);
    }
  }
  .p-blog__title {
    @include responsive(xs) {
      @include font($font-size: 24, $device: sp);
    }
    @include responsive(md) {
      @include font($font-size: 24, $device: tablet);
    }
  }
  .p-blog__publishedAt {
    @include responsive(xs) {
      margin-top: pxtovw(24, sp);
    }
    @include responsive(md) {
      margin-top: pxtovw(24, tablet);
    }
  }
  .p-blog__category {
    @include responsive(xs) {
      margin-top: pxtovw(24, sp);
    }
    @include responsive(md) {
      margin-top: pxtovw(24, tablet);
    }
  }
  .p-blog__post {
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
