import Box from "./TextBoxStyle"
import Item from "../Item/Item"
function TextBox({data}) {
    return (
      <Box>{data.map((item)=>{
            return(
              <Item key={item.name} {...item}/>
            )
          })}</Box>
    )
}

export default TextBox
