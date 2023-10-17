import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    try {
      let result = await fetch(`http://13.235.190.97:5000/product/${params.id}`);
      if (result.ok) {
        const data = await result.json();
        console.warn(data);
        setName(data.name);
        setPrice(data.price);
        setCategory(data.category);
        setCompany(data.company);
      } else {
        console.error("Error fetching product details:", result.status);
        // Handle the error, e.g., set an error state or show an error message
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
      // Handle the error, e.g., set an error state or show an error message
    }
  };

  const updateProduct = async () => {
    try {
      console.log(name, price, category, company);
      let result = await fetch(`http://13.235.190.97:5000/product/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ name, price, category, company }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (result.ok) {
        const data = await result.json();
        console.log(data);
        navigate("/"); // Redirect to the main page upon a successful update
      } else {
        console.error("Error updating product:", result.status);
        // Handle the error, e.g., show an error message
      }
    } catch (error) {
      console.error("Error updating product:", error);
      // Handle the error, e.g., show an error message
    }
  };

  return (
    <div className="product">
      <h1>Update Product</h1>
      <input
        type="text"
        placeholder="Enter Product Name"
        className="inputBox"
        onChange={(e) => setName(e.target.value)}
        value={name}
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
      <button className="appButton" onClick={updateProduct}>
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
