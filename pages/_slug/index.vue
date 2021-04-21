<template>
  <layout-main>
    <div class="p-blog l-spacer">
      <div class="p-blog__inner">
        <base-heading>{{ title }}</base-heading>
        <p class="p-blog__publishedAt">
          {{ new Date(publishedAt).toLocaleDateString() }}
        </p>
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
.l-spacer {
  padding-top: 72px;
  padding-bottom: 72px;
}

.p-blog {
  .p-blog__inner {
    @include responsive(xs) {
      padding-right: 40px;
      padding-left: 40px;
    }
    @include responsive(md) {
      padding-right: 80px;
      padding-left: 80px;
    }
  }

  .p-blog__title {
    padding-top: 24px;
    @include font($font-size: 24, $line-height: 32);
  }

  .p-blog__publishedAt {
    margin-top: 24px;
    @include font($font-size: 16);
  }

  .p-blog__category {
    margin-top: 24px;
    @include font($font-size: 16);
  }

  .p-blog__post {
    margin-top: 40px;
    @include font($font-size: 14, $line-height: 32);
  }
}
</style>
