import { useState, useEffect } from "react";
import { Get_All_Products_API } from "../apiServices/ApiServices";
import ProductCard from "./ProductCard";
import Spinner from "./Spinner";

const ProductList = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    Get_All_Products_API()
      .then((res) => setProducts(res))
      .catch((e) => console.error(e.message));
  }, []);

  return products && products.length > 0 ? (
    <div className="row row-cols-1 row-cols-md-3 g-4 py-5">
      {products?.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  ) : (
    <Spinner />
  );
};

export default ProductList;
