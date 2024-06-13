import { PiTelevisionBold } from "react-icons/pi";
import { FaHome } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

import { BiMoviePlay } from "react-icons/bi";

export const navigation = [
  {
    label: "Home",
    href: "/",
    icon: <FaHome size={25} />
  },
  {
    label: "TV Shows",
    href: "tv",
    icon: <PiTelevisionBold size={25}/>
  },
  {
    label: "Movies",
    href: "movie",
    icon: <BiMoviePlay size={25} />
  },
  {
    label: "search",
    href: "search?q=${searcInput}",
    icon:   <FiSearch size={25} />
  },
]