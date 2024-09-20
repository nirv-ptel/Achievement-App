const AchivementList = () => {
  return (
    <div className="flex justify-center">
      <div className="table_main overflow-x-auto relative">
        <table className="table_container">
          <thead className="sticky top-0 z-10">
            <tr className="bg-blue-50 rounded-lg">
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile</th>
              <th scope="col">Gender</th>
              <th scope="col">Age</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="max-h-[calc(100vh-28rem)] dark:!border-blue-500">
            <tr className="dark:!border-blue-500">
              <td>Yash</td>
              <td>Yash@gmail.com</td>
              <td>9909286298</td>
              <td>Male</td>
              <td>23</td>
              <td>Ahmedabad</td>
              <td className="border-none">
                <div className="flex justify-start gap-4 items-center">
                  <button type="button" className="cursor-pointer button_hover">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#9CA3AF"
                      className="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr className="dark:!border-blue-500">
              <td>Yash</td>
              <td>Yash@gmail.com</td>
              <td>9909286298</td>
              <td>Male</td>
              <td>21</td>
              <td>Ahmedabad</td>
              <td className="border-none">
                <div className="flex justify-start gap-4 items-center">
                  <button type="button" className="cursor-pointer button_hover">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#9CA3AF"
                      className="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr className="dark:!border-blue-500">
              <td>Yash</td>
              <td>Yash@gmail.com</td>
              <td>9909286298</td>
              <td>Male</td>
              <td>88</td>
              <td>Ahmedabad</td>
              <td className="border-none">
                <div className="flex justify-start gap-4 items-center">
                  <button type="button" className="cursor-pointer button_hover">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#9CA3AF"
                      className="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AchivementList;
