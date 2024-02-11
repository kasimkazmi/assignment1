import React, { useState } from "react";
import { Footer, Navbar } from "../components";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <>
      <Navbar />
      <div className="container my-5 py-5 bg-dark rounded shadow">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center text-light">Contact Us</h1>
            <hr />
            <div className="row my-4 h-100">
              <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                <form onSubmit={handleSubmit}>
                  <div className="form my-3 text-light">
                    <label htmlFor="Name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="form my-3 text-light" >
                    <label htmlFor="Email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="form my-3 text-light">
                    <label htmlFor="Message">Message</label>
                    <textarea
                      rows={5}
                      className="form-control"
                      id="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message"
                    />
                  </div>
                  <div className="text-center">
                    <button
                      className="my-2 px-4 mx-auto btn btn-light"
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default ContactPage;
