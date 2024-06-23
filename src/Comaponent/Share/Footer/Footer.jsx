import { CiFacebook } from "react-icons/ci";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
    return (
        <div>
            
        <footer className="footer p-11 mt-3 bg-base-200 text-base-content">
<aside>
<img className=" w-60" src="https://i.ibb.co/GcL4X1D/437590520-1457297691566129-6620909893425185210-n-removebg-preview.png" alt="" />
<p> বাংলার কৃষি <br /> জমি তৈরি এবং চারা রোপণঃ ছোট অবস্থায় সুপারি গাছ  <br /> তীব্র বাতাস এবং প্রখর সূর্যালোক সহ্য করতে পারে না <br /> কাজেই সুপারির চারা মাঠে লাগানোর পূর্বেই ছায়া প্রদানকারী গাছ রোপণ করতে </p>

<div className=" flex gap-4 items-center text-4xl" >
     <a href="https://www.facebook.com/mdjahid.hossain.16547/"> <CiFacebook/> </a>
    <a href="https://www.linkedin.com/in/md-jahid-91589a295/"> <SlSocialLinkedin/> </a>
    <a href="https://github.com/jahid45780"> <FiGithub/>  </a>
    
</div>

</aside> 
<nav>
<header className="footer-title">ফটো গ্যালারি</header> 
    <div className=" flex gap-1 -ml-7 " >
    <img className=" w-16 h-16 rounded-box" src="https://i.ibb.co/tCdTYQd/photorealistic-view-cow-getting-used-agriculture.jpg" alt="" />
    <img className=" w-16 h-16 rounded-box" src="https://i.ibb.co/7V8ysCs/tractor-agricultural-machine-cultivating-field.jpg" alt="" />
    <img className=" w-16 h-16 rounded-box" src="https://i.ibb.co/rMn9twn/farm-worker-driving-tractor-spraying-green-meadow-generated-by-ai.jpg" alt="" />
    </div>

<div  className=" flex gap-1 -ml-7 "  >

<img className=" w-16 h-16 rounded-box" src="https://i.ibb.co/PFzDgcS/beautiful-farmer-woman-checking-strawberry-farm.jpg" alt="" />
<img className=" w-16 h-16 rounded-box" src="https://i.ibb.co/1fGQbNd/middle-aged-asian-farmer-man.jpg" alt="" />
<img className=" w-16 h-16 rounded-box" src="https://i.ibb.co/Pwd4qwJ/portrait-senior-hardworking-farmer-agronomist-corn-field-checking-crops-before-harvest.jpg" alt="" />
</div>

</nav> 
<nav>

   
 

</nav> 
<nav>
<header className="footer-title">যোগাযোগ রেখো</header> 
  
<p> বাংলাদেশ এর কৃষি পণ্য সম্পকে জানতে আমাদের সাথে থাকুন  </p>

<input className=" p-4 border-2 border-red-300 " type="text" name="" id="" placeholder="আপনার ইমেইল লিখুন" />
<button className="btn">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
 পাঠান
</button>

</nav>
</footer>

    </div>
    );
};

export default Footer;