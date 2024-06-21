/* eslint-disable no-undef */
import { useState } from "react";
import toast from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { imageUpload } from "../../../api/utils";
import { saveUser } from "../../../api/auth";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    const {createUser, signInWithGoogle,  updateUserProfile} = useAuth()
    const navigate = useNavigate()

     const handleSubmit = async event =>{

    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    const image = form.image.files[0]
    
    try{
      // upload image
      const imageData = await imageUpload(image)
    //  user create
    const result = await createUser(email,password)
    // save user name and photo url
     await updateUserProfile(name,imageData?.data?.display_url)
    // server user data in database
    const dbResponse = await saveUser(result?.user)
    console.log(dbResponse);
    // result.user.email
    // access token 
    //  await getToken(result?.user?.email)
     navigate('/')
     toast.success(' Sign Up Successfully ')
     } 
     
     catch(err){
      toast.error(err?.message)
    
    }
  

 

 
    // const formData = new FormData()
    // formData.append('image', image)

    // try {
    //   const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=
    //   5dc64f98413f37c1e0fe3c3107bb79e8`, formData)
    //   console.log(data);
    // }catch(err){
    //   console.log(err);
    // }
   
    }


        //handle google singIn
        const handleGoogleSingIn = async ()=>{
          try{
          
             const result = await signInWithGoogle()   
          
          // server user data in database
          // const dbResponse = await saveUser(result?.user)
        
          // access token 
          //  await getToken(result?.user?.email)
           navigate('/')
           toast.success(' Sign Up Successfully ')
           } catch(err){
            toast.error(err?.message)
           }
        } 

    return (
        <div>
          
          <div className='bg-yellow-50' >

<Link to='/' > 
        <img  className=' text-center mx-auto'  width='200'
          height='100' src="https://i.ibb.co/GcL4X1D/437590520-1457297691566129-6620909893425185210-n-removebg-preview.png" alt="" />
        </Link>
        <h1 className=" text-center text-4xl " > স্বাগতম  জানাই আপনাকে বাংলার কূষিতে </h1>

     

<div className=' grid lg:grid-cols-2 md:grid-cols-1  justify-center items-center'  >

<div className=' ml-0 md:ml-32'>
      {/* work 1 */}
 <img src="https://i.ibb.co/QPhBCTq/istockphoto-removebg-preview.png" alt="logo" />
  </div>

<div className=' mt-2 flex justify-center items-center border-4 border-lime-300 border-t-0 border-e-0 border-b-0 '>
  <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10'>
    <div className='mb-8 text-center'>
      <h1 className='my-3 text-3xl font-bold text-lime-800 uppercase'>নিবন্ধন করুন এবং লগইন করুন</h1>
      
    </div>
    <form
      onSubmit={handleSubmit}
      noValidate=''
      action=''
      className='space-y-6'
    >
      <div className='space-y-4'>
        <div>
          <label htmlFor='email' className='block mb-2 text-lg text-lime-800'>
          নাম
          </label>
          <input
            type='text'
            name='নাম'
            id='name'
            placeholder='এখানে আপনার নাম লিখুন'
            className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
            data-temp-mail-org='0'
          />
        </div>
        <div>
          <label htmlFor='image' className='block mb-2 text-lg text-lime-800'>
          ছবি নির্বাচন করুন
          </label>
          <input
            required
            type='file'
            id='image'
            name='image'
            accept='image/*'
          />
        </div>
        <div>
          <label htmlFor='email' className='block mb-2 text-lg text-lime-800'>
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
            <label htmlFor='password' className='text-lg text-lime-800 mb-2'>
            পাসওয়ার্ড
            </label>
          </div>
          <input 
            type= {  showPassword ? "text" : "password"}
            name='password'
            autoComplete='new-password'
            id='password'
            required
            placeholder='পাসওয়ার্ড লিখুন'
            className='w-full px-3 py-2 border  rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
          />
          <span className=' text-2xl absolute mt-3 -ml-7 ' 
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
          নিবন্ধন করুন
        </button>
      </div>
    </form>
    <div className='flex items-center pt-4 space-x-1'>
      <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
      <p className='px-3 text-lg  text-lime-800'>
      সামাজিক অ্যাকাউন্টের সাথে নিবন্ধন করুন
      </p>
      <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
    </div>
    <div  onClick={handleGoogleSingIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-lime-400 border-rounded cursor-pointer'>
      <FcGoogle size={32} />
            
      <p className=' text-lime-800 text-md' >গুগলের সাথে চালিয়ে যান</p>
    </div>
    <p className='px-6 text-sm text-center text-lime-800'>
    ইতিমধ্যে একটি সদস্যপদ আছে?{' '}
      <Link
        to='/login'
        className='hover:underline hover:text-rose-500 text-gray-600'
      >
        প্রবেশ করুন
      </Link>
      
    </p>
  </div>
</div>

</div>

     </div>

        </div>
    );
};

export default SignUp;