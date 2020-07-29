<template>
  <div class="app-root">
    <tablelist></tablelist>
  </div>
</template>

<script>
import tablelist from '@/components/workcenter/tablelist.vue';


export default {
  name: "App",
  components: {
    tablelist
  },
  data() {
    return {

    };
  },

  methods:{
    handleClick(){
      this.show = !this.show
    }
  }
};
</script>

<style lang="scss">

</style>
