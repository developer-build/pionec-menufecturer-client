import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../shared/firebase.init";

const ProfileUpdateModal = ({ setOpenModal, refetch }) => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const handleSubmit = (event) => {
    event.preventDefault();
    const phone = event.target.phone.value;
    const address = event.target.address.value;
    const study = event.target.study.value;
    const fb = event.target.fb.value;
    const insta = event.target.insta.value;
    const linkdin = event.target.linkdin.value;
    const github = event.target.github.value;
    const data = { phone, address, study, fb, insta, linkdin, github };
    if (phone || address || study || fb || insta || linkdin || github) {
      fetch(`http://localhost:4000/current-user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            refetch();
            toast.success("Profile Updated Successfuly");
            setOpenModal(false);
          }
        });

      event.target.reset();
    }
  };
  return (
    <div>
      <input type="checkbox" id="update-profile" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box md:w-4/12 mt-10 w-10/12 mx-auto relative">
          <label
            htmlFor="update-profile"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-xl font-koulen text-center text-primary font-bold mb-4">
            Update Profile
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col font-koulen space-y-2">
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="input input-bordered w-full bg-accent "
              />
              <input
                name="study"
                type="text"
                placeholder="Study Information"
                className="input input-bordered w-full bg-accent"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="input input-bordered w-full bg-accent"
              />
              <input
                name="fb"
                type="text"
                placeholder="Facebook Link"
                className="input input-bordered w-full bg-accent"
              />

              <input
                name="insta"
                type="text"
                placeholder="Instagram Link"
                className="input input-bordered w-full bg-accent"
              />

              <input
                name="linkdin"
                type="text"
                placeholder="Linkdin Link"
                className="input input-bordered w-full bg-accent"
              />
              <input
                name="github"
                type="text"
                placeholder="Github Link"
                className="input input-bordered w-full bg-accent"
              />

              <input
                type="submit"
                className="btn btn-primary "
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdateModal;
