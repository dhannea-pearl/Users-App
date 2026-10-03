import { useUsers } from "./hooks/useUsers"

const App = () => {

  const { data, isLoading } = useUsers()
  console.log(data)

  return(
    <>
      <h1>{isLoading ? "Laddar..." : `${data?.length} användare`}</h1>
    </>

  )
}
export default App