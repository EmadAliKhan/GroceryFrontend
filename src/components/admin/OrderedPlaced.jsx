import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../Api/api";
import axios from "axios";

const OrderedPlaced = () => {
  const [allOrder, setAllOrder] = useState([]);

  const [delivered, setDelivered] = useState(false);

  const[itemName,setItemName] = useState("")
  

  const getOrders = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getOrder`);
      setAllOrder(response.data);
      console.log(response.data);
      
      // console.log("RES", allOrder.data.length);
    } catch (error) {
      console.log(error, "ERROR");
    }
  };

// const fetchingProductName = async(_id)=>{
// try {
//     const fetchingIMage = await axios.get(`${BASE_URL}/getProduct/${_id}`)
//     // console.log(fetchingIMage.data.data.title);
//     setItemName(fetchingIMage.data.data.title)
// } catch (error) {
//   console.log(error);
// }
// // console.log(_id);
// }

  useEffect(() => {
    getOrders();
    // fetchingProductName()
  }, []);

const deleteOrder = async(orderId)=>{
  try {
    const response = await axios.delete(`${BASE_URL}/deleteOrder/${orderId}`);
    console.log(response.data);
    getOrders()
  } catch (error) {
    console.log("error", error);
  }
}

// const deliverOrder = (orderId)=>{
//   console.log(orderId);
//   if (orderId) {
    
//   }
// }

  return (
    <>
      <div>
        <h2 className="fw-bolder mb-4 mt-3">
          Total No. Of Orders: {allOrder?.data?.length}{" "}
        </h2>
        <table className="table table-striped">
          <thead >
            <tr>
              <th>S.No</th>
              <th>OrderName</th>
              <th>Quantity</th>
              <th>ClientName</th>
              <th>Address</th>
              <th>ClientNumber</th>
              <th>Email</th>
              <th className="ps-3">Action</th>
            </tr>
          </thead>
          {allOrder?.data?.map((e, i) => (
            <tbody key={i}>
              {delivered === false ? (
                <tr>
                  <td>{i + 1}</td>
                  <td>
                  <td>
                  {e.orderItems.map((item, index) => (
                    <p key={index}>{item.title} </p>
                  ))}
                </td>
                  </td>
                  <td>{e.orderItems.map((item, index) => (
                    <p key={index}>{item.quantity} </p>
                  ))}</td>
                  <td>{e.firstName + " " + e.lastName}</td>
                  <td>{e.address}</td>
                  <td>{e.phoneNumber}</td>
                  <td>{e.email}</td>
                  <td>
                    {/* <button
                      className="btn btn-success text-black" onClick={()=>deliverOrder(e._id)}
                    >
                      Delivered
                    </button> */}
                    <button className="btn btn-danger text-black " onClick={()=>deleteOrder(e._id)}>
                      Delete 
                    </button>
                  </td>
                </tr>
              ) : "no result"}
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default OrderedPlaced;
