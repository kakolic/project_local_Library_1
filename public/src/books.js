function findAuthorById(authors, id) {
  //use find method and connect to author
  let findauthor=authors.find((author)=> author.id===id )
  return findauthor;
};

function findBookById(books, id) {
  //use find method and connect to author
  let findbooks=books.find((book)=> book.id===id )
  return findbooks;
}

function partitionBooksByBorrowedStatus(books) {
  //return an array of borrowed books and returned books
  // use filter method 
  let borrowedbooks = books.filter((book)=> book.borrows[0].returned===false);
  let returnedbooks = books.filter((book)=> book.borrows[0].returned !==false)
  return[ borrowedbooks, returnedbooks]
}

function getBorrowersForBook(book, accounts) {
  // return an array of person who borrowed the books

  let borrowersforbook=[];
  //obtain the object value for books for borrows;
  let books = Object.values(book.borrows);
  for (let i = 0; i< accounts.length; i++){
    for (j= 0; j < books.length;j++){
      if (accounts[i].id ===books[j].id){
        let returned = books[j].returned;
        //make sure the array is less than 10
        if (borrowersforbook.length < 10){
          borrowersforbook.push({...accounts[i], returned})
        }
      }
    }
  }
return borrowersforbook;
 };
 
  

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
