import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "teapoz_cart_v1";
const CartContext = createContext(null);

function safeParse(json) {
  try {
    const value = JSON.parse(json);
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => safeParse(localStorage.getItem(STORAGE_KEY)));

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const itemsCount = useMemo(
    () => items.reduce((sum, it) => sum + (it.qty || 0), 0),
    [items],
  );

  const total = useMemo(
    () => items.reduce((sum, it) => sum + (Number(it.price) || 0) * (it.qty || 0), 0),
    [items],
  );

  function addItem(product, qty = 1) {
    const productId = product?.id;
    if (!productId) return;

    const normalized = {
      id: product.id,
      slug: product.slug,
      name: product.name,
      image: product.image || null,
      price: Number(product.price), // з API приходить рядком
    };

    setItems((prev) => {
      const nextQty = Math.max(1, Number(qty) || 1);
      const idx = prev.findIndex((x) => x.id === productId);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + nextQty };
        return copy;
      }
      return [...prev, { ...normalized, qty: nextQty }];
    });
  }

  function setQty(id, qty) {
    setItems((prev) => {
      const nextQty = Math.max(0, Number(qty) || 0);
      if (nextQty === 0) return prev.filter((x) => x.id !== id);
      return prev.map((x) => (x.id === id ? { ...x, qty: nextQty } : x));
    });
  }

  function removeItem(id) {
    setItems((prev) => prev.filter((x) => x.id !== id));
  }

  function clear() {
    setItems([]);
  }

  const value = useMemo(
    () => ({ items, itemsCount, total, addItem, setQty, removeItem, clear }),
    [items, itemsCount, total],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}