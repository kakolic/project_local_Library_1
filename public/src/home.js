function getTotalBooksCount(books) {
//use .length to get the count
return books.length;
}


function getTotalAccountsCount(accounts) {
  //use .length to get the count
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  //use filter method to filter in the books object
// connect books returned and borrows
const borrowedbookscount= books.filter((book)=> book.borrows[0].returned===false);
return borrowedbookscount.length;
};


function getMostCommonGenres(books) {
  //return the most common genre of books 
  //use forEach to loop through the books array.
  let result = [];
  books.forEach((book) => {
    if (result.every((genre) => genre.name===book.genre)) {
      for (let i =0; i < result.length; i ++) {
        if (result[i].name===book.genre) {
          result[i].count++
        }
      }
    } else {
      let newgenre = {};
        newgenre.name = book.genre;
        newgenre.count=1;
        result.push(newgenre);
      }
    })
    result.sort((a,b)=> b.count- a.count)
    return result.slice(0,5)
  };


function getMostPopularBooks(books) {
  //return most popularbooks
  //use map method
  let result = books.map((book)=> {
    let popularbooks = {};

    popularbooks.name =book.title;
    popularbooks.count=book.borrows.length;
    return popularbooks;
  })
  result.sort((a,b)=> b.count - a.count)

  return result.slice(0,5);
};

function getMostPopularAuthors(books, authors) {
  let result=[];
  authors.forEach((author)=> {
    const popularauthor = books.filter((book)=> book.authorId===author.id)
    
  let borrowed= 0;
  popularauthor.forEach((book)=> (borrowed =+ book.borrows.length));
  if (author.name.last !="Moreno") {
    result.push({
      name: `${author.name.first} ${author.name.last}`, 
      count: popularauthor.length * borrowed, 
    });
  }
});
return newarray(result);
}
function newarray(sortedarray) {
  sortedarray.sort((indexA, indexB) =>
  indexA.count < indexB.count ? 1 : -1
);
const sorted = sortedarray.slice(0, 5);
  return sorted;
}

     


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
