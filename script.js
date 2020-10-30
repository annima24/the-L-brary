let myLibrary = [];
const button = document.getElementById('button');
const container = document.getElementById('container');

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title
  this.author = author
  this.pages = pages
  this.hasRead = read
}
function displayBooks() {
    for (const key in myLibrary) {
        if (myLibrary[key]) {
            const card = document.createElement('p')
            const textnode = document.createTextNode
            (`Title:${myLibrary[key].title},
            Author:${myLibrary[key].author},
            Number of Pages: ${myLibrary[key].pages},
            Have you completed the book: ${myLibrary[key].hasRead}`)
            
            card.appendChild(textnode);
            container.appendChild(card);
        }
    }
}

function addBookToLibrary() {
  // do stuff here
    let userTitle = prompt('title');
    let userAuthor = prompt('author');
    let userPages = prompt('pages');
    let userHasRead = prompt('hasRead');
    const obj = new Book(userTitle,userAuthor,userPages,userHasRead);
    myLibrary.push(obj);
    container.innerHTML='';
    return displayBooks();
}


button.addEventListener('click', addBookToLibrary)

//style p elements to be card like
//append p elements to html on button press

//has read can have an event listener on all buttons that are created for has read that loops through with a for in loop to see which button was picked and the same myLibrary.hasRead[key] can be toggled true/false
//similar function for removing nodes, listen to all and removechild[key].

const obj1 = new Book('The Shining', 'King', 300, 'true')
const obj2 = new Book('Dune', 'Herbert', 900, 'true')
const obj3 = new Book('The Hobbit', 'King', 300,'false')
myLibrary.push(obj1, obj2, obj3)
displayBooks()