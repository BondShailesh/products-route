import './App.css';
import Products from './components/Products';
import Home from './components/Home';
import { Routes ,Route} from 'react-router-dom';
import Product from './components/Product';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <Home/>
     <Routes>
       <Route path='/products' element={<Products/>}/>
       <Route path='/products/:id' element={<Product/>}></Route>
       <Route path='/' element={""}/>
       <Route path='*' element={<Error/>}/>
     </Routes>
    </div>
  );
}

export default App;
