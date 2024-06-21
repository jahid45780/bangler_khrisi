import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import { saveUser } from "../../../api/auth";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const {signIn,signInWithGoogle} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from.pathname || '/' 

    // form submit handler
  const handleSubmit = async event =>{

    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
  
    
    try{
    
    //  user login
    const result = await signIn(email,password)
  
    // server user data in database
    const dbResponse = await saveUser(result?.user)
    console.log(dbResponse);
    // access token 
    //  await getToken(result?.user?.email)
     navigate(from,{replace:true} )
     toast.success(' Login Successfully ')
     } catch(err){
      toast.error(err?.message)
     }
   
    }
    //handle google singIn
    const handleGoogleSingIn = async ()=>{
      try{
      
         const result = await signInWithGoogle()   
      
      // server user data in database
      const dbResponse = await saveUser(result?.user)
    
      // access token 
      //  await getToken(result?.user?.email)
       navigate(from, {replace:true})
       toast.success(' Login Successfully ')
       } catch(err){
        toast.error(err?.message)
       }
    } 


    return (
        <div className=" bg-yellow-50" >
              
              <Link to='/' > <img className=" h-24  text-center mx-auto " src="https://i.ibb.co/GcL4X1D/437590520-1457297691566129-6620909893425185210-n-removebg-preview.png" alt="logo" /> </Link>
              
              <h1 className=" text-center text-4xl " > স্বাগতম  জানাই আপনাকে বাংলার কূষিতে </h1>


              <div className=' grid lg:grid-cols-2 md:grid-cols-1  justify-center items-center' >
      
      <div className=' ml-0 md:ml-24'>
          {/* work 1 */}
      
  
  <img src="https://i.ibb.co/QPhBCTq/istockphoto-removebg-preview.png" alt="logo" />
      </div>
  
       {/* work 2 */}
       <div className=' mt-2 border-4 border-lime-300 border-t-0 border-e-0 border-b-0'>
        <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 '>
          <div className='mb-8 text-center'>
            <h1 className='my-3 text-4xl text-lime-800 uppercase font-bold'>প্রবেশ করুন</h1>
            <p className='text-lg text-lime-800'>
            আপনার অ্যাকাউন্ট অ্যাক্সেস করতে সাইন ইন করুন
            </p>
          </div>
          <form 
            noValidate=''
            action=''
            className='space-y-6'
            onSubmit={handleSubmit}
          >
            <div className='space-y-4'>
              <div>
                <label htmlFor='email' className='block mb-2 text-lime-800 text-lg'>
                ইমেইল ঠিকানা
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  required
                  placeholder='এখানে আপনার ইমেল ঠিকানা লিখুন'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                  data-temp-mail-org='0'
                />
              </div>
              <div>
                <div className='flex justify-between'>
                  <label htmlFor='password' className='text-lime-800 text-lg mb-2'>
                  পাসওয়ার্ড
                  </label>
                </div>
                <input
                  type= {  showPassword ? "text" : "password"}
                  name='password'
                  autoComplete='current-password'
                  id='password'
                  required
                  placeholder='পাসওয়ার্ড লিখুন এখানে'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                />
                 <span className=' text-2xl absolute mt-3 -ml-7' 
                onClick={() => setShowPassword(!showPassword) } >
                  {
                     
                      showPassword ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>
                     
                  }
                </span>
              </div>
            </div>
  
            <div>
            <button
                type='submit'
                className='bg-rose-500 w-full rounded-md py-3 text-white'
              >
                 প্রবেশ করুন
              </button>
            </div>
          </form>
          <div className='space-y-1'>
            <button className='text-xs hover:underline hover:text-rose-500 text-gray-400'>
            পাসওয়ার্ড ভুলে গেছেন?
            </button>
          </div>
          <div className='flex items-center pt-4 space-x-1'>
            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
            <p className='px-3  text-lime-800 text-lg'>
            সামাজিক অ্যাকাউন্ট দিয়ে লগইন করুন
            </p>
            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          </div>
          <div  onClick={handleGoogleSingIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-lime-400 border-rounded cursor-pointer'>
            <FcGoogle size={32} />
              
            <p className='text-lime-800 text-md' >গুগলের সাথে চালিয়ে যান</p>
          </div>
          <p className='px-6  text-center text-lime-800 text-md'>
          কোনো একাউন্ট এখনও আছে না?{' '}
            <Link
              to='/signup'
              className='hover:underline hover:text-rose-500 text-gray-600'
            >
              নিবন্ধন করুন
            </Link>
            
          </p>
        </div>
      </div>
  
      </div>


        </div>
    );
};

export default Login;