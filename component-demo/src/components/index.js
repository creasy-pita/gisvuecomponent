
import workcentermock from '../mock/index';
// 导⼊组件，组件必须声明 name
import workcenterbformtable from './workCenter.vue'
// 为组件提供 install 安装⽅法，供按需引⼊
workcenterbformtable.install = function (Vue) {
    Vue.component(workcenterbformtable.name,workcenterbformtable)
}
// 默认导出组件
export  {workcenterbformtable,workcentermock}