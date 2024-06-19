// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProduct } from "../store/ProductSlice";
// import { useLocation, useNavigate } from "react-router-dom";
// import Layout from "./Layout";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// // import { useTypewriter } from "react-simple-typewriter";

// const Products = ({selectedCategory}) => {
// const[isLoading,setIsLoading] = useState(false)

//   const dispatch = useDispatch();
//   const { allProduct } = useSelector((state) => state.productReducer);
//   console.log("Api", allProduct.data);

//   const filterPrducts = allProduct?.data?.filter((product) => {
//     try {
//       if (!selectedCategory || selectedCategory === "All") {
//         return true;
//       } else {
//         return product.category.includes(selectedCategory);
//       }
//     } catch (error) {
//       console.log(error);
//       return false; // Handle the error by returning false or handle it accordingly
//     }
//   });

//   const navigate = useNavigate();

//   const location = useLocation();
//   const page = location?.state?.page;
//   // console.log(page, "ROLE");

//   useEffect(() => {
//     dispatch(fetchProduct());
//   }, []);

//   return (
//     <>
//       {page === true ? <Navbar /> : null}
//       <div className="container my-5 py-5">
//         <div className="row">
//           <div className="col-12">
//             <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
//           </div>
//         </div>
//         <hr />
//       </div>

//       <div className="container">
//         <div
//           className="row"
//           data-aos="fade-right"
//           data-aos-offset="500"
//           data-aos-easing="ease-in-sine"
//         >
//           {filterPrducts?.map((product) => {
//             return (
//               <div
//                 onClick={() => navigate(`/productDetail/${product._id}`)}
//                 className="col-12 col-sm-6 col-md-3 mb-4"
//                 key={product._id}
//               >
//                 <div className="card h-100 text-center p-4">
//                   <img
//                     src={product.image}
//                     className="card-img-top"
//                     height="250px"
//                     alt={product.title}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title mb-0">
//                       {product.title.substring(0, 12)}...
//                     </h5>
//                     <p className="card-text lead fw-bold">{product.price}€</p>
//                     <a href="#" className="btn btn-outline-dark">
//                       Buy Now
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Products;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../store/ProductSlice";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CircularProgress from '@mui/material/CircularProgress';

const Products = ({ selectedCategory }) => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const { allProduct } = useSelector((state) => state.productReducer);
  // console.log("Api", allProduct.data);

  const filterProducts = allProduct?.data?.filter((product) => {
    try {
      if (!selectedCategory || selectedCategory === "All") {
        return true;
      } else {
        return product.category.includes(selectedCategory);
      }
    } catch (error) {
      console.log(error);
      return false; // Handle the error by returning false or handle it accordingly
    }
  });

  const navigate = useNavigate();

  const location = useLocation();
  const page = location?.state?.page;
  // console.log(page, "ROLE");

  useEffect(() => {
    const fetchData = async() => {
      setIsLoading(true)
      await dispatch(fetchProduct());
      setIsLoading(false);
    };
    fetchData();
  }, [dispatch]);

  return (
    <>
      {page === true ? <Navbar /> : null}
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          </div>
        </div>
        <hr />
      </div>

      <div className="container">
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <CircularProgress />
          </div>
        ) : (
          <div
            className="row"
            data-aos="fade-right"
            data-aos-offset="500"
            data-aos-easing="ease-in-sine"
          >
            {filterProducts?.map((product) => (
              <div
                onClick={() => navigate(`/productDetail/${product._id}`)}
                className="col-12 col-sm-6 col-md-3 mb-4"
                key={product._id}
              >
                <div className="card h-100 text-center p-4">
                  <img
                    src={product.image}
                    className="card-img-top"
                    height="250px"
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 12)}...
                    </h5>
                    <p className="card-text lead fw-bold">{product.price}€</p>
                    <a href="#" className="btn btn-outline-dark">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Products;
