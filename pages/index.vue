<template>
  <layout-main>
    <div class="p-blogs l-spacer">
      <div class="p-blogs__inner">
        <ul class="p-blogs__list">
          <li
            v-for="content in contents"
            :key="content.id"
            class="p-blogs__item"
          >
            <nuxt-link :to="`/${content.id}`" class="p-blogs__link">
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
  async asyncData({ $config }) {
    const { data } = await axios.get(
      'https://yukilog.microcms.io/api/v1/blog',
      {
        headers: { 'X-API-KEY': $config.apiKey },
      }
    )
    return data
  },
}
</script>

<style lang="scss" scoped>
.l-spacer {
  @include responsive(xs) {
    padding-top: 72px;
    padding-bottom: 72px;
  }
}

.p-blogs {
  .p-blogs__inner {
    @include responsive(xs) {
      padding-right: 40px;
      padding-left: 40px;
    }
    @include responsive(md) {
      padding-right: 80px;
      padding-left: 80px;
    }
  }

  .p-blogs__link {
    display: inline-block;
    padding-left: 1.3em;
    text-indent: -1.3em;
    @include font($font-size: 20, $line-height: 28);
    @include responsive(xs) {
      padding-top: 16px;
      padding-bottom: 16px;
    }
    @include responsive(md) {
      padding-top: 24px;
      padding-bottom: 24px;
    }
    &::before {
      content: '';
      display: inline-block;
      width: 12px;
      height: 1px;
      background-color: $BACKGROUND_COLOR;
      vertical-align: super;
      transition: width 0.4s ease-out;
      @include responsive(xs) {
        margin-right: 8px;
      }
    }
    &:hover {
      &::before {
        width: 22px;
      }
    }
  }
}
</style>
