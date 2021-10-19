import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import BookPage from "../BookPage/BookPage";
import CartPage from "../CartPage/CartPage";

const RootPage = () => {
  const [books, setBooks] = React.useState([
    {
      title: "Apples Never Fall",
      id: 1,
      image: "https://m.media-amazon.com/images/I/41cF-Khdv+L.jpg",
      price: 1234,
    },
    {
      title: "Dune ",
      id: 2,
      image: "https://m.media-amazon.com/images/I/517+uE+Ek2L.jpg",
      price: 473,
    },
    {
      title: "The High 5 Habit",
      id: 3,
      image: "https://m.media-amazon.com/images/I/51VDDi-+UdL.jpg",
      price: 542,
    },
    {
      title: "The Sandman: Act II",
      id: 4,
      image: "https://m.media-amazon.com/images/I/51UYl4VBMRL.jpg",
      price: 222,
    },
    {
      title: "Greenlights ",
      id: 5,
      image: "https://m.media-amazon.com/images/I/51DZeZw7K0L.jpg",
      price: 333,
    },
    {
      title: "Little Blue Truck's Halloween",
      id: 6,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51MB5SD5GIL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      price: 544,
    },
  ]);
  const [cartItems, setCartItems] = React.useState([]);
  const [seacrhQuary, setSeacrhQuary] = React.useState("");

  const sortedBooks = React.useMemo(() => {
    return books.filter((book) => {
      return book.title.toLowerCase().includes(seacrhQuary);
    });
  }, [seacrhQuary, books]);

  const addBook = (book) => {
    const bookExist = cartItems.find((item) => item.id === book.id);
    if (bookExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === book.id
            ? { ...bookExist, quantity: bookExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...book, quantity: 1 }]);
    }
  };

  const removeBook = (book) => {
    const bookExist = cartItems.find((item) => item.id === book.id);
    if (bookExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== book.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === book.id
            ? { ...bookExist, quantity: bookExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <>
      <Navbar cartItems={cartItems} />
      <Switch>
        <Route
          path="/cart"
          render={() => (
            <CartPage
              cartItems={cartItems}
              addBook={addBook}
              removeBook={removeBook}
              clearCart={clearCart}
            />
          )}
        />
        <Route
          path="/"
          render={() => (
            <BookPage
              sortedBooks={sortedBooks}
              setSeacrhQuary={setSeacrhQuary}
              seacrhQuary={seacrhQuary}
              addBook={addBook}
            />
          )}
        />
      </Switch>
    </>
  );
};

export default RootPage;
