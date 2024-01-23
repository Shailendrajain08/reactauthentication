
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Home from './components/Home';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored'></ToastContainer>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
