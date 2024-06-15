import { useLoaderData } from "react-router-dom";
import { MdOutlinePriceChange } from "react-icons/md";
const ProductDetail = () => {

    const singleInfo = useLoaderData()
     const {img, title, details, price} = singleInfo

    return (
        <div>

            <img  src="https://i.ibb.co/tCdTYQd/photorealistic-view-cow-getting-used-agriculture.jpg" alt="" />

             <p className=" text-center font-serif  font-bold text-xl mt-6" > 
             বাংলাদেশের গ্রামীন জনগোষ্টির সবচেয়ে বড় অংশটি কৃষির সাথে সম্পৃক্ত। কৃষি আমাদের প্রাণ। এদেশের গ্রামীন জীবনযাত্রার প্রধানতম অবলম্বন কৃষি। বাংলাদেশের অর্থনীতিতে কৃষির অবদান সবচেয়ে বেশি। মোট দেশজ উৎপাদনের কৃষি খাতের অবদান ২০ শতাংশ। শ্রম শক্তি জরিপ (২০০৫-২০০৬)অনুযায়ি বাংলাদেশের জনশক্তির প্রায় ৪৮.১ শতাংশ লোক কৃষিতে নিয়োজিত। শ্রমশক্তি বৃদ্ধির সঙ্গে সঙ্গে প্রতি বছর কৃষি মজুরের সংখ্যা প্রায় দুই শতাংশ হারে বাড়ছে| পরিসংখ্যান মোতাবেক কৃষি- বাংলাদেশের প্রধান কর্মসংস্থানের ক্ষেত্র, তাই দারিদ্রতা কমানোর জন্য কৃষির উন্নয়ন অনস্বীকার্য। কিন্তু দুঃখজনক হলেও সত্যি বিগত সময়গুলোতে আমরা কৃষি ক্ষেত্রে আশানূরূপ কোন উন্নয়ন দেখি নাই। দিন দিন দেশের কৃষি ধ্বংশের দিকে এগুচ্ছে। দেশের কৃষি খামারের সংখ্যা কমছে, একই সাথে বাড়ছে ভূমিহীন ও বর্গা চাষির সংখ্যা। বর্গাচাষির সংখ্যা বেড়ে যাওয়া দেশের কৃষি ও সামগ্রিক কৃষি অর্থনীতির উপর প্রভাব ফেলবে এবং দারিদ্রতা বাড়বে বলেই বিশেষজ্ঞদের ধারনা
             </p>

   <div className=" m-1" >
   <div className="card lg:card-side bg-base-100 shadow-xl mt-6 border-2 border-orange-400 p-2 ">
  <figure><img className=" ml-4 mb-2 rounded-r-full  w-[1200px]" src={img} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title font-extrabold"> {title} </h2>
    <p> {details} </p>
    <div className="card-actions justify-end">
      <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"> <MdOutlinePriceChange className=" text-2xl" /> {price} </button>
    </div>
  </div>
</div>
   </div>
             
        </div>
    );
};

export default ProductDetail;