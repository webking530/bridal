import { RiErrorWarningLine } from "react-icons/ri";
import NumberFormat from "react-number-format";

export default function MyCartList({ items }) {
  return (
    <div className="my-cart-list round p-5">
      <div className="myItem-panel">
        {items.map((item, index) => {
          return (
            <div
              className="item-detail row m-0 mb-4 pb-2 align-items-center"
              key={index}
            >
              <div className="item-info col-sm-7 p-0 d-flex align-items-center">
                <img
                  src={"/img/myCart/" + item.image}
                  className="cart-image me-4 round-form"
                  alt="cart-image"
                />
                <div className="text-panel">
                  <h3 className="title blue-text m-0 mb-3">{item.title}</h3>
                  <p className="cart-type mb-0 mb-2">{item.type}</p>
                  <p className="cart-amount mb-0">x{item.amount}</p>
                </div>
              </div>
              <div className="item-price col-sm-5 p-0 text-end blue-text">
                <NumberFormat
                  value={item.price}
                  displayType="text"
                  thousandSeparator={true}
                  prefix="€ "
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="discount-panel d-flex py-4">
        <input
          type="text"
          className="form-control discount-code px-5 py-3 round-form me-3"
          placeholder="Discount Code"
        />
        <button className="btn btn-discount text-uppercase round-form px-5 py-3">
          apply
        </button>
      </div>
      <div className="sub-price py-4">
        <div className="sub-total d-flex justify-content-between">
          <h3 className="title">Subtotal:</h3>
          <p className="price">€ 2,962.00</p>
        </div>
        <div className="shipping-price d-flex justify-content-between">
          <h3 className="total d-flex align-items-center">
            Shipping
            <RiErrorWarningLine className="ms-2" />
          </h3>
          <p className="content">Calculated at the next step</p>
        </div>
      </div>
      <div className="final-price py-4">
        <div className="total-price d-flex justify-content-between">
          <h3 className="title text-capitalize">total</h3>
          <p className="content">€ 2,962.00</p>
        </div>
        <div className="result-panel py-3 px-4 d-flex justify-content-between align-items-center">
          <h3 className="title m-0">To be paid:</h3>
          <p className="content m-0">€ 2,962.00</p>
        </div>
      </div>
    </div>
  );
}
