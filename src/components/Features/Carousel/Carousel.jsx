import React, { useEffect, useState } from "react";
import ProductCard from "../ProductListing/ProductCard/ProductCard";

const CustomCarousel = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=10");
    const json = await data.json();
    setProducts(json?.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="carousel">
      {products?.map((p) => (
        <ProductCard
          key={`${p.id}`}
          image={p.thumbnail}
          title={p.title}
          price={p.price}
          description={p.description}
        />
      ))}
    </div>
  );
};

export default CustomCarousel;
