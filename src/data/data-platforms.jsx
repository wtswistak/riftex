import { FaXbox, FaPlaystation } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsNintendoSwitch } from "react-icons/bs";

export const platforms = [
  { name: "PC", id: 4, logoId: 1, logo: <HiOutlineDesktopComputer /> },
  { name: "Xbox", id: 1, logoId: 3, logo: <FaXbox /> },
  { name: "PlayStation", id: 18, logoId: 2, logo: <FaPlaystation /> },
  { name: "Nintendo", id: 7, logoId: 7, logo: <BsNintendoSwitch /> },
];
