import { useState } from "react";
import { imageUpload } from "../../api/utils";
import { addProduct } from "../../api/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const AddProduct = () => {
  const navigate = useNavigate()
  const [uploadButtonText, setUploadButtonText]= useState('ছবি নির্বাচন করুন ')


  const handleSubmit = async e=>{
    e.preventDefault()
    const form = e.target
    const title = form.title.value
    const price = form.price.value
    const description = form.description.value
    const image = form.image.files[0]


    const image_url =  await imageUpload(image)

    const productData = {
       title,
      price,
      description,
      image: image_url?.data?.display_url
  }

  try{
           
    const data = await addProduct(productData)
    console.log(data);
    setUploadButtonText('Uploaded!!')
    toast.success('ধন্যবাদ আপনাকে পণ্য যোগ করার জন্য🤞❤')
    navigate('/seeProduct')
    
  } catch (err){
    toast.error(err.message)
  } 

 console.table(productData)
}
      
    // handle Image btn text
    const handleImageChange = image =>{
      setUploadButtonText(image.name)
 }
  
    

    return (
        <div>
            <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50 '>
      <form onSubmit={handleSubmit} >
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-48'>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='title' className='block text-lime-800 text-lg'>
              শিরোনাম
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='title'
                id='title'
                type='text'
                placeholder='শিরোনাম'
                required
              />
            </div>

             <div>
                <img className=" w-96 h-[330px] rounded-2xl shadow-2xl  shadow-red-500 " src="https://i.ibb.co/qnPRdP4/portrait-young-smiling-farmer-with-freshly-picked-tomato-vegetable-standing-hothouse-garden.jpg" alt="" />
             </div>


            </div>
          <div className='space-y-6'>
           

          <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                                 <label>
                   
                    <input
                    onChange={e => handleImageChange(e.target.files[0])}
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      name='image'
                      id='image'
                      accept='image/*'
                      hidden
                    />
                    <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                      {uploadButtonText}
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className='flex justify-between gap-2'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='price' className='block text-lime-800 text-lg'>
                মূল্য
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='price'
                  id='price'
                  type='number'
                  placeholder=' মূল্য'
                  required
                />
              </div>

            
            </div>

         

            <div className='space-y-1 text-sm'>
              <label htmlFor='description' className='block text-lime-800 text-lg'>
              বর্ণনা
              </label>

              <textarea
                id='description'
                className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                name='description'
              ></textarea>
            </div>
          </div>
        </div>

        <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-lg text-white transition duration-200 rounded shadow-md bg-rose-500'
        >
           আপনার জানা পণ্য যোগ করুন
        </button>
      </form>
    </div>
        </div>
    );
}

export default AddProduct;