import { createGlobalStyle } from "styled-components"
import { createBrowserRouter, RouterProvider } from "../node_modules/react-router-dom/dist/index"
import { useEffect } from "react"
import Layout from "./components/layout"
import Login from "./routes/login"
import CreateAccount from "./routes/createAccount"
import Home from "./routes/home"
import Profile from "./routes/profile"
import { useState } from "react"
import LoadingScreen from "./components/loading-screen"
import { auth } from "./firebase"
import ProtectedRoute from "./components/protected-route"
import CreateTweet from "./routes/create-tweet"


function App() {
  const router = createBrowserRouter([
      {
        path:"/",
        element:<ProtectedRoute><Layout /></ProtectedRoute>,
        children:[
            {path:"",
              element:<Home />
            },
            {path:"/profile",
            element:<Profile />
            },
            {path:"/create-tweets",
            element:<CreateTweet />
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
