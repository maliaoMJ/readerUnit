<template>
  <div class="homePage">
    <div id="read"></div>
    <div class="mask">
      <div class="left" @click="prevPage"></div>
      <div class="center"></div>
      <div class="right" @click="nextPage"></div>
    </div>
  </div>
</template>

<script>
import Epub from 'epubjs'

const bookUrl = '/book/1.epub'
export default {
  components: {
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
      .left,.right,.center{
        flex:1;
      }
   }
 }
</style>

