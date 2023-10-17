import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");

  const addProduct = async () => {
    console.log(name, price, category, company);
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      const userId = user._id;
      try {
        const response = await fetch("http://13.235.190.97:5000/add-product", {
          method: "POST",
          body: JSON.stringify({ name, price, category, company, userId }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        console.log(result);
        // Handle the response or update state as needed
      } catch (error) {
        console.error("Error adding product:", error);
        // Handle the error, e.g., show an error message to the user
      }
    } else {
      // Handle the case where the user is not logged in or the user data is not available
    }
  };

  return (
    <div className="product">
      <h1>Add Product</h1>
      <input
        type="text"
        placeholder="Enter Product Name"
        className="inputBox"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Enter Product Price"
        className="inputBox"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Enter Product Category"
        className="inputBox"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Enter Product Company"
        className="inputBox"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      ></input>
      <button className="appButton" onClick={addProduct}>
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
