import React from "react";
import Book from "../../components/Book/Book";
import Input from "../../components/Input/Input";

const BookPage = ({ seacrhQuary, setSeacrhQuary, sortedBooks, addBook }) => {
  return (
    <>
      <Input
        value={seacrhQuary}
        onChange={(e) => setSeacrhQuary(e.target.value)}
        placeholder="Search books..."
      />

      <Book books={sortedBooks} addBook={addBook} />
    </>
  );
};

export default BookPage;
