<template>
   <div class="appFooter">
     <transition name="slide-panle">
      <div class="settingPanle" v-show="isShowMenu & isShowSettingFonts">
        <div class="preview" :style="{fontSize: `${fontSizeList[0].size}px`}">A</div>
        <div class="prograssWrapper">
          <div class="item" v-for="item in fontSizeList" :key="item.size">
            <div class="line"></div>
            <div
             class="point"
             :class="{active: defaultSize === item.size}"
             @click="changeFontSize(item.size)"
            ></div>
            <div class="line"></div>
          </div>
        </div>
        <div class="preview"  :style="{fontSize: `${fontSizeList[fontSizeList.length - 1].size}px`}">A</div>
      </div>
     </transition>
     <transition name="slide-up">
        <div class="settingsBar" v-show="isShowMenu" :class="{hideBoxShadow: isShowSettingFonts}">
          <i class="iconfont icon-studioslist"></i>
          <i class="iconfont icon-tiaojie"></i>
          <i class="iconfont icon-sun"></i>
          <i class="iconfont icon-A" @click="toggleSettingFontsPanle"></i>
        </div>
     </transition>
   </div> 
</template>

<script>
import '../../../static/css/iconfont.css'
export default {
  name: 'appFooter',
  props: {
    isShowMenu: {
      type: Boolean,
      default: false
    },
    fontSizeList: {
      type: Array,
      default: ()=>({})
    },
    defaultSize: {
      type: Number,
      default: 16
    }

  },
  data() {
    return {
      isShowSettingFonts: false
    }
  },
  methods: {
    toggleSettingFontsPanle() {
      this.isShowSettingFonts = !this.isShowSettingFonts
    },
    closeSettingFontsPanle() {
      this.isShowSettingFonts = false
    },
    changeFontSize(fontSize) {
      this.$emit('changeFontSize', fontSize)
    }
  }
}
</script>
<style lang="scss" scoped>
.appFooter{
  .settingPanle{
   position:absolute;
   left:0;
   bottom:1.29rem;
   height:1.5rem;
   width:100%;
   background:#fff;
   box-shadow: 0px -5px 0.4rem rgba(0, 0, 0, 0.5);
   display: flex;
   .preview{
     height:100%;
     width:1.3rem;
     text-align: center;
     line-height: 1.3rem;
   }
   .prograssWrapper{
     flex:1;
     display: flex;
     .item{
       flex:1;
       display: flex;
       justify-content: center;
       align-items: center;
       &:first-child{
         :first-child{
           visibility: hidden;
         }
       }
       &:last-child{
         :last-child{
           visibility: hidden;
         }
       }
       .line{
         flex:1;
         height:0;
         border-top:0.03rem solid #ccc;
       }
       .point{
         width:0;
         height:20px;
         border-left:4px solid #ccc;
         &.active{
           background:red;
           width:10px;
           height:10px;
           border:15px  solid #fff;
           background:rgb(23, 135, 239);
           border-radius: 100%;
           box-sizing: content-box;
           box-shadow: 0 4px 8px rgba(0,0,0,0.5);
         }
       }
     }
   }
  }
   .settingsBar {
  position: absolute;
  bottom:0;
  left:0;
  width:100%;
  height:1.3rem;
  background:#fff;
  z-index:100;
  box-shadow: 0px -5px 0.4rem rgba(0, 0, 0, 0.5);
  display: flex;
  &.hideBoxShadow{
    box-shadow: none;
  }
    .iconfont{
        flex:1;
        color:#7b7b7b;
        line-height: 1.3rem;
        font-size:0.6rem;
        text-align: center;
    }
  }
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
 .slide-panle-enter-active {
  transition: all .3s linear;
}
.slide-panle-leave-active {
  transition: all .3s linear;
}
.slide-panle-enter, .slide-panle-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(2.8rem);
  opacity: 0;
}
</style>
