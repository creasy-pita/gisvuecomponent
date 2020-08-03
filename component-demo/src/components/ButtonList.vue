<template>
  <div class="btn-contenter">
     <el-button class="btnclass"
      :size="item.size"
      v-for="(item,index) in tableButtonList"
      :key="index"
      :icon="item.icon"
      :type="item.type"
      @click="item.handleClick()"
      v-bind="$attrs"
      :circle="item.circle"
      :disabled="item.disabled"
      :loading="item.loading"
      :plain="item.plain"
    >{{item.name}}</el-button>
    <slot></slot>
  </div>
</template>

<script>

export default {
  props:['tableButtonList'],
  inheritAttrs: false , // 关闭特性继承
  data(){
    return{
    
    }
  },
  methods:{
    aaa(){
      console.log('sdfsdfsf')
    },
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/_theme.scss";
.btnclass{
  height: 30px;
  // float: right;
}
</style>