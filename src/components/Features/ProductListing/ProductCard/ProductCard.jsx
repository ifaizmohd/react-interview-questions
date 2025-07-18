import "./styles.css";

const ProductCard = ({ image, title, description, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={`${title} image`} />
      <p>
        <strong>{title}</strong>
      </p>
      <span>${price}</span>
      <p>{description}</p>
    </div>
  );
};

export default ProductCard;
