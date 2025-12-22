import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../cart/CartContext.jsx";

function money(n) {
  return Number(n || 0).toFixed(2);
}

export default function Cart() {
  const { items, total, setQty, removeItem, clear } = useCart();

  return (
    <div className="cart-container">
      <div className="section-header">
        <h1 className="title">Cart</h1>
      </div>

      {items.length === 0 ? (
        <>
          <div className="container" style={{ textAlign: "center" }}>
            Your cart is empty.
          </div>
          <div className="cart-actions" style={{ justifyContent: "center" }}>
            <Link className="btn-continue" to="/">
              Continue shopping
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="cart-wrapper">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {items.map((it) => (
                  <tr key={it.id}>
                    <td className="td-image">
                      <img src={it.image || "/img/no_image.png"} alt={it.name} />
                    </td>

                    <td className="td-product">
                      <Link to={`/product/${it.slug}`}>{it.name}</Link>
                    </td>

                    <td className="td-price">${money(it.price)}</td>

                    <td>
                      <div className="qty-form">
                        <input
                          type="number"
                          min="1"
                          value={it.qty}
                          onChange={(e) => setQty(it.id, e.target.value)}
                        />
                      </div>
                    </td>

                    <td className="td-total">${money(it.price * it.qty)}</td>

                    <td>
                      <button className="btn-remove" onClick={() => removeItem(it.id)} aria-label="Remove">
                        ×
                      </button>
                    </td>
                  </tr>
                ))}

                <tr className="total-row">
                  <td colSpan={4} className="text-right">
                    Total
                  </td>
                  <td className="total-price">${money(total)}</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="cart-actions">
            <Link className="btn-continue" to="/">
              Continue shopping
            </Link>

            <button className="btn-checkout" type="button" onClick={clear}>
              Clear cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}