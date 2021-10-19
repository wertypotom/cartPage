import React from "react";
import SingleBook from "./SingleBook/SingleBook";
import cl from "./Book.module.css";

const Book = ({ books, addBook }) => {
  return (
    <div className={cl.products}>
      {books.map((book) => {
        return <SingleBook key={book.id} book={book} addBook={addBook} />;
      })}
    </div>
  );
};

export default Book;
