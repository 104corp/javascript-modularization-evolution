var MYAPP = {
  foo: function() {
    document.getElementById("app").innerHTML = "<h1>Hello foo</h1>";
  },
  bar: function() {
    document.getElementById("app").innerHTML = "<h1>Hello bar</h1>";
  }
};

MYAPP.foo();

// 在其他地方可以加入新方法
// MYAPP.myFunc = function() {
//   console.log("My function!");
// };

// 甚至是整個複寫
// MYAPP = {
//   foo: function() {
//     document.getElementById("app").innerHTML = "<h1>Goodbye MYAPP</h1>";
//   }
// };

// 小心翼翼的宣告
// MYAPP = MYAPP || {
//   foo: function() {
//     document.getElementById("app").innerHTML = "<h1>Goodbye MYAPP</h1>";
//   }
// };
