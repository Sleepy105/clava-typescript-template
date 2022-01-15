//import Query from "weaver.Query";
var obj = {
    name: "Hello World!!!",
    foo: "bar",
    bar: 1,
    baz: true,
};

function main(): void {
    console.log("Hello World\n");

    /*
     */
    const $functions = Query.search("function").get();
    for (var $fn of $functions) {
        console.log($fn);
    }
}
