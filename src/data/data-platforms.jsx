import { FaXbox, FaPlaystation } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsNintendoSwitch } from "react-icons/bs";

export const platforms = [
  { name: "PC", id: 1, active: false, logo: <HiOutlineDesktopComputer /> },
  { name: "Xbox", id: 3, active: false, logo: <FaXbox /> },
  { name: "PlayStation", id: 2, active: false, logo: <FaPlaystation /> },
  { name: "Nintendo", id: 7, active: false, logo: <BsNintendoSwitch /> },
];
