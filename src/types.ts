export type BookType = {
  author: string,
  title: string,
  page_numbers: string,
  id:string,
  color:string,
  release_date:string,
  image?:string
};   

export type OmitBook = Omit<BookType, "id" | "author">;  /// neprideda id ir author 
export type UserIdType = BookType["id"]; // ima tik ID
export type BookPickEditType = Pick<BookType, "author" | "title">;  // Pickinam  tam tikrus fieldus 
export type BookOptionalType = Partial<BookType>;  // nori pridek nori ne  