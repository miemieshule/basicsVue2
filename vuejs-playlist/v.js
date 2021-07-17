



// a1学习
// new Vue({
//     el:'#vue-app',
//     data:{
//         name:'Shaun',
//         job:'Ninja'
//     },
//     methods: {
//         greet:function(time){
//             return 'good' + time + ' ' + this.name ;    
//         }
//     }
// })

// 由这个实例控制元素内容数据 渲染更改  

// 方法 
// a：设置返回值 dom元素输出 
// b：拿到dom元素html值 ，加上返回值输出 

// 只控制div中标签元素内容 
// 单词 
// job 工作 grttt欢迎 afernoon下午 time 时间 










// a2学习 
// new Vue({
//     el:'#vue-app',
//     data:{
//         name:'Shaun',
//         job:'Ninja',
//         website:'https://17bang.ren/Code/242 ',
//         websiteTag:'<a href="https://17bang.ren/Code/242"> The ner ninja 网站标签  </a>'
//     },
//     methods: {
//         greet:function(time){
//             return 'good' + time + ' ' + this.name ;
//         }
//     }
// })
// 绑定数据 v-bind  
// 绑定html元素数据  v-html 为何用？vue默认会将所有的data内容编码后输出。 v-html 指令 屏蔽编码规则 。
// 单词 
// job 工作 grttt欢迎 afernoon下午 time 时间 














// a3学习 点击事件 
// new Vue({
//     el:'#vue-app',
//     data:{
//         age:'23',
//     },
//     methods: {
//         greet:function(time){
//             return 'good' + time + ' ' + this.name ;
//         }
//     }
// })


// a3学习 双击事件 
// new Vue({
//     el:'#vue-app',
//     data:{
//         age:23,
//     },
//     methods: {
//         add:function(inc){
//             this.age += inc;
//         },
//         subtrct:function(dec){
//             this.age-= dec;
//         }
//     }
// })



    // a3学习 事件修饰符 
    // new Vue({
    //     el:'#vue-app',
    //     data:{
    //         age:23,
    //     },
    //     methods: {
    //         add:function(inc){
    //             this.age += inc;
    //         },
    //         subtrct:function(dec){
    //             this.age-= dec;
    //         },
    //         click:function(){
    //             alert('点击会发生什么');
    //         }
    //     }
    // })



    //  a3学习 键盘事件 
    // new Vue({
    //     el:'#vue-app',
    //     data:{
    //     },
    //     methods: {
    //         logName:function(){
    //             console.log('你输入了你的名字');
    //         },
    //         logAge:function(){
    //             console.log('你输入了你的年龄');
    //         },
    //     }
    // })
    


    // a4学习 双向绑定 
    // new Vue({
    //     el:'#vue-app',
    //     data:{
    //         name:'',
    //         age:'',
    //     },
    //     methods: {
    //     }
    // })
    




    // a5学习 计算属性 
    // new Vue({
    //     el:'#vue-app',
    //     data:{
    //         age:20,
    //         a:0,
    //         b:0,
    //     },
    //     methods: {

    //     },

    //     computed:{
    //         addToA:function(){
    //             console.log('adda');
    //             return this.a + this.age;
    //         },
    //         addToB:function(){
    //             console.log('addb');
    //             return this.b + this.age;
    //         },
    //     },

    // })

    // computed 计算属性是基于它们的响应式依赖进行缓存的。
    // 只在相关响应式依赖发生改变时它们才会重新求值。这就意味着只要 age 和 a 值 还没有发生改变，
    // 多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。

    // 用方法
    // 每次改变一次data的随意 a属性一个值 ，mathods 方法就会重新运行一遍，其中的 b 属性值计算 c属性值 d属性值 进行计算 ，重新渲染一遍 


    // a6学习 属性绑定 
    // new Vue({
    //     el: '#vue-app',
    //     data: {
    //         a: false,
    //         b: false
    //     },
    //     methods: {
    
    //     },
    //     computed: {
    //         compClasses: function(){
    //             return{
    //                 available: this.a,
    //                 nearby: this.b,
    //             }
    //         }
    //     }
    // });

    // available 可获得的 

    // a6 复刻 
    // new Vue({
    //     el: '#vue-app',
    //     data: {
    //         a1boolean: false,enrolleds
    //         b1boolean: false
    //     },
    //     methods: {
    
    //     },
    //     computed: {
    //         compClasses: function(){
    //             return{
    //                 a1: this.a1boolean,
    //                 b1 : this.b1boolean,
    //             }
    //         }
    //     }
    // });























    // b1 响应式
    // var vm = new Vue({
    //     el: "#yz-hello", 
    //     data: {
    //         greet: "Hello, 源栈！" 
    //     }
    // })


    // b2 加载时绑定一次 
    // var vm = new Vue({
    //     el: "#yz-hello",  
    //     data: {
    //         greet: "Hello, 源栈！"  
    //     }
    // })


    // b3 js表达式
    // var vm = new Vue({
    //     el: "#yz-hello",  
    //     data: {
    //         greet: "Hello, 源栈！"  
    //     }
    // })

  

    // b4 属性绑定 title
    // var vm = new Vue({
    //     el: "#yz-hello",  
    //     data: {
    //         who: "大飞哥"  
    //     }
    // })




    // b6 动态属性绑定
    // var vm = new Vue({
    //     el: "#yz-hello",  
    //     data: {
    //         attr:"title",
    //         greet: "大飞哥"  ,
    //         who:111,
    //     }
    // })



    // b7 样式类 绑定
    // var vm = new Vue({
    //     el: "#yz-hello",  
    //     data: {
    //         bg: "blue",
    //         fs: "italic"
    //     }
    // })


    // b8 样式类 决定是否使用 
    // var vm = new Vue({
    //     el: "#yz-hello",  
    //     data: {
    //         isActive:false ,
    //     }
    // })



    // b9 行内样式绑定 
    // var vm = new Vue({
    //     el: "#yz-hello",  
    //     data: {
    //         bg: "#b6ff00",
    //         fs: "italic",
    //     }
    // })
    

    // b10 条件渲染（v-if-else） 
    // var vm = new Vue({
    //     el: "#yz-hello",  
    //     data: {
    //         isAuthor: true,
    //         isAdmin:true,
    //     }
    // })


    // <!-- b10-1  条件渲染  在div上控制显示哪个元素  -->
    // var vm = new Vue({
    //     el: "#yz-hello",  
    //     data: {
    //         isAuthor1: true,
    //         isAuthor2: true,
    //         isAuthor3: true,

    //         users:[
    //             {
    //                 user:{ name : '杨嘉栋' , role:'common'}
    //             }
    //         ]
    //     },
    //     methods: {
    //         judgeRole:function () {  //判断角色 judge：判决 
            
    //                this.isAuthor1 = true
    //                this.isAuthor2 = false
    //                this.isAuthor3 = true

    //         },
    //     }
    // })

    
        
    // b11 条件渲染（v-if-else） 和 v-show 区别 
    // var vm = new Vue({
    //     el: "#yz-hello",  
    //     data: {
    //         isAuthor: true,
    //         isshow:false,
    //     }
    // })

    

    // b12 数组内容输出
    // var vm = new Vue({
    //     el: "#yz-hello",  
    //     data: {
    //         students:['夏康平','陈国栋', '韩佳宝'] ,
    //     }
    // })



    // b13  数组下标获取输出 
    // var vm = new Vue({
    //     el: "#yz-hello",  
    //     data: {
    //         students:['夏康平','陈国栋', '韩佳宝'] ,
    //     }
    // })



    // b14 数组 中 对象内容 循环输出 
    // var vm = new Vue({
    //     el: "#yz-hello",  
    //     data: {
    //         students:
    //         [        
    //             { id: 8, name: '夏康平' },
    //             { id: 12, name: '陈国栋' }
    //         ] ,
    //     }
    // })



    // b15 对象内容输出 
    // var vm = new Vue({
    //     el: "#yz-hello",  
    //     data: {
    //         student: { id: 8, name: '夏康平' },
    //     }
    // })




    // b16 循环输出 数组 中 对象属性不规律情况  值输出
    // var vm = new Vue({
    //     el: "#yz-hello",  
    //     data: {
    //         students: [
    //             { id: 8, name: '夏康平' },
    //             { id: 12, score: 98 },
    //             {name: '韩佳宝', from:'黑龙江'}
    //         ]

    //     }
    // })
    


    // b18 数组内容输出
    // var vm = new Vue({
    //     el: "#yz-hello",  
    //     data: {
    //         students:['夏康平','陈国栋', '韩佳宝'] ,
    //     }
    // })



    // b19 vue 实例对象生命周期 
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
    // created 创建 完成实例化准备工作 ，拿开发设置外部内容 给data对象赋值 ，
    // mounted 挂载 拿到data值 el值  准备生成虚拟dom元素 给浏览器进行挂栽 
    // updated 监控更改 虚拟dom比对替换 响应式数据 ，改变数据就执行此钩子函数 
    // destroyed 销毁 实例对象 
    // 操作数据 把开发人员设置的数据 给类实例对象，类实例对象 不同方法 带动不同数据周期 ， 操作节点安排数据变化 


    // 概念 
//     dom
// 为什么需要vue？
// 原生方法搜索几千个dom会变慢，js运行变慢
 
// 因此 用vue框架中虚拟dom
// 用虚拟节点挂到DOM上，更新在浏览器中看到的内容
 
 
// 渲染函数 html模板
// 基于模板创建一个渲染函数，返回一个虚拟dom节点，组件更改时候，render函数重新运行，创建另一个虚拟节点，发送旧节点和新节点，在vue，中比较旧节点和新节点，以最高效的方式在网页上更新
// 飞哥
// HTML的component在前 渲染虚拟dom节点，new Vue()在后 创建一份虚拟节点。
 
// 虚拟dom和实际dom比喻
// 蓝图和实际建筑
// 蓝图上，改变了29层的布置，
// 两种方式改变，
// 1.拆掉29楼的一切，一切重建
// 2.创造新的29层蓝图，比较新旧蓝图，进行更新，来减少工作量
 
// vue 3 个核心模块
// 响应式模块
// 编译器模块
// 渲染模块
 
// 响应模块，允许创建js响应对象，并且观察变化，运行时候，会跟踪
// 编译模块 获取html模板，并且编译成渲染函数，返回虚拟dom，这在浏览器运行时候发生，浏览器只接受渲染函数
// 渲染模块 ：组件渲染的3个阶段，
// 渲染阶段
// 调用渲染函数 rednder 返回虚拟dom
// 挂栽阶段
// 使用虚拟dom节点，调用浏览器api创建网页
// 补丁阶段
// 渲染器，新虚拟节点和旧虚拟节点对比，更新变化部分
 
 
// 例子
// 一个组件， 有模板，有内部响应对象
// 模板编译器把html，转换一个渲染函数
// 初始化响应对象，使用响应式模块
// 渲染阶段，
// 调用render渲染函数，虚拟dom引用了响应对象，观察响应对象变化，render返回一个虚拟dom节点
// 挂栽阶段
// 调用mount ‘增加’ 函数 ，用虚拟节点，创建web页面
// 补丁阶段
// 响应对象发生变化，渲染器，再次调用渲染函数，创建一个新的虚拟节点，新旧节点，发生补丁函数，更新内容




    // b21 计算属性  innerHTML 
    // var vm = new Vue({
    //     el: "#yz-hello",
    //     data: {
    //         body: '一起(17)帮(bang)是一个旨在直接解决编程/电脑操作等具体问题、互助式的虚拟社区平台。直接解决具体问题 '
    //     },
    //     computed: {
    //         summary: function () {
    //             return this.body.substring(0, 25);
    //         }
    //     }
    // })



    // b22 列表筛选 for if 
    // 使用 计算属性 包装 
    // var vm = new Vue({
    //     el: "#yz-hello",
    //     data: {
    //         students:['夏康平','陈国栋', '韩佳宝'] ,
    //     },
    //     computed: {
    //         filtered : function () {
    //             return this.students.filter(function (s, i) {    
    //                 return i > 0 ;
    //             })
    //         }
    //     }
    // })
    
    // //filter是JavaScript内置方法 过滤数组元素 返回新数组 


    // b23 计算属性 set  
    // var vm = new Vue({
    //     el: "#yz-hello",
    //     data: {
    //       body: '一起(17)帮(bang)是一个旨在直接解决编程/电脑操作等具体问题、互助式的虚拟社区平台。直接解决具体问题 ',
    //     },
    //     computed: {
    //         summary: {
    //             get: function() {
    //                 return this.body.substring(0, 25);
    //             },
    //             set: function (value) {
    //                 console.log(value);
    //                 console.log('set修改');
    //             }
    //         }
    //     }
    // })




    // b25  监控钩子函数 watch  
    // var vm = new Vue({
    //     el: "#yz-hello",
    //     data: {
    //         body : ' hello 源栈 ',
    //     },
    //     watch: {
    //         body: function (newBody, oldBody) {
    //             console.log("触发");
    //         }
    //     }

    // })

    // newBody == this.body：更改后的值
    // oldBody：更改前的this.body





    
    // b26  钩子函数 methods 挂栽函数 

    // var vm = new Vue({
    //     el: "#yz-hello",
    //     data: {
    //       body: '一起(17)帮(bang)是一个旨在直接解决编程/电脑操作等具体问题、互助式的虚拟社区平台。直接解决具体问题 一起(17)帮(bang)是一个旨在直接解决编程/电脑操作等具体问题、互助式的虚拟社区平台。直接解决具体问题 ',
    //     },
    //     methods: {
    //         summary: function () {
    //             return this.body.substring(0, 25);
    //         }
    //     }

    // })







     // b27  双向绑定
    //  input 绑定 
    //  绑定data 对象中一个值 
    // var vm = new Vue({
    //     el: "#yz-hello",
    //     data: {
    //         body: {
    //             short: 'Hi',
    //             full: 'Hello, 源栈'
    //         },
    //     },
    // })
    // 特点data中 注释掉full， input输入中 设置的绑定 body。full ，输入值后，值和属性 可以再次绑定到data中







     // b28  双向绑定 表单 
    //  radio 循环绑定 
    // var vm = new Vue({
    //     el: "#yz-hello",
    //         data: {  
    //             students: [
    //             { id: 8, name: '夏康平' },
    //             { id: 12, name: '陈国栋' },
    //             { id: 6, name: '韩佳宝' }
    //         ], 
    //         selectedId:''
    //     },
    // })
    // 写法 selectedId:'' selectedId:'8'




    // b29  双向绑定 表单 
    //  checkbox 单个复选框 
    // var vm = new Vue({
    //     el: "#yz-hello",
    //         data: {  
    //             remember: true,
    //     },
    // })
    // 写法 selectedId:'' selectedId:'8'




    // b30  双向绑定  表单 
    //  checkbox 多个复选框   选择 
    // var vm = new Vue({
    //     el: "#yz-hello",
    //         data: {  
    //             students: [12]
    //     },
    // })
    // 写法 students: [12] ，写入12 默认12已被选择 




    // b31  双向绑定 表单 
    //  radio 循环绑定 
    // var vm = new Vue({
    //     el: "#yz-hello",

    //     data: {  
    //         selectIDs:[],
    //         students: [
    //             { id: 8, name: '夏康平', enrolled: true , },
    //             { id: 12, name: '陈国栋', enrolled: false , },
    //             { id: 6, name: '韩佳宝', enrolled: false ,  }
    //         ],
    //     },

    //     computed: {


    //         enrolleds:{
    //             get : function(){
    //                 return this.students.filter(function (s) {
    //                     return s.enrolled;
    //                 }).map(function (s) {
    //                     return s.id;
    //                 });
    //             },

    //             set:function(value){
                
    //                 return (function(){
    //                     for (let i = 0; i < value.length; i++) {
    //                         this.students.filter(function (s) {
    //                             return  s.id === value[i]   ;
    //                         }).map(function (s) {
    //                             return s.enrolled = true;
    //                         });
    //                     }
    //                 }.bind(this)())
    
        
    //             }


    //         }
    //     }
    // })

    // 拿到已经点击的值，然后从数组过滤出来，然后在改变enrolled值 
    // 需求
    // 能按照顺序增加 id值  可以 for循环位置 123 和点击123 位置，相同就能  // // 不按照顺序来增加 id值
    // value的id 必须和 studens的id 完全一样 ，返回完全相同的对象，在进行计算   // 筛选出完全相同的，然后改变布尔值 

  


    // b32  双向绑定  表单
    //  select 下拉列表   循环绑定 
    // 选择后 value值 
    // var vm = new Vue({
    //     el: "#yz-hello",
    //         data: {  
    //             selectedId:[],
    //             students: [
    //                 { id: 8, name: '夏康平', enrolled: true },
    //                 { id: 12, name: '陈国栋', enrolled: false },
    //                 { id: 6, name: '韩佳宝', enrolled: true }
    //             ],
    //     },
    // })




    // b33  v-model 修饰符 
    // var vm = new Vue({
    //     el: "#yz-hello",
    //         data: {  
    //             body:'',
    //     },
    // })


    // b34  事件 
    //   var vm = new Vue({
    //     el: "#yz-hello",
    //         data: {  
    //             counter:1,
    //     },
    //     methods: {
    //         plus: function () {
    //             this.counter++;
    //         }
    //     }
    // })


    // b35  事件 
    // 获取触发事件元素 
    // 获取元素
    // var vm = new Vue({
    //     el: "#yz-hello",
    //         data: {  
    //             counter:100,
    //     },
    //     methods: {
    //         plus: function (event) {
    //             event.preventDefault();
    //             console.log(event.target);
    //             let self = event.target ;
    //             self.style = "background-color:blue" ;

    //             // style="color:red;
    //             // s.style.backgroundColor = "red";
    //             //this.style = "background-color:blue"
    //             this.counter++;
    //         }
    //     }
    // })



    // <!-- 36 v-on 事件   -->
    // <!-- 点击事件实现功能  影藏显示dom元素-->

    // var vm = new Vue({
    //     el: "#yz-hello",
    //         data: {  
    //             shown:true,
    //     },
    //     methods: {
    //         toggle: function () {
    //             this.shown = !this.shown ;
    //         }
    //     }
    // })



    // <!-- 37 组合训练   -->
    // <!-- 模态功能 鼠标滑过显示信息-->
    //     var vm = new Vue({
    //     el: "#yz-hello",
    //         data: {  
    //             shown:false,
    //             showTitle:'tooltip',
    //     },
    //     methods: {
    //         show: function () {
    //             this.shown = true ;
    //         },
    //         hide: function () {
    //             this.shown = false ;
    //         }
    //     }
    // })



    // b39  事件修饰符 
    // 事件流修饰符 
    // var vm = new Vue({
    //     el: "#yz-hello",
    //         data: {  
    //     },
    //     methods: {
    //         outer: function (event) {
    //             console.log('outer: 外');
    //         },
    //         inner: function (event) {
    //             console.log('inner 内');
    //         },

    //     }
    // })


    
    // <!-- 40 vue  dom元素操作 -->
    // <!-- 需求 消除浏览器默认提示 -->
    //     var vm = new Vue({
    //     el: "#yz-hello",
    //         data: {  
    //             shown:false,
    //             showTitle:'tooltip',
    //             timer:0,
    //     },
    //     methods: {
    //         show: function () {
    //             this.shown = true ;
    //             this.timer++;
    //             this.showTitle += this.timer + '  ';
    //             this.$nextTick(function () {
    //                 // document.getElementById('slagon').title = '';
    //                 this.$refs.slagon.title = ''
    //             })
    //         },
    //         hide: function () {
    //             this.shown = false ;
    //         }
    //     }
    // })
    // 获取元素 refs 

    // timer 计时器 
    // next Tick 下一个勾执行 





    // <!-- 41 vue  使用vue完成铃铛闪烁例子 -->
    // var vm = new Vue({
    //     el: "#yz-hello",
    //         data: {  
    //             color :'red',
    //     },
    //     mounted: function () {
    //         setInterval(function () {
    //             if (this.color == 'red') {
    //                 this.color = 'blue';
    //             } else {
    //                 this.color = 'red';
    //             }
    //         }.bind(this), 1000)    //每隔一秒变换一次颜色
    //     },
    // })

// color 
// methods vue实例方法 
// mounted 挂栽钩子函数 
// InviteName 

// vue是操作数据得到规则，跟js的规则不一样了，你得多学习看看新的规则是什么


    // <!-- 42 vue  form表单-->
    // 表单内容验证 
    // var vm = new Vue({
    //     el: "#yz-hello",
    //         data: {  
    //             sname :'',
    //              error:'',
    //     },
    //     methods:{
    //         require:function(){
    //             if(this.sname){
    //                 this.error = ''
    //             }else{
    //                 this.error = '* 用户名需要填写'
    //             }
    //         },

    //         checkAll: function (event) {
    //             if (!this.sname) {
    //                 this.error = '* 用户名需要填写'
    //                 event.preventDefault();
    //             }
    //         },

    //     },

    // })

    // !this.sname 神妈取反
    //  没值 是空格  是假， 但是取反为真  ，真执行  
    //  有 值 为真， 取反为假执行 ，
    // 这是取两道真 来起作用 

    // 有值为真 没值为假 
    // if(this.sname){
    //         this.error = ''
    //     }else{
    //         this.error = '* 用户名需要填写'
    //     }
    // },
    // 所以这么写也是一样 ，sname''默认是假，当双向绑定 name那边有值，就为真  执行 error 假 ，
    // sname''默认值是 '' 是假 ， 输入为空，为假执 else  ， error有值 为真   


    // if (this.error) {
    //  this.name 有值  error 为假， this.name无值  this.error 就是真  

    // 两种情况 
    // require运行了  checkAll 正常运行 
    // 直接运行checAll this.error 为 无值 为真 直接运行 提交，失去了禁用作用  

    // 第二种情况
    // 我们要的 error 值根本没有产生，这个error值在 input 输入后才会触发， 在data中的 error 根本不是我们要的值 ，eeror没有错误信息，虽然是真 但是不执行哇 
    // 思路变一下 只关系有没有值 ， 有值就算是错误的 也可以提交




    // <!-- 43 vue  form表单-->
    // 表单多个内容元素验证 
    // var vm = new Vue({
    //     el: "#yz-hello",
    //         data: {  
    //             sname :'',
    //             password:'',
    //             confirmPassword:'',
    //              error:{
    //                  sname:false,
    //                  password:false,
    //                  confirmPassword:false,
    //              },
    //     },
    //     methods:{
    //         require:function(){
    //             this.error.sname = !this.sname ;
    //             this.error.password = !this.password ;
    //             // this.error.confirmPassword = !this.confirmPassword ;
    //         },

    //         sameWith:function(){
    //             this.error.confirmPassword = 
    //             this.password  != this.confirmPassword ;
    //         },

    //         checkAll: function (event) {
    //             if (!this.sname) {
    //                 this.error = '* 用户名需要填写'
    //                 event.preventDefault();
    //             }
    //         },

    //     },

    // })

    //  王八的取反 靠 好好的运算符不用
    //  this.password  != this.confirmPassword ;
    // pasword 本身是假 有值为真 ， 是否不等于 fonfi ，满足是 为turue 