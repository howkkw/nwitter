import { Outlet } from "../../node_modules/react-router-dom/dist/index"
import Header from "./header"


export default function Layout(){

    return(
            <>
                <Header />
                <Outlet />

            </>

    )


}