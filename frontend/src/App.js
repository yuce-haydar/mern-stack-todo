import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound.jsx";
import Header from "./components/Header.jsx";
import Counter from "./features/counter/counter";

// import 'react-toastify/dist/react-toastify.esm.mjs'
// import { useSelector ,useDispatch} from "react-redux";
// import { girisYap ,cikar,topla} from "./actions";


function App() {

  return (
  <>

    <Router >

      <div className='container'>
      <Header>

      </Header>
      <Routes >
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>

      </div>

    </Router>


     
    </>
  );
  // const giris = useSelector((state) => state.giris);
  // const hesapla = useSelector((state) => state.hesapla);
  // const dispatch=useDispatch();
  // return (
  //   <div className="App">
  //     {giris ? (
  //       <>
  //         {hesapla}
  //         <button onClick={()=>dispatch(topla())}>+</button>
  //         <button onClick={()=>dispatch(cikar())}>-</button>
  //       </>
  //     ) : (
  //       <>
  //         <h3>lütfen giriş yap</h3>
  //         <button className="btn btn-danger " onClick={()=>dispatch(girisYap())}> giriş yap knk</button>
  //       </>
  //     )}
  //   </div>
  // );
}

export default App;
