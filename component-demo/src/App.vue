<template>
  <div class="app-root">
  <select v-model="themeHelper.theme">
    <option v-for="(href, name) of themes" v-bind:key="name" v-bind:value="name">
      {{ name }}
    </option>
  </select>
  <span>Selected: {{ themeHelper.theme }}</span>    
    <workcenter :IP="ip" :PORT="port"></workcenter>
    <!-- <workcenter></workcenter> -->
  </div>
</template>

<script>
import workcenter from '@/components/workCenter'
import ThemeHelper from './utils/ThemeHelper'

export default {
  name: "App",
  components: {
    workcenter
  },
  data() {
    return {
      ip:"192.168.11.78",
      port:"19048",
     themes: {
       //webpack打包默认会输出到根目录
        flatly: "./bluesea.css",
        peach: "./peachprincess.css",       
        solar: "./solar.css",       
        // flatly: "../public/assests/bluesea.css",
        // peach: "../public/assests/peachprincess.css",
     },
     themeHelper: new ThemeHelper(),      
    };
  },
created () {
   let added = Object.keys(this.themes).map(name => {
     return this.themeHelper.add(name, this.themes[name]);
   });

   Promise.all(added).then(sheets => {
     console.log(`${sheets.length} themes loaded`);
     this.loading = false;
     this.themeHelper.theme = "flatly";
   });
},
  methods:{
    handleClick(){
      this.show = !this.show
    }
  }
};
</script>
