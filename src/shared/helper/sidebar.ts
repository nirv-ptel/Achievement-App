import { CubeIcon, ViewfinderCircleIcon } from "@heroicons/react/24/outline";
import { BoltIcon, BookOpenIcon, HomeIcon } from "@heroicons/react/24/outline";
export const navigation = [
  {
    name: "Dashboard",
    href: "/",
    icon: HomeIcon,
    current: true,
    action: "DASHBOARD",
    activeMenu: "/dashboard",
  },
  {
    name: "Users",
    href: "/users",
    icon: BoltIcon,
    current: false,
    action: "USERS",
    activeMenu: "/users",
  },
  {
    name: "Products",
    href: "/products",
    icon: BookOpenIcon,
    current: false,
    action: "PRODUCTS",
    activeMenu: "/products",
  },
  // {
  //   name: "Three JS",
  //   href: "/three-js",
  //   icon: CubeIcon,
  //   current: false,
  //   action: "THREEJS",
  //   activeMenu: "/three-js",
  // },
  {
    name: "Tanstack Table",
    href: "/tanstack-table",
    icon: ViewfinderCircleIcon,
    current: false,
    action: "TRAINING_LOGS",
    activeMenu: "/tanstack-table",
  },
  // {
  //   name: "PDF Downloader",
  //   href: "/pdf-download",
  //   icon: Bars3BottomLeftIcon,
  //   current: false,
  //   action: "PDF_DOWNLOADER",
  //   activeMenu: "/pdf-download",
  // },
];
