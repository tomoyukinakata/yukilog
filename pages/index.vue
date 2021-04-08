<template>
  <layout-main>
    <div class="p-blog">
      <div class="p-blog__inner">
        <ul class="p-blog__list">
          <li
            v-for="content in contents"
            :key="content.id"
            class="p-blog__item"
          >
            <nuxt-link :to="`/${content.id}`" class="p-blog__link">
              {{ content.title }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </layout-main>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData() {
    const { data } = await axios.get(
      'https://yukilog.microcms.io/api/v1/blog',
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
      padding-right: pxtovw(16, sp);
      padding-left: pxtovw(16, sp);
    }
    @include responsive(md) {
      padding-right: pxtovw(40, tablet);
      padding-left: pxtovw(40, tablet);
    }
  }
  .p-blog__item {
    &:not(:first-child) {
      @include responsive(xs) {
        margin-top: pxtovw(16, sp);
      }
      @include responsive(md) {
        margin-top: pxtovw(40, tablet);
      }
    }
  }
  .p-blog__link {
    @include responsive(xs) {
      @include font($font-size: 14, $device: sp);
    }
    @include responsive(md) {
      @include font($font-size: 14, $device: tablet);
    }
  }
}
</style>
