import {
  BookmarkSlashIcon,
  BookmarkSquareIcon,
} from "@heroicons/react/24/outline";
import {
  BoltIcon,
  BookOpenIcon,
  HomeIcon,
  ViewfinderCircleIcon,
} from "@heroicons/react/24/outline";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";

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
    name: "Product",
    href: "/images",
    icon: BookOpenIcon,
    current: false,
    action: "IMAGES",
    activeMenu: "/images",
  },
  // {
  //   name: "Tanstack Table",
  //   href: "/tanstack-table",
  //   icon: ViewfinderCircleIcon,
  //   current: false,
  //   action: "TRAINING_LOGS",
  //   activeMenu: "/tanstack-table",
  // },
  {
    name: "PDF Downloader",
    href: "/pdf-download",
    icon: Bars3BottomLeftIcon,
    current: false,
    action: "PDF_DOWNLOADER",
    activeMenu: "/pdf-download",
  },
];
