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



    // 飞哥版 
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











// B站
// v-on click 
// 特点
// 行内计算 +-，
// 行内返回参数 event 、index、自定义返回参数值、

// B1
// 传参
// 同时传入多个参数，正常参数于event参数 
// 规则:$event 、顺序 、单引号字符串变量指向、
new Vue({
    el:'#vue-app',
    data:{
    },
    methods: {
      value:function(abb,event){
            console.log(abb,event);
        }
    }
})
