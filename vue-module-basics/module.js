// var vm = new Vue({
//     el: "#yz-hello",
//     data: {
//         greet:"源栈",
//     },
//     created: function(){
//         console.log('I was created');
//     },
//     mounted: function () {
//         console.log('I was mounted');
//     },
//     updated: function () {
//         console.log('I was updated');
//     }
// })

// a3 基础demo3
// 全局组件
// 一个页面 多个实例对象 其他的实例对象 也能用生成的组件
//  Vue.component('yz-table', {
//     template: '<li>这是个表格1</li>'
// })

// Vue.component('todo-todo', {
//     template: '<li>这是个待办项</li>'
// })

// var vm = new Vue({
//     el: "#yz-hello",
//     data: {
//         greet:"源栈连接测试",
//     },
// })

// var vm2 = new Vue({
//     el: "#yz-hello2",
//     data: {
//         greet:"源栈连接测试2",
//     },
// })

// a4 基础demo4
// 局部组件
// 一个页面 一个实例对象 一个js对象 实例对象引用js对象值
// var password = {
//     template: '<a>你忘记了密码</a>'
// }

// var vm = new Vue({
//     el: "#yz-hello",
//     components:{
//         "forget-parssword":password,
//     } ,
// })

// a5 基础demo5
// 局部用全局
// 设定：局部组件内设定根元素 使用 全局组件
// 目标：全局组件和局部组件并列
// 重点 并列是vue不允许的，实现病例必须有单个根元素 div ，进行包裹
//  Vue.component('yz-table', {
//     template: '<li>这是个表格1</li>'
// })

// var password = {
//     template: `
//     <div>
//         <yz-table></yz-table>
//         <a>你忘记了密码</a>
//     </div>
//     `
// }

// var vm = new Vue({
//     el: "#yz-hello",
//     components:{
//         "forget-parssword":password,
//     } ,
// })

// a6 基础demo6
// 全局组件用局部组件

// 重点
// 全局组件不能使用，没有注册的局部组件
// 在全局组件中 进行局部组注册 组件化，就能使用
// "forget-parssword":password, 加引号的原因是，js变量命名不允许含有中划线 是不许加---这个符号的，
// 局部组件顺序 先模板化 template 、后组件化 components、

// var password = {
//     template: `<a>你忘记了密码</a>`
// }

// Vue.component('yz-table', {
//     template: '<li>这是个表格1 <forget-parssword></forget-parssword> </li>',

//     // 局部组件 组件化过程
//     components:{
//     "forget-parssword":password,
//     } ,
// })

// var vm = new Vue({
//     el: "#yz-hello",
// })
// template  components

//a7 基础demo7
// 组件实例，对比根实例 yz-heloo vue实例 ，区别
// 组件也是实例，同样拥有钩子函数等方法可调用
// 但组件是根实例后代，不能有el方法调用

// 目标
// 组件中使用data方法存值，并且在模板化，的内容中，使用data值
// var password = {
//     template: `<a>你忘记了密码</a>`
// }

// Vue.component('yz-table', {
//     template: '<li>这是个表格1{{greet}} <forget-parssword></forget-parssword> </li>',

//     // 使用data数据
//     data:function (){
//         return{
//             greet:'--组件data数据--'
//         }
//     },

//     // 局部组件 组件化过程
//     components:{
//     "forget-parssword":password,
//     } ,
// })

// var vm = new Vue({
//     el: "#yz-hello",
// })

//a8 基础demo8 props：传值
// 组件在不同的地方使用时，有不同的呈现内容
// 重点 只用html元素的数据 写死的
// :href="url" 注意 要绑定才行， v-bind 绑定属性值
// 过程：声明属性名 template模板化中放置属性名位置 html属性名赋值

// var password = {
//     template: `<a>你忘记了密码</a>`
// }

// Vue.component('yz-table', {
//     template: '<a :href="url">{{todo}}</a>',
//     props: ["todo", "url"],

//     // 使用data数据
//     data:function (){
//         return{
//             greet:'--组件data数据--'
//         }
//     },

//     // 局部组件 组件化过程
//     components:{
//     "forget-parssword":password,
//     } ,
// })

// var vm = new Vue({
//     el: "#yz-hello",
// })

//a9 基础demo9 props：传值
// 第二种
// 重点 用根实例 yz-hello的，data数据
// 绑定
// 过程：声明属性名 template模板化中放置属性名位置 绑定根实例中data值

// var password = {
//     template: `<a>你忘记了密码</a>`
// }

// Vue.component('yz-table', {
//     template: '<a :href="url">{{todo}}</a>',
//     props: ["todo", "url"],
// })

// var vm = new Vue({
//     el: "#yz-hello",
//     data: {
//         pwd:'忘记密码 使用跟实例data属性',
//     },
// })

// a9 第二种分支1 
// 总结数据源使用 父组件向子组件传值 props 
// Vue.component("yz-enroll", {
//     template: '<input type="text" name="username" v-bind:value= "username" />',
//     props: ["username"],
//     data() {
//       return {
//         username: "atai",
//       };
//     },
//   });

// var vm = new Vue({
//     el: "#yz-hello",
//     data: {
//         username:"atai"
//       },
// })
// 数据源情况 总结
// 组件在html页面中使用，这时行内绑定的东西，比如pwd，比如username，才是最终的数据源，不管这个源头指向哪里，是HTML赋值，父组件的值 
// 数据源 组件自己本身的data值  、 html元素值 、 父组件的data值 、 
//         <yz-enroll :username="username"></yz-enroll>
//        <yz-table  v-bind:todo="pwd" url="https://17bang.ren/Code/248"> </yz-table>

// props：属性

//a10 基础demo10 props：传值
// 第三种
// html元素设定值 往回传，传递对象是模板化template中，标签
// 值传递顺序
// 生成组件 yz table，vue实例 yz-hello 渲染过程调用组件，调用html元素值，传给根组件模板元素值

// 实际开发
// html赋值 传一个样式给 渲染模板化template里面的，标签

// 区别
//  props 声明传回值， style不声明传回值

// 全局组件
// Vue.component("yz-table", {
//     template:
//         '<a :href="url">{{todo}}   <span> 组件值往回传</span> </a>',
//     props: ["todo", "url"],
// });

// var vm = new Vue({
//     el: "#yz-hello",
//     data: {
//         pwd: "忘记密码 使用跟实例data属性",
//     },
// });
















//a11 基础demo11
// 组件上添加事件 <a @click="greet"
// 全局组件
// Vue.component("yz-table", {
//     template:
//         `<a @click="greet">{{todo}}
//         <span>1</span>
//         </a>`
// ,
//     props: ["todo",],

//     methods: {
//         // 调用事件
//         greet:function(){
//             alert('源栈欢迎你你');
//         },
//     }
// });

// var vm = new Vue({
//     el: "#yz-hello",
//     data: {
//         pwd: "忘记密码 使用跟实例data属性",
//     },
// });














//a12 基础demo12 .$emit 给元素添加事件 
//  子组件向父组件传值 很怪的说法-->
//  调用：更应该说叫 调用根元素的方法
// 全局组件使用时传值:设定自定义事件 自定义事件传值 welcome方法中添加对象


// 官方说法 
// .$emit 在子组件上绑定事件，但事件处理程序中使用$emit()通知父组件，子组件发射数据给父组件 ， 这一把发射的是 “阿泰 ”

// <!-- 使用事件 点击事件 -->
// 全局组件
// Vue.component("yz-table", {
//   template: `<a @click="greet">{{todo}} 
//         <span>1</span> 
//         </a>`,
//   props: ["todo"],

//   methods: {
//     // 调用事件
//     greet: function () {
//       this.$emit("welcome", {
//         sname: "阿泰",
//       });
//       //    顺序
//       // welcome:自定义事件名
//       // 点击事件greet调用 绑定在组件上 的 welcome事件
//       // 组件上的welcome事件 被赋值 根元素上的一个事件 sayHello
//     },
//   },
// });

// var vm = new Vue({
//   el: "#yz-hello",
//   data: {
//     pwd: "忘记密码 使用跟实例data属性",
//   },
//   methods: {
//     sayHello: function (event) {
//       alert("组件" + event.sname);
//     },
//   },
// });

// 组件之间传值
// 父组件向子组件传递数据，
// props，设置属性，模板化放属性位置，html提供值，或者根元素data提供值给子组件，用组件的那个地方就是子组件，


// a12-1 版  .$emit 第二种用法
// 子组件绑定事件给父组件传值 
// Vue.component("yz-enroll", {
//   template: `<input type="text" name="username"  @input="$emit('input',$event.target.value)" :value="value"  />`,
//   props: ["value"], 
// });
// 输入框绑定原生chang事件，也就是改变后触发，触发后，事件结果event中取出值，给username这个属性，
// var vm = new Vue({
//     el: "#yz-hello",
//     data: {
//       username:"atai"
//     },
//   });

  // 单向下行绑定：父级 prop 的更新会向下流动到子组件中，

// 1.父级更新 组件更新 props , :value="value"这里只是声明 数据源赋值在html页面  v-model="username" ，input的值等于username，那么对应的， props: ["value"], 中value值变成username属性名，，因此父级更新，value绑定的值对应更新
// 2.组件监控自身数据  @input="$emit('input',$event.target.value)"  发送给data双向绑定的数据 ，不需要props ，输入值直接改变双向绑定的值 
// 功能总结
// 现实从根元素取出data值，展示预设值 
// 用户输入什么，根源素data值对应改变 

// 总结下第二种用法 和第一版的用法区别
// 阿泰是自定义事件，自定义值，然后传给跟元素使用，这个是监控输入框值传给根元素使用 






//a13 基础demo13
// form表单绑定 v-model双向绑定
// v-model="username" 
// Vue.component("yz-enroll", {
//   template: '<input type="text" name="username" v-model="username" />',
//   data() {
//     return {
//       username: "atai",
//     };
//   },
// });

// var vm = new Vue({
//   el: "#yz-hello",
//   data: {
//     username:"atai"
//   },
//   methods: {
//   },
// });
// enroll：注册 




// 双向绑定是通过事件实现的
// a14 
// 获取父组件的data值 并且不用v-model 实现双向绑定 

// 这一块用不到 ，主要在html页面里面 
// Vue.component("yz-enroll", {
//   template: '<input type="text" name="username" :value="username" />',
//   props: ["username"],
// });

// var vm = new Vue({
//   el: "#yz-hello",
//   data: {
//     username:"atai"
//   },
//   methods: {
//   },
// });

// 迷惑 无穷的迷惑 ,一个双向绑定 怎么这么多写法 
// 1
// js页 template: '<input type="text" name="username" v-bind:value= "username" />',
// <yz-enroll :value="username"></yz-enroll>
// 2
// js页  template: '<input type="text" name="username" v-model="username" />',
// 3
// html页 <input @input="username=$event.target.value" :value="username"></input> */
// 4
// html页 <input type="text" name="username" v-model="username" />

// 这么多模型，大概看出来为啥这么多写法了 
// 一个直接行内表达式调用根元素的方式 完全属于 html页面 之前的老版写法 ，一个还是组件化里面调用数据 完全属于js页面  新版用法 
// 不同的是，新版多了一个props声明来进行指向父组件的数据 
// 最后，调用几乎都在调用根元素数据，不对 也许还得区分，父组件 产生地方？，根元素 父组件的顶？，子组件 用的地方？，

// 5
// {/* <yz-enroll v-model="username"></yz-enroll> */}
//   template: `<input type="text" name="username"  @input="$emit('input',$event.target.value)" :value="value"  />`,
//   props: ["value"], 

// 好吧 通过这个双向绑定，又学习了一遍，props，和子组件增加事件，传值给父组件 



// a15 自定义 model 
Vue.component("yz-enroll", {
    model: {
        prop: 'selected',   //属性值：之前默认value 
        // event: 'custom'     //事件名：之前默认input
    },
    props: ["selected"], 

  template: `<input type="text" name="username"  @input="$emit('input',$event.target.value)" :value="selected"  />`,

});
var vm = new Vue({
    el: "#yz-hello",
    data: {
      username:"atai"
    },
  });
//  props属性名变化无影响，  里面一层内容是要结合外面一层的数据才能看，里面的是声明，外面的数据调用，随便你里面变啥名字，反正外面名字不变就行了 
// 这有啥用呢？
// 往上传，是往根元素上传呢 ，指向数据源传呢 








// 苍白的文字形容 最好还是写好代码注释 并且用好单词 ，文字跟语境一分开差的信息是太多了
//  css倒是可以实现重用，引入就好，HTML也是智能靠单独一个全局页面复制粘贴，js也是可以重用，和css差不多，
// 目前来看指的是HTML元素的重用，但是又包含了js内容，
 

// 局部组件
// 搬运html
// 搬运指令
// 搬运data数据
// 搬运方法
// 组件化局部
// 指定根元素 
// hrml引入局部组件 

// 组件执行顺序
// 先组件生成html 后执行根实例，最后执行根实例中调用的组件的方法部分

// 组件之间传值
// 父组件向子组件传递数据，
// props，设置属性，模板化放属性位置，html提供值，或者根元素data提供值给子组件，用组件的那个地方就是子组件，

// 这么一看组件内容，
// 和以前的实例没有啥区别
// 出来el元素和data
// 其他的就多了一个模板化，和组件化

// 现在的新写法都是能老写法中找到影子，基本上还是一套东西，无非换面了，变到js页面来了，并且多了父子关系传递数据，