<template>
  <div id="app">
  <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item border-left-right">
        <router-link class="tab-item" to="/goods">商品</router-link>
      </div>
      <div class="tab-item border-left-right">
        <router-link class="tab-item" to="/ratings">评论</router-link>
      </div>
      <div class="tab-item border-left-right">
        <router-link class="tab-item" to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header.vue'

const ERR_OK = 0
export default {
  data () {
    return {
      seller: {}
    }
  },
  created () {
    this.$http.get('/api/seller').then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.seller = response.data
      }
    })
  },
  components: {
    'v-header': header
  }
}
</script>

<style lang="scss">
@import './common/style/mixin.scss';

   .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    position: relative;
    @include border-1px(rgba(7,17,27,0.1));
  }

  .tab div.tab-item {
    flex: 1;
    text-align: center;
  }
  .tab .tab-item a {
    display: block;
    font-size: 14px;
    color: rgb(77,85,93);
  }
  .router-link-active {
    color: rgb(240,20,20) !important;
  }

</style>
