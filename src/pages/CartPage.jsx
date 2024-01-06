import { Get_Cart_LIST_API, Remove_Cart_Item_API } from "../apiServices/ApiServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    Get_Cart_LIST_API()
      .then((res) => setCart(res.data))
      .catch((e) => console.error(e.message));
  }, [cart._id]);

  const removeCartItem = async (e, id) => {
    e.preventDefault();
    let result = await Remove_Cart_Item_API(id);
    if (result) {
      toast.success("Product deleted from cart!");
    } else {
      toast.error("Error");
    }
  };

  const priceCalculate = () => {
    let sum = 0;
    cart.map((item, index) => {
      sum += item.product.discount_price * item.unit;
    });
    setSubtotal(sum);
  };

  useEffect(() => priceCalculate(), [cart]);

  return (
    <div className="container h-100 py-5">
      <div className="row d-flex justify-content-center align-items-center h-100">
        {cart && cart.length > 0 ? (
          <div className="col-10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
            </div>
            <div className="card rounded-3 mb-4">
              {cart.map((item, index) => (
                <div className="card-body p-4" key={index}>
                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img src={item.product.image} className=" img-thumbnail rounded " alt="Cotton T-shirt" />
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      <p className="lead fw-normal mb-2">{item.product.title}</p>
                      <p>
                        <span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey
                      </p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                      {/* <button className="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                        <FontAwesomeIcon icon={faMinus} size="lg" />
                      </button>
                      <input min={1} name="quantity" defaultValue={item.unit} type="number" className="form-control form-control-sm" />
                       <button className="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                        <FontAwesomeIcon icon={faPlus} size="lg" />
                      </button> */}
                      <p>
                        <span className="text-muted">Quantity:</span>
                        {item.unit}
                      </p>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h5 className="mb-0">{item.product.discount_price.toLocaleString()}</h5>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" className="text-danger" onClick={(e) => removeCartItem(e, item._id)}>
                        <FontAwesomeIcon icon={faTrash} size="lg" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card rounded-3 mb-4">
              <div className="card-body p-4 d-flex flex-row">
                <div className="form-floating flex-fill">
                  <input type="text" id="form1" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form1">
                    Discound code
                  </label>
                </div>
                <button type="button" className="btn btn-outline-warning btn-lg ms-3">
                  Apply
                </button>
              </div>
            </div>

            <div className="card rounded-3 mb-4">
              <div className="card-body p-4">
                <div className="d-flex align-items-end justify-content-end">
                  <div className="col-md-4 col-lg-4 col-xl-4">
                    <div className="d-flex justify-content-between" style={{ fontWeight: 500 }}>
                      <p className="mb-2">Subtotal</p>
                      <p className="mb-2">৳ {subtotal.toLocaleString()}</p>
                    </div>
                    <div className="d-flex justify-content-between" style={{ fontWeight: 500 }}>
                      <p className="mb-0">Shipping</p>
                      <p className="mb-0">৳ 60</p>
                    </div>
                    <hr className="my-4" />
                    <div className="d-flex justify-content-between" style={{ fontWeight: 500 }}>
                      <p className="mb-2">Total </p>
                      <p className="mb-2">৳ {(subtotal + 60).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body px-4">
                <button type="button" className="btn btn-warning btn-lg w-100">
                  Proceed to Pay
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="col-10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-normal mb-0 text-black">Your cart is empty</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
