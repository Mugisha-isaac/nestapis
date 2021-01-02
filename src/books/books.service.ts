import { HttpException, Inject, Injectable } from '@nestjs/common';
import {Books} from '../mock/books.mock';
import {Model} from 'mongoose';

@Injectable()
export class BooksService {
    books = Books;
    getBooks(): Promise<any>{
       return new Promise(resolve=>{
           resolve(this.books);
       })
    }

    getBook(bookId):Promise<any>{
        let id = Number(bookId);
        return new Promise(resolve=>{
            const book = this.books.find(book=>book.id === id);
            if(!book){
                throw new HttpException('book does not exist ',404);
            }
            resolve(book);
        })
    }

    addBook(book):Promise<any>{
      return new Promise(resolve=>{
          this.books.push(book);
          resolve(this.books);
      })
    }

    deleteBook(bookId){
        let id = Number(bookId);
        return new Promise(resolve=>{
            let index = this.books.findIndex(book=>book.id === id);
            this.books.splice(1,index);
            resolve(this.books);
        })
    }
  
     updateBook(bookId){
         let id = Number(bookId);
         return new Promise(resolve=>{
             let book = this.books.find(book=>book.id === id);
             if(!book){
                 console.log('That book is not found in our libraly');
             }
             else{
                 
             }
         })
       
     }
}
