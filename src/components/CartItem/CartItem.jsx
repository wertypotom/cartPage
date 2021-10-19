import React from "react";
import cl from "./CartItem.module.css";

const CartItem = ({ item, addBook, removeBook }) => {
  return (
    <div key={item.id} className={cl.cartItemsList}>
      <img src={item.image} alt={item.title} className={cl.cartImage} />
      <div className={cl.cartItemsName}>{item.title}</div>
      <div className={cl.cartFunction}>
        <button
          className="btn-floating btn-small waves-effect waves-light green"
          onClick={() => addBook(item)}
        >
          <i className="material-icons">+</i>
        </button>{" "}
        <button
          className="btn-floating btn-small waves-effect waves-light red"
          onClick={() => removeBook(item)}
        >
          <i className="material-icons">-</i>
        </button>
      </div>
      <div className={cl.cartItemsPrice}>
        {item.quantity} * {item.price} $
      </div>
    </div>
  );
};

export default CartItem;
