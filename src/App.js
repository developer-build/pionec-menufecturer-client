import { Route, Routes } from "react-router-dom";
import Navber from "./shared/Navber";
import { publicRoutes } from "./routes/publicRoutes";
import Footer from "./shared/Footer";

function App() {
  return (
    <>
      <Navber>
        <Routes>
          {publicRoutes.map(({ path, Component }, index) => (
            <Route path={path} key={index} element={<Component />} />
          ))}
        </Routes>
      </Navber>
      <Footer/>
    </>
  );
}

export default App;
