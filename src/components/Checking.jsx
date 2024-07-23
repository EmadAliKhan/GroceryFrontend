import React, { useEffect, useState } from "react";
import Products from "./Products";

const images = [
  "https://wallpapers.com/images/hd/supermarket-background-p6at3wx8tfok5n9q.jpg",
  "https://cdn.create.vista.com/api/media/small/55684015/stock-photo-groceries-in-wicker-basket",
  "https://e0.pxfuel.com/wallpapers/598/149/desktop-wallpaper-there-is-no-denying-that-online-shopping-is-one-of-the-biggest-groceries.jpg",
];

const Checking = () => {
  const [current, setCurrent] = useState(0);
 const[selectedCategory,setSelectedCatogery]= useState("All")

 useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent === images.length - 1 ? 0 : prevCurrent + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);
  
  const [openCategory, setOpenCategory] = useState(null);
  const handleCategoryClick = (category) => {
    setOpenCategory(category === openCategory ? null : category);
  };


  return (
    <>
      <div className="container" style={{ cursor: "pointer" }}>
        <section className="row">
          <div className="col-12 col-md-3 mt-5 shadow pt-4 border bg-dark text-white">
            <div className="border-bottom ">
            <h5 className="text-center">All Cateogries</h5>
            </div>
            <ul className="list-unstyled mt-2 ">
              <li
                className="p-2  rounded border-bottom"
                onClick={() => handleCategoryClick("freshProduce")}
              >
                Fresh Produce{" "}
                {openCategory === "freshProduce" ? (
                  <i className="fa-solid fa-arrow-up"></i>
                ) : (
                  <i className="fa-solid fa-arrow-down-long"></i>
                )}
                {openCategory === "freshProduce" && (
                  <ul className="drop-down" >
                    <li onClick={()=>setSelectedCatogery("fruits")}>fruits </li>
                    <li onClick={()=>setSelectedCatogery("vegetables")}>vegetables</li>
                  </ul>
                )}
              </li>
              <li
                className="p-2 rounded border-bottom "
                onClick={() => handleCategoryClick("meatSeaFood")}
              >
                Meat & seafood{" "}
                {openCategory === "meatSeaFood"? (
                  <i className="fa-solid fa-arrow-up"></i>
                ) : (
                  <i className="fa-solid fa-arrow-down-long"></i>
                )}
                {openCategory === "meatSeaFood" && (
                  <ul className="drop-down">
                    <li onClick={()=>setSelectedCatogery("poultry")}>poultry</li>
                    <li onClick={()=>setSelectedCatogery("beef")}>beef</li>
                    <li onClick={()=>setSelectedCatogery("pork")}>pork</li>
                    <li onClick={()=>setSelectedCatogery("fish")}>fish</li>
                  </ul>
                )}
              </li>
              <li
                className=" p-2 rounded border-bottom "
                onClick={() => handleCategoryClick("dairyEggs")}
              >
                Dairy & Eggs{" "}
                {openCategory === "dairyEggs"? (
                  <i className="fa-solid fa-arrow-up"></i>
                ) : (
                  <i className="fa-solid fa-arrow-down-long"></i>
                )}
                {openCategory === "dairyEggs" && (
                  <ul className="drop-down">
                    <li onClick={()=>setSelectedCatogery("milk")}>milk</li>
                    <li onClick={()=>setSelectedCatogery("cheese")}>cheese</li>
                    <li onClick={()=>setSelectedCatogery("yougert")}>yougert</li>
                    <li onClick={()=>setSelectedCatogery("eggs")}>eggs</li>
                  </ul>
                )}
              </li>
              <li
                className=" p-2 rounded border-bottom "
                onClick={() => handleCategoryClick("bakery")}
              >
                Bakery{" "}
                {openCategory === "bakery" ? (
                  <i className="fa-solid fa-arrow-up"></i>
                ) : (
                  <i className="fa-solid fa-arrow-down-long"></i>
                )}
                {openCategory === "bakery" && (
                  <ul className="drop-down">
                    <li onClick={()=>setSelectedCatogery("bread")}>bread</li>
                    <li onClick={()=>setSelectedCatogery("pastries")}>pastries</li>
                  </ul>
                )}
              </li>
              <li
                className=" p-2 rounded border-bottom "
                onClick={() => handleCategoryClick("grainPasta")}
              >
                Grain & Pasta{" "}
                {openCategory === "grainPasta"? (
                  <i className="fa-solid fa-arrow-up"></i>
                ) : (
                  <i className="fa-solid fa-arrow-down-long"></i>
                )}
                {openCategory === "grainPasta" && (
                  <ul className="drop-down">
                    <li onClick={()=>setSelectedCatogery("rice")}>rice</li>
                    <li onClick={()=>setSelectedCatogery("pasta")}>pasta</li>
                    <li onClick={()=>setSelectedCatogery("flour")}>flour</li>
                  </ul>
                )}
              </li>
              <li
                className=" p-2 rounded border-bottom "
                onClick={() => handleCategoryClick("condimentSauces")}
              >
                Condiments & Sauces{" "}
                {openCategory === "condimentSauces" ? (
                  <i className="fa-solid fa-arrow-up"></i>
                ) : (
                  <i className="fa-solid fa-arrow-down-long"></i>
                )}
                {openCategory === "condimentSauces" && (
                  <ul className="drop-down">
                    <li onClick={()=>setSelectedCatogery("cannedvegetables")}>cannedvegetables</li>
                    <li onClick={()=>setSelectedCatogery("soups")}>soups</li>
                  </ul>
                )}
              </li>
              <li
                className=" p-2 rounded border-bottom "
                onClick={() => handleCategoryClick("spiceSeasoning")}
              >
                Spices & Seasoning{" "}
                {openCategory === "spiceSeasoning"? (
                  <i className="fa-solid fa-arrow-up"></i>
                ) : (
                  <i className="fa-solid fa-arrow-down-long"></i>
                )}
                {openCategory === "spiceSeasoning" && (
                  <ul className="drop-down">
                    <li onClick={()=>setSelectedCatogery("salt")}>salt</li>
                    <li onClick={()=>setSelectedCatogery("herbs")}>herbs</li>
                    <li onClick={()=>setSelectedCatogery("herbs")}>herbs</li>
                  </ul>
                )}
              </li>
            </ul>
          </div>


          <div className="col-12 col-md-9  mt-5">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide shadow"
              data-bs-ride="carousel"
            >
              {images.map(
                (data, index) =>
                  current === index && (
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src={data}
                          className="d-block w-100"
                          height={500}
                          alt="..."
                        />
                      </div>
                    </div>
                  )
              )}
              
            </div>
          </div>
          
        </section>
      </div>
      <Products selectedCategory={selectedCategory} />
    </>
  );
};

export default Checking;
