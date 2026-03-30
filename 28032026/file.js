class Book{
    constructor(title,author,year){
           
        this.title=title;
        this.author=author;
        this.year=year;
        this.isAvailable = true;
    }

   getInfo(){
console.log(`title: ${this.title}, author: ${this.author} , year: ${this.year}`);
}

borrowBook(){
    if(this.isAvailable){
 this.isAvailable = false;
 return;
    }
    console.log("Its already unavailable");
}

returnBook(){
    if(!this.isAvailable){
        this.isAvailable = true;
        return;
    }
    console.log("Its already available");
    
}

matchesAuthor(authorName){
    return this.author.toLowerCase() === authorName.toLowerCase();
}

matchesTitle(word){
  return this.title.toLowerCase().includes(word.toLowerCase());
}
}

class Library{
     constructor(){
        this.books = [];
     }

     addBook(book){
        this.books.push(book);
     }

     removeBook(title){
        let ind = this.books.findIndex(el => el.title === title);
        if(ind!==-1){
            this.books.splice(ind,1);
        }
     }

     findBookByTitle(title){
         let ind = this.books.findIndex(el => el.title === title);
         if(ind!==-1){
            return this.books[ind];
         }
         return null;
     }

     findBooksByAuthor(authorName){
        return this.books.filter(el => el.author === authorName);
       
     }

     getAvailableBooks(){
        return this.books.filter(el => el.isAvailable === true);
        
     }

     borrowBook(title){
    const book = this.books.find(el => el.title === title);
    if(book){
        book.borrowBook();
    } else {
        console.log("Book not found");
    }
}

     returnBook(title){
    const book = this.books.find(el => el.title === title);
    if(book){
        book.returnBook();
    } else {
        console.log("Book not found");
    }
}

     showAllBooks(){
       this.books.forEach(book => book.getInfo());
     }

     countBooks(){
        return this.books.length;
     }

     countAvailableBooks(){
       let count = 0;
       for(let i = 0 ;i<this.books.length;++i){
        if(this.books[i].isAvailable === true) count++;
       }
       return count;
     }

     searchBooks(word){
        let res =[];
        for(let i=0;i<this.books.length;++i){
        if(this.books[i].title.toLowerCase().includes(word.toLowerCase()))
    res.push(this.books[i]);}
return res;
     }

     getOldestBook(){
        if(this.books.length === 0) return null;
        let min = this.books[0].year;
        for(let i = 1;i<this.books.length;++i){
            if(this.books[i].year < min) min = this.books[i].year
        }
        return min;
        
     }


}

const book1 = new Book("Harry Potter", "J. K. Rowling", 1997);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("Animal Farm", "George Orwell", 1945);
const book4 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

console.log("=== All books ===");
library.showAllBooks();

console.log("=== Count books ===");
console.log(library.countBooks()); // 4

console.log("=== Count available books ===");
console.log(library.countAvailableBooks()); // 4

console.log("=== Find by title ===");
console.log(library.findBookByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBooksByAuthor("George Orwell"));

console.log("=== Search books ===");
console.log(library.searchBooks("Harry"));

console.log("=== Borrow book ===");
library.borrowBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Borrow same book again ===");
library.borrowBook("1984");

console.log("=== Return book ===");
library.returnBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Available books ===");
console.log(library.getAvailableBooks());

console.log("=== Oldest book ===");
console.log(library.getOldestBook());

console.log("=== Remove book ===");
library.removeBook("The Hobbit");
console.log(library.countBooks()); // 3

console.log("=== Final books ===");
library.showAllBooks();