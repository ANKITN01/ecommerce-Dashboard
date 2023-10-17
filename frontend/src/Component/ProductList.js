import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      let result = await fetch("http://13.235.190.97:5000/products");
      if (result.ok) {
        const data = await result.json();
        setProducts(data);
      } else {
        console.error("Error fetching products:", result.status);
        // Handle the error, e.g., set an error state or show an error message
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      // Handle the error, e.g., set an error state or show an error message
    }
}

const deleteProduct = async (id) => {
    console.log(id);
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        const response = await fetch(`http://localhost:5000/product/${id}`, {
          method: "DELETE"
        });
        console.log(id);

        if (response.ok) {
          getProducts();
        } else {
          console.error("Error deleting product:", response.status);
          // Handle the error, e.g., show an error message
        }
      } catch (error) {
        console.error("Error deleting product:", error);
        // Handle the error, e.g., show an error message
      }
    }
  };

  return (
    <div className="product-list">
      <h1>Product List</h1>
      <ul>
        <li>Sr. No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Operation</li>
      </ul>
      {products.length > 0 ? (
        products.map((item, index) => (
          <ul key={item._id}>
            <li>{index + 1}</li>
            <li>{item.name}</li>
            <li>RS.{item.price}</li>
            <li>{item.category}</li>
<li>{item.company}</li>
            <li>
            <button
                data-id={item._id} // Set the data-id attribute with the product's id
                
                onClick={(e) => deleteProduct(e.target.getAttribute("data-id"))}
              >
                Delete
              </button>
            </li>
            <Link className="updateButton" to={"/update/" + item._id}>Update</Link>
          </ul>
        ))
      ) : (
        <p>No Products available</p>
      )}
    </div>
  );
};

export default ProductList;
