import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        className="mb-0 text-center sticky-bottom bg-dark"
        style={{ paddingTop: "20px", height: "80px" }}
      >
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0 text-light">Made with by Raja Kazmi</p>
            <a
              className="text-light fs-4"
              href="https://github.com/kasimkazmi/assignment1"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
