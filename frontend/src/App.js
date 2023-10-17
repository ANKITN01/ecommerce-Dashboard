import './App.css';
import Footer from './Component/Footer';
import Nav from './Component/Nav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUp from './Component/SignUp';
import PrivateComponent from './Component/PrivateComponent';
import Login from './Component/Login'
import AddProduct from './Component/AddProduct';
import ProductList from './Component/ProductList';
import UpdateProduct from './Component/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path='/' element={<ProductList></ProductList>}></Route>
        <Route path='/add' element={<AddProduct></AddProduct>}></Route>
        <Route path='/update/:id' element={<UpdateProduct></UpdateProduct>}></Route>
        <Route path='/logout' element={<h1>Logout com</h1>}></Route>
        <Route path='/profile' element={<h1>Profile</h1>}></Route>    
        </Route>  
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
