import React, { useState,  } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { images } from "../assets/images";
import { Link, } from "react-router-dom";

const Products = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
    setSelectedItem(product);
    setTimeout(() => {
      setSelectedItem(null);
    }, 800);
  };
 
  const productData = [
    {
      id: 1,
      title: "Product 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere doloremque veritatis odit similique sequi. Odit amet fuga nam quam quasi facilis sed doloremque saepe sint perspiciatis explicabo totam vero quas provident ipsam, veritatis nostrum velit",
      price: 10.99,
      images: images.Product1,
    },
    {
      id: 2,
      title: "Product 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere doloremque veritatis odit similique sequi. Odit amet fuga nam quam quasi facilis sed doloremque saepe sint perspiciatis explicabo totam vero quas provident ipsam, veritatis nostrum velit",
      price: 12.99,
      images: images.Product2,
    },
    {
      id: 3,
      title: "Product 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere doloremque veritatis odit similique sequi. Odit amet fuga nam quam quasi facilis sed doloremque saepe sint perspiciatis explicabo totam vero quas provident ipsam, veritatis nostrum velit",
      price: 13.99,
      images: images.Product3,
    },
    {
      id: 4,
      title: "Product 4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere doloremque veritatis odit similique sequi. Odit amet fuga nam quam quasi facilis sed doloremque saepe sint perspiciatis explicabo totam vero quas provident ipsam, veritatis nostrum velit",
      price: 16.99,
      images: images.Product4,
    },
    {
      id: 5,
      title: "Product 5",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere doloremque veritatis odit similique sequi. Odit amet fuga nam quam quasi facilis sed doloremque saepe sint perspiciatis explicabo totam vero quas provident ipsam, veritatis nostrum velit",
      price: 18.99,
      images: images.Product5,
    },
    {
      id: 6,
      title: "Product 6",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere doloremque veritatis odit similique sequi. Odit amet fuga nam quam quasi facilis sed doloremque saepe sint perspiciatis explicabo totam vero quas provident ipsam, veritatis nostrum velit",
      price: 29.99,
      images: images.Product6,
    },
    {
      id: 7,
      title: "Product 7",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere doloremque veritatis odit similique sequi. Odit amet fuga nam quam quasi facilis sed doloremque saepe sint perspiciatis explicabo totam vero quas provident ipsam, veritatis nostrum velit",
      price: 20.99,
      images: images.Product7,
    },
    {
      id: 8,
      title: "Product 8",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere doloremque veritatis odit similique sequi. Odit amet fuga nam quam quasi facilis sed doloremque saepe sint perspiciatis explicabo totam vero quas provident ipsam, veritatis nostrum velit",
      price: 12.99,
      images: images.Product8,
    },
  ];

  const ProductCard = ({ product }) => {
    return (
      <div className="container bg-dark text-light">
        <div className="card text-center p-3" key={product.id}>
          <img
            className="card-img-top p-3"
            src={product.images}
            alt="Card"
            height={300}
            width={400}
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
            {/* onClick{()=> navigateToAnotherPage()} */}

            <Link
              to={{
                pathname: `/product/${product.id}`, // Include the product ID in the URL
                state: { productData: product },
              }}
              className="btn btn-dark m-1"
            >
              Product View
            </Link>
            {/* state: { productData }, */}

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

    for (let i = 0; i < productData.length; i += 4) {
      const productsInRow = productData
        .slice(i, i + 4)
        .map((product, index) => (
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
    <div className="container my-5 py-3 bg-dark rounded shadow">
      <div className="row">
        <div className="col-12">
          <h2 className="display-4 text-center text-light ">Latest Products</h2>
          <hr className="mb-5" style={{ borderColor: "#ffffff" }} />
        </div>
      </div>
      <div className="row justify-content-center">
        <ShowProducts />
      </div>
    </div>
  );
};

export default Products;
