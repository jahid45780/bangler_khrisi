import { Link } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { FaRegUserCircle } from "react-icons/fa";


const Navbar = () => {

  const { user, logOut } = useAuth()


  const handleLogOut = ()=>{
    logOut()
    .then(()=>{})
    toast.success(' LogOut Successfully ')
    .error(error =>{error})
}

const navLink=<>


 

 <div className=" group  flex cursor-pointer flex-col" >
     
 <Link to='/' > <li className=" text-3xl mx-2 mt-2 text-green-400" > হোম </li> </Link>
     <span className="h-[3px] w-0 rounded-full bg-green-400  transition-all duration-300 group-hover:w-full" ></span>
     </div>


     <div className=" group  flex cursor-pointer flex-col" >
     
     <Link> <li  className=" text-3xl mx-2 mt-2 text-green-400"  > মতামত </li> </Link>
     <span className="h-[3px] w-0 rounded-full bg-green-400  transition-all duration-300 group-hover:w-full" ></span>
     </div>


     <div className=" group  flex cursor-pointer flex-col" >
     
     
 <Link> <li  className=" text-3xl mx-2 mt-2  text-green-400"  > ঠিকানা </li> </Link>
         <span className="h-[3px] w-0 rounded-full bg-green-400  transition-all duration-300 group-hover:w-full" ></span>
         </div>



</>

    return (
        <div>
      <div className="navbar fixed z-10 bg-opacity-20 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content bg-opacity-40 z-30 bg-slate-400 mt-3 p-2 m-[250px] shadow  rounded-box w-32">
     
     {navLink}

      </ul>
    </div>
    <Link to='/' > <img className=" h-24 " src="https://i.ibb.co/GcL4X1D/437590520-1457297691566129-6620909893425185210-n-removebg-preview.png" alt="logo" /> </Link>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1">
    
    {navLink}

    </ul>
  </div>
  <div className="navbar-end">
          
          {
                   user ? (<div className="dropdown  dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                          <div className="w-10 rounded-full">
                            <img src={user?.photoURL} />
                          </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-orange-200 rounded-box w-60">
                          <li>
                            <a className="justify-between">
                              Profile
                              <span> <img className=" w-7 h-7 rounded-full" src={user?.photoURL} alt="" /> </span>
                            </a>
                            <p className=" text-xl p-3 " > {user?.displayName} </p>
                            <p className=" -ml-2  p-3 " > {user?.email} </p>
                           
                          </li>
                          <button onClick={ handleLogOut } className=" btn btn-secondary mr-4 " > Log Out </button>
                     
                        </ul>
                       
                      </div>)
                              
                       : (<Link to='/login' > <button> < FaRegUserCircle className=" text-5xl" /> </button> </Link>  )
                         
                    }
        
                    
             
          </div>
</div>
        </div>
    );
};

export default Navbar;