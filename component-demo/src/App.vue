<template>
  <div class="app-root">
    <workcenter :IP="ip" :PORT="port"></workcenter>
    <!-- <workcenter></workcenter> -->
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
      ip:"192.168.11.78",
      port:"19048"
    };
  },

  methods:{
    handleClick(){
      this.show = !this.show
    }
  }
};
</script>
