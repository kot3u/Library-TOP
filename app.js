const myLibrary = [];
const submitBtn = document.querySelector('#submit-button');
const newBookBtn = document.querySelector('#new-book-btn')

function Book(author, tilte, pages, read) {
  this.author = author;
  this.tilte = tilte;
  this.pages = pages;
  this.read = read;
}

function deleteBook(evt, bookObject) {
  const parent = evt.target.parentNode;
  parent.innerHTML = '';
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
  const formContainer = document.querySelector('#input-form-container')
  formContainer.classList.add('active')
}

function hideForm(evt) {
  evt.target.parentNode.classList.remove('active')
}

function display(bookObject) {
  const booksContainer = document.querySelector('.books-container');
  const div = document.createElement('div');
  div.classList.add('container');
  addParagraphs(bookObject, div);
  addButton(bookObject, div);
  booksContainer.appendChild(div);
}

function addBookToLibrary(author, tilte, pages, read) {
  const book = new Book(author, tilte, pages, read);
  myLibrary.push(book);
  display(book);
}

submitBtn.addEventListener('click', (evt) => {
  const authorInput = document.querySelector('#author-input');
  const tilteInput = document.querySelector('#title-input');
  const pagesInput = document.querySelector('#pages-input');
  const readInput = document.querySelector('#read-input');
  addBookToLibrary(
    authorInput.value,
    tilteInput.value,
    pagesInput.value,
    readInput.value,
  );
  hideForm(evt)
});

newBookBtn.addEventListener('click', showForm)