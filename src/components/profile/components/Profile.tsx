// import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useUser } from "../../../shared/provider/user-provider/UserProvider";
// import FormLabel from "../../../shared/form-control/FormLabel";
// import FormInput from "../../../shared/form-control/FormInput";

const Profile = () => {
  //   const user = useUser();
  const navigation = useNavigate();

  //   const [changePasswordModal, setChangePasswordModal] = useState(false);

  //   const handleChangePasswordModal = () => {
  //     setChangePasswordModal(!changePasswordModal);
  //   };

  return (
    <>
      <div
        className={
          "flex justify-start items-center gap-[1.125rem] mb-[1.875rem] flex-wrap"
        }
      >
        <button
          className="rounded-md border-[0.05rem] border-quillgrey py-2 px-1.5"
          onClick={() => navigation(-1)}
        >
          back
        </button>
        <p className="text-2xl text-blackolive font-inter-semibold">Profile</p>
      </div>
      {/* <form onSubmit={handleSubmit} className="max-w-[37.75rem]">
        <div className="form-group mb-6">
          <FormLabel title="Name" className="!font-medium" />
          <FormInput
            value={values.name}
            type="text"
            onChange={handleChange}
            name="name"
          />
        </div>
        <div className="form-group">
          <FormLabel title="Email Address" className="!font-medium" />
          <FormInput
            value={user?.email}
            type="text"
            onChange={handleChange}
            name="email"
            className="bg-[#EAEDF0] pointer-events-none"
          />
        </div>
        <Link
          className="font-medium text-sm leading-6 text-indigo-600 hover:text-indigo-500 underline"
          to={""}
          onClick={handleChangePasswordModal}
        >
          Change Password
        </Link>
        <Button
          type="submit"
          title="Save"
          loader={isLoading}
          disabled={isLoading}
          className="px-14 mt-11 ml-auto"
        />
      </form>
      <ModalPortal open={changePasswordModal}>
        <ChangePasswordModal
          handleChangePasswordModal={handleChangePasswordModal}
        />
      </ModalPortal> */}
    </>
  );
};

export default Profile;
