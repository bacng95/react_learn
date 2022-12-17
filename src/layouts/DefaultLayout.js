import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";


export default () => {
    return (
        <>
            <Navbar/>
            <main id="main">
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}