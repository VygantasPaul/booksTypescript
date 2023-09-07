import {OmitBook} from './types';  // omit usage
import {BookPickEditType} from './types'; //pick usage
import {UserIdType} from './types'; //only id usage


import { BookOptionalType } from './types.js';  // Import your types

// Define variables for DOM elements
const output: HTMLDivElement = document.querySelector("#output")!;
const button: HTMLButtonElement = document.querySelector("button")!;
const books: BookOptionalType[] = []; 

// Function to create and render a book item
function renderBookItem(item:any) {
  const wrap: HTMLDivElement = document.createElement('div');
  wrap.setAttribute('class', 'wrap-item');
  wrap.style.backgroundColor = item.color!;
  
  const img: HTMLImageElement = document.createElement('img');
  img.setAttribute('id', 'book-image');
  img.setAttribute('src', item.image !==  undefined ? item.image : '');
  
  const title: HTMLDivElement = document.createElement('div');
  title.setAttribute('class', 'book-name');
  title.textContent =  item.title !== '' ?  'Book Title: ' + item.title : 'Not exist';
  
  const author: HTMLDivElement = document.createElement('div');
  author.setAttribute('class', 'book-author');
  author.textContent =   item.author !== '' ? 'Book Author: ' + item.author : 'Not exist';
  
  const page_numbers: HTMLDivElement = document.createElement('div');
  page_numbers.setAttribute('class', 'book-pages-number');
  page_numbers.textContent =   item.page_numbers !== '' ? 'Page numbers: ' + item.page_numbers : 'Not exist';
  
  const release_date: HTMLDivElement = document.createElement('div');
  release_date.setAttribute('class', 'book-release-date');
  release_date.textContent =  item.release_date !== '' ? 'Release Date: ' + item.release_date : 'Not exist';
  
  const color: HTMLDivElement = document.createElement('div');
  color.setAttribute('class', 'book-color');
  color.textContent = item.color !== '' ?  'Color: ' + item.color : 'Not exist';
  
  wrap.append(img, title, release_date, author, page_numbers, color); 
  output.appendChild(wrap);
  return wrap;
}

// Function to add a book to the books array and render it
const addBookAndRender = () => { 
  const bookImage: HTMLInputElement = document.querySelector("input[id='input-image']")!;
  const bookAuthor: HTMLInputElement = document.querySelector("input[id='input-author']")!;
  const bookTitle: HTMLInputElement = document.querySelector("input[id='input-title']")!;
  const bookReleaseDate: HTMLInputElement = document.querySelector("input[id='input-release-date']")!;
  const bookNumber: HTMLInputElement = document.querySelector("input[id='input-number-pages']")!;
  const bookColor: HTMLInputElement = document.querySelector("input[id='input-color']")!;

  // const bookOmit: OmitBook = {  // Omit same values
  //   color: bookColor.value,
  //   page_numbers: bookColor.value,
  //   title: bookTitle.value,
  //   release_date:bookReleaseDate.value,
  // }; 
  // console.log(bookOmit)

  // const bookPic: BookPickEditType = {  // pick some values
  //   author: bookAuthor.value,
  //   title: bookTitle.value,
  // }; 
  // console.log(bookPic)

  // const bookId: UserIdType = '32'; // Assign a string value directly
  // console.log(bookId);

  const book: BookOptionalType = {
    author: bookAuthor.value,
    title: bookTitle.value,
    release_date: bookReleaseDate.value,
    page_numbers: bookNumber.value,
    color: bookColor.value,
    image: bookImage.value,
    id: "",
  };   

  books.push(book);

  output.innerHTML = '';

  books.forEach((item) => {
    const bookElement = renderBookItem(item);
    output.appendChild(bookElement);
  });
};

button.addEventListener('click', addBookAndRender);
