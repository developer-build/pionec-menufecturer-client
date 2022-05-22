import { ChevronDoubleUpIcon, DesktopComputerIcon, DuplicateIcon, GlobeAltIcon, GlobeIcon, LoginIcon, LogoutIcon, MapIcon, PaperAirplaneIcon, PlayIcon, UserGroupIcon } from "@heroicons/react/solid";
import React from "react";

import img1 from "../../assests/imges/Ellipse 90.png";
import img2 from "../../assests/imges/Ellipse 91.png";
import img3 from "../../assests/imges/Ellipse 92.png";

const BusinessSummury = () => {
  return (
    <div className="bg-neutral py-24">
      <div className="container ">
        <h1 className="uppercase text-center text-primary font-bold text-4xl pb-8">
          {" "}
          Summary of bussiness
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-5">
          <div className="flex flex-col bg-neutral justify-center  w-full py-6 rounded-lg items-center ">
            {/* <img src={img1} className="w-16" alt="" /> */}
            <MapIcon className="w-16 text-white"></MapIcon>
            <h1 className="text-5xl font-bold text-primary mt-8 mb-1">72 </h1>
            <p className="text-xl text-secondary">Total Countries</p>
          </div>
          <div className="flex flex-col justify-center bg-neutral w-full py-6 rounded-lg items-center ">
            {/* <img src={img1} className="w-16" alt="" /> */}
            <DesktopComputerIcon className="w-16 text-white"></DesktopComputerIcon>
            <h1 className="text-5xl font-bold text-primary mt-8 mb-1">52+ </h1>
            <p className="text-xl text-secondary">Product Menufecture</p>
          </div>
          <div className="flex flex-col justify-center bg-neutral w-full py-6 rounded-lg items-center ">
            {/* <img src={img1} className="w-16" alt="" /> */}
            <UserGroupIcon className="w-16 text-white"></UserGroupIcon>
            <h1 className="text-5xl font-bold text-primary mt-8 mb-1">300+ </h1>
            <p className="text-xl text-seconary">Happy Clients</p>
          </div>
          <div className="flex flex-col justify-center bg-neutral w-full py-6 rounded-lg items-center ">
            {/* <img src={img1} className="w-16" alt="" /> */}
            <DuplicateIcon className="w-16 text-white"></DuplicateIcon>
            <h1 className="text-5xl font-bold text-primary mt-8 mb-1">500+ </h1>
            <p className="text-xl text-seconary">Clients Feedbacks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummury;
// import React from 'react';

// const BusinessSummury = () => {
//     return (
//       <div className="bg-secondary py-10">
//         <div className='container'>
//           <h1 className="uppercase text-center text-teal-600 font-bold text-4xl pb-8">
//             Million bussiness trust us
//           </h1>
//           <div class="stats bg-success shadow py-10 px-10 flex justify-center items-center">
//             <div class="">
//               <div class="stat-figure text-primary">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   class="inline-block w-8 h-8 stroke-current"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                   ></path>
//                 </svg>
//               </div>
//               <div class="stat-title">Total Likes</div>
//               <div class="stat-value text-primary">25.6K</div>
//               <div class="stat-desc">21% more than last month</div>
//             </div>

//             <div class="stat">
//               <div class="stat-figure text-secondary">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   class="inline-block w-8 h-8 stroke-current"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M13 10V3L4 14h7v7l9-11h-7z"
//                   ></path>
//                 </svg>
//               </div>
//               <div class="stat-title">Page Views</div>
//               <div class="stat-value text-secondary">2.6M</div>
//               <div class="stat-desc">21% more than last month</div>
//             </div>

//             <div class="stat">
//               <div class="stat-figure text-secondary">
//                 <div class="avatar online">
//                   <div class="w-16 rounded-full">
//                     <img src="https://api.lorem.space/image/face?w=128&h=128" />
//                   </div>
//                 </div>
//               </div>
//               <div class="stat-value">86%</div>
//               <div class="stat-title">Tasks done</div>
//               <div class="stat-desc text-secondary">31 tasks remaining</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
// };

// export default BusinessSummury;