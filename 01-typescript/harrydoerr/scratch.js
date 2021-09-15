"use strict";
let a;
const A = 4;
a = 4;
if (true) {
    a = 4;
    console.log(a);
}
if (a.toString() === "") {
}
for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 500);
}
let function2 = () => 15;
let function3 = function () {
    return 15;
};
class Book {
    constructor() {
        this.title = "War and Peace";
    }
    getTitle() {
        let findBook = () => this.title;
    }
}
const warAndPeace = {
    title: "War and Peace Vol 2",
    getTitle: () => "title"
};
let findInLibrary = (book) => {
    return book.title;
};
findInLibrary(warAndPeace);
let logPoint = (point) => {
    console.log("x = " + point.x + " y = " + point.y);
};
let logName = (x) => {
    console.log("Hello, " + x.name);
};
const obj = {
    x: 0,
    y: 0,
    name: "Origin"
};
logPoint(obj);
logName(obj);
const obj2 = {
    x: null,
    y: 0
};
let logPoint2 = (point) => {
    console.log(point?.x?.toString());
    const z = point?.x?.toString() || "";
    if (point.x) {
        const z = point.x.toString();
    }
};
//# sourceMappingURL=scratch.js.map