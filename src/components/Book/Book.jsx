import React from "react";
import SingleBook from "./SingleBook/SingleBook";
import cl from "./Book.module.css";

const Book = ({ books, addBook }) => {
  return (
    <>
      {books.length > 0 ? (
        <div className={cl.products}>
          {books.map((book) => {
            return <SingleBook key={book.id} book={book} addBook={addBook} />;
          })}
        </div>
      ) : (
        <h4 style={{ textAlign: "center" }}>
          No books matching your search...
        </h4>
      )}
    </>
  );
};

export default Book;
