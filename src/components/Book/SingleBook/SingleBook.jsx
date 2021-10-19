import React from "react";
import cl from "./SingleBook.module.css";

const SingleBook = ({ book, addBook }) => {
  return (
    <div className={cl.card}>
      <div>
        <img src={book.image} alt={book.title} className={cl.bookImage} />
      </div>
      <div className={cl.titleAndPrice}>
        <h6 style={{ textTransform: "uppercase", fontWeight: 500 }}>
          {book.title}
        </h6>

        <div>
          <span style={{ fontWeight: 500 }}>Price:</span> {book.price} $
        </div>
        <hr style={{ margin: "15px 0" }} />
        <button
          class="waves-effect waves-light btn"
          onClick={() => addBook(book)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleBook;
