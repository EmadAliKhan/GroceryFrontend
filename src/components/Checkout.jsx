import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../Api/api";
import Navbar from "./Navbar";
import { useTypewriter } from "react-simple-typewriter";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { clearCart } from "../store/AddToCartSlice";


const Checkout = () => {
  const [FirstName, setFirstName] = React.useState("");
  const [LastName, setLastName] = React.useState("");
  const [Adress, setAdress] = React.useState("");
  const [City, setCity] = React.useState("");
  const [code, setCode] = React.useState("");
  const [Number, setNumber] = React.useState("");
  const [state, setState] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [comment, setComment] = React.useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const { addToCart } = useSelector((state) => state.addToCartReducer);
// console.log("addToCart",addToCart);
  const placeOrder = async() => {
    if (
      !FirstName ||
      !LastName ||
      !Adress ||
      !City ||
      !code ||
      !Number ||
      !state ||
      !email
    ) {
      // alert("please complete the full form");
notifyError()
    } else {
      // alert("Your order has been placed....");
      notifySuccess()
      dispatch(clearCart())
      navigate('/')
    }

    let userData = {
      firstName: FirstName,
      lastName: LastName,
      address: Adress,
      city: City,
      postalCode: code,
      phoneNumber: Number,
      state: state,
      email: email,
      orderItems: addToCart.map((orderItem) => ({
        id: orderItem.data._id,
        quantity: orderItem.count,
        title : orderItem.data.title        
      })),
    };
    console.log("Frontend Log",userData);

   try {
     const response = await axios.post(`${BASE_URL}/checkout`, userData)
     console.log(response.data);
     setFirstName('')
     setLastName('')
     setAdress('')
     setCity('')
     setCode('')
     setEmail('')
     setComment('')
     setNumber('')
     setState('')
   } catch (error) {
    console.log(error);
   }
    
  };

  
  const notifySuccess = () => toast.success('🦄 Your order has sent!', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });;

    const notifyError = () => toast.error('🦄 Fill all the fields!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });;


  let subTotal = 0;

  const [text] = useTypewriter({
    words: ["lease Add Some Products to your Cart"],
    loop: {}
  })

  return (
    <div>
      <Navbar/>
      {addToCart.length !== 0 ? (
        <div>
          <div style={{margin:"60px 0 30px 0"}}>
            <div className="container">
              <section className="row">
                <div className="col-md-7">
                  <div className="card">
                    <div className="card-header">
                      <h4>BasicInformation</h4>
                    </div>
                    <div className="card-body">
                      <section className="row">
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <label>First Name</label>
                            <input
                              type="text"
                              value={FirstName}
                              onChange={(e) => setFirstName(e.target.value)}
                              name="firstName"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <label>Last Name</label>
                            <input
                              type="text"
                              value={LastName}
                              onChange={(e) => setLastName(e.target.value)}
                              name="lastName"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <label>Phone Number</label>
                            <input
                              type="Number"
                              value={Number}
                              onChange={(e) => setNumber(e.target.value)}
                              name="phone Number"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <label>Email Address</label>
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              name="email"
                              className="form-control"
                            />
                          </div>
                        </div>

        

                        <div className="col-md-12">
                          <div className="form-group mb-3">
                            <label>Full Address</label>
                            <textarea
                              rows={3}
                              value={Adress}
                              onChange={(e) => setAdress(e.target.value)}
                              className="form-control"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-3">
                            <label>City</label>
                            <input
                              type="text"
                              value={City}
                              onChange={(e) => setCity(e.target.value)}
                              name="city"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-3">
                            <label>State</label>
                            <input
                              type="text"
                              value={state}
                              onChange={(e) => setState(e.target.value)}
                              name="firstName"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-3">
                            <label>Zip Code</label>
                            <input
                              type="Number"
                              value={code}
                              onChange={(e) => setCode(e.target.value)}
                              name="firstName"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

                        <div className="col-md-12">
                          <div className="form-group text-end">
                            <button
                              type="button"
                              className="btn btn-outline-dark"
                              onClick={placeOrder}
                            >
                              Place Order
                            </button>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <h3 className="text-center py-3 fw-bolder">
                    Product Details
                  </h3>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Products</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                      </tr>
                    </thead>

                    <tbody>
                      {addToCart.map((product, index) => {
                        subTotal += product.price * product.count;
                        return (
                          <tr key={index}>
                            <td>
                              <img
                                src={product?.data?.image}
                                height={50}
                                width={50}
                                alt="productImage.."
                              />
                            </td>
                            <td>{product?.data?.title}</td>
                            <td>{product?.data?.price}</td>
                            <td>{product.count}</td>
                            <td>{product?.data?.price * product.count}$</td>
                          </tr>
                        );
                      })}
                      <tr>
                        <td colSpan={2} className="text-end fw-bold">
                          Free Shipping
                        </td>
                        <td colSpan={3} className="fw-bold">
                          0.00€
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2} className="text-end fw-bold">
                          SubTotal
                        </td>
                        <td colSpan={3} className="fw-bold">
                          {addToCart.map(
                            (product, index) =>
                              product.data.price * product.count
                          )}
                          €
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="col-md-12">
                    <div className="form-group mb-3">
                      <label className="fs-5 fw-bold">
                        Leave a comment here...
                      </label>
                      <textarea
                        rows={3}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="form-control"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      ) : (
        <h1
          className="d-flex justify-content-center align-items-center"
          style={{ color: "grey",margin:"80px 0px 60px 0px" }}
        >
          P{text}
        </h1>
      )}
      <Footer />
    </div>
  );
};

export default Checkout;
