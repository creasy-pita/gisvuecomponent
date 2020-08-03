<template>
  <div class="app-root">
    <workcenter></workcenter>
  </div>
</template>

<script>
import workcenter from '@/components/workCenter'

export default {
  name: "App",
  components: {
    workcenter
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
