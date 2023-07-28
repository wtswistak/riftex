import {FaXbox,FaPlaystation} from "react-icons/fa";
import {HiOutlineDesktopComputer} from "react-icons/hi";
import ListItem from "./ListItem";

function List() {
const platforms=[
  {name:"PC",
  id:4,
  logo:<HiOutlineDesktopComputer/>,
},
{name:"Xbox One",
id:1,
logo:<FaXbox/>,},
{name:"PlayStation 4",id:18,
logo:<FaPlaystation/>,
},];

  return (
    platforms.map(platform=><ListItem key={platform.id} platform={platform}/>)
  )
}

export default List
