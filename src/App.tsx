import { Navbar } from "./components/Navbar"
import { useUsers } from "./hooks/useUsers"
import { HomePage } from "./pages/HomePage"

const App = () => {

  return(
    <>
    <Navbar></Navbar>
    <HomePage></HomePage>
    </>
    

  )
}
export default App