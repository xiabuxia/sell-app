<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>

      </div>
      <div v-if="seller.supports" class="support-count" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <div class="detail" v-show="detailShow">
    <!--sticky footer布局-->
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <h1 class="name">{{seller.name}}</h1>
          <div class="star-wrap">
            <star :size="48" :score="seller.score"></star>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul v-if="seller.supports" class="supports">
            <li class="support-item" v-for="(item,index) in seller.supports">
              <span class="icon" :class="classMap[seller.supports[index].type]"></span>
              <span class="text">{{seller.supports[index].description}}</span>
            </li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <p class="content">{{seller.bulletin}}</p>
          </div>
          
        </div>
      </div>

      <div class="detail-close" @click="hideDetail">
        <i class="icon-close"></i>
      </div>
    </div>
  </div>
</template>

<script>
import star from '../star/Star.vue'
export default {
  props: {
    seller: {
      type: Object
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  data () {
    return {
      detailShow: false
    }
  },
  methods: {
    showDetail () {
      this.detailShow = true
    },
    hideDetail () {
      this.detailShow = false
    }
  },
  components: {
    star
  }
}
</script>


<style lang="scss" scoped>
@import '../../common/style/mixin.scss';

  .header {
    color: #fff;
    background: rgba(7,17,27,0.5);
    position: relative;
    overflow: hidden;
  }
  .content-wrapper {
    padding: 24px 12px 18px 24px;
    font-size: 0;
    position: relative;
  }
  .avatar {
    display: inline-block;
    vertical-align: top;
  }
  .avatar img {
    border-radius: 2px;
  }
  .content {
    display: inline-block;
    margin-left: 16px;
  }
  .title {
    margin: 2px 0 8px 0;
  }
  .brand {
    display: inline-block;
    vertical-align: top;
    width: 30px;
    height: 18px;
    @include bg-image('brand');
    background-size: 30px 18px;
    background-repeat: no-repeat;
  }
  .content .name {
    margin-left: 6px;
    font-size: 16px;
    line-height: 18px;
    font-weight: bold; 
  }
  .description {
    margin-bottom: 10px;
    line-height: 12px;
    font-size: 12px;
  }

  .support .icon {
    display: inline-block;
    vertical-align: top;
    width: 12px;
    height: 12px;
    margin-right: 4px;
    background-size: 10px;
    background-repeat: no-repeat;
    &.decrease {
      @include bg-image('decrease_1');
    }
    &.discount {
      @include bg-image('discount_1');
    }
    &.guarantee {
      @include bg-image('guarantee_1');
    }
    &.invoice {
      @include bg-image('invoice_1');
    }
    &.special {
      @include bg-image('special_1');
    }
  }
  .support .text {
    display: inline-block;
    line-height: 12px;
    font-size: 10px;
  }
  .support-count {
    position: absolute;
    right: 12px;
    bottom: 18px;
    padding: 0 8px;
    height: 24px;
    border-radius: 14px;
    background: rgba(0,0,0,0.2);
    border-top: 1px solid transparent;
  }
  .support-count .count {
    display: inline-block;
    vertical-align: top;
    line-height: 24px;
    font-size: 10px;
  }
  .support-count .icon-keyboard_arrow_right {
    margin-left: 2px;
    line-height: 24px;
    font-size: 10px;
  }
  .bulletin-wrapper {
    position: relative;
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    border-top: 1px solid transparent;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: rgba(7,17,27,0.2);
  }
  .bulletin-title {
    display: inline-block;
    vertical-align: top;
    margin-top: 9px;
    width: 22px;
    height: 12px;
    @include bg-image('bulletin');
    background-size: 22px 12px;
    background-repeat: no-repeat;
  }
  .bulletin-text {
    margin: 0 8px;
    font-size: 10px;
  }
   .bulletin-wrapper .icon-keyboard_arrow_right {
     position: absolute;
     font-size: 10px;
     right: 12px;
     top: 10px;
   }
   .background {
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     Z-index: -1;
     filter: blur(10px);
   }
   .header .detail {
     position: fixed;
     z-index: 100;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     overflow: auto;
     transition: all 0.5s;
     background: rgba(7,17,27,0.8);

   }
   .detail-wrapper {
     min-height: 100%;
   }
   .detail-main {
     margin-top: 64px;
     padding-bottom: 64px;
     width: 100%;
   }
   .detail-main .name {
     line-height: 16px;
     text-align: center;
     font-size: 16px;
     font-weight: 700;
   }
   .detail-close {
    position: relative;
    width: 32px;
    height: 32px;
    margin: -64px auto 0 auto;
    clear: both;
    font-size: 32px;
   }
   .star-wrap {
     margin-top: 18px;
     padding: 2px 0;
     text-align: center;
   }
   .detail-wrapper .title {
     display: flex;
     width: 80%;
     margin: 30px auto 24px auto;
     .line {
       flex: 1;
       position: relative;
       top: -6px;
       border-bottom: 1px solid rgba(255,255,255,0.2);
     }
     .text {
       padding: 0 12px;
       font-weight: 700;
       font-size: 14px;
     }
   }
   .detail-wrapper .supports {
     width: 80%;
     margin: 0 auto;
     .support-item {
       padding: 0 12px;
       margin-bottom: 12px;
       font-size: 0;
       &:last-child {
         margin-bottom: 0;
       }
       .icon {
         display: inline-block;
         width: 16px;
         height: 16px;
         vertical-align: top;
         margin-right: 6px;
         background-size: 16px 16px;
         background-repeat: no-repeat;
         &.decrease {
           @include bg-image('decrease_2');
         }
         &.discount {
           @include bg-image('discount_2');
         }
         &.guarantee {
           @include bg-image('guarantee_2');
         }
         &.invoice {
           @include bg-image('invoice_2');
         }
         &.special {
           @include bg-image('special_2');
         }
       }
       .text {
         line-height: 16px;
         font-size: 12px;
       }
     }
    
   }
   .detail-main .bulletin {
     width: 80%;
     margin: 0 auto;
     .content {
       padding: 0 12px;
       line-height: 24px;
       font-size: 12px;
     }
   }
</style>
