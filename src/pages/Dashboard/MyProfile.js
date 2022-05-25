import {
  BookOpenIcon,
  MailIcon,
  MapIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import defaultImg from "../../assests/imges/cartoon.png";
import auth from "../../shared/firebase.init";
import ProfileUpdateModal from "./ProfileUpdateModal";
import fb from "../../assests/imges/socialIcon/icon3.jpg";
import insta from "../../assests/imges/socialIcon/icon1.png";
import linkdin from "../../assests/imges/socialIcon/icon2.png";
import github from "../../assests/imges/socialIcon/icon4.png";
import Spinner from "../../shared/Spinner";
import { useQuery } from "react-query";
const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [openModal, setOpenModal] = useState(false);
  const {
    isLoading,
    data: currentUser,
    refetch,
  } = useQuery("users", () =>
    fetch(
      `https://tranquil-earth-82270.herokuapp.com/current-user?email=${user?.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="bg-secondary h-full">
      <div className="px-5 bg-secondary text-accent">
        {/* <h1 className="text-4xl font-koulen pt-5 pb-10 uppercase text-center">
          {" "}
          My Profile
        </h1> */}
        <div className="w-5/6  bg-secondary h-full pb-10 mx-auto">
          <div className=" pt-10 flex-col ">
            <div className="avatar online">
              <div className="w-32 rounded-full">
                <img src={defaultImg} alt="" />
              </div>
            </div>
            <h1 className="text-3xl font-semibold text-gray-700 font-koulen mt-5 ">
              {user?.displayName}
            </h1>
            <p className="flex">
              {" "}
              <MailIcon className="w-6 h-6 mr-3"></MailIcon>
              <span>{user?.email}</span>
            </p>
          </div>
          <div>
            <div className="flex flex-col md:flex-row justify-between  mx-auto mt-10">
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
                  +88-{currentUser.phone ? currentUser.phone : 12345678}
                </p>
                <p className="mt-2 flex text-[15px] items-center">
                  <MapIcon className="w-6 h-6 mr-3  text-slate-800"></MapIcon>{" "}
                  {currentUser.address
                    ? currentUser.address
                    : "No address given"}
                </p>
                <p className="mt-2 flex text-[15px] items-center">
                  <BookOpenIcon className="w-6 h-6 mr-3 text-slate-800"></BookOpenIcon>{" "}
                  {currentUser.study
                    ? currentUser.study
                    : "Study info not given"}
                </p>
              </div>
              <div className="font-koulen mt-5 md:mt-0">
                <h2 className="text-2xl font-semibold text-gray-700 ">
                  Social Media
                </h2>
                <p className="mt-3 flex items-center">
                  <img src={fb} className="w-6 mr-4 rounded-full" alt="" />
                  <span className="text-sm italic">
                    {currentUser.fb
                      ? currentUser.fb
                      : "Facebook info not given"}
                  </span>
                </p>
                <p className="mt-2 flex items-center">
                  <img src={insta} className="w-6 mr-4 rounded-full" alt="" />
                  <span className="text-sm italic">
                    {currentUser.insta
                      ? currentUser.insta
                      : "Instagram info not given"}
                  </span>
                </p>
                <p className="mt-2 flex items-center">
                  <img src={linkdin} className="w-6 mr-4 rounded-full" alt="" />
                  <span className="text-sm italic">
                    {currentUser.linkdin
                      ? currentUser.linkdin
                      : "Linkdin info not given"}
                  </span>
                </p>
                <p className="mt-2 flex items-center">
                  <img src={github} className="w-6 mr-4 rounded-full" alt="" />
                  <span className="text-sm italic">
                    {currentUser.github
                      ? currentUser.github
                      : "Github info not given"}
                  </span>
                </p>
              </div>
            </div>
            <div className="m-auto mt-10">
              <label
                onClick={() => setOpenModal(true)}
                htmlFor="update-profile"
                className="btn modal-button"
              >
                Update profile
              </label>
            </div>
          </div>
        </div>
      </div>
      {openModal && (
        <ProfileUpdateModal refetch={refetch} setOpenModal={setOpenModal} />
      )}
    </div>
  );
};

export default MyProfile;
