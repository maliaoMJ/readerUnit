<template>
  <div class="defaultLayout">
    <nuxt/>
  </div>
</template>

<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
*{
  padding:0;
  margin:0;
}
html,body{
  width: 100%;
  height:100%;
}
.defaultLayout{
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  box-sizing: border-box;
}
</style>

