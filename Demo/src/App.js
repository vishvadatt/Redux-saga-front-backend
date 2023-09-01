import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signin from './components/signin';
import Signup from './components/signup';
import Home from './components/home';
import View from './components/view';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />}></Route>
          <Route path='/edit/:id' element={<Signup />}></Route>
          <Route path='/Signin' element={<Signin />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/user/:id' element={<View />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
