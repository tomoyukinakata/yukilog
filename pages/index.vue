<template>
  <layout-main>
    <div class="p-blogs">
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
.p-blogs {
  @include responsive(xs) {
    padding-top: pxtovw(16, sp);
    padding-bottom: pxtovw(16, sp);
  }
  @include responsive(md) {
    padding-top: pxtovw(40, tablet);
    padding-bottom: pxtovw(40, tablet);
  }

  .p-blogs__inner {
    @include responsive(xs) {
      padding-right: pxtovw(24, sp);
      padding-left: pxtovw(24, sp);
    }
    @include responsive(md) {
      padding-right: pxtovw(40, tablet);
      padding-left: pxtovw(40, tablet);
    }
  }

  .p-blogs__item {
    &:not(:first-child) {
      @include responsive(xs) {
        margin-top: pxtovw(16, sp);
      }
      @include responsive(md) {
        margin-top: pxtovw(40, tablet);
      }
    }
    a {
      &::before {
        content: '';
        display: inline-block;
        width: 12px;
        height: 1px;
        background-color: $BACKGROUND_COLOR;
        vertical-align: middle;
        transition: width 0.4s ease-out;
        @include responsive(xs) {
          margin-right: pxtovw(4, sp);
        }
        @include responsive(md) {
          margin-right: pxtovw(4, tablet);
        }
      }
      &:hover {
        &::before {
          width: 22px;
        }
      }
    }
  }

  .p-blogs__link {
    @include responsive(xs) {
      @include font($font-size: 18, $device: sp);
    }
    @include responsive(md) {
      @include font($font-size: 18, $device: tablet);
    }
  }
}
</style>
