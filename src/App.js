import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes/publicRoutes";
import Footer from "./shared/Footer";

function App() {
  return (
    <>
      <Routes>
        {publicRoutes.map(({ path, Component }, index) => (
          <Route path={path} key={index} element={<Component />} />
        ))}
      </Routes>
      
    </>
  );
}

export default App;
