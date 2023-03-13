const myLibrary = [];
const authorInput = document.querySelector('#author-input');
const tilteInput = document.querySelector('#title-input');
const pagesInput = document.querySelector('#pages-input');
const readInput = document.querySelector('#read-input');
const submitBtn = document.querySelector('#submit-button');
const body = document.querySelector('body');

function Book(author, tilte, pages, read) {
  this.author = author;
  this.tilte = tilte;
  this.pages = pages;
  this.read = read;
}

function display(bookObject) {
  const div = document.createElement('div');
  div.classList.add('container');
  Object.values(bookObject).forEach((value) => {
    const paragraph = document.createElement('p');
    paragraph.classList.add('book-data');
    paragraph.textContent = value;
    div.appendChild(paragraph);
  });
  body.appendChild(div);
}

function addBookToLibrary(author, tilte, pages, read) {
  const book = new Book(author, tilte, pages, read);
  myLibrary.push(book);
  display(book);
}

submitBtn.addEventListener('click', () => {
  addBookToLibrary(
    authorInput.value,
    tilteInput.value,
    pagesInput.value,
    readInput.value,
  );
  document.querySelectorAll('input').value = '';
});
