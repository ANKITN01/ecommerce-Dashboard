const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./db/Users');
const Product = require('./db/Product');
const config = require('./db/config'); // Load environment variables

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://13.235.190.97:27017/ecommDashboard', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(error => {
  console.error('Error connecting to MongoDB:', error);
});

app.use(express.json());
//config.ALLOWED_ORIGINS = 'https://ecomm-Dashboard.com';

// CORS configuration - allow only specified origins
const corsOptions = {
  origin: '*', // Define this in your environment variables
  methods: 'POST, GET, PUT, DELETE',
  credentials: true,
};
app.use(cors(corsOptions));

// ... Your route handlers (register, login, add-product, etc.) ...
app.post("/register", async (req, resp) => {
  try {
    let user = new User(req.body);
    let result = await user.save();
    console.log(result);
    resp.send(result);
  } catch (error) {
    resp.status(500).send({ error: "An error occurred while registering the user." });
  }
});


app.post("/login", async (req, resp) => {
  try {
    console.log(req.body);
    if (req.body.password && req.body.email) {
      let user = await User.findOne(req.body).select("-password");
      if (user) {
        resp.send(user);
      } else {
        resp.send({ result: "No result Found" });
      }
    } else {
      resp.send({ result: 'No User found' });
    }
  } catch (error) {
    resp.status(500).send({ error: "An error occurred while processing the login request." });
  }
});

app.post("/add-product", async (req, resp) => {
  try {
    let product = new Product(req.body);
    let result = await product.save();
    resp.send(result);
  } catch (error) {
    resp.status(500).send({ error: "An error occurred while adding the product." });
  }
});

app.get("/products", async (req, resp) => {
  try {
    let products = await Product.find();
    if (products.length > 0) {
      resp.send(products);
    } else {
      resp.send({ result: "No Products found" });
    }
  } catch (error) {
    resp.status(500).send({ error: "An error occurred while fetching the products." });
  }
});

app.delete("/product/:id", async (req, resp) => {
  try {
    const result = await Product.deleteOne({ _id: req.params.id });
    if (result.deletedCount > 0) {
      resp.send({ message: "Product deleted successfully" });
    } else {
      resp.status(404).send({ message: "Product not found" });
    }
  } catch (error) {
    resp.status(500).send({ error: "An error occurred while deleting the product." });
  }
});

app.get("/product/:id", async (req, resp) => {
  try {
    let result = await Product.findOne({ _id: req.params.id });
    if (result) {
      resp.send(result);
    } else {
      resp.send({ result: "No Record Found" });
    }
  } catch (error) {
    resp.status(500).send({ error: "An error occurred while fetching the product." });
  }
});

app.put("/product/:id",async (req,resp)=>{
  let result = await Product.updateOne(
      {_id:req.params.id},
      {
          $set: req.body
      }
  )
  resp.send(result);
})

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
