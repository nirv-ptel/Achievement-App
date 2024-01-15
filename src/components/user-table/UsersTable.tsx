/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useRef, useState } from "react";
import ReactSelect from "react-select";

import { UserProps } from "./types/types";
import ModalPortal from "../../shared/modal/Modal";
import Button from "../../shared/button/Button";
import AddUsersModal from "../user-table/AddUsersModal";
import useUserTable from "./hooks/useUserTable";
import ConfirmationUsersModal from "./ConfirmationUsersModal";
import useDeleteUsers from "./hooks/useDeleteUsers";
import Pagination from "../../shared/pagination/Pagination";
import { dropDownArrowStyle } from "../../shared/helper/util";
import PdfDownloader from "../pdf-downloader/PdfDownloader";

const UsersTable = () => {
  const { data } = useUserTable();
  const userData = data?.data;

  const sortedUserData = userData?.sort(function (a: UserProps, b: UserProps) {
    return parseInt(b.id) - parseInt(a.id);
  });

  // Add and Edit user data integration.

  const [isAddUsersModalOpen, setIsAddUsersModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isOpenConfirmUsersModal, setIsConfirmUsersModal] = useState(false);

  const [usersDataState, setUsersDataState] = useState<UserProps | any>(
    {} as UserProps
  );

  const [pdfData, setPdfData] = useState();

  const onClickAddUsers = () => {
    setIsAddUsersModalOpen(!isAddUsersModalOpen);
  };

  const onCloseAddUsers = () => {
    setIsAddUsersModalOpen(!isAddUsersModalOpen);
    setIsEdit(false);
    setUsersDataState([]);
  };

  const onClickEditUsers = (data: UserProps) => {
    setUsersDataState(data);
    setIsAddUsersModalOpen(true);
    setIsEdit(!isEdit);
  };

  // for delete integration.

  const ref = useRef<string>("");

  const onCloseUsersModal = () => {
    setIsConfirmUsersModal(!isOpenConfirmUsersModal);
  };

  const { mutate: deleteUsers } = useDeleteUsers(onCloseUsersModal);

  const onClickDeleteUsers = (id: UserProps) => {
    ref.current = id.toString();
    setIsConfirmUsersModal(!isOpenConfirmUsersModal);
  };

  const [sortOptions, setSortOptions] = useState([]);

  const [selectedSortOption, setSelectedSortOption] = useState<{
    value: string;
    label: string;
  } | null>(null);

  const handleSortChange = (selectedOption: {
    value: string;
    label: string;
  }) => {
    setSelectedSortOption(selectedOption);
  };
  const customButtonPdf = useRef<any>(null);

  useEffect(() => {
    if (pdfData && customButtonPdf.current) {
      setTimeout(() => {
        customButtonPdf.current.click();
      }, 1000);
    }
  }, [pdfData]);

  const handleClickPdf = (data: any) => {
    setPdfData(data);
  };

  useEffect(() => {
    const options =
      sortedUserData &&
      sortedUserData.map((user: any) => ({
        value: user.name,
        label: user.name,
      }));
    setSortOptions(options);
  }, [sortedUserData]);

  return (
    <>
      <div className="flex justify-between items-center gap-[1.125rem] pb-8">
        <ReactSelect
          options={sortOptions}
          value={selectedSortOption}
          onChange={handleSortChange}
          classNamePrefix={"user-select"}
          defaultValue={sortedUserData}
          isClearable={true}
          styles={dropDownArrowStyle}
          autoFocus={true}
        />

        <div>
          <Button
            title={"+ Add Users"}
            type="submit"
            variant="primary"
            onClick={onClickAddUsers}
            className="ml-auto ring-0 shadow-none hover:bg-[#eee]"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="table_main overflow-x-auto h-[calc(100vh-200px)] relative">
          <table className="table_container">
            <thead className="sticky top-0 z-10">
              <tr className="bg-blue-50 rounded-lg">
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">Role</th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="max-h-[calc(100vh-28rem)]">
              {sortedUserData &&
                sortedUserData
                  ?.filter((user: any) => {
                    return selectedSortOption
                      ? user.name === selectedSortOption.label
                      : true;
                  })
                  ?.map((user: any) => (
                    <tr key={user.id}>
                      <td>{user.name || "-"}</td>
                      <td>{user.email || "-"}</td>
                      <td>{user.number || "-"}</td>
                      <td>{user.role || "-"} </td>
                      <td>{user.address || "-"}</td>
                      <td className="border-none">
                        <div className="flex justify-start gap-4 items-center">
                          <button
                            className="cursor-pointer button_hover"
                            onClick={() => onClickEditUsers(user)}
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.16536 4.16667H4.9987C4.07822 4.16667 3.33203 4.91286 3.33203 5.83334V15C3.33203 15.9205 4.07822 16.6667 4.9987 16.6667H14.1654C15.0858 16.6667 15.832 15.9205 15.832 15V10.8333M14.6535 2.98816C15.3044 2.33728 16.3597 2.33728 17.0105 2.98816C17.6614 3.63903 17.6614 4.6943 17.0105 5.34518L9.85572 12.5H7.4987L7.4987 10.143L14.6535 2.98816Z"
                                stroke="#9CA3AF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                          <button
                            className="cursor-pointer button_hover"
                            onClick={() => onClickDeleteUsers(user?.id)}
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15.832 5.83333L15.1093 15.9521C15.047 16.8243 14.3212 17.5 13.4468 17.5H6.55056C5.67616 17.5 4.95043 16.8243 4.88813 15.9521L4.16536 5.83333M8.33203 9.16667V14.1667M11.6654 9.16667V14.1667M12.4987 5.83333V3.33333C12.4987 2.8731 12.1256 2.5 11.6654 2.5H8.33203C7.87179 2.5 7.4987 2.8731 7.4987 3.33333V5.83333M3.33203 5.83333H16.6654"
                                stroke="#9CA3AF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>

                          <button
                            onClick={() => handleClickPdf(user)}
                            type="button"
                            className="bg-[#eee] hover:bg-[#eef] p-2 rounded-md transition-all"
                          >
                            <PdfDownloader pdfData={pdfData} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* <Pagination /> */}
      <ModalPortal open={isAddUsersModalOpen}>
        <AddUsersModal
          data={usersDataState}
          onCloseAddUsers={onCloseAddUsers}
          isEdit={isEdit}
        />
      </ModalPortal>
      <ModalPortal open={isOpenConfirmUsersModal}>
        <ConfirmationUsersModal
          onCloseUsersModal={onCloseUsersModal}
          action={() => deleteUsers(ref.current)}
        />
      </ModalPortal>
    </>
  );
};

export default UsersTable;
