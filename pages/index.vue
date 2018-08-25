<template>
  <div class="homePage">
    <div id="read"></div>
    <div class="mask">
      <div class="left" @click="prevPage"></div>
      <div class="center" @click="toggleMenu"></div>
      <div class="right" @click="nextPage"></div>
       <transition name="slide-down">
         <app-header v-show="isShowMenu"></app-header>
       </transition>
     <app-footer
     :isShowMenu="isShowMenu"
     :fontSizeList="fontSizeList"
     :defaultSize="defaultSize"
     @changeFontSize="changeFontSize"
     ref="appfooter"
     ></app-footer>
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
      fontSizeList: [
        {size: 12},
        {size: 14},
        {size: 16},
        {size: 18},
        {size: 20},
        {size: 22},
        {size: 24}
      ],
      defaultSize: 16
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
      this.themes = this.rendition.themes
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
      if(!this.isShowMenu){
        this.$nextTick(()=>{
          this.$refs.appfooter.closeSettingFontsPanle()
        })
      }
    },
    changeFontSize(fontSize) {
      this.defaultSize = fontSize
      console.log(fontSize);
      if(this.themes){
        this.themes.fontSize(`${fontSize}px`)
      }
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
   overflow: hidden;
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

</style>

