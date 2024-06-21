import GoogleMap from "./GoogleMap";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
const Address = () => {
    return (
        <div>
            <img src="https://i.ibb.co/tCdTYQd/photorealistic-view-cow-getting-used-agriculture.jpg" alt="" />
            <section>
                <p className=" text-4xl font-bold mt-3 text-center" > আমাদের ঠিকানা🚩 </p>
                
                <div className=" grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-5">
                    <div className=" m-4 " >  <GoogleMap/> </div>

                  <div className=" m-2" >
                    <h1 className=" text-6xl font-bold mt-1" > বাংলার কৃষি </h1>
                    <p className=" text-5xl font-medium mt-4" > বরিশাল, বরগুনা  </p>
                    <p className=" text-4xl font-extralight mt-4" > এ কে রোড ১২৭ রোড  </p>
                    <p className=" text-3xl font-light mt-4" > টিজি ভবন </p>
                    <p className=" flex gap-2 items-center text-lg font-bold mt-2" > <MdAttachEmail/> <a href= "mailto: jahidhossain88899@gmail.com"> jahidhossain@gmail.com</a> </p>
                    <p className=" flex gap-2 items-center text-lg font-bold mt-2" > <FaPhoneAlt/>  <a href="tel:01763943446"> 01763943446 </a>  </p>
                     
                  </div>

                </div>

            </section>
        </div>
    );
};

export default Address;

