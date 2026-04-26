import style from "./Item.module.css"
import { FaLocationDot,FaPerson,FaClock } from "react-icons/fa6"
import { FaCalendarAlt } from "react-icons/fa"
import { RiVipCrown2Fill } from "react-icons/ri";
import formatDate from "../utils/formatDate"
import formatDist from "../utils/formatDist";
function Item({name, location, speaker,type, time:{start, end}}) {
    
    return (
      <li key={name} className={style.item}>
        <p className={style.title}>{name}</p>
        <ul>

          <li className={style.stem}><FaLocationDot/> {location}</li>
          <li className={style.stem}><FaPerson/> {speaker}</li>
          <li className={style.stem}><RiVipCrown2Fill/> {type}</li>

          {/* time */}
          <li className={style.stem}><FaCalendarAlt/> {formatDate(start)}</li>
          <li className={style.stem}><FaClock/> {formatDist(start,end)}</li>
        </ul>
        
      </li>
    )
}

export default Item
