import React, { useState, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Navbar } from "../components";
import { images } from "../assets/images";
import { Link, useParams } from "react-router-dom";

const Products = () => {
  const productData = useMemo(() => [
  
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
 
], []);

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const selectedProduct = productData.find(
          (product) => product.id === Number(id)
        );
        if (selectedProduct) {
          setProduct(selectedProduct);
        } else {
          throw new Error("Product not found");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id, productData]);

  const Loading = () => {
    return (
      <div className="container my-5 py-3 bg-dark rounded shadow">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h2 className="display-4 text-light">Loading...</h2>
          </div>
        </div>
      </div>
    );
  };

  const ShowProduct = () => {
    return (
      <div className="container my-5 py-3 bg-dark rounded shadow">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <img
              src={product.images}
              alt={product.title}
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h2 className="text-light">{product.title}</h2>
            <p className="text-light">{product.description}</p>
            <p className="text-light lead">$ {product.price}</p>
            <button
              className="btn btn-light m-1"
              onClick={() => addProduct(product)}
            >
              Add to Cart
            </button>
            <Link to="/cart" className="btn btn-light m-1">
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
      {product ? <ShowProduct /> : <Loading />}
    </>
  );
};

export default Products;
