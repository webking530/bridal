import React, { Component } from "react";
import { useState } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiPinterestFill,
  RiYoutubeFill,
} from "react-icons/ri";

export default function Footer() {
  let handleAccordion = (e) => {
    let target = e.target
      .closest(".accordion-item")
      .querySelector(".accordion-collapse");
    if (target.classList.contains("show")) {
      target.classList.remove("show");
    } else {
      target.classList.add("show");
    }
    if (e.target.classList.contains("collapsed")) {
      e.target.classList.remove("collapsed");
    } else {
      e.target.classList.add("collapsed");
    }
  };
  let paymentLogo = [
    { img: "Frame.png", url: "#" },
    { img: "Frame-1.png", url: "#" },
    { img: "Frame-2.png", url: "#" },
    { img: "Frame-3.png", url: "#" },
    { img: "Frame-4.png", url: "#" },
    { img: "Frame-5.png", url: "#" },
    { img: "Frame-6.png", url: "#" },
    { img: "Frame-7.png", url: "#" },
    { img: "Frame-8.png", url: "#" },
    { img: "Frame-9.png", url: "#" },
    { img: "Frame-11.png", url: "#" },
  ];
  let midFooterList = [
    {
      title: "Shop Online",
      url: [
        { link: "Engagement Rings", url: "#" },
        { link: "Wedding & Anniversaries", url: "#" },
        { link: "Empress Collection", url: "#" },
        { link: "Bespoke Jewelry", url: "#" },
        { link: "Consult with an expert", url: "#" },
      ],
    },
    {
      title: "About Royal Coster",
      url: [
        { link: "Our Story", url: "#" },
        { link: "Why Royal Coster", url: "#" },
        { link: "Corporate Responsibility", url: "#" },
        { link: "Press", url: "#" },
        { link: "Jobs & internships", url: "#" },
      ],
    },
    {
      title: "Customer Services",
      url: [
        { link: "Contact Us", url: "#" },
        { link: "Reviews & TESTIMONIALS", url: "#" },
        { link: "Faq’s", url: "#" },
        { link: "Upgrade Service", url: "#" },
        { link: "Global blue refunds", url: "#" },
      ],
    },
    {
      title: "Diamond Guides",
      url: [
        { link: "Engagement ring buying guide", url: "#" },
        { link: "Diamond buying guide", url: "#" },
        { link: "WHAt to look in a diamond", url: "#" },
        { link: "trends in diamond jewelry", url: "#" },
        { link: "Proposal ideas", url: "#" },
        { link: "What the royal bought", url: "#" },
      ],
    },
  ];
  return (
    <div className="footer" id="footer">
      <div className="main-footer r-container d-md-block d-none">
        <div className="footer-top row p-0 m-0 py-5">
          <div className="col-lg-6 col-12 py-lg-5 pb-lg-5 pb-0 px-0 social-links d-flex justify-content-lg-start justify-content-center">
            <Link href="#">
              <a className="me-4">
                <div>
                  <RiFacebookCircleFill />
                </div>
              </a>
            </Link>
            <Link href="#">
              <a className="me-4">
                <div>
                  <RiInstagramFill />
                </div>
              </a>
            </Link>
            <Link href="#">
              <a className="me-4">
                <div>
                  <RiLinkedinFill />
                </div>
              </a>
            </Link>
            <Link href="#">
              <a className="me-4">
                <div>
                  <RiPinterestFill />
                </div>
              </a>
            </Link>
            <Link href="#">
              <a className="me-4">
                <div>
                  <RiYoutubeFill />
                </div>
              </a>
            </Link>
          </div>
          <div className="col-lg-6 col-12 py-lg-5 py-0 px-0 text-lg-end text-center">
            {paymentLogo.map((item, index) => {
              return (
                <Link key={index} href={item.url}>
                  <a className={index == 0 ? "ms-0" : "ms-4"}>
                    <img
                      src={"/img/common/" + item.img}
                      alt="payment-getway"
                      width="38"
                      className="my-4"
                    />
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="footer-middle row p-0 m-0 pt-5">
          {midFooterList.map((items, index) => {
            return (
              <div
                className="col-lg-3 col-md-6 col-12 text-md-start text-center m-0 mb-5"
                key={index}
              >
                <h3 className="mb-5">{items.title}</h3>
                {items.url.map((item, key) => {
                  return (
                    <Link href="#" key={key}>
                      <a className="row m-0 mb-3">{item.link}</a>
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="mobile-footer r-container d-md-none d-block">
        <div className="mobile-footer-logo text-center">
          <img src="/img/common/logo_black.png" alt="footer-logo" />
          <p className="mobile-footer__title my-5">
            The oldest diamond polishing factory in the world. Home of the Royal
            201.
          </p>
        </div>
        <div className="mobile-social-link d-flex justify-content-center pb-5">
          <Link href="#">
            <a>
              <div className="social-link me-4">
                <RiFacebookCircleFill />
              </div>
            </a>
          </Link>{" "}
          <Link href="#">
            <a>
              <div className="social-link me-4">
                <RiInstagramFill />
              </div>
            </a>
          </Link>{" "}
          <Link href="#">
            <a>
              <div className="social-link me-4">
                <RiLinkedinFill />
              </div>
            </a>
          </Link>{" "}
          <Link href="#">
            <a>
              <div className="social-link me-4">
                <RiPinterestFill />
              </div>
            </a>
          </Link>{" "}
          <Link href="#">
            <a>
              <div className="social-link">
                <RiYoutubeFill />
              </div>
            </a>
          </Link>
        </div>
        <div className="accordion" id="links-panel">
          {midFooterList.map((item, index) => {
            return (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed py-5 ps-0"
                    onClick={handleAccordion}
                  >
                    {item.title}
                  </button>
                </h2>
                <div className="accordion-collapse collapse">
                  <div className="accordion-body">
                    {item.url.map((link, key) => {
                      return (
                        <Link href={link.url} key={key}>
                          <a>
                            <div className="link-item mb-5">{link.link}</div>
                          </a>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
          {/* <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                onClick={handleAccordion}
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div> */}
        </div>
        <div className="col-12 py-4 px-0 text-center">
          {paymentLogo.map((item, index) => {
            return (
              <Link key={index} href={item.url}>
                <a className={index == 0 ? "ms-0" : "ms-4"}>
                  <img
                    src={"/img/common/" + item.img}
                    alt="payment-getway"
                    width="38"
                    className="my-2"
                  />
                </a>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="footer-bottom py-3">
        <div className="r-container row m-auto p-0">
          <div className="col-md-6 col-12 text-md-start text-center px-0">
            © 2020 Royal Coster Diamonds - All rights reserved
          </div>
          <div className="col-md-6 d-md-block d-none px-0 mt-md-0 mt-3 text-md-end text-center">
            <Link href="#">
              <a className="text-uppercase">Privacy Policy</a>
            </Link>
            <Link href="#">
              <a className="text-uppercase ms-5">Cookies</a>
            </Link>
            <Link href="#">
              <a className="text-uppercase ms-5">Terms</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
