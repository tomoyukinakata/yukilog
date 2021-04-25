<template>
  <main v-if="data" class="main">
    <h1 class="title">{{ data.title }}</h1>
    <p class="publishedAt">{{ data.publishedAt }}</p>
    <div class="post" v-html="data.body"></div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
    data: {}
    };
  },
  async created() {
    const query = this.$route.query;
    if (query.id === undefined || query.draftKey === undefined) {
      return;
    }
    const { data } = await axios.get(
      `https://yukilog.microcms.io/api/v1/blog/${query.id}?draftKey=${query.draftKey}`,
      {
        headers: { 'X-API-KEY': '19ddd70a-0f27-4dca-a4f4-96f250654688' },
      }
    )
    this.data = data;
  },
}
</script>