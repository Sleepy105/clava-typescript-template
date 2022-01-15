declare class Query {
    constructor(customGreeting?: string);
    greet: void;
    static search(type: String): Query;
    get(): Array<Object>;
}

declare var clava: {
    name: string;
    foo: string;
    bar: number;
    baz: boolean;
};
