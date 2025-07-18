import { useEffect, useState } from "react";
import ProductCard from "./ProductCard/ProductCard";
import "./styles.css";

const PAGE_COUNT = 12;

const ProductListing = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchProducts = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const res = await data.json();
    setAllProducts(res.products);
  };

  const start = currentPage * PAGE_COUNT;
  const end = start + PAGE_COUNT;
  const totalProducts = allProducts?.length;
  const totalPages = Math.ceil(totalProducts / PAGE_COUNT);

  const next = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prev = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="product-listing-container">
      <div className="product-grid">
        {allProducts?.slice(start, end)?.map((product) => (
          <ProductCard
            key={`${product.title}`}
            image={product?.thumbnail}
            title={product?.title}
            description={product?.description}
            price={product?.price}
          />
        ))}
      </div>
      <div className="pagination-container">
        <button disabled={currentPage === 0} onClick={prev}>
          {"<"}
        </button>
        {[...Array(totalPages)].keys().map((n) => (
          <button
            key={n}
            className={`"pagination-button" ${
              currentPage === n ? "selected" : ""
            }`}
            onClick={() => setCurrentPage(n)}
          >
            {n}
          </button>
        ))}
        <button disabled={currentPage === totalPages - 1} onClick={next}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default ProductListing;
