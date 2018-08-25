<template>
    <div class="appHeader">
        <div class="iconLeftBox"><i class="iconfont icon-left"></i></div>
        <div class="iconRightBox">
            <i class="iconfont icon-ionc--"></i>
            <i class="iconfont icon-shop-cart"></i>
            <i class="iconfont icon-moreread"></i>
        </div>
    </div>
</template>

<script>
import '../../../static/css/iconfont.css'
export default {
    name: 'appHeader'
}
</script>

<style lang="scss" scoped>
.appHeader{
  width:100%;
  height:1.3rem;
  background:#fff;
  position:fixed;
  top:0;
  left:0;
  z-index: 100;
  box-shadow: 0px -5px 0.4rem rgba(0, 0, 0, 0.5);
  display: flex;
  .iconLeftBox{
      width:1.3rem;
      text-align: center;
      line-height:100%;
      i{
          font-size:0.6rem;
          color:#7d7b7b;
      }
  }
  .iconRightBox{
      flex:1;
      display: flex;
      justify-content: flex-end;
      .iconfont{
          width:auto;
          padding-right:0.3rem;
          color:#7b7b7b;
          height:1.3rem;
          font-size:0.5rem;
          line-height: 1.3rem;
      }
  }
}
</style>