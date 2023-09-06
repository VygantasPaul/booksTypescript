import {BookOptionalType} from './types.js';  // optional usage
import {OmitBook} from './types';  // omit usage
import {BookPiclEditType} from './types'; //pic usage
import {UserIdType} from './types'; //only id usage
const output: HTMLDivElement = document.querySelector("#output")!;
const button: HTMLButtonElement = document.querySelector("button")!;

const books: BookOptionalType[] = []; 


const addBook = () => { 

  const BookAuthor: HTMLInputElement = document.querySelector("input[id='input-author']")!;
  const BookTitle: HTMLInputElement = document.querySelector("input[id='input-title']")!;
  const BookNumber: HTMLInputElement = document.querySelector("input[id='input-number-pages']")!;
  const BookReleaseDate: HTMLInputElement = document.querySelector("input[id='input-release-date']")!;
  const BookColor:HTMLInputElement = document.querySelector("input[id='input-color']")!; 
  const BookImage:HTMLInputElement = document.querySelector("input[id='input-image']")!; 
  
  const book: BookOptionalType = {
    author: BookAuthor.value,
    title: BookTitle.value,
    release_date:(BookReleaseDate.value),
    page_numbers: (BookNumber.value),
    color:BookColor.value,
    image:BookImage.value,
    id:""
  };   

  // const book: BookPiclEditType = {  // pick some values
  //   author: BookAuthor.value,
  //   title: BookTitle.value,
  // }; 
  // const bookId: UserIdType = '32'; // Assign a string value directly
  // books.push(bookId);
  
  books.push(book);
 
  BookAuthor.value = '';
  BookTitle.value = '';
  BookReleaseDate.value = '';
  BookNumber.value = '';
  BookColor.value = '';
  BookImage.value = '';
  
  output.innerHTML = '';
  books.forEach((item)=>{
    const wrap: HTMLDivElement = document.createElement('div');
    wrap.setAttribute('class', 'wrap-item');
    wrap.style.backgroundColor = item.color!;
    
    const img: HTMLImageElement = document.createElement('img');
    img.setAttribute('id','book-image')
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
    color.textContent = item.color !== '' ?  'Release Date: ' + item.color : 'Not exist';
    
    wrap.append(img,title,release_date, author, page_numbers,color); 
    
    output.appendChild(wrap);

   
  })

  
};

button.addEventListener('click', addBook);
