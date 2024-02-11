import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center sticky-bottom bg-dark">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0 text-light">
              Made with by{" "}
              <a
              href="https://github.com/kasimkazmi/assignment1"
              className="text-decoration-underline text-dark fs-5 text-light"
                target="_blank"
                rel="noreferrer"
              >
                Raja Kazmi
              </a>
            </p>
            <a
              className="text-dark fs-4"
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
