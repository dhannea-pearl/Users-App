import { Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import { HomePage } from "./pages/HomePage"
import { UserDetailPage } from "./pages/UserDetailPage"

const App = () => {

  return(
    <>
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<HomePage/>} ></Route>
        <Route path="users/:id" element={<UserDetailPage/>} ></Route>
      </Route>
    </Routes>
    </>
    

  )
}
export default App