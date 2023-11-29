import { BoltIcon, HomeIcon, PhotoIcon } from "@heroicons/react/24/outline";

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
    name: "Product Images",
    href: "/images",
    icon: PhotoIcon,
    current: false,
    action: "IMAGES",
    activeMenu: "/images",
  },
];
