import { Fragment, useRef, useState } from "react";
import { removeItemInCookie } from "../helper/util";
import { TOKEN } from "../helper/constant";
import { Menu, Transition } from "@headlessui/react";
import useOutsideClick from "../hooks/useOutsideClick";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const profileRef = useRef(null);

  const onClickMenu = () => {
    removeItemInCookie(TOKEN);
    setMenuOpen(false);
  };

  useOutsideClick(profileRef, () => {
    setMenuOpen(false);
  });

  return (
    <div className="lg:pl-64">
      <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <div className="flex justify-end flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <div className="flex items-center gap-x-4 lg:gap-x-6">
            <Menu as="div" className="relative">
              <Menu.Button
                ref={profileRef}
                className="-m-1.5 flex items-center p-1.5"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                U
              </Menu.Button>
              <Transition
                as={Fragment}
                show={menuOpen}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2.5 w-40 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                  <Menu.Item>
                    {() => (
                      <>
                        <button
                          type="button"
                          onClick={() => {
                            setMenuOpen(false);
                          }}
                          className={
                            "flex items-center gap-2 px-4 py-2 text-sm leading-6 text-gray-900 w-full text-left hover:bg-[#eee] capitalize transition"
                          }
                        >
                          Profile
                        </button>
                        <button
                          type="button"
                          onClick={() => onClickMenu()}
                          className={
                            "flex items-center gap-2 px-4 py-2 text-sm leading-6 text-gray-900 w-full text-left hover:bg-[#eee] transition"
                          }
                        >
                          {" "}
                          Logout
                        </button>
                      </>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
