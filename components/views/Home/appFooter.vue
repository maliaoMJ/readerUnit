<template>
   <div class="appFooter">
     <!-- // 字体设置 -->
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
     <!-- // 主题 -->
     <transition name="slide-panle">
      <div class="settingThemes" v-show="isShowMenu & isShowSettingThemes">
       <div class="item" v-for="(item, index) in themesList" :key="item.name" :class="{active: defaultThemes === index}" @click="changeThemes(index)">
         <div class="color">
           <div class="colorblock" :style="{background: item.style.body.background}"></div>
         </div>
         <div class="text">{{item.title}}</div>
       </div>
      </div>
     </transition>
     <!-- 进度 -->
     <transition name="slide-panle">
      <div class="settingPrograss" v-show="isShowMenu & isShowSettingPrograss">
       <input
         type="range"
         :disabled="!bookAvailable"
         min=0
         max=100
         step=1
         defaultValue="0"
         :value="defaultPercent"
         @change="changePrograss"
         :style="{backgroundSize: `${defaultPercent}% 100%`}"
        />
        <div class="text" v-show="bookAvailable">{{defaultPercent}} %</div>
        <div class="text" v-show="!bookAvailable">解析中</div>
      </div>
     </transition>
     <!-- 目录 -->
     <transition name="slide-left">
      <div class="settingChapters" v-show="isShowMenu & isShowSettingChapters">
       <div class="chaptersBox">
         <div class="dir">基于Nuxt.js MIT协议</div>
         <div class="noneText" v-if="!bookAvailable">加载中...</div>
         <div class="item" v-else v-for="item in navigation.toc" :key="item.id" @click="jumpTo(item.href)">{{item.label}}</div>
       </div>
       
       <div class="mosk" @click="toogleSettingChapters"></div>
      </div>
     </transition>
     <transition name="slide-up">
        <div class="settingsBar" v-show="isShowMenu" :class="{hideBoxShadow: isShowSettingFonts || isShowSettingThemes|| isShowSettingPrograss}">
          <i class="iconfont icon-studioslist" @click="toogleSettingChapters"></i>
          <i class="iconfont icon-tiaojie" @click="toggleSettingPrograss"></i>
          <i class="iconfont icon-sun"  @click="toggleSettingThemes"></i>
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
    bookAvailable: {
      type: Boolean,
      default: false
    },
    fontSizeList: {
      type: Array,
      default: ()=>({})
    },
    navigation: {
      type: Object,
      default: ()=>({})
    },
    themesList: {
      type: Array,
      default: ()=>({})
    },
    defaultSize: {
      type: Number,
      default: 16
    },
    defaultPercent: {
      type: Number,
      default: 0
    },
    defaultThemes: {
      type: Number,
      default: 0
    }

  },
  data() {
    return {
      isShowSettingFonts: false,
      isShowSettingThemes: false,
      isShowSettingPrograss: false,
      isShowSettingChapters: false
    }
  },
  methods: {
    toggleSettingFontsPanle() {
      this.isShowSettingThemes = false
      this.isShowSettingPrograss = false
      this.isShowSettingFonts = !this.isShowSettingFonts
    },
    toggleSettingThemes() {
      this.isShowSettingFonts = false
      this.isShowSettingPrograss = false
      this.isShowSettingThemes = !this.isShowSettingThemes
    
    },
    toggleSettingPrograss() {
      this.isShowSettingFonts = false
      this.isShowSettingThemes = false
      this.isShowSettingPrograss = !this.isShowSettingPrograss
    },
    toogleSettingChapters() {
      this.isShowSettingChapters = !this.isShowSettingChapters
    },
    closeSettingsThemes() {
      this.isShowSettingThemes = false
    },
    closeSettingFontsPanle() {
      this.isShowSettingFonts = false
    },
    closeSettingFontsPrograss() {
      this.isShowSettingPrograss = false
    },
    closeSettingChapters() {
      this.isShowSettingChapters = false
    },
    jumpTo(href) {
      this.$emit('jumpTo', href)
    },
    changeFontSize(fontSize) {
      this.$emit('changeFontSize', fontSize)
    },
    changePrograss(e) {
      const percent = e.target.value
      this.$emit('changePrograss', percent)
    },
    changeThemes(index) {
      this.$emit('changeThemes', index)
    }
  }
}
</script>
<style lang="scss" scoped>
.appFooter{
  .settingPanle{
   position:absolute;
   left:0;
   bottom:1.28rem;
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
  .settingThemes{
   position:absolute;
   left:0;
   bottom:1.28rem;
   height:1.5rem;
   width:100%;
   background:#fff;
   box-shadow: 0px -5px 0.4rem rgba(0, 0, 0, 0.5);
   display: flex;
   .item{
     flex:1;
     height: 100%;
     display:flex;
     flex-direction: column;
     font-size:0.25rem;
     &.active{
       background:#eee;
       color:red;
     }
     .color{
       height:0.8rem;
       display: flex;
       align-items: center;
       justify-content: center;
       .colorblock{
         width:80%;
         height:80%;
       }
     }
     .text{
       flex:1;
       display: flex;
       align-items: center;
       justify-content: center;
     }
   }
  }
  .settingChapters{
      position:fixed;
      top:0;
      left:0;
      width: 100%;
      height:100%;
      z-index: 200;
      // background:rgba(0,0,0,0.5);
      display:flex;
      .chaptersBox{
        width:80%;
        background:#fff;
        height:100%;
        overflow: auto;
        box-shadow: 10px 0px 10px rgba(0,0,0,.15);
        .item{
          width:100%;
          height:1rem;
          font-size:0.4rem;
          color:#222;
          line-height: 1rem;
          border-bottom:1px solid #ccc;
          padding-left:20px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          box-sizing: border-box;
        }
        .noneText{
          width:100%;
          height:80%;
          display:flex;
          justify-content: center;
          align-items: center;
          font-size:0.5rem;
          text-align: center;
          color:#aaa;
        }
      }
      .dir{
       width:100%;
       height:1.3rem;
       border-bottom:1px solid #ccc;
       font-size:0.7rem;
       line-height: 1.3rem;
       padding-left:0.75rem;
     }
     .noneText{

     }
      .mosk{
        flex:1;
      }
  }
  .settingPrograss{
    position:absolute;
    left:0;
    bottom:1.28rem;
    height:1.5rem;
    width:100%;
    background:#fff;
    box-shadow: 0px -5px 0.4rem rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    /*横条样式*/
    input[type=range] {
      -webkit-appearance: none;/*清除系统默认样式*/
      flex:1;
      margin-left:5%;
      background: -webkit-linear-gradient(#fd8a2c, #fd8a2c) no-repeat, #ddd;/*设置左边颜色为#61bd12，右边颜色为#ddd*/
      background-size: 75% 100%;/*设置左右宽度比例*/
      height: 3px;/*横条的高度*/
    }
    /*拖动块的样式*/
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;/*清除系统默认样式*/
      height: 26px;/*拖动块高度*/
      width: 26px;/*拖动块宽度*/
      background: #fff;/*拖动块背景*/
      border-radius: 50%; /*外观设置为圆形*/
      border: solid 1px #ddd; /*设置边框*/

}
.text{
  width:1.28rem;
  height:100%;
  font-size:0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color:#aaa;
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
  transform: translateY(2.78rem);
  opacity: 0;
}
 .slide-left-enter-active {
  transition: all .3s linear;
}
.slide-left-leave-active {
  transition: all .3s linear;
}
.slide-left-enter, .slide-left-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translate3d(-100%, 0, 0);
  opacity: 0;
}
</style>
