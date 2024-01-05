import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './component/NavBar'
import HomePage from './component/HomePage';
import Dialog from './component/Dialog';
import Details from './component/Details';
import Footer from './component/Footer';
import CartComponents from './component/CartComponents';
import ProductPage from './component/ProductPage';

function App() {

  return (
    
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path='/details/:id' element={<Details />}/>
        <Route path='/quickview/:id' element={<Dialog open={true}/>}/>
        <Route path='/cart' element={<CartComponents />}/>
        <Route path='/ProductPage' element={<ProductPage />}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
