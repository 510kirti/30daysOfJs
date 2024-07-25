//OBJECTS

//Acitivity - 1

//Task - 1
let book = {
  title: "Rise",
  author: "XYZ",
  year: 2021,
};
console.log(book); //{ title: 'Rise', author: 'XYZ', year: 2021 }

//Task - 2
console.log(book.title); //Rise
console.log(book.author); //XYZ




//Activity - 2

//Task - 3
let book1 = {
  title: "Rise",
  author: "XYZ",
  year: 2021,
  getAuthorTitle: function () {
    return `${this.title} by ${this.author}`;
  },
};
console.log(book1.getAuthorTitle()); //Rise by XYZ

//Task - 4
let book2 = {
  title: "Rise",
  author: "XYZ",
  year: 2021,
  updateYear: function (newYear) {
    this.year = newYear;
  },
};
console.log("before update: ", book2.year); //2021
book2.updateYear(2023);
console.log("after update: ", book2.year); //2023




//Activity - 3

//Task - 5
let library = {
  name: "MY LIBRARY",
  books: [
    {
      title: "Rise",
      author: "XYZ",
      year: 2021,
    },

    {
        title: "The Wings",
        author: "ABC",
        year: 2020
    }
  ],
};
console.log(library);
//output
// {
//   name: 'MY LIBRARY',
//   books: [
//     { title: 'Rise', author: 'XYZ', year: 2021 },
//     { title: 'The Wings', author: 'ABC', year: 2020 }
//   ]
// }


//Task - 6
console.log(library.name); //MY LIBRARY
library.books.forEach(book => {
    console.log(book.title);
})
//Output
// Rise
// The Wings



//Activity - 4

//Task - 7
let book3 = {
  title: "Rise",
  author: "XYZ",
  year: 2021,
  getTitleYear: function () {
    return `${this.title} in ${this.year}`;
  },
};
console.log(book3.getTitleYear()); //Rise in 2021



//Activity - 5

//Task - 8
for(let prop in book)
{
    console.log(`${prop}: ${book[prop]}`);
}
//Output
// title: Rise
// author: XYZ
// year: 2021


//Task - 9
let keys = Object.keys(book);
keys.forEach(key =>{
    console.log(`${key}`);
})
//output
// title
// author
// year

let values = Object.values(book);
values.forEach(value =>{
    console.log(`${value}`);
})
//output
// Rise
// XYZ
// 2021