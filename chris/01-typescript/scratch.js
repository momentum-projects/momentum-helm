"use strict";
let a = 4;
const A = 4;
if (a.toString() === "") {
    console.log("hello");
}
let b = [73];
let c = [73, "hello"];
if (false) {
    for (var i = 0; i < 5; i++) {
        setTimeout(() => console.log(i), 500);
    }
    for (let i = 0; i < 5; i++) {
        setTimeout(() => console.log(i), 500);
    }
}
class Book {
    title = "war and peace";
    getTitle() {
        let findBook = () => this.title;
        // let findBook2 = function() { return this.title } // bad
        return findBook();
    }
}
let book = new Book();
console.log(book.getTitle());
const loveStory = {
    title: "war and peace 2",
    getTitle: () => "a title"
};
let findInLibrary = (book) => {
    return book.getTitle();
};
console.log(findInLibrary(loveStory));
let logPoint = (point) => {
    console.log(`x=${point.x}, y=${point.y}`);
};
let logName = (name) => {
    console.log("Name: " + name.name);
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
// let logPoint2 = (point: Pointlike2) => {
//   console.log(point.x)
//   const z: string = point.x?.toString() || ""
//   const z2 = point || point.x || point.x.toString() || ""
//   const z3: string = point?.x?.toString() || ""
// }
// logPoint2(obj2)
//# sourceMappingURL=scratch.js.map