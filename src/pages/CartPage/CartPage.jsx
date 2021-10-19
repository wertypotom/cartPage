import React from "react";
import CartItem from "../../components/CartItem/CartItem";
import cl from "./CartPage.module.css";

const CartPage = ({ cartItems, addBook, removeBook, clearCart }) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <div className={cl.cartItems}>
      <h2
        style={{
          textAlign: "center",
          fontWeight: 500,
          paddingBottom: "20px",
          borderBottom: "2px solid #000",
        }}
      >
        Cart Items
      </h2>

      {cartItems.length === 0 && (
        <h4 style={{ textAlign: "center" }}>Cart is empty...</h4>
      )}

      <div>
        {cartItems.map((item) => {
          return (
            <CartItem
              item={item}
              key={item.id}
              addBook={addBook}
              removeBook={removeBook}
            />
          );
        })}
      </div>

      {cartItems.length >= 1 && (
        <div className={cl.totalPrice}>
          <div style={{ paddingBottom: "10px" }}>
            Total Price: {totalPrice} $
          </div>
          <button
            onClick={clearCart}
            class="waves-effect waves-light btn red pointer"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
