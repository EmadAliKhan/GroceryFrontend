import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Skeleton } from "@mui/material";
import { useDispatch } from "react-redux";
import { addCart } from "../store/AddToCartSlice";
import Navbar from "./Navbar";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import Footer from "./Footer";
import { BASE_URL } from "../Api/api";

const ProductDetail = () => {
  const [singleProduct, setSingleProduct] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const dispatch = useDispatch();
  console.log("id", id);
  useEffect(() => {
    getProductDetails();
  }, []);
  const getProductDetails = async () => {
    try {
      setIsLoading(true);
      // const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
      const response = await axios.get(`${BASE_URL}/getProduct/${id}`);
      setSingleProduct(response.data);
      setIsLoading(false);
      console.log(response.data);
      console.log("singleProduct....", singleProduct.data);
    } catch (error) {
      console.log(error);
    }
  };

  const Loading = () => {
    return (
      <>
        <section className="row">
          <div className="col-12 col-md-6">
            <Skeleton height={500} />
          </div>
          <div className="col-12 col-md-6">
            <Skeleton height={50} style={{ marginTop: "50px" }} width={300} />
            <Skeleton height={75} />
            <Skeleton height={25} width={150} style={{ marginTop: "30px" }} />
            <Skeleton height={50} />
            <Skeleton height={150} />
            <Skeleton height={50} width={100} />
            <Skeleton height={50} width={100} />
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : (
        <div style={{ marginTop: "80px" }} className="container">
          <section className="row">
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
              <TransformWrapper
                doubleClick={{ mode: "reset" }} // Reset zoom on double click
                options={{ limitToBounds: false, minScale: 0.5, maxScale: 5 }} // Set minimum and maximum scale
              >
                <TransformComponent>
                  <img
                    src={singleProduct?.data?.image}
                    height={500}
                    width={400}
                    alt={singleProduct?.data?.title}
                  />
                </TransformComponent>
              </TransformWrapper>
            </div>
            <div className="col-12 col-md-6">
              <h4 className="text-uppercase text-black-50">
                {singleProduct?.data?.category}
              </h4>
              <h1 className="display-5">{singleProduct?.data?.title}</h1>
              <p className="lead fw-bolder">
                Rating{" "}
                {singleProduct?.data?.rating &&
                  singleProduct?.data?.rating.rate}
                <i className="fa fa-star"></i>
              </p>
              <h3 className="display-6 fw-bold my-4">
              €{singleProduct?.data?.price}
              </h3>
              <p className="lead">{singleProduct?.data?.description}</p>
              <button
                className="btn btn-outline-dark px-4 py-2"
                onClick={() => {
                  dispatch(addCart(singleProduct));
                }}
              >
                {" "}
                Add To Cart{" "}
              </button>
              <button
                className="btn btn-dark ms-2 px-3 py-2"
                onClick={() => navigate("/cartpage")}
              >
                {" "}
                Go To Cart{" "}
              </button>
            </div>
          </section>
        </div>
      )}
      <Footer />
    </>
  );
};

export default ProductDetail;
