import { format } from "date-fns";

const formatDate = (start)=>{
return format(Date.parse(start), "dd 	MMMM yyyy, hh:mm")
}


export default formatDate