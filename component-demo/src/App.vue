<template>
  <div class="app-root">
    <tablelist></tablelist>
  </div>
</template>

<script>
import tablelist from '@/components/workcenter/tablelist.vue';
// import SearchItem from './components/SearchItem.vue'
// // import FormComponent from './components/FormComponent.vue'
// import FreeTable from "@/components/FreeTable";
// import TableData from "@/table";
// import ButtonList from "@/components/ButtonList.vue"

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
