
// a1例子 参考mock  原生ajax 资料 
// Mock.mock("/Student/23", {
//     //标题，内容较少
//     "title": '@ctitle()' // 服务器准备数据 
//     })

    // Mock.setup({ timeout: '1000-4000' }); // 响应时间 


//需求
// 请求到服务器的Board页面文本，赋值给现board页面的main元素 
//先获取这样页面的元素，然后在拿请求页面的元素 请求的时候 从右往左赋值 

// isnews()
// function isnews(){
//     var xhttp = new XMLHttpRequest();
//     xhttp.open("GET","/Student/23"); 
//    xhttp.send();
//    //onload 事件会在页面或图像加载完成后立即发生。
//    xhttp.onload = function(){
//         console.log(xhttp.readyState);
//         var student = JSON.parse(this.response) 
//         console.log(student);

//         document.getElementById('isnews').innerHTML = student.title; 
//    }
// }
// 定时器 
// setInterval(isnews, 3000)
// send 发送 
 




// a1  get请求  params参数传送 ，代替url参数，
// axios请求函数的 get 请求的基本用法
// s.upload()
// const s =  new Vue({
//     el:'#yz-hello',
//     methods: {
//         upload:function(){
//             axios.request({
//                 url: "/Student.html",
//                 method:"get",
//                 params:{
//                     enrolled: 1,
//                     graduate: true,
//                 }
//             })
//         },
//     },
// })





















// a2  post请求  数据发送请求 
// axios 数据发送服务器请求用法 
// const s =  new Vue({ 
//     el:'#yz-hello',
//     methods: {
//         upload:function(){
//             axios.request({
//                 url: "/Student.html",
//                 method:"post",
//                 data:{   
//                      enrolled: 1,
//                     graduate: true,
//                 },
//                 headers: {
//                     'Content-Type': 'application/x-www-form-urlencoded'
//                 },
//             })
//         },
//     },
// })
// s.upload()

// headers 请求头 
// application/x-www-form-urlencoded' | application 应用申请  / form表单数据  / 编码格式 
// data：通常是（JSON）对象格式
// Content-Type: application/x-www-form-urlencoded

// 不设置请求内容类型Content-Type的值， axios 默认类型是 application/json //Content-Type: application/json;charset=UTF-8





























// a3 文件上传请求 数据发送请求 
// 目标 获取上传文件内容 
// const vm =  new Vue({
//     el:'#yz-hello',
//     methods: {
//         upload:function(){
//             var inconElement = this.$refs.icon;
//         }
//     },
// })

// 拿到上传img 文件 a方法 
// inconElement.files  

























// 图片上传功能 
// a4 文件上传请求 数据发送请求 
// 目标 FormData 类 new出 对象 ，把所有form表单数据一次性的“form化” 
// 用异步传输axios 传输数据data中， 使用FormData变量 
const vm =  new Vue({
    el:'#yz-hello',
    methods: {
        upload:function(){
            var icon = this.$refs.icon,
            formData = new window.FormData();    //注意window.不能省略
            formData.append('icon', icon.files[0])

            axios.request({    
                url: "/Student.html",
                method:"post",
                data:formData,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            })

        }
    },
})

// upload 上传 
// parentElement 父节点元素 
// request 发起请求
// method 方法 

// enrolled 登记  //graduate 毕业生 

// var form = this.$refs.icon.parentElement,    //form表单元素
// 作用 拿到上传文件父元素 

// formData = new window.FormData(form);  
//window全局中 FormData 类 new出 对象  //注意构造函数参数，name 
// 作用 把所有form表单数据一次性的“form化” 

// axios 异步传输 
// formData 这好像是全局的变量 

// 全部表单元素的话 就是直接传 
// var form = this.$refs.icon.parentElement,    //form表单元素
// formData = new window.FormData(form); 
//data:formData,





























// a5 
// 文件上传加载提示消息
// 计算文件上传进度百分比 全部除以已装载的 
// axios的配置中 设置 on Upload Progress
// on Upload Progress：在上载过程中 //percentage：百分比  //loaded 已经装载的  //total 全部的 
// const vm =  new Vue({
//     el:'#yz-hello',
//     data:{
//         inProgress:false ,
//         percentage:0,
//     },
//     methods: {
//         upload:function(){
//             var icon = this.$refs.icon,
//             formData = new window.FormData();    //注意window.不能省略
//             formData.append('icon', icon.files[0])
//             var isthis = this ;

//             axios.request({    
//                 url: "/Student.html",
//                 method:"post",
//                 data:formData,
//                 headers: {
//                     'Content-Type': 'application/x-www-form-urlencoded'
//                 },
//                 onUploadProgress: function (progressEvent) {
//                     isthis.inProgress = true ;

//                     isthis.percentage = progressEvent.loaded / progressEvent.total;
//                     console.log(isthis.percentage);
//                 },
//             })

//         }
//     },
// })






























// a6 参考资料 
// promise 状态 使用 
// result 结果 检测结果值， 成功跑什么，失败跑什么，不论成功失败跑什么 
// let p = new Promise(function (resolve, reject) {
// setTimeout(function () {
// var result = true;
// if (true) {
//     // throw new Error('......');
//     resolve(result);
// } else {
//     reject('error');
// }
// console.log('after error');
// }, 1000);
// });
// p.then(function (result) {
// console.log(result ? 'oh yeah!' : 'what happen?');
// }).catch(function (reason) {   //推荐：可读性更高
// console.log(reason);
// }).finally(function () {
// console.log('finally');
// })


// 英语单词参考
// result 处理 \ 
//  单词关系: (axios.request参数方法 ) \请求完成后 会返回\  (promise许诺对象)  \再调用\  (then：成功方法) \在传入参数用\ （result：处理函数做参数）
// 接着延续 （result：处理函数做参数） \传入参数\ （response:响应参数) 

// 顺序
// axios.request 
// promise
// then
// result
// response
// response = data 、status headers 、等数据，就是服务器响应数据了 

// 过程
//   x  =  axios.request 等于 Promise 

// 服务器数据 
// Mock.mock("/Student/23", {
//     "title": '@ctitle()' 
//     })


// a6 
// 功能：服务器响应数据获取 
// 过程
// 客户端 axios函数，对 服务器发起请求数据进行传送，服务器进行数据处理， 
// axios 函数，获得服务器端响应数据 


// 问题
// then () 没有执行 ！
// const vm =  new Vue({
//     el:'#yz-hello',
//     data:{
//         inProgress:false ,
//         percentage:0,
//     },
//     methods: {
//         upload:function(){
//             var icon = this.$refs.icon,
//             formData = new window.FormData();    //注意window.不能省略
//             formData.append('icon', icon.files[0])

//                 axios.request({    
//                 url: "/Student/23",
//                 method:"post",
//                 data:formData,
//                 onUploadProgress: (progressEvent) =>{//@想一想@有没有坑？
//                     // 显示dom元素 上传中 
//                     this.inProgress = true ;
//                     console.log('我是传输中');

//                     // 计算已传送百分比
//                     this.percentage = progressEvent.loaded / progressEvent.total;
//                     console.log(this.percentage);
//                 },
//             }).then(()  => {  
//                 console.log(this);
//                 this.inProgress = false ;

//                 // 当请求完成返回Promise 许诺时候，才会执行许诺中的 then 
               
//             })

//         }
//     },
// })





























// Mock.mock("/Student/23", {
//     "title": '@ctitle()' 
//     })

// a7
// 功能：从服务器拿到图片资源 然后在html元素补充路径显示 
// 需求 ：图片上传完成 在页面上显示上传的图片内容 
// 需求： img标签中 alet提示 跟随请求数据布尔值显示， 

// 特点
// 请求正常返回 用then ，请求错误 用捕获 catch

// 问题
//不用后台 使用then根本不会执行，没有返回值 
// 用了mack模拟后台，进then语句，但是还是不执行  ，并且 传送过程的 onUploadProgress 方法也不执行了 。。。

// 拿不到后台的图片data数据，做不了显示 ！

// const vm =  new Vue({
//     el:'#yz-hello',
//     data:{
//         inProgress:false ,
//         percentage:0,
//         imgSrc:'',
//     },
//     conmputed:{
//         show:function(){
//             return Boolean(this.imgSrc)
//         }
//     },

//     methods: {
//         upload:function(){
//             var icon = this.$refs.icon,
//             formData = new window.FormData();    //注意window.不能省略
//             formData.append('icon', icon.files[0])

//                 axios.request({    
//                 url: "/Student/23",
//                 method:"post",
//                 data:formData,
//                 onUploadProgress: (progressEvent) =>{//@想一想@有没有坑？
//                     // 显示dom元素 上传中 
//                     this.inProgress = true ;


//                     // 计算已传送百分比
//                     this.percentage = progressEvent.loaded / progressEvent.total;
//                     console.log(this.percentage);
//                 },
//             }).then((response) => {  
//                 this.inProgress = false ;
//                 this.imgSrc = response.data ;
                
//             })

//         }
//     },
// })






























// Mock.mock("/Student/23", {
//     "title": '@ctitle()' 
//     })

// a8 捕获失败请求 
// 目的：请求服务器 返回请求失败 处理请求失败情况 
// 功能：用户点击，获取服务器数据，返回请求失败，页面提示请求情况 

// 学习
// 异常阶段不同，状态码不同，根据不同的状态码设定不同的反应。

//   连缀写法的本质
//   }).catch((error)=>{
// 这是从前面方法返回的对象，catch是从axios.request方法里面，返回的对象，
// axios.request本质是个 promise ，里面原型链上有各种方法 

// 成功失败都执行 
// .finally((f)=>{  //无论成功失败 都会执行 



// const vm =  new Vue({
//     el:'#yz-hello',
//     data:{
//         inProgress:false ,
//         percentage:0,
//         imgSrc:'',
//     },
//     conmputed:{
//         show:function(){
//             return Boolean(this.imgSrc)
//         }
//     },

//     methods: {
//         upload:function(){
//             var icon = this.$refs.icon,
//             formData = new window.FormData();    //注意window.不能省略
//             formData.append('icon', icon.files[0])

//                 axios.request({    
//                 url: "https://17bang.rens/",
//                 method:"post",
//                 data:formData,
//                 onUploadProgress: (progressEvent) =>{//@想一想@有没有坑？
//                     // 显示dom元素 上传中 
//                     this.inProgress = true ;


//                     // 计算已传送百分比
//                     this.percentage = progressEvent.loaded / progressEvent.total;
//                     console.log(this.percentage);
//                 },
//             }).then((response) => {  
//                 this.inProgress = false ;
//                 this.imgSrc = response.data ;
                
//             }).catch((error)=>{
//                 if (error.response) {
//                     // 请求成功发出且服务器也予以响应，状态码一般大于2xx
//                     console.log(error.response.data);
//                     console.log(error.response.status);
//                     console.log(error.response.headers);
//                 } else if (error.request) {
//                     // 客户端请求已经成功发起，但没有收到响应 
//                     // 一般来说是网络问题 
//                     console.log(error.request);
//                 } else {
//                     // 客户端发送请求时出了点问题
//                     // url请求参数不写 才会出现message报错 
//                     console.log('Error', error.message);
//                 }
//             }).finally((f)=>{  //无论成功失败 都会执行 
//                 console.log('finally');
//             })

//         }
//     },
// })






















// Mock.mock("/Student/23", {
//     "title": '@ctitle()' 
//     })

// a9 超时请求 设置超时时间  
// 目的：可以连通但耗时过长由前端主动终止

// 超时 timeout 
// 作用：规定时间内，发起请求但是没有响应，就走timout方法代码块内容 

// 500毫秒请求不到网址资源，就走error.request语句块 
// 知识掌握程度 ： 知道即可 



// const vm =  new Vue({
//     el:'#yz-hello',
//     data:{
//         inProgress:false ,
//         percentage:0,
//         imgSrc:'',
//     },
//     conmputed:{
//         show:function(){
//             return Boolean(this.imgSrc)
//         }
//     },

//     methods: {
//         upload:function(){
//                 axios.request({    
//                 url: "https://17bang.rens/",
//                 method:"get",
//                 timeout:500,
//             }).then((response) => {  

                
//             }).catch((error)=>{
//                 if (error.response) {
//                     // 请求成功发出且服务器也予以响应，状态码一般大于2xx
//                     console.log(error.response.data);
//                     console.log(error.response.status);
//                     console.log(error.response.headers);
//                 } else if (error.request) {
//                     // 客户端请求已经成功发起，但没有收到响应 
//                     // 一般来说是网络问题 
//                     console.log(error.request);
//                 } else {
//                     // 客户端发送请求时出了点问题
//                     // url请求参数不写 才会出现message报错 
//                     console.log('Error', error.message);
//                 }
//             }).finally((f)=>{  //无论成功失败 都会执行 
//                 console.log('finally');
//             })

//         }
//     },
// })







// a10
// 连缀
// 开发需求
// 根据上一个条件 请求 ， 第一个Ajax请求获取数据，比如某个学生的年龄，第二个学生的年龄发起另外一个Ajax请求，比如该年龄能享受到的学费折扣
// 特点
// 后一个then()一定是在前一个then()执行完成之后才执行。放心的使用前一个then里面修改过的vue data：

// 例子1 第二个thence()用this,拿取第一个then() data值
// const vm =  new Vue({
//     el:'#yz-hello',
//     data:{
//         inProgress:false ,
//         percentage:0,
//         imgSrc:'',
//     },
//     conmputed:{
//         show:function(){
//             return Boolean(this.imgSrc)
//         }
//     },

//     methods: {
//         upload:function(){
//             var icon = this.$refs.icon,
//             formData = new window.FormData();    //注意window.不能省略
//             formData.append('icon', icon.files[0])

//                 axios.request({    
//                 url: "/Student/23",
//                 method:"post",
//                 data:formData,
//                 onUploadProgress: (progressEvent) =>{//@想一想@有没有坑？
//                     // 显示dom元素 上传中 
//                     this.inProgress = true ;


//                     // 计算已传送百分比
//                     this.percentage = progressEvent.loaded / progressEvent.total;
//                     console.log(this.percentage);
//                 },
//             }).then((response) => {  
//                 this.inProgress = false ;
//                 this.imgSrc = response.data ;
                
//             }).then((response) => {  
//                 console.log(this.imgSrc); // 连缀重点 从上一个then拿去this.ingSrc数据 
                
//             })

//         }
//     },
// })


// 例子2 
// 第二个thence()不用this,拿取第一个then() data值
// const vm =  new Vue({
//     el:'#yz-hello',
//     data:{
//         inProgress:false ,
//         percentage:0,
//         imgSrc:'',
//     },
//     conmputed:{
//         show:function(){
//             return Boolean(this.imgSrc)
//         }
//     },

//     methods: {
//         upload:function(){
//             var icon = this.$refs.icon,
//             formData = new window.FormData();    //注意window.不能省略
//             formData.append('icon', icon.files[0])

//                 axios.request({    
//                 url: "/Student/23",
//                 method:"post",
//                 data:formData,
//                 onUploadProgress: (progressEvent) =>{//@想一想@有没有坑？
//                     // 显示dom元素 上传中 
//                     this.inProgress = true ;


//                     // 计算已传送百分比
//                     this.percentage = progressEvent.loaded / progressEvent.total;
//                     console.log(this.percentage);
//                 },
//             }).then((response) => {  
//                 this.inProgress = false ;
//                 return response.data  //重点 
                
//             }).then((data) => {  
//                 console.log(data); // 重点 
                
//             })

//         }
//     },
// })







// 例子3
// 目标 // 第二个thce()，发起第二个ajax请求 不是当前  url: "/Student/23", 而是 url: "/Student/90",

// 回调地狱
// a请求，发起一个学生姓名请求，
            // a请求 学生姓名 调一个分数请求a1，
            //                     a1 分数  调一个请分数及格线a2，
            //                                                 a2 及格线   调一个请求分数提示a3
// const vm =  new Vue({
//     el:'#yz-hello',
//     data:{
//         inProgress:false ,
//         percentage:0,
//         imgSrc:'',
//     },
//     conmputed:{
//         show:function(){
//             return Boolean(this.imgSrc)
//         }
//     },

//     methods: {
//         upload:function(){
//             var icon = this.$refs.icon,
//             formData = new window.FormData();    //注意window.不能省略
//             formData.append('icon', icon.files[0])

//                 axios.request({    
//                 url: "/Student/23",
//                 method:"post",
//                 data:formData,
//                 onUploadProgress: (progressEvent) =>{//@想一想@有没有坑？
//                     // 显示dom元素 上传中 
//                     this.inProgress = true ;


//                     // 计算已传送百分比
//                     this.percentage = progressEvent.loaded / progressEvent.total;
//                     console.log(this.percentage);
//                 },
//             }).then((response) => {  
//                 this.inProgress = false ;
//                 return response.data  

//             }).then((response) => {  
//                 console.log(data); 

//                 return axios.request({
//                     url: "/Student/90" // 重点 
//                 })

//             }).then((response) => { //response代表上一次请求的结果
//                 console.log(response.data);  // 重点 
//             })

//         }
//     },
// })
































// 作业
// 需求 
// 根据Ajax动态加载导航栏下的“新消息”
// 思路 
// 请求 请求对象 请求值 服务器数据 dom元素 赋值请求内容 









// 参考资料 
// 服务器准备数据 
// Mock.mock("/Student/23", {
//    //标题，内容较少
//    "title": '@ctitle()'
//    })

//需求
// 请求到服务器的Board页面文本，赋值给现board页面的main元素 
//先获取这样页面的元素，然后在拿请求页面的元素 请求的时候 从右往左赋值 

// isnews()
// function isnews(){
//    var xhttp = new XMLHttpRequest();
//    xhttp.open("GET","/Student/23"); 
//   xhttp.send();
//   //onload 事件会在页面或图像加载完成后立即发生。

// 原生ajax的拿取数据使用 
//   xhttp.onload = function(){
//        console.log(xhttp.readyState);
//        var student = JSON.parse(this.response) 
//        console.log(student);

//        document.getElementById('isnews').innerHTML = student.title; 
//   }

// jquery的ajax写法 
//     //     // 服务器返回前端信息 都在data中
//     //     success:function(data){

//     //         var $data = $(data); 

//     //         $data.find('h1').click(function(){   //绑定事件 
//     //             $(this).hide();
//     //         })

//     //         $('div#ajax').html($data)
            
//     //     },

// axios的ajax写法 
// 在axios调用函数 操作dom元素 
// onUploadProgress 上传汇总 请求上传的过程，而不是请求结束拿取数据 
// onUploadProgress: function (progressEvent) {//@想一想@有没有坑？  
//     isthis.inProgress = true ;
//     isthis.percentage = progressEvent.loaded / progressEvent.total;
//     console.log(isthis.percentage);
// }

// }
// 定时器 
// setInterval(isnews, 3000)


// 定时请求 
//     // setInterval(
    //     function() {
    //         console.log("不要作死");
    //         console.log(Date.parse (new Date()) -k);
    //         // console.log(Date.parse (new Date()) -j);
    //     },
    //     3000
    // )




    


// 总结
// 请求是根据一个元素出现，并且绑定这个methods中的一个请求方法 ，最后请求都是为了改变dom元素的，基本上应该是内容 

// 请求最新消息 

// Mock.mock("/Student/23", {
//     "title": '@ctitle()' 
//     })


   
// var newNewsfun  =  new Vue({   // news 消息 
//     el:'#new-News',
//     data:{
//         newNews : '1'  ,
//     },

//         created:function(){

//             axios.request({
//                 url: "/Student/23",
//                 method:"get",
//                 // defaults:retry = 3,
//                 // defaults:retryDelay = 2000 ,

//             }).then((response) => {  
//                      this.newNews = response.data.title ;
//                     console.log(response.data.title);  
//             })
//         },

// })

// 第一个问题 
// 不知道怎么拿到请求的数据，参考原生ajax，和jquery的写法 
// 特点
// 都有匿名函数调用 
// 请求完成立刻执行事件，获取元素 
// 请求成功，获取data，拿到元素，进行操作 
// 应该也是请求成功，在拿取数据 ，

// 第二个问题，
// 怎么给元素用？
// 原生ajax：函数名执行，html文件加载完成，请求js文件，js文件中，ajax的函数异步执行
// jquery；拿到元素id，绑定点击事件，事件函数中调用，ajax请求函数，
// vue，应该属于设定data数据，渲染时候拿到data，然后接着往下执行，发现有关于data数据的方法，就发起请求。

// 第三个问题
// 在axios函数中rqquest参数,中，写函数是请求中过程做什么

// 第四个问题
// axios 成功后 一直请求? 方法应该只执行一次啊，再次执行就该是定时器了，怎么一直请求呢？
// 解决 是vue的生命周期的阶段申请请求  也叫钩子函数，也或者事件上 

// 第五个问题
// 怎么控制调用次数啊？

// 需求 
// 文章列表数据获取 
// 这个先不管了，先做文章列表的数据 两个选择，data中做数据集合，一个mack中设置次数数据集合 








