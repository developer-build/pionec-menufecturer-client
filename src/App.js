import { Route, Routes } from "react-router-dom";
import RequireAuth from "./authentication/RequireAuth";
import AddAReview from "./pages/Dashboard/AddAReview";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyOrders from "./pages/Dashboard/MyOrders";
import MyProfile from "./pages/Dashboard/MyProfile";
import { publicRoutes } from "./routes/publicRoutes";
import { privateRoutes } from "./routes/privateRoutes";
// import Purchase from "./pages/Purchase";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        {publicRoutes.map(({ path, Component }, index) => (
          <Route path={path} key={index} element={<Component />} />
        ))}
        <Route element={<RequireAuth />}>
          {privateRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Route>
     
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="my-profile" element={<MyProfile />}></Route>
          <Route path="my-orders" element={<MyOrders />}></Route>
          <Route path="my-reviews" element={<AddAReview />}></Route>
        </Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </>
  );
}

export default App;
