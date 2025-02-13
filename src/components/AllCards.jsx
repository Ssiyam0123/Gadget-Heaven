import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

export default function AllCards() {
  const data = useLoaderData();
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data) {
      const filteredProducts = category
        ? data.filter(
            (product) =>
              product.category.toLowerCase() === category.toLowerCase()
          )
        : data;
      setProducts(filteredProducts);
    }
  }, [category, data]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
      {products.map((product, i) => (
        <Card key={i} product={product} />
      ))}
    </div>
  );
}
