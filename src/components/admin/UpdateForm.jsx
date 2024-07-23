import Autocomplete from "@mui/joy/Autocomplete";
import { Card, CardContent, CircularProgress, Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../../Api/api";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const UpdateForm = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const id = location?.state?.id;
  console.log(id);

  const productUpdate = async (e) => {
    e.preventDefault();
    if (category == "" || title == "" || price == "" || description == "") {
      // alert("Fill all the fields");
      notifyError()
    } else {
      setIsLoading(true)
      try {
        const response = await axios.put(`${BASE_URL}/updateProduct/${id}`, {
          category,
          title,
          price,
          description,
        });
        console.log(response.data);
        notifySuccess()
      } catch (error) {
        console.log("error", error);
      }finally{
        setIsLoading(false)
        setCategory("")
        setDescription("")
        setPrice("")
        setTitle("")
      }
    }
  };


  const notifySuccess = () => toast.success('🦄 Your Product has Updated!', {
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

  return (
    <div>
      <h1 className="d-flex justify-content-center fw-bold">Update Form</h1>
      <Card
        style={{
          maxWidth: 450,
          maxHeight: 470,
          margin: "0 auto",
          padding: "10px 5px",
          border: "1px solid black",
        }}
      >
        <CardContent>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <Autocomplete
                  className="py-3"
                  placeholder="Category"
                  options={[
                    "fruits",
                    "vegetables",
                    "poultry",
                    "beef",
                    "pork",
                    "fish",
                    "milk",
                    "cheese",
                    "yougert",
                    "eggs",
                    "bread",
                    "pastries",
                    "rice",
                    "pasta",
                    "flour",
                    "cannedvegetables",
                    "soups",
                    "salt",
                    "pepper",
                    "herbs",
                  ]}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Category"
                      variant="outlined"
                    />
                  )}
                  onChange={(event, value) => setCategory(value)}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  required
                  value={title}
                  label="UpdatedTitle"
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="productTitle"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  required
                  value={description}
                  label="UpdatedDescription"
                  onChange={(e) => setDescription(e.target.value)}
                  multiline
                  rows={4}
                  placeholder="productDescription"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  required
                  value={price}
                  type="number"
                  label="UpdatedPrice"
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="productPrice"
                  variant="outlined"
                  fullWidth
                />
              </Grid>

              <Grid
                xs={12}
                marginTop={1}
                item
                style={{ display: "flex", justifyContent: "center" }}
              >
                <button className="btn btn-dark px-5" onClick={productUpdate} disabled={isLoading}>
                  {isLoading? <CircularProgress size={24} color="inherit"/> : "Update"}
                </button>
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
    </div>
  );
};

export default UpdateForm
