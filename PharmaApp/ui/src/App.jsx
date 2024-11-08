import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from "react-router-dom"
import HomePage from "./components/Home"
import LoginPage from "./components/LoginPage"
import SignupPage from "./components/SignupPage"
import CreateDrug from "./components/CreateDrug"

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path='/'element={<HomePage/>}/>
    <Route path='/login'element={<LoginPage/>}/>
    <Route path="/signup"element={<SignupPage/>}/>
    <Route path="/manufacturer"element={<CreateDrug/>}/>


      
      


    </>


  ))

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App