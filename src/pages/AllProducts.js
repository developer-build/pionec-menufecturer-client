import React, { useEffect, useState } from "react";
import fetcher from "../api";
import Footer from "../shared/Footer";
import Navber from "../shared/Navber";
import Spinner from "../shared/Spinner";
import SingleTool from "./Home/SingleTool";

const AllProducts = () => {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchig = async () => {
      const res = await fetcher.get("/tool");
      setTools(res.data);
      setLoading(false);
    };
    fetchig();
  }, []);
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="bg-accent">
      <Navber />
      <div className=" bg-secondary py-14">
        <div className="container">
          <h1 className="text-4xl text-center text-accent mb-5 uppercase font-bold">
            Availabe Painting Tools
          </h1>
          <div className="flex justify-center items-center gap-2 mb-10">
            {/* <span className=" h-1 bg-accent rounded-full w-20"></span> */}
            <span className=" h-1 bg-primary rounded-full w-28"></span>
            {/* <span className="h-1 bg-accent rounded-full w-20"></span> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center py-10">
            {tools.map((tool, index) => (
              <SingleTool key={index} tool={tool}></SingleTool>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllProducts;
