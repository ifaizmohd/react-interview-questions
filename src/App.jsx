import "./App.css";
import ProductListing from "./components/Features/ProductListing/ProductListing";
import "./components/Features/Carousel/CarouselElement";
import SearchBar from "./components/Features/SearchBar/SearchBar";
import "./polyfills/bind.polyfills";
import "./DSA";

function App() {
  return (
    <>
      <h2>Product Listing</h2>
      <SearchBar />
      <ai-carousel></ai-carousel>
      <ProductListing />
    </>
  );
}

export default App;
