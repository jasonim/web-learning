/**
 * Created by jsson on 17/6/3.
 */
// 注册
Vue.component('my-component', {
    template: '<div>A custom component!</div>'
})
// 创建根实例
new Vue({
    el: '#example'
})

var Child = {
    template: '<div>A custom component!</div>'
}
new Vue({
    // ...
    components: {
        // <my-component> 将只在父模板可用
        'my-component': Child
    }
})