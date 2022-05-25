import {
  BookOpenIcon,
  CameraIcon,
  MailIcon,
  MapIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/solid";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import defaultImg from "../../assests/imges/cartoon.png";
import auth from "../../shared/firebase.init";
import ProfileUpdateModal from "./ProfileUpdateModal";
import fb from '../../assests/imges/socialIcon/icon3.jpg';
import insta from '../../assests/imges/socialIcon/icon1.png';
import linkdin from '../../assests/imges/socialIcon/icon2.png';
import github from '../../assests/imges/socialIcon/icon4.png';
const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="bg-gray-300 h-full">
      <div className="px-5 text-accent">
        {/* <h1 className="text-4xl font-koulen pt-5 pb-10 uppercase text-center">
          {" "}
          My Profile
        </h1> */}
        <div className="w-5/6 mx-auto">
          <div className=" pt-10 flex-col ">
            <div class="avatar online">
              <div class="w-32 rounded-full">
                <img src={defaultImg} alt="" />
              </div>
            </div>
            <h1 className="text-3xl font-semibold text-gray-700 font-koulen mt-5 ">{user?.displayName}</h1>
            <p className="flex">
              {" "}
              <MailIcon className="w-6 h-6 mr-3"></MailIcon>
              <span>{user.email}</span>
            </p>
          </div>
          <div>
            <div className="flex justify-between  mx-auto mt-10">
              <div className="font-koulen  ">
                <h2 className="text-2xl font-semibold text-gray-700 ">
                   Information
                </h2>
                {/* <p className="mt-3 flex text-[15px] items-center">
                  <UserIcon className="w-6 h-6 mr-3  text-slate-800"></UserIcon>{" "}
                  {user.displayName}
                </p> */}
                <p className="mt-2 flex text-[15px] items-center">
                  <MailIcon className="w-6 h-6 mr-3  text-slate-800"></MailIcon>{" "}
                  {user.email}
                </p>
                <p className="mt-2 flex text-[15px] items-center">
                  <PhoneIcon className="w-6 h-6 mr-3  text-slate-800"></PhoneIcon>{" "}
                  +8801900-000000
                </p>
                <p className="mt-2 flex text-[15px] items-center">
                  <MapIcon className="w-6 h-6 mr-3  text-slate-800"></MapIcon>{" "}
                  Ashuliya,Savar,Dhaka.
                </p>
                <p className="mt-2 flex text-[15px] items-center">
                  <BookOpenIcon className="w-6 h-6 mr-3 text-slate-800"></BookOpenIcon>{" "}
                  Diploma in Computer Sience
                </p>
              </div>
              <div className="font-koulen">
                <h2 className="text-2xl font-semibold text-gray-700 ">
                  Social Media
                </h2>
                <p className="mt-3 flex items-center">
                  <img src={fb} className="w-6 mr-4 rounded-full" alt="" />
                  <span className="text-sm italic">
                  https://www.facebook.com/muntasir.ahmed.naim
                  </span>
                </p>
                <p className="mt-2 flex items-center">
                  <img src={insta} className="w-6 mr-4 rounded-full" alt="" />
                  <span className="text-sm italic">
                  https://www.facebook.com/muntasir.ahmed.naim
                  </span>
                </p>
                <p className="mt-2 flex items-center">
                  <img src={linkdin} className="w-6 mr-4 rounded-full" alt="" />
                  <span className="text-sm italic">
                  https://www.facebook.com/muntasir.ahmed.naim
                  </span>
                </p>
                <p className="mt-2 flex items-center">
                  <img src={github} className="w-6 mr-4 rounded-full" alt="" />
                  <span className="text-sm italic">
                  https://www.facebook.com/muntasir.ahmed.naim
                  </span>
                </p>
               
              </div>
            </div>
            <div className="m-auto mt-10">
              <label
                onClick={() => setOpenModal(true)}
                for="my-modal-20"
                class="btn modal-button"
              >
               Update profile
              </label>
            </div>
          </div>
        </div>
      </div>
      {openModal && <ProfileUpdateModal setOpenModal={setOpenModal} />}
    </div>
  );
};

export default MyProfile;
