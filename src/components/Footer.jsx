import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";

const Footer = () => {
  return (
    <>
      <div className=" mt-5">
        <footer
          className="text-white text-center text-lg-start"
          style={{
            height: "120vh",
            backgroundImage: `url('https://img.freepik.com/premium-photo/shopping-cart-sale-black-background-copy-space-symbol-decoration-ornament-cyber-monday-black-friday-sale-50-fifty-percent-offer-discount-business-online-shopping-promotion-commercial-store-retail_178037-1094.jpg')`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="container p-4 w-100">
            <div className="row mt-4">
              <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                <h4 className="text-uppercase mb-4 fw-bold">
                  RR Grocery Store
                </h4>
                <p>
                  At RR Grocery Store, we are committed to providing the
                  freshest produce, quality meats, and a wide variety of
                  groceries to meet all your needs.
                </p>
                <p>
                  Visit us for a convenient and enjoyable shopping experience,
                  where quality and value go hand in hand.
                </p>
                <div className="mt-4">
                  <a type="button">
                    {" "}
                    <FacebookIcon className="fs-2" />
                  </a>
                  <a type="button">
                    <TwitterIcon className="fs-2 " />
                  </a>
                  <a type="button">
                    <InstagramIcon className="fs-2 " />
                  </a>
                  <a type="button">
                    <LinkedInIcon className="fs-2 " />
                  </a>
                </div>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4 pb-1">Search something</h5>
                <div className="form-outline form-white mb-4">
                  <input
                    type="text"
                    id="formControlLg"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="formControlLg">
                    Search
                  </label>
                </div>
                <ul
                  className="fa-ul list-unstyled"
                  style={{ marginLeft: "1.1em" }}
                >
                  <li className="mb-3">
                    <span className="fa-li">
                      <HomeIcon />
                    </span>
                    <span className="ms-2">Warsaw, 00-967, Italy</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <MailIcon />
                    </span>
                    <span className="ms-2">contact@example.com</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <CallIcon />
                    </span>
                    <span className="ms-2">+ 48 234 567 88</span>
                  </li>
                </ul>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Opening hours</h5>
                <table className="table text-center text-white">
                  <tbody className="fw-normal">
                    <tr>
                      <td>Mon - Thu:</td>
                      <td>8am - 9pm</td>
                    </tr>
                    <tr>
                      <td>Fri - Sat:</td>
                      <td>8am - 1am</td>
                    </tr>
                    <tr>
                      <td>Sunday:</td>
                      <td>9am - 10pm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
