import { message } from "./helloworld.js";
import Query from "lara-js/api/weaver/Query.js";

console.log("Clava Typescript Template");
message();

console.log();
console.log("Functions in source files:");
console.group();
for (var $fn of Query.search("function")) {
    console.log($fn);
}
console.groupEnd();
