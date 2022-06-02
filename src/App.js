import { Route, Routes } from "react-router-dom";
import RequireAuth from "./authentication/RequireAuth";
import AddAReview from "./pages/Dashboard/AddAReview";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyOrders from "./pages/Dashboard/MyOrders";
import MyProfile from "./pages/Dashboard/MyProfile";

import NotFound from "./pages/NotFound";
import { Toaster } from "react-hot-toast";
import Payment from "./pages/Dashboard/Payment";
import AllProducts from "./pages/AllProducts";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyPortfolio from "./pages/MyPortfolio";
import Purchase from "./pages/Purchase";
import AllUsers from "./pages/Dashboard/AllUsers";
import RequireAdmin from "./authentication/RequireAdmin";
import AllOrders from "./pages/Dashboard/AllOrders";
import AddProducts from "./pages/Dashboard/AddProducts";
import ManageProducts from "./pages/Dashboard/ManageProducts";

function App() {
  return (
    <>
      {/* <p className="text-5xl text-primary">{`${process.env.REACT_APP_apiKey}`}</p> */}
      <Routes>
        {/* --------Public Route------------- */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/my-portfolio" element={<MyPortfolio />} /> */}
        {/* --------Private Route------------- */}
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route
          path="all-products"
          element={
            <RequireAuth>
              <AllProducts />
            </RequireAuth>
          }
        />

        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route path="payments/:id" element={<Payment />}></Route>
          <Route path="my-profile" element={<MyProfile />}></Route>
          <Route path="my-orders" element={<MyOrders />}></Route>
          <Route path="my-reviews" element={<AddAReview />}></Route>
          <Route
            path="all-users"
            element={
              <RequireAdmin>
                <AllUsers />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="all-orders"
            element={
              <RequireAdmin>
                <AllOrders />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="add-products"
            element={
              <RequireAdmin>
                <AddProducts />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manage-products"
            element={
              <RequireAdmin>
                <ManageProducts />
              </RequireAdmin>
            }
          ></Route>
        </Route>

        {/* --------NOt Found Route------------- */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
