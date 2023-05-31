<template>
  <div>
    <div class="slide-enter-content">
      <h1>vue2 + vite + unocss + unplugin-vue-component</h1>
      <!-- <h1>vite-plugin-pages:引入文件路由</h1> 
      <h1>vite-plugin-vue-layouts:引入布局系统</h1>  -->
      <div m-1 c-red>我使用了unocss</div>
      <div style="display: flex;">
        <div class="i-twemoji-frog" hover:i-twemoji-frowning-face-with-open-mouth></div>
        <div>我使用了unocss的图标</div> 
      </div>
      <div>
        <button @click="toggleDark()" class="i-carbon-sun dark:i-carbon-moon" /> 
        <span>夜间模式</span> 
      </div>
    </div>
  </div>
</template>
<script>
export default{
  name:'HelloWorld',
  methods:{
    toggleDark(){
      if (document.documentElement.className !== 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }
}
</script>
<style scoped>
@keyframes slide-enter {
  0% {
    opacity: 0;
    transform: translateY(10px)
  }

  to {
    opacity: 1;
    transform: none
  }
}

.slide-enter-content > * {
  --stagger: 0;
  --delay: 150ms;
  --start: 0ms;
  animation: slide-enter 1s both 1;
  animation-delay: calc(var(--start) + var(--stagger) * var(--delay));
}

.slide-enter-content > *:nth-child(1) { --stagger: 1; }
.slide-enter-content > *:nth-child(2) { --stagger: 2; }
.slide-enter-content > *:nth-child(3) { --stagger: 3; }
.slide-enter-content > *:nth-child(4) { --stagger: 4; }
.slide-enter-content > *:nth-child(5) { --stagger: 5; }
.slide-enter-content > *:nth-child(6) { --stagger: 6; }
.slide-enter-content > *:nth-child(7) { --stagger: 7; }
.slide-enter-content > *:nth-child(8) { --stagger: 8; }
.slide-enter-content > *:nth-child(9) { --stagger: 9; }
.slide-enter-content > *:nth-child(10) { --stagger: 10; }
.slide-enter-content > *:nth-child(11) { --stagger: 11; }
.slide-enter-content > *:nth-child(12) { --stagger: 12; }
.slide-enter-content > *:nth-child(13) { --stagger: 13; }
.slide-enter-content > *:nth-child(14) { --stagger: 14; }
.slide-enter-content > *:nth-child(15) { --stagger: 15; }
.slide-enter-content > *:nth-child(16) { --stagger: 16; }
.slide-enter-content > *:nth-child(17) { --stagger: 17; }
.slide-enter-content > *:nth-child(18) { --stagger: 18; }
.slide-enter-content > *:nth-child(19) { --stagger: 19; }
.slide-enter-content > *:nth-child(20) { --stagger: 20; }

</style>