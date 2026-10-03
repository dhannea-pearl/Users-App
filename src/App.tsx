import { Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import { HomePage } from "./pages/HomePage"

const App = () => {

  return(
    <>
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<HomePage/>} ></Route>
      </Route>
    </Routes>
    </>
    

  )
}
export default App