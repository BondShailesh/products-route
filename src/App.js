import './App.css';
import Products from './components/Products';
import Home from './components/Home';
import { Routes ,Route} from 'react-router-dom';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Home/>
     <Routes>
       <Route path='/products' element={<Products/>}/>
       <Route path='/products/:id' element={<Product/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
