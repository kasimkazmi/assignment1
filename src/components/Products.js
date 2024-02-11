import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
    setSelectedItem(product);
    setTimeout(() => {
      setSelectedItem(null);
    }, 800);
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      setData(await response.json());
      setLoading(false);
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        {[...Array(4)].map((_, index) => (
          <div className="col-md-3 col-sm-6 col-xs-12 mb-4" key={index}>
            <Skeleton height={592} />
          </div>
        ))}
      </>
    );
  };

  const ProductCard = ({ product }) => {
    return (
      <div className="col-md-3 col-sm-6 col-xs-12 mb-4">
        <div className="card text-center h-100" key={product.id}>
          <img
            className="card-img-top p-3"
            src={product.images}
            alt="Card"
            height={300}
          />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">
              {product.description.substring(0, 90)}...
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item lead">$ {product.price}</li>
          </ul>
          <div className="card-body">
            <Link to={"/product/" + product.id} className="btn btn-dark m-1">
              Product View
            </Link>
            <button
              className="btn btn-dark m-1"
              onClick={() => addProduct(product)}
            >
              Add to Cart
            </button>
            {selectedItem && selectedItem.id === product.id && (
              <div
                className="alert alert-success alert-dismissible fade show"
                role="alert"
              >
                Added to Cart!
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                  onClick={() => setSelectedItem(null)}
                ></button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const ShowProducts = () => {
    const productRows = [];

    for (let i = 0; i < data.length; i += 4) {
      const productsInRow = data.slice(i, i + 4).map((product, index) => (
        <div className="col-md-3 col-sm-6 col-xs-12 mb-4" key={i + index}>
          <ProductCard product={product} key={i + index} />
        </div>
      ));
      productRows.push(
        <div className="row" key={i}>
          {productsInRow}
        </div>
      );
    }

    return productRows;
  };

  return (
    <div className="container my-5 py-5 bg-dark rounded shadow">
      <div className="row">
        <div className="col-12">
          <h2 className="display-4 text-center text-light mb-4">
            Latest Products
          </h2>
          <hr className="mb-5" style={{ borderColor: "#ffffff" }} />
        </div>
      </div>
      <div className="row">{loading ? <Loading /> : <ShowProducts />}</div>
    </div>
  );
};

export default Products;
