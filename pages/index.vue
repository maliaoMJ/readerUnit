<template>
  <div class="homePage" id="read">
  </div>
</template>

<script>
import Epub from 'epubjs'

const bookUrl = '/book/4.epub'
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
 }
</style>

