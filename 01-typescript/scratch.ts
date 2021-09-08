
// number | string | boolean | object

let a: number;

const A = 4;

if (true) {
    a = 4;
}

if (a.toString() == "") {

}

let b: number[] = [73];
let c = [73, "stuff"];

for (let i=0; i<5; i++) {
    setTimeout(() => console.log(i), 500);
}

let function2 = () => 15;

class Book {
    title: string = "War and Peace";

    getTitle() {
        let findBook = () => this.title;
    }
}

const warAndPeace = {
    title: "War and Peace Vol 2",
    getTitle: () => "a title:"
};

let findInLibrary = (book: Book) => {
    return book.title;
}

findInLibrary(warAndPeace);

interface Pointlike {
    x: number;
    y: number;
}

interface Named {
    name: string;
}



let logPoint = (point: Pointlike & Named) => {
    console.log("x = " + point.x + " y = " + point.y);
}

let logName = (x: Named) => {
    console.log("Hello, " + x.name);
}

const obj = {
    x: 0,
    y: 0,
    name: "Origin"
}
logPoint(obj);
logName(obj);

interface Pointlike2 {
    x?: number;
    y: number;
}

const obj2 = {
    x: null,
    y: 0
}

let logPoint2 = (point: Pointlike2) => {
    console.log(point.x);

    if (point.x) {
        const z: string = point.x.toString();
    }

    //point || point.x || point.x.toString()
    const z: string = point?.x?.toString() || "";
    console.log(z);
    return z;
}