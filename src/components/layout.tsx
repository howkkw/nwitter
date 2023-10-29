import { Outlet } from "../../node_modules/react-router-dom/dist/index"


export default function Layout(){

    return(
            <>
                <h2 className="text-3xl">Layout</h2>
                <Outlet />

            </>

    )


}