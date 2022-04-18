import { createContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Blog from "./Pages/Blog/Blog";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import RequireAuth from "./Pages/RequireAuth";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import SignUp from "./Pages/SignUp/SignUp";
export const ServiceContext = createContext([]);
function App() {
  // const { checkOutId } = useParams();
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="App bg-slate-100">
      <Toaster />
      <Header></Header>
      <ServiceContext.Provider value={services}>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<AboutMe></AboutMe>}></Route>
          <Route path="/blogs" element={<Blog></Blog>}></Route>
          <Route
            path="/checkOut/:checkOutId"
            element={
              <RequireAuth>
                <CheckOut></CheckOut>
              </RequireAuth>
            }
          ></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signUp" element={<SignUp></SignUp>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </ServiceContext.Provider>
      <Footer></Footer>
    </div>
  );
}

export default App;
