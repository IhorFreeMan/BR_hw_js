import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const RAW_API_BASE =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/en/";
const API_BASE = RAW_API_BASE.endsWith("/") ? RAW_API_BASE : `${RAW_API_BASE}/`;

function buildUrl(path, params = {}) {
  // path без початкового "/" щоб працювало з /en/
  const url = new URL(path, API_BASE);
  for (const [key, value] of Object.entries(params)) {
    if (value) url.searchParams.set(key, value);
  }
  return url.toString();
}

export default function ProductList() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(""); // slug або ""
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 1) вантажимо категорії один раз
  useEffect(() => {
    const ctrl = new AbortController();

    async function loadCategories() {
      try {
        const res = await fetch(buildUrl("api/categories/"), {
          signal: ctrl.signal,
        });
        if (!res.ok) throw new Error(`Categories HTTP ${res.status}`);
        const data = await res.json();
        setCategories(Array.isArray(data) ? data : []);
      } catch (e) {
        if (e?.name !== "AbortError") {
          // не блокуємо сторінку, просто без категорій
          console.warn(e);
        }
      }
    }

    loadCategories();
    return () => ctrl.abort();
  }, []);

  // 2) вантажимо продукти щоразу, коли змінюється category
  useEffect(() => {
    const ctrl = new AbortController();

    async function loadProducts() {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          buildUrl("api/products/", { category: category || "" }),
          { signal: ctrl.signal },
        );
        if (!res.ok) throw new Error(`Products HTTP ${res.status}`);
        const data = await res.json();

        setItems(Array.isArray(data) ? data : []);
      } catch (e) {
        if (e?.name !== "AbortError") {
          setError(e?.message || "Failed to load products");
        }
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
    return () => ctrl.abort();
  }, [category]);

  const hasProducts = items.length > 0;

  return (
    <section className="products" id="products">
      <div className="container">
        <h2 className="products__title">Products</h2>

        <div className="product-tabs" role="tablist" aria-label="Product categories">
          <button
            type="button"
            className={`tab-btn ${category === "" ? "active" : ""}`}
            onClick={() => setCategory("")}
          >
            All
          </button>

          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`tab-btn ${category === c.slug ? "active" : ""}`}
              onClick={() => setCategory(c.slug)}
            >
              {c.name}
            </button>
          ))}
        </div>

        {loading && <div>Loading…</div>}
        {error && <div>Error: {error}</div>}

        {!loading && !error && !hasProducts && <div>No products.</div>}

        {!loading && !error && hasProducts && (
          <div className="products__grid">
            {items.map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <article className="product-card">
                  <div className="product-card__imgWrap">
                    <img
                      src={p.image || "/img/no_image.png"}
                      alt={p.name}
                      className="product-card__img"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="product-card__name">{p.name}</h3>
                  <div className="product-card__price">${p.price}</div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}