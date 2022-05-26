import React from "react";
import Footer from "../shared/Footer";
import Navber from "../shared/Navber";
import profileImg from "../assests/imges/profile-pic (1).png";
import {
  GlobeAltIcon,
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/solid";

const MyPortfolio = () => {
  return (
    <div className="bg-neutral">
      <Navber />
      <div className="bg-secondary py-10">
        <div className="container">
          <h1 className="text-5xl uppercase text-accent text-center font-koulen font-semibold pt-5 pb-16">
            About <span className="text-primary">Me</span>
          </h1>
          <div className="flex flex-col md:flex-row justify-around items-center gap-5">
            <div className="  p-5 ">
              <img className="w-52" src={profileImg} alt="" />
              <h1 className="text-primary text-4xl font-semibold font-koulen pl-3 mt-5 mb-3">
                Muntasir Ahmed
              </h1>
              <div className="space-y-2 text-accent p-3 rounded-xl">
                <p className="flex items-center">
                  {" "}
                  <MailIcon className="w-5 h-5 mr-2"></MailIcon>
                  muntasir.ahmeed@gmail.com
                </p>
                <p className="flex items-center">
                  {" "}
                  <PhoneIcon className="w-5 h-5 mr-2"></PhoneIcon>{" "}
                  +8801639-465255
                </p>
                <p className="flex items-center">
                  {" "}
                  <LocationMarkerIcon className="w-5 h-5 mr-2"></LocationMarkerIcon>
                  Ashuiliya, Savar, Dhaka.
                </p>
                <p className="flex items-center">
                  {" "}
                  <GlobeAltIcon className="w-5 h-5 mr-2"></GlobeAltIcon>
                  www.muntasirahmed.com
                </p>
              </div>
            </div>
            <div className="">
              <h1 className="text-3xl text-accent font-koulen uppercase py-5">
                technology
              </h1>
              <div className="flex flex-col space-y-2 ">
                <div className="flex flex-col space-y-1">
                  <span className="text-gray-600">HTML</span>
                  <progress
                    className="progress progress-primary w-72"
                    value="95"
                    max="100"
                    id="html"
                  ></progress>
                </div>
                <div className="flex flex-col space-y-1 ">
                  <span className="text-gray-600">CSS</span>
                  <progress
                    className="progress progress-primary w-72"
                    value="90"
                    max="100"
                    id="html"
                  ></progress>
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-gray-600">Javascript</span>
                  <progress
                    className="progress progress-primary w-72"
                    value="80"
                    max="100"
                    id="html"
                  ></progress>
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-gray-600">React Js</span>
                  <progress
                    className="progress progress-primary w-72"
                    value="80"
                    max="100"
                    id="html"
                  ></progress>
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-gray-600">MongoDB Js</span>
                  <progress
                    className="progress progress-primary w-72"
                    value="50"
                    max="100"
                    id="html"
                  ></progress>
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-gray-600">Express Js</span>
                  <progress
                    className="progress progress-primary w-72"
                    value="50"
                    max="60"
                    id="html"
                  ></progress>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row rounded-xl bg-accent lg:space-x-10 mt-10 mb-16 pr-4 justify-center items-start">
            <div className="text-white bg-accent rounded-xl pt-8 w-full  flex-1">
              <h1 className="text-3xl px-5 uppercase font-koulen">
                Some of my project
              </h1>
              <div className=" pb-5 pt-4 px-5 w-full">
                <div className="list-disc">
                  <h1 className="text-2xl mb-2">Project-1</h1>
                  <p>
                    {" "}
                    Name:
                    <span className="uppercase font-bold text-primary">
                      {" "}
                      Family-Doc
                    </span>{" "}
                  </p>
                  <p className="texpt-sm">
                    {" "}
                    Live Site Link:
                    <span className="lowercase  text-info">
                      {" "}
                      https://family-doctor-3c691.web.app
                    </span>{" "}
                  </p>
                  <p className="texpt-sm">
                    {" "}
                    GithubLink:
                    <span className="lowercase  text-info">
                      {" "}
                      https://github.com/programming-hero-web-course-4/independent-service-provider-muntasirahmeed
                    </span>{" "}
                  </p>
                </div>
                <div className="mt-4 w-full">
                  <h1 className="text-2xl mb-2">Project-2</h1>
                  <p className="texpt-sm">
                    {" "}
                    Name:
                    <span className="uppercase font-bold text-primary">
                      {" "}
                      Iconic Car Warehouse
                    </span>{" "}
                  </p>
                  <p>
                    {" "}
                    Live Site Link:
                    <span className="lowercase  text-info">
                      {" "}
                      https://car-wearhouse.web.app/
                    </span>{" "}
                  </p>
                  <p className="text-sm overflow-clip">
                    {" "}
                    GithubLink:
                    <span className="lowercase text-info">
                      {" "}
                      https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-muntasirahmeed
                    </span>{" "}
                  </p>
                </div>
                <div className="mt-4">
                  <h1 className="text-2xl mb-2">Project-3</h1>
                  <p>
                    {" "}
                    Name:
                    <span className="uppercase font-bold text-primary">
                      {" "}
                      Review Bazar
                    </span>{" "}
                  </p>
                  <p className="texp-sm">
                    {" "}
                    Live Site Link:
                    <span className="lowercase  text-info">
                      {" "}
                      https://tech-info-assignment9.netlify.app/
                    </span>{" "}
                  </p>
                  <p className="texp-sm">
                    {" "}
                    GithubLink:
                    <span className="lowercase  text-info">
                      {" "}
                      https://github.com/programming-hero-web-course-4 <br />{" "}
                      product-analysis-website-muntasirahmeed
                    </span>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className=" px-3 flex-1 bg-base-100 m-4 h-full  text-accent rounded-xl">
              <h1 className="text-3xl uppercase font-koulen  rounded-xl my-5 py-3 text-white ">
                Educations{" "}
              </h1>
              <h1 className="bg-accent text-white shadow-sm py-5 px-3 rounded-xl mb-3">
                <span className="font-bold">JSC</span>: <span>2018</span>
                <p className="text-gray-400">
                  Complete JSC in idrisia kamil am.a madrasha sherpur. and the
                  passing year 2018 . the gpa we have gotten it's GPA 5
                </p>
              </h1>
              <h1 className="bg-accent text-white shadow-sm py-5 px-3 rounded-xl mb-3">
                <span className="font-bold">SSC </span>: <span>2021</span>
                <p  className="text-gray-400">
                  I was a madrasha student . that's why i don't was a ssc candidate. i was a Dakhil Candidate. i allhamdulillah i Got GPA 5 in my Dakhil Exam.
                </p>
              </h1>
              <h1 className="bg-accent text-white shadow-sm py-5 px-3 rounded-xl mb-3">
                <span className="font-bold">Dinloma in Computer Science</span>: <span>2021-2024</span>
                <p className="text-gray-400">
                  After Completing My Dakhil exam i realized that i have to do something in tech field. and also love this site. that's why i admitted dimploma in computer Science.
                </p>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyPortfolio;
