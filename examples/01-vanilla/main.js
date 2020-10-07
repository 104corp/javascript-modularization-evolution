function foo() {
  document.getElementById("app").innerHTML = "<h1>Hello foo</h1>";
}

function bar() {
  document.getElementById("app").innerHTML = "<h1>Hello bar</h1>";
}

// 後面宣告的 function 可以複寫
// function foo() {
//   document.getElementById("app").innerHTML = "<h1>Goodbye foo</h1>";
// }

foo();
