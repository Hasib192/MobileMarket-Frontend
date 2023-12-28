import { useState, useEffect } from "react";
import { Get_All_Products_API, Add_To_Cart_API } from "../apiServices/ApiServices";
import ProductCard from "./ProductCard";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProductList = () => {
  const [products, setProducts] = useState(null);

  const navigate = useNavigate();

  let token = localStorage.getItem("token");

  const addToCart = async (e, productId) => {
    e.preventDefault();
    try {
      if (!token) {
        toast.error("Please login first");
        navigate("/login");
      } else {
        let result = await Add_To_Cart_API(productId);
        if (result.status) {
          toast.success("Product added to cart!");
        }
      }
    } catch (error) {
      console.log("Error: " + error.message);
    }
  };

  useEffect(() => {
    Get_All_Products_API()
      .then((res) => setProducts(res))
      .catch((e) => console.error(e.message));
  }, []);

  return products && products.length > 0 ? (
    <div className="row row-cols-1 row-cols-md-3 g-4 py-5">
      {products?.map((product, index) => (
        <ProductCard key={index} product={product} addToCart={addToCart} />
      ))}
    </div>
  ) : (
    <Spinner />
  );
};

export default ProductList;
