const ProductCard = ({ product, addToCart }) => {
  const { _id, image, title, short_des, price, discount_price } = product;

  return (
    <div className="col">
      <div className="card h-100">
        <img src={image} className="mx-auto d-block" width="375px" height="375px" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text lh-base">{short_des}</p>
          <hr></hr>
          <span className="text-decoration-line-through">
            <span>৳</span> {price.toLocaleString()}
          </span>
          <span className="mx-1 fs-5">
            <span>৳</span> {discount_price.toLocaleString()}
          </span>
          <a href="#" className="btn btn-primary float-end" onClick={(e) => addToCart(e, _id)}>
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
