import { formatDistanceStrict } from "date-fns";


const formatDist = (start, end)=>{
return formatDistanceStrict(Date.parse(start),Date.parse(end))
}


export default formatDist