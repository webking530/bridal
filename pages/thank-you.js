import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import renderHTML from "react-render-html";
import ReactFlagsSelect from "react-flags-select";

export default function ContactUs() {
  const [selected, setSelected] = useState("LU");

  return (
    <div className="thank-you_page">
      <Head>
        <title>Thank You Page | Royal Coster</title>
      </Head>
      <div className="thank-you_header">
        <div className="top-bar px-5 py-3">
          <div className="r-container d-flex justify-content-between align-items-center">
            <Link passHref={true} href="#">
              <a>WHY ROYAL COSTER ?</a>
            </Link>
            <ReactFlagsSelect
              showSelectedLabel={false}
              showSecondarySelectedLabel={false}
              showOptionLabel={false}
              showSecondaryOptionLabel={false}
              selectedSize={14}
              optionsSize={14}
              fullWidth={false}
              selected={selected}
              onSelect={(code) => setSelected(code)}
              placeholder=" "
              className="flag-select pb-0"
            />
          </div>
        </div >
        <div className="logo-bar text-center py-5">
          <img src="/img/common/thank-you_logo.png" alt="logo-img" />
        </div>
      </div >
      <div className="text-panel text-center mx-auto">
        <h1 className="title text-capitalize blue-text mb-5">Thank you for your order</h1>
        <p className="description dark-text pb-5">Your recently ordered an from our website. Thank you for your order. Please check your mail. The delivery service will fulfill the order as soon as possible. In the mean time, here you can read the rules of care!</p>
      </div>
      <div className="list-panel round p-4 mx-auto">
        <div className="d-flex justify-content-between booking-panel">
          <p>You're Booking</p>
          <p>Tour Date</p>
        </div>
        <div className="experience-panel d-flex justify-content-between">
          <div className="experience-box">
            <h3>The Royal Experience</h3>
            <p>Adult  -  $12.50</p>
          </div>
          <h3>Thursday, October 7th<br />2021 @ 13:00 - 13:30</h3>
        </div>
      </div>
    </div>
  );
}
