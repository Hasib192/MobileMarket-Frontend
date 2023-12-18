import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const CartPage = () => {
  return (
    <div className="container h-100 py-5">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-10">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
          </div>
          <div className="card rounded-3 mb-4">
            <div className="card-body p-4">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-2 col-lg-2 col-xl-2">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp" className="img-fluid rounded-3" alt="Cotton T-shirt" />
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <p className="lead fw-normal mb-2">Basic T-shirt</p>
                  <p>
                    <span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey
                  </p>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                  <button className="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                    <FontAwesomeIcon icon={faMinus} size="lg" />
                  </button>
                  <input id="form1" min={0} name="quantity" defaultValue={2} type="number" className="form-control form-control-sm" />
                  <button className="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                    <FontAwesomeIcon icon={faPlus} size="lg" />
                  </button>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <h5 className="mb-0">$499.00</h5>
                </div>
                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                  <a href="#!" className="text-danger">
                    <FontAwesomeIcon icon={faTrash} size="lg" />
                  </a>
                </div>
              </div>
            </div>
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
                    <p className="mb-2">$23.49</p>
                  </div>
                  <div className="d-flex justify-content-between" style={{ fontWeight: 500 }}>
                    <p className="mb-0">Shipping</p>
                    <p className="mb-0">$2.99</p>
                  </div>
                  <hr className="my-4" />
                  <div className="d-flex justify-content-between mb-4" style={{ fontWeight: 500 }}>
                    <p className="mb-2">Total </p>
                    <p className="mb-2">$26.48</p>
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
      </div>
    </div>
  );
};

export default CartPage;
