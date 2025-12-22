import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../cart/CartContext.jsx";


const RAW_API_BASE =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/en/";
const API_BASE = RAW_API_BASE.endsWith("/") ? RAW_API_BASE : `${RAW_API_BASE}/`;

function buildUrl(path) {
  return new URL(path, API_BASE).toString(); // path без початкового "/"
}

export default function ProductDetail() {
  const { slug } = useParams();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { addItem } = useCart();
  const [qty, setQtyLocal] = useState(1);

  useEffect(() => {
    const ctrl = new AbortController();

    async function load() {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(buildUrl(`api/products/${slug}/`), {
          signal: ctrl.signal,
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setItem(data);
      } catch (e) {
        if (e?.name !== "AbortError") setError(e?.message || "Failed to load");
      } finally {
        setLoading(false);
      }
    }

    load();
    return () => ctrl.abort();
  }, [slug]);

  if (loading) return <div className="container">Loading…</div>;
  if (error) return <div className="container">Error: {error}</div>;
  if (!item) return <div className="container">Not found.</div>;

  return (
    <div className="product-detail-wrapper">
      <div className="product-detail-image">
        <img src={item.image || "/img/no_image.png"} alt={item.name} />
      </div>

      <div className="product-detail-info">
        <div className="product-category-link">
          <Link to="/">Home</Link>
          {item.category?.name ? <> / {item.category.name}</> : null}
        </div>

        <h1 className="product-title">{item.name}</h1>
        <div className="product-price">${item.price}</div>

        <div className="add-to-cart-form">
          <div className="quantity-wrapper">
            <input
              type="number"
              min="1"
              value={qty}
              onChange={(e) => setQtyLocal(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="btn-add-cart"
            onClick={() => addItem(item, Number(qty) || 1)}
          >
            Add to cart
          </button>
        </div>

        {item.description ? (
          <div className="product-description">{item.description}</div>
        ) : null}

        <div className="product-category-link">
          <Link to="/">← Back to products</Link>
        </div>
      </div>
    </div>
  );
}