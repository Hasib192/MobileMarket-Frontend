const ProductCard = ({ product }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={product.image} className="mx-auto d-block" width="375px" height="375px" />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text lh-base">{product.short_des}</p>
          <hr></hr>
          <span className="text-decoration-line-through">৳ {product.price}</span>
          <span className="mx-1 fs-5">৳{product.discount_price}</span>
          <a href="#" className="btn btn-primary float-end">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
