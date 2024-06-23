

const Opinion = () => {
    return (
        <div>



    <img src="https://i.ibb.co/tCdTYQd/photorealistic-view-cow-getting-used-agriculture.jpg" alt="" />


     <p className=" text-4xl font-bold text-center mt-2" > কৃষি  নিয়া আপনার মতামত জানন </p>
            

       <div className=" grid lg:grid-cols-2 grid-cols-1 justify-center gap-7 items-center mt-3 mb-2" >

   <div>
    <img className=" rounded-ss-full shadow-2xl  shadow-cyan-500" src="https://i.ibb.co/qnPRdP4/portrait-young-smiling-farmer-with-freshly-picked-tomato-vegetable-standing-hothouse-garden.jpg" alt="" />
   </div>

       <div className=" lg:w-[450px] " >
       <label className="input input-bordered flex items-center gap-2 m-2">
     ইমেল 
  <input type="text" className="grow m-1" placeholder="আপনার ইমেল লিখুন" />
</label>

<label>
  <textarea type='text' placeholder="  আপনার  মতামত বলুন" className=" lg:w-[437px] w-[390px] h-32 border-2 rounded-lg border-gray-300 m-2" ></textarea>
</label>

  <input className=" btn mt-3 m-2" type="submit" value="প্রেরন করুন" />

       </div>
       </div>

        </div>
    );
};

export default Opinion;