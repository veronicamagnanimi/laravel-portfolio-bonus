import AppHeader from "../components/AppHeader";
import { Outlet } from "react-router-dom";

const AppLayout = () => {

    return (
        <>
        <AppHeader />
        <main>
        <Outlet />
        </main>
        </>
    )
}

export default AppLayout;