import * as T from "./Test.js"; //  && mv dist/main.js dist/main.mjs
laraImport("weaver.Query");

var obj = {
    name: "Hello World!!!",
    foo: "bar",
    bar: 1,
    baz: true,
};

function main(): void {
    console.log("Hello World\n");
    T.test();

    /*
     */
    const $functions = Query.search("function").get();
    for (var $fn of $functions) {
        console.log($fn);
    }
}

main();
