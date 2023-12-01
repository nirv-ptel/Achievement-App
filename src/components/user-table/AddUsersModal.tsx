/* eslint-disable @typescript-eslint/no-explicit-any */

import { v4 as uuid } from "uuid";

import useCreateUsers from "./hooks/useCreateUsers";
import useCreateUsersForm from "./hooks/useCreateUsersForm";
import useEditUsers from "./hooks/useEditUsers";

import FormInput from "../../shared/form-control/FormInput";
import FormLabel from "../../shared/form-control/FormLabel";
import FormError from "../../shared/form-control/FormError";
import Loader from "../../shared/loader/Loader";

type onCloseAddUsersProps = {
  data?: any;
  isEdit?: boolean;
  onCloseAddUsers: () => void;
};

const AddUsersModal = ({
  data,
  isEdit,
  onCloseAddUsers,
}: onCloseAddUsersProps) => {
  const { mutate: createUserFn, isLoading } = useCreateUsers({
    onCloseAddUsers,
  });

  const { mutate: editUsersFn } = useEditUsers(onCloseAddUsers);

  const { values, handleChange, handleSubmit, errors } = useCreateUsersForm(
    isEdit
      ? () => editUsersFn(values)
      : () => createUserFn({ ...values, id: uuid() }),
    data
  );

  return (
    <form onSubmit={handleSubmit}>
      <div className="modal-card justify-center">
        <div className="w-full">
          <h3 className="text-lg text-blackolive mb-[0.875rem] font-semibold">
            Users
          </h3>
          <div className="mb-4">
            <FormLabel title="Name" />
            <FormInput
              name="name"
              placeholder="Enter Name"
              onChange={handleChange}
              value={values?.name}
              className={errors.name ? "is-error" : ""}
            />
            <FormError error={errors.name} />
          </div>
          <div className="mb-4">
            <FormLabel title="Email" />
            <FormInput
              name="email"
              placeholder="Enter Email"
              onChange={handleChange}
              value={values?.email}
              className={errors.email ? "is-error" : ""}
            />
            <FormError error={errors.email} />
          </div>
          <div className="mb-4">
            <FormLabel title="Number" />
            <FormInput
              name="number"
              placeholder="Enter Number"
              onChange={handleChange}
              value={values?.number}
              className={errors.number ? "is-error" : ""}
            />
            <FormError error={errors.number} />
          </div>
          <div className="mb-4">
            <FormLabel title="Role" />
            <FormInput
              name="role"
              placeholder="Enter Role"
              value={values?.role}
              onChange={handleChange}
              className={errors.role ? "is-error" : ""}
            />
            <FormError error={errors.role} />
          </div>
          <div className="mb-4">
            <FormLabel title="Address" />
            <FormInput
              name="address"
              placeholder="Enter Address"
              onChange={handleChange}
              value={values?.address}
              className={errors.role ? "is-error" : ""}
            />
            <FormError error={errors.address} />
          </div>
          <div className="flex justify-end items-baseline gap-[0.75rem]">
            <button
              type="button"
              className="btn-secondary px-4"
              onClick={() => onCloseAddUsers()}
            >
              Close
            </button>

            <button type="submit" className="btn-primary px-4 sm:w-auto w-full">
              {isLoading && <Loader className="mr-1" />}
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddUsersModal;
