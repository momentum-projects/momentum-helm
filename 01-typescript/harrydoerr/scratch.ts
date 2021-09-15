let a: number;
const A = 4;
a = 4;
if (true) {
  a = 4;
  console.log(a);
}

if (a.toString() === "") {
}

for (let i=0; i<5; i++) {
  setTimeout(() => console.log(i), 500)
}

let function2 = () => 15;
let function3 = function() {
  return 15;
}

class Book {
    title: string = "War and Peace";
    getTitle() {
        let findBook = () => this.title;
    }
}

const warAndPeace = {
    title: "War and Peace Vol 2",
    getTitle: () => "title"
}

let findInLibrary = (book: Book) => {
    return book.title
}

findInLibrary(warAndPeace);

interface Pointlike {
    x: number;
    y: number;
}

interface Named {
    name: string;
}

let logPoint = (point: Pointlike) => {
console.log("x = " + point.x + " y = " + point.y)
}

let logName = (x: Named) => {
    console.log("Hello, " + x.name)
}

const obj = {
    x: 0,
    y: 0,
    name: "Origin"
}

logPoint(obj)
logName(obj)

interface Pointlike2 {
    x: number | null;
    y: number;
}

const obj2 = {
    x: null,
    y: 0
}

let logPoint2 = (point: Pointlike2) => {
  console.log(point?.x?.toString())

  const z: string = point?.x?.toString() || "";

  if (point.x) {
      const z: string = point.x.toString()
  }
}
    
