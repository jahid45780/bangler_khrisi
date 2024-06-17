import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";



const Service = () => {
         
    const [product, setProduct]= useState([])
     useEffect(()=>{
         fetch('http://localhost:5000/all_Product')
         .then(res=> res.json())
         .then(data=> setProduct(data))
         
        
    },[])

 

    return (
        <div>
           
           <h1 className=" text-5xl font-bold mt-9 text-center" > আমাদের পণ্য🍏 </h1>

              <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ml-4 gap-2 mt-10" >
                {
             product.map(cardProduct=> <ProductCard key={cardProduct._id} product={cardProduct} ></ProductCard> )
                }
              </div>

        </div>
    );
};

export default Service;