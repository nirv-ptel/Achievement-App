type CloseUsersModalProps = {
  onCloseUsersModal: () => void;
  action: () => void;
};

const ConfirmationUsersModal = ({
  onCloseUsersModal,
  action,
}: CloseUsersModalProps) => {
  return (
    <div className="modal-card ">
      <div className="min-w-[2.5rem] min-h-[2.5rem] rounded-full flex justify-center items-center bg-pinklace ">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.8359 5.83333L15.1132 15.9521C15.0509 16.8243 14.3251 17.5 13.4507 17.5H6.55447C5.68007 17.5 4.95434 16.8243 4.89204 15.9521L4.16927 5.83333M8.33594 9.16667V14.1667M11.6693 9.16667V14.1667M12.5026 5.83333V3.33333C12.5026 2.8731 12.1295 2.5 11.6693 2.5H8.33594C7.8757 2.5 7.5026 2.8731 7.5026 3.33333V5.83333M3.33594 5.83333H16.6693"
            stroke="#DC2626"
            strokeWidth="1.5"
            strokeLinejoin="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div>
        <h3 className=" text-lg text-blackolive mb-2 font-medium">
          Delete users
        </h3>
        <p className="text-aurometalaaurus text-sm max-w-[25.5rem] mb-4">
          Are you sure you want to delete it? This action cannot be undone.
        </p>
        <div className="flex justify-end items-center gap-3">
          <button
            type="button"
            className="px-4 inline-flex w-full justify-center rounded-md bg-white py-2 text-sm font-semibold text-blackolive shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            onClick={() => onCloseUsersModal()}
          >
            Cancel
          </button>

          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500  sm:w-auto"
            onClick={() => action()}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationUsersModal;
