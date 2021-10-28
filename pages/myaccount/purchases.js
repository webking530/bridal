import React, { useState, useRef, useEffect } from "react";

export default function Purchases() {
  return (
    <div className="purchases_panel">
      <h3 className="title">
        My Purchases <span>(3)</span>
      </h3>
      <div className="list-panel">
        <div className="item-panel row m-0 mb-3">
          <div className="title-panel d-md-block d-sm-flex  d-block col-md-3 p-0">
            <div className="order-status-panel mb-md-3 md-sm-0 md-3 me-md-0 me-sm-4 me-0">
              <h3>Order Status</h3>
              <p>Sent</p>
            </div>
            <div className="order-number-panel mb-md-3 md-sm-0 md-3 me-md-0 me-sm-4 me-0">
              <h3>Order Number</h3>
              <p>EU036174534</p>
            </div>
            <div className="order-number-panel mb-md-3 md-sm-0 md-3 me-md-0 me-sm-4 me-0">
              <h3>Order Date</h3>
              <p>10/8/21</p>
            </div>
          </div>
          <div className="order-panel col-md-9 p-0">
            <div className="product-panel d-flex flex-wrap">
              <div className="image-panel hover-scale me-3 mb-md-0 mb-3">
                <img src="/img/product/product_earring-2.png" alt="product-img" />
              </div>
              <div className="image-panel hover-scale me-3 mb-md-0 mb-3">
                <img src="/img/product/product_earring-2.png" alt="product-img" />
              </div>
              <div className="image-panel hover-scale me-3 mb-md-0 mb-3">
                <img src="/img/product/product_earring-2.png" alt="product-img" />
              </div>
            </div>
            <div className="btn-panel d-flex align-items-center">
              <button className="btn  btn-order-detail blue-btn round-form text-uppercase me-2">
                order details
              </button>
              <button className="btn btn-reorder round-form text-uppercase">
                reorder
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
