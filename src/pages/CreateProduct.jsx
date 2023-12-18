import { useState } from "react";
import { toast } from "react-toastify";
import validator from "validator";
import { Create_Product_API } from "../apiServices/ApiServices";

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    short_des: "",
    price: "",
    discount_price: "",
    image: "",
    stock: "",
    star: "",
  });

  const { title, short_des, price, discount_price, image, stock, star } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const createProduct = async (e) => {
    e.preventDefault();
    if (validator.isEmpty(title)) {
      toast.error("Title is required");
    } else if (validator.isEmpty(short_des)) {
      toast.error("Short Description is required");
    } else if (validator.isEmpty(price)) {
      toast.error("Price is required");
    } else if (validator.isEmpty(discount_price)) {
      toast.error("Discount Price is required");
    } else if (validator.isEmpty(image)) {
      toast.error("Image is required");
    } else if (validator.isEmpty(stock)) {
      toast.error("Stock is required");
    } else if (validator.isEmpty(star)) {
      toast.error("Star is required");
    } else {
      try {
        let result = await Create_Product_API(title, short_des, price, discount_price, image, stock, star);

        setFormData({
          title: "",
          short_des: "",
          price: "",
          discount_price: "",
          image: "",
          stock: "",
          star: "",
        });
      } catch (e) {
        console.error("Product Create Failed: " + e.message);
      }
    }
  };

  return (
    <div className="container py-5">
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Short Description</label>
        <input type="text" className="form-control" name="short_des" value={formData.short_des} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input type="number" className="form-control" name="price" value={formData.price} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Discount Price</label>
        <input type="number" className="form-control" name="discount_price" value={formData.discount_price} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Image</label>
        <input type="text" className="form-control" name="image" value={formData.image} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Stock</label>
        <input type="number" className="form-control" name="stock" value={formData.stock} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Star</label>
        <input type="number" className="form-control" name="star" value={formData.star} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary" onClick={createProduct}>
        Submit
      </button>
    </div>
  );
};

export default CreateProduct;
