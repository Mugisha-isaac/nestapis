import { Controller,Get,Post,Delete,Param,Body,Query} from '@nestjs/common';
import {BooksService} from './books.service';
import {CreateBookDTO} from './dto/create-book.dto';

@Controller('books')
export class BooksController {
    constructor(private booksService:BooksService){}
    @Get ()
    async getBooks(){
        const books = await this.booksService.getBooks();
        return books;
    }
    @Get(':bookId')
    async getBook(@Param('bookId')bookId){
     const book = await this.booksService.getBook(bookId);
     return book;
    }
    @Post()
    async addBook(@Body() createBookDTO:CreateBookDTO){
        const book = await this.booksService.addBook(createBookDTO);
        return book;
    }
    @Delete(':bookId')
    async deleteBook(@Param('bookId')bookId){
        const books = await this.booksService.deleteBook(bookId);
        return bookId;
    }
}
