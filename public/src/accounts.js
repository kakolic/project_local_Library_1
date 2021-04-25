const findAccountById= (accounts, id) => {
  //use find method
  let findaccount=accounts.find((account)=> account.id===id )
  return findaccount;
};


function sortAccountsByLastName(accounts) {
  //use sort method
  accounts.sort((accountA,accountB)=> (accountA.name.last > accountB.name.last ? 1 : -1));
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  //use reduce method
  let total =0; 
  //connect books borrows with account id 
  return books.reduce ((acc,book) => {
    book.borrows.reduce((acc, borrow) => {
      if (account.id===borrow.id){
        total++
    }
    return total;
  }, 0)
  return total;
},0)
}

function getBooksPossessedByAccount({id}, books, authors) {
  //use every method
  //return 
  //authorId
let result = [];
// use a for loop for books array 
for (let book in books) {
  const newbook= books[book];
  const borrowedbook= newbook.borrows;
  //use some method to match borrow id with id( account)
  const booksreturned= borrowedbook.some((borrow) => borrow.id===id && !borrow.returned);
  if (booksreturned){
    let bookspossesed = authors.find((author)=> author.id === newbook.authorId);
    let authormatch= newbook;
    authormatch.author= bookspossesed;
    result.push(authormatch)
  }
}
  return result;
}
  

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
