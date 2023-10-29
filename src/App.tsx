import { createGlobalStyle } from "styled-components"
import { createBrowserRouter, RouterProvider } from "../node_modules/react-router-dom/dist/index"
import { useEffect } from "react"
import Layout from "./components/layout"
import Login from "./components/login"
import CreateAccount from "./routes/createAccount"
import Home from "./routes/home"
import Profile from "./routes/profile"
import { useState } from "react"
import LoadingScreen from "./components/loading-screen"
import { auth } from "./firebase"


function App() {
  const router = createBrowserRouter([
      {
        path:"/",
        element:<Layout />,
        children:[
            {path:"",
              element:<Home />
            },
            {path:"/profile",
            element:<Profile />
            }

        ],   
      },
      {
        path:"/login",
        element:<Login />,
      },
      {
        path:"/create",
        element:<CreateAccount/>
      }

        ])
  const [isLoading, setIsLoading] = useState(true)
  const init = async() => {
    await auth.authStateReady();
    setIsLoading(false)
    

  }
  useEffect(() => {
    init()
  }, [])
  return (
    <>
    {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    
    </>
  )
}

export default App
