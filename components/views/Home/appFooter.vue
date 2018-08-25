<template>
   <div class="appFooter">
     <i class="iconfont icon-studioslist"></i>
     <i class="iconfont icon-tiaojie"></i>
     <i class="iconfont icon-sun"></i>
     <i class="iconfont icon-A"></i>
   </div> 
</template>

<script>
import '../../../static/css/iconfont.css'
export default {
  name: 'appFooter'  
}
</script>
<style lang="scss" scoped>
.appFooter {
 position:fixed;
 bottom:0;
 left:0;
 width:100%;
 height:1.3rem;
 background:#fff;
 z-index:100;
 box-shadow: 0px -5px 0.4rem rgba(0, 0, 0, 0.5);
 display: flex;
 .iconfont{
     flex:1;
     color:#7b7b7b;
     line-height: 1.3rem;
     font-size:0.6rem;
     text-align: center;
 }
}
</style>
