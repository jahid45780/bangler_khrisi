import { Link } from "react-router-dom";


const Shalider = () => {
    return (
        <div>
                <div className="carousel w-full h-[600px]  ">
            {/* slide 1 */}
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/tCdTYQd/photorealistic-view-cow-getting-used-agriculture.jpg" className="w-full rounded-xl" />
    <div className="absolute flex items-center  h-full top-0 left-0  right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
         
         <div className=" text-white ml-5 space-y-6" >
            <h2 className=" text-4xl font-bold text-green-400" > একজন সফল কৃষক হতে হলে প্রথমে  <br /> মাটির প্রকৃতি বুঝতে হবে  </h2>
            <p className=" text-xl text-green-400" >মানুষ বুঝতে পারল এসব ফসলের জন্য নরম মাটি এবং পানি খুবই প্রয়োজনীয়। মানুষ চিন্তা করল মাটি নরম করার কাজটি করা সম্ভব যদি মাটি খুঁচিয়ে দেওয়ার মতো কোনো হাতিয়ার ব্যবহার করা যায়</p>
            <div>
            <button className="btn btn-primary mr-5"> <Link to='/addProduct' > পণ্য যোগ করুন </Link>  </button>
            <button className="btn btn-outline btn-secondary"> <Link to='/seeProduct' > পণ্য দেখুন </Link> </button>
            </div>
         </div>

    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle mr-5 ">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>

  </div> 
  {/* slide 2 */}
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/7V8ysCs/tractor-agricultural-machine-cultivating-field.jpg" className="w-full rounded-lg " />
    <div  className="absolute flex items-center  h-full top-0 left-0  right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] " >
       
    <div className=" text-white ml-5 space-y-6" >
            <h2 className=" text-4xl font-bold text-green-400" >  জীবন মাটির উপর নির্ভর করে, কারণ মাটি এবং  <br /> জীবন এক অপরের পরিপূরক </h2>
            <p className=" text-xl text-green-400" >মানুষ বুঝতে পারল এসব ফসলের জন্য নরম মাটি এবং পানি খুবই প্রয়োজনীয়। মানুষ চিন্তা করল মাটি নরম করার কাজটি করা সম্ভব যদি মাটি খুঁচিয়ে দেওয়ার মতো কোনো হাতিয়ার ব্যবহার করা যায়</p>
            <div>
            <button className="btn btn-primary mr-5"> <Link to='/addProduct' > পণ্য যোগ করুন </Link>  </button>
            <button className="btn btn-outline btn-secondary"> <Link to='/seeProduct' > পণ্য দেখুন </Link> </button>
            </div>
         </div>

 </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-5 ">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>

  </div> 
{/* slide 3 */}
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/rMn9twn/farm-worker-driving-tractor-spraying-green-meadow-generated-by-ai.jpg" className="w-full rounded-lg " />
    <div className="absolute flex items-center  h-full top-0 left-0  right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] " >
   
    <div className=" text-white ml-5 space-y-6" >
            <h2 className=" text-4xl font-bold text-green-400" >  মাটির প্রতি যথাযথ সম্মান না থাকলে সুস্থ ও  <br /> সুন্দর সমাজ গড়ে তোলা অসম্ভব</h2>
            <p className=" text-xl text-green-400" > মানুষ বুঝতে পারল এসব ফসলের জন্য নরম মাটি এবং পানি খুবই প্রয়োজনীয়। মানুষ চিন্তা করল মাটি নরম করার কাজটি করা সম্ভব যদি মাটি খুঁচিয়ে দেওয়ার মতো কোনো হাতিয়ার ব্যবহার করা যায় </p>
            <div>
            <button className="btn btn-primary mr-5"> <Link to='/addProduct' > পণ্য যোগ করুন </Link>  </button>
            <button className="btn btn-outline btn-secondary"> <Link to='/seeProduct' > পণ্য দেখুন </Link> </button>
            </div>
         </div>
     </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle mr-5 ">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>

{/* slide 4 */}

  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/PFzDgcS/beautiful-farmer-woman-checking-strawberry-farm.jpg" className="w-full rounded-lg" />
    <div className="absolute flex items-center  h-full top-0 left-0  right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] "  >
       
    <div className=" text-white ml-5 space-y-6" >
            <h2 className=" text-4xl font-bold text-green-400" >  যেখানে মাটি, সেখানে মানুষ জন্মায়,  <br /> আগাছা হোক বা ফুল হোক </h2>
            <p className=" text-xl text-green-400" >মানুষ বুঝতে পারল এসব ফসলের জন্য নরম মাটি এবং পানি খুবই প্রয়োজনীয়। মানুষ চিন্তা করল মাটি নরম করার কাজটি করা সম্ভব যদি মাটি খুঁচিয়ে দেওয়ার মতো কোনো হাতিয়ার ব্যবহার করা যায়</p>
            <div>
            <button className="btn btn-primary mr-5"> <Link to='/addProduct' > পণ্য যোগ করুন </Link>  </button>
            <button className="btn btn-outline btn-secondary"> <Link to='/seeProduct' > পণ্য দেখুন </Link> </button>
            </div>
         </div> 


    </div>

    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>

  </div>


  
</div>
        </div>
    );
};

export default Shalider;