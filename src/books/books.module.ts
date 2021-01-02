import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
// import {BookSchema} from './books.model';

@Module({
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
