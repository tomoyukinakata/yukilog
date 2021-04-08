<template>
  <layout-main>
    <h1 class="title">{{ title }}</h1>
    <p class="publishedAt">{{ publishedAt }}</p>
    <p class="category">{{ category && category.name }}</p>
    <div class="post" v-html="body"></div>
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

<style lang="scss" scoped></style>
