import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../Api/api";
import axios from "axios";
import { Typography } from "@mui/material";
import { useTypewriter } from "react-simple-typewriter";

const Notification = () => {
  const [notification, setNotification] = useState([]);

  const getNotification = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getContact`);
      setNotification(response.data);
      // console.log(response.data);
      console.log("RES", response.data);
    } catch (error) {
      console.log(error, "ERROR");
    }
  };

  const deleteNotification = async(productId)=>{
    try {
      const response = await axios.delete(`${BASE_URL}/deleteContact/${productId}`);
      console.log(response.data);
      getNotification()
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    getNotification();
  }, []);

  const [text] = useTypewriter({
    words: ["o Notification UptoDate"],
    loop: {}
  })

  return (
    <>
      <div className="container">
        <Typography className="text-center fw-bold" variant="h4">
          NOTIFICATIONS
        </Typography>
        {
          notification > 0 ?notification?.data?.map((e, i) => {
            return (
              <div key={i} className="row">
                <div className="col-md-12 text-center border shadow mt-4 p-3">
                  <p>
                    <b>NAME:</b> {e.fullName}
                  </p>
                  <p>
                    <b>Email:</b> {e.email}
                  </p>
                  <p>
                    <b>Message:</b> {e.message}
                  </p>
                  <p>
                    <b>Phone Number:</b> {e.phoneNumber}
                  </p>
                </div>
                <button className="btn btn-danger" onClick={()=>deleteNotification(e._id)}>Delete</button>
              </div>
            );
          }) : <h1 className='d-flex justify-content-center align-items-center ' style={{ color: "grey", margin:"80px 0px 80px 0px" }}>N{text}</h1>
        }
      </div>
    </>
  );
};

export default Notification;
