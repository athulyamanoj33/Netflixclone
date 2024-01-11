import Banner from "./Components/banner/Banner"
import { Action, orginals } from "./Components/constants/Constants"
import Header from "./Components/header/Header"
import Rowpost from "./Components/rowpost/Rowpost"



function App() {
  

  return (
    <>
      <Header/>
      <Banner/>
      <Rowpost url={orginals} title='Netflix orginals'/>
      <Rowpost url={Action} title='Action'/>
    </>
  )
}

export default App
