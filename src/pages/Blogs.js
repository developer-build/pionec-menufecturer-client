import React from "react";
import Navber from "../shared/Navber";
import Footer from "../shared/Footer";

const Blogs = () => {
  return (
    <div className="bg-accent ">
      <Navber></Navber>
      <div className="bg-secondary py-10 h-full  text-accent">
        <div className="container">
          <h1 className="text-3xl font-koulen text-center font-semibold uppercase text-primary mb-5">
            Welcome To My Blogs
          </h1>
          <div className="flex flex-col md:flex-row gap-5 bg-gray-300 p-4 rounded-lg">
            <div className="flex-1">
              <img
                src="https://blog.logrocket.com/wp-content/uploads/2021/09/5-react-performance-optimization-techniques.png"
                alt=""
                className="rounded-lg h-full"
              />
            </div>
            <div className="flex-1 font-koulen">
              <h2 className="text-2xl font-semibold mb-4">
                {" "}
                How will you improve the performance of a React Application?
              </h2>
              <p className="text-[15px]">
                {" "}
                According to research by Akamai, a second delay in load time can
                cause a 7 percent reduction in conversions, making it imperative
                for developers to create apps with optimized performance. In
                React applications, we are guaranteed a very fast UI by default.
                However, as an application grows, developers may encounter some
                performance issues.
              </p>
              <h3 className="text-xl mt-2 font-semibold">
                React performance optimization techniques
              </h3>
              <ul className="text-[15px]">
                <li className="list-disc ml-5">
                  Keeping component state local where necessary
                </li>
                <li className="list-disc ml-5">
                  Memoizing React components to prevent unnecessary re-renders
                </li>
                <li className="list-disc ml-5">Using React.memo()</li>
                <li className="list-disc ml-5">Using the useCallback Hook</li>
                <li className="list-disc ml-5">
                  Code-splitting in React using dynamic import()
                </li>
                <li className="list-disc ml-5">Lazy loading images in React</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 flex flex-col md:flex-row gap-5 bg-gray-300 p-4 rounded-lg">
            <div className="flex-1">
              <img
                src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/02/how-to-manage-state-react.png"
                alt=""
                className="rounded-lg h-full"
              />
            </div>
            <div className="flex-1 font-koulen">
              <h2 className="text-2xl font-semibold mb-4">
                {" "}
                What are the different ways to manage a state in a React
                application?
              </h2>
              <p className="text-[15px]">
                {" "}
                Managing state in your React apps isn’t as simple as using
                useState or useReducer. Not only are there are a lot of
                different kinds of state, but there often dozens of ways of
                managing each kind. Which should you choose? In this guide, we
                will uncover the several kinds of state in your React apps that
                you might not be aware of, plus how to manage them in the most
                effective way.
              </p>
              <h3 className="text-xl mt-2 font-semibold">
                The Four Kinds of React State to Manage
              </h3>
              <ul className="text-[15px]">
                <li className="list-disc ml-5">Local state</li>
                <li className="list-disc ml-5">Global state</li>
                <li className="list-disc ml-5">Server state</li>
                <li className="list-disc ml-5">URL state</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 flex flex-col md:flex-row gap-5 bg-gray-300 p-4 rounded-lg">
            <div className="flex-1">
              <img
                src="https://dmitripavlutin.com/static/1e3ebf031af62ebf4786e65941e996e1/aaf91/cover-2.webp"
                alt=""
                className="rounded-lg h-full"
              />
            </div>
            <div className="flex-1 font-koulen">
              <h2 className="text-2xl font-semibold mb-4">
                {" "}
                How does prototypical inheritance work?
              </h2>
              <p className="text-[15px]">
                {" "}
                What does inheritance mean in JavaScript? Its simple, the
                inheritance means: “objects/classes inherit from other
                objects/classes” through prototypes. for example: function
                Person(first, last, age, eyecolor)
              </p>
              <h3 className="text-xl mt-2 font-semibold">
                What are the 4 ways to create inheritance in JS?
              </h3>
              <ul className="text-[15px]">
                <li className="list-disc ml-5">Object as literal.</li>
                <li className="list-disc ml-5">
                  Constructor Invocation Pattern.
                </li>
                <li className="list-disc ml-5">The create() method.</li>
                <li className="list-disc ml-5">Using class after ES6.</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 flex flex-col md:flex-row gap-5 bg-gray-300 p-4 rounded-lg">
            <div className="flex-1">
              <img
                src="https://daveceddia.com/images/why-not-modify-react-state-twitter.png"
                alt=""
                className="rounded-lg h-full"
              />
            </div>
            <div className="flex-1 font-koulen">
              <h2 className="text-2xl font-semibold mb-4">
                {" "}
                Why should we not update the state directly?
              </h2>
              <p className="text-[15px]">
                {" "}
                One should never update the state directly because of the
                following reasons: If you update it directly, calling the
                setState() afterward may just replace the update you made. When
                you directly update the state, it does not change this.state
                immediately. Instead, it creates a pending state transition, and
                accessing it after calling this method will only return the
                present value. You will lose control of the state across all
                components. In React, every state update causes the component
                being updated to re-render. Because re-rendering is an expensive
                operation, making state updates synchronously can cause serious
                performance issues, for example, increasing load times or
                causing your application to crash. By batching state updates,
                React avoids unnecessary re-renders, boosting performance
                overall. I hope you enjoyed this article!
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-col md:flex-row gap-5 bg-gray-300 p-4 rounded-lg">
            <div className="flex-1">
              <img
                src="https://i.ytimg.com/vi/lj5nnGa_DIw/maxresdefault.jpg"
                alt=""
                className="rounded-lg h-full"
              />
            </div>
            <div className="flex-1 font-koulen">
              <h2 className="text-xl font-semibold mb-2">
                {" "}
                What is Unit Testing?
              </h2>
              <p className="text-[15px]">
                {" "}
                UNIT TESTING is a type of software testing where individual
                units or components of a software are tested. The purpose is to
                validate that each unit of the software code performs as
                expected. Unit Testing is done during the development (coding
                phase) of an application by the developers. Unit Tests isolate a
                section of code and verify its correctness. A unit may be an
                individual function, method, procedure, module, or object.
              </p>
              <h2 className="text-xl font-semibold mb-2">
                {" "}
                Why Unit Testing
              </h2>
           ?
              <p>
                Unit Testing is important because software developers sometimes
                try saving time doing minimal unit testing and this is myth
                because inappropriate unit testing leads to high cost Defect
                fixing during System Testing, Integration Testing and even Beta
                Testing after application is built. If proper unit testing is
                done in early development, then it saves time and money in the
                end
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
