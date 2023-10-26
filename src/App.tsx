import { createGlobalStyle } from "styled-components"
import { createBrowserRouter, RouterProvider } from "../node_modules/react-router-dom/dist/index"
import reset from "../node_modules/styled-reset/lib/index"
import Layout from "./components/layout"
import Login from "./components/login"
import CreateAccount from "./routes/createAccount"
import Home from "./routes/home"
import Profile from "./routes/profile"

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
  const GlobalStyles = createGlobalStyle`
        ${reset};
        *{box-sizing:border-box;}
        body{
            background-color:black;
            color:white;
        }

  `
  return (
    <>
    <GlobalStyles />
    <RouterProvider router={router} />
    </>
  )
}

export default App
