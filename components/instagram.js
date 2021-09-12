import Link from "next/link";

export default function Instagram() {
  return (
    <div className="instagram pb-5">
      <div className="r-container">
        <div className="row mx-0 mb-5 text-panel">
          <div className="col-md-6 col-12 p-0">
            <h1 className="m-0 text-capitalize">
              Follow us on <div>Instagram</div>
            </h1>
          </div>
          <div className="col-md-6 col-12 p-0 d-flex flex-column justify-content-end link-panel">
            <div className="mx-0 text-md-end text-start">
              Follow{" "}
              <Link href="#">
                <a className="text-primary">#Royalcoster</a>
              </Link>{" "}
              @Instagram For
            </div>
            <div className="mx-0 text-md-end text-start">
              <Link href="#">
                <a className="text-primary">#Diamondstories</a>
              </Link>
              ,{" "}
              <Link href="#">
                <a className="text-primary">#Inspiration</a>
              </Link>{" "}
              &{" "}
              <Link href="#">
                <a className="text-primary">#Amsterdiamonds</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="row gallery-panel m-0 p-0">
          <div className="col-md-6 col-12 m-0 p-0 d-flex flex-column justify-content-between">
            <div className="row m-0 p-0">
              <div className="col-6 d-flex m-0 p-0">
                <Link href="#">
                  <a className="instagram-link gallery-type-1">
                    <div className="gallery-item round">
                      <img
                        src="/img/homepage/Rectangle 34.png"
                        className="round"
                        alt="gallery-img"
                      />
                      <div className="hover-panel"></div>
                    </div>
                    {/* <img src="/img/homepage/Rectangle 34.png" alt="gallery-img" /> */}
                  </a>
                </Link>
              </div>
              <div className="col-6 d-flex m-0 p-0">
                <Link href="#">
                  <a className="instagram-link gallery-type-1">
                    <div className="gallery-item round">
                      <img
                        src="/img/homepage/Rectangle 38.png"
                        className="round"
                        alt="gallery-img"
                      />
                      <div className="hover-panel"></div>
                    </div>
                    {/* <img src="/img/homepage/Rectangle 38.png"  className="round" alt="gallery-img" /> */}
                  </a>
                </Link>
              </div>
            </div>
            <div className="row m-0 p-0">
              <Link href="#">
                <a className="instagram-link p-0 gallery-type-1">
                  <div className="gallery-item round">
                    <img
                      src="/img/homepage/Rectangle 37.png"
                      className="round"
                      alt="gallery-img"
                    />
                    <div className="hover-panel"></div>
                  </div>
                  {/* <img src="/img/homepage/Rectangle 37.png"  className="round" alt="gallery-img" /> */}
                </a>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-12 p-0">
            <div className="row m-0 p-0">
              <div className="col-6 p-0">
                <div className="row m-0 p-0">
                  <Link href="#">
                    <a className="instagram-link p-0 gallery-type-1">
                      <div className="gallery-item round">
                        <img
                          src="/img/homepage/Rectangle 36.png"
                          className="round"
                          alt="gallery-img"
                        />
                        <div className="hover-panel"></div>
                      </div>
                      {/* <img src="/img/homepage/Rectangle 36.png"  className="round" alt="gallery-img" /> */}
                    </a>
                  </Link>
                </div>
                <div className="row m-0 p-0">
                  <Link href="#">
                    <a className="instagram-link p-0 gallery-type-1">
                      {/* <img src="/img/homepage/Rectangle 35.png"  className="round" alt="gallery-img" /> */}
                      <div className="gallery-item round">
                        <img
                          src="/img/homepage/Rectangle 35.png"
                          className="round"
                          alt="gallery-img"
                        />
                        <div className="hover-panel"></div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-6 d-flex p-0">
                <Link href="#">
                  <a className="instagram-link gallery-type-2">
                    <div className="gallery-item round">
                      <img
                        src="/img/homepage/Rectangle 1.png"
                        className="round"
                        alt="gallery-img"
                      />
                      <div className="hover-panel"></div>
                    </div>
                    {/* <img src="/img/homepage/Rectangle 1.png"  className="round" alt="gallery-img" /> */}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <button className="btn round-form mt-5 px-5 py-3 follow-btn blue-outline-btn">
          Follow @Costerdiamondsofficial
        </button>
      </div>
    </div>
  );
}