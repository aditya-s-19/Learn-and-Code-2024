import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dtos/create-book.dto';
import { UpdateBookDto } from './dtos/update-book.dto';
import * as fs from 'fs';
import * as path from 'path';
import { v4 } from 'uuid';
import { JsonIOException } from 'src/common/exceptions/json-io.exceptions';
import { AppLogger } from 'src/logger/logger.service';

@Injectable()
export class BooksRepository {
  constructor(private logger: AppLogger) {}

  private readonly booksDataFilePath = path.join(
    __dirname,
    '../data/books.json',
  );

  private readData(): UpdateBookDto[] {
    const data = fs.readFileSync(this.booksDataFilePath, 'utf-8');
    return JSON.parse(data);
  }

  private writeData(data: UpdateBookDto[]): void {
    fs.writeFileSync(
      this.booksDataFilePath,
      JSON.stringify(data, null, 2),
      'utf-8',
    );
  }

  private handleJsonReadData(): UpdateBookDto[] {
    try {
      return this.readData();
    } catch (err) {
      this.logger.error(err);
      throw new JsonIOException();
    }
  }

  private handleJsonWriteData(data: UpdateBookDto[]): void {
    try {
      this.writeData(data);
    } catch (err) {
      this.logger.error(err);
      throw new JsonIOException();
    }
  }

  private generateId(): string {
    return v4();
  }

  getBookById(id: string): UpdateBookDto | undefined {
    const books = this.handleJsonReadData();
    return books.find((book) => book.id === id);
  }

  searchBooksByName(name: string): UpdateBookDto[] {
    const books = this.handleJsonReadData();
    return books.filter((book) => book.name === name);
  }

  getAllBooks(): UpdateBookDto[] {
    return this.handleJsonReadData();
  }

  createNewBook(newBook: CreateBookDto): UpdateBookDto {
    const books = this.handleJsonReadData();
    const newBookWithId: UpdateBookDto = { id: this.generateId(), ...newBook };
    books.push(newBookWithId);
    this.handleJsonWriteData(books);
    return newBookWithId;
  }

  updateOldBook(updatedBook: UpdateBookDto): UpdateBookDto {
    const books = this.handleJsonReadData();
    const updatedBooks = books.map((book) =>
      book.id === updatedBook.id ? updatedBook : book,
    );
    this.handleJsonWriteData(updatedBooks);
    return updatedBook;
  }

  deleteBookById(id: string): void {
    const books = this.handleJsonReadData();
    this.handleJsonWriteData(books.filter((book) => book.id !== id));
  }
}
