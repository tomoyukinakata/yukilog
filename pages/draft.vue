<template>
  <layout-main v-if="data">
    <div class="p-blog l-spacer">
      <div class="p-blog__inner">
        <base-heading>{{ data.title }}</base-heading>
        <p class="p-blog__publishedAt">{{ data.publishedAt }}</p>
        <p class="p-blog__category">{{ data.category && data.category.name }}</p>
        <div class="p-blog__post" v-html="data.body"></div>
      </div>
    </div>
  </layout-main>
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
      `/.netlify/functions/draft?id=${query.id}&draftKey=${query.draftKey}`,
    );
    this.data = data;
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