import Title from "./Components/Title/Title"
import TextBox from "./Components/TextBox/TextBox"
import data from "../upcoming-events.json"
import './App.css'

function App() {


  return (
    <>
      <Title/>
      <TextBox data={data}/>
    </>
  )
}

export default App
