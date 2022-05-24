import { CameraIcon, MailIcon } from "@heroicons/react/solid";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import defaultImg from "../../assests/imges/cartoon.png";
import auth from "../../shared/firebase.init";
const MyProfile = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="">
      <div className="px-5 text-white">
        <h1 className="text-4xl font-koulen pt-5 pb-10 uppercase text-center">
          {" "}
          My Profile
        </h1>
        <div className="flex ">
          <div className="flex-1">
            <div className="h-40 w-40 relative">
              <img src={defaultImg} className="h-40  " alt="" />
              <label htmlFor="img-upload" className="absolute right-4 bottom-3">
                {" "}
                <CameraIcon className="w-6 h-6 text-accent p-1 bg-white rounded-xl" />
              </label>
              <input className="hidden" type="file" name="" id="img-upload" />
            </div>
            <h1 className="text-4xl font-koulen mt-5 mb-3">
              {user?.displayName}
            </h1>
            <h2 className="flex items-center gap-2">
              <MailIcon className="h-5 w-5"></MailIcon> {user?.email}
            </h2>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-koulen my-5">Education</h1>
            <div className="bg-white text-accent p-4 rounded-lg">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                necessitatibus, laborum quaerat minima ullam reiciendis
                voluptatum atque in iusto delectus. Quasi fugit provident
                perferendis id perspiciatis quis maiores earum optio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
