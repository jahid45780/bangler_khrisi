
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import './styles.css'

const carousel = (slider) => {
    const z = 300
    function rotate() {
      const deg = 360 * slider.track.details.progress
      slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
    }
    slider.on("created", () => {
      const deg = 360 / slider.slides.length
      slider.slides.forEach((element, idx) => {
        element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
      })
      rotate()
    })
    slider.on("detailsChanged", rotate)
  }
  

const JeenSlider = () => {

    const [sliderRef] = useKeenSlider(
        {
          loop: true,
          selector: ".carousel__cell",
          renderMode: "custom",
          mode: "free-snap",
        },
        [carousel]
      )
    
    return (
      <div className=" grid lg:grid-cols-2 grid-cols-1 items-center mt-16 " >


          <div> 
            
            {/* content */}
            
            <h1 className=" text-5xl font-semibold  text-center" > দৈনিক পুস্টি🍐 </h1>

            <p className=" text-xl ml-3 mt-3" >
            যে খাদ্যের মধ্যে মানবদেহের জন্য প্রয়োজনীয় সকল খাদ্য উপাদান পরিমাণমত বর্তমান থাকে, তাকেই এক কথায় সুষম খাদ্য বলা হয়। অর্থাৎ মানবদেহের প্রয়োজণীয় ও পরিমাণমত ছয়টি উপাদানযুক্ত খাবারকেই সুষম খাদ্য হিসেবে ধরা হয়। সুষম খাদ্য দেহের চাহিদা অনুযায়ী পুষ্টিসমৃদ্ধ খাবারের যোগান দেয়। এটা ব্যক্তির দেহে প্রয়োজনীয় খাদ্য উপাদানের অভাব মেটায়। তাই প্রত্যেক ব্যক্তিকে নিজের বয়স, চাহিদা ও পরিশ্রম অনুযায়ী সুষম খাদ্য গ্রহণ করতে হয়। সুষম খাদ্যের মধ্যে আমাদের দেহের প্রয়োজনীয় ছয়টি খাদ্য উপাদান যেমনঃ আমিষ, শর্করা, স্নেহ পদার্থ, খনিজ লবণ, ভিটামিন ও পানি বিদ্যমান থাকে। এ সুষম খাদ্যের মাধ্যমে দেহের ক্ষয়পূরণ, বুদ্ধিসাধন, শক্তি উৎপাদনসহ রোগ প্রতিরোধ ক্ষমতা অর্জিত হয়ে থাকে।
            </p>
            
             </div>

          <div>
          <div className="wrapper">
      <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          <div className="carousel__cell number-slide1 ">
            

            
             <img className=" h-[219px]" src="https://i.ibb.co/Yy4Gvhz/woman-holding-basket-full-different-vegetables.jpg" alt="" /> </div>
          
          
          <div className="carousel__cell number-slide2"> 
            
          <img className=" h-[219px]" src="https://i.ibb.co/GMSMM2X/close-up-green-fresh-lettuce-white-container-wooden-counter.jpg" alt="" />

             </div>
          <div className="carousel__cell number-slide3">

          <img className=" h-[219px]" src=" https://i.ibb.co/rFKc6PR/side-view-woman-taking-care-planted-tomatoes.jpg " alt="" />

          </div>
          <div className="carousel__cell number-slide4">

          <img className=" h-[219px]" src=" https://i.ibb.co/tmzrPYZ/large-set-isolated-vegetables-white-background-1.jpg " alt="" />

          </div>
          <div className="carousel__cell number-slide5">

          <img className=" h-[200px] w-96 " src=" https://i.ibb.co/FB5NVJP/138792845-5eed9000-bad4-4228-aeae-00de5dde4d86.jpg " alt="" />

          </div>
          <div className="carousel__cell number-slide6">

          <img className=" h-[200px] w-96 " src=" https://i.ibb.co/tXKThKQ/2148685402.jpg " alt="" />
                   
          </div>
        </div>
      </div>
    </div>
          </div>


      </div>
    );
};

export default JeenSlider;