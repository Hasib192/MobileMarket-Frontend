import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import CreateProduct from "./pages/CreateProduct";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="create" element={<CreateProduct />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
