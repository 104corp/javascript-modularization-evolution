// import { add } from "./modules/math.js";
// import("./modules/math.js").then(module => {
//   // Do something with the module.
//   console.log(module);
// });
// console.log(add(1, 2));
async function main() {
  const module = await import("./modules/math.js");
  console.log(module.add(1, 2));
}

main();
