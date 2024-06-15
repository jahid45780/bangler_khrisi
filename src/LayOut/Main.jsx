import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Comaponent/Share/Navbar";


const Main = () => {

    const location = useLocation()
    // console.log(location);
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')

    return (
        <div>
          
            { noHeaderFooter || <Navbar></Navbar>}
         
            <Outlet></Outlet>
        </div>
    );
};

export default Main;