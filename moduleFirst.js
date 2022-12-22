// const easy1 = require("./moduleSecond.mjs")
// easy1()

// import {easy} from "./moduleSecond.mjs"
//  // this is how we imort an ES6 module
// // this import function ran after writing "type":"module" in package.json
// easy()

// import {easy1} from "./moduleSecond.mjs" 
import {easy, easy1} from "./moduleSecond.mjs" // two function can be imported at same time

import * as a1 from "./moduleSecond.mjs" // import * imports all the content from the file to be exported

console.log(a1)
// import {easy1 as easy} from "./moduleSecond.mjs"
// import easy1 from "./moduleSecond.mjs" // we can use it without {} as we have defined a default export
easy1()
easy()