import { Route } from "react-router-dom";
import About from "../pages/About";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import MyPortfolio from "../pages/MyPortfolio";
import Signup from "../pages/Signup";

export const publicRoutes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/contact", name: "Contact", Component: Contact },
  { path: "/blogs", name: "Blogs", Component: Blogs },
  { path: "/login", name: "Login", Component: Login },
  { path: "/signup", name: "Signup", Component: Signup },
  { path: "/my-portfolio", name: "My-Portfolio", Component: MyPortfolio },
];
