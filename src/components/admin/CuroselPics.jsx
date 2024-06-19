import { Card, CardContent, CircularProgress, Grid, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { BASE_URL } from '../../Api/api'

const CuroselPics = () => {
 const[image1,setImage1]=useState(null)
 const[image2,setImage2]=useState(null)
 const[image3,setImage3]=useState(null)
 
 const notifySuccess = () => toast.success('🦄 Your images Uploaded successfully!', {
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



 const uploadCuroselPics = (event)=>{
    event.preventDefault()
    // console.log(image1,image2,image3);
    if (!image1 || !image2 || !image3) {
        notifyError()
    }else{
        try {
            const respone = axios.post(`${BASE_URL}/curosel`,{
                image1 : image1,
                image2 : image2,
                image3 : image3
            }, {
                headers: {
                  "Content-Type": "multipart/form-data",
                  },
                  })
                  
                  notifySuccess()
        } catch (error) {
            console.log(error);
        }
    }

}
    return (
    <>
      <Card
        style={{
          maxWidth: 450,
          margin: "0 auto",
          padding: "10px 5px",
          border: "1px solid black",
        }}
      >
        <CardContent>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField
                  required
                  type="file"
                  onChange={(e) => setImage1(e.target.files[0])}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  required
                  type="file"
                  onChange={(e) => setImage2(e.target.files[0])}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  required
                  type="file"
                  onChange={(e) => setImage3(e.target.files[0])}
                  variant="outlined"
                  fullWidth
                />
              </Grid>

              <Grid
                xs={12}
                item
                style={{ display: "flex", justifyContent: "center" }}
              >
                {/* <button className="btn btn-dark px-5" onClick={productUpload} disabled={isLoading}>
                  {isLoading? <CircularProgress size={24} color="inherit" /> : "uploadImages"}
                </button> */}
                <button className="btn btn-dark px-5" onClick={uploadCuroselPics}>UploadImages</button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
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
    </>
  )
}

export default CuroselPics
