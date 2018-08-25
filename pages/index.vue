<template>
  <div class="homePage">
    <div id="read"></div>
    <div class="mask">
      <div class="left" @click="prevPage"></div>
      <div class="center" @click="toggleMenu"></div>
      <div class="right" @click="nextPage"></div>
       <transition name="slide-down"><app-header v-show="isShowMenu"></app-header></transition>
      <transition name="slide-up"><app-footer v-show="isShowMenu"></app-footer></transition>
    </div>
  </div>
</template>

<script>
import Epub from 'epubjs'
import appHeader from '../components/views/Home/appHeader'
import appFooter from '../components//views/Home/appFooter'
const bookUrl = '/book/4.epub'
export default {
  components: {
    appHeader,
    appFooter
  },
  data() {
    return {
      isShowMenu: false,
    }
  },
  methods: {
    openBook() {
      // 生成BOOK
      this.book = new Epub(bookUrl)
      console.log(this.book)
      this.rendition = this.book.renderTo('read', {
         width: window.innerWidth,
         height: window.innerHeight
      })
      this.rendition.display()
    },
    nextPage() {
      if(this.rendition){
        this.rendition.next()
      }
    },
    prevPage() {
       if(this.rendition){
        this.rendition.prev()
      }
    },
    toggleMenu() {
      this.isShowMenu = !this.isShowMenu
    }
  },
  mounted() {
    console.log('open book')
    this.openBook()
  }
}

</script>

<style lang="scss" scoped>
 .homePage{
   width:100%;
   height:100%;
   background:#fff;
   position: absolute;
   top:0;
   left:0;
   bottom:0;
   right:0;
   #read{
    width:100%;
    height:100%;
    background:#fff;
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;;
    z-index: 10;
   }
   .mask{
      width:100%;
      height:100%;
      position: absolute;
      top:0;
      left:0;
      bottom:0;
      right:0;
      z-index: 20;
      background: rgba(0,0,0,0);
      display: flex;
      flex-direction: row;
      .left,.right{
        flex:1;
      }
      .center{
        width:70%;
      }
   }
 }
 .slide-down-enter-active {
  transition: all .3s linear;
}
.slide-down-leave-active {
  transition: all .3s linear;
}
.slide-down-enter, .slide-down-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(-1.3rem);
  opacity: 0;
}
 .slide-up-enter-active {
  transition: all .3s linear;
}
.slide-up-leave-active {
  transition: all .3s linear;
}
.slide-up-enter, .slide-up-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(1.3rem);
  opacity: 0;
}
</style>

