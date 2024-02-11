import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "../components";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-5 bg-dark rounded shadow">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center text-light">Login</h1>
            <hr />
            <div className="row my-4 h-100">
              <div className="col-md-6 col-lg-6 col-sm-12 mx-auto">
                <form>
                  <div className="my-3 text-light">
                    <label htmlFor="floatingInput" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="my-3 text-light">
                    <label htmlFor="floatingPassword" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                  </div>
                  <div className="my-3 text-light">
                    <p>
                      New Here?
                      <Link
                        to="/register"
                        className="text-decoration-underline text-info"
                      >
                        Register
                      </Link>
                    </p>
                  </div>
                  <div className="text-center text-light">
                    <button
                      className="my-2 mx-auto btn btn-light"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default Login;
