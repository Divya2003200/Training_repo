const bookLibrary={
    books:[],
    addBook(book){
        this.books.push(book)
    },
    getBookByAuthor(author) {
        return this.books
            .filter((i) => i.author === author)
            .map((i) => i.title);
    }
    ,

    removeBook(title){
       return this.books = this.books.filter((i) => i.title !== title);
    }
    ,
    getAllBooks(){
        return this.books.map(book=>book.title)
    }
}

bookLibrary.addBook({ title: "Book 11", author: "Author ab", yearPublished: 2004 });
bookLibrary.addBook({ title: "Book 21", author: "Author kv", yearPublished: 2009 });
bookLibrary.addBook({ title: "Book 31", author: "Author ab", yearPublished: 2021 });

console.log(bookLibrary.books)
//[
//     { title: 'Book 11', author: 'Author ab', yearPublished: 2004 },
//     { title: 'Book 21', author: 'Author kv', yearPublished: 2009 },
//     { title: 'Book 31', author: 'Author ab', yearPublished: 2021 }
//   ]

bookLibrary.removeBook('Book 21')
console.log(bookLibrary.books)
//[
//     { title: 'Book 11', author: 'Author ab', yearPublished: 2004 },
//     { title: 'Book 31', author: 'Author ab', yearPublished: 2021 }
//   ]

console.log(bookLibrary.getBookByAuthor('Author ab'))
// [ 'Book 11', 'Book 31' ]

console.log(bookLibrary.getAllBooks())
// 'Book 11', 'Book 31' ]
// [ 'Book 11', 'Book 31' ]