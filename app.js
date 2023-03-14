const myLibrary = [];
const submitBtn = document.querySelector('#submit-button');
const newBookBtn = document.querySelector('#new-book-btn');

function Book(author, tilte, pages) {
  this.author = author;
  this.tilte = tilte;
  this.pages = pages;
}

function deleteBook(evt, bookObject) {
  const parent = evt.target.parentNode;
  parent.remove();
  myLibrary.pop(bookObject);
}

function addButton(bookObject, div) {
  const removeButton = document.createElement('button');
  removeButton.classList.add('remove-button');
  removeButton.textContent = 'Remove Book';
  removeButton.addEventListener('click', deleteBook);
  div.appendChild(removeButton);
}

function addParagraphs(bookObject, div) {
  Object.values(bookObject).forEach((value) => {
    const paragraph = document.createElement('p');
    paragraph.classList.add('book-data');
    paragraph.textContent = value;
    div.appendChild(paragraph);
  });
}

function showForm() {
  const newBookBtnContainer = document.querySelector('#new-book-btn-container');
  const formContainer = document.querySelector('#input-form-container');
  formContainer.classList.remove('not-active');
  newBookBtnContainer.classList.add('not-active');
}

function hideForm() {
  const newBookBtnContainer = document.querySelector('#new-book-btn-container');
  const formContainer = document.querySelector('#input-form-container');
  formContainer.classList.add('not-active');
  newBookBtnContainer.classList.remove('not-active');
}

function setReadStatus(target) {
  if (target.textContent !== "You've read this book!") {
    target.parentNode.classList.add('is-read');
    return "You've read this book!";
  }
  target.parentNode.classList.remove('is-read');
  return "You heve't read this book!";
}

function addReadButton(div) {
  const readBtn = document.createElement('button');
  readBtn.classList.add('read-button');
  readBtn.textContent = 'Reading status';
  readBtn.addEventListener('click', () => {
    readBtn.textContent = setReadStatus(readBtn);
  });
  div.appendChild(readBtn);
}

function display(bookObject) {
  const booksContainer = document.querySelector('main');
  const div = document.createElement('div');
  div.classList.add('container');
  addParagraphs(bookObject, div);
  addReadButton(div);
  addButton(bookObject, div);
  booksContainer.insertBefore(div, booksContainer.firstChild);
}

function addBookToLibrary(author, tilte, pages) {
  const book = new Book(author, tilte, pages);
  myLibrary.push(book);
  display(book);
}

submitBtn.addEventListener('click', () => {
  const authorInput = document.querySelector('#author-input');
  const tilteInput = document.querySelector('#title-input');
  const pagesInput = document.querySelector('#pages-input');
  addBookToLibrary(authorInput.value, tilteInput.value, pagesInput.value);
  hideForm();
});

newBookBtn.addEventListener('click', showForm);
