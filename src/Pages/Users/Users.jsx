import { useEffect, useState } from "react";
import UserCart from "./UserCart";



const Users = () => {

  const [user, setUser] = useState([])

  useEffect(()=> {
      fetch('https://bangler-khrici-server.vercel.app/users')
      .then(res=> res.json())
      .then(data=> setUser(data))
  },[])

    return (
        <div>
            <img src="https://i.ibb.co/jD3c9Tv/7966603-3796236.jpg" alt="user people" />

             <h1 className=" text-3xl text-center mt-3 font-bold"> বাংলার কৃষি এর সকল সদস্য তালিকা  </h1>

             <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ml-4 gap-2 mt-10"  >
                     
                     { user.map(userCart=> <UserCart key={userCart._id} allUser={userCart} ></UserCart> ) }

             </div>

        </div>
    );
};

export default Users;
