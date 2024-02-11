import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Footer, Navbar } from "../components";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };
  console.log(id, "aadadId");

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/products/${id}`
        );
        const data = await response.json();
        setProduct(data);
        setLoading(false);
        console.log("Product Response ===>>", data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);
  console.log("Produncr==========>>>>", product);
  const Loading = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 py-3">
              <Skeleton height={400} width={400} />
            </div>
            <div className="col-md-6 py-5">
              <Skeleton height={30} width={250} />
              <Skeleton height={90} />
              <Skeleton height={40} width={70} />
              <Skeleton height={50} width={110} />
              <Skeleton height={120} />
              <Skeleton height={40} width={110} inline={true} />
              <Skeleton className="mx-3" height={40} width={110} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    if (!product) return null; 
    return (
      <div className="container my-5 py-2 bg-dark text-light">
        <div className="row">
          <div className="col-md-6 col-sm-12 py-3">
            {/* Render product details here */}
            <img
              className="img-fluid"
              src={product.images[0]} 
              alt={product.title}
              width="400px"
              height="400px"
            />
          </div>
          <div className="col-md-6 col-md-6 py-5">
            <h4 className="text-uppercase text-muted">{product.title}</h4>
            <h1 className="display-5">{product.title}</h1>
            <p className="lead">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </p>
            <h3 className="display-6  my-4">${product.price}</h3>
            <p className="lead">{product.description}</p>
            <button
              className="btn btn-outline-light"
              onClick={() => addProduct(product)}
            >
              Add to Cart
            </button>
            <Link to="/cart" className="btn btn-light mx-3">
              Go to Cart
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Product;
